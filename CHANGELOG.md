# Changelog

All notable changes to this project are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) — versioning follows [Semantic Versioning](https://semver.org/).

---

## UserScripts

---

### Secret Message 💌 — `userscripts/google/google-secret-message.user.js`

#### [1.2.0]
- Added `alwaysShow` toggle — shows card on every Google search regardless of keywords
- Added `custom` type with 25+ multilingual keywords
- Per-type animated shape outlines: heart, star, hexagon, flower, paw, lemniscate
- Full i18n for type/shape/language dropdowns (live re-translation on language change)
- Suggestion labels now translated (no hardcoded English)
- Photo style independent per context: card vs surprise page
- Paw geometry redesigned and ASCII-verified

#### [1.1.0]
- Settings panel: language, type, names, message, button, counter label, photo, since
- 27-language UI with auto browser detection
- 6 relationship types: love, friendship, family, parents, pets, custom
- Per-type accent colour, icon and particle animation
- Surprise page with animated counter and photo support
- Replaced google-love-message (full superset)

#### [1.0.0]
- Initial release

---

### IMDb — Ad/Pro Cleaner — `userscripts/imdb/imdb-adpro-cleaner.user.js`

#### [1.4.2]
- Current stable release
- CSS-first blocking with DOM fallback
- Safe zones to protect credit accordions

#### [1.0.0]
- Initial release — ad/sponsored content removal for IMDb

---

### Torrenting — Show Posters — `userscripts/torrenting/torrenting-show-posters.user.js`

#### [2.0.0]
- Current stable release
- Same-origin fetch for poster images
- MutationObserver for dynamic content
- Fallback visual when no poster available

---

## UserStyles

---

### IMDb — Catppuccin Mocha — `userstyles/imdb/imdb-catppuccin-mocha.user.css`

#### [2.8]
- Current stable release
- Full Catppuccin Mocha theme for IMDb
- CSS custom properties for all colour tokens
- Accessible focus styles

---

### UserStyles.world — Catppuccin — `userstyles/userstyles-world/userstyles-world-catppuccin.user.css`

#### [1.1.1]
- Current stable release
- Catppuccin theme for UserStyles.world
- Less preprocessor with full token system
- Covers inputs, buttons, focus states
