# Changelog

All notable changes to this project are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## Google — Secret Message

### v1.2.0
- Per-type animated shape outlines: heart (love), star (friendship), hexagon (family), flower (parents), paw (pets), infinity (custom)
- Settings panel via Tampermonkey/Violentmonkey menu — no code editing required
- Multilingual suggestions for all 6 types inside the settings panel
- `alwaysShow` toggle — show card on every Google search regardless of keywords
- Photo shape selector — circle, square, rounded, portrait (independently for card and surprise page)
- Type/shape/language dropdown options translate live when language is changed
- 29 languages fully supported in UI strings and suggestions
- Replaces `google-love-message` (removed from repo)

### v1.1.0
- 6 built-in types: love, friendship, family, parents, pets, custom
- Per-type accent colour, icon, particles, and keyword sets
- 191 Google country domains
- Auto dark/light mode detection

### v1.0.0
- Initial release

---

## IMDb — Catppuccin Mocha Theme

### v2.8
- Minor palette refinements and selector updates

### v2.7
- Completed dark-mode coverage for Contribution & Help pages
- Improved metadata contrast

### v2.6
- Refined Full Credits layout
- Improved Filmography accordions

### v2.5
- Unified menu backgrounds
- Refined hover and focus states

### v2.0
- Major refresh with Catppuccin Mocha palette

---

## UserStyles.world — Catppuccin Theme

### v1.x
- Full support for Latte, Frappé, Macchiato, Mocha variants
- Unified cards, headers, and navigation styling

---

## IMDb — Ad & IMDbPro Cleaner

### v1.5.0
- Replaced broad `querySelectorAll('a, button, span, div')` and `querySelectorAll('div, section, article, li')` with a lightweight `TreeWalker`-based scan
- Monkey-patched `history.pushState` and `history.replaceState` to dispatch a real `locationchange` event — replaced dead `pushstate`/`replacestate` listeners
- Bumped to v1.5.0

### v1.x
- Removes ads, IMDbPro upsell banners, and layout noise
- Safe-zone protection for credit accordions
- Throttled requestAnimationFrame for minimal performance impact

---

## Torrenting.com — Auto Posters

### v2.1.0
- Added `Map`-based poster cache keyed by torrent ID — no re-fetch on repeated MutationObserver cycles
- `MutationObserver` callback now debounced (250 ms) instead of firing `run()` on every mutation
- Replaced generic `a.b` selector with explicit `a[href*="details.php?id="]` / `a[href*="torrent.php?id="]`
- Moved inline `td` styles to the injected `<style>` block

### v1.x
- Displays posters in torrent listings
- SVG placeholder for missing posters
- Lazy loading and async decoding
