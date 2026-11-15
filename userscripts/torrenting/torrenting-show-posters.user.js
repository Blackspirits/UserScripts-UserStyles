// ==UserScript==
// @name         Torrenting — Show torrent posters
// @namespace    blackspirits.github.io/
// @version      2.4.2
// @description  Adds one poster per torrent row on Torrenting.org and Torrenting.com listings, with cached, rate-limited same-origin requests and a fallback image.
// @author       BlackSpirits
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torrenting.org
// @homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
// @supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
// @downloadURL  https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/torrenting/torrenting-show-posters.user.js
// @updateURL    https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/torrenting/torrenting-show-posters.user.js
// @match        *://*.torrenting.com/featured.php*
// @match        *://*.torrenting.com/browse.php*
// @match        *://*.torrenting.com/requests.php*
// @match        *://*.torrenting.com/t*
// @match        *://*.torrenting.com/torrent.php*
// @match        *://*.torrenting.org/featured.php*
// @match        *://*.torrenting.org/browse.php*
// @match        *://*.torrenting.org/requests.php*
// @match        *://*.torrenting.org/t*
// @match        *://*.torrenting.org/torrent.php*
// @exclude      *://*.torrenting.com/movies*
// @exclude      *://*.torrenting.com/tv*
// @exclude      *://*.torrenting.org/movies*
// @exclude      *://*.torrenting.org/tv*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const POSTER_CLASS = 'capa-torrent';
  const POSTER_SELECTOR = 'img.' + POSTER_CLASS;
  const MAX_CONCURRENT_REQUESTS = 4;
  const LINK_SELECTOR = 'a[href*="details.php"], a[href*="torrent.php"], a[href^="/t/"], a[href^="t/"]';
  const ROW_SELECTOR = 'tr, li, article, .torrent-row, .torrent-item, .torrent-card';
  const EMPTY_IMAGE = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 80 120">' +
    '<rect width="80" height="120" rx="8" fill="#eef2f7" stroke="#d7dce3"/>' +
    '<rect x="12" y="26" width="56" height="56" rx="6" fill="#d9dee7" stroke="#c9cfda"/>' +
    '<circle cx="28" cy="42" r="6" fill="#9aa3b2"/>' +
    '<path d="M16 76 36 52 48 64 60 56 68 76Z" fill="#9aa3b2"/></svg>'
  );

  // id -> Promise<string|null>. A resolved null means "page loaded, no poster" and stays cached.
  // Network/HTTP failures are evicted so a later run can retry.
  const posterRequests = new Map();
  const pendingRows = new WeakSet();

  // Small FIFO limiter: a listing has ~35 rows; firing them all at once is unnecessary load on the tracker.
  let activeRequests = 0;
  const requestQueue = [];
  function limited(task) {
    return new Promise((resolve, reject) => {
      requestQueue.push({ task, resolve, reject });
      pumpQueue();
    });
  }
  function pumpQueue() {
    while (activeRequests < MAX_CONCURRENT_REQUESTS && requestQueue.length) {
      const { task, resolve, reject } = requestQueue.shift();
      activeRequests++;
      Promise.resolve()
        .then(task)
        .then(resolve, reject)
        .finally(() => { activeRequests--; pumpQueue(); });
    }
  }

  function parseDetailsLink(href) {
    if (!href) return null;
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin || !['http:', 'https:'].includes(url.protocol)) return null;
      const path = url.pathname;
      let id = null;
      let primary;
      if (/\/(?:details|torrent)\.php$/i.test(path)) {
        id = url.searchParams.get('id');
        primary = !url.hash && [...url.searchParams.keys()].every(key => key === 'id');
      } else {
        const match = path.match(/^\/t\/(\d+)(?:[-/].*)?$/i);
        id = match && match[1];
        primary = !url.hash && !url.search;
      }
      if (!id || !/^\d+$/.test(id)) return null;
      // "primary" = the plain details link (title), not ?bookmark / ?page=0#startcomments helpers.
      return { id, url: url.href, primary };
    } catch {
      return null;
    }
  }

  function normaliseImageSrc(src, pageUrl) {
    if (!src || /^(?:data:|blob:|javascript:)/i.test(src.trim())) return null;
    try {
      const url = new URL(src.trim(), pageUrl);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  function extractPosterSrc(html, pageUrl) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const posters = doc.querySelectorAll('img.poster, .poster img, img[alt*="poster" i]');
    for (const img of posters) {
      for (const attr of ['data-src', 'data-original', 'src']) {
        const src = normaliseImageSrc(img.getAttribute(attr), pageUrl);
        if (src) return src;
      }
    }
    return null;
  }

  function fetchPoster(details) {
    if (posterRequests.has(details.id)) return posterRequests.get(details.id);
    const outcome = limited(async () => {
      try {
        const response = await fetch(details.url, { credentials: 'same-origin' });
        if (!response.ok || new URL(response.url || details.url).origin !== location.origin) {
          return { src: null, retry: true };
        }
        return { src: extractPosterSrc(await response.text(), details.url), retry: false };
      } catch {
        return { src: null, retry: true };
      }
    });
    const promise = outcome.then(result => {
      if (result.retry && posterRequests.get(details.id) === promise) posterRequests.delete(details.id);
      return result.src;
    });
    posterRequests.set(details.id, promise);
    return promise;
  }

  // One entry per row; prefer the plain title link over helper links that share the same ID.
  function collectRows() {
    const rows = new Map();
    document.querySelectorAll(LINK_SELECTOR).forEach(link => {
      const details = parseDetailsLink(link.getAttribute('href'));
      if (!details) return;
      const row = link.closest(ROW_SELECTOR);
      if (!row) return;
      const current = rows.get(row);
      if (!current || (details.primary && !current.details.primary)) rows.set(row, { link, details });
    });
    return rows;
  }

  function targetFor(row, link) {
    if (row.tagName === 'TR') {
      return row.querySelector('td.t_label') || link.closest('td') || row.querySelector('td');
    }
    return row.querySelector('.torrent-title, .torrent-name, .title') || link.parentElement;
  }

  function insertAfterCategoryIcon(target, img) {
    const category = target.querySelector('a > img:not(.' + POSTER_CLASS + '), img:not(.' + POSTER_CLASS + ')');
    const anchor = category && category.closest('a');
    if (anchor && anchor.parentNode === target) target.insertBefore(img, anchor.nextSibling);
    else if (category && category.parentNode === target) target.insertBefore(img, category.nextSibling);
    else target.insertBefore(img, target.firstChild);
  }

  async function insertPoster(row, details, target) {
    if (pendingRows.has(row) || row.querySelector(POSTER_SELECTOR)) return;
    pendingRows.add(row);
    try {
      const src = await fetchPoster(details);
      if (!row.isConnected || !target.isConnected || row.querySelector(POSTER_SELECTOR)) return;
      const img = document.createElement('img');
      img.className = POSTER_CLASS;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';
      img.src = src || EMPTY_IMAGE;
      img.addEventListener('error', () => { img.src = EMPTY_IMAGE; }, { once: true });
      insertAfterCategoryIcon(target, img);
    } finally {
      pendingRows.delete(row);
    }
  }

  function run() {
    collectRows().forEach(({ link, details }, row) => {
      const target = targetFor(row, link);
      if (target) insertPoster(row, details, target);
    });
  }

  function start() {
    if (!document.body) return;
    const style = document.createElement('style');
    style.textContent = `
      img.${POSTER_CLASS} {
        width: 80px; height: 120px; object-fit: cover;
        border: 1px solid #ccc; border-radius: 8px;
        margin: 2px 6px; vertical-align: middle;
        display: inline-block; overflow: hidden;
      }
      tr.torrentsTableTr td, tr.torrentsTableTR td { vertical-align: middle; }
      /* Current /t layout (table.t1): take the poster out of the flow and let the cell's own
         vertical-align centre the title block; the poster is centred independently. */
      table.t1 td:has(> img.${POSTER_CLASS}) {
        position: relative; height: 136px; vertical-align: middle;
        padding: 0 0 0 94px !important;
      }
      table.t1 td > img.${POSTER_CLASS} {
        position: absolute; left: 4px; top: 50%; transform: translateY(-50%); margin: 0;
      }
    `;
    (document.head || document.documentElement).appendChild(style);

    let timer = null;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(run, 250);
    };
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('popstate', schedule);
    window.addEventListener('pageshow', schedule);
    run();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
