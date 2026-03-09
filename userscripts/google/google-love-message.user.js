// ==UserScript==
// @name         Google Love Message 💖
// @namespace    https://github.com/BlackSpirits
// @version      3.3.0
// @description  Shows a beautiful love card on Google search results + opens an animated surprise page. Fully customisable — just edit the CONFIG block. Supports EN, PT, FR, ES, IT, DE, NL, PL, JA, KO, ZH.
// @author       BlackSpirits
// @license      MIT
// @homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
// @supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
// @match        *://www.google.com/search*
// @match        *://www.google.ac/search*
// @match        *://www.google.ad/search*
// @match        *://www.google.ae/search*
// @match        *://www.google.com.af/search*
// @match        *://www.google.com.ag/search*
// @match        *://www.google.com.ai/search*
// @match        *://www.google.al/search*
// @match        *://www.google.am/search*
// @match        *://www.google.co.ao/search*
// @match        *://www.google.com.ar/search*
// @match        *://www.google.as/search*
// @match        *://www.google.at/search*
// @match        *://www.google.com.au/search*
// @match        *://www.google.az/search*
// @match        *://www.google.ba/search*
// @match        *://www.google.com.bd/search*
// @match        *://www.google.be/search*
// @match        *://www.google.bf/search*
// @match        *://www.google.bg/search*
// @match        *://www.google.com.bh/search*
// @match        *://www.google.bi/search*
// @match        *://www.google.bj/search*
// @match        *://www.google.com.bn/search*
// @match        *://www.google.com.bo/search*
// @match        *://www.google.com.br/search*
// @match        *://www.google.bs/search*
// @match        *://www.google.bt/search*
// @match        *://www.google.co.bw/search*
// @match        *://www.google.by/search*
// @match        *://www.google.com.bz/search*
// @match        *://www.google.ca/search*
// @match        *://www.google.cd/search*
// @match        *://www.google.cf/search*
// @match        *://www.google.cg/search*
// @match        *://www.google.ch/search*
// @match        *://www.google.ci/search*
// @match        *://www.google.co.ck/search*
// @match        *://www.google.cl/search*
// @match        *://www.google.cm/search*
// @match        *://www.google.cn/search*
// @match        *://www.google.com.co/search*
// @match        *://www.google.co.cr/search*
// @match        *://www.google.com.cu/search*
// @match        *://www.google.cv/search*
// @match        *://www.google.com.cy/search*
// @match        *://www.google.cz/search*
// @match        *://www.google.de/search*
// @match        *://www.google.dj/search*
// @match        *://www.google.dk/search*
// @match        *://www.google.dm/search*
// @match        *://www.google.com.do/search*
// @match        *://www.google.dz/search*
// @match        *://www.google.com.ec/search*
// @match        *://www.google.ee/search*
// @match        *://www.google.com.eg/search*
// @match        *://www.google.es/search*
// @match        *://www.google.com.et/search*
// @match        *://www.google.fi/search*
// @match        *://www.google.com.fj/search*
// @match        *://www.google.fm/search*
// @match        *://www.google.fr/search*
// @match        *://www.google.ga/search*
// @match        *://www.google.ge/search*
// @match        *://www.google.gg/search*
// @match        *://www.google.com.gh/search*
// @match        *://www.google.com.gi/search*
// @match        *://www.google.gl/search*
// @match        *://www.google.gm/search*
// @match        *://www.google.gp/search*
// @match        *://www.google.gr/search*
// @match        *://www.google.com.gt/search*
// @match        *://www.google.gy/search*
// @match        *://www.google.com.hk/search*
// @match        *://www.google.hn/search*
// @match        *://www.google.hr/search*
// @match        *://www.google.ht/search*
// @match        *://www.google.hu/search*
// @match        *://www.google.co.id/search*
// @match        *://www.google.ie/search*
// @match        *://www.google.co.il/search*
// @match        *://www.google.im/search*
// @match        *://www.google.co.in/search*
// @match        *://www.google.iq/search*
// @match        *://www.google.is/search*
// @match        *://www.google.it/search*
// @match        *://www.google.je/search*
// @match        *://www.google.com.jm/search*
// @match        *://www.google.jo/search*
// @match        *://www.google.co.jp/search*
// @match        *://www.google.co.ke/search*
// @match        *://www.google.com.kh/search*
// @match        *://www.google.ki/search*
// @match        *://www.google.kg/search*
// @match        *://www.google.co.kr/search*
// @match        *://www.google.com.kw/search*
// @match        *://www.google.kz/search*
// @match        *://www.google.la/search*
// @match        *://www.google.com.lb/search*
// @match        *://www.google.li/search*
// @match        *://www.google.lk/search*
// @match        *://www.google.co.ls/search*
// @match        *://www.google.lt/search*
// @match        *://www.google.lu/search*
// @match        *://www.google.lv/search*
// @match        *://www.google.com.ly/search*
// @match        *://www.google.co.ma/search*
// @match        *://www.google.md/search*
// @match        *://www.google.me/search*
// @match        *://www.google.mg/search*
// @match        *://www.google.mk/search*
// @match        *://www.google.ml/search*
// @match        *://www.google.com.mm/search*
// @match        *://www.google.mn/search*
// @match        *://www.google.ms/search*
// @match        *://www.google.com.mt/search*
// @match        *://www.google.mu/search*
// @match        *://www.google.mv/search*
// @match        *://www.google.mw/search*
// @match        *://www.google.com.mx/search*
// @match        *://www.google.com.my/search*
// @match        *://www.google.co.mz/search*
// @match        *://www.google.com.na/search*
// @match        *://www.google.com.ng/search*
// @match        *://www.google.com.ni/search*
// @match        *://www.google.ne/search*
// @match        *://www.google.nl/search*
// @match        *://www.google.no/search*
// @match        *://www.google.com.np/search*
// @match        *://www.google.nr/search*
// @match        *://www.google.nu/search*
// @match        *://www.google.co.nz/search*
// @match        *://www.google.com.om/search*
// @match        *://www.google.com.pa/search*
// @match        *://www.google.com.pe/search*
// @match        *://www.google.com.pg/search*
// @match        *://www.google.com.ph/search*
// @match        *://www.google.com.pk/search*
// @match        *://www.google.pl/search*
// @match        *://www.google.pn/search*
// @match        *://www.google.com.pr/search*
// @match        *://www.google.ps/search*
// @match        *://www.google.pt/search*
// @match        *://www.google.com.py/search*
// @match        *://www.google.com.qa/search*
// @match        *://www.google.ro/search*
// @match        *://www.google.ru/search*
// @match        *://www.google.rw/search*
// @match        *://www.google.com.sa/search*
// @match        *://www.google.com.sb/search*
// @match        *://www.google.sc/search*
// @match        *://www.google.se/search*
// @match        *://www.google.com.sg/search*
// @match        *://www.google.sh/search*
// @match        *://www.google.si/search*
// @match        *://www.google.sk/search*
// @match        *://www.google.com.sl/search*
// @match        *://www.google.sn/search*
// @match        *://www.google.so/search*
// @match        *://www.google.sm/search*
// @match        *://www.google.sr/search*
// @match        *://www.google.st/search*
// @match        *://www.google.com.sv/search*
// @match        *://www.google.td/search*
// @match        *://www.google.tg/search*
// @match        *://www.google.co.th/search*
// @match        *://www.google.com.tj/search*
// @match        *://www.google.tl/search*
// @match        *://www.google.tm/search*
// @match        *://www.google.tn/search*
// @match        *://www.google.to/search*
// @match        *://www.google.com.tr/search*
// @match        *://www.google.tt/search*
// @match        *://www.google.com.tw/search*
// @match        *://www.google.co.tz/search*
// @match        *://www.google.com.ua/search*
// @match        *://www.google.co.ug/search*
// @match        *://www.google.co.uk/search*
// @match        *://www.google.com.uy/search*
// @match        *://www.google.co.uz/search*
// @match        *://www.google.com.vc/search*
// @match        *://www.google.co.ve/search*
// @match        *://www.google.vg/search*
// @match        *://www.google.co.vi/search*
// @match        *://www.google.com.vn/search*
// @match        *://www.google.vu/search*
// @match        *://www.google.ws/search*
// @match        *://www.google.rs/search*
// @match        *://www.google.co.za/search*
// @match        *://www.google.co.zm/search*
// @match        *://www.google.co.zw/search*
// @run-at       document-idle
// @grant        GM_openInTab
// ==/UserScript==

