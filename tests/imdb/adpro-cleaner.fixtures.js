'use strict';
// Fixtures modelled on live imdb.com markup observed on 2026-11-15 (classes, data-testids and nesting
// copied from captured parent chains; text shortened). SIMULATION ONLY — not proof of live behaviour.

// Name page: hero with IMDbPro links, filmography accordion, sidebar with a sponsored ad slot next to
// legitimate "Editorial lists" / "User lists" / "User polls" sections (these were removed by 1.5.0 live).
const namePage = `<!doctype html><html><head></head><body>
<nav id="imdbHeader"><div class="ipc-page-content-container navbar__inner">
  <div class="navbar__imdbpro"><div class="navbar__imdbpro-content"><a class="ipc-btn" href="https://pro.imdb.com/login">IMDbPro</a></div></div>
  <a href="/" id="home_img">IMDb</a>
</div></nav>
<section class="ipc-page-background ipc-page-background--base" id="page">
 <section data-testid="hero-parent" class="ipc-page-section">
  <h1>Morgan Freeman</h1>
  <div data-testid="hero-subnav-bar-right-block"><div><a data-testid="hero-subnav-bar-imdb-pro-link" class="ipc-link" href="https://pro.imdb.com/name/nm0000151/">IMDbPro</a></div></div>
  <ul class="ipc-metadata-list">
   <li class="ipc-metadata-list__item" id="pro-row"><a class="ipc-metadata-list-item__label ipc-metadata-list-item__label--link" href="https://pro.imdb.com/name/nm0000151/">More at IMDbPro</a>
     <div><ul class="ipc-inline-list"><li class="ipc-inline-list__item"><a href="https://pro.imdb.com/name/nm0000151/contacts">Contact info</a></li></ul></div></li>
   <li class="ipc-metadata-list__item" id="mixed-row"><a class="ipc-metadata-list-item__label ipc-metadata-list-item__label--link" href="https://pro.imdb.com/name/nm0000151/">More at IMDbPro</a>
     <div><ul class="ipc-inline-list"><li class="ipc-inline-list__item" id="mixed-inline"><a href="https://pro.imdb.com/name/nm0000151/contacts">Contact info</a> <a href="/name/nm0000151/bio/" id="mixed-legit">Biography</a></li></ul></div></li>
   <li class="ipc-metadata-list__item" id="born-row"><span class="ipc-metadata-list-item__label">Born</span><div>June 1, 1937</div></li>
  </ul>
  <p id="bio">He narrated a documentary about IMDbPro and was Sponsored by nobody.</p>
 </section>
 <div class="ipc-page-grid ipc-page-grid--bias-left">
  <div class="main">
   <section data-testid="Filmography">
    <a id="name-filmography-pro-chip" class="ipc-chip" href="https://pro.imdb.com/name/nm0000151/filmmaker"><span class="ipc-chip__text">IMDbPro</span></a>
    <div class="ipc-accordion">
     <div class="ipc-accordion__item"><div class="ipc-accordion__item__header">Previous 152</div>
      <div class="ipc-accordion__item__content"><ul>
       <li class="ipc-metadata-list-summary-item"><a href="/title/tt0114369/">Se7en</a></li>
       <li class="ipc-metadata-list-summary-item"><a href="/title/tt0097239/">Driving Miss Daisy</a></li>
      </ul></div></div>
    </div>
    <div data-testid="nm_flmg_in_dev_pro_upsell"><a class="ipc-metadata-list-item__label" href="https://pro.imdb.com/name/nm0000151/indev">In-development projects at IMDbPro</a></div>
   </section>
   <section data-testid="projectsInDevelopment-section"><div data-testid="projectsInDevelopment-title"><h3>In development</h3><div class="ipc-title__description">Get more at IMDbPro</div></div><ul><li><a href="/title/tt9999999/">Upcoming project</a></li></ul></section>
  </div>
  <div class="sidebar" data-testid="sidebar-sticky-block">
   <div id="inline40_responsive_wrapper" class="slot_wrapper inline40-responsive-sidebar"><iframe id="inline40" title="ad"></iframe><span id="inline40_sponsored" class="sponsored_label">Sponsored</span></div>
   <section data-testid="DynamicFeature_EditorialLists"><h3>Editorial lists</h3><a href="/list/ls1/">IMDb Home School</a></section>
   <section data-testid="DynamicFeature_UserLists"><h3>User lists</h3><a href="/list/ls2/">FAV ACTORS</a></section>
   <section data-testid="SidebarPolls"><h3>User polls</h3><a href="/poll/p1/">Desert island</a></section>
   <section data-testid="imdb-pro-sidebar-widget"><h4 class="ipc-title__text">Add demo reel with IMDbPro</h4><a href="https://pro.imdb.com/demo">Add</a></section>
  </div>
 </div>
</section>
<iframe id="sis_pixel_sitewide"></iframe>
</body></html>`;

// Title page: Pro upsells next to legitimate content, a theme chip whose testid contains "pro"
// ("thought-provoking"), and box office data.
const titlePage = `<!doctype html><html><head></head><body>
<section class="ipc-page-background">
 <div class="ipc-metadata-list-item__content-container">
  <div data-testid="hero-proupsell"><a href="https://pro.imdb.com/title/tt0111161/">See production info at IMDbPro</a></div>
  <a href="/title/tt0111161/fullcredits/">All cast &amp; crew</a>
 </div>
 <div data-testid="interests"><a data-testid="theme-chip-thought-provoking" class="ipc-chip" href="/interest/x/">Thought-provoking</a></div>
 <ul class="ipc-metadata-list" data-testid="title-cast">
  <li class="ipc-metadata-list__item"><a href="/name/nm0000209/">Tim Robbins</a></li>
  <li data-testid="title-cast-styling-proupsell" class="ipc-metadata-list__item"><a href="https://pro.imdb.com/title/tt0111161/">Production, box office &amp; more at IMDbPro</a></li>
 </ul>
 <section data-testid="BoxOffice"><div id="budget">Budget $25,000,000</div>
  <div data-testid="title-boxoffice-proupsell"><a href="https://pro.imdb.com/title/tt0111161/boxoffice">See detailed box office info on IMDbPro</a></div></section>
 <div id="provider_promotion_responsive_wrapper" class="slot_wrapper nas-spacing"><span class="sponsored_label">Sponsored</span></div>
 <div class="ipc-html-content" id="review">This review mentions Sponsored content and IMDbPro but is a normal user review.</div>
 <div class="inline20-page-background" id="bg-ad"></div>
 <div class="DesktopAdhesionAdSlot_shell__2Z9Nh" aria-label="Bottom Sponsored Advertisement" id="adhesion"><div class="DesktopAdhesionAdSlot_shellBackground__iMDP4"></div><button class="ipc-icon-button DesktopAdhesionAdSlot_close__x" aria-label="Close advertisement"></button></div>
</section></body></html>`;

module.exports = { namePage, titlePage };
