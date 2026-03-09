// ==UserScript==
// @name         Torrenting — Show torrent posters
// @namespace    blackspirits.github.io/
// @version      2.0.0
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

  // Thumbnail styles
  const style = document.createElement('style');
  style.textContent = `
    img.capa-torrent{
      width:80px!important;height:120px!important;object-fit:cover!important;
      border:1px solid #ccc!important;border-radius:8px!important;
      margin-block:2px!important;display:inline-block!important;overflow:hidden!important
    }
    tr.torrentsTableTr td, tr.torrentsTableTR td{vertical-align:middle!important}
    td.capa-cell{display:inline-flex!important;align-items:center!important;gap:6px!important}
  `;
  document.head.appendChild(style);

  const posterCache = new Map(); // id → src string (or EMPTY_IMAGE sentinel)
  const ABS   = (href)=>new URL(href, location.origin).href;
  const getId = (href)=> (href.match(/(?:details|torrent)\.php\?id=(\d+)/i)||[])[1]||null;

  // Empty-image SVG (photo icon), 8px radius
  const EMPTY_IMAGE = 'data:image/svg+xml;utf8,'+encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 80 120">
       <rect width="80" height="120" rx="8" fill="#eef2f7" stroke="#d7dce3"/>
       <rect x="12" y="26" width="56" height="56" rx="6" fill="#d9dee7" stroke="#c9cfda"/>
       <circle cx="28" cy="42" r="6" fill="#9aa3b2"/>
       <path d="M16 76 L36 52 L48 64 L60 56 L68 76 Z" fill="#9aa3b2"/>
     </svg>`
  );

  const extractPosterSrc = (html)=>{
    const m = html.match(/<img[^>]*class=["'][^"']*\bposter\b[^"']*["'][^>]*\ssrc=["']([^"']+)["']/i);
    if (m) return m[1];
    try{
      const doc = new DOMParser().parseFromString(html,'text/html');
      const el = doc.querySelector('img.poster')||doc.querySelector('.poster img')||doc.querySelector('img[alt*="poster" i]');
      return el?.src||null;
    }catch{return null;}
  };

  async function fetchPosterSrc(detailsHref){
    try{
      const res = await fetch(ABS(detailsHref), {credentials:'include'});
      if(!res.ok) return null;
      const html = await res.text();
      return extractPosterSrc(html);
    }catch{return null;}
  }

  // Insert right after the category icon in the first cell
  function insertAfterCategoryIcon(td, img){
    const iconImg = td.querySelector('a > img:not(.capa-torrent)') || td.querySelector('img:not(.capa-torrent)');
    const anchor  = iconImg ? iconImg.closest('a') : null;
    if (anchor && anchor.parentNode === td) td.insertBefore(img, anchor.nextSibling);
    else if (iconImg && iconImg.parentNode === td) td.insertBefore(img, iconImg.nextSibling);
    else td.insertBefore(img, td.firstChild);
  }

  async function insertPoster(detailsHref, tdLabel){
    const id = getId(detailsHref);
    if(!id || !tdLabel || tdLabel.querySelector('img.capa-torrent')) return;
    if(posterCache.has(id)){
      const cachedSrc = posterCache.get(id);
      if(cachedSrc === null) return; // already tried, no poster
      const img = buildImg(cachedSrc);
      tdLabel.classList.add('capa-cell');
      insertAfterCategoryIcon(tdLabel, img);
      return;
    }
    posterCache.set(id, null); // mark as in-flight / attempted

    const src = await fetchPosterSrc(detailsHref);
    if(!document.body.contains(tdLabel)) return;
    const finalSrc = src || EMPTY_IMAGE;
    posterCache.set(id, finalSrc);

    const img = buildImg(finalSrc);
    tdLabel.classList.add('capa-cell');
    insertAfterCategoryIcon(tdLabel, img);
  }

  function buildImg(src){
    const img = document.createElement('img');
    img.className = 'capa-torrent';
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.src = src;
    img.onerror = ()=>{ img.src = EMPTY_IMAGE; };
    return img;
  }

  const findDetailsLink = (root) =>
    root.querySelector('a[href*="details.php?id="], a[href*="torrent.php?id="]');

  const path = location.pathname;

  function handleFeatured(){
    document.querySelectorAll('tr').forEach(row=>{
      const link = row.querySelector('a[href^="/details.php?id="], a[href^="details.php?id="], a[href^="/torrent.php?id="], a[href^="torrent.php?id="]');
      if(!link) return;
      const tdLabel = row.querySelector('td.t_label') || row.querySelector('td:first-child') || row.querySelector('td');
      if(tdLabel) insertPoster(link.getAttribute('href'), tdLabel);
    });
  }

  function handleBrowse(){
    document.querySelectorAll('tr.torrentsTableTR, tr.torrentsTableTr').forEach(row=>{
      const link = findDetailsLink(row); if(!link) return;
      const tdLabel = row.querySelector('td.t_label') || row.querySelector('td:first-child');
      if(tdLabel) insertPoster(link.getAttribute('href'), tdLabel);
    });
  }

  function handleRequests(){
    document.querySelectorAll('tr, li').forEach(row=>{
      const link = findDetailsLink(row); if(!link) return;
      const tdLabel = row.querySelector('td.t_label') || row.querySelector('td:first-child') || link.closest('td');
      if(tdLabel) insertPoster(link.getAttribute('href'), tdLabel);
    });
  }

  function handleTpages(){
    document.querySelectorAll('tr.torrentsTableTR, tr.torrentsTableTr').forEach(row=>{
      const link = findDetailsLink(row); if(!link) return;
      const tdLabel = row.querySelector('td.t_label') || row.querySelector('td:first-child');
      if(tdLabel) insertPoster(link.getAttribute('href'), tdLabel);
    });
  }

  function run(){
    if(path.includes('/featured.php')) return handleFeatured();
    if(path.includes('/browse.php'))   return handleBrowse();
    if(path.includes('/requests.php')) return handleRequests();
    if(path.startsWith('/t') || path.startsWith('/torrent.php')) return handleTpages();
  }

  run();
  let debounceTimer = 0;
  new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(run, 300);
  }).observe(document.body, { subtree: true, childList: true });
})();
