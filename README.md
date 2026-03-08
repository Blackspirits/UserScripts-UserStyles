<a id="top"></a>

<!-- Hero/banner -->
<p align="center">
  <a href="https://github.com/BlackSpirits/UserScripts-UserStyles/stargazers" rel="noopener noreferrer">
    <picture>
      <source srcset="./assets/readme-hero.svg" type="image/svg+xml" />
      <img src="./assets/readme-hero.webp" alt="BlackSpirits — UserScripts & UserStyles banner" width="100%">
    </picture>
  </a>
</p>

<!-- Status badges -->
<p align="center">
  <a href="https://github.com/BlackSpirits/UserScripts-UserStyles/stargazers" rel="noopener noreferrer">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/BlackSpirits/UserScripts-UserStyles?label=Stars&style=flat-square&labelColor=313244&color=cba6f7&logo=github&logoColor=cdd6f4"></a>
  <a href="https://github.com/BlackSpirits/UserScripts-UserStyles/issues" rel="noopener noreferrer">
    <img alt="Open issues" src="https://img.shields.io/github/issues/BlackSpirits/UserScripts-UserStyles?label=Issues&style=flat-square&labelColor=313244&color=f9e2af&logo=github&logoColor=cdd6f4"></a>
  <a href="https://github.com/BlackSpirits/UserScripts-UserStyles/commits/main" rel="noopener noreferrer">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/BlackSpirits/UserScripts-UserStyles?label=Last%20commit&style=flat-square&labelColor=313244&color=94e2d5&logo=github&logoColor=cdd6f4"></a>
  <a href="./LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-a6e3a1?style=flat-square&labelColor=313244&logo=readthedocs&logoColor=cdd6f4"></a>
  <a href="https://github.com/BlackSpirits" rel="noopener noreferrer">
    <img alt="Open Source" src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4%EF%B8%8F-f2cdcd?style=flat-square&labelColor=313244&logo=opensourceinitiative&logoColor=cba6f7"></a>
</p>

<!-- Donation badges -->
<p align="center">
  <a href="https://donate.stripe.com/00w14peB0gBx1tBeOz3Nm00">
    <img alt="Stripe" src="https://img.shields.io/badge/Stripe-635bff?style=for-the-badge&logo=stripe&logoColor=white"></a>
  <a href="https://www.paypal.com/paypalme/filipemota" rel="noopener noreferrer">
    <img alt="PayPal" src="https://img.shields.io/badge/PayPal-003087?style=for-the-badge&logo=paypal&logoColor=white"></a>
  <a href="https://ko-fi.com/blackspirits" rel="noopener noreferrer">
    <img alt="Ko-fi" src="https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white"></a>
  <a href="https://buymeacoffee.com/blackspirits28" rel="noopener noreferrer">
    <img alt="Buy Me a Coffee" src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black"></a>
  <a href="mailto:blackspirits@gmail.com">
    <img alt="Email" src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
</p>

<p align="center">
  <b>Modern UserScripts and UserStyles focused on aesthetics, privacy, automation, and UX.
  Catppuccin-based themes, cleanup scripts, and interface enhancements for IMDb, UserStyles.world, Torrenting.com, and more.
</p>

<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 📚 Table of Contents

