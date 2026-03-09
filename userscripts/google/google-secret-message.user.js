// ==UserScript==
// @name         Secret Message 💌
// @namespace    https://github.com/BlackSpirits
// @version      1.2.0
// @description  Injects a personalised card above search results and opens a beautiful animated surprise page. 6 types: love, friendship, family, parents, pets, custom. 191 Google domains, 29 languages, auto dark/light mode.
// @author       BlackSpirits
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9IiMxZTFlMmUiLz48cmVjdCB4PSI4IiB5PSIxOCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2JhNmY3IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNOCAxOGwyNCAyMCAyNC0yMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2JhNmY3IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjYgMzZsLTMgM2g2bC0zLTN6IiBmaWxsPSIjZTg0MjdhIi8+PC9zdmc+
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
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function () {
    'use strict';

    // ╔══════════════════════════════════════════════════════════════════════════╗
    // ║          ⚙️  Settings are saved via Tampermonkey menu                   ║
    // ║          Click the Tampermonkey icon → "⚙️ Secret Message Settings"     ║
    // ║          You can still hard-code defaults below as fallback values.     ║
    // ╚══════════════════════════════════════════════════════════════════════════╝

    // ── Fallback defaults (used when no saved settings exist yet) ────────────────
    const DEFAULTS = {
        type:              "love",
        recipientName:     "Emma",
        senderName:        "James",
        message:           "",
        buttonLabel:       "",
        counterLabel:      "",
        photoUrl:          "",
        since:             "",
        lang:              "auto",
        accentColor:       "",
        icon:              "",
        photoStyleCard:    "circle",    // "circle" | "square" | "rounded" | "portrait"
        photoStyleSurprise:"circle",    // "circle" | "square" | "rounded" | "portrait"
        alwaysShow:        false,       // show card on every Google search
    };

    // ── Load config from persistent storage (falls back to DEFAULTS) ─────────────
    function loadConfig() {
        const saved = GM_getValue("lm_config", null);
        return saved ? Object.assign({}, DEFAULTS, JSON.parse(saved)) : Object.assign({}, DEFAULTS);
    }

    const CONFIG = loadConfig();
    // ╔══════════════════════════════════════════════════════════════════════════╗
    // ║                     🔒  DO NOT EDIT BELOW THIS LINE                    ║
    // ╚══════════════════════════════════════════════════════════════════════════╝

    // ── Settings panel UI translations ───────────────────────────────────────────
    const UI_STRINGS = {
        en: {
            title:"💌 Secret Message — Settings", subtitle:"Settings are saved automatically and persist across sessions.",
            s_lang:"🌐 Language", l_lang:"Language", h_lang:"sets the counter wording and loads suggestions in this language",
            s_type:"Type & Appearance", l_type:"Type",
            s_names:"Names", l_to:"Recipient name", h_to:"person this is for", l_from:"Your name", h_from:"shown on signature",
            s_msg:"Message, Button & Counter label", l_counter:"Counter label", h_counter:'text above the timer (e.g. "Together for", "Friends for"…)',
            l_message:"Message", l_button:"Button label",
            s_photo:"Photo & Counter", l_photo:"Photo URL", h_photo:"direct link to image, or leave blank for emoji icon",
            l_since:"Together since", h_since:"date & time (leave blank to hide counter)",
            btn_save:"💾 Save", btn_cancel:"Cancel", btn_reset:"🗑 Reset",
            saved:"✔ Saved! Reloading…", confirm_reset:"Reset all settings to defaults?",
            ph_counter:"Write your own label…", ph_message:"Write your own message…", ph_button:"Write your own button text…",
            sugg_pick:"— suggestions (or write your own below) —", sugg_clear:"✕ Clear / use type default",
            ctr_pick:"— choose a suggestion or write your own —", ctr_clear:"✕ Clear / use default",
            l_photo_style_card:"Card photo shape", l_photo_style_surprise:"Surprise page shape",
            l_always_show:"Show card on every search (ignore keyword matching)",
            o_auto:"🌐 Auto (browser language)",
            o_love:"❤️  Love — romantic partner", o_friendship:"💛  Friendship — best friend",
            o_family:"💚  Family — sibling / child", o_parents:"💜  Parents — mum, dad, grandparent",
            o_pets:"🧡  Pets — dog, cat, any animal", o_custom:"✏️  Custom — full manual control",
            o_circle:"⬤ Circle", o_square:"■ Square", o_rounded:"▢ Rounded", o_portrait:"▯ Portrait",
        },
        pt: {
            title:"💌 Mensagem Secreta — Definições", subtitle:"As definições são guardadas automaticamente e persistem entre sessões.",
            s_lang:"🌐 Idioma", l_lang:"Idioma", h_lang:"define o texto do contador e carrega sugestões neste idioma",
            s_type:"Tipo e Aspeto", l_type:"Tipo",
            s_names:"Nomes", l_to:"Nome do destinatário", h_to:"pessoa a quem é dedicado", l_from:"O teu nome", h_from:"aparece na assinatura",
            s_msg:"Mensagem, Botão e Etiqueta do contador", l_counter:"Etiqueta do contador", h_counter:'texto acima do cronómetro (ex: "Juntos há", "Amigos há"…)',
            l_message:"Mensagem", l_button:"Texto do botão",
            s_photo:"Foto e Contador", l_photo:"URL da foto", h_photo:"link direto para imagem, ou deixa em branco para usar o emoji",
            l_since:"Juntos desde", h_since:"data e hora (deixa em branco para esconder o contador)",
            btn_save:"💾 Guardar", btn_cancel:"Cancelar", btn_reset:"🗑 Repor",
            saved:"✔ Guardado! A recarregar…", confirm_reset:"Repor todas as definições para os valores padrão?",
            ph_counter:"Escreve a tua etiqueta…", ph_message:"Escreve a tua mensagem…", ph_button:"Escreve o texto do botão…",
            sugg_pick:"— sugestões (ou escreve a tua abaixo) —", sugg_clear:"✕ Limpar / usar predefinição",
            ctr_pick:"— escolhe uma sugestão ou escreve a tua —", ctr_clear:"✕ Limpar / usar predefinição",
            l_photo_style_card:"Forma da foto (cartão)", l_photo_style_surprise:"Forma da foto (surpresa)",
            l_always_show:"Mostrar cartão em qualquer pesquisa (ignorar palavras-chave)",
            o_auto:"🌐 Auto (idioma do browser)",
            o_love:"❤️  Amor — parceiro/a romântico/a", o_friendship:"💛  Amizade — melhor amigo/a",
            o_family:"💚  Família — irmão/irmã, filho/a", o_parents:"💜  Pais — mãe, pai, avô/avó",
            o_pets:"🧡  Animais — cão, gato, qualquer animal", o_custom:"✏️  Personalizado — controlo total",
            o_circle:"⬤ Círculo", o_square:"■ Quadrado", o_rounded:"▢ Arredondado", o_portrait:"▯ Retrato",
        },
        "pt-BR": {
            title:"💌 Mensagem Secreta — Configurações", subtitle:"As configurações são salvas automaticamente e persistem entre sessões.",
            s_lang:"🌐 Idioma", l_lang:"Idioma", h_lang:"define o texto do contador e carrega sugestões neste idioma",
            s_type:"Tipo e Aparência", l_type:"Tipo",
            s_names:"Nomes", l_to:"Nome do destinatário", h_to:"pessoa a quem é dedicado", l_from:"Seu nome", h_from:"aparece na assinatura",
            s_msg:"Mensagem, Botão e Etiqueta do contador", l_counter:"Etiqueta do contador", h_counter:'texto acima do cronômetro (ex: "Juntos há", "Amigos há"…)',
            l_message:"Mensagem", l_button:"Texto do botão",
            s_photo:"Foto e Contador", l_photo:"URL da foto", h_photo:"link direto para imagem, ou deixe em branco para usar o emoji",
            l_since:"Juntos desde", h_since:"data e hora (deixe em branco para esconder o contador)",
            btn_save:"💾 Salvar", btn_cancel:"Cancelar", btn_reset:"🗑 Redefinir",
            saved:"✔ Salvo! Recarregando…", confirm_reset:"Redefinir todas as configurações para os valores padrão?",
            ph_counter:"Escreva sua etiqueta…", ph_message:"Escreva sua mensagem…", ph_button:"Escreva o texto do botão…",
            sugg_pick:"— sugestões (ou escreva a sua abaixo) —", sugg_clear:"✕ Limpar / usar padrão",
            ctr_pick:"— escolha uma sugestão ou escreva a sua —", ctr_clear:"✕ Limpar / usar padrão",
            l_photo_style_card:"Forma da foto (cartão)", l_photo_style_surprise:"Forma da foto (surpresa)",
            l_always_show:"Mostrar cartão em qualquer pesquisa (ignorar palavras-chave)",
            o_auto:"🌐 Auto (idioma do navegador)",
            o_love:"❤️  Amor — parceiro/a romântico/a", o_friendship:"💛  Amizade — melhor amigo/a",
            o_family:"💚  Família — irmão/irmã, filho/a", o_parents:"💜  Pais — mãe, pai, avô/avó",
            o_pets:"🧡  Animais — cachorro, gato, qualquer animal", o_custom:"✏️  Personalizado — controle total",
            o_circle:"⬤ Círculo", o_square:"■ Quadrado", o_rounded:"▢ Arredondado", o_portrait:"▯ Retrato",
        },
        fr: {
            title:"💌 Message Secret — Paramètres", subtitle:"Les paramètres sont enregistrés automatiquement et persistent entre les sessions.",
            s_lang:"🌐 Langue", l_lang:"Langue", h_lang:"définit le texte du compteur et charge les suggestions dans cette langue",
            s_type:"Type et Apparence", l_type:"Type",
            s_names:"Noms", l_to:"Nom du destinataire", h_to:"personne à qui c'est dédié", l_from:"Ton nom", h_from:"affiché sur la signature",
            s_msg:"Message, Bouton et Étiquette compteur", l_counter:"Étiquette du compteur", h_counter:'texte au-dessus du chrono (ex: "Ensemble depuis", "Amis depuis"…)',
            l_message:"Message", l_button:"Texte du bouton",
            s_photo:"Photo et Compteur", l_photo:"URL de la photo", h_photo:"lien direct vers une image, ou laisse vide pour l'emoji",
            l_since:"Ensemble depuis", h_since:"date et heure (laisse vide pour cacher le compteur)",
            btn_save:"💾 Enregistrer", btn_cancel:"Annuler", btn_reset:"🗑 Réinitialiser",
            saved:"✔ Enregistré ! Recharge la page pour appliquer.", confirm_reset:"Réinitialiser tous les paramètres par défaut ?",
            ph_counter:"Écris ta propre étiquette…", ph_message:"Écris ton propre message…", ph_button:"Écris le texte du bouton…",
            sugg_pick:"— suggestions (ou écris le tien ci-dessous) —", sugg_clear:"✕ Effacer / utiliser le défaut",
            ctr_pick:"— choisir une suggestion ou écrire la tienne —", ctr_clear:"✕ Effacer / utiliser le défaut",
        },
        es: {
            title:"💌 Mensaje Secreto — Configuración", subtitle:"La configuración se guarda automáticamente y persiste entre sesiones.",
            s_lang:"🌐 Idioma", l_lang:"Idioma", h_lang:"define el texto del contador y carga sugerencias en este idioma",
            s_type:"Tipo y Apariencia", l_type:"Tipo",
            s_names:"Nombres", l_to:"Nombre del destinatario", h_to:"persona a quien va dedicado", l_from:"Tu nombre", h_from:"aparece en la firma",
            s_msg:"Mensaje, Botón y Etiqueta del contador", l_counter:"Etiqueta del contador", h_counter:'texto encima del cronómetro (ej: "Juntos hace", "Amigos hace"…)',
            l_message:"Mensaje", l_button:"Texto del botón",
            s_photo:"Foto y Contador", l_photo:"URL de la foto", h_photo:"enlace directo a imagen, o deja en blanco para el emoji",
            l_since:"Juntos desde", h_since:"fecha y hora (deja en blanco para ocultar el contador)",
            btn_save:"💾 Guardar", btn_cancel:"Cancelar", btn_reset:"🗑 Restablecer",
            saved:"✔ ¡Guardado! Recarga la página para aplicar.", confirm_reset:"¿Restablecer toda la configuración por defecto?",
            ph_counter:"Escribe tu propia etiqueta…", ph_message:"Escribe tu propio mensaje…", ph_button:"Escribe el texto del botón…",
            sugg_pick:"— sugerencias (o escribe la tuya abajo) —", sugg_clear:"✕ Borrar / usar predeterminado",
            ctr_pick:"— elige una sugerencia o escribe la tuya —", ctr_clear:"✕ Borrar / usar predeterminado",
        },
        it: {
            title:"💌 Messaggio Segreto — Impostazioni", subtitle:"Le impostazioni vengono salvate automaticamente e persistono tra le sessioni.",
            s_lang:"🌐 Lingua", l_lang:"Lingua", h_lang:"imposta il testo del contatore e carica i suggerimenti in questa lingua",
            s_type:"Tipo e Aspetto", l_type:"Tipo",
            s_names:"Nomi", l_to:"Nome del destinatario", h_to:"persona a cui è dedicato", l_from:"Il tuo nome", h_from:"mostrato nella firma",
            s_msg:"Messaggio, Pulsante ed Etichetta contatore", l_counter:"Etichetta contatore", h_counter:'testo sopra il cronometro (es: "Insieme da", "Amici da"…)',
            l_message:"Messaggio", l_button:"Testo del pulsante",
            s_photo:"Foto e Contatore", l_photo:"URL foto", h_photo:"link diretto all'immagine, o lascia vuoto per l'emoji",
            l_since:"Insieme da", h_since:"data e ora (lascia vuoto per nascondere il contatore)",
            btn_save:"💾 Salva", btn_cancel:"Annulla", btn_reset:"🗑 Ripristina",
            saved:"✔ Salvato! Ricarica la pagina per applicare.", confirm_reset:"Ripristinare tutte le impostazioni predefinite?",
            ph_counter:"Scrivi la tua etichetta…", ph_message:"Scrivi il tuo messaggio…", ph_button:"Scrivi il testo del pulsante…",
            sugg_pick:"— suggerimenti (o scrivi il tuo qui sotto) —", sugg_clear:"✕ Cancella / usa predefinito",
            ctr_pick:"— scegli un suggerimento o scrivi il tuo —", ctr_clear:"✕ Cancella / usa predefinito",
        },
        de: {
            title:"💌 Geheime Nachricht — Einstellungen", subtitle:"Einstellungen werden automatisch gespeichert und zwischen den Sitzungen beibehalten.",
            s_lang:"🌐 Sprache", l_lang:"Sprache", h_lang:"legt den Zählertext fest und lädt Vorschläge in dieser Sprache",
            s_type:"Typ und Aussehen", l_type:"Typ",
            s_names:"Namen", l_to:"Name des Empfängers", h_to:"Person, für die es bestimmt ist", l_from:"Dein Name", h_from:"erscheint in der Unterschrift",
            s_msg:"Nachricht, Schaltfläche und Zählerbeschriftung", l_counter:"Zählerbeschriftung", h_counter:'Text über dem Timer (z.B. "Zusammen seit", "Befreundet seit"…)',
            l_message:"Nachricht", l_button:"Schaltflächentext",
            s_photo:"Foto und Zähler", l_photo:"Foto-URL", h_photo:"direkter Link zum Bild, oder leer lassen für Emoji",
            l_since:"Zusammen seit", h_since:"Datum und Uhrzeit (leer lassen zum Verstecken des Zählers)",
            btn_save:"💾 Speichern", btn_cancel:"Abbrechen", btn_reset:"🗑 Zurücksetzen",
            saved:"✔ Gespeichert! Lade die Seite neu zum Anwenden.", confirm_reset:"Alle Einstellungen auf Standard zurücksetzen?",
            ph_counter:"Eigene Beschriftung schreiben…", ph_message:"Eigene Nachricht schreiben…", ph_button:"Schaltflächentext schreiben…",
            sugg_pick:"— Vorschläge (oder eigenen unten schreiben) —", sugg_clear:"✕ Löschen / Standard verwenden",
            ctr_pick:"— Vorschlag wählen oder eigenen schreiben —", ctr_clear:"✕ Löschen / Standard verwenden",
        },
        nl: {
            title:"💌 Geheim Bericht — Instellingen", subtitle:"Instellingen worden automatisch opgeslagen en blijven behouden tussen sessies.",
            s_lang:"🌐 Taal", l_lang:"Taal", h_lang:"bepaalt de tekst van de teller en laadt suggesties in deze taal",
            s_type:"Type en Uiterlijk", l_type:"Type",
            s_names:"Namen", l_to:"Naam ontvanger", h_to:"persoon voor wie het bedoeld is", l_from:"Jouw naam", h_from:"wordt weergegeven op de handtekening",
            s_msg:"Bericht, Knop en Tellerlabel", l_counter:"Tellerlabel", h_counter:'tekst boven de timer (bv. "Samen al", "Vrienden al"…)',
            l_message:"Bericht", l_button:"Knoptekst",
            s_photo:"Foto en Teller", l_photo:"Foto-URL", h_photo:"directe link naar afbeelding, of leeg laten voor emoji",
            l_since:"Samen sinds", h_since:"datum en tijd (leeg laten om teller te verbergen)",
            btn_save:"💾 Opslaan", btn_cancel:"Annuleren", btn_reset:"🗑 Herstellen",
            saved:"✔ Opgeslagen! Herlaad de pagina om toe te passen.", confirm_reset:"Alle instellingen terugzetten naar standaard?",
            ph_counter:"Schrijf je eigen label…", ph_message:"Schrijf je eigen bericht…", ph_button:"Schrijf je eigen knoptekst…",
            sugg_pick:"— suggesties (of schrijf je eigen hieronder) —", sugg_clear:"✕ Wissen / standaard gebruiken",
            ctr_pick:"— kies een suggestie of schrijf je eigen —", ctr_clear:"✕ Wissen / standaard gebruiken",
        },
        pl: {
            title:"💌 Tajna Wiadomość — Ustawienia", subtitle:"Ustawienia są zapisywane automatycznie i utrzymują się między sesjami.",
            s_lang:"🌐 Język", l_lang:"Język", h_lang:"ustawia tekst licznika i ładuje sugestie w tym języku",
            s_type:"Typ i Wygląd", l_type:"Typ",
            s_names:"Imiona", l_to:"Imię odbiorcy", h_to:"osoba, dla której jest dedykowane", l_from:"Twoje imię", h_from:"wyświetlane w podpisie",
            s_msg:"Wiadomość, Przycisk i Etykieta licznika", l_counter:"Etykieta licznika", h_counter:'tekst nad timerem (np. "Razem od", "Przyjaciółmi od"…)',
            l_message:"Wiadomość", l_button:"Tekst przycisku",
            s_photo:"Zdjęcie i Licznik", l_photo:"URL zdjęcia", h_photo:"bezpośredni link do obrazu, lub zostaw puste dla emoji",
            l_since:"Razem od", h_since:"data i godzina (zostaw puste, aby ukryć licznik)",
            btn_save:"💾 Zapisz", btn_cancel:"Anuluj", btn_reset:"🗑 Resetuj",
            saved:"✔ Zapisano! Odśwież stronę, aby zastosować.", confirm_reset:"Zresetować wszystkie ustawienia do domyślnych?",
            ph_counter:"Wpisz własną etykietę…", ph_message:"Wpisz własną wiadomość…", ph_button:"Wpisz tekst przycisku…",
            sugg_pick:"— sugestie (lub wpisz własną poniżej) —", sugg_clear:"✕ Wyczyść / użyj domyślnego",
            ctr_pick:"— wybierz sugestię lub wpisz własną —", ctr_clear:"✕ Wyczyść / użyj domyślnego",
        },
        ru: {
            title:"💌 Тайное Послание — Настройки", subtitle:"Настройки сохраняются автоматически и сохраняются между сессиями.",
            s_lang:"🌐 Язык", l_lang:"Язык", h_lang:"задаёт текст счётчика и загружает предложения на этом языке",
            s_type:"Тип и Внешний вид", l_type:"Тип",
            s_names:"Имена", l_to:"Имя получателя", h_to:"человек, которому посвящено", l_from:"Твоё имя", h_from:"отображается в подписи",
            s_msg:"Сообщение, Кнопка и Подпись счётчика", l_counter:"Подпись счётчика", h_counter:'текст над таймером (напр. "Вместе уже", "Друзья уже"…)',
            l_message:"Сообщение", l_button:"Текст кнопки",
            s_photo:"Фото и Счётчик", l_photo:"URL фото", h_photo:"прямая ссылка на изображение, или оставь пустым для эмодзи",
            l_since:"Вместе с", h_since:"дата и время (оставь пустым, чтобы скрыть счётчик)",
            btn_save:"💾 Сохранить", btn_cancel:"Отмена", btn_reset:"🗑 Сбросить",
            saved:"✔ Сохранено! Перезагрузи страницу для применения.", confirm_reset:"Сбросить все настройки по умолчанию?",
            ph_counter:"Напиши свою подпись…", ph_message:"Напиши своё сообщение…", ph_button:"Напиши текст кнопки…",
            sugg_pick:"— подсказки (или напиши своё ниже) —", sugg_clear:"✕ Очистить / использовать по умолчанию",
            ctr_pick:"— выбери подсказку или напиши своё —", ctr_clear:"✕ Очистить / использовать по умолчанию",
        },
        ja: {
            title:"💌 ひみつのメッセージ — 設定", subtitle:"設定は自動的に保存され、セッションをまたいで維持されます。",
            s_lang:"🌐 言語", l_lang:"言語", h_lang:"カウンターのテキストを設定し、この言語で候補を読み込みます",
            s_type:"タイプと外観", l_type:"タイプ",
            s_names:"名前", l_to:"受取人の名前", h_to:"メッセージを送る相手", l_from:"あなたの名前", h_from:"署名に表示されます",
            s_msg:"メッセージ、ボタン、カウンターラベル", l_counter:"カウンターラベル", h_counter:'タイマーの上に表示するテキスト（例：「一緒になって」）',
            l_message:"メッセージ", l_button:"ボタンのテキスト",
            s_photo:"写真とカウンター", l_photo:"写真のURL", h_photo:"画像への直リンク、空白にするとアイコン表示",
            l_since:"一緒になってから", h_since:"日時（空白にするとカウンターを非表示）",
            btn_save:"💾 保存", btn_cancel:"キャンセル", btn_reset:"🗑 リセット",
            saved:"✔ 保存しました！ページを再読み込みして適用してください。", confirm_reset:"すべての設定をデフォルトにリセットしますか？",
            ph_counter:"ラベルを入力…", ph_message:"メッセージを入力…", ph_button:"ボタンのテキストを入力…",
            sugg_pick:"— 候補を選ぶか、下に自分で入力 —", sugg_clear:"✕ クリア / デフォルトを使う",
            ctr_pick:"— 候補を選ぶか、自分で入力 —", ctr_clear:"✕ クリア / デフォルトを使う",
        },
        ko: {
            title:"💌 비밀 메시지 — 설정", subtitle:"설정은 자동으로 저장되며 세션 간에 유지됩니다.",
            s_lang:"🌐 언어", l_lang:"언어", h_lang:"카운터 텍스트를 설정하고 이 언어로 제안을 불러옵니다",
            s_type:"유형 및 외관", l_type:"유형",
            s_names:"이름", l_to:"받는 사람 이름", h_to:"메시지를 보내는 상대", l_from:"내 이름", h_from:"서명에 표시됩니다",
            s_msg:"메시지, 버튼 및 카운터 레이블", l_counter:"카운터 레이블", h_counter:'타이머 위에 표시할 텍스트 (예: "함께한 지")',
            l_message:"메시지", l_button:"버튼 텍스트",
            s_photo:"사진 및 카운터", l_photo:"사진 URL", h_photo:"이미지 직접 링크, 비워두면 이모지 사용",
            l_since:"함께한 시작일", h_since:"날짜 및 시간 (비워두면 카운터 숨김)",
            btn_save:"💾 저장", btn_cancel:"취소", btn_reset:"🗑 초기화",
            saved:"✔ 저장되었습니다! 페이지를 새로고침하여 적용하세요.", confirm_reset:"모든 설정을 기본값으로 초기화할까요?",
            ph_counter:"레이블을 입력하세요…", ph_message:"메시지를 입력하세요…", ph_button:"버튼 텍스트를 입력하세요…",
            sugg_pick:"— 제안을 선택하거나 아래에 직접 입력 —", sugg_clear:"✕ 지우기 / 기본값 사용",
            ctr_pick:"— 제안을 선택하거나 직접 입력 —", ctr_clear:"✕ 지우기 / 기본값 사용",
        },
        zh: {
            title:"💌 秘密信息 — 设置", subtitle:"设置自动保存，在各会话之间保持。",
            s_lang:"🌐 语言", l_lang:"语言", h_lang:"设置计时器文字并以此语言加载建议",
            s_type:"类型和外观", l_type:"类型",
            s_names:"姓名", l_to:"收件人姓名", h_to:"这条消息是为谁准备的", l_from:"你的名字", h_from:"显示在签名上",
            s_msg:"消息、按钮和计时器标签", l_counter:"计时器标签", h_counter:'计时器上方的文字（如"在一起"）',
            l_message:"消息", l_button:"按钮文字",
            s_photo:"照片和计时器", l_photo:"照片链接", h_photo:"图片直链，留空则使用表情符号",
            l_since:"在一起从", h_since:"日期和时间（留空则隐藏计时器）",
            btn_save:"💾 保存", btn_cancel:"取消", btn_reset:"🗑 重置",
            saved:"✔ 已保存！请刷新页面以应用。", confirm_reset:"将所有设置重置为默认值？",
            ph_counter:"输入你的标签…", ph_message:"输入你的消息…", ph_button:"输入按钮文字…",
            sugg_pick:"— 选择建议或在下方自行输入 —", sugg_clear:"✕ 清除 / 使用默认",
            ctr_pick:"— 选择建议或自行输入 —", ctr_clear:"✕ 清除 / 使用默认",
        },
        ar: {
            title:"💌 رسالة سرية — الإعدادات", subtitle:"تُحفظ الإعدادات تلقائياً وتستمر بين الجلسات.",
            s_lang:"🌐 اللغة", l_lang:"اللغة", h_lang:"يحدد نص العداد ويحمّل الاقتراحات بهذه اللغة",
            s_type:"النوع والمظهر", l_type:"النوع",
            s_names:"الأسماء", l_to:"اسم المستلم", h_to:"الشخص الذي تُرسل إليه", l_from:"اسمك", h_from:"يظهر في التوقيع",
            s_msg:"الرسالة والزر وعنوان العداد", l_counter:"عنوان العداد", h_counter:'النص فوق المؤقت (مثل: "معاً منذ")',
            l_message:"الرسالة", l_button:"نص الزر",
            s_photo:"الصورة والعداد", l_photo:"رابط الصورة", h_photo:"رابط مباشر للصورة أو اتركه فارغاً للرمز التعبيري",
            l_since:"معاً منذ", h_since:"التاريخ والوقت (اتركه فارغاً لإخفاء العداد)",
            btn_save:"💾 حفظ", btn_cancel:"إلغاء", btn_reset:"🗑 إعادة تعيين",
            saved:"✔ تم الحفظ! أعد تحميل الصفحة للتطبيق.", confirm_reset:"إعادة تعيين كل الإعدادات إلى الافتراضي؟",
            ph_counter:"اكتب عنوانك الخاص…", ph_message:"اكتب رسالتك الخاصة…", ph_button:"اكتب نص الزر…",
            sugg_pick:"— اقتراحات (أو اكتب تحت) —", sugg_clear:"✕ مسح / استخدام الافتراضي",
            ctr_pick:"— اختر اقتراحاً أو اكتب —", ctr_clear:"✕ مسح / استخدام الافتراضي",
        },
        hi: {
            title:"💌 गुप्त संदेश — सेटिंग्स", subtitle:"सेटिंग्स अपने आप सेव होती हैं और सेशन के बीच बनी रहती हैं।",
            s_lang:"🌐 भाषा", l_lang:"भाषा", h_lang:"काउंटर टेक्स्ट सेट करता है और इस भाषा में सुझाव लोड करता है",
            s_type:"प्रकार और रूप", l_type:"प्रकार",
            s_names:"नाम", l_to:"प्राप्तकर्ता का नाम", h_to:"जिसके लिए यह संदेश है", l_from:"आपका नाम", h_from:"हस्ताक्षर में दिखता है",
            s_msg:"संदेश, बटन और काउंटर लेबल", l_counter:"काउंटर लेबल", h_counter:'टाइमर के ऊपर टेक्स्ट (जैसे "साथ हैं")',
            l_message:"संदेश", l_button:"बटन का टेक्स्ट",
            s_photo:"फोटो और काउंटर", l_photo:"फोटो URL", h_photo:"इमेज का सीधा लिंक, खाली छोड़ें तो इमोजी दिखेगा",
            l_since:"साथ हैं तब से", h_since:"तारीख और समय (काउंटर छिपाने के लिए खाली रखें)",
            btn_save:"💾 सेव करें", btn_cancel:"रद्द करें", btn_reset:"🗑 रीसेट करें",
            saved:"✔ सेव हो गया! लागू करने के लिए पेज रिलोड करें।", confirm_reset:"सभी सेटिंग्स डिफ़ॉल्ट पर रीसेट करें?",
            ph_counter:"अपना लेबल लिखें…", ph_message:"अपना संदेश लिखें…", ph_button:"बटन टेक्स्ट लिखें…",
            sugg_pick:"— सुझाव (या नीचे खुद लिखें) —", sugg_clear:"✕ साफ करें / डिफ़ॉल्ट",
            ctr_pick:"— सुझाव चुनें या खुद लिखें —", ctr_clear:"✕ साफ करें / डिफ़ॉल्ट",
        },
        bn: {
            title:"💌 গোপন বার্তা — সেটিংস", subtitle:"সেটিংস স্বয়ংক্রিয়ভাবে সেভ হয় এবং সেশনের মধ্যে থাকে।",
            s_lang:"🌐 ভাষা", l_lang:"ভাষা", h_lang:"কাউন্টারের টেক্সট নির্ধারণ করে এবং এই ভাষায় পরামর্শ লোড করে",
            s_type:"ধরন ও চেহারা", l_type:"ধরন",
            s_names:"নাম", l_to:"প্রাপকের নাম", h_to:"যার জন্য এটি", l_from:"আপনার নাম", h_from:"স্বাক্ষরে দেখানো হয়",
            s_msg:"বার্তা, বাটন ও কাউন্টার লেবেল", l_counter:"কাউন্টার লেবেল", h_counter:'টাইমারের উপরে টেক্সট (যেমন "একসাথে আছি")',
            l_message:"বার্তা", l_button:"বাটনের টেক্সট",
            s_photo:"ছবি ও কাউন্টার", l_photo:"ছবির লিংক", h_photo:"ছবির সরাসরি লিংক, খালি রাখলে ইমোজি দেখাবে",
            l_since:"একসাথে আছি যখন থেকে", h_since:"তারিখ ও সময় (কাউন্টার লুকাতে খালি রাখুন)",
            btn_save:"💾 সেভ করুন", btn_cancel:"বাতিল", btn_reset:"🗑 রিসেট",
            saved:"✔ সেভ হয়েছে! প্রয়োগ করতে পেজ রিলোড করুন।", confirm_reset:"সব সেটিংস ডিফল্টে রিসেট করবেন?",
            ph_counter:"আপনার লেবেল লিখুন…", ph_message:"আপনার বার্তা লিখুন…", ph_button:"বাটনের টেক্সট লিখুন…",
            sugg_pick:"— পরামর্শ (বা নিজে লিখুন) —", sugg_clear:"✕ মুছুন / ডিফল্ট",
            ctr_pick:"— পরামর্শ বেছে নিন বা নিজে লিখুন —", ctr_clear:"✕ মুছুন / ডিফল্ট",
        },
        tr: {
            title:"💌 Gizli Mesaj — Ayarlar", subtitle:"Ayarlar otomatik kaydedilir ve oturumlar arasında saklanır.",
            s_lang:"🌐 Dil", l_lang:"Dil", h_lang:"sayaç metnini ayarlar ve bu dilde önerileri yükler",
            s_type:"Tür ve Görünüm", l_type:"Tür",
            s_names:"İsimler", l_to:"Alıcı adı", h_to:"mesajın kime yönelik olduğu", l_from:"Senin adın", h_from:"imzada görünür",
            s_msg:"Mesaj, Buton ve Sayaç Etiketi", l_counter:"Sayaç etiketi", h_counter:'zamanlayıcı üstündeki metin (ör. "Birlikte")',
            l_message:"Mesaj", l_button:"Buton metni",
            s_photo:"Fotoğraf ve Sayaç", l_photo:"Fotoğraf URL'si", h_photo:"resme doğrudan bağlantı, boş bırakırsan emoji kullanılır",
            l_since:"Birlikte olduğumuzdan beri", h_since:"tarih ve saat (sayacı gizlemek için boş bırak)",
            btn_save:"💾 Kaydet", btn_cancel:"İptal", btn_reset:"🗑 Sıfırla",
            saved:"✔ Kaydedildi! Uygulamak için sayfayı yenile.", confirm_reset:"Tüm ayarları varsayılana sıfırlansın mı?",
            ph_counter:"Kendi etiketini yaz…", ph_message:"Kendi mesajını yaz…", ph_button:"Buton metnini yaz…",
            sugg_pick:"— öneriler (veya aşağıya kendin yaz) —", sugg_clear:"✕ Temizle / varsayılanı kullan",
            ctr_pick:"— öneri seç veya kendin yaz —", ctr_clear:"✕ Temizle / varsayılanı kullan",
        },
        vi: {
            title:"💌 Tin Nhắn Bí Mật — Cài đặt", subtitle:"Cài đặt được lưu tự động và duy trì giữa các phiên.",
            s_lang:"🌐 Ngôn ngữ", l_lang:"Ngôn ngữ", h_lang:"đặt văn bản đồng hồ đếm và tải gợi ý theo ngôn ngữ này",
            s_type:"Loại và Giao diện", l_type:"Loại",
            s_names:"Tên", l_to:"Tên người nhận", h_to:"người mà tin nhắn này dành cho", l_from:"Tên bạn", h_from:"hiển thị trong chữ ký",
            s_msg:"Tin nhắn, Nút và Nhãn đồng hồ", l_counter:"Nhãn đồng hồ", h_counter:'văn bản trên bộ đếm (ví dụ: "Bên nhau được")',
            l_message:"Tin nhắn", l_button:"Văn bản nút",
            s_photo:"Ảnh và Đồng hồ đếm", l_photo:"URL ảnh", h_photo:"liên kết trực tiếp đến ảnh, để trống sẽ dùng emoji",
            l_since:"Bên nhau từ", h_since:"ngày và giờ (để trống để ẩn đồng hồ đếm)",
            btn_save:"💾 Lưu", btn_cancel:"Hủy", btn_reset:"🗑 Đặt lại",
            saved:"✔ Đã lưu! Tải lại trang để áp dụng.", confirm_reset:"Đặt lại tất cả cài đặt về mặc định?",
            ph_counter:"Viết nhãn của bạn…", ph_message:"Viết tin nhắn của bạn…", ph_button:"Viết văn bản nút…",
            sugg_pick:"— gợi ý (hoặc tự viết bên dưới) —", sugg_clear:"✕ Xóa / dùng mặc định",
            ctr_pick:"— chọn gợi ý hoặc tự viết —", ctr_clear:"✕ Xóa / dùng mặc định",
        },
        uk: {
            title:"💌 Таємне Послання — Налаштування", subtitle:"Налаштування зберігаються автоматично та зберігаються між сесіями.",
            s_lang:"🌐 Мова", l_lang:"Мова", h_lang:"встановлює текст лічильника та завантажує підказки цією мовою",
            s_type:"Тип та Вигляд", l_type:"Тип",
            s_names:"Імена", l_to:"Ім'я отримувача", h_to:"людина, якій це присвячено", l_from:"Твоє ім'я", h_from:"відображається в підписі",
            s_msg:"Повідомлення, Кнопка та Мітка лічильника", l_counter:"Мітка лічильника", h_counter:'текст над таймером (напр. "Разом вже")',
            l_message:"Повідомлення", l_button:"Текст кнопки",
            s_photo:"Фото та Лічильник", l_photo:"URL фото", h_photo:"пряме посилання на зображення, або залиш порожнім для емодзі",
            l_since:"Разом з", h_since:"дата та час (залиш порожнім, щоб приховати лічильник)",
            btn_save:"💾 Зберегти", btn_cancel:"Скасувати", btn_reset:"🗑 Скинути",
            saved:"✔ Збережено! Перезавантаж сторінку для застосування.", confirm_reset:"Скинути всі налаштування до стандартних?",
            ph_counter:"Напиши свою мітку…", ph_message:"Напиши своє повідомлення…", ph_button:"Напиши текст кнопки…",
            sugg_pick:"— підказки (або напиши нижче) —", sugg_clear:"✕ Очистити / використати стандарт",
            ctr_pick:"— обери підказку або напиши своє —", ctr_clear:"✕ Очистити / використати стандарт",
        },
        el: {
            title:"💌 Μυστικό Μήνυμα — Ρυθμίσεις", subtitle:"Οι ρυθμίσεις αποθηκεύονται αυτόματα και διατηρούνται μεταξύ συνεδριών.",
            s_lang:"🌐 Γλώσσα", l_lang:"Γλώσσα", h_lang:"ορίζει το κείμενο του μετρητή και φορτώνει προτάσεις σε αυτή τη γλώσσα",
            s_type:"Τύπος και Εμφάνιση", l_type:"Τύπος",
            s_names:"Ονόματα", l_to:"Όνομα παραλήπτη", h_to:"άτομο στο οποίο απευθύνεται", l_from:"Το όνομά σου", h_from:"εμφανίζεται στην υπογραφή",
            s_msg:"Μήνυμα, Κουμπί και Ετικέτα μετρητή", l_counter:"Ετικέτα μετρητή", h_counter:'κείμενο πάνω από τον χρονόμετρο (π.χ. "Μαζί εδώ και")',
            l_message:"Μήνυμα", l_button:"Κείμενο κουμπιού",
            s_photo:"Φωτογραφία και Μετρητής", l_photo:"URL φωτογραφίας", h_photo:"άμεσος σύνδεσμος εικόνας, ή άφησε κενό για emoji",
            l_since:"Μαζί από", h_since:"ημερομηνία και ώρα (άφησε κενό για να κρύψεις τον μετρητή)",
            btn_save:"💾 Αποθήκευση", btn_cancel:"Ακύρωση", btn_reset:"🗑 Επαναφορά",
            saved:"✔ Αποθηκεύτηκε! Ανανέωσε τη σελίδα για εφαρμογή.", confirm_reset:"Επαναφορά όλων των ρυθμίσεων στις προεπιλογές;",
            ph_counter:"Γράψε τη δική σου ετικέτα…", ph_message:"Γράψε το δικό σου μήνυμα…", ph_button:"Γράψε το κείμενο του κουμπιού…",
            sugg_pick:"— προτάσεις (ή γράψε παρακάτω) —", sugg_clear:"✕ Καθαρισμός / χρήση προεπιλογής",
            ctr_pick:"— επίλεξε πρόταση ή γράψε δικό σου —", ctr_clear:"✕ Καθαρισμός / χρήση προεπιλογής",
        },
        sv: {
            title:"💌 Hemligt Meddelande — Inställningar", subtitle:"Inställningar sparas automatiskt och finns kvar mellan sessioner.",
            s_lang:"🌐 Språk", l_lang:"Språk", h_lang:"anger räknarens text och laddar förslag på detta språk",
            s_type:"Typ och Utseende", l_type:"Typ",
            s_names:"Namn", l_to:"Mottagarens namn", h_to:"personen som det är tillägnat", l_from:"Ditt namn", h_from:"visas i signaturen",
            s_msg:"Meddelande, Knapp och Räknaretikett", l_counter:"Räknaretikett", h_counter:'text ovanför timern (t.ex. "Tillsammans sedan")',
            l_message:"Meddelande", l_button:"Knapptext",
            s_photo:"Foto och Räknare", l_photo:"Foto-URL", h_photo:"direktlänk till bild, eller lämna tomt för emoji",
            l_since:"Tillsammans sedan", h_since:"datum och tid (lämna tomt för att dölja räknaren)",
            btn_save:"💾 Spara", btn_cancel:"Avbryt", btn_reset:"🗑 Återställ",
            saved:"✔ Sparat! Ladda om sidan för att tillämpa.", confirm_reset:"Återställa alla inställningar till standard?",
            ph_counter:"Skriv din egen etikett…", ph_message:"Skriv ditt eget meddelande…", ph_button:"Skriv knapptexten…",
            sugg_pick:"— förslag (eller skriv nedan) —", sugg_clear:"✕ Rensa / använd standard",
            ctr_pick:"— välj förslag eller skriv eget —", ctr_clear:"✕ Rensa / använd standard",
        },
        no: {
            title:"💌 Hemmelig Melding — Innstillinger", subtitle:"Innstillinger lagres automatisk og beholdes mellom økter.",
            s_lang:"🌐 Språk", l_lang:"Språk", h_lang:"angir tellertekst og laster forslag på dette språket",
            s_type:"Type og Utseende", l_type:"Type",
            s_names:"Navn", l_to:"Mottakerens navn", h_to:"personen det er dedikert til", l_from:"Ditt navn", h_from:"vises i signaturen",
            s_msg:"Melding, Knapp og Telleretikett", l_counter:"Telleretikett", h_counter:'tekst over timeren (f.eks. "Sammen siden")',
            l_message:"Melding", l_button:"Knappetekst",
            s_photo:"Bilde og Teller", l_photo:"Bilde-URL", h_photo:"direktelenke til bilde, eller la stå tomt for emoji",
            l_since:"Sammen siden", h_since:"dato og tid (la stå tomt for å skjule teller)",
            btn_save:"💾 Lagre", btn_cancel:"Avbryt", btn_reset:"🗑 Tilbakestill",
            saved:"✔ Lagret! Last inn siden på nytt for å bruke.", confirm_reset:"Tilbakestille alle innstillinger til standard?",
            ph_counter:"Skriv din egen etikett…", ph_message:"Skriv din egen melding…", ph_button:"Skriv knappteksten…",
            sugg_pick:"— forslag (eller skriv nedenfor) —", sugg_clear:"✕ Tøm / bruk standard",
            ctr_pick:"— velg forslag eller skriv eget —", ctr_clear:"✕ Tøm / bruk standard",
        },
        da: {
            title:"💌 Hemmelig Besked — Indstillinger", subtitle:"Indstillinger gemmes automatisk og opretholdes mellem sessioner.",
            s_lang:"🌐 Sprog", l_lang:"Sprog", h_lang:"angiver tællerens tekst og indlæser forslag på dette sprog",
            s_type:"Type og Udseende", l_type:"Type",
            s_names:"Navne", l_to:"Modtagerens navn", h_to:"personen det er tilegnet", l_from:"Dit navn", h_from:"vises i signaturen",
            s_msg:"Besked, Knap og Telleretiket", l_counter:"Telleretiket", h_counter:'tekst over timeren (f.eks. "Sammen siden")',
            l_message:"Besked", l_button:"Knaptekst",
            s_photo:"Billede og Tæller", l_photo:"Billede-URL", h_photo:"direkte link til billede, eller lad stå tomt for emoji",
            l_since:"Sammen siden", h_since:"dato og tid (lad stå tomt for at skjule tæller)",
            btn_save:"💾 Gem", btn_cancel:"Annuller", btn_reset:"🗑 Nulstil",
            saved:"✔ Gemt! Genindlæs siden for at anvende.", confirm_reset:"Nulstille alle indstillinger til standard?",
            ph_counter:"Skriv din egen etiket…", ph_message:"Skriv din egen besked…", ph_button:"Skriv knappteksten…",
            sugg_pick:"— forslag (eller skriv nedenfor) —", sugg_clear:"✕ Ryd / brug standard",
            ctr_pick:"— vælg forslag eller skriv eget —", ctr_clear:"✕ Ryd / brug standard",
        },
        fi: {
            title:"💌 Salainen Viesti — Asetukset", subtitle:"Asetukset tallennetaan automaattisesti ja säilyvät istuntojen välillä.",
            s_lang:"🌐 Kieli", l_lang:"Kieli", h_lang:"asettaa laskurin tekstin ja lataa ehdotukset tällä kielellä",
            s_type:"Tyyppi ja Ulkoasu", l_type:"Tyyppi",
            s_names:"Nimet", l_to:"Vastaanottajan nimi", h_to:"henkilö, jolle tämä on omistettu", l_from:"Sinun nimesi", h_from:"näkyy allekirjoituksessa",
            s_msg:"Viesti, Nappi ja Laskurin etiketti", l_counter:"Laskurin etiketti", h_counter:'teksti ajastimen yläpuolella (esim. "Yhdessä jo")',
            l_message:"Viesti", l_button:"Napin teksti",
            s_photo:"Kuva ja Laskuri", l_photo:"Kuvan URL", h_photo:"suora linkki kuvaan, tai jätä tyhjäksi emojia varten",
            l_since:"Yhdessä alkaen", h_since:"päivämäärä ja aika (jätä tyhjäksi piilottaaksesi laskurin)",
            btn_save:"💾 Tallenna", btn_cancel:"Peruuta", btn_reset:"🗑 Palauta",
            saved:"✔ Tallennettu! Lataa sivu uudelleen käyttääksesi.", confirm_reset:"Palauttaa kaikki asetukset oletuksiksi?",
            ph_counter:"Kirjoita oma etikettisi…", ph_message:"Kirjoita oma viestisi…", ph_button:"Kirjoita napin teksti…",
            sugg_pick:"— ehdotukset (tai kirjoita alle) —", sugg_clear:"✕ Tyhjennä / käytä oletusta",
            ctr_pick:"— valitse ehdotus tai kirjoita oma —", ctr_clear:"✕ Tyhjennä / käytä oletusta",
        },
        ro: {
            title:"💌 Mesaj Secret — Setări", subtitle:"Setările se salvează automat și persistă între sesiuni.",
            s_lang:"🌐 Limbă", l_lang:"Limbă", h_lang:"setează textul contorului și încarcă sugestii în această limbă",
            s_type:"Tip și Aspect", l_type:"Tip",
            s_names:"Nume", l_to:"Numele destinatarului", h_to:"persoana căreia îi este dedicat", l_from:"Numele tău", h_from:"apare în semnătură",
            s_msg:"Mesaj, Buton și Etichetă contor", l_counter:"Eticheta contorului", h_counter:'text deasupra cronometrului (ex: "Împreună de")',
            l_message:"Mesaj", l_button:"Textul butonului",
            s_photo:"Fotografie și Contor", l_photo:"URL fotografie", h_photo:"link direct la imagine, sau lasă gol pentru emoji",
            l_since:"Împreună din", h_since:"dată și oră (lasă gol pentru a ascunde contorul)",
            btn_save:"💾 Salvează", btn_cancel:"Anulează", btn_reset:"🗑 Resetează",
            saved:"✔ Salvat! Reîncarcă pagina pentru a aplica.", confirm_reset:"Resetezi toate setările la implicite?",
            ph_counter:"Scrie propria etichetă…", ph_message:"Scrie propriul mesaj…", ph_button:"Scrie textul butonului…",
            sugg_pick:"— sugestii (sau scrie mai jos) —", sugg_clear:"✕ Șterge / folosește implicit",
            ctr_pick:"— alege o sugestie sau scrie propria —", ctr_clear:"✕ Șterge / folosește implicit",
        },
        hu: {
            title:"💌 Titkos Üzenet — Beállítások", subtitle:"A beállítások automatikusan mentésre kerülnek és megmaradnak az ülések között.",
            s_lang:"🌐 Nyelv", l_lang:"Nyelv", h_lang:"beállítja a számláló szövegét és ezen a nyelven tölti be a javaslatokat",
            s_type:"Típus és Megjelenés", l_type:"Típus",
            s_names:"Nevek", l_to:"Címzett neve", h_to:"a személy, akinek szól", l_from:"A neved", h_from:"az aláírásban jelenik meg",
            s_msg:"Üzenet, Gomb és Számlálócímke", l_counter:"Számlálócímke", h_counter:'szöveg a számláló felett (pl. "Együtt már")',
            l_message:"Üzenet", l_button:"Gomb szövege",
            s_photo:"Fénykép és Számláló", l_photo:"Fénykép URL", h_photo:"közvetlen kép-link, vagy hagyd üresen az emojihoz",
            l_since:"Együtt vagyunk", h_since:"dátum és idő (hagyd üresen a számláló elrejtéséhez)",
            btn_save:"💾 Mentés", btn_cancel:"Mégse", btn_reset:"🗑 Visszaállítás",
            saved:"✔ Elmentve! Az alkalmazáshoz töltsd újra az oldalt.", confirm_reset:"Visszaállítod az összes beállítást az alapértelmezettre?",
            ph_counter:"Írd be a saját címkéd…", ph_message:"Írd be a saját üzeneted…", ph_button:"Írd be a gomb szövegét…",
            sugg_pick:"— javaslatok (vagy írd alá) —", sugg_clear:"✕ Töröl / alapértelmezett",
            ctr_pick:"— válassz javaslatot vagy írd magad —", ctr_clear:"✕ Töröl / alapértelmezett",
        },
        cs: {
            title:"💌 Tajná Zpráva — Nastavení", subtitle:"Nastavení se ukládají automaticky a přetrvávají mezi relacemi.",
            s_lang:"🌐 Jazyk", l_lang:"Jazyk", h_lang:"nastaví text počítadla a načte návrhy v tomto jazyce",
            s_type:"Typ a Vzhled", l_type:"Typ",
            s_names:"Jména", l_to:"Jméno příjemce", h_to:"osoba, které je to věnováno", l_from:"Tvoje jméno", h_from:"zobrazí se v podpisu",
            s_msg:"Zpráva, Tlačítko a Popis počítadla", l_counter:"Popis počítadla", h_counter:'text nad časovačem (např. "Spolu už")',
            l_message:"Zpráva", l_button:"Text tlačítka",
            s_photo:"Fotografie a Počítadlo", l_photo:"URL fotografie", h_photo:"přímý odkaz na obrázek, nebo nechej prázdné pro emoji",
            l_since:"Spolu od", h_since:"datum a čas (nechej prázdné pro skrytí počítadla)",
            btn_save:"💾 Uložit", btn_cancel:"Zrušit", btn_reset:"🗑 Obnovit",
            saved:"✔ Uloženo! Obnov stránku pro použití.", confirm_reset:"Obnovit všechna nastavení na výchozí?",
            ph_counter:"Napiš vlastní popis…", ph_message:"Napiš vlastní zprávu…", ph_button:"Napiš text tlačítka…",
            sugg_pick:"— návrhy (nebo napiš níže) —", sugg_clear:"✕ Vymazat / použít výchozí",
            ctr_pick:"— vyber návrh nebo napiš vlastní —", ctr_clear:"✕ Vymazat / použít výchozí",
        },
    };
    function getUIStr(langTag) {
        if (!langTag || langTag === "auto") langTag = navigator.language || "en";
        if (UI_STRINGS[langTag]) return UI_STRINGS[langTag];
        const found = Object.keys(UI_STRINGS).find(k => k.toLowerCase() === langTag.toLowerCase());
        if (found) return UI_STRINGS[found];
        const base = langTag.split("-")[0].toLowerCase();
        const foundBase = Object.keys(UI_STRINGS).find(k => k.toLowerCase() === base);
        return UI_STRINGS[foundBase] || UI_STRINGS.en;
    }
    const TYPES = {
        love: {
            accent:    "#e8427a",
            icon:      "❤️",
            particles: ["❤️", "💖", "💗", "💓", "💞", "🌹", "✨"],
            message:   "Every moment with you feels like home 🌟",
            button:    "Open surprise 💌",
            keywords: [
                // EN
                "love", "i love you", "valentine", "romance", "sweetheart", "darling",
                // PT
                "amor", "amo-te", "namoro", "valentim", "querida", "querido",
                // FR
                "amour", "je t'aime", "saint-valentin", "mon amour", "chéri", "chérie",
                // ES
                "te amo", "te quiero", "mi amor", "san valentín", "enamorado",
                // IT
                "ti amo", "amore", "san valentino", "innamorato", "tesoro",
                // DE
                "ich liebe dich", "liebe", "liebling", "schatz", "valentinstag",
                // NL
                "ik hou van jou", "liefde", "valentijn",
                // PL
                "kocham cię", "miłość", "walentynki",
                // JA
                "愛してる", "バレンタイン",
                // KO
                "사랑해", "발렌타인",
                // ZH
                "我爱你", "情人节",
            ],
        },
        friendship: {
            accent:    "#f59e0b",
            icon:      "💛",
            particles: ["💛", "⭐", "🌟", "✨", "🎉", "🫂", "🌈"],
            message:   "Lucky to have you in my life 🌟",
            button:    "Open surprise 🎉",
            keywords: [
                // EN
                "best friend", "bestie", "friendship", "bff", "true friend", "my friend",
                // PT
                "melhor amigo", "melhor amiga", "amizade", "amigo", "amiga",
                // FR
                "meilleur ami", "meilleure amie", "amitié", "mon ami", "mon amie",
                // ES
                "mejor amigo", "mejor amiga", "amistad", "mi amigo", "mi amiga",
                // IT
                "migliore amico", "migliore amica", "amicizia", "amico", "amica",
                // DE
                "bester freund", "beste freundin", "freundschaft", "freund", "freundin",
                // NL
                "beste vriend", "beste vriendin", "vriendschap",
                // PL
                "najlepszy przyjaciel", "przyjaźń",
                // JA
                "友情", "親友",
                // KO
                "우정", "친구",
                // ZH
                "友情", "好朋友",
            ],
        },
        family: {
            accent:    "#10b981",
            icon:      "💚",
            particles: ["💚", "🏡", "🌿", "⭐", "✨", "🤗", "🫶"],
            message:   "Family is everything — so grateful for you 🌿",
            button:    "Open surprise 🏡",
            keywords: [
                // EN
                "family", "brother", "sister", "sibling", "son", "daughter", "child",
                "my family", "i love my family", "family is everything",
                // PT
                "família", "irmão", "irmã", "filho", "filha", "família é tudo",
                // FR
                "famille", "frère", "sœur", "fils", "fille", "ma famille",
                // ES
                "familia", "hermano", "hermana", "hijo", "hija", "mi familia",
                // IT
                "famiglia", "fratello", "sorella", "figlio", "figlia",
                // DE
                "familie", "bruder", "schwester", "sohn", "tochter",
                // NL
                "familie", "broer", "zus", "zoon", "dochter",
                // PL
                "rodzina", "brat", "siostra", "syn", "córka",
                // JA
                "家族", "兄弟", "姉妹",
                // KO
                "가족", "형제", "자매",
                // ZH
                "家人", "兄弟", "姐妹",
            ],
        },
        parents: {
            accent:    "#8b5cf6",
            icon:      "💜",
            particles: ["💜", "🌸", "🌷", "✨", "⭐", "🙏", "💐"],
            message:   "Thank you for everything — I love you 💜",
            button:    "Open surprise 💐",
            keywords: [
                // EN
                "mum", "mom", "dad", "father", "mother", "parents", "grandma", "grandpa",
                "grandmother", "grandfather", "i love my mum", "i love my dad",
                // PT
                "mãe", "pai", "pais", "avó", "avô", "vovó", "vovô",
                "amo a minha mãe", "amo o meu pai",
                // FR
                "maman", "papa", "parents", "grand-mère", "grand-père",
                "j'aime ma maman", "j'aime mon papa",
                // ES
                "mamá", "papá", "padres", "abuela", "abuelo",
                "te quiero mamá", "te quiero papá",
                // IT
                "mamma", "papà", "genitori", "nonna", "nonno",
                // DE
                "mama", "papa", "eltern", "oma", "opa",
                // NL
                "mama", "papa", "ouders", "oma", "opa",
                // PL
                "mama", "tata", "rodzice", "babcia", "dziadek",
                // JA
                "お母さん", "お父さん", "両親",
                // KO
                "엄마", "아빠", "부모님",
                // ZH
                "妈妈", "爸爸", "父母",
            ],
        },
        pets: {
            accent:    "#f97316",
            icon:      "🐾",
            particles: ["🐾", "🧡", "🐶", "🐱", "⭐", "✨", "🦴"],
            message:   "You make every day brighter, little one 🐾",
            button:    "Open surprise 🐾",
            keywords: [
                // EN — standalone + phrase
                "my dog", "my cat", "my pet", "my rabbit", "my hamster", "my parrot", "my fish", "my turtle", "my guinea pig", "my bird",
                "i love my dog", "i love my cat", "best dog", "best cat", "good boy", "good girl", "fur baby",
                // PT — com e sem acento
                "cão", "cao", "gato", "coelho", "hamster", "papagaio", "periquito", "peixe", "tartaruga", "porquinho da índia", "porquinho da india", "ave", "pássaro", "passaro",
                "o meu cão", "o meu cao", "o meu gato", "o meu coelho", "o meu hamster", "o meu papagaio", "o meu periquito",
                "amo o meu cão", "amo o meu cao", "amo o meu gato",
                "meu cão", "meu cao", "meu gato", "meu coelho", "meu hamster",
                "animal de estimação", "animal de estimacao",
                // FR
                "mon chien", "mon chat", "mon lapin", "mon hamster", "mon animal", "mon perroquet", "mon poisson",
                "j'aime mon chien", "chien", "chat",
                // ES
                "mi perro", "mi gato", "mi conejo", "mi mascota", "mi pájaro", "mi pajaro", "mi pez", "mi tortuga", "mi hamster",
                "amo a mi perro", "perro", "gato",
                // IT
                "il mio cane", "il mio gatto", "il mio coniglio", "il mio animale", "il mio pesce", "il mio pappagallo",
                "cane", "gatto",
                // DE
                "mein hund", "meine katze", "mein hase", "mein haustier", "mein hamster", "mein vogel",
                "ich liebe meinen hund", "hund", "katze",
                // NL
                "mijn hond", "mijn kat", "mijn konijn", "mijn huisdier", "mijn vis", "mijn vogel",
                "hond", "kat",
                // PL
                "mój pies", "mój kot", "mój królik", "moje zwierzę", "mój chomik",
                "pies", "kot",
                // JA
                "愛犬", "愛猫", "ペット",
                // KO
                "우리 강아지", "우리 고양이",
                // ZH
                "我的狗", "我的猫", "宠物",
            ],
        },
        custom: {
            accent:    "#6366f1",
            icon:      "💌",
            particles: ["💌", "✨", "⭐", "🎉", "🌟"],
            message:   "You mean the world to me 🌟",
            button:    "Open surprise 💌",
            // Custom type: trigger on any of these, or set type=custom and any search works
            keywords:  [
                "surprise", "secret message", "secret", "mensagem secreta", "surpresa",
                "mensaje secreto", "message secret", "messaggio segreto", "geheime nachricht",
                "geheim bericht", "tajemna wiadomosc", "секретное сообщение", "秘密メッセージ",
                "비밀 메시지", "秘密信息", "رسالة سرية", "गुप्त संदेश", "gizli mesaj",
                "μυστικό μήνυμα", "hemligt meddelande", "hemmelig melding", "hemmelig besked",
                "salainen viesti", "mesaj secret", "titkos üzenet", "tajná zpráva",
                "таємне послання", "tin nhắn bí mật", "গোপন বার্তা",
            ],
        },
    };

    // ── Resolve final theme (type defaults + CONFIG overrides) ───────────────────
    const T = TYPES[CONFIG.type] || TYPES.custom;
    const accent      = CONFIG.accentColor  || T.accent;
    const icon        = CONFIG.icon         || T.icon;
    const particles   = T.particles;
    const message     = CONFIG.message      || T.message;
    const buttonLabel = CONFIG.buttonLabel  || T.button;
    const keywords    = T.keywords;

    // ── Always register menu (independent of keyword match) ──────────────────────
    GM_registerMenuCommand("⚙️ Secret Message — Settings", openSettingsPanel);
    GM_registerMenuCommand("🔍 Secret Message — Preview", openSurprise);

    // ── Keyword match — card only shown on matching searches ──────────────────────
    const query   = new URLSearchParams(window.location.search).get("q") || "";
    const isMatch = keywords.some(kw => query.toLowerCase().includes(kw.toLowerCase()));

    // ── i18n counter labels ──────────────────────────────────────────────────────
    const LANGS = {
        "en":    { together: "Together for",      years: "year",   yearsP: "years",   days: "day",    daysP: "days"    },
        "pt":    { together: "Juntos há",          years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    },
        "pt-PT": { together: "Juntos há",          years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    },
        "pt-BR": { together: "Juntos há",          years: "ano",    yearsP: "anos",    days: "dia",    daysP: "dias"    },
        "fr":    { together: "Ensemble depuis",    years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-FR": { together: "Ensemble depuis",    years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-CA": { together: "Ensemble depuis",    years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-BE": { together: "Ensemble depuis",    years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "fr-CH": { together: "Ensemble depuis",    years: "an",     yearsP: "ans",     days: "jour",   daysP: "jours"   },
        "es":    { together: "Juntos hace",        years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-ES": { together: "Juntos desde hace",  years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-MX": { together: "Juntos hace",        years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-AR": { together: "Juntos hace",        years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-CO": { together: "Juntos hace",        years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "es-CL": { together: "Juntos hace",        years: "año",    yearsP: "años",    days: "día",    daysP: "días"    },
        "it":    { together: "Insieme da",         years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        "it-IT": { together: "Insieme da",         years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        "it-CH": { together: "Insieme da",         years: "anno",   yearsP: "anni",    days: "giorno", daysP: "giorni"  },
        "de":    { together: "Zusammen seit",      years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-DE": { together: "Zusammen seit",      years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-AT": { together: "Zusammen seit",      years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "de-CH": { together: "Zusammen seit",      years: "Jahr",   yearsP: "Jahre",   days: "Tag",    daysP: "Tage"    },
        "nl":    { together: "Samen al",           years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        "nl-NL": { together: "Samen al",           years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        "nl-BE": { together: "Samen al",           years: "jaar",   yearsP: "jaar",    days: "dag",    daysP: "dagen"   },
        "pl":    { together: "Razem od",           years: "rok",    yearsP: "lat",     days: "dzień",  daysP: "dni"     },
        "pl-PL": { together: "Razem od",           years: "rok",    yearsP: "lat",     days: "dzień",  daysP: "dni"     },
        "ru":    { together: "Вместе уже",         years: "год",    yearsP: "лет",     days: "день",   daysP: "дней"    },
        "ru-RU": { together: "Вместе уже",         years: "год",    yearsP: "лет",     days: "день",   daysP: "дней"    },
        "ja":    { together: "一緒になって",          years: "年",     yearsP: "年",      days: "日",     daysP: "日"      },
        "ja-JP": { together: "一緒になって",          years: "年",     yearsP: "年",      days: "日",     daysP: "日"      },
        "ko":    { together: "함께한 지",            years: "년",     yearsP: "년",      days: "일",     daysP: "일"      },
        "ko-KR": { together: "함께한 지",            years: "년",     yearsP: "년",      days: "일",     daysP: "일"      },
        "zh":    { together: "在一起",               years: "年",     yearsP: "年",      days: "天",     daysP: "天"      },
        "zh-CN": { together: "在一起",               years: "年",     yearsP: "年",      days: "天",     daysP: "天"      },
        "zh-TW": { together: "在一起已經",            years: "年",     yearsP: "年",      days: "天",     daysP: "天"      },
        "zh-HK": { together: "在一起已經",            years: "年",     yearsP: "年",      days: "天",     daysP: "天"      },
        "ar":    { together: "معاً منذ",            years: "سنة",    yearsP: "سنوات",   days: "يوم",    daysP: "أيام"    },
        "ar-SA": { together: "معاً منذ",            years: "سنة",    yearsP: "سنوات",   days: "يوم",    daysP: "أيام"    },
        "hi":    { together: "साथ हैं",             years: "साल",    yearsP: "साल",     days: "दिन",    daysP: "दिन"     },
        "hi-IN": { together: "साथ हैं",             years: "साल",    yearsP: "साल",     days: "दिन",    daysP: "दिन"     },
        "tr":    { together: "Birlikte",            years: "yıl",    yearsP: "yıl",     days: "gün",    daysP: "gün"     },
        "tr-TR": { together: "Birlikte",            years: "yıl",    yearsP: "yıl",     days: "gün",    daysP: "gün"     },
        "el":    { together: "Μαζί εδώ και",        years: "χρόνο",  yearsP: "χρόνια",  days: "μέρα",   daysP: "μέρες"   },
        "el-GR": { together: "Μαζί εδώ και",        years: "χρόνο",  yearsP: "χρόνια",  days: "μέρα",   daysP: "μέρες"   },
        "sv":    { together: "Tillsammans sedan",   years: "år",     yearsP: "år",      days: "dag",    daysP: "dagar"   },
        "sv-SE": { together: "Tillsammans sedan",   years: "år",     yearsP: "år",      days: "dag",    daysP: "dagar"   },
        "no":    { together: "Sammen siden",        years: "år",     yearsP: "år",      days: "dag",    daysP: "dager"   },
        "nb-NO": { together: "Sammen siden",        years: "år",     yearsP: "år",      days: "dag",    daysP: "dager"   },
        "da":    { together: "Sammen siden",        years: "år",     yearsP: "år",      days: "dag",    daysP: "dage"    },
        "da-DK": { together: "Sammen siden",        years: "år",     yearsP: "år",      days: "dag",    daysP: "dage"    },
        "fi":    { together: "Yhdessä jo",          years: "vuosi",  yearsP: "vuotta",  days: "päivä",  daysP: "päivää"  },
        "fi-FI": { together: "Yhdessä jo",          years: "vuosi",  yearsP: "vuotta",  days: "päivä",  daysP: "päivää"  },
        "ro":    { together: "Împreună de",         years: "an",     yearsP: "ani",     days: "zi",     daysP: "zile"    },
        "ro-RO": { together: "Împreună de",         years: "an",     yearsP: "ani",     days: "zi",     daysP: "zile"    },
        "hu":    { together: "Együtt",              years: "éve",    yearsP: "éve",     days: "napja",  daysP: "napja"   },
        "hu-HU": { together: "Együtt",              years: "éve",    yearsP: "éve",     days: "napja",  daysP: "napja"   },
        "cs":    { together: "Spolu už",            years: "rok",    yearsP: "let",     days: "den",    daysP: "dní"     },
        "cs-CZ": { together: "Spolu už",            years: "rok",    yearsP: "let",     days: "den",    daysP: "dní"     },
        "uk":    { together: "Разом вже",           years: "рік",    yearsP: "років",   days: "день",   daysP: "днів"    },
        "uk-UA": { together: "Разом вже",           years: "рік",    yearsP: "років",   days: "день",   daysP: "днів"    },
        "vi":    { together: "Bên nhau được",       years: "năm",    yearsP: "năm",     days: "ngày",   daysP: "ngày"    },
        "vi-VN": { together: "Bên nhau được",       years: "năm",    yearsP: "năm",     days: "ngày",   daysP: "ngày"    },
        "bn":    { together: "একসাথে আছি",           years: "বছর",    yearsP: "বছর",     days: "দিন",    daysP: "দিন"     },
        "bn-BD": { together: "একসাথে আছি",           years: "বছর",    yearsP: "বছর",     days: "দিন",    daysP: "দিন"     },
    };

    // ── Per-type "together" label (overrides LANGS.together) ─────────────────────
    const TOGETHER = {
        love:       { en:"Together for",   pt:"Juntos há",      "pt-PT":"Juntos há",    "pt-BR":"Juntos há",    fr:"Ensemble depuis",   es:"Juntos hace",      it:"Insieme da",        de:"Zusammen seit",   nl:"Samen al",        pl:"Razem od",       ru:"Вместе уже",   ja:"一緒になって",   ko:"함께한 지",    zh:"在一起",       ar:"معاً منذ",    hi:"साथ हैं",    tr:"Birlikte",        el:"Μαζί εδώ και",  sv:"Tillsammans sedan", uk:"Разом вже",   vi:"Bên nhau được",  bn:"একসাথে আছি" },
        friendship: { en:"Friends for",    pt:"Amigos há",      "pt-PT":"Amigos há",    "pt-BR":"Amigos há",    fr:"Amis depuis",       es:"Amigos hace",      it:"Amici da",          de:"Befreundet seit", nl:"Vrienden al",     pl:"Przyjaciółmi od",ru:"Друзья уже",    ja:"友達になって",  ko:"친구한 지",   zh:"成为朋友",     ar:"أصدقاء منذ",  hi:"दोस्त हैं",  tr:"Arkadaşız",       el:"Φίλοι εδώ και", sv:"Vänner sedan",      uk:"Друзі вже",   vi:"Bạn bè được",    bn:"বন্ধু আছি" },
        family:     { en:"Family for",     pt:"Família há",     "pt-PT":"Família há",   "pt-BR":"Família há",   fr:"Famille depuis",    es:"Familia hace",     it:"Famiglia da",       de:"Familie seit",    nl:"Familie al",      pl:"Rodziną od",     ru:"Семья уже",    ja:"家族になって",  ko:"가족한 지",   zh:"成为家人",     ar:"عائلة منذ",   hi:"परिवार है",  tr:"Aile olarak",     el:"Οικογένεια εδώ και", sv:"Familj sedan", uk:"Сім'я вже",   vi:"Gia đình được",  bn:"পরিবার আছি" },
        parents:    { en:"With you for",   pt:"Contigo há",     "pt-PT":"Contigo há",   "pt-BR":"Com você há",  fr:"Avec toi depuis",   es:"Contigo hace",     it:"Con te da",         de:"Mit dir seit",    nl:"Met jou al",      pl:"Z tobą od",      ru:"С тобой уже",  ja:"あなたと",      ko:"함께한 지",   zh:"陪你多久了",   ar:"معك منذ",     hi:"तुम्हारे साथ", tr:"Seninle",        el:"Μαζί σου εδώ και", sv:"Med dig sedan",  uk:"З тобою вже", vi:"Bên bạn được",   bn:"আপনার সাথে" },
        pets:       { en:"Together for",   pt:"Juntos há",      "pt-PT":"Juntos há",    "pt-BR":"Juntos há",    fr:"Ensemble depuis",   es:"Juntos hace",      it:"Insieme da",        de:"Zusammen seit",   nl:"Samen al",        pl:"Razem od",       ru:"Вместе уже",   ja:"一緒になって",   ko:"함께한 지",    zh:"在一起",       ar:"معاً منذ",    hi:"साथ हैं",    tr:"Birlikte",        el:"Μαζί εδώ και",  sv:"Tillsammans sedan", uk:"Разом вже",   vi:"Bên nhau được",  bn:"একসাথে আছি" },
        custom:     { en:"Since",          pt:"Desde",          "pt-PT":"Desde",        "pt-BR":"Desde",        fr:"Depuis",            es:"Desde",            it:"Da",                de:"Seit",            nl:"Sinds",           pl:"Od",             ru:"С",            ja:"から",          ko:"부터",         zh:"从",           ar:"منذ",         hi:"से",         tr:"Dan beri",        el:"Από",           sv:"Sedan",             uk:"З",           vi:"Từ",             bn:"থেকে" },
    };

    function getTogetherLabel(langTag) {
        const type = CONFIG.type || "love";
        const map  = TOGETHER[type] || TOGETHER.love;
        // Try exact, then case-insensitive match, then base code
        if (map[langTag]) return map[langTag];
        const found = Object.keys(map).find(k => k.toLowerCase() === langTag.toLowerCase());
        if (found) return map[found];
        const base = langTag.split("-")[0];
        if (map[base]) return map[base];
        return map["en"] || "Together for";
    }

    function getLang() {
        if (typeof CONFIG.lang === "object") return CONFIG.lang;
        const candidates = CONFIG.lang === "auto"
            ? (navigator.languages || [navigator.language || "en"])
            : [CONFIG.lang];
        for (const tag of candidates) {
            if (LANGS[tag])              return LANGS[tag];
            const base = tag.split("-")[0];
            if (LANGS[base])             return LANGS[base];
        }
        return LANGS["en"];
    }

    // ── Helpers ──────────────────────────────────────────────────────────────────
    function pad(n) { return String(n).padStart(2, "0"); }

    function lighten(hex, amount = 0.65) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const mix = v => Math.round(v + (255 - v) * amount);
        return `rgb(${mix(r)},${mix(g)},${mix(b)})`;
    }
    const accentLight = lighten(accent);

    // ── Build surprise page ───────────────────────────────────────────────────────
    function buildSurprisePage() {
        const lang       = getLang();
        const hasPhoto   = !!CONFIG.photoUrl;
        const hasCounter = !!CONFIG.since;

        const photoHTML = hasPhoto
            ? `<img class="photo" src="${CONFIG.photoUrl}" alt="Special photo" loading="lazy">`
            : "";

        const counterHTML = hasCounter ? `
            <p class="counter-label">${CONFIG.counterLabel || getTogetherLabel(CONFIG.lang === "auto" ? (navigator.language || "en") : CONFIG.lang)}</p>
            <p class="counter" id="lm-counter">…</p>` : "";

        const counterJS = hasCounter ? `
            const since = new Date("${CONFIG.since}").getTime();
            const lang  = ${JSON.stringify(lang)};
            function pad(n) { return String(n).padStart(2, "0"); }
            function update() {
                const diff  = Date.now() - since;
                const secs  = Math.floor(diff / 1000) % 60;
                const mins  = Math.floor(diff / 60000) % 60;
                const hours = Math.floor(diff / 3600000) % 24;
                const days  = Math.floor(diff / 86400000);
                const years = Math.floor(days / 365);
                const rem   = days % 365;
                let t = "";
                if (years > 0) t += years + " " + (years === 1 ? lang.years : lang.yearsP) + ", ";
                t += rem + " " + (rem === 1 ? lang.days : lang.daysP) + ", ";
                t += pad(hours) + "h " + pad(mins) + "m " + pad(secs) + "s";
                document.getElementById("lm-counter").textContent = t;
            }
            update(); setInterval(update, 1000);` : "";

        const particlesJS = `
            const container = document.getElementById("lm-particles");
            const EMOJIS = ${JSON.stringify(particles)};
            for (let i = 0; i < 28; i++) {
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
            }`;

        const shapeType   = CONFIG.type || "love";
        const shapeEmoji  = { love:"❤️", friendship:"⭐", family:"💚", parents:"🌸", pets:"🐾", custom:"✨" }[shapeType] || "❤️";
        const shapeEmojis = {
            love:       ["❤️","💖","💗","💓","💕"],
            friendship: ["⭐","✨","💛","🌟","⭐"],
            family:     ["💚","🌿","🏡","💚","🌱"],
            parents:    ["🌸","💜","💐","🌷","🌸"],
            pets:       ["🐾","🧡","🐶","🐱","🐾"],
            custom:     ["✨","💌","⭐","🌟","✨"],
        }[shapeType] || ["❤️"];

        const heartOutlineJS = `
            (function() {
                const bg = document.getElementById("lm-heart-outline");
                const TYPE   = ${JSON.stringify(shapeType)};
                const EMOJIS = ${JSON.stringify(shapeEmojis)};
                const N = TYPE === "pets" ? 72 : 80;

                function clamp(v,mn,mx){ return Math.min(mx,Math.max(mn,v)); }

                function getPoints(cx, cy, scale) {
                    const pts = [];
                    if (TYPE === "love") {
                        // Parametric heart
                        for (let i = 0; i < N; i++) {
                            const t  = (i / N) * 2 * Math.PI;
                            const hx = 16 * Math.pow(Math.sin(t), 3);
                            const hy = -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t));
                            pts.push([cx + (hx/16)*scale, cy + (hy/17)*scale]);
                        }
                    } else if (TYPE === "friendship") {
                        // 5-pointed star
                        for (let i = 0; i < N; i++) {
                            const t     = (i / N) * 2 * Math.PI - Math.PI/2;
                            const spike = (i % (N/5)) / (N/5);
                            const r     = spike < 0.5
                                ? 0.42 + (1-0.42) * (spike*2)
                                : 1.0  - (1-0.42) * ((spike-0.5)*2);
                            const angle = (Math.floor(i/(N/5))/5)*2*Math.PI - Math.PI/2 +
                                          (i%(N/5))/(N/5) * (2*Math.PI/5);
                            pts.push([cx + Math.cos(angle)*r*scale, cy + Math.sin(angle)*r*scale]);
                        }
                    } else if (TYPE === "family") {
                        // Hexagon — smaller than full scale
                        const hexScale = scale * 0.72;
                        for (let i = 0; i < N; i++) {
                            const seg   = Math.floor(i / (N/6));
                            const frac  = (i % (N/6)) / (N/6);
                            const a1    = (seg/6)*2*Math.PI - Math.PI/6;
                            const a2    = ((seg+1)/6)*2*Math.PI - Math.PI/6;
                            const x     = cx + (Math.cos(a1)*(1-frac) + Math.cos(a2)*frac)*hexScale;
                            const y     = cy + (Math.sin(a1)*(1-frac) + Math.sin(a2)*frac)*hexScale;
                            pts.push([x, y]);
                        }
                    } else if (TYPE === "parents") {
                        // 6 petals as separate ellipse rings, well spread from centre
                        const nPetals = 6;
                        const petalDist = scale * 0.72;  // distance of petal centre from cx/cy
                        const petalRX   = scale * 0.30;  // petal half-width
                        const petalRY   = scale * 0.18;  // petal half-height
                        const segsPerPetal = Math.round(N / nPetals);
                        for (let p = 0; p < nPetals; p++) {
                            const angle = (p / nPetals) * 2 * Math.PI - Math.PI / 2;
                            const pcx = cx + Math.cos(angle) * petalDist;
                            const pcy = cy + Math.sin(angle) * petalDist;
                            for (let i = 0; i < segsPerPetal; i++) {
                                const t  = (i / segsPerPetal) * 2 * Math.PI;
                                const lx = Math.cos(t) * petalRX;
                                const ly = Math.sin(t) * petalRY;
                                // rotate petal to point outward
                                const rx = lx * Math.cos(angle) - ly * Math.sin(angle);
                                const ry = lx * Math.sin(angle) + ly * Math.cos(angle);
                                pts.push([pcx + rx, pcy + ry]);
                            }
                        }
                    } else if (TYPE === "pets") {
                        // Paw print — verified geometry (ASCII-tested): clean separation between all elements
                        const s = scale;
                        // Main pad — wide oval, lower half of shape
                        const padCX = cx, padCY = cy + s * 0.22;
                        const padRX = s * 0.40, padRY = s * 0.26;
                        const mainSegs = Math.round(N * 0.50);
                        for (let i = 0; i < mainSegs; i++) {
                            const t = (i / mainSegs) * 2 * Math.PI;
                            pts.push([padCX + Math.cos(t) * padRX, padCY + Math.sin(t) * padRY]);
                        }
                        // 4 toe circles — outer toes lower+wider, inner toes higher+closer
                        // At vmin=900: T1-T2 gap≈53px, T2-T3 gap≈66px, pad→toes gap≈49px
                        const toes = [
                            { dx: -0.54, dy: -0.28, r: 0.12 }, // outer left
                            { dx: -0.22, dy: -0.50, r: 0.14 }, // inner left (higher)
                            { dx: +0.22, dy: -0.50, r: 0.14 }, // inner right (higher)
                            { dx: +0.54, dy: -0.28, r: 0.12 }, // outer right
                        ];
                        const toeSegs = Math.round(N * 0.125);
                        toes.forEach(({ dx, dy, r }) => {
                            for (let i = 0; i < toeSegs; i++) {
                                const t = (i / toeSegs) * 2 * Math.PI;
                                pts.push([cx + s*dx + Math.cos(t)*s*r, cy + s*dy + Math.sin(t)*s*r*0.90]);
                            }
                        });
                    } else {
                        // Custom — lemniscate (infinity)
                        for (let i = 0; i < N; i++) {
                            const t = (i / N) * 2 * Math.PI;
                            const d = 1 + Math.sin(t)*Math.sin(t);
                            pts.push([cx + Math.cos(t)/d*scale, cy + Math.sin(t)*Math.cos(t)/d*scale*0.7]);
                        }
                    }
                    return pts;
                }

                function place() {
                    bg.innerHTML = "";
                    const vmin  = Math.min(window.innerWidth, window.innerHeight);
                    const scaleMap  = { love:0.50, friendship:0.46, family:0.38, parents:0.44, pets:0.46, custom:0.48 };
                    const cyOffsets = { love:-0.06, friendship:0.01, family:0.01, parents:0, pets:0, custom:0 };
                    const scale = vmin * (scaleMap[TYPE]  || 0.50);
                    const cx    = window.innerWidth  / 2;
                    const cy    = window.innerHeight / 2 + vmin * (cyOffsets[TYPE] || 0);
                    const pts   = getPoints(cx, cy, scale);
                    pts.forEach(([px, py], i) => {
                        const el = document.createElement("span");
                        el.className = "hh";
                        el.textContent = EMOJIS[i % EMOJIS.length];
                        el.style.cssText =
                            "left:"  + px.toFixed(1) + "px;" +
                            "top:"   + py.toFixed(1) + "px;" +
                            "--d:"   + (Math.random() * 3).toFixed(2) + "s;" +
                            "--s:"   + (0.85 + Math.random() * 0.55).toFixed(2) + ";" +
                            "font-size:" + clamp(vmin * 0.022, 12, 22).toFixed(1) + "px;";
                        bg.appendChild(el);
                    });
                }
                place();
                window.addEventListener("resize", place);
            })();`;

        return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>For ${CONFIG.recipientName} 💌</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Lato:wght@300;400&display=swap" rel="stylesheet">
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root { --accent:${accent}; --light:${accentLight}; }
  body {
    min-height:100vh; display:flex; align-items:center; justify-content:center;
    background: radial-gradient(ellipse at 30% 20%, color-mix(in srgb,var(--accent) 35%,#000) 0%, #050005 65%);
    font-family:'Lato',sans-serif; color:#fff; overflow:hidden;
  }

  /* ── Floating particles (rising) ───────────────────────── */
  #lm-particles { position:fixed; inset:0; pointer-events:none; z-index:0; }
  .particle {
    position:absolute; bottom:-40px; opacity:0;
    animation: rise var(--dur,6s) ease-in var(--delay,0s) infinite;
    left:var(--x,50%);
  }
  @keyframes rise {
    0%  { transform:translateY(0) scale(0.6) rotate(0deg); opacity:0; }
    10% { opacity:.8; }
    90% { opacity:.4; }
    100%{ transform:translateY(-105vh) scale(1.1) rotate(20deg); opacity:0; }
  }

  /* ── Giant heart outline ────────────────────────────────── */
  #lm-heart-outline { position:fixed; inset:0; pointer-events:none; z-index:0; }
  .hh {
    position:absolute;
    transform:translate(-50%,-50%) scale(0.8);
    opacity:0.25;
    filter: drop-shadow(0 0 3px var(--accent));
    animation: hbeat calc(1.6s + var(--d,0s) * 0.5) ease-in-out var(--d,0s) infinite alternate;
  }
  @keyframes hbeat {
    from { transform:translate(-50%,-50%) scale(0.7);  opacity:0.2; filter:drop-shadow(0 0 2px var(--accent)); }
    to   { transform:translate(-50%,-50%) scale(var(--s,1.15)); opacity:0.75; filter:drop-shadow(0 0 8px var(--accent)); }
  }

  /* ── Card (no box — content floats inside the heart) ───── */
  .card {
    position:relative; z-index:2;
    max-width:420px; width:80vw;
    text-align:center;
    animation:fadeUp .9s cubic-bezier(.22,1,.36,1) both;
    /* no background, no border, no shadow */
  }
  @keyframes fadeUp {
    from{opacity:0;transform:translateY(40px) scale(.96)}
    to  {opacity:1;transform:translateY(0) scale(1)}
  }
  .icon-wrap {
    font-size:62px; margin-bottom:1.2rem;
    animation:pulse 1.8s ease-in-out infinite;
    filter:drop-shadow(0 0 10px var(--accent));
    display:block;
  }
  @keyframes pulse {
    0%,100%{transform:scale(1);   filter:drop-shadow(0 0 6px var(--accent));}
    50%    {transform:scale(1.12);filter:drop-shadow(0 0 22px var(--accent));}
  }
  .to-name {
    font-family:'Playfair Display',serif; font-style:italic;
    font-size:clamp(1.6rem,4vw,2.2rem); color:var(--light); margin-bottom:.3rem;
    text-shadow: 0 2px 18px rgba(0,0,0,.8);
  }
  .message {
    font-size:1rem; color:rgba(255,255,255,.85);
    margin-bottom:1.4rem; letter-spacing:.03em; line-height:1.5;
    text-shadow: 0 1px 12px rgba(0,0,0,.9);
  }
  .photo {
    object-fit:cover;
    max-height:${CONFIG.photoStyleSurprise==="portrait"?"200px":"160px"};
    max-width:${CONFIG.photoStyleSurprise==="portrait"?"120px":"160px"};
    border-radius:${{circle:"50%",square:"8px",rounded:"24px",portrait:"12px"}[CONFIG.photoStyleSurprise]||"50%"};
    display:block; margin:0 auto 1.2rem;
    border:3px solid color-mix(in srgb,var(--accent) 70%,transparent);
    box-shadow:0 0 32px color-mix(in srgb,var(--accent) 60%,transparent), 0 8px 32px rgba(0,0,0,.6);
    transition:transform .4s ease;
    width:${CONFIG.photoStyleSurprise==="portrait"?"auto":"100%"};
  }
  .photo:hover{transform:scale(1.04)}
  .counter-label {
    font-size:.65rem; text-transform:uppercase; letter-spacing:.18em;
    color:rgba(255,255,255,.4); margin-bottom:.3rem;
    text-shadow: 0 1px 8px rgba(0,0,0,.9);
  }
  .counter {
    font-family:'Playfair Display',serif;
    font-size:clamp(.9rem,2.5vw,1.15rem); color:var(--light);
    margin-bottom:1.2rem; min-height:1.4em;
    text-shadow: 0 1px 12px rgba(0,0,0,.9);
  }
  .signature {
    font-family:'Playfair Display',serif; font-style:italic;
    font-size:1rem; color:rgba(255,255,255,.55);
    text-shadow: 0 1px 10px rgba(0,0,0,.9);
  }
  .signature strong { color:var(--accent); font-style:normal; font-weight:400; }
</style>
</head>
<body>
<div id="lm-particles"></div>
<div id="lm-heart-outline"></div>
<div class="card">
  <span class="icon-wrap">${icon}</span>
  <p class="to-name">${CONFIG.recipientName}</p>
  <p class="message">${message}</p>
  ${photoHTML}
  ${counterHTML}
  <p class="signature">— <strong>${CONFIG.senderName}</strong></p>
</div>
<script>${counterJS}${particlesJS}${heartOutlineJS}</script>
</body>
</html>`;
    }

    // ── Open surprise ─────────────────────────────────────────────────────────────
    function openSurprise() {
        GM_openInTab("data:text/html;charset=utf-8," + encodeURIComponent(buildSurprisePage()), false);
    }

    // ── Detect dark mode ──────────────────────────────────────────────────────────
    function isDark() {
        return document.documentElement.style.colorScheme === "dark" ||
               window.matchMedia("(prefers-color-scheme: dark)").matches ||
               document.querySelector('meta[name="color-scheme"]')?.content?.includes("dark");
    }

    // ── Inject card ───────────────────────────────────────────────────────────────
    function insertCard() {
        if (document.getElementById("lm-card")) return;
        const anchor =
            document.querySelector("#rso > div:first-child") ||
            document.querySelector(".MjjYud > div:first-child") ||
            document.querySelector("#search .v7W49e:first-child") ||
            document.querySelector("#rso");
        if (!anchor) return;

        const dark  = isDark();
        const bgL   = `linear-gradient(135deg,color-mix(in srgb,${accent} 8%,#fff) 0%,color-mix(in srgb,${accent} 15%,#fff) 100%)`;
        const bgD   = `linear-gradient(135deg,color-mix(in srgb,${accent} 22%,#030003) 0%,color-mix(in srgb,${accent} 32%,#030003) 100%)`;

        const card  = document.createElement("div");
        card.id     = "lm-card";
        card.innerHTML = `
<style>
  #lm-card{font-family:'Google Sans',Roboto,Arial,sans-serif;margin-bottom:20px;overflow:visible!important;min-width:0}
  #lm-inner{
    display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:16px;
    background:${dark ? bgD : bgL};
    border:1.5px solid ${dark ? accent + "66" : accent + "44"};
    box-shadow:0 2px 16px ${accent}${dark ? "33" : "1a"};
    cursor:pointer;transition:box-shadow .25s,transform .25s;overflow:hidden;min-width:0;
  }
  #lm-inner:hover{box-shadow:0 6px 28px ${accent}55;transform:translateY(-2px)}
  #lm-avatar{width:52px;height:52px;border-radius:${{circle:"50%",square:"6px",rounded:"16px",portrait:"6px"}[CONFIG.photoStyleCard]||"50%"};object-fit:cover;border:2.5px solid ${accent};flex-shrink:0;display:block;${CONFIG.photoStyleCard==="portrait"?"height:68px;width:46px;":""}}
  #lm-avatar-fb{
    width:52px;height:52px;border-radius:${{circle:"50%",square:"6px",rounded:"16px",portrait:"6px"}[CONFIG.photoStyleCard]||"50%"};background:${accent}22;
    border:2.5px solid ${accent};flex-shrink:0;display:flex;
    align-items:center;justify-content:center;font-size:24px;
  }
  #lm-text{flex:1;min-width:0;overflow:hidden}
  #lm-text h3{
    font-size:14px;font-weight:600;color:${dark ? accentLight : accent};
    margin:0 0 3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  }
  #lm-text p{
    font-size:12px;color:${dark ? "rgba(255,255,255,.55)" : "rgba(0,0,0,.5)"};
    margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  }
  #lm-btn{
    flex-shrink:0;background:${accent};color:#fff;border:none;border-radius:20px;
    padding:7px 15px;font-size:12px;font-weight:500;cursor:pointer;
    transition:filter .2s;white-space:nowrap;font-family:inherit;
  }
  #lm-btn:hover{filter:brightness(1.15)}
</style>
<div id="lm-inner">
  ${CONFIG.photoUrl
    ? `<img id="lm-avatar" src="${CONFIG.photoUrl}" alt="${CONFIG.recipientName}" onerror="this.style.display='none';document.getElementById('lm-avatar-fb').style.display='flex'">`
    : ""}
  <div id="lm-avatar-fb" style="display:${CONFIG.photoUrl ? "none" : "flex"}">${icon}</div>
  <div id="lm-text">
    <h3>${icon} ${CONFIG.recipientName}</h3>
    <p>${message}</p>
  </div>
  <button id="lm-btn">${buttonLabel}</button>
</div>`;

        anchor.parentNode.insertBefore(card, anchor);
        card.querySelector("#lm-inner").addEventListener("click", openSurprise);
    }

    // ── Multilingual suggestions (indexed by base language code) ─────────────────
    const SUGGESTIONS = {
        en: {
            love:       { c:["Together for","Loving each other for","Us for","In love for","Together since"],               m: ["Every moment with you feels like home 🌟","You make my world a better place ❤️","Falling for you, every single day 🌹","My favourite person, always 💖","You are my sunshine on cloudy days ☀️","Loving you is the easiest thing I do 💞","With you, everything feels right 🌙"], b: ["Open surprise 💌","Click for a surprise 🎁","I have something for you ❤️","A secret message for you 🤫","Open me 💝"] },
            friendship: { c:["Friends for","Best friends for","Known each other for","Mates for","Friends since"],            m: ["Lucky to have you in my life 🌟","Best friends are the family we choose 💛","Thank you for always being there ⭐","You make every day more fun 🎉","Adventures are better with you 🌈","Side by side or miles apart 🫂","You get me like no one else does ✨"], b: ["Open surprise 🎉","A little something for you 💛","For my favourite person 🌟","Open me, bestie 🎁","You deserve this 🫶"] },
            family:     { c:["Family for","Together as family for","Part of my life for","My family for","Family since"],     m: ["Family is everything — so grateful for you 🌿","Home is wherever you are 🏡","Growing up with you was the best adventure 🌱","No matter the distance, always close at heart ⭐","Side by side or miles apart, always family 🌿","The best memories have you in them 🤗","You are my forever person 💚"], b: ["Open surprise 🏡","Something just for you 💚","A message from the heart 🫶","Click to see 🌿","Open me ⭐"] },
            parents:    { c:["With you for","You've been my parent for","My hero for","Grateful for you for","Since day one,"],m: ["Thank you for everything — I love you 💜","Everything I am, I owe to you 🌸","The best parent in the world 💐","Your love shaped who I am ✨","Thank you for always believing in me 💜","You are my first hero 🌟","No words are enough — just, thank you 🙏"], b: ["Open surprise 💐","A message with love 💜","I made something for you 🌸","Open me 🙏","Something special for you ⭐"] },
            pets:       { c:["Together for","My companion for","You've been mine for","Best friends for","Together since"],   m: ["You make every day brighter, little one 🐾","Best companion I could ever ask for 🐶","You had me at hello 🐱","Life is better with you in it 🧡","My favourite little weirdo 🐾","The goodest of good boys 🦴","The goodest of good girls 🦴","Pure love on four legs ❤️"], b: ["Open surprise 🐾","Woof 🐾","Meow 🐾","A treat for you 🦴","Open me 🧡","For my favourite furball 🐱"] },
            custom:     { c:["Since","Together for","Known each other for","For"],                                            m: ["You mean the world to me 🌟","Thinking of you 💌","You deserve all the good things ✨","Just wanted you to know you're amazing 🎉","Missing you today 💙"], b: ["Open surprise 💌","Click for a surprise 🎁","I have something for you ✨","Open me 🌟"] },
        },
        pt: {
            // pt-PT — tratamento por "tu", clíticos antes/depois, europeu
            love:       { c:["Juntos há","Apaixonados há","A amar-nos há","O nosso amor tem","Juntos desde"],                                    m: ["Cada momento contigo parece o lugar certo 🌟","Fazes o meu mundo ser melhor ❤️","Apaixono-me por ti todos os dias 🌹","A minha pessoa favorita, para sempre 💖","És o meu sol nos dias de chuva ☀️","Amar-te é a coisa mais fácil do mundo 💞","Contigo, tudo faz sentido 🌙"], b: ["Abre a surpresa 💌","Clica para uma surpresa 🎁","Tenho algo para te dar ❤️","Uma mensagem secreta para ti 🤫","Abre-me 💝"] },
            friendship: { c:["Amigos há","Melhores amigos há","A conhecermo-nos há","Amigos desde","Inseparáveis há"],
                           m: ["Tenho muita sorte por te ter na minha vida 🌟","Os melhores amigos são a família que escolhemos 💛","Obrigado por estares sempre lá ⭐","Obrigada por estares sempre lá ⭐","Tornas cada dia mais divertido 🎉","As aventuras são melhores contigo 🌈","Juntos ou separados, sempre presentes 🫂","Ninguém me compreende como tu ✨"],
                           b: ["Abre a surpresa 🎉","Tenho algo para ti 💛","Para a minha pessoa favorita 🌟","Abre-me, amigo 🎁","Abre-me, amiga 🎁","Mereces isto 🫶"] },
            family:     { c:["Família há","Na minha vida há","Juntos há","A crescer juntos há","Família desde"],
                           m: ["A família é tudo — tenho tanta sorte por te ter 🌿","Casa é onde tu estás 🏡","Crescer contigo foi a melhor aventura 🌱","Independente da distância, sempre perto do coração ⭐","Juntos ou separados, sempre família 🌿","As melhores memórias têm-te a ti 🤗","És a minha pessoa para sempre 💚"],
                           b: ["Abre a surpresa 🏡","Só para ti 💚","Uma mensagem do coração 🫶","Clica para ver 🌿","Abre-me ⭐"] },
            parents:    { c:["Contigo há","O meu herói há","Grato por ti há","Grata por ti há","O teu filho há","A tua filha há","Desde que nasci,"],
                           m: ["Obrigado por tudo — amo-te 💜","Obrigada por tudo — amo-te 💜","Tudo o que sou devo-te a ti 🌸","O melhor pai do mundo 💐","A melhor mãe do mundo 💐","O teu amor fez-me quem sou ✨","Obrigado por acreditares sempre em mim 💜","Obrigada por acreditares sempre em mim 💜","Foste o meu primeiro herói 🌟","Não há palavras — só, obrigado por tudo 🙏","Não há palavras — só, obrigada por tudo 🙏"],
                           b: ["Abre a surpresa 💐","Uma mensagem com amor 💜","Fiz algo para ti 🌸","Abre-me 🙏","Algo especial para ti ⭐"] },
            pets:       { c:["Juntos há","O meu companheiro há","A ser meu há","A ser minha há","Na minha vida há","Juntos desde"],
                           m: ["Tornas cada dia mais brilhante, pequenino 🐾","Tornas cada dia mais brilhante, pequenina 🐾","O melhor companheiro que podia ter 🐶","A melhor companheira que podia ter 🐶","Conquistaste-me logo de início 🐱","A vida é melhor com te ter cá 🧡","O meu pequeno maluquinho favorito 🐾","A minha pequena maluquinha favorita 🐾","O melhor cãozinho do mundo 🦴","O melhor gatinho do mundo 🦴","Amor puro em quatro patas ❤️"],
                           b: ["Abre a surpresa 🐾","Au au 🐾","Miau 🐾","Um petisco para ti 🦴","Abre-me 🧡","Para o meu bolinho favorito 🐱"] },
            custom:     { c:["Desde","Juntos há","A conhecermo-nos há","Há"],                                                                     m: ["Significas o mundo para mim 🌟","Estou a pensar em ti 💌","Mereces tudo de bom ✨","Só queria que soubesses o quanto és incrível 🎉","Tenho saudades tuas 💙"], b: ["Abre a surpresa 💌","Clica para uma surpresa 🎁","Tenho algo para ti ✨","Abre-me 🌟"] },
        },
        "pt-BR": {
            // pt-BR — "você", verbos sem clíticos pré-verbais, expressões brasileiras
            love:       { c:["Juntos há","Apaixonados há","Se amando há","Nosso amor tem","Juntos desde"],                                        m: ["Cada momento com você parece o lugar certo 🌟","Você faz meu mundo ser melhor ❤️","Me apaixono por você todo dia 🌹","Minha pessoa favorita, para sempre 💖","Você é meu sol nos dias de chuva ☀️","Te amar é a coisa mais fácil do mundo 💞","Com você, tudo faz sentido 🌙"], b: ["Abre a surpresa 💌","Clica pra uma surpresa 🎁","Tenho algo pra te dar ❤️","Uma mensagem secreta pra você 🤫","Me abre 💝"] },
            friendship: { c:["Amigos há","Melhores amigos há","Se conhecendo há","Amigos desde","Inseparáveis há"],
                           m: ["Tenho muita sorte de ter você na minha vida 🌟","Os melhores amigos são a família que a gente escolhe 💛","Obrigado por estar sempre aqui ⭐","Obrigada por estar sempre aqui ⭐","Você torna cada dia mais divertido 🎉","As aventuras são melhores com você 🌈","Juntos ou separados, sempre presentes 🫂","Ninguém me entende como você ✨"],
                           b: ["Abre a surpresa 🎉","Tenho algo pra você 💛","Pra minha pessoa favorita 🌟","Me abre, amigo 🎁","Me abre, amiga 🎁","Você merece isso 🫶"] },
            family:     { c:["Família há","Na minha vida há","Juntos há","Crescendo juntos há","Família desde"],
                           m: ["Família é tudo — que sorte ter você 🌿","Lar é onde você está 🏡","Crescer com você foi a melhor aventura 🌱","Não importa a distância, sempre perto do coração ⭐","Juntos ou separados, sempre família 🌿","As melhores memórias têm você nelas 🤗","Você é minha pessoa para sempre 💚"],
                           b: ["Abre a surpresa 🏡","Só pra você 💚","Uma mensagem do coração 🫶","Clica pra ver 🌿","Me abre ⭐"] },
            parents:    { c:["Com você há","Você é meu herói há","Grato por você há","Grata por você há","Seu filho há","Sua filha há","Desde que nasci,"],
                           m: ["Obrigado por tudo — te amo 💜","Obrigada por tudo — te amo 💜","Tudo que sou devo a você 🌸","O melhor pai do mundo 💐","A melhor mãe do mundo 💐","Seu amor me fez quem eu sou ✨","Obrigado por sempre acreditar em mim 💜","Obrigada por sempre acreditar em mim 💜","Você foi meu primeiro herói 🌟","Não tem palavras — só, obrigado por tudo 🙏","Não tem palavras — só, obrigada por tudo 🙏"],
                           b: ["Abre a surpresa 💐","Uma mensagem com amor 💜","Fiz algo pra você 🌸","Me abre 🙏","Algo especial pra você ⭐"] },
            pets:       { c:["Juntos há","Meu companheiro há","Sendo meu há","Sendo minha há","Na minha vida há","Juntos desde"],
                           m: ["Você torna cada dia mais incrível, pequenino 🐾","Você torna cada dia mais incrível, pequenina 🐾","O melhor companheiro que eu poderia ter 🐶","A melhor companheira que eu poderia ter 🐶","Você me conquistou desde o início 🐱","A vida é melhor com você por aqui 🧡","Meu pequeno maluquinho favorito 🐾","Minha pequena maluquinha favorita 🐾","O melhor cachorrinho do mundo 🦴","O melhor gatinho do mundo 🦴","Amor puro em quatro patas ❤️"],
                           b: ["Abre a surpresa 🐾","Au au 🐾","Miau 🐾","Um petisco pra você 🦴","Me abre 🧡","Pro meu bolinho favorito 🐱"] },
            custom:     { c:["Desde","Juntos há","Se conhecendo há","Há"],                                                                         m: ["Você significa o mundo pra mim 🌟","Estou pensando em você 💌","Você merece tudo de bom ✨","Só queria que você soubesse o quanto é incrível 🎉","Estou com saudade de você 💙"], b: ["Abre a surpresa 💌","Clica pra uma surpresa 🎁","Tenho algo pra você ✨","Me abre 🌟"] },
        },
        fr: {
            love:       { c:["Ensemble depuis","Amoureux depuis","Ensemble depuis"],                              m: ["Chaque moment avec toi ressemble à la maison 🌟","Tu rends mon monde meilleur ❤️","Je tombe amoureux(se) de toi chaque jour 🌹","Ma personne préférée, pour toujours 💖","Tu es mon soleil les jours de pluie ☀️","T'aimer est la chose la plus facile au monde 💞","Avec toi, tout a un sens 🌙"], b: ["Ouvre la surprise 💌","Clique pour une surprise 🎁","J'ai quelque chose pour toi ❤️","Un message secret pour toi 🤫","Ouvre-moi 💝"] },
            friendship: { c:["Amis depuis","Meilleurs amis depuis","On se connaît depuis"],                       m: ["J'ai tellement de chance de t'avoir dans ma vie 🌟","Les meilleurs amis sont la famille qu'on choisit 💛","Merci d'être toujours là ⭐","Tu rends chaque journée plus amusante 🎉","Les aventures sont meilleures avec toi 🌈","Ensemble ou séparés, toujours présents 🫂","Personne ne me comprend comme toi ✨"], b: ["Ouvre la surprise 🎉","Quelque chose pour toi 💛","Pour ma personne préférée 🌟","Ouvre-moi, ami(e) 🎁","Tu le mérites 🫶"] },
            family:     { c:["Famille depuis","Ensemble en famille depuis","Dans ma vie depuis"],                 m: ["La famille est tout — si heureux(se) de t'avoir 🌿","Chez moi, c'est là où tu es 🏡","Grandir avec toi était la meilleure aventure 🌱","Peu importe la distance, toujours dans mon cœur ⭐","Ensemble ou séparés, toujours famille 🌿","Les meilleurs souvenirs t'ont toi dedans 🤗","Tu es ma personne pour toujours 💚"], b: ["Ouvre la surprise 🏡","Juste pour toi 💚","Un message du cœur 🫶","Clique pour voir 🌿","Ouvre-moi ⭐"] },
            parents:    { c:["Avec toi depuis","Tu es mon héros depuis","Reconnaissant depuis","Reconnaissante depuis","Depuis ma naissance,"], m: ["Merci pour tout — je t'aime 💜","Tout ce que je suis, je te le dois 🌸","Le meilleur père du monde 💐","La meilleure mère du monde 💐","Ton amour a façonné qui je suis ✨","Merci d'avoir toujours cru en moi 💜","Tu as été mon premier héros 🌟","Aucun mot ne suffit — juste, merci 🙏"], b: ["Ouvre la surprise 💐","Un message avec amour 💜","J'ai fait quelque chose pour toi 🌸","Ouvre-moi 🙏","Quelque chose de spécial pour toi ⭐"] },
            pets:       { c:["Ensemble depuis","Mon compagnon depuis","Dans ma vie depuis"],                      m: ["Tu rends chaque journée plus lumineuse 🐾","Le meilleur compagnon qu'on puisse espérer 🐶","Tu m'as eu dès le début 🐱","La vie est meilleure avec toi 🧡","Mon petit fou préféré 🐾","Ma petite folle préférée 🐾","Le meilleur toutou du monde 🦴","Le meilleur minou du monde 🦴","Amour pur sur quatre pattes ❤️"], b: ["Ouvre la surprise 🐾","Ouaf 🐾","Miaou 🐾","Une friandise pour toi 🦴","Ouvre-moi 🧡","Pour mon petit boule de poils 🐱"] },
            custom:     { c:["Depuis","Ensemble depuis","On se connaît depuis"],                                  m: ["Tu es tout pour moi 🌟","Je pense à toi 💌","Tu mérites tout ce qu'il y a de bien ✨","Je voulais juste que tu saches que tu es incroyable 🎉","Tu me manques 💙"], b: ["Ouvre la surprise 💌","Clique pour une surprise 🎁","J'ai quelque chose pour toi ✨","Ouvre-moi 🌟"] },
        },
        es: {
            love:       { c:["Juntos hace","Enamorados hace","Juntos desde"],                                     m: ["Cada momento contigo se siente como hogar 🌟","Haces mi mundo mejor ❤️","Me enamoro de ti cada día 🌹","Mi persona favorita, para siempre 💖","Eres mi sol en los días de lluvia ☀️","Amarte es lo más fácil del mundo 💞","Contigo, todo tiene sentido 🌙"], b: ["Abre la sorpresa 💌","Haz clic para una sorpresa 🎁","Tengo algo para ti ❤️","Un mensaje secreto para ti 🤫","Ábreme 💝"] },
            friendship: { c:["Amigos hace","Mejores amigos hace","Nos conocemos hace"],                           m: ["Tengo mucha suerte de tenerte en mi vida 🌟","Los mejores amigos son la familia que elegimos 💛","Gracias por estar siempre ahí ⭐","Haces cada día más divertido 🎉","Las aventuras son mejores contigo 🌈","Juntos o separados, siempre presentes 🫂","Nadie me entiende como tú ✨"], b: ["Abre la sorpresa 🎉","Algo para ti 💛","Para mi persona favorita 🌟","Ábreme, amigo/a 🎁","Te lo mereces 🫶"] },
            family:     { c:["Familia hace","Juntos en familia hace","En mi vida hace"],                          m: ["La familia lo es todo — qué suerte tenerte 🌿","El hogar es donde estás tú 🏡","Crecer contigo fue la mejor aventura 🌱","Sin importar la distancia, siempre cerca del corazón ⭐","Juntos o separados, siempre familia 🌿","Los mejores recuerdos te tienen a ti 🤗","Eres mi persona para siempre 💚"], b: ["Abre la sorpresa 🏡","Solo para ti 💚","Un mensaje del corazón 🫶","Haz clic para ver 🌿","Ábreme ⭐"] },
            parents:    { c:["Contigo hace","Eres mi héroe hace","Agradecido hace","Agradecida hace","Desde que nací,"],          m: ["Gracias por todo — te quiero 💜","Todo lo que soy te lo debo a ti 🌸","El mejor papá del mundo 💐","La mejor mamá del mundo 💐","Tu amor formó quien soy ✨","Gracias por creer siempre en mí 💜","Fuiste mi primer héroe 🌟","No hay palabras suficientes — solo, gracias 🙏"], b: ["Abre la sorpresa 💐","Un mensaje con amor 💜","Hice algo para ti 🌸","Ábreme 🙏","Algo especial para ti ⭐"] },
            pets:       { c:["Juntos hace","Mi compañero hace","En mi vida hace"],                                m: ["Haces cada día más brillante, pequeñín 🐾","Haces cada día más brillante, pequeñina 🐾","El mejor compañero que podría pedir 🐶","La mejor compañera que podría pedir 🐶","Me conquistaste desde el primer momento 🐱","La vida es mejor contigo 🧡","Mi pequeño bicho raro favorito 🐾","Mi pequeña bicho rara favorita 🐾","El mejor perrito del mundo 🦴","La mejor gatita del mundo 🦴","Amor puro en cuatro patas ❤️"], b: ["Abre la sorpresa 🐾","Guau 🐾","Miau 🐾","Una golosina para ti 🦴","Ábreme 🧡","Para mi bolita de pelo favorita 🐱"] },
            custom:     { c:["Desde","Juntos hace","Nos conocemos hace"],                                         m: ["Significas el mundo para mí 🌟","Estoy pensando en ti 💌","Te mereces todo lo bueno ✨","Solo quería que supieras lo increíble que eres 🎉","Te echo de menos 💙"], b: ["Abre la sorpresa 💌","Haz clic para una sorpresa 🎁","Tengo algo para ti ✨","Ábreme 🌟"] },
        },
        it: {
            love:       { c:["Insieme da","Innamorati da","Insieme da"],                                          m: ["Ogni momento con te sembra casa 🌟","Rendi il mio mondo migliore ❤️","Mi innamoro di te ogni giorno 🌹","La mia persona preferita, per sempre 💖","Sei il mio sole nei giorni di pioggia ☀️","Amarti è la cosa più facile del mondo 💞","Con te, tutto ha senso 🌙"], b: ["Apri la sorpresa 💌","Clicca per una sorpresa 🎁","Ho qualcosa per te ❤️","Un messaggio segreto per te 🤫","Aprimi 💝"] },
            friendship: { c:["Amici da","Migliori amici da","Ci conosciamo da"],                                  m: ["Sono così fortunato ad averti nella mia vita 🌟","Sono così fortunata ad averti nella mia vita 🌟","I migliori amici sono la famiglia che scegliamo 💛","Grazie per esserci sempre ⭐","Rendi ogni giorno più divertente 🎉","Le avventure sono migliori con te 🌈","Vicini o lontani, sempre presenti 🫂","Nessuno mi capisce come te ✨"], b: ["Apri la sorpresa 🎉","Qualcosa per te 💛","Per la mia persona preferita 🌟","Aprimi, amico 🎁","Aprimi, amica 🎁","Te lo meriti 🫶"] },
            family:     { c:["Famiglia da","Insieme da","Nella mia vita da"],                                     m: ["La famiglia è tutto — sono così felice di averti 🌿","Casa è dove sei tu 🏡","Crescere con te è stata la migliore avventura 🌱","Qualunque sia la distanza, sempre vicini nel cuore ⭐","Vicini o lontani, sempre famiglia 🌿","I migliori ricordi hanno te dentro 🤗","Sei la mia persona per sempre 💚"], b: ["Apri la sorpresa 🏡","Solo per te 💚","Un messaggio dal cuore 🫶","Clicca per vedere 🌿","Aprimi ⭐"] },
            parents:    { c:["Con te da","Sei il mio eroe da","Grato da","Grata da","Dal giorno che sono nato,","Dal giorno che sono nata,"],         m: ["Grazie per tutto — ti voglio bene 💜","Tutto ciò che sono lo devo a te 🌸","Il miglior papà del mondo 💐","La migliore mamma del mondo 💐","Il tuo amore ha plasmato chi sono ✨","Grazie per aver sempre creduto in me 💜","Sei stato il mio primo eroe 🌟","Sei stata la mia prima eroina 🌟","Non ci sono parole abbastanza — solo, grazie 🙏"], b: ["Apri la sorpresa 💐","Un messaggio con amore 💜","Ho fatto qualcosa per te 🌸","Aprimi 🙏","Qualcosa di speciale per te ⭐"] },
            pets:       { c:["Insieme da","Il mio compagno da","Nella mia vita da"],                              m: ["Rendi ogni giorno più luminoso, piccolo 🐾","Rendi ogni giorno più luminoso, piccola 🐾","Il miglior compagno che potessi desiderare 🐶","La migliore compagna che potessi desiderare 🐶","Mi hai conquistato fin dall'inizio 🐱","La vita è meglio con te 🧡","Il mio piccolo strambo preferito 🐾","La mia piccola stramba preferita 🐾","Il migliore cagnolino del mondo 🦴","Il migliore gattino del mondo 🦴","Amore puro su quattro zampe ❤️"], b: ["Apri la sorpresa 🐾","Bau 🐾","Miao 🐾","Un premietto per te 🦴","Aprimi 🧡","Per il mio batuffolo preferito 🐱"] },
            custom:     { c:["Da","Insieme da","Ci conosciamo da"],                                               m: ["Sei tutto per me 🌟","Sto pensando a te 💌","Ti meriti tutto il bene del mondo ✨","Volevo solo che tu sapessi quanto sei incredibile 🎉","Mi manchi 💙"], b: ["Apri la sorpresa 💌","Clicca per una sorpresa 🎁","Ho qualcosa per te ✨","Aprimi 🌟"] },
        },
        de: {
            love:       { c:["Zusammen seit","Verliebt seit","Zusammen seit"],                                    m: ["Jeder Moment mit dir fühlt sich wie Zuhause an 🌟","Du machst meine Welt besser ❤️","Ich verliebe mich jeden Tag neu in dich 🌹","Mein liebster Mensch, für immer 💖","Du bist mein Sonnenschein an Regentagen ☀️","Dich zu lieben ist das Einfachste auf der Welt 💞","Mit dir ergibt alles einen Sinn 🌙"], b: ["Überraschung öffnen 💌","Klick für eine Überraschung 🎁","Ich habe etwas für dich ❤️","Eine geheime Nachricht für dich 🤫","Öffne mich 💝"] },
            friendship: { c:["Befreundet seit","Beste Freunde seit","Wir kennen uns seit"],                       m: ["Ich habe so viel Glück, dich in meinem Leben zu haben 🌟","Beste Freunde sind die Familie, die wir wählen 💛","Danke, dass du immer für mich da bist ⭐","Du machst jeden Tag lustiger 🎉","Abenteuer sind mit dir besser 🌈","Zusammen oder getrennt, immer füreinander 🫂","Niemand versteht mich so wie du ✨"], b: ["Überraschung öffnen 🎉","Etwas für dich 💛","Für meinen Lieblingsmenschen 🌟","Öffne mich, Freund/in 🎁","Du verdienst es 🫶"] },
            family:     { c:["Familie seit","Zusammen als Familie seit","In meinem Leben seit"],                  m: ["Familie ist alles — so dankbar, dich zu haben 🌿","Zuhause ist, wo du bist 🏡","Mit dir aufzuwachsen war das beste Abenteuer 🌱","Egal wie weit, immer nah im Herzen ⭐","Zusammen oder getrennt, immer Familie 🌿","Die besten Erinnerungen haben dich dabei 🤗","Du bist mein Mensch für immer 💚"], b: ["Überraschung öffnen 🏡","Nur für dich 💚","Eine Nachricht von Herzen 🫶","Klick zum Ansehen 🌿","Öffne mich ⭐"] },
            parents:    { c:["Mit dir seit","Du bist mein Held seit","Dankbar seit","Seit meiner Geburt,"],       m: ["Danke für alles — ich liebe dich 💜","Alles was ich bin, verdanke ich dir 🌸","Der beste Vater / die beste Mutter der Welt 💐","Deine Liebe hat geprägt, wer ich bin ✨","Danke, dass du immer an mich geglaubt hast 💜","Du warst mein erster Held 🌟","Keine Worte reichen — einfach, danke 🙏"], b: ["Überraschung öffnen 💐","Eine Nachricht mit Liebe 💜","Ich habe etwas für dich gemacht 🌸","Öffne mich 🙏","Etwas Besonderes für dich ⭐"] },
            pets:       { c:["Zusammen seit","Mein Begleiter seit","In meinem Leben seit"],                       m: ["Du machst jeden Tag heller, Kleines 🐾","Der beste Begleiter, den ich mir wünschen konnte 🐶","Die beste Begleiterin, die ich mir wünschen konnte 🐶","Du hast mich vom ersten Moment an gewonnen 🐱","Das Leben ist besser mit dir 🧡","Mein lieblingsverrücktes Kleines 🐾","Der beste Hund der Welt 🦴","Die beste Katze der Welt 🦴","Reine Liebe auf vier Pfoten ❤️"], b: ["Überraschung öffnen 🐾","Wuff 🐾","Miau 🐾","Ein Leckerli für dich 🦴","Öffne mich 🧡","Für mein liebstes Fellknäuel 🐱"] },
            custom:     { c:["Seit","Zusammen seit","Wir kennen uns seit"],                                       m: ["Du bedeutest mir die Welt 🌟","Ich denke an dich 💌","Du verdienst alles Gute ✨","Ich wollte dir einfach sagen, wie unglaublich du bist 🎉","Ich vermisse dich 💙"], b: ["Überraschung öffnen 💌","Klick für eine Überraschung 🎁","Ich habe etwas für dich ✨","Öffne mich 🌟"] },
        },
        nl: {
            love:       { c:["Samen al","Verliefd al","Samen sinds"],                                             m: ["Elk moment met jou voelt als thuis 🌟","Jij maakt mijn wereld mooier ❤️","Ik word elke dag opnieuw verliefd op je 🌹","Mijn lievelingspersoon, voor altijd 💖","Jij bent mijn zonnetje op regenachtige dagen ☀️","Van jou houden is het makkelijkste ter wereld 💞","Met jou klopt alles 🌙"], b: ["Open de verrassing 💌","Klik voor een verrassing 🎁","Ik heb iets voor je ❤️","Een geheime boodschap voor jou 🤫","Open mij 💝"] },
            friendship: { c:["Vrienden al","Beste vrienden al","We kennen elkaar al"],                            m: ["Ik ben zo blij dat ik jou in mijn leven heb 🌟","Beste vrienden zijn de familie die we kiezen 💛","Dank je dat je er altijd voor me bent ⭐","Jij maakt elke dag leuker 🎉","Avonturen zijn beter met jou erbij 🌈","Samen of apart, altijd er voor elkaar 🫂","Niemand begrijpt me zo goed als jij ✨"], b: ["Open de verrassing 🎉","Iets voor jou 💛","Voor mijn lievelingspersoon 🌟","Open mij, vriend(in) 🎁","Je verdient het 🫶"] },
            family:     { c:["Familie al","Samen als familie al","In mijn leven al"],                             m: ["Familie is alles — zo dankbaar voor jou 🌿","Thuis is waar jij bent 🏡","Opgroeien met jou was het beste avontuur 🌱","Hoe ver ook, altijd dichtbij in het hart ⭐","Samen of apart, altijd familie 🌿","De mooiste herinneringen hebben jou erin 🤗","Jij bent mijn persoon voor altijd 💚"], b: ["Open de verrassing 🏡","Alleen voor jou 💚","Een boodschap van het hart 🫶","Klik om te zien 🌿","Open mij ⭐"] },
            parents:    { c:["Met jou al","Jij bent mijn held al","Dankbaar al","Sinds mijn geboorte,"],          m: ["Dank je voor alles — ik hou van je 💜","Alles wat ik ben, dank ik aan jou 🌸","De beste vader ter wereld 💐","De beste moeder ter wereld 💐","Jouw liefde heeft gevormd wie ik ben ✨","Dank je dat je altijd in mij geloofde 💜","Jij was mijn eerste held 🌟","Geen woorden zijn genoeg — gewoon, dank je 🙏"], b: ["Open de verrassing 💐","Een boodschap met liefde 💜","Ik heb iets voor je gemaakt 🌸","Open mij 🙏","Iets speciaals voor jou ⭐"] },
            pets:       { c:["Samen al","Mijn metgezel al","In mijn leven al"],                                   m: ["Jij maakt elke dag mooier, kleintje 🐾","De beste metgezel die ik kon wensen 🐶","Je had me meteen bij het begin 🐱","Het leven is beter met jou erbij 🧡","Mijn lievelingsgekkie 🐾","De beste hond ter wereld 🦴","De beste kat ter wereld 🦴","Pure liefde op vier poten ❤️"], b: ["Open de verrassing 🐾","Woef 🐾","Miauw 🐾","Een traktatie voor jou 🦴","Open mij 🧡","Voor mijn lievelingsbolletje 🐱"] },
            custom:     { c:["Sinds","Samen al","We kennen elkaar al"],                                           m: ["Jij betekent de wereld voor mij 🌟","Ik denk aan je 💌","Je verdient al het goede ✨","Ik wilde je gewoon laten weten hoe geweldig je bent 🎉","Ik mis je 💙"], b: ["Open de verrassing 💌","Klik voor een verrassing 🎁","Ik heb iets voor je ✨","Open mij 🌟"] },
        },
        pl: {
            love:       { c:["Razem od","Zakochani od","Razem od"],                                               m: ["Każda chwila z tobą czuje się jak dom 🌟","Sprawiasz, że mój świat jest lepszy ❤️","Zakochuję się w tobie każdego dnia 🌹","Moja ulubiona osoba, na zawsze 💖","Jesteś moim słońcem w deszczowe dni ☀️","Kochać cię jest najłatwiejszą rzeczą na świecie 💞","Z tobą wszystko ma sens 🌙"], b: ["Otwórz niespodziankę 💌","Kliknij dla niespodzianki 🎁","Mam coś dla ciebie ❤️","Tajemnicza wiadomość dla ciebie 🤫","Otwórz mnie 💝"] },
            friendship: { c:["Przyjaciółmi od","Najlepszymi przyjaciółmi od","Znamy się od"],                     m: ["Mam tyle szczęścia, że cię mam w swoim życiu 🌟","Najlepsi przyjaciele to rodzina, którą wybieramy 💛","Dziękuję, że zawsze jesteś 🎉","Sprawiasz, że każdy dzień jest fajniejszy 🌈","Przygody są lepsze z tobą 🫂","Razem czy osobno, zawsze przy sobie ✨","Nikt mnie nie rozumie tak jak ty ⭐"], b: ["Otwórz niespodziankę 🎉","Coś dla ciebie 💛","Dla mojej ulubionej osoby 🌟","Otwórz mnie, przyjacielu/przyjaciółko 🎁","Zasługujesz na to 🫶"] },
            family:     { c:["Rodziną od","Razem jako rodzina od","W moim życiu od"],                             m: ["Rodzina to wszystko — mam tyle szczęścia, że cię mam 🌿","Dom jest tam, gdzie ty jesteś 🏡","Dorastanie z tobą było najlepszą przygodą 🌱","Bez względu na odległość, zawsze blisko serca ⭐","Razem czy osobno, zawsze rodzina 🌿","Najlepsze wspomnienia mają ciebie w sobie 🤗","Jesteś moją osobą na zawsze 💚"], b: ["Otwórz niespodziankę 🏡","Tylko dla ciebie 💚","Wiadomość z serca 🫶","Kliknij, żeby zobaczyć 🌿","Otwórz mnie ⭐"] },
            parents:    { c:["Z tobą od","Jesteś moim bohaterem od","Wdzięczny od","Wdzięczna od","Od urodzenia,"],            m: ["Dziękuję za wszystko — kocham cię 💜","Wszystko, czym jestem, zawdzięczam tobie 🌸","Najlepszy tata na świecie 💐","Najlepsza mama na świecie 💐","Twoja miłość ukształtowała to, kim jestem ✨","Dziękuję, że zawsze we mnie wierzyłeś 💜","Dziękuję, że zawsze we mnie wierzyłaś 💜","Byłeś moim pierwszym bohaterem 🌟","Byłaś moją pierwszą bohaterką 🌟","Żadne słowa nie wystarczą — po prostu, dziękuję 🙏"], b: ["Otwórz niespodziankę 💐","Wiadomość z miłością 💜","Zrobiłem coś dla ciebie 🌸","Zrobiłam coś dla ciebie 🌸","Otwórz mnie 🙏","Coś wyjątkowego dla ciebie ⭐"] },
            pets:       { c:["Razem od","Mój towarzysz od","W moim życiu od"],                                    m: ["Sprawiasz, że każdy dzień jest jaśniejszy, mały 🐾","Sprawiasz, że każdy dzień jest jaśniejszy, mała 🐾","Najlepszy towarzysz, o jakim mogłem marzyć 🐶","Najlepsza towarzyszka, o jakiej mogłam marzyć 🐶","Zdobyłeś moje serce od razu 🐱","Zdobyłaś moje serce od razu 🐱","Życie jest lepsze z tobą 🧡","Mój ulubiony mały dziwak 🐾","Najlepszy pies na świecie 🦴","Najlepsza kotka na świecie 🦴","Czysta miłość na czterech łapach ❤️"], b: ["Otwórz niespodziankę 🐾","Hau 🐾","Miau 🐾","Smakołyk dla ciebie 🦴","Otwórz mnie 🧡","Dla mojego ulubionego kłębuszka 🐱"] },
            custom:     { c:["Od","Razem od","Znamy się od"],                                                     m: ["Znaczysz dla mnie cały świat 🌟","Myślę o tobie 💌","Zasługujesz na wszystko, co dobre ✨","Chciałem/am, żebyś wiedział/a, jaki/a jesteś niesamowity/a 🎉","Tęsknię za tobą 💙"], b: ["Otwórz niespodziankę 💌","Kliknij dla niespodzianki 🎁","Mam coś dla ciebie ✨","Otwórz mnie 🌟"] },
        },
        ru: {
            love:       { c:["Вместе уже","Влюблены уже","С тобой уже"],                                         m: ["Каждый момент с тобой — как дом 🌟","Ты делаешь мой мир лучше ❤️","Я влюбляюсь в тебя каждый день 🌹","Мой любимый человек, навсегда 💖","Ты мое солнышко в пасмурные дни ☀️","Любить тебя — самое простое на свете 💞","С тобой всё имеет смысл 🌙"], b: ["Открой сюрприз 💌","Нажми для сюрприза 🎁","У меня есть кое-что для тебя ❤️","Тайное послание для тебя 🤫","Открой меня 💝"] },
            friendship: { c:["Друзья уже","Лучшие друзья уже","Знакомы уже"],                                    m: ["Мне так повезло иметь тебя в своей жизни 🌟","Лучшие друзья — это семья, которую мы выбираем 💛","Спасибо, что всегда рядом ⭐","Ты делаешь каждый день веселее 🎉","Приключения лучше с тобой 🌈","Вместе или порознь — всегда рядом 🫂","Никто не понимает меня так, как ты ✨"], b: ["Открой сюрприз 🎉","Что-то для тебя 💛","Для моего любимого человека 🌟","Открой меня, друг 🎁","Ты это заслуживаешь 🫶"] },
            family:     { c:["Семья уже","Вместе в семье уже","В моей жизни уже"],                               m: ["Семья — это всё — так рада, что у меня есть ты 🌿","Дом там, где ты 🏡","Расти вместе с тобой было лучшим приключением 🌱","Как бы далеко ни было, всегда близко в сердце ⭐","Вместе или порознь — всегда семья 🌿","Лучшие воспоминания — с тобой 🤗","Ты мой человек навсегда 💚"], b: ["Открой сюрприз 🏡","Только для тебя 💚","Послание от сердца 🫶","Нажми, чтобы увидеть 🌿","Открой меня ⭐"] },
            parents:    { c:["С тобой уже","Ты мой герой уже","Благодарен уже","Благодарна уже","С рождения,"], m: ["Спасибо за всё — я люблю тебя 💜","Всем, что я есть, я обязан тебе 🌸","Лучший папа на свете 💐","Лучшая мама на свете 💐","Твоя любовь сделала меня тем, кто я есть ✨","Спасибо, что всегда верил в меня 💜","Спасибо, что всегда верила в меня 💜","Никаких слов не хватит — просто, спасибо 🙏"], b: ["Открой сюрприз 💐","Послание с любовью 💜","Я сделал для тебя кое-что 🌸","Открой меня 🙏","Что-то особенное для тебя ⭐"] },
            pets:       { c:["Вместе уже","Мой питомец уже","В моей жизни уже"],                                 m: ["Ты делаешь каждый день ярче, малыш 🐾","Ты делаешь каждый день ярче, малышка 🐾","Лучший друг, о котором можно мечтать 🐶","Ты покорил моё сердце с первого взгляда 🐱","Жизнь лучше с тобой 🧡","Мой любимый маленький чудак 🐾","Лучший пёс на свете 🦴","Лучшая кошка на свете 🦴","Чистая любовь на четырёх лапах ❤️"], b: ["Открой сюрприз 🐾","Гав 🐾","Мяу 🐾","Угощение для тебя 🦴","Открой меня 🧡","Для моего любимого пушистика 🐱"] },
            custom:     { c:["С","Вместе уже","Знакомы уже"],                                                    m: ["Ты значишь для меня всё 🌟","Думаю о тебе 💌","Ты заслуживаешь всего хорошего ✨","Просто хотел сказать, какой ты удивительный 🎉","Скучаю по тебе 💙"], b: ["Открой сюрприз 💌","Нажми для сюрприза 🎁","У меня есть кое-что для тебя ✨","Открой меня 🌟"] },
        },
        ja: {
            love:       { c:["一緒になって","恋人として","共に"],                                                   m: ["あなたといる時間はすべて宝物 🌟","あなたが私の世界を明るくしてくれる ❤️","毎日あなたに恋をしている 🌹","大好きな人、いつまでも 💖","雨の日もあなたは私の太陽 ☀️","あなたを愛することが一番自然なこと 💞","あなたとなら何でもうまくいく 🌙"], b: ["サプライズを開ける 💌","プレゼントを開けて 🎁","あなたへのメッセージ ❤️","秘密のメッセージ 🤫","開けてね 💝"] },
            friendship: { c:["友達になって","親友として","知り合って"],                                             m: ["あなたが友達でよかった 🌟","親友は選んだ家族 💛","いつもそばにいてくれてありがとう ⭐","あなたといると毎日楽しい 🎉","冒険はあなたと一緒が最高 🌈","離れていても、いつも心は一緒 🫂","あなたほど私を分かってくれる人はいない ✨"], b: ["サプライズを開ける 🎉","あなたへ 💛","大切な人へ 🌟","開けてね 🎁","あなたに届けたい 🫶"] },
            family:     { c:["家族になって","一緒に","ともに生きて"],                                               m: ["家族がいてよかった 🌿","あなたのいるところが家 🏡","一緒に育ったことが最高の思い出 🌱","どんなに遠くても、心はいつも近く ⭐","離れていても、ずっと家族 🌿","一番の思い出にはいつもあなたがいる 🤗","あなたは私の永遠の人 💚"], b: ["サプライズを開ける 🏡","あなただけに 💚","心からのメッセージ 🫶","見てね 🌿","開けてね ⭐"] },
            parents:    { c:["一緒に","お父さんとして","お母さんとして","感謝を込めて"],                             m: ["すべてに感謝しています — 愛してる 💜","今の私があるのはあなたのおかげ 🌸","世界一のお父さん 💐","世界一のお母さん 💐","あなたの愛が私を形作ってくれた ✨","いつも信じてくれてありがとう 💜","言葉にできないくらい、ありがとう 🙏"], b: ["サプライズを開ける 💐","愛を込めたメッセージ 💜","あなたへ作りました 🌸","開けてね 🙏","特別なものをどうぞ ⭐"] },
            pets:       { c:["一緒になって","うちの子になって","家族になって"],                                     m: ["あなたがいるだけで毎日が明るくなる 🐾","こんないい子と出会えてよかった 🐶","初めて会った瞬間から好きだった 🐱","あなたがいる生活は最高 🧡","うちの変な子、大好き 🐾","世界一いいワンちゃん 🦴","世界一いいニャンちゃん 🦴","四本足の純粋な愛 ❤️"], b: ["サプライズを開ける 🐾","ワン 🐾","ニャー 🐾","おやつだよ 🦴","開けてね 🧡","大好きなもふもふへ 🐱"] },
            custom:     { c:["から","一緒に","知り合って"],                                                         m: ["あなたは私にとって全て 🌟","あなたのことを考えてる 💌","あなたにはいいことしか起きてほしくない ✨","どれだけ素敵な人か伝えたかった 🎉","会いたい 💙"], b: ["サプライズを開ける 💌","プレゼントを開けて 🎁","あなたへ ✨","開けてね 🌟"] },
        },
        ko: {
            love:       { c:["함께한 지","사랑한 지","연인이 된 지"],                                               m: ["너와 함께하는 모든 순간이 집 같아 🌟","네가 내 세상을 더 좋게 만들어 ❤️","매일 너에게 사랑에 빠져 🌹","내가 제일 좋아하는 사람, 영원히 💖","비 오는 날도 네가 있어 괜찮아 ☀️","너를 사랑하는 게 제일 쉬워 💞","너와 함께라면 모든 게 맞아 🌙"], b: ["서프라이즈 열기 💌","클릭해서 확인해봐 🎁","나한테 뭔가 있어 ❤️","너를 위한 비밀 메시지 🤫","열어봐 💝"] },
            friendship: { c:["친구한 지","절친한 지","알게 된 지"],                                                 m: ["네가 내 곁에 있어서 정말 행복해 🌟","베프는 우리가 선택한 가족 💛","항상 곁에 있어줘서 고마워 ⭐","너랑 있으면 매일이 즐거워 🎉","모험은 너랑 해야 제맛 🌈","함께든 멀리든, 항상 마음은 가까이 🫂","나를 이렇게 잘 아는 사람은 너뿐이야 ✨"], b: ["서프라이즈 열기 🎉","너한테 줄 거 있어 💛","내가 제일 좋아하는 사람에게 🌟","열어봐 친구야 🎁","너는 받을 자격 있어 🫶"] },
            family:     { c:["가족이 된 지","함께한 지","내 삶에 함께한 지"],                                       m: ["가족이 있어서 행복해 🌿","집은 네가 있는 곳 🏡","같이 자란 게 최고의 추억 🌱","멀리 있어도 마음은 항상 가까워 ⭐","함께든 따로든, 항상 가족 🌿","제일 좋은 기억엔 항상 네가 있어 🤗","넌 내 영원한 사람 💚"], b: ["서프라이즈 열기 🏡","너만을 위해 💚","마음을 담은 메시지 🫶","눌러봐 🌿","열어봐 ⭐"] },
            parents:    { c:["함께한 지","나의 영웅이 된 지","감사한 지","태어나서부터,"],                           m: ["모든 것에 감사해요 — 사랑해요 💜","제가 지금 이 모습인 건 다 덕분이에요 🌸","세상에서 제일 좋은 아빠 💐","세상에서 제일 좋은 엄마 💐","당신의 사랑이 나를 만들어줬어요 ✨","항상 믿어줘서 고마워요 💜","말로 다 못 해요 — 그냥, 감사합니다 🙏"], b: ["서프라이즈 열기 💐","사랑을 담아 💜","만들었어요 🌸","열어봐요 🙏","특별한 거 있어요 ⭐"] },
            pets:       { c:["함께한 지","내 친구가 된 지","내 곁에 온 지"],                                         m: ["네 덕분에 매일이 밝아져 🐾","이렇게 좋은 친구를 만나다니 행운이야 🐶","처음 본 순간부터 좋았어 🐱","네가 있는 삶이 최고야 🧡","내가 제일 좋아하는 이상한 녀석 🐾","세상 최고의 강아지 🦴","세상 최고의 고양이 🦴","네 발 달린 순수한 사랑 ❤️"], b: ["서프라이즈 열기 🐾","멍 🐾","야옹 🐾","간식이야 🦴","열어봐 🧡","내가 제일 좋아하는 솜뭉치에게 🐱"] },
            custom:     { c:["부터","함께한 지","알게 된 지"],                                                       m: ["넌 내게 전부야 🌟","네 생각하고 있어 💌","넌 좋은 일만 받을 자격 있어 ✨","얼마나 멋진 사람인지 알려주고 싶었어 🎉","보고 싶어 💙"], b: ["서프라이즈 열기 💌","클릭해봐 🎁","너한테 줄 거 있어 ✨","열어봐 🌟"] },
        },
        zh: {
            love:       { c:["在一起","相爱已","相识已"],                                                           m: ["和你在一起的每一刻都像家一样 🌟","你让我的世界更美好 ❤️","每天都在爱上你 🌹","我最喜欢的人，永远 💖","阴雨天有你就够了 ☀️","爱你是世界上最自然的事 💞","有你一切都对了 🌙"], b: ["打开惊喜 💌","点击查看 🎁","我有东西给你 ❤️","给你的秘密消息 🤫","打开我 💝"] },
            friendship: { c:["朋友已","好朋友已","认识已"],                                                         m: ["有你真的很幸运 🌟","最好的朋友是我们选择的家人 💛","谢谢你一直在 ⭐","和你在一起每天都很开心 🎉","有你的冒险才最好玩 🌈","无论远近，心都在一起 🫂","没有人像你这么懂我 ✨"], b: ["打开惊喜 🎉","有东西给你 💛","送给我最喜欢的人 🌟","打开我 🎁","你值得拥有 🫶"] },
            family:     { c:["家人已","在一起已","在我生命里已"],                                                    m: ["家人就是一切，好幸运有你 🌿","你在哪里，哪里就是家 🏡","和你一起长大是最好的冒险 🌱","无论多远，心里永远有你 ⭐","无论在哪，永远是家人 🌿","最好的回忆里都有你 🤗","你是我永远的人 💚"], b: ["打开惊喜 🏡","只为你 💚","来自心底的信息 🫶","点击查看 🌿","打开我 ⭐"] },
            parents:    { c:["陪你已","你是我的英雄已","感恩已","我出生以来,"],                                     m: ["谢谢你的一切 — 我爱你 💜","我所有的一切都是因为你 🌸","世界上最好的爸爸 💐","世界上最好的妈妈 💐","你的爱塑造了现在的我 ✨","谢谢你一直相信我 💜","语言无法表达 — 就是，谢谢你 🙏"], b: ["打开惊喜 💐","带着爱的信息 💜","做了点东西给你 🌸","打开我 🙏","给你的特别礼物 ⭐"] },
            pets:       { c:["在一起已","我的宝贝已","陪我已"],                                                      m: ["有你每天都亮了 🐾","遇见你真是太幸运了 🐶","第一眼就喜欢你了 🐱","有你的生活最好 🧡","我最爱的小怪兽 🐾","世界上最棒的狗狗 🦴","世界上最棒的猫咪 🦴","四条腿的纯粹的爱 ❤️"], b: ["打开惊喜 🐾","汪 🐾","喵 🐾","零食来了 🦴","打开我 🧡","送给我最爱的毛球 🐱"] },
            custom:     { c:["从","在一起已","认识已"],                                                              m: ["你是我的一切 🌟","在想你 💌","你值得拥有所有美好 ✨","想让你知道你有多棒 🎉","想你 💙"], b: ["打开惊喜 💌","点击查看 🎁","有东西给你 ✨","打开我 🌟"] },
        },
        ar: {
            love:       { c:["معاً منذ","أحبائنا منذ","رفيقي منذ"],                                                  m: ["كل لحظة معك تشعرني بالبيت 🌟","أنت تجعل عالمي أجمل ❤️","أقع في حبك كل يوم 🌹","أحبّ شخص في حياتي، إلى الأبد 💖","أنت شمسي في الأيام الغائمة ☀️","أن أحبّك هو أسهل شيء في العالم 💞","معك يصبح كل شيء منطقياً 🌙"], b: ["افتح المفاجأة 💌","اضغط للمفاجأة 🎁","لديّ شيء لك ❤️","رسالة سرية لك 🤫","افتحني 💝"] },
            friendship: { c:["أصدقاء منذ","أصدقاء مقربون منذ","نعرف بعضنا منذ"],                                    m: ["محظوظ جداً بوجودك في حياتي 🌟","أفضل الأصدقاء هم العائلة التي نختارها 💛","شكراً لكونك دائماً بجانبي ⭐","تجعل كل يوم أكثر متعة 🎉","المغامرات أجمل معك 🌈","سواء كنّا قريبين أو بعيدين، قلوبنا دائماً معاً 🫂","لا أحد يفهمني مثلك ✨"], b: ["افتح المفاجأة 🎉","شيء لك 💛","لأعزّ شخص 🌟","افتحني يا صديق 🎁","تستحق هذا 🫶"] },
            family:     { c:["عائلة منذ","معاً منذ","في حياتي منذ"],                                                 m: ["العائلة هي كل شيء — محظوظ بوجودك 🌿","البيت هو حيث أنت 🏡","النمو معك كان أجمل مغامرة 🌱","مهما كانت المسافة، قلوبنا دائماً قريبة ⭐","سواء معاً أو بعيدين، دائماً عائلة 🌿","أجمل ذكرياتي فيها أنت 🤗","أنت إنساني إلى الأبد 💚"], b: ["افتح المفاجأة 🏡","لك وحدك 💚","رسالة من القلب 🫶","اضغط لترى 🌿","افتحني ⭐"] },
            parents:    { c:["معك منذ","أنت بطلي منذ","شاكر لك منذ","منذ ولادتي,"],                                 m: ["شكراً على كل شيء — أحبك 💜","كل ما أنا عليه بفضلك 🌸","أفضل أب في العالم 💐","أفضل أم في العالم 💐","حبّك شكّل من أنا ✨","شكراً لإيمانك بي دائماً 💜","لا تكفي الكلمات — فقط، شكراً 🙏"], b: ["افتح المفاجأة 💐","رسالة بالمحبة 💜","صنعت لك شيئاً 🌸","افتحني 🙏","شيء مميز لك ⭐"] },
            pets:       { c:["معاً منذ","رفيقي منذ","في حياتي منذ"],                                                 m: ["تجعل كل يوم أكثر إشراقاً 🐾","أفضل رفيق يمكن أن يتمناه أحد 🐶","أسرتني منذ اللحظة الأولى 🐱","الحياة أجمل معك 🧡","صغيري المُحبَّب الغريب 🐾","أفضل كلب في العالم 🦴","أفضل قطة في العالم 🦴","حب نقي على أربع قوائم ❤️"], b: ["افتح المفاجأة 🐾","هاو 🐾","مياو 🐾","مكافأة لك 🦴","افتحني 🧡","لأحبّ كتلة فراء 🐱"] },
            custom:     { c:["منذ","معاً منذ","نعرف بعضنا منذ"],                                                     m: ["أنت تعني لي الكل 🌟","أفكر فيك 💌","تستحق كل الخير ✨","أردت فقط أن تعرف كم أنت رائع 🎉","أشتاق إليك 💙"], b: ["افتح المفاجأة 💌","اضغط للمفاجأة 🎁","لديّ شيء لك ✨","افتحني 🌟"] },
        },
        hi: {
            love:       { c:["साथ हैं","प्यार में हैं","एक दूसरे को जानते हैं"],                                     m: ["तुम्हारे साथ हर पल घर जैसा लगता है 🌟","तुम मेरी दुनिया को बेहतर बनाते हो ❤️","हर रोज़ तुमसे प्यार होता है 🌹","मेरे सबसे प्यारे, हमेशा के लिए 💖","बारिश में भी तुम मेरी धूप हो ☀️","तुमसे प्यार करना सबसे आसान काम है 💞","तुम्हारे साथ सब कुछ सही लगता है 🌙"], b: ["सरप्राइज़ खोलो 💌","क्लिक करो 🎁","तुम्हारे लिए कुछ है ❤️","एक राज़ संदेश 🤫","खोलो मुझे 💝"] },
            friendship: { c:["दोस्त हैं","बेस्ट फ्रेंड हैं","जानते हैं एक दूसरे को"],                               m: ["तुम्हारा दोस्त होना मेरी किस्मत है 🌟","सबसे अच्छे दोस्त वो परिवार हैं जो हम चुनते हैं 💛","हमेशा साथ रहने के लिए शुक्रिया ⭐","तुम हर दिन को मज़ेदार बनाते हो 🎉","तुम्हारे साथ हर सफर अच्छा लगता है 🌈","साथ हों या दूर, दिल हमेशा पास है 🫂","मुझे कोई तुमसे बेहतर नहीं समझता ✨"], b: ["सरप्राइज़ खोलो 🎉","तुम्हारे लिए कुछ है 💛","मेरे सबसे ख़ास दोस्त के लिए 🌟","खोलो यार 🎁","तुम इसके हकदार हो 🫶"] },
            family:     { c:["परिवार है","साथ हैं","मेरी ज़िंदगी में हैं"],                                          m: ["परिवार ही सब कुछ है — तुम्हारा होना मेरी खुशकिस्मती है 🌿","घर वो है जहाँ तुम हो 🏡","तुम्हारे साथ बड़े होना सबसे अच्छा सफर था 🌱","दूरी चाहे जितनी हो, दिल हमेशा पास है ⭐","साथ हों या दूर, हमेशा परिवार 🌿","सबसे अच्छी यादों में तुम हो 🤗","तुम मेरे अपने हो, हमेशा के लिए 💚"], b: ["सरप्राइज़ खोलो 🏡","सिर्फ तुम्हारे लिए 💚","दिल से एक संदेश 🫶","देखो ज़रा 🌿","खोलो मुझे ⭐"] },
            parents:    { c:["तुम्हारे साथ हैं","मेरे हीरो हैं","आभारी हैं","जन्म से,"],                             m: ["सब कुछ के लिए शुक्रिया — प्यार करता हूँ 💜","जो मैं हूँ वो तुम्हारी वजह से हूँ 🌸","दुनिया के सबसे अच्छे पापा 💐","दुनिया की सबसे अच्छी माँ 💐","तुम्हारे प्यार ने मुझे बनाया 💜","हमेशा मुझ पर भरोसा रखने के लिए शुक्रिया 🌟","शब्द कम पड़ते हैं — बस, शुक्रिया 🙏"], b: ["सरप्राइज़ खोलो 💐","प्यार के साथ एक संदेश 💜","तुम्हारे लिए बनाया है 🌸","खोलो 🙏","तुम्हारे लिए कुछ ख़ास ⭐"] },
            pets:       { c:["साथ हैं","मेरे साथी हैं","मेरी ज़िंदगी में हैं"],                                      m: ["तुम हर दिन को रोशन कर देते हो 🐾","इससे बेहतर साथी नहीं हो सकता 🐶","पहली नज़र से ही दिल चुरा लिया 🐱","तुम्हारे साथ ज़िंदगी बेहतर है 🧡","मेरे सबसे प्यारे पागल दोस्त 🐾","दुनिया का सबसे अच्छा कुत्ता 🦴","दुनिया की सबसे अच्छी बिल्ली 🦴","चार पैरों पर शुद्ध प्यार ❤️"], b: ["सरप्राइज़ खोलो 🐾","भौं 🐾","म्याऊँ 🐾","तुम्हारे लिए ट्रीट 🦴","खोलो 🧡","मेरे प्यारे बालदार दोस्त के लिए 🐱"] },
            custom:     { c:["से","साथ हैं","जानते हैं"],                                                             m: ["तुम मेरी दुनिया हो 🌟","तुम्हारे बारे में सोच रहा हूँ 💌","तुम सब अच्छे के हकदार हो ✨","बस बताना चाहता था कि तुम कितने शानदार हो 🎉","तुम्हारी याद आती है 💙"], b: ["सरप्राइज़ खोलो 💌","क्लिक करो 🎁","तुम्हारे लिए कुछ है ✨","खोलो 🌟"] },
        },
        tr: {
            love:       { c:["Birlikte","Sevgiliyiz","Tanışalı"],                                                     m: ["Seninle geçirdiğim her an ev gibi hissettiriyor 🌟","Dünyamı daha güzel yapıyorsun ❤️","Her gün sana yeniden aşık oluyorum 🌹","En sevdiğim kişi, sonsuza dek 💖","Yağmurlu günlerde bile güneşimsin ☀️","Seni sevmek dünyanın en kolay şeyi 💞","Seninle her şey yerli yerine oturuyor 🌙"], b: ["Sürprizi aç 💌","Tıkla ve gör 🎁","Sana bir şeyim var ❤️","Sana gizli bir mesaj 🤫","Aç beni 💝"] },
            friendship: { c:["Arkadaşız","En iyi arkadaşız","Tanışalı"],                                             m: ["Seni hayatımda bulduğum için çok şanslıyım 🌟","En iyi arkadaşlar seçtiğimiz ailemizdir 💛","Her zaman yanımda olduğun için teşekkürler ⭐","Her günü daha eğlenceli yapıyorsun 🎉","Maceralar seninle çok daha güzel 🌈","Uzakta da olsak hep yanındayız 🫂","Beni kimse senin kadar anlayamıyor ✨"], b: ["Sürprizi aç 🎉","Sana bir şeyim var 💛","En sevdiğim insan için 🌟","Aç beni, arkadaşım 🎁","Bunu hak ediyorsun 🫶"] },
            family:     { c:["Aileyiz","Birlikteydik","Hayatımdayken"],                                               m: ["Aile her şeydir — seni bulduğuma şükürler 🌿","Ev senin olduğun yer 🏡","Seninle büyümek en güzel maceram oldu 🌱","Ne kadar uzakta olursak olalım, kalpler hep yakın ⭐","Ayrı ya da birlikte, hep aileyiz 🌿","En güzel anılarımda hep sen varsın 🤗","Sen benim insanımsın, sonsuza dek 💚"], b: ["Sürprizi aç 🏡","Sadece senin için 💚","Gönülden bir mesaj 🫶","Tıkla ve gör 🌿","Aç beni ⭐"] },
            parents:    { c:["Seninleyim","Kahramanımsın","Minnettarım","Doğduğumdan beri,"],                         m: ["Her şey için teşekkürler — seni seviyorum 💜","Bugünkü ben hep sana borçluyum 🌸","Dünyanın en iyi babası 💐","Dünyanın en iyi annesi 💐","Sevgin beni şekillendirdi ✨","Her zaman bana inandığın için teşekkürler 💜","Kelimeler yetmez — sadece, teşekkürler 🙏"], b: ["Sürprizi aç 💐","Sevgiyle bir mesaj 💜","Senin için bir şey hazırladım 🌸","Aç beni 🙏","Sana özel bir şey ⭐"] },
            pets:       { c:["Birlikte","Dostumuz","Hayatımda"],                                                      m: ["Her günü daha parlak yapıyorsun 🐾","Daha iyi bir dost olamazdı 🐶","İlk andan beri kalbimi çaldın 🐱","Seninle hayat çok daha güzel 🧡","En sevdiğim küçük tuhaf dostum 🐾","Dünyanın en iyi köpeği 🦴","Dünyanın en iyi kedisi 🦴","Dört ayak üstünde saf sevgi ❤️"], b: ["Sürprizi aç 🐾","Hav 🐾","Miyav 🐾","Sana ikram 🦴","Aç beni 🧡","En sevdiğim tüy topuna 🐱"] },
            custom:     { c:["Dan beri","Birlikte","Tanışalı"],                                                       m: ["Sen benim her şeyimsin 🌟","Seni düşünüyorum 💌","Sen her güzelliği hak ediyorsun ✨","Ne kadar harika biri olduğunu söylemek istedim 🎉","Seni özlüyorum 💙"], b: ["Sürprizi aç 💌","Tıkla 🎁","Sana bir şeyim var ✨","Aç beni 🌟"] },
        },
        el: {
            love:       { c:["Μαζί εδώ και","Ερωτευμένοι εδώ και","Μαζί από"],                                       m: ["Κάθε στιγμή μαζί σου νιώθει σαν σπίτι 🌟","Κάνεις τον κόσμο μου πιο όμορφο ❤️","Ερωτεύομαι ξανά κάθε μέρα 🌹","Αγαπημένο μου πρόσωπο, για πάντα 💖","Είσαι ο ήλιος μου τις βροχερές μέρες ☀️","Να σ' αγαπώ είναι το πιο εύκολο πράγμα 💞","Μαζί σου όλα έχουν νόημα 🌙"], b: ["Άνοιξε την έκπληξη 💌","Κλικ για έκπληξη 🎁","Έχω κάτι για σένα ❤️","Μυστικό μήνυμα για σένα 🤫","Άνοιξέ με 💝"] },
            friendship: { c:["Φίλοι εδώ και","Κολλητοί εδώ και","Ξέρουμε ο ένας τον άλλο"],                          m: ["Είμαι τυχερός που σε έχω στη ζωή μου 🌟","Οι καλύτεροι φίλοι είναι η οικογένεια που επιλέγουμε 💛","Ευχαριστώ που είσαι πάντα εκεί ⭐","Κάνεις κάθε μέρα πιο διασκεδαστική 🎉","Οι περιπέτειες είναι καλύτερες μαζί σου 🌈","Κοντά ή μακριά, πάντα μαζί 🫂","Κανείς δεν με καταλαβαίνει όπως εσύ ✨"], b: ["Άνοιξε την έκπληξη 🎉","Κάτι για σένα 💛","Για το αγαπημένο μου άτομο 🌟","Άνοιξέ με, φίλε 🎁","Το αξίζεις 🫶"] },
            family:     { c:["Οικογένεια εδώ και","Μαζί εδώ και","Στη ζωή μου εδώ και"],                             m: ["Η οικογένεια είναι τα πάντα — τυχερός που σε έχω 🌿","Σπίτι είναι όπου εσύ 🏡","Να μεγαλώνω μαζί σου ήταν η καλύτερη περιπέτεια 🌱","Όσο μακριά κι αν είμαστε, η καρδιά μας είναι κοντά ⭐","Μαζί ή χώρια, πάντα οικογένεια 🌿","Οι καλύτερες αναμνήσεις έχουν εσένα μέσα 🤗","Είσαι ο άνθρωπός μου για πάντα 💚"], b: ["Άνοιξε την έκπληξη 🏡","Μόνο για σένα 💚","Μήνυμα από την καρδιά 🫶","Κλικ για να δεις 🌿","Άνοιξέ με ⭐"] },
            parents:    { c:["Μαζί σου εδώ και","Είσαι ο ήρωάς μου εδώ και","Ευγνώμων εδώ και","Από τη γέννησή μου,"], m: ["Ευχαριστώ για όλα — σ' αγαπώ 💜","Όλα αυτά που είμαι σε οφείλω 🌸","Ο καλύτερος μπαμπάς στον κόσμο 💐","Η καλύτερη μαμά στον κόσμο 💐","Η αγάπη σου με διαμόρφωσε ✨","Ευχαριστώ που πίστεψες πάντα σε μένα 💜","Δεν φτάνουν τα λόγια — απλά, ευχαριστώ 🙏"], b: ["Άνοιξε την έκπληξη 💐","Μήνυμα με αγάπη 💜","Έφτιαξα κάτι για σένα 🌸","Άνοιξέ με 🙏","Κάτι ξεχωριστό για σένα ⭐"] },
            pets:       { c:["Μαζί εδώ και","Μου ανήκεις εδώ και","Στη ζωή μου εδώ και"],                            m: ["Κάνεις κάθε μέρα πιο φωτεινή 🐾","Ο καλύτερος σύντροφος που θα μπορούσα να έχω 🐶","Με κέρδισες από την πρώτη στιγμή 🐱","Η ζωή είναι καλύτερη μαζί σου 🧡","Ο αγαπημένος μου μικρός παράξενος 🐾","Ο καλύτερος σκύλος στον κόσμο 🦴","Η καλύτερη γάτα στον κόσμο 🦴","Αγνή αγάπη σε τέσσερα πόδια ❤️"], b: ["Άνοιξε την έκπληξη 🐾","Γαβ 🐾","Νιάου 🐾","Ένα δωράκι για σένα 🦴","Άνοιξέ με 🧡","Για το αγαπημένο μου χνουδάτο 🐱"] },
            custom:     { c:["Από","Μαζί εδώ και","Ξέρουμε ο ένας τον άλλο"],                                        m: ["Σημαίνεις τα πάντα για μένα 🌟","Σκέφτομαι εσένα 💌","Αξίζεις όλα τα καλά ✨","Ήθελα απλώς να ξέρεις πόσο εκπληκτικός/ή είσαι 🎉","Μου λείπεις 💙"], b: ["Άνοιξε την έκπληξη 💌","Κλικ για έκπληξη 🎁","Έχω κάτι για σένα ✨","Άνοιξέ με 🌟"] },
        },
        sv: {
            love:       { c:["Tillsammans sedan","Kär sedan","Känt varandra sedan"],                                  m: ["Varje stund med dig känns som hemma 🌟","Du gör min värld bättre ❤️","Jag förälskar mig i dig varje dag 🌹","Min favoritmänniska, för alltid 💖","Du är min sol på regniga dagar ☀️","Att älska dig är det enklaste i världen 💞","Med dig faller allt på plats 🌙"], b: ["Öppna överraskningen 💌","Klicka för en överraskning 🎁","Jag har något till dig ❤️","Ett hemligt meddelande till dig 🤫","Öppna mig 💝"] },
            friendship: { c:["Vänner sedan","Bästa vänner sedan","Känt varandra sedan"],                              m: ["Jag är så lycklig att ha dig i mitt liv 🌟","Bästa vänner är den familj vi väljer 💛","Tack för att du alltid finns där ⭐","Du gör varje dag roligare 🎉","Äventyr är bättre med dig 🌈","Nära eller långt borta, alltid i varandras hjärtan 🫂","Ingen förstår mig som du ✨"], b: ["Öppna överraskningen 🎉","Något till dig 💛","Till min favoritperson 🌟","Öppna mig, vän 🎁","Du förtjänar det 🫶"] },
            family:     { c:["Familj sedan","Tillsammans sedan","I mitt liv sedan"],                                  m: ["Familj är allt — så glad att ha dig 🌿","Hem är där du är 🏡","Att växa upp med dig var det bästa äventyret 🌱","Oavsett avstånd, alltid nära i hjärtat ⭐","Nära eller långt borta, alltid familj 🌿","De bästa minnena har dig i dem 🤗","Du är min person för alltid 💚"], b: ["Öppna överraskningen 🏡","Bara för dig 💚","Ett meddelande från hjärtat 🫶","Klicka för att se 🌿","Öppna mig ⭐"] },
            parents:    { c:["Med dig sedan","Du är min hjälte sedan","Tacksam sedan","Sedan jag föddes,"],           m: ["Tack för allt — jag älskar dig 💜","Allt jag är har jag dig att tacka för 🌸","Världens bästa pappa 💐","Världens bästa mamma 💐","Din kärlek formade vem jag är ✨","Tack för att du alltid trodde på mig 💜","Inga ord räcker — bara, tack 🙏"], b: ["Öppna överraskningen 💐","Ett meddelande med kärlek 💜","Jag har gjort något till dig 🌸","Öppna mig 🙏","Något speciellt till dig ⭐"] },
            pets:       { c:["Tillsammans sedan","Min vän sedan","I mitt liv sedan"],                                 m: ["Du gör varje dag ljusare 🐾","Den bästa kompis man kan önska sig 🐶","Du tog mitt hjärta från första stund 🐱","Livet är bättre med dig 🧡","Min favorit lilla tokige 🐾","Världens bästa hund 🦴","Världens bästa katt 🦴","Ren kärlek på fyra tassar ❤️"], b: ["Öppna överraskningen 🐾","Vov 🐾","Mjau 🐾","En godis till dig 🦴","Öppna mig 🧡","Till mitt älskade lulligaste 🐱"] },
            custom:     { c:["Sedan","Tillsammans sedan","Känt varandra sedan"],                                      m: ["Du betyder allt för mig 🌟","Tänker på dig 💌","Du förtjänar allt gott ✨","Ville bara att du ska veta hur fantastisk du är 🎉","Saknar dig 💙"], b: ["Öppna överraskningen 💌","Klicka 🎁","Jag har något till dig ✨","Öppna mig 🌟"] },
        },
        no: {
            love:       { c:["Sammen siden","Forelsket siden","Kjent hverandre siden"],                               m: ["Hvert øyeblikk med deg føles som hjem 🌟","Du gjør verden min vakrere ❤️","Jeg forelsker meg i deg hver dag 🌹","Min favorittperson, for alltid 💖","Du er solen min på regnvær ☀️","Å elske deg er det letteste i verden 💞","Med deg faller alt på plass 🌙"], b: ["Åpne overraskelsen 💌","Klikk for overraskelse 🎁","Jeg har noe til deg ❤️","En hemmelig melding til deg 🤫","Åpne meg 💝"] },
            friendship: { c:["Venner siden","Bestevennene siden","Kjent hverandre siden"],                            m: ["Jeg er så heldig som har deg i livet mitt 🌟","Beste venner er familien vi velger 💛","Takk for at du alltid er der ⭐","Du gjør hver dag morsommere 🎉","Eventyr er bedre med deg 🌈","Nær eller langt borte, alltid i hverandres hjerter 🫂","Ingen forstår meg slik som du ✨"], b: ["Åpne overraskelsen 🎉","Noe til deg 💛","Til min favorittmenneske 🌟","Åpne meg, venn 🎁","Du fortjener dette 🫶"] },
            family:     { c:["Familie siden","Sammen siden","I livet mitt siden"],                                    m: ["Familie er alt — så glad for å ha deg 🌿","Hjem er der du er 🏡","Å vokse opp med deg var det beste eventyret 🌱","Uansett avstand, alltid nær i hjertet ⭐","Nær eller langt, alltid familie 🌿","De beste minnene har deg i seg 🤗","Du er min person for alltid 💚"], b: ["Åpne overraskelsen 🏡","Bare for deg 💚","En melding fra hjertet 🫶","Klikk for å se 🌿","Åpne meg ⭐"] },
            parents:    { c:["Med deg siden","Du er helten min siden","Takknemlig siden","Siden jeg ble født,"],      m: ["Takk for alt — jeg elsker deg 💜","Alt jeg er har jeg deg å takke for 🌸","Verdens beste pappa 💐","Verdens beste mamma 💐","Kjærligheten din formet hvem jeg er ✨","Takk for at du alltid trodde på meg 💜","Ingen ord er nok — bare, takk 🙏"], b: ["Åpne overraskelsen 💐","En melding med kjærlighet 💜","Jeg har laget noe til deg 🌸","Åpne meg 🙏","Noe spesielt til deg ⭐"] },
            pets:       { c:["Sammen siden","Min venn siden","I livet mitt siden"],                                   m: ["Du gjør hver dag lysere 🐾","Den beste vennen man kan ønske seg 🐶","Du tok hjertet mitt fra første stund 🐱","Livet er bedre med deg 🧡","Min favoritt lille tulling 🐾","Verdens beste hund 🦴","Verdens beste katt 🦴","Ren kjærlighet på fire poter ❤️"], b: ["Åpne overraskelsen 🐾","Voff 🐾","Mjau 🐾","En godbit til deg 🦴","Åpne meg 🧡","Til min kjære lodne venn 🐱"] },
            custom:     { c:["Siden","Sammen siden","Kjent hverandre siden"],                                         m: ["Du betyr alt for meg 🌟","Tenker på deg 💌","Du fortjener alt godt ✨","Ville bare at du skal vite hvor fantastisk du er 🎉","Savner deg 💙"], b: ["Åpne overraskelsen 💌","Klikk 🎁","Jeg har noe til deg ✨","Åpne meg 🌟"] },
        },
        da: {
            love:       { c:["Sammen siden","Forelskede siden","Kendt hinanden siden"],                               m: ["Hvert øjeblik med dig føles som hjem 🌟","Du gør min verden smukkere ❤️","Jeg forelsker mig i dig hver dag 🌹","Mit yndlingsmenneske, for altid 💖","Du er min sol på regnvejrsdage ☀️","At elske dig er det nemmeste i verden 💞","Med dig falder alt på plads 🌙"], b: ["Åbn overraskelsen 💌","Klik for overraskelse 🎁","Jeg har noget til dig ❤️","En hemmelig besked til dig 🤫","Åbn mig 💝"] },
            friendship: { c:["Venner siden","Bedste venner siden","Kendt hinanden siden"],                            m: ["Jeg er så heldig at have dig i mit liv 🌟","Bedste venner er den familie vi vælger 💛","Tak for altid at være der ⭐","Du gør hver dag sjovere 🎉","Eventyr er bedre med dig 🌈","Nær eller langt borte, altid i hinandens hjerter 🫂","Ingen forstår mig som dig ✨"], b: ["Åbn overraskelsen 🎉","Noget til dig 💛","Til mit yndlingsmenneske 🌟","Åbn mig, ven 🎁","Du fortjener det 🫶"] },
            family:     { c:["Familie siden","Sammen siden","I mit liv siden"],                                       m: ["Familie er alt — så glad for at have dig 🌿","Hjem er der hvor du er 🏡","At vokse op med dig var det bedste eventyr 🌱","Uanset afstand, altid tæt på i hjertet ⭐","Nær eller fjern, altid familie 🌿","De bedste minder har dig i dem 🤗","Du er min person for altid 💚"], b: ["Åbn overraskelsen 🏡","Kun til dig 💚","En besked fra hjertet 🫶","Klik for at se 🌿","Åbn mig ⭐"] },
            parents:    { c:["Med dig siden","Du er min helt siden","Taknemmelig siden","Siden jeg blev født,"],       m: ["Tak for alt — jeg elsker dig 💜","Alt hvad jeg er skylder jeg dig 🌸","Verdens bedste far 💐","Verdens bedste mor 💐","Din kærlighed formede hvem jeg er ✨","Tak for at du altid troede på mig 💜","Ingen ord er nok — bare, tak 🙏"], b: ["Åbn overraskelsen 💐","En besked med kærlighed 💜","Jeg har lavet noget til dig 🌸","Åbn mig 🙏","Noget særligt til dig ⭐"] },
            pets:       { c:["Sammen siden","Min ven siden","I mit liv siden"],                                       m: ["Du gør hver dag lysere 🐾","Den bedste ven man kan ønske sig 🐶","Du tog mit hjerte fra første stund 🐱","Livet er bedre med dig 🧡","Min yndlingslille tosse 🐾","Verdens bedste hund 🦴","Verdens bedste kat 🦴","Ren kærlighed på fire poter ❤️"], b: ["Åbn overraskelsen 🐾","Vov 🐾","Miav 🐾","En godbid til dig 🦴","Åbn mig 🧡","Til min elskede lodne ven 🐱"] },
            custom:     { c:["Siden","Sammen siden","Kendt hinanden siden"],                                          m: ["Du betyder alt for mig 🌟","Tænker på dig 💌","Du fortjener alt godt ✨","Ville bare at du skal vide hvor fantastisk du er 🎉","Savner dig 💙"], b: ["Åbn overraskelsen 💌","Klik 🎁","Jeg har noget til dig ✨","Åbn mig 🌟"] },
        },
        fi: {
            love:       { c:["Yhdessä jo","Rakastuneita jo","Tunnettu jo"],                                           m: ["Jokainen hetki kanssasi tuntuu kodilta 🌟","Teet maailmastani paremman ❤️","Rakastun sinuun joka päivä 🌹","Rakkaimpani, ikuisesti 💖","Olet aurinkoinen myös sateisina päivinä ☀️","Sinua on helppo rakastaa 💞","Kanssasi kaikki tuntuu oikealta 🌙"], b: ["Avaa yllätys 💌","Napsauta yllätystä varten 🎁","Minulla on jotain sinulle ❤️","Salainen viesti sinulle 🤫","Avaa minut 💝"] },
            friendship: { c:["Ystäviä jo","Parhaat kaverit jo","Tunnettu jo"],                                        m: ["Olen niin onnekas kun sinulla on sinä elämässäni 🌟","Parhaat ystävät ovat perhe, jonka valitsemme 💛","Kiitos, että olet aina siellä ⭐","Teet joka päivästä hauskemman 🎉","Seikkailut ovat parempia kanssasi 🌈","Lähellä tai kaukana, aina sydämissämme 🫂","Kukaan ei ymmärrä minua kuten sinä ✨"], b: ["Avaa yllätys 🎉","Jotain sinulle 💛","Suosikkihenkilölleni 🌟","Avaa minut, ystävä 🎁","Ansaitset tämän 🫶"] },
            family:     { c:["Perhettä jo","Yhdessä jo","Elämässäni jo"],                                             m: ["Perhe on kaikki — onnellinen kun sinulla on sinä 🌿","Koti on siellä missä sinä olet 🏡","Kasvaminen kanssasi oli paras seikkailu 🌱","Etäisyydestä huolimatta aina sydämessä lähellä ⭐","Lähellä tai kaukana, aina perhettä 🌿","Parhaat muistot sisältävät sinut 🤗","Olet minun ihmiseni ikuisesti 💚"], b: ["Avaa yllätys 🏡","Vain sinulle 💚","Viesti sydämestä 🫶","Napsauta nähdäksesi 🌿","Avaa minut ⭐"] },
            parents:    { c:["Kanssasi jo","Olet sankarini jo","Kiitollinen jo","Syntymästäni lähtien,"],             m: ["Kiitos kaikesta — rakastan sinua 💜","Kaikki mitä olen, olen sinulle velkaa 🌸","Maailman paras isä 💐","Maailman paras äiti 💐","Rakkautesi muokkasi minua ✨","Kiitos, että uskoit minuun aina 💜","Sanat eivät riitä — vain, kiitos 🙏"], b: ["Avaa yllätys 💐","Viesti rakkaudella 💜","Tein jotain sinulle 🌸","Avaa minut 🙏","Jotain erityistä sinulle ⭐"] },
            pets:       { c:["Yhdessä jo","Lemmikkini jo","Elämässäni jo"],                                           m: ["Teet joka päivästä kirkkaamman 🐾","Paras kumppani mitä voi toivoa 🐶","Varastit sydämeni heti alusta 🐱","Elämä on parempaa kanssasi 🧡","Suosikkipieni hulluni 🐾","Maailman paras koira 🦴","Maailman paras kissa 🦴","Puhdas rakkaus neljällä tassulla ❤️"], b: ["Avaa yllätys 🐾","Hau 🐾","Miau 🐾","Herkku sinulle 🦴","Avaa minut 🧡","Rakastetulle karvapallolle 🐱"] },
            custom:     { c:["Lähtien","Yhdessä jo","Tunnettu jo"],                                                   m: ["Merkitset minulle kaiken 🌟","Ajattelen sinua 💌","Ansaitset kaikki hyvät asiat ✨","Halusin vain kertoa kuinka upea olet 🎉","Ikävä sinua 💙"], b: ["Avaa yllätys 💌","Napsauta 🎁","Minulla on jotain sinulle ✨","Avaa minut 🌟"] },
        },
        ro: {
            love:       { c:["Împreună de","Îndrăgostiți de","Cunoscuți de"],                                         m: ["Fiecare moment cu tine se simte ca acasă 🌟","Faci lumea mea mai frumoasă ❤️","Mă îndrăgostesc de tine în fiecare zi 🌹","Persoana mea preferată, pentru totdeauna 💖","Ești soarele meu în zilele ploioase ☀️","A te iubi este cel mai ușor lucru 💞","Cu tine totul are sens 🌙"], b: ["Deschide surpriza 💌","Click pentru surpriză 🎁","Am ceva pentru tine ❤️","Un mesaj secret pentru tine 🤫","Deschide-mă 💝"] },
            friendship: { c:["Prieteni de","Cei mai buni prieteni de","Cunoscuți de"],                                m: ["Sunt atât de norocos să te am în viața mea 🌟","Cei mai buni prieteni sunt familia pe care o alegem 💛","Mulțumesc că ești mereu acolo ⭐","Faci fiecare zi mai distractivă 🎉","Aventurile sunt mai bune cu tine 🌈","Aproape sau departe, mereu împreună 🫂","Nimeni nu mă înțelege ca tine ✨"], b: ["Deschide surpriza 🎉","Ceva pentru tine 💛","Pentru persoana mea preferată 🌟","Deschide-mă, prietene 🎁","Meriți asta 🫶"] },
            family:     { c:["Familie de","Împreună de","În viața mea de"],                                           m: ["Familia înseamnă totul — sunt norocos să te am 🌿","Acasă este unde ești tu 🏡","A crește împreună cu tine a fost cea mai frumoasă aventură 🌱","Indiferent de distanță, mereu aproape la inimă ⭐","Aproape sau departe, mereu familie 🌿","Cele mai frumoase amintiri te au pe tine 🤗","Ești omul meu pentru totdeauna 💚"], b: ["Deschide surpriza 🏡","Doar pentru tine 💚","Un mesaj din suflet 🫶","Click să vezi 🌿","Deschide-mă ⭐"] },
            parents:    { c:["Cu tine de","Ești eroul meu de","Recunoscător de","De când m-am născut,"],              m: ["Mulțumesc pentru tot — te iubesc 💜","Tot ce sunt îți datorez ție 🌸","Cel mai bun tată din lume 💐","Cea mai bună mamă din lume 💐","Dragostea ta m-a format 💜","Mulțumesc că ai crezut mereu în mine 🌟","Cuvintele nu ajung — pur și simplu, mulțumesc 🙏"], b: ["Deschide surpriza 💐","Un mesaj cu dragoste 💜","Am făcut ceva pentru tine 🌸","Deschide-mă 🙏","Ceva special pentru tine ⭐"] },
            pets:       { c:["Împreună de","Prietenul meu de","În viața mea de"],                                     m: ["Faci fiecare zi mai luminoasă 🐾","Cel mai bun companion pe care mi l-aș putea dori 🐶","M-ai cucerit din prima clipă 🐱","Viața e mai bună cu tine 🧡","Micul meu ciudat preferat 🐾","Cel mai bun câine din lume 🦴","Cea mai bună pisică din lume 🦴","Dragoste pură pe patru lăbuțe ❤️"], b: ["Deschide surpriza 🐾","Ham 🐾","Miau 🐾","O recompensă pentru tine 🦴","Deschide-mă 🧡","Pentru ghemul meu preferat 🐱"] },
            custom:     { c:["De","Împreună de","Cunoscuți de"],                                                      m: ["Înseamni totul pentru mine 🌟","Mă gândesc la tine 💌","Meriți toate lucrurile bune ✨","Am vrut doar să știi cât de uimitor ești 🎉","Îmi ești dor 💙"], b: ["Deschide surpriza 💌","Click 🎁","Am ceva pentru tine ✨","Deschide-mă 🌟"] },
        },
        hu: {
            love:       { c:["Együtt már","Szerelmesek vagyunk","Ismerjük egymást"],                                  m: ["Veled minden pillanat otthon érzik 🌟","Jobbá teszed a világomat ❤️","Minden nap belé szeretek újra 🌹","Kedvencem, örökre 💖","Esős napokon is te vagy a napfényem ☀️","Szeretni téged a legkönnyebb dolog a világon 💞","Veled minden a helyére kerül 🌙"], b: ["Nyisd meg a meglepetést 💌","Kattints a meglepetésért 🎁","Van valamim neked ❤️","Titkos üzenet neked 🤫","Nyiss meg 💝"] },
            friendship: { c:["Barátok vagyunk","Legjobb barátok vagyunk","Ismerjük egymást"],                         m: ["Nagyon szerencsés vagyok, hogy ott vagy az életemben 🌟","A legjobb barátok az a család, akit mi választunk 💛","Köszönöm, hogy mindig ott vagy ⭐","Minden napot szórakoztatóbbá teszel 🎉","Kalandok veled sokkal jobbak 🌈","Közel vagy távol, mindig együtt szívünkben 🫂","Senki sem ért meg úgy, ahogy te ✨"], b: ["Nyisd meg a meglepetést 🎉","Valami neked 💛","Kedvenc emberemnek 🌟","Nyiss meg, barátom 🎁","Megérdemled ezt 🫶"] },
            family:     { c:["Família vagyunk","Együtt már","Az életemben van"],                                      m: ["A család minden — milyen szerencsés vagyok, hogy ott vagy 🌿","Otthon ott van, ahol te vagy 🏡","Veled felnőni a legjobb kaland volt 🌱","Bármilyen messze is legyünk, szívünk mindig közel van ⭐","Közel vagy távol, mindig família 🌿","A legjobb emlékekben mindig ott vagy 🤗","Te az emberem vagy örökre 💚"], b: ["Nyisd meg a meglepetést 🏡","Csak neked 💚","Üzenet a szívből 🫶","Kattints, hogy megnézd 🌿","Nyiss meg ⭐"] },
            parents:    { c:["Veled már","Te vagy a hősöm","Hálás vagyok","Születésem óta,"],                         m: ["Köszönöm mindent — szeretlek 💜","Mindazt, ami vagyok, neked köszönöm 🌸","A világ legjobb apukája 💐","A világ legjobb anyukája 💐","A szereteted formálta, aki vagyok ✨","Köszönöm, hogy mindig hittél bennem 💜","Szavak nem elégségesek — csak, köszönöm 🙏"], b: ["Nyisd meg a meglepetést 💐","Üzenet szeretettel 💜","Készítettem valamit neked 🌸","Nyiss meg 🙏","Valami különleges neked ⭐"] },
            pets:       { c:["Együtt már","Az én kis barátom","Az életemben van"],                                    m: ["Minden napot fénnyel töltöd meg 🐾","A legjobb társ, akit kívánhattam 🐶","Azonnal megnyerted a szívemet 🐱","Veled jobb az élet 🧡","Kedvenc kis furcsaságom 🐾","A világ legjobb kutyája 🦴","A világ legjobb macskája 🦴","Tiszta szeretet négy manccsal ❤️"], b: ["Nyisd meg a meglepetést 🐾","Vau 🐾","Miau 🐾","Egy jutalomfalat neked 🦴","Nyiss meg 🧡","Kedvenc bundásomnak 🐱"] },
            custom:     { c:["Óta","Együtt már","Ismerjük egymást"],                                                  m: ["Mindent jelentsz nekem 🌟","Gondolok rád 💌","Megérdemled az összes jó dolgot ✨","Csak tudatni szerettem volna, hogy milyen csodálatos vagy 🎉","Hiányzol 💙"], b: ["Nyisd meg a meglepetést 💌","Kattints 🎁","Van valamim neked ✨","Nyiss meg 🌟"] },
        },
        cs: {
            love:       { c:["Spolu už","Zamilovaní už","Známe se"],                                                  m: ["Každý okamžik s tebou se cítí jako doma 🌟","Děláš můj svět krásnějším ❤️","Zamilovávám se do tebe každý den 🌹","Moje oblíbená osoba, navždy 💖","Jsi mým sluncem i za deštivých dní ☀️","Milovat tě je nejjednodušší věc na světě 💞","S tebou vše do sebe zapadá 🌙"], b: ["Otevři překvapení 💌","Klikni pro překvapení 🎁","Mám pro tebe něco ❤️","Tajná zpráva pro tebe 🤫","Otevři mě 💝"] },
            friendship: { c:["Přátelé už","Nejlepší přátelé už","Známe se"],                                          m: ["Mám takové štěstí, že tě mám v životě 🌟","Nejlepší přátelé jsou rodina, kterou si vybíráme 💛","Díky, že jsi vždy tady ⭐","Děláš každý den zábavnějším 🎉","Dobrodružství jsou lepší s tebou 🌈","Blízko nebo daleko, vždy v srdcích 🫂","Nikdo mě nerozumí tak jako ty ✨"], b: ["Otevři překvapení 🎉","Něco pro tebe 💛","Pro moji oblíbenou osobu 🌟","Otevři mě, příteli 🎁","Zasloužíš si to 🫶"] },
            family:     { c:["Rodina už","Spolu už","V mém životě"],                                                  m: ["Rodina je všechno — mám takové štěstí, že tě mám 🌿","Domov je tam, kde jsi ty 🏡","Vyrůstat s tebou bylo nejlepším dobrodružstvím 🌱","Bez ohledu na vzdálenost, srdce jsou vždy blízko ⭐","Blízko nebo daleko, vždy rodina 🌿","Nejlepší vzpomínky mají tebe v sobě 🤗","Jsi moje osoba navždy 💚"], b: ["Otevři překvapení 🏡","Jen pro tebe 💚","Zpráva ze srdce 🫶","Klikni pro zobrazení 🌿","Otevři mě ⭐"] },
            parents:    { c:["S tebou už","Jsi můj hrdina","Vděčný jsem","Od narození,"],                             m: ["Díky za všechno — miluji tě 💜","Vše, co jsem, ti vděčím 🌸","Nejlepší tatínek na světě 💐","Nejlepší maminka na světě 💐","Tvoje láska formovala to, kdo jsem ✨","Díky, že jsi mi vždy věřil 💜","Slova nestačí — prostě, díky 🙏"], b: ["Otevři překvapení 💐","Zpráva s láskou 💜","Připravil jsem pro tebe něco 🌸","Otevři mě 🙏","Něco zvláštního pro tebe ⭐"] },
            pets:       { c:["Spolu už","Můj mazlíček","V mém životě"],                                               m: ["Děláš každý den jasnějším 🐾","Nejlepší společník, jakého si mohl přát 🐶","Okradl jsi mé srdce od první chvíle 🐱","Život je s tebou lepší 🧡","Můj oblíbený malý podivín 🐾","Nejlepší pes na světě 🦴","Nejlepší kočka na světě 🦴","Čistá láska na čtyřech tlapkách ❤️"], b: ["Otevři překvapení 🐾","Haf 🐾","Mňau 🐾","Odměna pro tebe 🦴","Otevři mě 🧡","Pro mého oblíbeného chlupatého přítele 🐱"] },
            custom:     { c:["Od","Spolu už","Známe se"],                                                             m: ["Znamenáš pro mě vše 🌟","Myslím na tebe 💌","Zasloužíš si všechno dobré ✨","Chtěl jsem ti jen říct, jak jsi úžasný 🎉","Stýská se mi po tobě 💙"], b: ["Otevři překvapení 💌","Klikni 🎁","Mám pro tebe něco ✨","Otevři mě 🌟"] },
        },
        uk: {
            love:       { c:["Разом вже","Закохані вже","Знайомі вже"],                                               m: ["Кожна мить з тобою — як вдома 🌟","Ти робиш мій світ кращим ❤️","Щодня закохуюся в тебе знову 🌹","Моя найкохана людина, назавжди 💖","Навіть у дощ ти — моє сонечко ☀️","Любити тебе — найлегша річ у світі 💞","З тобою все стає на своє місце 🌙"], b: ["Відкрий сюрприз 💌","Натисни для сюрпризу 🎁","У мене є дещо для тебе ❤️","Таємне послання для тебе 🤫","Відкрий мене 💝"] },
            friendship: { c:["Друзі вже","Найкращі друзі вже","Знайомі вже"],                                         m: ["Мені так пощастило мати тебе в житті 🌟","Найкращі друзі — це сім'я, яку ми обираємо 💛","Дякую, що завжди поруч ⭐","Ти робиш кожен день веселішим 🎉","Пригоди кращі разом з тобою 🌈","Поруч чи далеко — завжди в серці 🫂","Ніхто не розуміє мене так, як ти ✨"], b: ["Відкрий сюрприз 🎉","Щось для тебе 💛","Для моєї найулюбленішої людини 🌟","Відкрий мене, друже 🎁","Ти це заслуговуєш 🫶"] },
            family:     { c:["Сім'я вже","Разом вже","У моєму житті вже"],                                            m: ["Сім'я — це все — мені так пощастило мати тебе 🌿","Дім там, де ти 🏡","Рости разом з тобою — найкраща пригода 🌱","Хоч би як далеко, серце завжди поруч ⭐","Поруч чи окремо — завжди сім'я 🌿","Найкращі спогади мають тебе в них 🤗","Ти моя людина назавжди 💚"], b: ["Відкрий сюрприз 🏡","Тільки для тебе 💚","Послання від серця 🫶","Натисни, щоб побачити 🌿","Відкрий мене ⭐"] },
            parents:    { c:["З тобою вже","Ти мій герой вже","Вдячний вже","Вдячна вже","З народження,"],            m: ["Дякую за все — люблю тебе 💜","Усім, чим я є, я завдячую тобі 🌸","Найкращий тато у світі 💐","Найкраща мама у світі 💐","Твоя любов сформувала мене ✨","Дякую, що завжди вірив у мене 💜","Дякую, що завжди вірила в мене 💜","Слів не вистачає — просто, дякую 🙏"], b: ["Відкрий сюрприз 💐","Послання з любов'ю 💜","Я зробив для тебе дещо 🌸","Я зробила для тебе дещо 🌸","Відкрий мене 🙏","Щось особливе для тебе ⭐"] },
            pets:       { c:["Разом вже","Мій улюбленець вже","У моєму житті вже"],                                   m: ["Ти робиш кожен день яскравішим 🐾","Найкращий друг, про якого можна мріяти 🐶","Ти підкорив моє серце з першої миті 🐱","Ти підкорила моє серце з першої миті 🐱","Зі мною тобою краще 🧡","Мій улюблений маленький дивак 🐾","Найкращий собака у світі 🦴","Найкращий кіт у світі 🦴","Чиста любов на чотирьох лапах ❤️"], b: ["Відкрий сюрприз 🐾","Гав 🐾","Няв 🐾","Ласощі для тебе 🦴","Відкрий мене 🧡","Для мого найулюбленішого пухнастика 🐱"] },
            custom:     { c:["З","Разом вже","Знайомі вже"],                                                          m: ["Ти означаєш для мене все 🌟","Думаю про тебе 💌","Ти заслуговуєш на все найкраще ✨","Просто хотів сказати, який ти дивовижний 🎉","Скучаю за тобою 💙"], b: ["Відкрий сюрприз 💌","Натисни 🎁","У мене є дещо для тебе ✨","Відкрий мене 🌟"] },
        },
        vi: {
            love:       { c:["Bên nhau được","Yêu nhau được","Quen nhau được"],                                       m: ["Mỗi khoảnh khắc bên em đều như về nhà 🌟","Em làm thế giới của anh đẹp hơn ❤️","Anh yêu em mỗi ngày 🌹","Người anh yêu nhất, mãi mãi 💖","Dù mưa hay nắng, em vẫn là ánh mặt trời 💞","Yêu em là điều dễ dàng nhất 💞","Bên em mọi thứ đều đúng chỗ 🌙"], b: ["Mở bất ngờ 💌","Bấm để xem 🎁","Anh có điều này cho em ❤️","Tin nhắn bí mật dành cho em 🤫","Mở ra đi 💝"] },
            friendship: { c:["Bạn bè được","Bạn thân được","Quen nhau được"],                                         m: ["Mình thật may mắn khi có bạn trong cuộc sống 🌟","Bạn thân là gia đình mình chọn 💛","Cảm ơn vì luôn ở đây ⭐","Bạn làm mỗi ngày vui hơn 🎉","Những cuộc phiêu lưu đẹp hơn khi có bạn 🌈","Gần hay xa, vẫn luôn trong tim nhau 🫂","Không ai hiểu mình như bạn ✨"], b: ["Mở bất ngờ 🎉","Có thứ này cho bạn 💛","Gửi người bạn yêu quý nhất 🌟","Mở ra đi, bạn ơi 🎁","Bạn xứng đáng được hưởng điều này 🫶"] },
            family:     { c:["Là gia đình được","Bên nhau được","Trong đời mình được"],                                m: ["Gia đình là tất cả — thật may khi có bạn 🌿","Nhà là nơi có bạn 🏡","Lớn lên cùng bạn là cuộc phiêu lưu tuyệt nhất 🌱","Dù xa cách, trái tim vẫn gần nhau ⭐","Gần hay xa, vẫn luôn là gia đình 🌿","Kỷ niệm đẹp nhất đều có bạn trong đó 🤗","Bạn là người của mình mãi mãi 💚"], b: ["Mở bất ngờ 🏡","Chỉ dành cho bạn 💚","Lời nhắn từ trái tim 🫶","Bấm để xem 🌿","Mở ra đi ⭐"] },
            parents:    { c:["Bên bạn được","Bạn là anh hùng của tôi được","Biết ơn được","Từ khi sinh ra,"],         m: ["Cảm ơn tất cả — con yêu ba mẹ 💜","Tất cả những gì con là đều nhờ ba mẹ 🌸","Ba tuyệt vời nhất thế giới 💐","Mẹ tuyệt vời nhất thế giới 💐","Tình yêu của ba mẹ đã tạo nên con 💜","Cảm ơn vì luôn tin tưởng con 🌟","Không có lời nào đủ — chỉ là, cảm ơn 🙏"], b: ["Mở bất ngờ 💐","Lời nhắn yêu thương 💜","Con đã làm điều này cho ba mẹ 🌸","Mở ra đi 🙏","Món quà đặc biệt dành cho bạn ⭐"] },
            pets:       { c:["Bên nhau được","Cùng nhau được","Trong đời mình được"],                                  m: ["Bạn làm mỗi ngày sáng lên 🐾","Người bạn đồng hành tốt nhất có thể có 🐶","Bạn chiếm trái tim mình ngay lần đầu 🐱","Cuộc sống đẹp hơn khi có bạn 🧡","Người bạn kỳ quặc yêu thích của mình 🐾","Chú chó tuyệt nhất thế giới 🦴","Chú mèo tuyệt nhất thế giới 🦴","Tình yêu thuần khiết trên bốn chân ❤️"], b: ["Mở bất ngờ 🐾","Gâu 🐾","Meo 🐾","Phần thưởng nhỏ cho bạn 🦴","Mở ra đi 🧡","Gửi chú bông bé yêu của mình 🐱"] },
            custom:     { c:["Từ","Bên nhau được","Quen nhau được"],                                                   m: ["Bạn là tất cả với tôi 🌟","Đang nghĩ đến bạn 💌","Bạn xứng đáng được hưởng mọi điều tốt đẹp ✨","Chỉ muốn bạn biết bạn tuyệt vời thế nào 🎉","Nhớ bạn 💙"], b: ["Mở bất ngờ 💌","Bấm xem 🎁","Có thứ này cho bạn ✨","Mở ra đi 🌟"] },
        },
        bn: {
            love:       { c:["একসাথে আছি","ভালোবাসি","চিনি"],                                                        m: ["তোমার সাথে প্রতিটি মুহূর্ত ঘরের মতো 🌟","তুমি আমার পৃথিবীকে সুন্দর করো ❤️","প্রতিদিন তোমার প্রেমে পড়ি 🌹","আমার প্রিয়জন, চিরকালের জন্য 💖","বৃষ্টির দিনেও তুমি আমার রোদ ☀️","তোমাকে ভালোবাসা পৃথিবীর সহজতম কাজ 💞","তোমার সাথে সবকিছু ঠিক মনে হয় 🌙"], b: ["চমক খুলুন 💌","ক্লিক করুন 🎁","তোমার জন্য কিছু আছে ❤️","তোমার জন্য গোপন বার্তা 🤫","খুলুন 💝"] },
            friendship: { c:["বন্ধু আছি","সবচেয়ে ভালো বন্ধু","চিনি"],                                               m: ["তোমাকে পেয়ে আমি সত্যিই ভাগ্যবান 🌟","সেরা বন্ধুরা হলো পরিবার যাদের আমরা বেছে নিই 💛","সবসময় পাশে থাকার জন্য ধন্যবাদ ⭐","তুমি প্রতিটি দিনকে মজাদার করো 🎉","তোমার সাথে প্রতিটি অ্যাডভেঞ্চার সেরা 🌈","দূরে হলেও মনে সবসময় কাছে 🫂","তুমি ছাড়া কেউ আমাকে এত বোঝে না ✨"], b: ["চমক খুলুন 🎉","তোমার জন্য কিছু 💛","আমার প্রিয় মানুষের জন্য 🌟","খুলুন বন্ধু 🎁","তুমি এটা পাওয়ার যোগ্য 🫶"] },
            family:     { c:["পরিবার আছি","একসাথে আছি","জীবনে আছো"],                                                m: ["পরিবার সবকিছু — তোমাকে পেয়ে ভাগ্যবান 🌿","ঘর হলো যেখানে তুমি আছো 🏡","তোমার সাথে বড় হওয়া ছিলো সেরা অ্যাডভেঞ্চার 🌱","দূরত্ব যাই হোক, হৃদয় সবসময় কাছে ⭐","কাছে বা দূরে, সবসময় পরিবার 🌿","সেরা স্মৃতিতে তুমি আছো 🤗","তুমি চিরকালের জন্য আমার মানুষ 💚"], b: ["চমক খুলুন 🏡","শুধু তোমার জন্য 💚","হৃদয় থেকে বার্তা 🫶","দেখতে ক্লিক করুন 🌿","খুলুন ⭐"] },
            parents:    { c:["তোমার সাথে আছি","তুমি আমার বীর","কৃতজ্ঞ","জন্মের পর থেকে,"],                          m: ["সবকিছুর জন্য ধন্যবাদ — ভালোবাসি 💜","আমি যা আছি তা তোমার কারণে 🌸","পৃথিবীর সেরা বাবা 💐","পৃথিবীর সেরা মা 💐","তোমার ভালোবাসা আমাকে গড়েছে ✨","সবসময় বিশ্বাস রাখার জন্য ধন্যবাদ 💜","ভাষায় প্রকাশ করা যায় না — শুধু, ধন্যবাদ 🙏"], b: ["চমক খুলুন 💐","ভালোবাসার বার্তা 💜","তোমার জন্য তৈরি করেছি 🌸","খুলুন 🙏","তোমার জন্য বিশেষ কিছু ⭐"] },
            pets:       { c:["একসাথে আছি","আমার সঙ্গী","জীবনে আছো"],                                                m: ["তুমি প্রতিটি দিন উজ্জ্বল করো 🐾","এর চেয়ে ভালো সঙ্গী আর চাই না 🐶","প্রথম দেখাতেই মন জয় করে নিলে 🐱","তোমার সাথে জীবন সুন্দর 🧡","আমার প্রিয় ছোট্ট পাগলাটে বন্ধু 🐾","পৃথিবীর সেরা কুকুর 🦴","পৃথিবীর সেরা বিড়াল 🦴","চার পায়ে বিশুদ্ধ ভালোবাসা ❤️"], b: ["চমক খুলুন 🐾","ঘেউ 🐾","মিঁও 🐾","তোমার জন্য ট্রিট 🦴","খুলুন 🧡","আমার প্রিয় তুলতুলে বন্ধুর জন্য 🐱"] },
            custom:     { c:["থেকে","একসাথে আছি","চিনি"],                                                             m: ["তুমি আমার সবকিছু 🌟","তোমার কথা ভাবছি 💌","তুমি সব ভালো জিনিস পাওয়ার যোগ্য ✨","শুধু বলতে চেয়েছিলাম তুমি কতটা অসাধারণ 🎉","তোমাকে মিস করি 💙"], b: ["চমক খুলুন 💌","ক্লিক করুন 🎁","তোমার জন্য কিছু আছে ✨","খুলুন 🌟"] },
        },
    };

    // Map any lang tag to a SUGGESTIONS key (full tag → base code → "en")
    function getSuggLang(tag) {
        if (!tag || tag === "auto") {
            const full = (navigator.language || "en").toLowerCase();
            const foundFull = Object.keys(SUGGESTIONS).find(k => k.toLowerCase() === full);
            if (foundFull) return foundFull;
            const b = full.split("-")[0];
            const foundBase = Object.keys(SUGGESTIONS).find(k => k.toLowerCase() === b);
            return foundBase || "en";
        }
        // Try exact match first, then case-insensitive, then base
        if (SUGGESTIONS[tag]) return tag;
        const foundExact = Object.keys(SUGGESTIONS).find(k => k.toLowerCase() === tag.toLowerCase());
        if (foundExact) return foundExact;
        const base = tag.split("-")[0].toLowerCase();
        const foundBase = Object.keys(SUGGESTIONS).find(k => k.toLowerCase() === base);
        return foundBase || "en";
    }

    // ── Settings panel ────────────────────────────────────────────────────────────
    function openSettingsPanel() {
        if (document.getElementById("lm-settings-overlay")) return;

        const cfg = loadConfig();
        const ui  = getUIStr(cfg.lang);    // initial language for option labels
        const en  = getUIStr("en");        // EN fallback

        function o(key) { return ui[key] || en[key] || key; }

        const langOptions = [
            ["auto",  o("o_auto")],
            ["en",    "🇬🇧 English"],
            ["pt-PT", "🇵🇹 Português (Portugal)"],
            ["pt-BR", "🇧🇷 Português (Brasil)"],
            ["fr",    "🇫🇷 Français"],
            ["fr-CA", "🇨🇦 Français (Canada)"],
            ["es",    "🇪🇸 Español"],
            ["es-MX", "🇲🇽 Español (México)"],
            ["es-AR", "🇦🇷 Español (Argentina)"],
            ["it",    "🇮🇹 Italiano"],
            ["de",    "🇩🇪 Deutsch"],
            ["de-AT", "🇦🇹 Deutsch (Österreich)"],
            ["nl",    "🇳🇱 Nederlands"],
            ["pl",    "🇵🇱 Polski"],
            ["ru",    "🇷🇺 Русский"],
            ["ja",    "🇯🇵 日本語"],
            ["ko",    "🇰🇷 한국어"],
            ["zh-CN", "🇨🇳 中文 (简体)"],
            ["zh-TW", "🇹🇼 中文 (繁體)"],
            ["zh-HK", "🇭🇰 中文 (香港)"],
            ["ar",    "🇸🇦 العربية"],
            ["hi",    "🇮🇳 हिन्दी"],
            ["bn",    "🇧🇩 বাংলা"],
            ["tr",    "🇹🇷 Türkçe"],
            ["vi",    "🇻🇳 Tiếng Việt"],
            ["uk",    "🇺🇦 Українська"],
            ["el",    "🇬🇷 Ελληνικά"],
            ["sv",    "🇸🇪 Svenska"],
            ["no",    "🇳🇴 Norsk"],
            ["da",    "🇩🇰 Dansk"],
            ["fi",    "🇫🇮 Suomi"],
            ["ro",    "🇷🇴 Română"],
            ["hu",    "🇭🇺 Magyar"],
            ["cs",    "🇨🇿 Čeština"],
        ];

        const typeOptions = [
            ["love",       o("o_love")],
            ["friendship", o("o_friendship")],
            ["family",     o("o_family")],
            ["parents",    o("o_parents")],
            ["pets",       o("o_pets")],
            ["custom",     o("o_custom")],
        ];

        const overlay = document.createElement("div");
        overlay.id = "lm-settings-overlay";

        overlay.innerHTML = `
<style>
  #lm-settings-overlay {
    position: fixed; inset: 0; z-index: 2147483647;
    background: rgba(0,0,0,.55); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Google Sans', Roboto, Arial, sans-serif;
  }
  #lm-settings-panel {
    background: #1e1e2e; color: #cdd6f4;
    border: 1px solid #45475a; border-radius: 20px;
    padding: 28px 32px; width: min(560px, 94vw);
    max-height: 90vh; overflow-y: auto;
    box-shadow: 0 24px 80px rgba(0,0,0,.7);
    animation: lm-panel-in .25s cubic-bezier(.22,1,.36,1);
  }
  @keyframes lm-panel-in {
    from { opacity:0; transform:translateY(20px) scale(.97); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }
  #lm-settings-panel h2 {
    font-size: 18px; font-weight: 600; margin: 0 0 6px;
    color: #cba6f7; display: flex; align-items: center; gap: 8px;
  }
  #lm-settings-panel .lm-subtitle {
    font-size: 12px; color: #6c7086; margin-bottom: 22px;
  }
  #lm-settings-panel .lm-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
  }
  #lm-settings-panel .lm-full { grid-column: 1 / -1; }
  #lm-settings-panel label {
    display: flex; flex-direction: column; gap: 5px;
    font-size: 12px; color: #a6adc8; font-weight: 500;
  }
  #lm-settings-panel label span.lm-hint {
    font-weight: 400; color: #585b70; font-size: 11px;
  }
  #lm-settings-panel input,
  #lm-settings-panel select {
    background: #313244; border: 1px solid #45475a; border-radius: 8px;
    color: #cdd6f4; padding: 8px 10px; font-size: 13px;
    outline: none; transition: border-color .2s;
    font-family: inherit;
  }
  #lm-settings-panel input:focus,
  #lm-settings-panel select:focus { border-color: #cba6f7; }
  #lm-settings-panel input::placeholder { color: #585b70; }
  #lm-settings-panel .lm-divider {
    border: none; border-top: 1px solid #313244; margin: 18px 0;
  }
  #lm-settings-panel .lm-actions {
    display: flex; flex-direction: column; align-items: flex-end; gap: 8px; margin-top: 22px;
  }
  #lm-settings-panel .lm-actions-btns {
    display: flex; gap: 10px; justify-content: flex-end;
  }
  #lm-settings-panel button {
    padding: 9px 20px; border-radius: 10px; border: none;
    font-size: 13px; font-weight: 600; cursor: pointer;
    font-family: inherit; transition: filter .2s;
  }
  #lm-settings-panel button:hover { filter: brightness(1.12); }
  #lm-btn-save    { background: #cba6f7; color: #1e1e2e; }
  #lm-btn-reset   { background: #f38ba8; color: #1e1e2e; }
  #lm-btn-cancel  { background: #313244; color: #cdd6f4; }
  #lm-settings-panel .lm-saved-msg {
    display: none; color: #a6e3a1; font-size: 12px; text-align: right;
    animation: lm-fade .4s ease;
  }
  @keyframes lm-fade { from{opacity:0} to{opacity:1} }
  #lm-settings-panel .lm-section-title {
    font-size: 11px; text-transform: uppercase; letter-spacing: .1em;
    color: #585b70; margin-bottom: 12px; margin-top: 4px;
  }
  #lm-settings-panel select.lm-preset {
    border-color: #585b70; color: #a6adc8; font-size: 12px;
  }
  #lm-settings-panel select.lm-preset:focus { border-color: #cba6f7; color: #cdd6f4; }
  #lm-settings-panel .lm-lang-badge {
    display: inline-block; font-size: 11px; background: #313244;
    color: #89b4fa; border: 1px solid #45475a; border-radius: 6px;
    padding: 2px 7px; margin-left: 6px; vertical-align: middle;
  }
</style>

<div id="lm-settings-panel">
  <h2 id="lm-ui-title">💌 Secret Message — Settings</h2>
  <p class="lm-subtitle" id="lm-ui-subtitle">Settings are saved automatically and persist across sessions.</p>

  <p class="lm-section-title" id="lm-ui-s-lang">🌐 Language</p>
  <div class="lm-grid">
    <label class="lm-full">
      <span id="lm-ui-l-lang">Language</span> <span class="lm-hint" id="lm-ui-h-lang">— sets the counter wording and loads suggestions in this language</span>
      <select id="lm-lang">
        ${langOptions.map(([v, l]) => `<option value="${v}"${cfg.lang === v ? " selected" : ""}>${l}</option>`).join("")}
      </select>
    </label>
  </div>

  <hr class="lm-divider">
  <p class="lm-section-title" id="lm-ui-s-type">Type &amp; Appearance</p>
  <div class="lm-grid">
    <label class="lm-full">
      <span id="lm-ui-l-type">Type</span>
      <select id="lm-type">
        ${typeOptions.map(([v, l]) => `<option value="${v}"${cfg.type === v ? " selected" : ""}>${l}</option>`).join("")}
      </select>
    </label>
    <label class="lm-full" style="flex-direction:row;align-items:center;gap:10px;cursor:pointer">
      <input type="checkbox" id="lm-always-show" style="width:16px;height:16px;accent-color:#cba6f7;flex-shrink:0" ${cfg.alwaysShow ? "checked" : ""}>
      <span id="lm-ui-l-always-show" style="color:#cdd6f4">Show card on every Google search (ignore keyword matching)</span>
    </label>
  </div>

  <hr class="lm-divider">
  <p class="lm-section-title" id="lm-ui-s-names">Names</p>
  <div class="lm-grid">
    <label>
      <span id="lm-ui-l-to">Recipient name</span> <span class="lm-hint" id="lm-ui-h-to">— person this is for</span>
      <input id="lm-recipient" type="text" placeholder="Emma" value="${cfg.recipientName}">
    </label>
    <label>
      <span id="lm-ui-l-from">Your name</span> <span class="lm-hint" id="lm-ui-h-from">— shown on signature</span>
      <input id="lm-sender" type="text" placeholder="James" value="${cfg.senderName}">
    </label>
  </div>

  <hr class="lm-divider">
  <p class="lm-section-title" id="lm-ui-s-msg">Message, Button &amp; Counter label <span id="lm-sugg-badge" class="lm-lang-badge">en</span></p>
  <div class="lm-grid">
    <label class="lm-full">
      <span id="lm-ui-l-counter">Counter label</span> <span class="lm-hint" id="lm-ui-h-counter">— text above the timer (e.g. "Together for", "Friends for"…)</span>
      <select id="lm-counter-label-preset" class="lm-preset">
        <option value="">— choose a suggestion or write your own —</option>
      </select>
      <input id="lm-counter-label" type="text" placeholder="Write your own label…" value="${cfg.counterLabel || ""}" style="margin-top:6px">
    </label>
    <label class="lm-full">
      <span id="lm-ui-l-message">Message</span>
      <select id="lm-message-preset" class="lm-preset">
        <option value="">— suggestions (or write your own below) —</option>
      </select>
      <input id="lm-message" type="text" placeholder="Write your own message…" value="${cfg.message}" style="margin-top:6px">
    </label>
    <label class="lm-full">
      <span id="lm-ui-l-button">Button label</span>
      <select id="lm-button-preset" class="lm-preset">
        <option value="">— suggestions (or write your own below) —</option>
      </select>
      <input id="lm-button" type="text" placeholder="Write your own button text…" value="${cfg.buttonLabel}" style="margin-top:6px">
    </label>
  </div>

  <hr class="lm-divider">
  <p class="lm-section-title" id="lm-ui-s-photo">Photo &amp; Counter</p>
  <div class="lm-grid">
    <label class="lm-full">
      <span id="lm-ui-l-photo">Photo URL</span> <span class="lm-hint" id="lm-ui-h-photo">— direct link to image, or leave blank for emoji icon</span>
      <input id="lm-photo" type="url" placeholder="https://…" value="${cfg.photoUrl}">
    </label>
    <label>
      <span id="lm-ui-l-photo-style-card">Card shape</span>
      <select id="lm-photo-style-card">
        <option value="circle"  ${cfg.photoStyleCard==="circle" ?"selected":""}>${o("o_circle")}</option>
        <option value="square"  ${cfg.photoStyleCard==="square" ?"selected":""}>${o("o_square")}</option>
        <option value="rounded" ${cfg.photoStyleCard==="rounded"?"selected":""}>${o("o_rounded")}</option>
        <option value="portrait"${cfg.photoStyleCard==="portrait"?"selected":""}>${o("o_portrait")}</option>
      </select>
    </label>
    <label>
      <span id="lm-ui-l-photo-style-surprise">Surprise shape</span>
      <select id="lm-photo-style-surprise">
        <option value="circle"  ${cfg.photoStyleSurprise==="circle" ?"selected":""}>${o("o_circle")}</option>
        <option value="square"  ${cfg.photoStyleSurprise==="square" ?"selected":""}>${o("o_square")}</option>
        <option value="rounded" ${cfg.photoStyleSurprise==="rounded"?"selected":""}>${o("o_rounded")}</option>
        <option value="portrait"${cfg.photoStyleSurprise==="portrait"?"selected":""}>${o("o_portrait")}</option>
      </select>
    </label>
    <label class="lm-full">
      <span id="lm-ui-l-since">Together since</span> <span class="lm-hint" id="lm-ui-h-since">— date &amp; time (leave blank to hide counter)</span>
      <input id="lm-since" type="datetime-local" value="${cfg.since ? cfg.since.slice(0,16) : ""}">
    </label>
  </div>

  <div class="lm-actions">
    <div class="lm-actions-btns">
      <button id="lm-btn-reset">🗑 Reset</button>
      <button id="lm-btn-cancel">Cancel</button>
      <button id="lm-btn-save">💾 Save</button>
    </div>
    <span class="lm-saved-msg" id="lm-saved-msg">✔ Saved! Reload the page to apply.</span>
  </div>
</div>`;

        // Apply UI string translations to all labelled elements
        document.body.appendChild(overlay);

        function applyUIStrings(langTag) {
            const u = getUIStr(langTag);
            const s = (id, txt) => { const el = overlay.querySelector("#"+id); if(el) el.textContent = txt; };
            s("lm-ui-title",    u.title);
            s("lm-ui-subtitle", u.subtitle);
            s("lm-ui-s-lang",   u.s_lang);
            s("lm-ui-l-lang",   u.l_lang);
            s("lm-ui-h-lang",   "— " + u.h_lang);
            s("lm-ui-s-type",   u.s_type);
            s("lm-ui-l-type",   u.l_type);
            s("lm-ui-s-names",  u.s_names);
            s("lm-ui-l-to",     u.l_to);
            s("lm-ui-h-to",     "— " + u.h_to);
            s("lm-ui-l-from",   u.l_from);
            s("lm-ui-h-from",   "— " + u.h_from);
            s("lm-ui-s-msg",    u.s_msg);
            // re-append badge (textContent above removes child nodes)
            const badge = overlay.querySelector("#lm-sugg-badge");
            if (badge) overlay.querySelector("#lm-ui-s-msg").appendChild(badge);
            s("lm-ui-l-counter",u.l_counter);
            s("lm-ui-h-counter","— " + u.h_counter);
            s("lm-ui-l-message",u.l_message);
            s("lm-ui-l-button", u.l_button);
            s("lm-ui-s-photo",  u.s_photo);
            s("lm-ui-l-photo",  u.l_photo);
            s("lm-ui-h-photo",  "— " + u.h_photo);
            const en = getUIStr("en");
            s("lm-ui-l-photo-style-card",    u.l_photo_style_card    || en.l_photo_style_card);
            s("lm-ui-l-photo-style-surprise", u.l_photo_style_surprise || en.l_photo_style_surprise);
            s("lm-ui-l-always-show",         u.l_always_show         || en.l_always_show);
            s("lm-ui-l-since",  u.l_since);
            s("lm-ui-h-since",  "— " + u.h_since);
            s("lm-saved-msg",   u.saved);
            s("lm-btn-reset",   u.btn_reset);
            s("lm-btn-cancel",  u.btn_cancel);
            s("lm-btn-save",    u.btn_save);
            const ctr = overlay.querySelector("#lm-counter-label");
            if(ctr) ctr.placeholder = u.ph_counter;
            const msg = overlay.querySelector("#lm-message");
            if(msg) msg.placeholder = u.ph_message;
            const btn = overlay.querySelector("#lm-button");
            if(btn) btn.placeholder = u.ph_button;

            // Re-translate type dropdown options
            const typeLabels = { love:"o_love", friendship:"o_friendship", family:"o_family", parents:"o_parents", pets:"o_pets", custom:"o_custom" };
            const typeEl = overlay.querySelector("#lm-type");
            if (typeEl) [...typeEl.options].forEach(opt => {
                const key = typeLabels[opt.value];
                if (key) opt.textContent = u[key] || en[key] || opt.textContent;
            });

            // Re-translate shape option labels
            const shapeLabels = { circle:"o_circle", square:"o_square", rounded:"o_rounded", portrait:"o_portrait" };
            ["#lm-photo-style-card","#lm-photo-style-surprise"].forEach(sel => {
                const el = overlay.querySelector(sel);
                if (el) [...el.options].forEach(opt => {
                    const key = shapeLabels[opt.value];
                    if (key) opt.textContent = u[key] || en[key] || opt.textContent;
                });
            });

            // Re-translate auto option in lang dropdown
            const langEl = overlay.querySelector("#lm-lang");
            if (langEl) { const autoOpt = langEl.querySelector('option[value="auto"]'); if (autoOpt) autoOpt.textContent = u.o_auto || en.o_auto; }
        }

        // Apply for initial language
        applyUIStrings(cfg.lang);

        // ── Wire up suggestions ───────────────────────────────────────────────────
        function populateSuggestions(langTag, type) {
            const sl   = getSuggLang(langTag);
            const sugg = (SUGGESTIONS[sl] || SUGGESTIONS.en)[type] || (SUGGESTIONS.en)[type] || { c: [], m: [], b: [] };
            const badge = overlay.querySelector("#lm-sugg-badge");
            if (badge) badge.textContent = sl;
            const u = getUIStr(langTag);

            const ctrSelect = overlay.querySelector("#lm-counter-label-preset");
            const msgSelect = overlay.querySelector("#lm-message-preset");
            const btnSelect = overlay.querySelector("#lm-button-preset");

            ctrSelect.innerHTML = `<option value="">${u.ctr_pick || "— choose a suggestion or write your own —"}</option>` +
                (sugg.c || []).map(c => `<option value="${c}">${c}</option>`).join("") +
                `<option value="__clear__">${u.ctr_clear || "✕ Clear / use default"}</option>`;

            msgSelect.innerHTML = `<option value="">${u.sugg_pick || "— suggestions (or write your own below) —"}</option>` +
                sugg.m.map(m => `<option value="${m}">${m}</option>`).join("") +
                `<option value="__clear__">${u.sugg_clear || "✕ Clear / use type default"}</option>`;

            btnSelect.innerHTML = `<option value="">${u.sugg_pick || "— suggestions (or write your own below) —"}</option>` +
                sugg.b.map(b => `<option value="${b}">${b}</option>`).join("") +
                `<option value="__clear__">${u.sugg_clear || "✕ Clear / use type default"}</option>`;
        }

        // Populate on load
        populateSuggestions(cfg.lang, cfg.type);

        // Language changes → refresh suggestions + badge + UI labels
        overlay.querySelector("#lm-lang").addEventListener("change", function () {
            populateSuggestions(this.value, overlay.querySelector("#lm-type").value);
            applyUIStrings(this.value);
            overlay.querySelector("#lm-counter-label-preset").selectedIndex = 0;
            overlay.querySelector("#lm-message-preset").selectedIndex = 0;
            overlay.querySelector("#lm-button-preset").selectedIndex  = 0;
        });

        // Type changes → refresh suggestions, clear inputs
        overlay.querySelector("#lm-type").addEventListener("change", function () {
            populateSuggestions(overlay.querySelector("#lm-lang").value, this.value);
            overlay.querySelector("#lm-counter-label").value = "";
            overlay.querySelector("#lm-message").value = "";
            overlay.querySelector("#lm-button").value  = "";
            overlay.querySelector("#lm-counter-label-preset").selectedIndex = 0;
            overlay.querySelector("#lm-message-preset").selectedIndex = 0;
            overlay.querySelector("#lm-button-preset").selectedIndex  = 0;
        });

        // Counter label suggestion → fill input
        overlay.querySelector("#lm-counter-label-preset").addEventListener("change", function () {
            const inp = overlay.querySelector("#lm-counter-label");
            if (this.value === "__clear__") { inp.value = ""; this.selectedIndex = 0; return; }
            if (this.value) inp.value = this.value;
        });

        // Suggestion selected → fill input
        overlay.querySelector("#lm-message-preset").addEventListener("change", function () {
            const inp = overlay.querySelector("#lm-message");
            if (this.value === "__clear__") { inp.value = ""; this.selectedIndex = 0; return; }
            if (this.value) inp.value = this.value;
        });
        overlay.querySelector("#lm-button-preset").addEventListener("change", function () {
            const inp = overlay.querySelector("#lm-button");
            if (this.value === "__clear__") { inp.value = ""; this.selectedIndex = 0; return; }
            if (this.value) inp.value = this.value;
        });

        // Close on backdrop click
        overlay.addEventListener("click", e => {
            if (e.target === overlay) overlay.remove();
        });

        overlay.querySelector("#lm-btn-cancel").addEventListener("click", () => overlay.remove());

        overlay.querySelector("#lm-btn-save").addEventListener("click", () => {
            const sinceRaw = overlay.querySelector("#lm-since").value;
            const newCfg = {
                type:               overlay.querySelector("#lm-type").value,
                recipientName:      overlay.querySelector("#lm-recipient").value.trim(),
                senderName:         overlay.querySelector("#lm-sender").value.trim(),
                message:            overlay.querySelector("#lm-message").value.trim(),
                buttonLabel:        overlay.querySelector("#lm-button").value.trim(),
                counterLabel:       overlay.querySelector("#lm-counter-label").value.trim(),
                photoUrl:           overlay.querySelector("#lm-photo").value.trim(),
                since:              sinceRaw ? sinceRaw + ":00" : "",
                lang:               overlay.querySelector("#lm-lang").value,
                photoStyleCard:     overlay.querySelector("#lm-photo-style-card").value,
                photoStyleSurprise: overlay.querySelector("#lm-photo-style-surprise").value,
                alwaysShow:         overlay.querySelector("#lm-always-show").checked,
                accentColor:        "",
                icon:               "",
            };
            GM_setValue("lm_config", JSON.stringify(newCfg));
            const msg = overlay.querySelector("#lm-saved-msg");
            msg.style.display = "block";
            setTimeout(() => { overlay.remove(); location.reload(); }, 1200);
        });

        overlay.querySelector("#lm-btn-reset").addEventListener("click", () => {
            const u = getUIStr(overlay.querySelector("#lm-lang").value);
            if (!confirm(u.confirm_reset)) return;
            GM_setValue("lm_config", null);
            overlay.remove();
            alert("Settings reset. Reload the page to apply.");
        });
    }

    // ── Boot ──────────────────────────────────────────────────────────────────────
    if (isMatch || CONFIG.alwaysShow) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", insertCard);
        } else {
            insertCard();
        }
        const obs = new MutationObserver(() => {
            if (!document.getElementById("lm-card")) insertCard();
        });
        obs.observe(document.body, { childList: true, subtree: true });
    }

})();
