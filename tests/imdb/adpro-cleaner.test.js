'use strict';
// Regression tests for userscripts/imdb/imdb-adpro-cleaner.user.js (jsdom, simulated DOM).
// Run: npm install && npm test
// Fixtures mirror markup observed on imdb.com (2026-11-15). Passing here does not prove live behaviour.
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');
const F = require('./adpro-cleaner.fixtures');

const SCRIPT = path.resolve(__dirname, '../../userscripts/imdb/imdb-adpro-cleaner.user.js');
const SOURCE = fs.readFileSync(SCRIPT, 'utf8');

function load(html, url) {
    const dom = new JSDOM(html, { url, runScripts: 'outside-only', pretendToBeVisual: true });
    const w = dom.window;
    const nativePush = w.history.pushState;
    let removed = 0;
    new w.MutationObserver(list => { for (const m of list) removed += m.removedNodes.length; })
        .observe(w.document.documentElement, { childList: true, subtree: true });
    w.eval(SOURCE);
    return { w, d: w.document, nativePush, removed: () => removed };
}

// Hidden = display:none on the element or an ancestor.
function hidden(w, el) {
    assert.ok(el, 'fixture element missing');
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
        if (w.getComputedStyle(n).display === 'none') return true;
    }
    return false;
}

const tests = [];
const test = (name, fn) => tests.push({ name, fn });

const name = () => load(F.namePage, 'https://www.imdb.com/name/nm0000151/');
const title = () => load(F.titlePage, 'https://www.imdb.com/title/tt0111161/');
const $ = (d, s) => d.querySelector(s);

// --- legitimate content stays visible (regression for 1.5.0 removing page sections) ---
test('keeps filmography accordion and credits', () => {
    const { w, d } = name();
    for (const el of [$(d, '.ipc-accordion__item'), ...d.querySelectorAll('li.ipc-metadata-list-summary-item')]) assert.ok(!hidden(w, el));
});
test('keeps sidebar Editorial lists, User lists and User polls', () => {
    const { w, d } = name();
    for (const t of ['DynamicFeature_EditorialLists', 'DynamicFeature_UserLists', 'SidebarPolls']) assert.ok(!hidden(w, $(d, `[data-testid="${t}"]`)), t);
});
test('keeps text that merely mentions "IMDbPro" or "Sponsored"', () => {
    const { w, d } = name();
    assert.ok(!hidden(w, $(d, '#bio')));
    const t = title();
    assert.ok(!hidden(t.w, $(t.d, '#review')));
});
test('keeps In development content and the Born row', () => {
    const { w, d } = name();
    assert.ok(!hidden(w, $(d, '[data-testid="projectsInDevelopment-section"] a[href^="/title/"]')));
    assert.ok(!hidden(w, $(d, '#born-row')));
});
test('keeps cast, full credits link, budget and the "thought-provoking" chip', () => {
    const { w, d } = title();
    for (const s of ['a[href="/name/nm0000209/"]', 'a[href$="/fullcredits/"]', '#budget', '[data-testid="theme-chip-thought-provoking"]']) assert.ok(!hidden(w, $(d, s)), s);
});
test('a row mixing IMDbPro and regular links keeps the regular link visible', () => {
    const { w, d } = name();
    assert.ok(!hidden(w, $(d, '#mixed-row')), 'metadata row hidden');
    assert.ok(!hidden(w, $(d, '#mixed-inline')), 'inline item hidden');
    assert.ok(!hidden(w, $(d, '#mixed-legit')), 'regular link hidden');
    assert.ok(hidden(w, $(d, '#mixed-inline a[href*="pro.imdb.com"]')), 'IMDbPro link inside mixed row still visible');
});

// --- promotional elements are hidden ---
test('hides ad slots, sponsored label, adhesion bar, inline20 background and pixel', () => {
    const { w, d } = name();
    for (const s of ['#inline40_responsive_wrapper', '#inline40_sponsored', '#sis_pixel_sitewide']) assert.ok(hidden(w, $(d, s)), s);
    const t = title();
    for (const s of ['#provider_promotion_responsive_wrapper', '#bg-ad', '#adhesion']) assert.ok(hidden(t.w, $(t.d, s)), s);
});
test('hides IMDbPro navbar, subnav link, chip, upsells and widget', () => {
    const { w, d } = name();
    for (const s of ['.navbar__imdbpro', '[data-testid="hero-subnav-bar-imdb-pro-link"]', '#name-filmography-pro-chip', '[data-testid="nm_flmg_in_dev_pro_upsell"]', '[data-testid="imdb-pro-sidebar-widget"]']) assert.ok(hidden(w, $(d, s)), s);
    const t = title();
    for (const tid of ['hero-proupsell', 'title-cast-styling-proupsell', 'title-boxoffice-proupsell']) assert.ok(hidden(t.w, $(t.d, `[data-testid="${tid}"]`)), tid);
});
test('hides a row that only holds IMDbPro links', () => {
    const { w, d } = name();
    assert.ok(hidden(w, $(d, '#pro-row')));
});

// --- non-invasive behaviour ---
test('never removes nodes, patches history or defines ad globals', () => {
    for (const l of [name(), title()]) {
        assert.strictEqual(l.removed(), 0);
        assert.strictEqual(l.w.history.pushState, l.nativePush);
        assert.strictEqual(l.w.doWithAds, undefined);
        assert.strictEqual(l.w.ad_utils, undefined);
    }
});
test('is idempotent and applies to content added later', () => {
    const { w, d } = title();
    w.eval(SOURCE);
    assert.strictEqual(d.querySelectorAll('#imdb-adpro-cleaner').length, 1);
    const ad = d.createElement('div'); ad.className = 'slot_wrapper'; d.body.appendChild(ad);
    const legit = d.createElement('section'); legit.textContent = 'Sponsored IMDbPro in legit content'; d.body.appendChild(legit);
    assert.ok(hidden(w, ad));
    assert.ok(!hidden(w, legit));
});
test('every selector is valid on its own', () => {
    const { d } = title();
    const sheet = d.getElementById('imdb-adpro-cleaner').textContent;
    const selectors = sheet.replace(/\{[^}]*\}/g, ',').split(',').map(s => s.trim()).filter(Boolean);
    assert.ok(selectors.length >= 17);
    for (const s of selectors) assert.doesNotThrow(() => d.querySelector(s), s);
});
test('keeps the published identity and update metadata', () => {
    const meta = k => [...SOURCE.matchAll(new RegExp(`^// @${k}\\s+(.*)$`, 'gm'))].map(m => m[1].trim());
    assert.deepStrictEqual(meta('name'), ['IMDb — Ad/Pro Cleaner']);
    assert.deepStrictEqual(meta('namespace'), ['blackspirits.github.io/']);
    assert.deepStrictEqual(meta('match'), ['*://*.imdb.com/*']);
    assert.ok(meta('updateURL')[0].startsWith('https://update.greasyfork.org/scripts/545323/'));
    const [maj, min] = meta('version')[0].split('.').map(Number);
    assert.ok(maj > 1 || (maj === 1 && min >= 6), 'version must be newer than 1.5.0');
});

let failed = 0;
for (const { name: n, fn } of tests) {
    try { fn(); console.log(`PASS  ${n}`); } catch (e) { failed++; console.log(`FAIL  ${n}\n      ${e.message}`); }
}
console.log(`\n${tests.length - failed}/${tests.length} passed`);
process.exit(failed ? 1 : 0);