- [Available Scripts & Styles](#-available-scripts--styles)
- [IMDb — Catppuccin Mocha Theme](#-imdb--catppuccin-mocha-theme)
- [UserStyles.world — Catppuccin Theme](#-userstylesworld--catppuccin-theme)
- [IMDb — Ad & IMDbPro Cleaner](#-imdb--ad--imdbpro-cleaner)
- [Torrenting.com — Auto Posters](#-torrentingcom--auto-posters)
- [Installation](#-installation)
- [Browser support](#-browser-support)
- [Screenshots](#️-screenshots)
- [Contributing & Feedback](#️-contributing--feedback)
- [Support the project](#-support-the-project)
- [License](#-license)

<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 📂 Available Scripts & Styles

| Name | Type | Description | Install |
|------|------|-------------|---------|
| **IMDb — Catppuccin Mocha Theme** | UserStyle | Elegant dark theme for IMDb using the Catppuccin Mocha palette. | [![Install](https://img.shields.io/badge/Install-UserStyle-cba6f7?style=flat-square&labelColor=313244)](https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userstyles/imdb/imdb-catppuccin-mocha.user.css) |
| **UserStyles.world — Catppuccin Theme** | UserStyle | Catppuccin theme for UserStyles.world with full layout and contrast refinements. | [![Install](https://img.shields.io/badge/Install-UserStyle-cba6f7?style=flat-square&labelColor=313244)](https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userstyles/userstyles-world/userstyles-world-catppuccin.user.css) |
| **IMDb — Ad & IMDbPro Cleaner** | UserScript | Removes IMDb ads, IMDbPro upsell panels, and layout clutter. | [![Install](https://img.shields.io/badge/Install-UserScript-fab387?style=flat-square&labelColor=313244)](https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/imdb/imdb-adpro-cleaner.user.js) |
| **Torrenting.com — Auto Posters** | UserScript | Displays posters in torrent listings with an optimised layout. | [![Install](https://img.shields.io/badge/Install-UserScript-fab387?style=flat-square&labelColor=313244)](https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/torrenting/torrenting-show-posters.user.js) |

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## ✨ IMDb — Catppuccin Mocha Theme

Full dark theme for IMDb built on the **Catppuccin Mocha** palette.

**Features**
- Catppuccin Mocha palette applied across all IMDb pages
- Transparent **hero rating bar** with unified hover and border-radius
- Styled header flyouts (User / Language) and **autosuggest dropdown**
- **Awards** highlights and consistent subnav spacing
- Unified link styling for "Cast & crew", "Company credits", "All topics" — peach with lavender hover
- **Full Credits**: single container with soft dividers; actor names in mauve, character names in peach
- **Filmography accordions**: transparent headers with a single bottom divider
- Icon and ribbon contrast fixed for dark backgrounds

**Support**  
Bug reports and feature requests → [GitHub Issues](https://github.com/BlackSpirits/UserScripts-UserStyles/issues)

<details>
  <summary><b>Changelog (latest: v2.7)</b></summary>
  <br>
  <ul>
    <li><b>v2.7</b> — Completed dark-mode coverage for Contribution & Help pages; improved metadata contrast.</li>
    <li><b>v2.6</b> — Refined Full Credits layout; improved Filmography accordions.</li>
    <li><b>v2.5</b> — Unified menu backgrounds; refined hover and focus states.</li>
    <li><b>v2.0</b> — Major refresh with Catppuccin Mocha palette.</li>
  </ul>
  <p><sub>Full detailed changelog: <a href="https://userstyles.world/style/23644/imdb-catppuccin-mocha-theme">UserStyles.world</a></sub></p>
</details>

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## ✨ UserStyles.world — Catppuccin Theme

**Features**
- Supports all Catppuccin variants: Latte, Frappé, Macchiato, Mocha
- Unified cards, headers, and navigation styling
- Improved contrast and spacing for listings and metadata
- Consistent hover and focus states throughout

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🧹 IMDb — Ad & IMDbPro Cleaner

Removes ads, IMDbPro upsell banners, and layout noise from IMDb without breaking existing functionality.

**Features**
- Blocks ads and sponsored content (EN + PT variants)
- Strips IMDbPro upsell panels and prompts
- Safe-zone protection for credit accordions
- Throttled `requestAnimationFrame` for minimal performance impact

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🎬 Torrenting.com — Auto Posters

Displays movie and series posters directly in torrent listings on Torrenting.com.

**Features**
- Supports all page types: featured, browse, requests, torrent details
- SVG placeholder for missing posters
- Lazy loading and async decoding for performance
- Same-origin fetch — no external requests

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🔧 Installation

### UserScripts (.user.js)
1. Install a manager: [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Click **Install** in the table above and confirm in the manager dialog.

### UserStyles (.user.css)
1. Install [Stylus](https://add0n.com/stylus.html).
2. Click **Install** in the table above and enable the style.

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🧭 Browser Support

| Browser | UserScripts | UserStyles |
|---------|-------------|------------|
| Chrome  | ✔️ Tampermonkey / Violentmonkey | ✔️ Stylus |
| Firefox | ✔️ Works | ✔️ Works |
| Edge    | ✔️ Works | ✔️ Works |
| Safari  | 🧪 Not tested | 🧪 Not tested |

<sub>Legend: ✔️ works · ⚠️ partial · 🧪 not tested · ✖️ no support<br>
Not affiliated with IMDb, Amazon, or Torrenting.com. Trademarks belong to their respective owners.</sub>

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🖼️ Screenshots

### IMDb — Catppuccin Mocha Theme

<details>
  <summary>Before / After</summary>

| Before | After |
|--------|-------|
| <img src="./assets/imdb-default.webp" alt="IMDb default theme" width="600" loading="lazy"> | <img src="./assets/imdb-catppuccin.webp" alt="IMDb Catppuccin Mocha theme" width="600" loading="lazy"> |

</details>

### UserStyles.world — Catppuccin Theme

<details>
  <summary>Before / After</summary>

| Default | Catppuccin (Latte · Frappé · Macchiato · Mocha) |
|---------|--------------------------------------------------|
| <img src="./assets/userstyles-default.png" alt="UserStyles.world default theme" width="600" loading="lazy"> | <img src="./assets/userstyles-catppuccin.png" alt="UserStyles.world Catppuccin theme" width="600" loading="lazy"> |

</details>

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🗒️ Releases & Changelog

See **[Releases](https://github.com/BlackSpirits/UserScripts-UserStyles/releases)** for full change logs or browse [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 🛠️ Contributing & Feedback

- Found a bug or have a suggestion? Open an [issue](https://github.com/BlackSpirits/UserScripts-UserStyles/issues).
- Want to improve a script or add a new one? Read the [Contributing Guide](./CONTRIBUTING.md) and send a pull request.

<p align="right"><a href="#top">↑ Back to top</a></p>
<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## ☕ Support the project

If this saves you time or makes your browsing better, a coffee is always appreciated.

<p align="center">
  <a href="https://donate.stripe.com/00w14peB0gBx1tBeOz3Nm00">
    <img alt="Stripe" src="https://img.shields.io/badge/Stripe-635bff?style=for-the-badge&logo=stripe&logoColor=white"></a>
  <a href="https://www.paypal.com/paypalme/filipemota" rel="noopener noreferrer">
    <img alt="PayPal" src="https://img.shields.io/badge/PayPal-003087?style=for-the-badge&logo=paypal&logoColor=white"></a>
  <a href="https://ko-fi.com/blackspirits" rel="noopener noreferrer">
    <img alt="Ko-fi" src="https://img.shields.io/badge/Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white"></a>
  <a href="https://buymeacoffee.com/blackspirits28" rel="noopener noreferrer">
    <img alt="Buy Me a Coffee" src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black"></a>
  <a href="mailto:blackspirits@gmail.com">
    <img alt="Email" src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
</p>

<img src="./assets/divider.svg" alt="" aria-hidden="true" width="100%">

## 📜 License

Released under the [MIT License](./LICENSE).  
© 2025–2026 [BlackSpirits](https://github.com/BlackSpirits).

<p align="right"><a href="#top">↑ Back to top</a></p>
