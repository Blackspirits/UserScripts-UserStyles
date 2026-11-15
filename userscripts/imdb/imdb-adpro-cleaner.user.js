// ==UserScript==
// @name         IMDb — Ad/Pro Cleaner
// @namespace    blackspirits.github.io/
// @version      1.6.0
// @description  Hide IMDb ad slots, sponsored labels and IMDbPro upsells with CSS only. Never removes page content.
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

/*
 * Design (1.6.0): hide, never remove.
 * IMDb is a React/Next.js app. Removing nodes it renders breaks hydration and drops legitimate
 * content (observed with 1.5.0: full filmography 733 -> 91 rows). A stylesheet applies to content
 * added later (client-side navigation, lazy sections) on its own, so no MutationObserver, no text
 * matching and no changes to page globals or history are needed.
 * Every selector below was observed on live imdb.com pages on 2026-11-15.
 */
(() => {
    'use strict';

    const STYLE_ID = 'imdb-adpro-cleaner';

    const HIDE = [
        // Ad slots: IMDb's ad framework wraps every slot in .slot_wrapper
        // (#inline20/40/50/60/80/bottom, #provider_promotion, #adhesion_bottom ..._responsive_wrapper).
        '.slot_wrapper',
        // Fixed 100px bottom bar ("Bottom Sponsored Advertisement" + close button) that wraps the
        // adhesion slot; CSS-module class, so match the stable name prefix.
        '[class*="AdhesionAdSlot_shell__"]',
        '.sponsored_label',
        '.inline20-page-background',
        'iframe[id^="sis_pixel"]',

        // IMDbPro: every link to pro.imdb.com, plus wrappers that contain nothing else.
        'a[href*="pro.imdb.com" i]',
        '.navbar__imdbpro',
        '[data-testid="hero-subnav-bar-imdb-pro-link"]',
        '[data-testid="hero-proupsell"]',
        '[data-testid="title-cast-styling-proupsell"]',
        '[data-testid="title-boxoffice-proupsell"]',
        '[data-testid="nm_flmg_in_dev_pro_upsell"]',
        '[data-testid="imdb-pro-sidebar-widget"]',
        '[data-testid="imdb-pro-sidebar-widget-m"]',
        '#name-filmography-pro-chip',
    ];

    // Rows that only exist to hold an IMDbPro link (e.g. "More at IMDbPro" + contact/agent links).
    // Kept in a separate rule: a browser without :has() drops only this rule, not the one above.
    const HIDE_HAS = [
        'li.ipc-metadata-list__item:has(> a.ipc-metadata-list-item__label[href*="pro.imdb.com" i])',
        'li.ipc-inline-list__item:has(> a[href*="pro.imdb.com" i])',
    ];

    const rule = list => `${list.join(',\n')} { display: none !important; }`;
    const css = `${rule(HIDE)}\n${rule(HIDE_HAS)}`;

    const install = () => {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = css;
        // documentElement exists at document-start; <head> may not yet.
        (document.head || document.documentElement).appendChild(style);
    };

    install();
})();
