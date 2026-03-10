// ==UserScript==
// @name         Torrenting — Show torrent posters
// @namespace    blackspirits.github.io/
// @version      2.1.0
// @description  Shows posters in listings (browse/featured/requests and /t*). Inserts poster right after the category icon in the first cell; supports details.php and torrent.php; same-origin fetch; rounded corners; empty-image fallback; no extra permissions.
// @author       BlackSpirits
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torrenting.com
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

(function () {
    'use strict';

    // ── Styles ────────────────────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        img.capa-torrent {
            width: 80px; height: 120px; object-fit: cover;
            border: 1px solid #ccc; border-radius: 8px;
            margin-block: 2px; display: inline-block; overflow: hidden;
        }
        tr.torrentsTableTr td,
        tr.torrentsTableTR td { vertical-align: middle; }
        td.t_label { display: inline-flex; align-items: center; gap: 6px; }
    `;
    document.head.appendChild(style);

    // ── Poster cache (by torrent ID) ──────────────────────────────────────────────
    // Avoids re-fetching the same torrent on MutationObserver cycles
    const posterCache = new Map();   // id → src string | null
    const injected    = new Set();   // "host|id" already inserted into DOM

    const ABS   = href => new URL(href, location.origin).href;
    const getId = href => (href.match(/(?:details|torrent)\.php\?id=(\d+)/i) || [])[1] || null;

    const EMPTY_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 80 120">
           <rect width="80" height="120" rx="8" fill="#eef2f7" stroke="#d7dce3"/>
           <rect x="12" y="26" width="56" height="56" rx="6" fill="#d9dee7" stroke="#c9cfda"/>
           <circle cx="28" cy="42" r="6" fill="#9aa3b2"/>
           <path d="M16 76 L36 52 L48 64 L60 56 L68 76 Z" fill="#9aa3b2"/>
         </svg>`
    );

    const extractPosterSrc = html => {
        const m = html.match(/<img[^>]*class=["'][^"']*\bposter\b[^"']*["'][^>]*\ssrc=["']([^"']+)["']/i);
        if (m) return m[1];
        try {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const el  = doc.querySelector('img.poster') ||
                        doc.querySelector('.poster img') ||
                        doc.querySelector('img[alt*="poster" i]');
            return el?.src || null;
        } catch { return null; }
    };

    const fetchPosterSrc = async (id, detailsHref) => {
        if (posterCache.has(id)) return posterCache.get(id);
        try {
            const res = await fetch(ABS(detailsHref), { credentials: 'include' });
            const src = res.ok ? extractPosterSrc(await res.text()) : null;
            posterCache.set(id, src);
            return src;
        } catch {
            posterCache.set(id, null);
            return null;
        }
    };

    const insertAfterCategoryIcon = (td, img) => {
        const iconImg = td.querySelector('a > img:not(.capa-torrent)') ||
                        td.querySelector('img:not(.capa-torrent)');
        const anchor  = iconImg ? iconImg.closest('a') : null;
        if (anchor && anchor.parentNode === td)       td.insertBefore(img, anchor.nextSibling);
        else if (iconImg && iconImg.parentNode === td) td.insertBefore(img, iconImg.nextSibling);
        else                                           td.insertBefore(img, td.firstChild);
    };

    async function insertPoster(detailsHref, tdLabel) {
        const id = getId(detailsHref);
        if (!id || !tdLabel) return;

        const key = `${location.host}|${id}`;
        if (injected.has(key) || tdLabel.querySelector('img.capa-torrent')) return;
        injected.add(key);

        const src = await fetchPosterSrc(id, detailsHref);
        if (!document.body.contains(tdLabel)) return;

        const img = document.createElement('img');
        img.className       = 'capa-torrent';
        img.alt             = '';
        img.loading         = 'lazy';
        img.decoding        = 'async';
        img.referrerPolicy  = 'no-referrer';
        img.src             = src || EMPTY_SVG;
        img.onerror         = () => { img.src = EMPTY_SVG; };

        insertAfterCategoryIcon(tdLabel, img);
    }

    // ── Row handlers ──────────────────────────────────────────────────────────────
    const DETAILS_SEL = 'a[href*="details.php?id="], a[href*="torrent.php?id="]';

    const processRow = row => {
        const link = row.querySelector(DETAILS_SEL);
        if (!link) return;
        const tdLabel = row.querySelector('td.t_label') ||
                        row.querySelector('td:first-child') ||
                        link.closest('td') ||
                        row.querySelector('td');
        if (tdLabel) insertPoster(link.getAttribute('href'), tdLabel);
    };

    function run() {
        const path = location.pathname;
        if (path.includes('/featured.php') || path.includes('/requests.php')) {
            document.querySelectorAll('tr, li').forEach(processRow);
        } else {
            // browse, /t*, torrent.php — use specific row selector
            document.querySelectorAll('tr.torrentsTableTR, tr.torrentsTableTr').forEach(processRow);
        }
    }

    // ── MutationObserver with debounce ────────────────────────────────────────────
    let debounceTimer = null;
    const observer = new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(run, 250);
    });
    observer.observe(document.body, { subtree: true, childList: true });

    run();
})();
