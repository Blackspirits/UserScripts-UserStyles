// ==UserScript==
// @name         IMDb — Ad/Pro Cleaner
// @namespace    blackspirits.github.io/
// @version      1.5.0
// @description  Block ads/sponsored and strip IMDbPro UI without touching credit accordions.
// @author       BlackSpirits
// @license      MIT
// @homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
// @supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imdb.com
// @match        *://*.imdb.com/*
// @run-at       document-start
// @noframes
// @grant        none
// @downloadURL  https://update.greasyfork.org/scripts/545323/IMDb%20%E2%80%94%20AdPro%20Cleaner.user.js
// @updateURL    https://update.greasyfork.org/scripts/545323/IMDb%20%E2%80%94%20AdPro%20Cleaner.meta.js
// ==/UserScript==

(function () {
    'use strict';

    // ── Disable ad functions early ────────────────────────────────────────────────
    const disableAds = () => {
        const w = window, noop = () => {};
        try { Object.defineProperty(w, 'doWithAds', { configurable: true, writable: true, value: noop }); } catch {}
        w.ad_utils = w.ad_utils || {};
        for (const k of [
            'makeAdSlotsCall', 'set_slots_on_page', 'ads_header', 'apsAuctionManager',
            'update_ad_details', 'set_partner',
            'set_aax_instrumentation_pixel_url', 'set_aax_impression_pixel_url',
            'set_paets_loaded_pixel_url', 'inject_serverside_ad'
        ]) {
            const v = (k === 'ads_header') ? { done: noop }
                    : (k === 'apsAuctionManager') ? { block3PForMediaviewerBanner: noop }
                    : noop;
            try { w.ad_utils[k] = w.ad_utils[k] || v; } catch {}
        }
    };
    disableAds();
    addEventListener('DOMContentLoaded', disableAds, { once: true });

    // ── Monkey-patch history for SPA navigation ───────────────────────────────────
    const _push    = history.pushState.bind(history);
    const _replace = history.replaceState.bind(history);
    history.pushState = function (...args) {
        _push(...args);
        window.dispatchEvent(new Event('locationchange'));
    };
    history.replaceState = function (...args) {
        _replace(...args);
        window.dispatchEvent(new Event('locationchange'));
    };

    const rm = n => { try { n.remove(); } catch {} };

    // ── Safe zones (credit accordions) ────────────────────────────────────────────
    const SAFE_ZONE_SEL = '.date-unrel-credits-accordion, .date-credits-accordion, .ipc-accordion__item, .ipc-accordion';
    const inSafeZone = el => !!el.closest?.(SAFE_ZONE_SEL);

    const removeBlockContainer = (el) => {
        if (inSafeZone(el)) return false;
        let cur = el;
        for (let i = 0; i < 6 && cur; i++) {
            if (cur.matches?.(SAFE_ZONE_SEL)) return false;
            if (cur.matches?.('.ipc-list-card, .ipc-poster-card, .ipc-metadata-list, section, article, div, li')) {
                rm(cur);
                return true;
            }
            cur = cur.parentElement;
        }
        return false;
    };

    const neutralizeLink = (a) => {
        const span = document.createElement('span');
        span.className = a.className || '';
        span.textContent = a.textContent || a.innerText || '';
        a.replaceWith(span);
    };

    // ── TreeWalker for text-based matching (replaces broad querySelectorAll) ──────
    const IMDBPRO_RE   = /\bIMDbPro\b/i;
    const SPONSORED_RE = /\b(Sponsored|Patrocinado)\b/i;

    const walkTextNodes = (root, pattern, callback) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode(node) {
                if (inSafeZone(node)) return NodeFilter.FILTER_REJECT;
                if (node.childElementCount > 4) return NodeFilter.FILTER_SKIP;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const hits = [];
        while (walker.nextNode()) {
            const el = walker.currentNode;
            const txt = (el.innerText || el.textContent || '').trim();
            if (txt && pattern.test(txt)) hits.push(el);
        }
        hits.forEach(callback);
    };

    // ── Main cleanup ──────────────────────────────────────────────────────────────
    const stripAdsAndPro = () => {
        document.querySelectorAll('#name-filmography-pro-chip, a.ipc-chip[href*="pro.imdb.com" i]').forEach(rm);

        document.querySelectorAll([
            '.imdbpro-banner',
            '#nav-right-top-pro',
        ].join(',')).forEach(n => { if (!inSafeZone(n)) rm(n); });

        document.querySelectorAll([
            'iframe[id^="ape_inline"]',
            'iframe[data-arid]',
            '.rendered_ad_tweening',
            '.ad_fadein',
            '.sponsored_label',
            '#sis_pixel_r2',
            '[id^="inline20"],[id^="inline40"],[id^="inline50"],[id^="inline60"],[id^="inline80"],[id^="inlinebottom"]',
            '[id^="provider_promotion"],[id^="promoted_watch_bar"]',
            '.inline20-page-background',
            '[data-testid*="sponsored" i]',
            '[data-testid*="adv" i]',
            '[class*="sponsor" i]',
            '[aria-label*="Sponsored" i]',
            '[aria-label*="Patrocinado" i]',
        ].join(',')).forEach(n => { if (!inSafeZone(n)) rm(n); });

        document.querySelectorAll([
            '[class*="ProBadge" i]',
            '[class*="imdbpro" i]',
            'img[alt*="IMDbPro" i]',
            '[aria-label*="IMDbPro" i]',
        ].join(',')).forEach(n => { if (!inSafeZone(n)) rm(n); });

        document.querySelectorAll('a[href*="pro.imdb.com" i]').forEach(a => {
            if (a.closest('li.ipc-metadata-list-summary-item') || inSafeZone(a)) {
                neutralizeLink(a);
            } else {
                if (!removeBlockContainer(a)) rm(a);
            }
        });

        const root = document.body;
        if (!root) return;

        walkTextNodes(root, IMDBPRO_RE, el => {
            if (inSafeZone(el) || el.closest('li.ipc-metadata-list-summary-item')) {
                if (el.tagName === 'A') neutralizeLink(el);
            } else {
                if (!removeBlockContainer(el)) rm(el);
            }
        });

        walkTextNodes(root, SPONSORED_RE, el => {
            if (!inSafeZone(el)) {
                if (!removeBlockContainer(el)) rm(el);
            }
        });

        document.querySelectorAll('.fixed-wrap').forEach(n => n.classList.remove('fixed-wrap'));
    };

    // ── Hard CSS ──────────────────────────────────────────────────────────────────
    const addHardCSS = () => {
        if (document.querySelector('style[data-imdb-cleaner]')) return;
        const css = `
            [data-testid*="sponsored" i],
            [class*="sponsor" i],
            [aria-label*="Sponsored" i],
            [aria-label*="Patrocinado" i] { display:none !important; }

            .imdbpro-banner,
            #nav-right-top-pro,
            #nav-right-top-pro + .bar,
            [class*="imdbpro" i],
            [class*="ProBadge" i],
            img[alt*="IMDbPro" i],
            [aria-label*="IMDbPro" i],
            #name-filmography-pro-chip,
            a.ipc-chip[href*="pro.imdb.com" i] { display:none !important; }

            .ipc-accordion__item,
            .ipc-accordion__item__header,
            .ipc-accordion__item__label,
            .ipc-accordion__item__content,
            ${SAFE_ZONE_SEL} { display: revert !important; visibility: visible !important; }
        `;
        const style = document.createElement('style');
        style.setAttribute('data-imdb-cleaner', 'true');
        style.textContent = css;
        document.documentElement.appendChild(style);
    };

    // ── Boot ──────────────────────────────────────────────────────────────────────
    addHardCSS();

    let rafId = 0;
    const onMut = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => { rafId = 0; stripAdsAndPro(); addHardCSS(); });
    };
    const mo = new MutationObserver(onMut);
    mo.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('popstate',       stripAdsAndPro, { passive: true });
    window.addEventListener('locationchange', stripAdsAndPro, { passive: true });

    stripAdsAndPro();
})();