(function () {
    'use strict';

    // ╔══════════════════════════════════════════════════════════════════════════╗
    // ║                        ✏️  EDIT THIS BLOCK                              ║
    // ╠══════════════════════════════════════════════════════════════════════════╣
    // ║  Preset examples — uncomment one block and delete the default CONFIG    ║
    // ║                                                                          ║
    // ║  🇬🇧 English                                                             ║
    // ║  valentineName: "Emma",    myName: "James",                             ║
    // ║  message: "Every moment with you feels like home 🌟",                   ║
    // ║  buttonLabel: "Open surprise 💌",   counterLang: "en",                  ║
    // ║                                                                          ║
    // ║  🇵🇹 Portuguese                                                          ║
    // ║  valentineName: "Sofia",   myName: "Tiago",                             ║
    // ║  message: "O teu sorriso ilumina o meu mundo 🌟",                       ║
    // ║  buttonLabel: "Ver surpresa 💌",    counterLang: "pt",                  ║
    // ║                                                                          ║
    // ║  🇫🇷 French                                                              ║
    // ║  valentineName: "Camille", myName: "Léo",                               ║
    // ║  message: "Chaque instant à tes côtés est un cadeau 🌟",                ║
    // ║  buttonLabel: "Voir la surprise 💌", counterLang: "fr",                 ║
    // ║                                                                          ║
    // ║  🇪🇸 Spanish                                                             ║
    // ║  valentineName: "Lucía",   myName: "Marcos",                            ║
    // ║  message: "Contigo el mundo tiene más sentido 🌟",                      ║
    // ║  buttonLabel: "Ver sorpresa 💌",    counterLang: "es",                  ║
    // ║                                                                          ║
    // ║  🇮🇹 Italian                                                             ║
    // ║  valentineName: "Giulia",  myName: "Lorenzo",                           ║
    // ║  message: "Con te ogni giorno è più bello 🌟",                          ║
    // ║  buttonLabel: "Apri la sorpresa 💌", counterLang: "it",                 ║
    // ║                                                                          ║
    // ║  🇩🇪 German                                                              ║
    // ║  valentineName: "Mia",     myName: "Leon",                              ║
    // ║  message: "Mit dir ist jeder Tag ein Geschenk 🌟",                      ║
    // ║  buttonLabel: "Überraschung öffnen 💌", counterLang: "de",              ║
    // ╚══════════════════════════════════════════════════════════════════════════╝
    const CONFIG = {

        // ── Names ────────────────────────────────────────────────────────────────
        /** The name of the person you love (shown on the card and surprise page) */
        valentineName: "Emma",

        /** Your name (shown on the signature of the surprise page) */
        myName: "James",

        // ── Message ──────────────────────────────────────────────────────────────
        /** Short romantic message shown on the Google card and surprise page */
        message: "Every moment with you feels like home 🌟",

        /** Label on the "open surprise" button in the Google card */
        buttonLabel: "Open surprise 💌",

        // ── Photo ────────────────────────────────────────────────────────────────
        /**
         * Direct URL to a photo (used both on the card thumbnail and the surprise page).
         * Tip: host it on GitHub raw, Imgur, or any public CDN.
         * Set to "" to hide the photo entirely.
         */
        photoUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80",

        // ── Counter ──────────────────────────────────────────────────────────────
        /**
         * The date & time you became a couple (ISO 8601).
         * Format: "YYYY-MM-DDTHH:MM:SS"
         * Set to "" to hide the counter entirely.
         */
        togetherSince: "2023-06-21T19:00:00",

        /**
         * Language for the counter labels. Uses BCP 47 tags.
         * Resolution order: exact variant → base language → "en" fallback.
         *
         * "auto" (default) — detects the browser language automatically.
         *
         * Base languages:  "en" | "pt" | "fr" | "es" | "it" | "de" | "nl" | "pl"
         *                  "ru" | "ja" | "ko" | "zh" | "ar" | "hi" | "tr" | "el"
         *                  "sv" | "no" | "da" | "fi" | "ro" | "hu" | "cs"
         *
         * Regional variants (examples):
         *   "pt-PT"  European Portuguese    "pt-BR"  Brazilian Portuguese
         *   "es-ES"  Spain Spanish          "es-MX"  Mexican Spanish
         *   "fr-FR"  France French          "fr-CA"  Canadian French
         *   "zh-CN"  Simplified Chinese     "zh-TW"  Traditional (Taiwan)
         *   "zh-HK"  Traditional (HK)       "de-AT"  Austrian German
         *   "nb-NO"  Norwegian Bokmål
         *
         * Custom object: { together: "...", years: "...", yearsP: "...", days: "...", daysP: "..." }
         */
        counterLang: "auto",

        // ── Accent colour ────────────────────────────────────────────────────────
        /**
         * Main accent colour used throughout (card border, button, glow, heart).
         * Any valid CSS colour string. Default: rose pink.
         */
        accentColor: "#e8427a",

        // ── Keywords ─────────────────────────────────────────────────────────────
        /**
         * The script activates when any of these words appear in the Google search query.
         * Case-insensitive. Covers 🇬🇧 EN · 🇵🇹 PT · 🇫🇷 FR · 🇪🇸 ES · 🇮🇹 IT · 🇩🇪 DE
         * and more — remove any that feel too broad (e.g. "love").
         */
        keywords: [
            // 🇬🇧 English
            "love", "i love you", "valentine", "romance", "sweetheart", "darling",
            // 🇵🇹 Portuguese
            "amor", "amo-te", "namoro", "valentim", "querida", "querido",
            // 🇫🇷 French
            "amour", "je t'aime", "saint-valentin", "mon amour", "chéri", "chérie",
            // 🇪🇸 Spanish
            "te amo", "te quiero", "mi amor", "san valentín", "enamorado",
            // 🇮🇹 Italian
            "ti amo", "amore", "san valentino", "innamorato", "tesoro",
            // 🇩🇪 German
            "ich liebe dich", "liebe", "liebling", "schatz", "valentinstag",
            // 🇳🇱 Dutch
            "ik hou van jou", "liefde", "valentijn", "schatje",
            // 🇵🇱 Polish
            "kocham cię", "miłość", "walentynki",
            // 🇯🇵 Japanese
            "愛してる", "バレンタイン",
            // 🇰🇷 Korean
            "사랑해", "발렌타인",
            // 🇨🇳 Chinese
            "我爱你", "情人节",
        ],

        // ── Particles ────────────────────────────────────────────────────────────
        /**
         * Emoji used as floating particles on the surprise page.
         * Replace or extend freely.
         */
        particles: ["❤️", "💖", "💗", "💓", "💞", "🌹", "✨"],

        /** Number of floating particles (10–60 recommended) */
        particleCount: 28,

    };
    // ╔══════════════════════════════════════════════════════════════════════════╗
    // ║                     🔒  DO NOT EDIT BELOW THIS LINE                    ║
    // ╚══════════════════════════════════════════════════════════════════════════╝

    // ── i18n counter labels ──────────────────────────────────────────────────────
    // Keys follow BCP 47: exact match first, then base language fallback.
    // e.g. "pt-BR" → uses pt-BR; "pt-PT" → uses pt-PT; "pt" → uses pt-PT (default PT).
    const LANGS = {
        // ── English ──────────────────────────────────────────────────────────────
        "en":    { together: "Together for",      years: "year",   yearsP: "years",   days: "day",    daysP: "days"    },
        "en-US": { together: "Together for",      years: "year",   yearsP: "years",   days: "day",    daysP: "days"    },
        "en-GB": { together: "Together for",      years: "year",   yearsP: "years",   days: "day",    daysP: "days"    },
        "en-AU": { together: "Together for",      years: "year",   yearsP: "years",   days: "day",    daysP: "days"    },
        // ── Portuguese ───────────────────────────────────────────────────────────
        "pt":    { together: "Juntos há",         years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    }, // fallback → pt-PT
        "pt-PT": { together: "Juntos há",         years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    },
        "pt-BR": { together: "Juntos há",         years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    }, // Brazilian PT shares the same phrasing
        // ── French ───────────────────────────────────────────────────────────────
        "fr":    { together: "Ensemble depuis",   years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-FR": { together: "Ensemble depuis",   years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-CA": { together: "Ensemble depuis",   years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-BE": { together: "Ensemble depuis",   years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-CH": { together: "Ensemble depuis",   years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        // ── Spanish ──────────────────────────────────────────────────────────────
        "es":    { together: "Juntos hace",       years: "año",    yearsP: "años",    days: "día",    daysP: "días"    }, // fallback → es-ES
        "es-ES": { together: "Juntos desde hace", years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-MX": { together: "Juntos hace",       years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-AR": { together: "Juntos hace",       years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-CO": { together: "Juntos hace",       years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-CL": { together: "Juntos hace",       years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        // ── Italian ──────────────────────────────────────────────────────────────
        "it":    { together: "Insieme da",        years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        "it-IT": { together: "Insieme da",        years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        "it-CH": { together: "Insieme da",        years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        // ── German ───────────────────────────────────────────────────────────────
        "de":    { together: "Zusammen seit",     years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-DE": { together: "Zusammen seit",     years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-AT": { together: "Zusammen seit",     years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-CH": { together: "Zusammen seit",     years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        // ── Dutch ─────────────────────────────────────────────────────────────────
        "nl":    { together: "Samen al",          years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        "nl-NL": { together: "Samen al",          years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        "nl-BE": { together: "Samen al",          years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        // ── Polish ───────────────────────────────────────────────────────────────
        "pl":    { together: "Razem od",          years: "rok",    yearsP: "lat",     days: "dzień",  daysP: "dni"     },
        "pl-PL": { together: "Razem od",          years: "rok",    yearsP: "lat",     days: "dzień",  daysP: "dni"     },
        // ── Russian ──────────────────────────────────────────────────────────────
        "ru":    { together: "Вместе уже",        years: "год",    yearsP: "лет",     days: "день",   daysP: "дней"    },
        "ru-RU": { together: "Вместе уже",        years: "год",    yearsP: "лет",     days: "день",   daysP: "дней"    },
        // ── Japanese ─────────────────────────────────────────────────────────────
        "ja":    { together: "一緒になって",        years: "年",     yearsP: "年",      days: "日",     daysP: "日"      },
        "ja-JP": { together: "一緒になって",        years: "年",     yearsP: "年",      days: "日",     daysP: "日"      },
        // ── Korean ───────────────────────────────────────────────────────────────
        "ko":    { together: "함께한 지",          years: "년",     yearsP: "년",      days: "일",     daysP: "일"      },
        "ko-KR": { together: "함께한 지",          years: "년",     yearsP: "년",      days: "일",     daysP: "일"      },
        // ── Chinese ──────────────────────────────────────────────────────────────
        "zh":    { together: "在一起",             years: "年",     yearsP: "年",      days: "天",     daysP: "天"      }, // fallback → zh-CN
        "zh-CN": { together: "在一起",             years: "年",     yearsP: "年",      days: "天",     daysP: "天"      }, // Simplified
        "zh-TW": { together: "在一起已經",          years: "年",     yearsP: "年",      days: "天",     daysP: "天"      }, // Traditional (Taiwan)
        "zh-HK": { together: "在一起已經",          years: "年",     yearsP: "年",      days: "天",     daysP: "天"      }, // Traditional (Hong Kong)
        // ── Arabic ───────────────────────────────────────────────────────────────
        "ar":    { together: "معاً منذ",           years: "سنة",    yearsP: "سنوات",   days: "يوم",    daysP: "أيام"    },
        "ar-SA": { together: "معاً منذ",           years: "سنة",    yearsP: "سنوات",   days: "يوم",    daysP: "أيام"    },
        // ── Hindi ────────────────────────────────────────────────────────────────
        "hi":    { together: "साथ हैं",            years: "साल",    yearsP: "साल",     days: "दिन",    daysP: "दिन"     },
        "hi-IN": { together: "साथ हैं",            years: "साल",    yearsP: "साल",     days: "दिन",    daysP: "दिन"     },
        // ── Turkish ──────────────────────────────────────────────────────────────
        "tr":    { together: "Birlikte",           years: "yıl",    yearsP: "yıl",     days: "gün",    daysP: "gün"     },
        "tr-TR": { together: "Birlikte",           years: "yıl",    yearsP: "yıl",     days: "gün",    daysP: "gün"     },
        // ── Greek ────────────────────────────────────────────────────────────────
        "el":    { together: "Μαζί εδώ και",       years: "χρόνο",  yearsP: "χρόνια",  days: "μέρα",   daysP: "μέρες"   },
        "el-GR": { together: "Μαζί εδώ και",       years: "χρόνο",  yearsP: "χρόνια",  days: "μέρα",   daysP: "μέρες"   },
        // ── Swedish ──────────────────────────────────────────────────────────────
        "sv":    { together: "Tillsammans sedan",  years: "år",     yearsP: "år",      days: "dag",    daysP: "dagar"   },
        "sv-SE": { together: "Tillsammans sedan",  years: "år",     yearsP: "år",      days: "dag",    daysP: "dagar"   },
        // ── Norwegian ────────────────────────────────────────────────────────────
        "no":    { together: "Sammen siden",       years: "år",     yearsP: "år",      days: "dag",    daysP: "dager"   },
        "nb-NO": { together: "Sammen siden",       years: "år",     yearsP: "år",      days: "dag",    daysP: "dager"   },
        // ── Danish ───────────────────────────────────────────────────────────────
        "da":    { together: "Sammen siden",       years: "år",     yearsP: "år",      days: "dag",    daysP: "dage"    },
        "da-DK": { together: "Sammen siden",       years: "år",     yearsP: "år",      days: "dag",    daysP: "dage"    },
        // ── Finnish ──────────────────────────────────────────────────────────────
        "fi":    { together: "Yhdessä jo",         years: "vuosi",  yearsP: "vuotta",  days: "päivä",  daysP: "päivää"  },
        "fi-FI": { together: "Yhdessä jo",         years: "vuosi",  yearsP: "vuotta",  days: "päivä",  daysP: "päivää"  },
        // ── Romanian ─────────────────────────────────────────────────────────────
        "ro":    { together: "Împreună de",        years: "an",     yearsP: "ani",     days: "zi",     daysP: "zile"    },
        "ro-RO": { together: "Împreună de",        years: "an",     yearsP: "ani",     days: "zi",     daysP: "zile"    },
        // ── Hungarian ────────────────────────────────────────────────────────────
        "hu":    { together: "Együtt",             years: "éve",    yearsP: "éve",     days: "napja",  daysP: "napja"   },
        "hu-HU": { together: "Együtt",             years: "éve",    yearsP: "éve",     days: "napja",  daysP: "napja"   },
        // ── Czech ────────────────────────────────────────────────────────────────
        "cs":    { together: "Spolu už",           years: "rok",    yearsP: "let",     days: "den",    daysP: "dní"     },
        "cs-CZ": { together: "Spolu už",           years: "rok",    yearsP: "let",     days: "den",    daysP: "dní"     },
    };

    /**
     * Resolve the best matching language entry.
     * - "auto"  → tries each browser language in navigator.languages order
     * - string  → exact key → base language ("pt-BR" → "pt") → "en"
     * - object  → used as-is (custom labels)
     */
    function getLang() {
        if (typeof CONFIG.counterLang === "object") return CONFIG.counterLang;

        const candidates = CONFIG.counterLang === "auto"
            ? (navigator.languages || [navigator.language || "en"])
            : [CONFIG.counterLang];

        for (const tag of candidates) {
            if (LANGS[tag])                  return LANGS[tag];           // exact: "pt-PT"
            const base = tag.split("-")[0];
            if (LANGS[base])                 return LANGS[base];          // base:  "pt"
        }
        return LANGS["en"];
    }

    // ── Verify keyword match ─────────────────────────────────────────────────────
    const query = new URLSearchParams(window.location.search).get("q") || "";
    const isMatch = CONFIG.keywords.some(kw => query.toLowerCase().includes(kw.toLowerCase()));
    if (!isMatch) return;

    // ── Helpers ──────────────────────────────────────────────────────────────────
    function pad(n) { return String(n).padStart(2, "0"); }

    /** Lighten a hex colour by mixing with white */
    function lighten(hex, amount = 0.6) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const mix = v => Math.round(v + (255 - v) * amount);
        return `rgb(${mix(r)},${mix(g)},${mix(b)})`;
    }

    const accent = CONFIG.accentColor;
    const accentLight = lighten(accent, 0.7);

    // ── Build the surprise page ───────────────────────────────────────────────────
    function buildSurprisePage() {
        const lang = getLang();
        const hasPhoto   = !!CONFIG.photoUrl;
        const hasCounter = !!CONFIG.togetherSince;

        const photoHTML = hasPhoto
            ? `<img class="photo" src="${CONFIG.photoUrl}" alt="Special photo" loading="lazy">`
            : "";

        const counterHTML = hasCounter ? `
            <p class="counter-label">${lang.together}</p>
            <p class="counter" id="lm-counter">…</p>` : "";

        const counterJS = hasCounter ? `
            const since = new Date("${CONFIG.togetherSince}").getTime();
            const lang  = ${JSON.stringify(lang)};
            function updateCounter() {
                const diff  = Date.now() - since;
                const secs  = Math.floor(diff / 1000) % 60;
                const mins  = Math.floor(diff / 60000) % 60;
                const hours = Math.floor(diff / 3600000) % 24;
                const days  = Math.floor(diff / 86400000);
                const years = Math.floor(days / 365);
                const rem   = days % 365;
                let txt = "";
                if (years > 0) txt += years + " " + (years === 1 ? lang.years : lang.yearsP) + ", ";
                txt += rem + " " + (rem === 1 ? lang.days : lang.daysP) + ", ";
                txt += pad(hours) + "h " + pad(mins) + "m " + pad(secs) + "s";
                document.getElementById("lm-counter").textContent = txt;
            }
            function pad(n) { return String(n).padStart(2, "0"); }
            updateCounter();
            setInterval(updateCounter, 1000);
        ` : "";

        const particlesJS = CONFIG.particles.length > 0 ? `
            const container = document.getElementById("lm-particles");
            const EMOJIS = ${JSON.stringify(CONFIG.particles)};
            for (let i = 0; i < ${CONFIG.particleCount}; i++) {
                const el = document.createElement("span");
                el.className = "particle";
                el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
                el.style.cssText = [
                    "--x:"     + (Math.random() * 100) + "%",
                    "--dur:"   + (5 + Math.random() * 8) + "s",
                    "--delay:" + (Math.random() * 10) + "s",
                    "font-size:" + (0.8 + Math.random() * 1.2) + "rem",
                ].join(";");
                container.appendChild(el);
            }
        ` : "";

        return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>For ${CONFIG.valentineName}, with all my love 💖</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Lato:wght@300;400&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --accent: ${accent};
    --blush:  ${accentLight};
    --card:   rgba(255,255,255,0.06);
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(ellipse at 30% 20%, color-mix(in srgb, var(--accent) 40%, #000) 0%, #070007 60%);
    font-family: 'Lato', sans-serif;
    color: #fff;
    overflow: hidden;
  }

  /* Particles */
  #lm-particles {
    position: fixed; inset: 0;
    pointer-events: none;
    z-index: 0;
  }
  .particle {
    position: absolute;
    bottom: -40px;
    opacity: 0;
    animation: rise var(--dur, 6s) ease-in var(--delay, 0s) infinite;
    left: var(--x, 50%);
  }
  @keyframes rise {
    0%   { transform: translateY(0) scale(0.6) rotate(0deg); opacity: 0; }
    10%  { opacity: 0.8; }
    90%  { opacity: 0.4; }
    100% { transform: translateY(-105vh) scale(1.1) rotate(20deg); opacity: 0; }
  }

  /* Card */
  .card {
    position: relative;
    z-index: 1;
    background: var(--card);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    padding: clamp(2rem, 5vw, 3.5rem);
    max-width: 520px;
    width: 90vw;
    text-align: center;
    box-shadow: 0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px color-mix(in srgb, var(--accent) 25%, transparent);
    animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Pulsing heart */
  .heart-wrap {
    margin-bottom: 1.5rem;
    animation: pulse 1.6s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1);   filter: drop-shadow(0 0 6px var(--accent)); }
    50%       { transform: scale(1.1); filter: drop-shadow(0 0 20px var(--accent)); }
  }
  .heart-wrap svg { width: 64px; height: 64px; }

  /* Typography */
  .to-name {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    color: var(--blush);
    margin-bottom: 0.3rem;
  }
  .message {
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 1.6rem;
    letter-spacing: 0.03em;
    line-height: 1.5;
  }

  /* Photo */
  .photo {
    width: 100%;
    border-radius: 14px;
    object-fit: cover;
    max-height: 260px;
    display: block;
    margin: 0 auto 1.6rem;
    border: 2px solid color-mix(in srgb, var(--accent) 50%, transparent);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    transition: transform 0.4s ease;
  }
  .photo:hover { transform: scale(1.02); }

  /* Counter */
  .counter-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: rgba(255,255,255,0.35);
    margin-bottom: 0.4rem;
  }
  .counter {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1rem, 3vw, 1.25rem);
    color: var(--blush);
    margin-bottom: 1.6rem;
    min-height: 1.6em;
  }

  /* Signature */
  .signature {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.45);
  }
  .signature strong {
    color: var(--accent);
    font-style: normal;
    font-weight: 400;
  }
</style>
</head>
<body>
<div id="lm-particles"></div>

<div class="card">
  <div class="heart-wrap">
    <svg viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 27.6C16 27.6 1 18 1 8.5C1 4.4 4.4 1 8.5 1C11 1 13.3 2.3 14.8 4.3L16 5.9L17.2 4.3C18.7 2.3 21 1 23.5 1C27.6 1 31 4.4 31 8.5C31 18 16 27.6 16 27.6Z"
            fill="${accent}"/>
    </svg>
  </div>

  <p class="to-name">${CONFIG.valentineName}</p>
  <p class="message">${CONFIG.message}</p>
  ${photoHTML}
  ${counterHTML}
  <p class="signature">— <strong>${CONFIG.myName}</strong></p>
</div>

<script>
  ${counterJS}
  ${particlesJS}
</script>
</body>
</html>`;
    }

    // ── Open surprise in new tab ──────────────────────────────────────────────────
    function openSurprise() {
        GM_openInTab("data:text/html;charset=utf-8," + encodeURIComponent(buildSurprisePage()), false);
    }

    // ── Detect Google dark mode ───────────────────────────────────────────────────
    function isDarkMode() {
        return (
            document.documentElement.style.colorScheme === "dark" ||
            window.matchMedia("(prefers-color-scheme: dark)").matches ||
            document.querySelector('meta[name="color-scheme"]')?.content?.includes("dark")
        );
    }

    // ── Inject card into search results ──────────────────────────────────────────
    function insertCard() {
        if (document.getElementById("lm-card")) return;

        // Multiple selectors for resilience across Google versions/themes
        const anchor =
            document.querySelector("#rso > div:first-child") ||
            document.querySelector(".MjjYud > div:first-child") ||
            document.querySelector("#search .v7W49e:first-child") ||
            document.querySelector("#rso");
        if (!anchor) return;

        const dark = isDarkMode();

        const card = document.createElement("div");
        card.id = "lm-card";

        const bgLight = `linear-gradient(135deg, color-mix(in srgb, ${accent} 8%, #fff) 0%, color-mix(in srgb, ${accent} 15%, #fff) 100%)`;
        const bgDark  = `linear-gradient(135deg, color-mix(in srgb, ${accent} 20%, #0a0005) 0%, color-mix(in srgb, ${accent} 30%, #0a0005) 100%)`;

        card.innerHTML = `
<style>
  #lm-card {
    font-family: 'Google Sans', Roboto, Arial, sans-serif;
    margin-bottom: 20px;
    overflow: visible !important;
    min-width: 0;
  }
  #lm-inner {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    border-radius: 16px;
    background: ${dark ? bgDark : bgLight};
    border: 1.5px solid ${dark ? accent + "66" : accent + "44"};
    box-shadow: 0 2px 16px ${accent}${dark ? "33" : "1a"};
    cursor: pointer;
    transition: box-shadow 0.25s ease, transform 0.25s ease;
    overflow: hidden;
    min-width: 0;
  }
  #lm-inner:hover {
    box-shadow: 0 6px 28px ${accent}55;
    transform: translateY(-2px);
  }
  #lm-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
    border: 2.5px solid ${accent};
    flex-shrink: 0;
    display: block;
  }
  #lm-avatar-fallback {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: ${accent}33;
    border: 2.5px solid ${accent};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  #lm-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  #lm-text h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${dark ? accentLight : accent};
    margin: 0 0 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #lm-text p {
    font-size: 12px;
    color: ${dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)"};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #lm-btn {
    flex-shrink: 0;
    background: ${accent};
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 7px 15px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: filter 0.2s ease;
    white-space: nowrap;
    font-family: inherit;
  }
  #lm-btn:hover { filter: brightness(1.15); }
</style>
<div id="lm-inner">
  ${CONFIG.photoUrl
    ? `<img id="lm-avatar" src="${CONFIG.photoUrl}" alt="${CONFIG.valentineName}" onerror="this.style.display='none';document.getElementById('lm-avatar-fallback').style.display='flex'">`
    : ""}
  <div id="lm-avatar-fallback" style="display:${CONFIG.photoUrl ? "none" : "flex"}">💖</div>
  <div id="lm-text">
    <h3>💖 ${CONFIG.valentineName}</h3>
    <p>${CONFIG.message}</p>
  </div>
  <button id="lm-btn">${CONFIG.buttonLabel}</button>
</div>`;

        anchor.parentNode.insertBefore(card, anchor);
        card.querySelector("#lm-inner").addEventListener("click", openSurprise);
    }

    // ── Boot ─────────────────────────────────────────────────────────────────────
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", insertCard);
    } else {
        insertCard();
    }

    // MutationObserver fallback for Google's SPA navigation
    const observer = new MutationObserver(() => {
        if (!document.getElementById("lm-card")) insertCard();
    });
    observer.observe(document.body, { childList: true, subtree: true });

})();
