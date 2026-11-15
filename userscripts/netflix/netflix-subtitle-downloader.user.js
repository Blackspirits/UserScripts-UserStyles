// ==UserScript==
// @name         Netflix Subtitle Downloader
// @namespace    blackspirits.github.io/
// @version      1.0.1
// @description  Download Netflix subtitles as SRT, WebVTT or TTML: default languages, season and series batches with resume, and a warning when Netflix changes.
// @description:pt-PT Descarrega legendas da Netflix em SRT, WebVTT ou TTML: idiomas predefinidos, lotes por temporada ou série com retoma e aviso quando a Netflix muda.
// @description:fr Télécharge les sous-titres Netflix en SRT, WebVTT ou TTML : langues par défaut, lots par saison ou série avec reprise, et alerte quand Netflix change.
// @description:es Descarga subtítulos de Netflix en SRT, WebVTT o TTML: idiomas predeterminados, lotes por temporada o serie con reanudación y aviso cuando Netflix cambia.
// @description:de Lädt Netflix-Untertitel als SRT, WebVTT oder TTML herunter: Standardsprachen, Stapel pro Staffel oder Serie mit Fortsetzen und Warnung, wenn sich Netflix ändert.
// @description:it Scarica i sottotitoli di Netflix in SRT, WebVTT o TTML: lingue predefinite, lotti per stagione o serie con ripresa e avviso quando Netflix cambia.
// @description:pt-BR Baixa legendas da Netflix em SRT, WebVTT ou TTML: idiomas padrão, lotes por temporada ou série com retomada e aviso quando a Netflix muda.
// @description:ja Netflix の字幕を SRT・WebVTT・TTML でダウンロード。既定の言語、シーズン・シリーズ単位の一括処理と再開、Netflix の変更時の警告に対応。
// @description:ko Netflix 자막을 SRT, WebVTT, TTML로 다운로드합니다. 기본 언어, 시즌·시리즈 일괄 작업과 재개, Netflix 변경 시 경고를 지원합니다.
// @description:zh-CN 以 SRT、WebVTT 或 TTML 下载 Netflix 字幕：默认语言、按季或整部剧集批量下载并可继续，Netflix 变更时发出提醒。
// @description:zh-TW 以 SRT、WebVTT 或 TTML 下載 Netflix 字幕：預設語言、按季或整部影集批次下載並可繼續，Netflix 變更時發出提醒。
// @description:ru Скачивает субтитры Netflix в SRT, WebVTT или TTML: языки по умолчанию, пакетная загрузка сезона или сериала с продолжением и предупреждение, когда Netflix что-то меняет.
// @description:uk Завантажує субтитри Netflix у SRT, WebVTT або TTML: типові мови, пакетне завантаження сезону чи серіалу з продовженням і попередження, коли Netflix щось змінює.
// @author       BlackSpirits
// @license      MIT
// @icon         https://www.netflix.com/favicon.ico
// @homepageURL  https://github.com/BlackSpirits/UserScripts-UserStyles
// @supportURL   https://github.com/BlackSpirits/UserScripts-UserStyles/issues
// @downloadURL  https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/netflix/netflix-subtitle-downloader.user.js
// @updateURL    https://raw.githubusercontent.com/BlackSpirits/UserScripts-UserStyles/main/userscripts/netflix/netflix-subtitle-downloader.user.js
// @match        https://www.netflix.com/*
// @run-at       document-start
// @noframes
// @grant        unsafeWindow
// ==/UserScript==

/*
Netflix manifest structure reference: Tithen-Firion, Netflix - subtitle downloader v4.2.9 (MIT).
https://greasyfork.org/scripts/26654

MIT License

Copyright (c) 2026 BlackSpirits

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function () {
  'use strict';
  function makeSharedCore() {
function helpers() {
  function episodeCode({ season, episode }) {
    return 'S' + String(season).padStart(2, '0') + 'E' + String(episode).padStart(2, '0');
  }
  function matchesTrack(track, choice) {
    return track.language.toLowerCase() === choice.language.toLowerCase() && track.kind === choice.kind;
  }
  function filterEpisodes(queue, excluded = new Set()) {
    return queue.filter(item => !excluded.has(episodeCode(item)));
  }
  return { episodeCode, matchesTrack, filterEpisodes };
}
  function safeName(value, limit = 150, dots = true, byteLimit = 220) {
    let name = [...String(value || '').normalize('NFC').replace(/[\u200e\u200f\u202a-\u202e\u2066-\u2069\ufeff]/g, '').replace(/[\u0000-\u001f\u007f<>:"/\\|?*]/g, '_').replace(/\s+/g, dots ? '.' : ' ').replace(/\.{2,}/g, '.').replace(/^[. ]+|[. ]+$/g, '')].slice(0, limit).join('');
    while (new TextEncoder().encode(name).length > byteLimit) name = [...name].slice(0, -1).join('');
    name = name.replace(/[. ]+$/g, '');
    if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i.test(name)) name = '_' + name;
    return name || 'HBO.Max';
  }
  function cleanMediaTitle(value, pageTitle = false, hbo = true) {
    let title = String(value || '').replace(/[\u200e\u200f\u202a-\u202e\u2066-\u2069\ufeff]/g, '').trim();
    if (hbo) title = title.replace(/(?:[\s.]*[|•·–—-][\s.]*(?:HBO[\s.]*Max|Max))+[\s.]*$/i, '').trim();
    if (pageTitle) title = title.replace(/^(?:Watch|Ver|Regarder)\s+/i, '');
    if ((/^".*"$/.test(title)) || (/^“.*”$/.test(title)) || (/^«.*»$/.test(title))) title = title.slice(1, -1).trim();
    return hbo && /^(?:HBO[\s.]*Max|Max)$/i.test(title) ? '' : title;
  }
  function episodeNumber(value, minimum = 1) {
    if (!/^[0-9]{1,4}$/.test(String(value ?? ''))) return null;
    const result = Number(value);
    return result >= minimum ? result : null;
  }
  function parseEpisodeName(value, hbo = true) {
    const title = cleanMediaTitle(value, false, hbo);
    const match = /^(.*?)[\s._-]+(?:S|T)(\d{1,3})[\s._-]*E(\d{1,4})(?:[\s._:–—-].*)?$/i.exec(title);
    if (!match || !match[1].trim()) return null;
    const code = /(?:S|T)\d{1,3}[\s._-]*E\d{1,4}/i.exec(title);
    const episodeTitle = title.slice(code.index + code[0].length).replace(/^[\s._:–—-]+/, '').trim();
    return { title: match[1].trim().replace(/[. _-]+$/g, ''), season: Number(match[2]), episode: Number(match[3]), episodeTitle };
  }
  function buildMediaBase({ title, isEpisode = false, season = null, episode = null, year = '', episodeTitle = '', includeEpisodeTitle = false, service = false, platform = typeof service === "string" ? service : "HBO.Max" }) {
    const hbo = platform === 'HBO.Max';
    const parsed = hbo || isEpisode ? parseEpisodeName(title, hbo) : null;
    const clean = parsed ? parsed.title : cleanMediaTitle(title, false, hbo);
    if (!clean) throw new Error('Missing film or series title.');
    let base;
    if (!isEpisode && !parsed) {
      const releaseYear = /^(18|19|20|21)\d{2}$/.test(String(year)) ? String(year) : '';
      const film = safeName(clean, 150, false, 185);
      base = film + (releaseYear && !/\((?:18|19|20|21)\d{2}\)$/.test(clean) ? ` (${releaseYear})` : '');
    } else {
      const s = episodeNumber(season ?? parsed?.season, 0), e = episodeNumber(episode ?? parsed?.episode);
      if (s === null || e === null) throw new Error('Missing season and episode numbers for the S01E01 name.');
      base = `${safeName(clean, 100, false, 110)}.S${String(s).padStart(2, '0')}E${String(e).padStart(2, '0')}`;
      const episodeName = cleanMediaTitle(episodeTitle || parsed?.episodeTitle, false, hbo);
      if (includeEpisodeTitle && !episodeName) throw new Error('Missing episode title for the chosen file name format.');
      if (includeEpisodeTitle) base += '.' + safeName(episodeName, 70, false, 60);
    }
    return base + (service ? '.' + (typeof service === 'string' ? safeName(service, 20) : 'HBO.Max') : '');
  }
  function outputPrefix(base, track, tracks, languageMode = 'auto') {
    const multipleLanguages = new Set(tracks.map(t => t.language.toLowerCase())).size > 1;
    const sameVariant = tracks.filter(t => t.language === track.language && t.kind === track.kind);
    return base + (languageMode === 'always' || multipleLanguages ? '.' + safeName(track.language, 20) : '')
      + (track.kind !== 'standard' ? '.' + safeName(track.kind, 15) : '')
      + duplicateSuffix(track, sameVariant);
  }
  // Two tracks of one language and type differ by Netflix's variant (dubtitle, stripped SDH):
  // name them by it, and fall back to a number only when the variants do not tell them apart.
  function duplicateSuffix(track, same) {
    if (same.length < 2) return '';
    const tag = item => item.variant ? String(item.variant).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 20) : '';
    const tags = same.map(tag);
    return new Set(tags).size === tags.length ? (tag(track) ? '.' + tag(track) : '') : '.' + (same.indexOf(track) + 1);
  }

  function parseTimestamp(value) {
    const m = /^(?:(\d{2,}):)?(\d{2}):(\d{2})\.(\d{3})$/.exec(value || '');
    if (!m || +m[2] >= 60 || +m[3] >= 60) return NaN;
    return (+m[1] || 0) * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000;
  }
  function timestamp(value, separator = '.') {
    const ms = Math.max(0, Math.round(value * 1000));
    const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}${separator}${String(ms % 1000).padStart(3, '0')}`;
  }
  function parseVtt(text) {
    const normalized = String(text).replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    if (!/^WEBVTT(?:[ \t\n]|$)/.test(normalized.trimStart())) throw new Error('The response is not a valid WebVTT subtitle.');
    const blocks = normalized.trimStart().split(/\n[ \t]*\n/);
    const result = { cues: [], styles: [], regions: [], map: null };
    let cueStyles = null;
    const mapLine = /(?:^|\n)X-TIMESTAMP-MAP=([^\n]+)/.exec(normalized)?.[1];
    if (mapLine) {
      const local = /LOCAL:((?:\d{2,}:)?\d{2}:\d{2}\.\d{3})/.exec(mapLine)?.[1];
      const mpeg = /MPEGTS:(\d+)/.exec(mapLine)?.[1];
      if (!local || !mpeg || !Number.isFinite(parseTimestamp(local)) || !Number.isSafeInteger(Number(mpeg)) || Number(mpeg) >= 2 ** 33) throw new Error('Invalid WebVTT timestamp.');
      result.map = { local: parseTimestamp(local), mpeg: Number(mpeg) / 90000 };
    }
    for (const block of blocks) {
      if (/^STYLE(?:\n|$)/.test(block)) { result.styles.push(block.slice(5).trim()); cueStyles = null; continue; }
      if (/^REGION(?:\n|$)/.test(block)) { result.regions.push(block); continue; }
      if (/^NOTE(?:[ \t\n]|$)/.test(block)) continue;
      const lines = block.split('\n');
      const index = lines.findIndex(l => /^((?:\d{2,}:)?\d{2}:\d{2}\.\d{3})\s+-->\s+/.test(l));
      if (index < 0) { if (block.includes('-->')) throw new Error('Invalid WebVTT timestamp.'); continue; }
      const m = /^((?:\d{2,}:)?\d{2}:\d{2}\.\d{3})\s+-->\s+((?:\d{2,}:)?\d{2}:\d{2}\.\d{3})(?:[ \t]+(.*))?$/.exec(lines[index]);
      if (!m) throw new Error('Invalid WebVTT timestamp.');
      const start = parseTimestamp(m[1]), end = parseTimestamp(m[2]);
      if (!Number.isSafeInteger(Math.round(start * 1000)) || !Number.isSafeInteger(Math.round(end * 1000)) || !(end > start)) throw new Error('Invalid WebVTT timestamp.');
      result.cues.push({ start, end, settings: (m[3] || '').trim(), text: lines.slice(index + 1).join('\n'), styles: cueStyles ??= result.styles.slice() });
    }
    return result;
  }
  function timingAdjustment(doc, segment, mode = 'manifest') {
    const start = segment.start;
    const end = Number.isFinite(segment.duration) ? start + segment.duration : Infinity;
    let offset = segment.mode === 'standalone' ? segment.periodStart : segment.periodStart - segment.pto / segment.scale;
    const manifestOffset = offset;
    let method = segment.mode === 'standalone' ? 'period-start' : 'dash-manifest';
    if (mode === 'original') { offset = 0; method = 'original'; }
    else if (doc.map) {
      let mapped = doc.map.mpeg - doc.map.local;
      const wrap = 2 ** 33 / 90000;
      const sampleTime = Number.isFinite(segment.sampleTime) ? segment.sampleTime : 0;
      mapped += Math.round((sampleTime - mapped - (doc.cues[0]?.start || 0)) / wrap) * wrap;
      offset += mapped; method = 'timestamp-map';
    } else if (mode === 'auto' && segment.mode !== 'standalone' && doc.cues.length) {
      // Prefer the DASH sample timeline. Pick a local origin only when the
      // alternative clearly places more cues inside this segment.
      const options = [...new Set([offset, segment.periodStart, start, 0])];
      const score = candidate => doc.cues.reduce((n, cue) => n + (cue.end + candidate > start - 0.1 && cue.start + candidate < end + 0.1 ? 1 : 0), 0);
      const initialScore = score(offset);
      const best = options.reduce((best, value) => score(value) > score(best) ? value : best, offset);
      if (score(best) > initialScore) {
        offset = best;
        method = best === segment.periodStart ? 'period-local-heuristic' : best === start ? 'segment-local-heuristic' : 'original-heuristic';
      }
    }
    return { method, offsetSeconds: offset, offsetMilliseconds: Math.round(offset * 1e9) / 1e6, manifestOffsetSeconds: manifestOffset };
  }
  function alignCues(doc, segment, mode = 'manifest') {
    if (!doc.cues.length) return [];
    const offset = timingAdjustment(doc, segment, mode).offsetSeconds;
    // Clip at the period boundaries, not at each segment's: a cue can
    // cross the boundary between two WebVTT segments.
    const lower = mode === 'original' ? 0 : segment.periodStart;
    const upper = mode !== 'original' && Number.isFinite(segment.periodDuration) ? segment.periodStart + segment.periodDuration : Infinity;
    return doc.cues.map(cue => ({ ...cue, start: Math.max(lower, cue.start + offset), end: Math.min(upper, cue.end + offset) }))
      .filter(cue => cue.end > cue.start && cue.text.trim());
  }
  function mergeDocuments(items, timing = 'manifest') {
    const cues = [], styles = new Set(), regions = new Set(), seen = new Set();
    for (let index = 0; index < items.length; index += 1) {
      const { doc, segment } = items[index];
      // Each file's CSS gets its own namespace so a class in one period
      // cannot change the colours of another period.
      const custom = new Set();
      for (const style of doc.styles) for (const match of style.matchAll(/::cue\([^)]*\.([\w-]+)/g)) custom.add(match[1]);
      const rename = name => custom.has(name) ? `bs${index}_${name}` : name;
      for (const style of doc.styles) styles.add(style.replace(/([^{}]+)\{/g, (_, selector) => selector.replace(/\.([\w-]+)/g, (_, name) => '.' + rename(name)) + '{'));
      const regionNames = new Map();
      for (const region of doc.regions) {
        const id = /(?:^|\n)id:([^\s]+)/.exec(region)?.[1];
        if (id) regionNames.set(id, `bs${index}_${id}`);
        regions.add(id ? region.replace(/(^|\n)id:[^\s]+/, `$1id:bs${index}_${id}`) : region);
      }
      for (const cue of alignCues(doc, segment, timing)) {
        const text = cue.text.replace(/<c((?:\.[\w-]+)+)>/g, (_, classes) => '<c' + classes.split('.').filter(Boolean).map(name => '.' + rename(name)).join('') + '>');
        const settings = cue.settings.replace(/(^|\s)region:([^\s]+)/g, (full, space, name) => space + 'region:' + (regionNames.get(name) || name));
        const key = `${Math.round(cue.start * 1000)}|${Math.round(cue.end * 1000)}|${text}|${settings}`;
        if (seen.has(key)) continue;
        seen.add(key);
        cues.push({ ...cue, settings, text, originalText: cue.text });
      }
    }
    cues.sort((a, b) => a.start - b.start || a.end - b.end);
    return { cues, styles: [...styles], regions: [...regions] };
  }
  function decodeEntities(value) {
    const names = { amp: '&', lt: '<', gt: '>', nbsp: '\u00a0', lrm: '\u200e', rlm: '\u200f', quot: '"', apos: "'" };
    return value.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|nbsp|lrm|rlm|quot|apos);/gi, (full, key) => {
      if (key[0] !== '#') return names[key.toLowerCase()] ?? full;
      const n = key[1].toLowerCase() === 'x' ? parseInt(key.slice(2), 16) : Number(key.slice(1));
      return n > 0 && n <= 0x10ffff && !(n >= 0xd800 && n <= 0xdfff) ? String.fromCodePoint(n) : '\ufffd';
    });
  }
  function styleMap(blocks) {
    const map = Object.create(null); map['*'] = {};
    for (const block of blocks) for (const rule of block.matchAll(/(::cue(?:\([^)]*\))?)\s*\{([^}]*)\}/g)) {
      const declarations = {};
      for (const item of rule[2].split(';')) {
        const colon = item.indexOf(':');
        if (colon > 0) declarations[item.slice(0, colon).trim().toLowerCase()] = item.slice(colon + 1).trim();
      }
      const names = [...rule[1].matchAll(/\.([\w-]+)/g)].map(m => m[1]);
      if (rule[1] === '::cue') Object.assign(map['*'], declarations);
      else for (const name of names) map[name] = { ...(map[name] || {}), ...declarations };
    }
    return map;
  }
  // U+200E marks are redundant in cues without right-to-left script and are
  // removed from the SRT only; the original WebVTT/TTML is never modified.
  // The scope of formatting tags must not change while cleaning.
  function cleanSrtDirection(text, language = '') {
    const rightToLeft = /^(?:ar|he|iw|fa|ur|ps|sd|ug|yi|dv|ckb|syr)(?:-|$)/i.test(String(language));
    if (!rightToLeft && !/[\u0590-\u08ff\ufb1d-\ufdff\ufe70-\ufefc]/u.test(text)) text = text.replace(/\u200e/g, '');
    // Empty pairs (<i></i>) show nothing. A line holding only tags is joined to its neighbour:
    // closing tags go to the end of the previous line, opening tags to the start of the next.
    // The scope of every tag stays the same and no blank line is left on screen.
    let before;
    do { before = text; text = text.replace(/<(i|b|u|font)\b[^>]*>([ \t\n]*)<\/\1>/g, '$2'); } while (text !== before);
    const TAG = /<\/?(?:i|b|u|font)\b[^>]*>/g, out = [];
    let carry = '';
    for (const line of text.split('\n')) {
      if (!line.trim()) continue;
      if (line.replace(TAG, '').trim()) { out.push(carry + line); carry = ''; continue; }
      const closing = /^(?:[ \t]*<\/(?:i|b|u|font)>)+/.exec(line)?.[0] || '';
      if (closing && out.length) out[out.length - 1] += closing.trim(); else carry += closing.trim();
      carry += line.slice(closing.length).trim();
    }
    if (carry && out.length) out[out.length - 1] += carry;
    return out.join('\n');
  }
  function srtText(cue, preserveStyles, maps, language = '', colorMode = 'all') {
    const styles = cue.styles || [];
    if (!maps.has(styles)) maps.set(styles, styleMap(styles));
    const map = maps.get(styles);
    const colors = { white: '#ffffff', lime: '#00ff00', cyan: '#00ffff', red: '#ff0000', yellow: '#ffff00', magenta: '#ff00ff', blue: '#0000ff', black: '#000000' };
    const wrappers = (style, insideColor = false) => {
      const tags = [];
      if (style['font-style'] === 'italic') tags.push(['<i>', '</i>']);
      if (/bold|[6-9]00/.test(style['font-weight'] || '')) tags.push(['<b>', '</b>']);
      if (/underline/.test(style['text-decoration'] || '')) tags.push(['<u>', '</u>']);
      let color = colors[(style.color || '').toLowerCase()] || (/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(style.color || '') ? style.color : null);
      if (color && color.length === 4) color = '#' + color.slice(1).split('').map(c => c + c).join('');
      // White is what every player shows anyway, so by default it is left out, but only when no
      // other colour is open around it: inside red text, a white word must stay white.
      const written = !!color && colorMode !== 'none' && !(colorMode === 'nonwhite' && color.toLowerCase() === '#ffffff' && !insideColor);
      if (written) tags.push([`<font color="${color}">`, '</font>']);
      return { open: tags.map(t => t[0]).join(''), close: tags.reverse().map(t => t[1]).join(''), color: written };
    };
    let text = cue.originalText ?? cue.text;
    text = text.replace(/<rt(?:\s[^>]*)?>[\s\S]*?<\/rt>/gi, '').replace(/<(?:(?:\d{2,}:)?\d{2}:\d{2}\.\d{3})>/g, '');
    const global = preserveStyles ? wrappers(map['*']) : { open: '', close: '', color: false };
    const stack = [];
    let openColors = global.color ? 1 : 0;
    text = text.replace(/<([^>]*)>/g, (_, tag) => {
      if (/^br\s*\/?$/i.test(tag)) return '\n';
      if (/^\/?[biu]$/i.test(tag)) return preserveStyles ? '<' + tag.toLowerCase() + '>' : '';
      if (/^c(?:\.|$)/.test(tag)) {
        const style = {};
        for (const name of tag.split('.').slice(1)) Object.assign(style, colors[name] ? { color: colors[name] } : {}, map[name] || {});
        const tags = preserveStyles ? wrappers(style, openColors > 0) : { open: '', close: '', color: false };
        if (tags.color) openColors += 1;
        stack.push(tags);
        return tags.open;
      }
      if (tag === '/c') { const tags = stack.pop(); if (tags?.color) openColors -= 1; return tags?.close || ''; }
      return '';
    });
    text += stack.reverse().map(tags => tags.close).join('');
    text = cleanSrtDirection(decodeEntities(text).replace(/[ \t]+\n/g, '\n').trim(), language);
    text = global.open + text + global.close;
    if (preserveStyles) {
      const line = /(?:^|\s)line:([^\s,]+)/.exec(cue.settings || '')?.[1];
      const position = /(?:^|\s)position:([^\s,]+)/.exec(cue.settings || '')?.[1];
      const align = /(?:^|\s)align:(\w+)/.exec(cue.settings || '')?.[1];
      const y = line === '0' || (line?.endsWith('%') && parseFloat(line) <= 33) ? 2 : line?.endsWith('%') && parseFloat(line) <= 66 ? 1 : 0;
      const x = position?.endsWith('%') ? (parseFloat(position) < 34 ? 0 : parseFloat(position) > 66 ? 2 : 1) : /left|start/.test(align || '') ? 0 : /right|end/.test(align || '') ? 2 : 1;
      const an = y * 3 + x + 1;
      if (an !== 2) text = `{\\an${an}}` + text;
    }
    return text;
  }
  function toSrt(merged, preserveStyles = true, language = '', colorMode = 'all') {
    const maps = new WeakMap(), result = [];
    for (const cue of merged.cues) {
      const text = srtText(cue, preserveStyles, maps, language, colorMode);
      // A cue made only of bidi marks or tags has no visible text:
      // skip it instead of writing an empty SRT block, and keep numbering continuous.
      const visible = text.replace(/<\/?(?:i|b|u|font)\b[^>]*>/gi, '')
        .replace(/\{\\an[1-9]\}/g, '')
        .replace(/[\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, '').trim();
      if (!visible) continue;
      result.push(`${result.length + 1}\n${timestamp(cue.start, ',')} --> ${timestamp(cue.end, ',')}\n${text}\n`);
    }
    return result.join('\n');
  }
  function toVtt(merged) {
    const headers = [...merged.styles.map(s => 'STYLE\n' + s), ...merged.regions];
    return 'WEBVTT\n\n' + (headers.length ? headers.join('\n\n') + '\n\n' : '') + merged.cues.map(cue => `${timestamp(cue.start)} --> ${timestamp(cue.end)}${cue.settings ? ' ' + cue.settings : ''}\n${cue.text}\n`).join('\n');
  }

  const crcTable = Array.from({ length: 256 }, (_, i) => {
    let c = i;
    for (let bit = 0; bit < 8; bit += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c >>> 0;
  });
  function crc32(bytes) {
    let c = 0xffffffff;
    for (const b of bytes) c = crcTable[(c ^ b) & 255] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }
  function makeZip(files) {
    if (files.length > 65535) throw new Error('The ZIP exceeds the supported number of files.');
    const encoder = new TextEncoder(), parts = [], directory = [], seen = new Set();
    let offset = 0, directorySize = 0;
    for (const file of files) {
      const path = String(file.name).split('/');
      if (path.length > 4 || path.some(part => !part || part === '.' || part === '..')) throw new Error('Invalid path inside the ZIP.');
      const raw = path.pop(), folder = path.map(part => safeName(part, 80, false)).join('/');
      const extension = /\.(srt|vtt|ttml|txt|json)$/i.exec(raw)?.[0] || '';
      const stem = (folder ? folder + '/' : '') + safeName(extension ? raw.slice(0, -extension.length) : raw, 200, false);
      const cleaned = stem + extension;
      let name = cleaned, count = 2;
      while (seen.has(name.toLowerCase())) name = `${stem}.${count++}${extension}`;
      seen.add(name.toLowerCase());
      const filename = encoder.encode(name), data = encoder.encode(file.content), crc = crc32(data);
      if (offset + data.length > 0xffffffff || filename.length > 65535) throw new Error('The ZIP exceeds the supported size.');
      const local = new Uint8Array(30 + filename.length), lv = new DataView(local.buffer);
      lv.setUint32(0, 0x04034b50, true); lv.setUint16(4, 20, true); lv.setUint16(6, 0x800, true);
      lv.setUint16(12, 33, true); lv.setUint32(14, crc, true); lv.setUint32(18, data.length, true); lv.setUint32(22, data.length, true); lv.setUint16(26, filename.length, true); local.set(filename, 30);
      parts.push(local, data);
      const central = new Uint8Array(46 + filename.length), cv = new DataView(central.buffer);
      cv.setUint32(0, 0x02014b50, true); cv.setUint16(4, 20, true); cv.setUint16(6, 20, true); cv.setUint16(8, 0x800, true);
      cv.setUint16(14, 33, true); cv.setUint32(16, crc, true); cv.setUint32(20, data.length, true); cv.setUint32(24, data.length, true); cv.setUint16(28, filename.length, true); cv.setUint32(42, offset, true); central.set(filename, 46);
      directory.push(central); directorySize += central.length; offset += local.length + data.length;
    }
    if (offset + directorySize + 22 > 0xffffffff) throw new Error('The ZIP exceeds the supported size.');
    const end = new Uint8Array(22), ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true); ev.setUint16(8, files.length, true); ev.setUint16(10, files.length, true); ev.setUint32(12, directorySize, true); ev.setUint32(16, offset, true);
    return new Blob([...parts, ...directory, end], { type: 'application/zip' });
  }


return { ...helpers(), safeName, cleanMediaTitle, episodeNumber, parseEpisodeName, buildMediaBase, outputPrefix, parseTimestamp, timestamp, parseVtt, timingAdjustment, alignCues, mergeDocuments, toSrt, toVtt, crc32, makeZip };
}
  const core = makeSharedCore();
  const LOCALES_ALL = ["pt", "en", "fr", "es", "de", "it", "pt-BR", "ja", "ko", "zh-Hans", "zh-Hant", "ru", "uk"];
  const VERSION = '1.0.1';
  const PROFILES = [['webvtt-lssdh-ios8', 'vtt'], ['imsc1.1', 'ttml'], ['dfxp-ls-sdh', 'ttml'], ['simplesdh', 'ttml']];
  const MAX_QUEUE = 2000, MAX_BYTES = 8 * 1024 * 1024, WAIT_MS = 90000, STALL_MS = 30000;
  const MAX_EPISODE_BYTES = 64 * 1024 * 1024, MAX_ARCHIVE_BYTES = 384 * 1024 * 1024;
  const encoder = new TextEncoder();
  const bytesOf = files => files.reduce((total, file) => total + encoder.encode(file.content).byteLength, 0);
  const id = value => /^[1-9]\d{0,15}$/.test(String(value ?? '')) ? String(value) : null;
  const watchId = pathname => /^\/watch\/([1-9]\d{0,15})\/?$/.exec(pathname)?.[1] || null;
  const clean = value => typeof value === 'string' ? value.trim().slice(0, 300) : '';

  function safeTrackUrl(value) {
    try {
      if (typeof value !== 'string' || value.length > 8192) return null;
      const u = new URL(value);
      if (u.protocol === 'https:' && !u.username && !u.password && !u.port &&
        (u.hostname === 'nflxvideo.net' || u.hostname.endsWith('.nflxvideo.net'))) return u.href;
    } catch {}
    return null;
  }

  function parseManifest(result) {
    const movie = id(result?.movieId);
    const raw = result?.timedtexttracks || result?.textTracks;
    if (!movie || !Array.isArray(raw)) return null;
    const tracks = [], unusable = [], profiles = new Set(), stats = { raw: raw.length, usable: 0, onRequest: 0, skipped: 0, rejectedUrls: 0, profiles: [], trackKeys: [] };
    stats.trackKeys = raw[0] && typeof raw[0] === 'object' ? Object.keys(raw[0]).slice(0, 40) : [];
    for (const track of raw.slice(0, 300)) {
      if (track && !track.isNoneTrack) for (const key of Object.keys(track.ttDownloadables || track.downloadables || {}).slice(0, 12)) profiles.add(String(key).slice(0, 40));
      if (!track || track.isNoneTrack || typeof track.language !== 'string' ||
          !/^[a-z]{2,8}(?:-[a-z0-9]{1,8}){0,4}$/i.test(track.language)) continue;
      const kind = track.isForcedNarrative ? 'forced' :
        /^(?:closedcaptions|cc|sdh)$/i.test(track.rawTrackType || '') ? 'sdh' : 'standard';
      const sources = [];
      for (const [profile, format] of PROFILES) {
        const downloads = (track.ttDownloadables || track.downloadables)?.[profile];
        if (!downloads) continue;
        const candidates = Array.isArray(downloads.urls) ? downloads.urls.slice(0, 8).map(x => x?.url) : Object.values(downloads.downloadUrls || {}).slice(0, 8);
        const urls = candidates.map(safeTrackUrl).filter(Boolean);
        stats.rejectedUrls += candidates.length - urls.length;
        for (const url of urls) if (!sources.some(s => s.url === url)) sources.push({ url, format });
      }
      const rawType = String(track.rawTrackType || '').toLowerCase();
      // Netflix lists every language but only sends addresses for a few. The others get their
      // address when the player asks for them, which the script does on download. Forced tracks
      // cannot be requested that way, and image-only tracks have no text to save.
      const textual = !Array.isArray(track.encodingProfileNames) || track.encodingProfileNames.some(name => PROFILES.some(([profile]) => profile === name));
      if (sources.length) tracks.push({ language: track.language, kind, variant: clean(track.trackVariant), raw: rawType, sources });
      else if (track.hydrated === false && kind !== 'forced' && textual) { tracks.push({ language: track.language, kind, variant: clean(track.trackVariant), raw: rawType, sources: [], pending: true }); stats.onRequest += 1; }
      else { stats.skipped += 1; unusable.push({ language: track.language, kind, variant: clean(track.trackVariant), raw: rawType }); }
    }
    stats.usable = tracks.length - stats.onRequest; stats.profiles = [...profiles].slice(0, 20);
    return { movie, tracks, stats, unusable };
  }

  function parseMetadata(data) {
    const video = data?.video, title = clean(video?.title), media = new Map();
    if (!title) return media;
    const validYear = value => /^(?:18|19|20|21)\d{2}$/.test(String(value)) ? String(value) : '';
    const year = validYear(video.year) || validYear(video.seasons?.[0]?.year);
    if (video.type === 'movie' && id(video.id)) {
      media.set(id(video.id), { id: id(video.id), title, year, isEpisode: false });
    }
    if (video.type !== 'show' || !Array.isArray(video.seasons) || video.seasons.length > MAX_QUEUE) return media;
    const queue = [], ids = new Set(), codes = new Set(), seasons = new Map();
    let incomplete = !video.seasons.length || (video.seasonCount != null && Number(video.seasonCount) !== video.seasons.length);
    for (const s of video.seasons) {
      const season = core.episodeNumber(s?.seq, 0);
      if (season === null || seasons.has(season) || !Array.isArray(s.episodes) || !s.episodes.length ||
          queue.length + s.episodes.length > MAX_QUEUE) { incomplete = true; continue; }
      // Counts are no longer part of the response. A season is trusted when its numbering has
      // no gaps or repeats, and when a count is present it must agree.
      const numbers = s.episodes.map(e => core.episodeNumber(e?.seq)).sort((a, b) => a - b);
      const contiguous = numbers.every((n, i) => n === i + 1);
      const verified = contiguous && (s.episodeCount == null || Number(s.episodeCount) === s.episodes.length);
      if (s.episodeCount != null && Number(s.episodeCount) !== s.episodes.length) incomplete = true;
      seasons.set(season, verified);
      for (const e of s.episodes) {
        const key = id(e?.id), episode = core.episodeNumber(e?.seq);
        if (!key || episode === null) { incomplete = true; continue; }
        const item = { id: key, title, year, season, episode, episodeTitle: clean(e.title), isEpisode: true };
        const code = core.episodeCode(item);
        if (ids.has(key) || codes.has(code)) { incomplete = true; continue; }
        ids.add(key); codes.add(code); queue.push(item);
      }
    }
    queue.sort((a, b) => a.season - b.season || a.episode - b.episode);
    const verified = !incomplete && seasons.size > 0 && (video.seasonCount == null || Number(video.seasonCount) === seasons.size) && [...seasons.values()].every(Boolean);
    for (const item of queue) media.set(item.id, { ...item, queue, seasons, incomplete, verified });
    return media;
  }

  function batchQueue(item, scope, excluded) {
    if (!item?.isEpisode || item.incomplete || !['season','series'].includes(scope)) return [];
    return core.filterEpisodes(item.queue.filter(e => scope === 'series' || e.season === item.season), excluded);
  }

  function selectTracks(tracks, choices) {
    return choices.map(choice => {
      const found = tracks.filter(t => core.matchesTrack(t, choice) && t.variant === choice.variant);
      if (found.length !== 1) throw new Error('missingTrack');
      return found[0];
    });
  }

  function capture(page, onManifest, onMetadata) {
    function observe(fn, value) { try { fn(value); } catch {} }
    const parse = page.JSON.parse;
    const parseHook = page.JSON.parse = function (...args) {
      const data = Reflect.apply(parse, this, args);
      if (typeof args[1] === 'function') return data;
      try {
        if (data?.result?.movieId && (data.result.timedtexttracks || data.result.textTracks)) { manifestsObserved += 1; observe(onManifest, data.result); }
        if (data?.video?.type && data.video.title) { metadataObserved += 1; observe(onMetadata, data); }
      } catch {}
      return data;
    };
    let metadataObserved = 0, manifestsObserved = 0;
    const metadata = value => {
      try {
        const u = new URL(typeof value === 'string' ? value : value?.url || value?.href, page.location.href);
        return u.origin === page.location.origin && u.pathname.endsWith('/metadata');
      } catch { return false; }
    };
    const fetchOriginal = page.fetch;
    if (typeof fetchOriginal === 'function') page.fetch = function (...args) {
      const pending = Reflect.apply(fetchOriginal, this, args);
      if (metadata(args[0])) void pending.then(async res => {
        if (res.ok) observe(onMetadata, Reflect.apply(parse, page.JSON, [await boundedText(res.clone())]));
      }).catch(() => {});
      return pending;
    };
    const open = page.XMLHttpRequest?.prototype.open;
    if (open) page.XMLHttpRequest.prototype.open = function (...args) {
      const result = Reflect.apply(open, this, args);
      if (metadata(args[1])) this.addEventListener('loadend', async () => {
        try {
          if (this.status < 200 || this.status >= 300) return;
          let data = this.response;
          if (typeof data?.text === 'function' && data.size <= MAX_BYTES) data = await data.text();
          if (typeof data === 'string' && data.length <= MAX_BYTES) data = Reflect.apply(parse, page.JSON, [data]);
          observe(onMetadata, data);
        } catch {}
      }, { once: true });
      return result;
    };
    return () => ({ manifestsObserved, metadataObserved });
  }

  async function boundedText(response) {
    if (Number(response.headers.get('content-length')) > MAX_BYTES || !response.body) throw new Error('transferError');
    const reader = response.body.getReader(), decoder = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true });
    let size = 0, text = '';
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) return text + decoder.decode();
        size += value.byteLength;
        if (size > MAX_BYTES) { void reader.cancel().catch(() => {}); throw new Error('transferError'); }
        text += decoder.decode(value, { stream: true });
      }
    } finally { reader.releaseLock(); }
  }

  function parseTtml(text, Parser) {
    if (!Parser || /<!DOCTYPE|<!ENTITY/i.test(text)) throw new Error('formatError');
    const doc = new Parser().parseFromString(text, 'application/xml'), root = doc.documentElement;
    const ns = 'http://www.w3.org/ns/ttml';
    if (root?.localName !== 'tt' || ![ns, 'http://www.w3.org/2006/10/ttaf1'].includes(root.namespaceURI) ||
        doc.getElementsByTagName('parsererror').length) throw new Error('formatError');
    return { root, param: root.namespaceURI + '#parameter' };
  }

  function ttmlCues(root, param) {
    const ns = root.namespaceURI;
    const xml = 'http://www.w3.org/XML/1998/namespace';
    const styling = ns === 'http://www.w3.org/2006/10/ttaf1' ? ns + '#styling' : 'http://www.w3.org/ns/ttml#styling';
    const attr = (node, key) => node.getAttributeNS(styling, key);
    const invalid = () => { throw new Error('formatError'); };
    const positiveRate = value => { const n = Number(value); return n > 0 && Number.isFinite(n) ? n : invalid(); };
    const fps = positiveRate(root.getAttributeNS(param, 'frameRate') || '30');
    const multiplier = root.getAttributeNS(param, 'frameRateMultiplier');
    let effectiveFps = fps;
    if (multiplier) {
      const match = /^(\d+)\s+(\d+)$/.exec(multiplier.trim());
      if (!match) invalid();
      effectiveFps *= positiveRate(match[1]) / positiveRate(match[2]);
    }
    const subRate = positiveRate(root.getAttributeNS(param, 'subFrameRate') || '1');
    const ticks = positiveRate(root.getAttributeNS(param, 'tickRate') ||
      (root.hasAttributeNS(param, 'frameRate') ? String(effectiveFps * subRate) : '1'));
    const timeBase = root.getAttributeNS(param, 'timeBase');
    if (timeBase && timeBase !== 'media') invalid();
    const readTime = value => {
      if (!value) return NaN;
      let match = /^(\d{2,}):(\d{2}):(\d{2})(?:\.(\d+))?$/.exec(value);
      if (match) return +match[2] < 60 && +match[3] < 60 ? +match[1] * 3600 + +match[2] * 60 + +match[3] + Number('0.' + (match[4] || '0')) : NaN;
      match = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?$/.exec(value);
      if (match) return +match[2] < 60 && +match[3] < 60 && +match[4] < fps ?
        +match[1] * 3600 + +match[2] * 60 + +match[3] + (+match[4] + (+(match[5] || 0)) / subRate) / effectiveFps : NaN;
      match = /^(\d+(?:\.\d+)?)(h|m|s|ms|f|t)$/.exec(value);
      if (!match) return NaN;
      return Number(match[1]) * ({ h: 3600, m: 60, s: 1, ms: .001, f: 1 / effectiveFps, t: 1 / ticks })[match[2]];
    };

    // TTML styles: referenced (including chains), inherited and inline.
    const definitions = new Map(), cached = new Map();
    for (const element of root.getElementsByTagNameNS(ns, 'style')) {
      if (element.parentElement?.localName !== 'styling') continue;
      const key = element.getAttributeNS(xml, 'id');
      if (!key || definitions.has(key)) invalid();
      definitions.set(key, element);
    }
    const properties = ['fontStyle', 'fontWeight', 'textDecoration', 'color'];
    const inlineStyle = node => {
      const result = {};
      for (const key of properties) {
        const value = attr(node, key);
        if (value !== null) result[key] = value;
      }
      return result;
    };
    function resolved(key, visiting = new Set()) {
      if (cached.has(key)) return cached.get(key);
      if (!definitions.has(key)) return {};
      if (visiting.has(key)) invalid();
      visiting.add(key);
      const def = definitions.get(key), style = {};
      for (const ref of (def.getAttribute('style') || '').trim().split(/\s+/).filter(Boolean)) Object.assign(style, resolved(ref, visiting));
      Object.assign(style, inlineStyle(def)); visiting.delete(key); cached.set(key, style);
      return style;
    }
    function compute(node, inherited = {}) {
      const style = { ...inherited };
      for (const ref of (node.getAttribute('style') || '').trim().split(/\s+/).filter(Boolean)) Object.assign(style, resolved(ref));
      return Object.assign(style, inlineStyle(node));
    }
    const css = [], styleNames = new Map();
    function classFor(style) {
      const declarations = [];
      if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') declarations.push('font-style:italic');
      if (style.fontWeight === 'bold' || (/^[1-9]00$/.test(style.fontWeight || '') && +style.fontWeight >= 600)) declarations.push('font-weight:bold');
      if (/(?:^|\s)underline(?:\s|$)/.test(style.textDecoration || '')) declarations.push('text-decoration:underline');
      const color = (style.color || '').toLowerCase();
      if (/^(?:white|lime|cyan|red|yellow|magenta|blue|black|#[0-9a-f]{3}|#[0-9a-f]{6})$/.test(color)) declarations.push('color:' + color);
      if (!declarations.length) return '';
      const key = declarations.join(';');
      if (!styleNames.has(key)) {
        const name = 'bstt' + (styleNames.size + 1);
        styleNames.set(key, name); css.push('::cue(.' + name + '){' + key + '}');
      }
      return styleNames.get(key);
    }
    const escapeText = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Region -> vertical anchor, only when the file states it in percentages or through displayAlign.
    const regions = new Map();
    for (const region of root.getElementsByTagNameNS(ns, 'region')) {
      const key = region.getAttributeNS(xml, 'id');
      if (!key) continue;
      const pair = value => { const m = /^\s*(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%\s*$/.exec(value || ''); return m ? [+m[1], +m[2]] : null; };
      const origin = pair(attr(region, 'origin')), extent = pair(attr(region, 'extent')), align = attr(region, 'displayAlign');
      if (!origin && !align) continue;
      const top = origin ? origin[1] : 0, height = extent ? extent[1] : 100 - top;
      const anchor = align === 'after' ? top + height : align === 'center' ? top + height / 2 : top;
      regions.set(key, 'line:' + Math.max(0, Math.min(100, anchor)).toFixed(2) + '%');
    }
    const cues = [];
    for (const p of root.getElementsByTagNameNS(ns, 'p')) {
      let parentStyle = {}, space = 'default', regionName = p.getAttribute('region');
      const ancestors = [];
      for (let n = p.parentElement; n; n = n.parentElement) {
        if (['begin', 'end', 'dur'].some(a => n.hasAttribute(a)) || n.getAttribute('timeContainer') === 'seq') invalid();
        ancestors.unshift(n); regionName ||= n.getAttribute('region');
      }
      for (const n of ancestors) {
        parentStyle = compute(n, parentStyle);
        space = n.getAttributeNS(xml, 'space') || space;
      }
      if (!['default', 'preserve'].includes(space)) invalid();
      const start = readTime(p.getAttribute('begin'));
      const end = p.hasAttribute('end') ? readTime(p.getAttribute('end')) : start + readTime(p.getAttribute('dur'));
      if (!Number.isSafeInteger(Math.round(start * 1000)) || !Number.isSafeInteger(Math.round(end * 1000)) || end <= start || p.getAttribute('timeContainer') === 'seq') invalid();
      const runs = []; let pendingSpace = null;
      const emit = (text, style) => {
        const prev = runs[runs.length - 1];
        if (prev && prev.style === style) prev.text += text;
        else runs.push({ text, style });
      };
      const endSpace = () => { pendingSpace = null; };
      const flushSpace = () => {
        if (pendingSpace && runs.length && !runs[runs.length - 1].text.endsWith('\n')) emit(' ', pendingSpace);
        endSpace();
      };
      function walk(node, inherited, whitespace) {
        if (node.nodeType === 3 || node.nodeType === 4) {
          for (const ch of node.nodeValue) {
            if (whitespace === 'default' && /[ \t\r\n]/.test(ch)) { pendingSpace = inherited; continue; }
            flushSpace(); emit(ch, inherited);
          }
          return;
        }
        if (node.nodeType === 8 || node.nodeType === 7) return; // Comments and processing instructions are not subtitles.
        if (node.nodeType !== 1) invalid();
        // Metadata and foreign-namespace elements carry no dialogue; ruby annotations are dropped as in WebVTT.
        if (node.namespaceURI !== ns || node.localName === 'metadata' || attr(node, 'ruby') === 'text') return;
        if (node.localName === 'br') {
          if (['begin', 'end', 'dur', 'timeContainer'].some(a => node.hasAttribute(a))) invalid();
          endSpace();
          while (runs.length && runs[runs.length - 1].text.endsWith(' ')) {
            runs[runs.length - 1].text = runs[runs.length - 1].text.replace(/ +$/, '');
            if (!runs[runs.length - 1].text) runs.pop();
          }
          emit('\n', inherited); return;
        }
        if (['begin', 'end', 'dur', 'timeContainer'].some(a => node.hasAttribute(a))) invalid();
        const next = compute(node, inherited);
        const preserve = node.getAttributeNS(xml, 'space') || whitespace;
        if (!['default', 'preserve'].includes(preserve)) invalid();
        for (const child of node.childNodes) walk(child, next, preserve);
      }
      const pStyle = compute(p, parentStyle);
      space = p.getAttributeNS(xml, 'space') || space;
      if (!['default', 'preserve'].includes(space)) invalid();
      for (const child of p.childNodes) walk(child, pStyle, space);
      const text = runs.map(run => {
        const cls = classFor(run.style);
        return cls ? '<c.' + cls + '>' + escapeText(run.text) + '</c>' : escapeText(run.text);
      }).join('').trim();
      if (text) cues.push({ start, end, text, settings: regions.get(regionName) || '', styles: css });
    }
    return { cues: cues.sort((a, b) => a.start - b.start || a.end - b.end), styles: css };
  }

  const KNOWN_TAGS = ['c', 'i', 'b', 'u', 'v', 'lang', 'ruby', 'rt'];
  // Cheap check of the SRT that was produced: catches the case where Netflix changes its markup
  // and the conversion still "works" but leaves junk behind or loses cues.
  function inspectSrt(srt, sourceCues, sourceText = '') {
    const reasons = [...new Set([...sourceText.matchAll(/<\/?([a-z][a-z0-9]*)/gi)].map(m => m[1].toLowerCase()))].filter(name => !KNOWN_TAGS.includes(name)).slice(0, 5).map(name => 'unknownTag:' + name.slice(0, 16)), body = srt.replace(/^\d+\n[\d:,]+ --> [\d:,]+$/gm, '');
    const produced = (srt.match(/^\d{2,}:\d{2}:\d{2},\d{3} --> \d{2,}:\d{2}:\d{2},\d{3}$/gm) || []).length;
    if (/<\/?(?:c|v|lang|ruby|rt|span|p|br|tt)\b[^>]*>/i.test(body)) reasons.push('unknownMarkup');
    if (/&(?:[a-z]{2,24}|#x?[0-9a-f]{1,6});/i.test(body)) reasons.push('entity');
    if (produced !== (srt.match(/^.* --> .*$/gm) || []).filter(line => /^[\dNa:,undefi]+ --> /.test(line)).length) reasons.push('timestamp');
    if (sourceCues > 20 && produced < sourceCues * 0.8) reasons.push('lostCues:' + produced + '/' + sourceCues);
    return reasons;
  }

  function convert(text, format, output, Parser = globalThis.DOMParser, language = '', colorMode = 'all') {
    const original = { extension: format, content: text };
    let doc;
    if (format === 'vtt') {
      let styles = 0, cues = 0;
      for (const line of text.matchAll(/^(STYLE[ \t]*\r?$|[\d:.]+[ \t]+-->)/gm)) {
        if (line[0].startsWith('STYLE')) { if (++styles > 64) throw new Error('formatError'); }
        else if (++cues > 30000) throw new Error('formatError');
      }
      doc = core.parseVtt(text);
      if (!doc.cues.length) throw new Error('formatError');
      if (output === 'native') return [original];
      // Netflix serves each track as one complete file whose cue times are already
      // presentation times. X-TIMESTAMP-MAP only matters for segmented HLS, so it is ignored.
    } else if (format === 'ttml') {
      const { root, param } = parseTtml(text, Parser);
      if (output === 'native') return [original];
      doc = ttmlCues(root, param);
      if (!doc.cues.length) throw new Error('formatError');
    } else throw new Error('formatError');
    const srt = { extension: 'srt', content: core.toSrt(doc, true, language, colorMode) };
    const result = output === 'both' ? [srt, original] : [srt];
    result.suspect = inspectSrt(srt.content, doc.cues.length, format === 'vtt' ? doc.cues.map(cue => cue.text).join('\n') : '');
    return result;
  }

  function start(navigate = target => location.assign(target)) {
    const page = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    if (page.__bsNetflixDownloader) return;
    page.__bsNetflixDownloader = true;

    const baseKey = 'bs.netflix.subtitles.v1', jobKey = baseKey + '.job';
    const defaults = { locale: 'auto', output: 'srt', epTitle: false, tag: 'none', delay: '2', colors: 'nonwhite', review: false, presets: ['pt-pt|standard'] };
    const stored = read('localStorage', baseKey) || {};
    if (typeof stored.naming === 'string' && stored.tag === undefined) { stored.epTitle = stored.naming.startsWith('episode'); stored.tag = stored.naming.includes('service') ? 'full' : 'none'; }
    delete stored.naming;
    const prefs = { ...defaults, ...stored };
    for (const [key, allowed] of Object.entries({ locale: ['auto', ...LOCALES_ALL], output: ['srt','native','both'], epTitle: [true,false], tag: ['none','full','short'], delay: ['0','2','5','10'], colors: ['nonwhite','all','none'], review: [true,false] })) {
      if (!allowed.includes(prefs[key])) prefs[key] = defaults[key];
    }
    if (!Array.isArray(prefs.presets) || prefs.presets.length > 60 ||
        !prefs.presets.every(x => typeof x === 'string' && /^[a-z0-9-]{2,40}\|(?:standard|sdh|forced)$/.test(x))) prefs.presets = defaults.presets.slice();
    // Netflix identifies European Portuguese as plain "pt" and Brazilian Portuguese as "pt-BR".
    const canon = language => { const value = String(language).toLowerCase(); return value === 'pt' ? 'pt-pt' : value; };
    const choiceKey = track => canon(track.language) + '|' + track.kind;
    const presetIndexes = list => list.flatMap((track, i) => prefs.presets.includes(choiceKey(track)) ? [i] : []);
    const persist = () => { try { localStorage.setItem(baseKey, JSON.stringify(prefs)); } catch {} };
    const languageName = (language, names) => {
      const key = canon(language);
      const portuguese = locale() === 'pt' || locale() === 'pt-BR';
      if (portuguese && key === 'pt-pt') return 'Português (Portugal)';
      if (portuguese && key === 'pt-br') return 'Português (Brasil)';
      let name = '';
      try { name = names?.of(key === 'pt-pt' ? 'pt-PT' : language) || ''; } catch {}
      return name ? name[0].toLocaleUpperCase() + name.slice(1) : language;
    };
    const manifests = new Map(), metadata = new Map(), excluded = new Set();
    let job = read('sessionStorage', jobKey), lock = false, busy = false, abort, db;
    let host, ui, route, seenAt = Date.now(), signature = '', trackSignature = '', media, tracks = [], selected = new Set();
    let tab = 'main', scope = '', picked = [], pickedIdentity = '', msg = '', extra = '', phase = 'idle', done = 0, total = 1;
    let opened = false, closeTimer;
    const LOCALES = ["pt", "en", "fr", "es", "de", "it", "pt-BR", "ja", "ko", "zh-Hans", "zh-Hant", "ru", "uk"];
    const detectLocale = () => {
      const value = String(document.documentElement?.lang || navigator.language || '').toLowerCase();
      if (value.startsWith('pt')) return /^pt-br\b/.test(value) ? 'pt-BR' : 'pt';
      if (value.startsWith('zh')) return /hant|-tw|-hk|-mo/.test(value) ? 'zh-Hant' : 'zh-Hans';
      const base = value.split('-')[0];
      return LOCALES.includes(base) ? base : 'en';
    };
    const locale = () => prefs.locale === 'auto' ? detectLocale() : prefs.locale;
    const t = key => { const entry = LABELS[key] || LABELS.transferError; return entry[locale()] || entry.en; };
    const $ = selector => ui.querySelector(selector);
    const playerAt = expected => !!expected && watchId(location.pathname) === expected && !!document.querySelector('video');
    const EMPTY = [];
    // The player's watch id must be present in both observations. Unverified
    // internal id overrides can refer to a different episode or a preview.
    const selectedMedia = key => metadata.get(key);
    const currentTracksFor = key => manifests.get(key) || EMPTY;
    const sameMedia = (a, b) => !!a && !!b && ['id','title','year','isEpisode','season','episode','episodeTitle'].every(key => a[key] === b[key]);
    const validPlayback = (item, sourceTracks) => playerAt(item.id) && sourceTracks === currentTracksFor(item.id) &&
      sameMedia(item, selectedMedia(item.id));
    const queueIdentity = queue => JSON.stringify(queue.map(e => [e.id, e.title, e.season, e.episode, e.episodeTitle]));
    const status = (key, value = 'idle', detail = '') => { msg = key; extra = detail; phase = value; renderStatus(); };

    function read(storage, key) { try { return JSON.parse(window[storage].getItem(key)) || null; } catch { return null; } }
    function saveJob() { if (job) sessionStorage.setItem(jobKey, JSON.stringify(job)); else sessionStorage.removeItem(jobKey); }
    function put(map, key, value, limit) { map.delete(key); map.set(key, value); if (map.size > limit) map.delete(map.keys().next().value); }
    function validJob(value) {
      return value && /^[a-z0-9-]{5,80}$/i.test(value.key) && ['active','paused','ready'].includes(value.state) &&
        Array.isArray(value.queue) && value.queue.length && value.queue.length <= MAX_QUEUE &&
        value.queue.every(e => typeof e?.id === 'string' && id(e.id) && core.episodeNumber(e.episode) && core.episodeNumber(e.season, 0) !== null && clean(e.title)) &&
        Array.isArray(value.choices) && value.choices.length && value.choices.length <= 300 &&
        value.choices.every(c => typeof c?.language === 'string' && typeof c?.variant === 'string' && ['standard','sdh','forced'].includes(c?.kind)) &&
        Number.isSafeInteger(value.bytes) && value.bytes >= 0 && value.bytes <= MAX_ARCHIVE_BYTES &&
        Number.isFinite(value.since) && value.since > 0 && value.since <= Date.now() + WAIT_MS &&
        Number.isInteger(value.index) && value.index >= 0 && value.index <= value.queue.length &&
        (value.state === 'ready' ? value.index === value.queue.length : value.index < value.queue.length) &&
        ['season','series'].includes(value.scope) && value.options &&
        ['srt','native','both'].includes(value.options.output) && typeof value.options.epTitle === 'boolean' && ['none','full','short'].includes(value.options.tag) && ['nonwhite','all','none'].includes(value.options.colors ?? 'nonwhite');
    }
    if (!validJob(job)) job = null;
    // During a batch the episode list comes from the stored job, so each episode costs Netflix one page load only.
    if (job?.state === 'active') {
      const seasons = new Map(job.queue.map(e => [e.season, true]));
      for (const e of job.queue) metadata.set(e.id, { ...e, queue: job.queue, seasons, incomplete: false, verified: true, seeded: true });
    }

    const manifestStats = new Map(), openGroups = new Set();
    let lastMeta = null, lastFailure = null, lastSuspect = null;
    const hooks = capture(page, result => {
      const entry = parseManifest(result);
      if (!entry) return;
      // The list for a title is created once and then only updated. Netflix answers a track request
      // with a list that can differ (a track delivered without text, a different order), and replacing
      // the list would cancel the download in progress and reset the selection.
      const known = manifests.get(entry.movie);
      if (!known) put(manifests, entry.movie, entry.tracks, 12);
      else {
        const keyOf = track => [String(track.language).toLowerCase(), track.kind, track.variant, track.raw].join('|');
        const take = (list, used, track) => list.find(item => !used.has(item) && keyOf(item) === keyOf(track));
        const used = new Set();
        for (const track of entry.tracks) {
          const match = take(known, used, track);
          if (match) { used.add(match); if (track.sources.length) { match.sources = track.sources; match.pending = false; match.dead = false; } }
          else { known.push(track); used.add(track); }
        }
        // Delivered, but with nothing the script can save (image only or unknown format).
        const gone = new Set();
        for (const track of entry.unusable) { const match = take(known, gone, track); if (match) { gone.add(match); if (!match.sources.length) { match.pending = false; match.dead = true; } } }
        entry.stats.onRequest = known.filter(track => track.pending).length;
        entry.stats.usable = known.filter(track => track.sources.length).length;
        entry.stats.noText = known.filter(track => track.dead).length;
      }
      put(manifestStats, entry.movie, entry.stats, 12);
    }, data => { for (const [key, item] of parseMetadata(data)) put(metadata, key, item, 2 * MAX_QUEUE); });

    // The current Netflix player no longer requests /metadata by itself (it uses GraphQL),
    // so the title, season and episode list are requested here when nothing was observed.
    const metaTried = new Map();
    async function requestMetadata(key) {
      const state = metaTried.get(key) || { count: 0, at: 0, busy: false };
      if (!id(key) || state.busy || state.count >= 4 || Date.now() - state.at < 5000) return;
      state.busy = true; state.count += 1; state.at = Date.now(); put(metaTried, key, state, 50);
      try {
        const response = await fetch(new URL('/nq/website/memberapi/release/metadata?movieid=' + key, location.origin),
          { credentials: 'same-origin', signal: AbortSignal.timeout(10000) });
        lastMeta = { status: response.status };
        if (!response.ok) return;
        const data = JSON.parse(await boundedText(response)), video = data?.video;
        const keys = value => value && typeof value === 'object' ? Object.keys(value).slice(0, 40) : null;
        lastMeta = { status: response.status, type: typeof video?.type === 'string' ? video.type.slice(0, 20) : null, videoKeys: keys(video),
          seasonKeys: keys(video?.seasons?.[0]), episodeKeys: keys(video?.seasons?.[0]?.episodes?.[0]) };
        const parsed = parseMetadata(data);
        lastMeta.entries = parsed.size; lastMeta.matched = parsed.has(key);
        for (const [mediaKey, item] of parsed) put(metadata, mediaKey, item, 2 * MAX_QUEUE);
      } catch (error) { lastMeta = { ...(lastMeta || {}), error: String(error?.name || 'Error') }; }
      finally {
        state.busy = false;
        // Still nothing after every attempt: keep downloads working with a generic name and warn.
        if (state.count >= 4 && !metadata.has(key)) put(metadata, key, { id: key, title: 'Netflix ' + key, year: '', isEpisode: false, fallback: true }, 2 * MAX_QUEUE);
      }
    }

    const GEAR = '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M2 4h6M13 4h1M2 8h1M8 8h6M2 12h5M12 12h2"/><circle cx="10.5" cy="4" r="1.6"/><circle cx="5.5" cy="8" r="1.6"/><circle cx="9.5" cy="12" r="1.6"/></svg>';
    function mount() {
      if (host || !document.body) return;
      host = document.createElement('div'); host.id = 'bs-netflix-subtitles';
      host.style.cssText = 'position:fixed;z-index:2147483647;top:12px;left:50%;transform:translateX(-50%)';
      ui = host.attachShadow({ mode: 'open' });
      ui.innerHTML = '<style>' + CSS + '</style>' +
        '<button class="launcher" data-launch aria-expanded="false" aria-controls="bs-panel"><b class="fill" hidden></b><span class="mark" aria-hidden="true"></span><span data-label="tracks"></span><span class="num" data-count></span></button>' +
        '<section class="panel" id="bs-panel" hidden>' +
        '<header><div class="what"><strong data-title></strong><small data-subtitle></small></div><button class="icon" data-settings aria-pressed="false">' + GEAR + '</button><button class="icon" data-close>×</button></header>' +
        '<div class="alert" data-alert hidden><p data-alert-text></p><button data-diagnostic data-label="diagnostic"></button></div>' +
        '<main><div data-pane="main"><div class="seg"><button data-select="preset" data-label="preset"></button><button data-select="all" data-label="all"></button><button data-select="none" data-label="none"></button></div>' +
        '<div class="list" data-tracks></div><button class="link" data-save-preset data-label="savePreset" hidden></button>' +
        '<button class="primary" data-download></button>' +
        '<div class="batch" data-batch hidden><button data-scope="season"></button><button data-scope="series"></button></div>' +
        '<div class="batch" data-job hidden><button data-pause data-label="pause" hidden></button><button data-resume data-label="resume" hidden></button><button data-zip data-label="saveZip" hidden></button><button data-clear data-label="clear" hidden></button></div></div>' +
        '<div data-pane="episodes" hidden><p class="hint" data-label="reviewList"></p><div class="list" data-episodes></div><div class="batch"><button data-back data-label="back"></button><button class="primary" data-begin></button></div></div>' +
        '<div data-pane="settings" hidden><label class="field"><span data-label="format"></span><select data-pref="output"><option value="srt">SRT</option><option value="native" data-label="native"></option><option value="both" data-label="both"></option></select></label>' +
        '<label class="field"><span data-label="service"></span><select data-pref="tag"><option value="none" data-label="tagNone"></option><option value="full">Netflix</option><option value="short">NF</option></select></label>' +
        '<label class="item"><input type="checkbox" data-pref="epTitle"><span class="name" data-label="episode"></span></label><p class="hint" data-preview></p>' +
        '<label class="field"><span data-label="colors"></span><select data-pref="colors"><option value="nonwhite" data-label="colorsNonWhite"></option><option value="all" data-label="colorsAll"></option><option value="none" data-label="colorsNone"></option></select></label>' +
        '<label class="field"><span data-label="delay"></span><select data-pref="delay"><option value="0" data-label="delayNone"></option><option value="2">2 s</option><option value="5">5 s</option><option value="10">10 s</option></select></label>' +
        '<label class="item"><input type="checkbox" data-pref="review"><span class="name" data-label="review"></span></label>' +
        '<label class="field"><span data-label="language"></span><select data-pref="locale"><option value="auto" data-label="auto"></option><option value="pt">Português (Portugal)</option><option value="pt-BR">Português (Brasil)</option><option value="en">English</option><option value="es">Español</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="it">Italiano</option><option value="ru">Русский</option><option value="uk">Українська</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="zh-Hans">简体中文</option><option value="zh-Hant">繁體中文</option></select></label>' +
        '<p class="hint" data-preset-info></p><div class="batch"><button data-back data-label="back"></button><button data-diagnostic data-label="diagnostic"></button></div><p class="hint version">' + VERSION + '</p></div></main>' +
        '<p class="status" data-status role="status" aria-live="polite"></p></section>';
      document.body.append(host);
      const setOpen = value => {
        opened = value; $('.panel').hidden = !value; $('[data-launch]').setAttribute('aria-expanded', String(value));
      };
      $('[data-launch]').addEventListener('pointerenter', () => { clearTimeout(closeTimer); setOpen(true); });
      host.addEventListener('pointerenter', () => clearTimeout(closeTimer));
      host.addEventListener('pointerleave', () => { closeTimer = setTimeout(() => {
        if (!ui.activeElement || ui.activeElement === $('[data-launch]') || ui.activeElement.tagName !== 'SELECT') setOpen(false);
      }, 550); });
      $('[data-launch]').addEventListener('click', () => setOpen(true));
      $('[data-close]').addEventListener('click', () => { setOpen(false); $('[data-launch]').focus(); });
      host.addEventListener('keydown', event => {
        if (event.key === 'Escape' && opened) { event.stopPropagation(); setOpen(false); $('[data-launch]').focus(); }
        else if (opened) event.stopPropagation();
      });
      $('[data-settings]').onclick = () => setTab(tab === 'settings' ? 'main' : 'settings');
      ui.querySelectorAll('[data-back]').forEach(el => el.onclick = () => { picked = []; pickedIdentity = ''; setTab('main'); renderStatus(); });
      ui.querySelectorAll('[data-pref]').forEach(el => el.onchange = () => {
        prefs[el.dataset.pref] = el.type === 'checkbox' ? el.checked : el.value;
        persist(); labels(); render();
      });
      ui.querySelectorAll('[data-select]').forEach(el => el.onclick = () => {
        selected = new Set(el.dataset.select === 'all' ? tracks.map((_, i) => i) : el.dataset.select === 'preset' ? presetIndexes(tracks) : []);
        if (phase !== 'active') { msg = ''; extra = ''; phase = 'idle'; }
        renderTracks(); renderStatus();
      });
      $('[data-save-preset]').onclick = () => {
        if (!selected.size) return;
        prefs.presets = [...new Set([...selected].map(i => choiceKey(tracks[i])))].slice(0, 60);
        persist(); status('presetSaved');
      };
      ui.querySelectorAll('[data-scope]').forEach(el => el.onclick = () => prepare(el.dataset.scope));
      $('[data-begin]').onclick = () => void begin();
      $('[data-pause]').onclick = () => pause('paused');
      $('[data-resume]').onclick = () => {
        if (job?.state !== 'paused' || busy || lock) return;
        try {
          job.state = 'active'; job.since = Date.now(); job.retries = 0; job.nextAt = 0; saveJob(); status('waiting', 'active');
          go(job.queue[job.index].id);
        } catch { pause('storageError'); }
      };
      $('[data-zip]').onclick = () => void archive(false);
      $('[data-clear]').onclick = () => void clearBatch();
      $('[data-download]').onclick = () => void single();
      ui.querySelectorAll('[data-diagnostic]').forEach(el => el.onclick = () => save(new Blob([JSON.stringify(diagnostic(), null, 2)], { type: 'application/json' }),
        'netflix-diagnostic-' + new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-') + '.json'));
      labels(); render();
    }

    // What the script expected from Netflix and did not get. Shown as a warning with a
    // one-click diagnostic, so a change on the service side is noticed and can be fixed fast.
    // The same failure on one title may be temporary; on two different titles it becomes "confirmed".
    const seenKey = baseKey + '.health';
    let seen = read('localStorage', seenKey);
    if (!seen || typeof seen !== 'object' || Array.isArray(seen)) seen = {};
    const saveSeen = () => { try { localStorage.setItem(seenKey, JSON.stringify(seen)); } catch {} };
    function remember(code) {
      const list = Array.isArray(seen[code]) ? seen[code].filter(x => typeof x === 'string').slice(-9) : [];
      if (route && !list.includes(route)) { list.push(route); seen[code] = list; saveSeen(); }
      return list.length;
    }
    function forget(codes) {
      let changed = false;
      for (const code of codes) if (seen[code]) { delete seen[code]; changed = true; }
      if (changed) saveSeen();
    }
    function health() {
      if (!route || !document.querySelector('video')) return '';
      const stats = manifestStats.get(route);
      if (!stats) return Date.now() - seenAt >= 20000 ? 'chgManifest' : '';
      if (stats.raw > 0 && !stats.usable && !stats.onRequest) return 'chgSources';
      if (media?.fallback) return 'chgMetadata';
      if (lastFailure?.route === route && lastFailure.all) return 'chgDownload';
      if (lastSuspect?.route === route) return 'chgConvert';
      return '';
    }
    function diagnostic() {
      const stats = manifestStats.get(route) || null;
      return {
        schema: 'blackspirits.subtitles.diagnostic/2', service: 'Netflix', version: VERSION, when: new Date().toISOString(),
        browser: navigator.userAgent, interface: document.documentElement.lang || '', warning: health() || null,
        player: { watchPage: !!route, video: !!document.querySelector('video'), secondsOnPage: Math.round((Date.now() - seenAt) / 1000) },
        hooks: hooks(),
        manifest: stats ? { ...stats, tracks: tracks.length, kinds: [...new Set(tracks.map(x => x.kind))], formats: [...new Set(tracks.flatMap(x => x.sources.map(s => s.format)))] } : null,
        metadata: { requests: metaTried.get(route)?.count || 0, last: lastMeta, fallback: !!media?.fallback,
          type: media ? media.isEpisode ? 'series' : 'film' : 'unknown', seasons: media?.seasons ? [...media.seasons].map(([n, ok]) => [n, media.queue.filter(e => e.season === n).length, ok]) : [],
          incomplete: !!media?.incomplete, verified: !!media?.verified },
        lastFailure, lastSuspect, warningHistory: seen, state: { phase, code: msg, selected: selected.size, presets: prefs.presets, output: prefs.output },
        batch: job ? { state: job.state, completed: job.index, total: job.queue.length, scope: job.scope, retries: job.retries || 0, saved: !!job.saved } : null,
        privacy: 'No cookies, headers, full addresses, titles or subtitle text.'
      };
    }

    function labels() {
      ui.querySelectorAll('[data-label]').forEach(el => { el.textContent = t(el.dataset.label); });
      $('[data-close]').setAttribute('aria-label', t('close'));
      $('[data-settings]').setAttribute('aria-label', t('settings')); $('[data-settings]').title = t('settings');
      ui.querySelectorAll('[data-pref]').forEach(el => { if (el.type === 'checkbox') el.checked = prefs[el.dataset.pref]; else el.value = prefs[el.dataset.pref]; });
    }
    function setTab(value) {
      tab = value;
      ui.querySelectorAll('[data-pane]').forEach(el => { el.hidden = el.dataset.pane !== tab; });
      $('[data-settings]').setAttribute('aria-pressed', String(tab === 'settings'));
    }
    function row(parts, checked, change) {
      const label = document.createElement('label'), input = document.createElement('input');
      label.className = 'item'; input.type = 'checkbox'; input.checked = checked;
      input.onchange = () => change(input.checked);
      label.append(input);
      for (const [cls, text] of parts) if (text) { const span = document.createElement('span'); span.className = cls; span.textContent = text; label.append(span); }
      return label;
    }
    function renderTracks() {
      let names;
      try { names = new Intl.DisplayNames([locale() === 'pt' ? 'pt-PT' : locale()], { type: 'language' }); } catch {}
      const preset = new Set(presetIndexes(tracks));
      const view = tracks.map((track, i) => ({ track, i, name: languageName(track.language, names) }))
        .sort((a, b) => preset.has(b.i) - preset.has(a.i) || a.name.localeCompare(b.name, locale()) || a.i - b.i);
      const fragment = document.createDocumentFragment();
      for (const kind of ['standard', 'sdh', 'forced']) {
        const group = view.filter(x => x.track.kind === kind);
        if (!group.length) continue;
        let target = fragment;
        if (kind !== 'standard') {
          const details = document.createElement('details'), summary = document.createElement('summary');
          const chosen = group.filter(x => selected.has(x.i)).length;
          summary.textContent = t(kind === 'sdh' ? 'sdhGroup' : 'forcedGroup') + ' (' + (chosen ? chosen + ' ' + t('of') + ' ' : '') + group.length + ')';
          details.dataset.kind = kind; details.open = openGroups.has(kind) || chosen > 0;
          details.ontoggle = () => { if (details.open) openGroups.add(kind); else openGroups.delete(kind); };
          details.append(summary); fragment.append(details); target = details;
        }
        for (const { track, i, name } of group) target.append(row([['code', track.language], ['name', name], ['tag', [track.variant.replace(/_/g, ' ').toLowerCase(), track.sources.length ? '' : track.dead ? t('noText') : t('onRequest')].filter(Boolean).join(' · ')]], selected.has(i), checked => {
          if (checked) selected.add(i); else selected.delete(i);
          if (phase !== 'active') { msg = ''; extra = ''; phase = 'idle'; }
          renderStatus();
        }));
      }
      $('[data-tracks]').replaceChildren(fragment);
    }
    function renderEpisodes() {
      const fragment = document.createDocumentFragment();
      for (const item of picked) fragment.append(row([['code', core.episodeCode(item)], ['name', item.episodeTitle]], !excluded.has(core.episodeCode(item)), checked => {
        if (checked) excluded.delete(core.episodeCode(item)); else excluded.add(core.episodeCode(item));
        renderStatus();
      }));
      $('[data-episodes]').replaceChildren(fragment);
    }
    function render() {
      if (!ui) return;
      $('[data-title]').textContent = media && !media.fallback ? media.title : 'Netflix';
      $('[data-subtitle]').textContent = media?.isEpisode ? core.episodeCode(media) + (media.episodeTitle ? '  ' + media.episodeTitle : '') : media?.year || '';
      renderTracks(); renderEpisodes(); setTab(tab); renderStatus();
    }
    function renderStatus() {
      if (!ui) return;
      const frozen = busy || lock || job?.state === 'active';
      ui.querySelectorAll('[data-pref], [data-select], [data-tracks] input, [data-episodes] input').forEach(el => { el.disabled = frozen; });
      const presetNow = presetIndexes(tracks), sameAsPreset = selected.size === presetNow.length && presetNow.every(i => selected.has(i)) &&
        new Set([...selected].map(i => choiceKey(tracks[i]))).size === prefs.presets.length;
      $('[data-select="preset"]').disabled = frozen || !presetNow.length;
      $('[data-save-preset]').hidden = frozen || !selected.size || sameAsPreset;
      $('[data-preset-info]').textContent = t('presetInfo') + ' ' + prefs.presets.map(key => {
        const [language, kind] = key.split('|');
        return (language === 'pt-pt' ? 'pt-PT' : language === 'pt-br' ? 'pt-BR' : language) + (kind === 'standard' ? '' : ' ' + t(kind));
      }).join(', ');
      $('[data-download]').textContent = t('download') + (selected.size ? ' (' + selected.size + ')' : '');
      $('[data-download]').disabled = frozen || !route || !media || !selected.size;
      const series = !!media?.isEpisode && !media.incomplete && !media.fallback;
      const blocking = !!job && job.state !== 'ready';
      $('[data-batch]').hidden = !series || blocking;
      if (series) {
        $('[data-scope="season"]').textContent = t('season') + ' ' + media.season + ' (' + media.queue.filter(e => e.season === media.season).length + ')';
        $('[data-scope="series"]').textContent = t('series') + ' (' + media.queue.length + ')';
        $('[data-scope="series"]').hidden = media.seasons.size < 2;
      }
      ui.querySelectorAll('[data-scope]').forEach(el => { el.disabled = frozen || blocking || !selected.size; });
      const left = picked.length - picked.filter(item => excluded.has(core.episodeCode(item))).length;
      $('[data-begin]').textContent = t('startBatch') + (left ? ' (' + left + ')' : '');
      $('[data-begin]').disabled = frozen || blocking || !selected.size || !left;
      $('[data-job]').hidden = !job;
      $('[data-pause]').hidden = job?.state !== 'active';
      $('[data-resume]').hidden = job?.state !== 'paused'; $('[data-resume]').disabled = busy || lock;
      $('[data-zip]').hidden = job?.state !== 'ready' && !(job?.state === 'paused' && job.index);
      $('[data-zip]').disabled = busy || lock;
      $('[data-clear]').hidden = !job || job.state === 'active'; $('[data-clear]').disabled = busy || lock;
      const count = job ? job.index + '/' + job.queue.length : busy ? done + '/' + total : tracks.length;
      $('[data-count]').textContent = count;
      const fill = $('.fill'), launcher = $('[data-launch]');
      fill.hidden = !job && !busy && phase !== 'complete' && phase !== 'error';
      fill.style.width = (job ? job.index / job.queue.length : done / Math.max(total, 1)) * 100 + '%';
      const warning = health();
      launcher.dataset.transfer = job?.state === 'paused' ? 'paused' : job?.state === 'ready' ? 'complete' : phase;
      launcher.dataset.warning = String(!!warning);
      $('[data-alert]').hidden = !warning;
      if (warning) {
        const titles = remember(warning);
        $('[data-alert]').dataset.level = titles > 1 ? 'confirmed' : 'suspect';
        $('[data-alert-text]').textContent = t(warning) + ' ' + (titles > 1 ? t('chgConfirmed').replace('{n}', titles) : t('chgMaybe'));
      } else if (tracks.length && media && !media.fallback) forget(['chgManifest', 'chgSources', 'chgMetadata']);
      const message = msg || (media?.incomplete ? 'incomplete' : tracks.length && media ? (!selected.size && !presetNow.length ? 'presetMissing' : '') : warning ? '' : 'waiting');
      $('[data-status]').textContent = (message ? t(message) : '') + (msg && extra ? ' ' + extra : '') + (job ? ' ' + count : '');
      $('[data-status]').dataset.phase = phase;
      launcher.title = (warning ? t(warning) : $('[data-status]').textContent) || t('manager');
      try { $('[data-preview]').textContent = media ? mediaName(media, prefs) + (prefs.output === 'native' ? ' (.vtt / .ttml)' : '.srt') : ''; }
      catch { $('[data-preview]').textContent = t('missingTitle'); }
    }

    function mediaName(item, options) {
      return core.buildMediaBase({ ...item, platform: 'Netflix',
        includeEpisodeTitle: item.isEpisode && options.epTitle && !!item.episodeTitle,
        service: options.tag === 'full' ? 'Netflix' : options.tag === 'short' ? 'NF' : false });
    }
    function save(blob, name) {
      const url = URL.createObjectURL(blob), link = document.createElement('a');
      link.href = url; link.download = name; document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    }
    function netflixPlayer() {
      try {
        const videoPlayer = page.netflix.appContext.state.playerApp.getAPI().videoPlayer;
        const sessions = [...videoPlayer.getAllPlayerSessionIds()];
        return videoPlayer.getVideoPlayerBySessionId(sessions.find(name => String(name).startsWith('watch')) ?? sessions[0]) || null;
      } catch { return null; }
    }
    let viewerTrack = null, selectedFor = null;
    const asked = new Set();
    // Selecting a track in the player is what makes Netflix send its address. The viewer's own
    // choice is remembered and put back afterwards by restoreViewerTrack().
    async function requestTrack(track, signal) {
      const player = netflixPlayer(), entry = track.language.toLowerCase() + '|' + track.raw;
      const repeated = asked.has(entry);
      let target = null;
      try {
        target = [...player.getTimedTextTrackList()].find(item => !item.isNoneTrack && !item.isForcedNarrative &&
          String(item.bcp47).toLowerCase() === track.language.toLowerCase() && String(item.rawTrackType).toLowerCase() === track.raw);
        if (target && !viewerTrack) viewerTrack = player.getTimedTextTrack();
        if (target && !repeated) { asked.add(entry); await player.setTimedTextTrack(target); }
      } catch { target = null; }
      if (!target) throw new Error('requestError');
      for (let i = 0; i < (repeated ? 4 : 40) && !track.sources.length && !track.dead; i += 1) {
        if (signal.aborted) throw signal.reason;
        await new Promise(resolve => setTimeout(resolve, 250));
      }
      if (!track.sources.length) throw new Error(track.dead ? 'noTextError' : 'requestError');
    }
    async function restoreViewerTrack() {
      const previous = viewerTrack; viewerTrack = null; asked.clear();
      if (!previous) return;
      try { await netflixPlayer()?.setTimedTextTrack(previous); } catch {}
    }
    async function fetchTrack(track, options, signal) {
      if (!track.sources.length) {
        if (track.dead) throw new Error('noTextError');
        try { await requestTrack(track, signal); }
        catch (error) {
          if (signal.aborted) throw error;
          const reason = error.message === 'noTextError' ? 'noTextError' : 'requestError';
          lastFailure = { route, reason, responses: [], formats: [], all: false, when: new Date().toISOString() };
          throw new Error(reason);
        }
      }
      let reason = 'transferError';
      const statuses = [];
      const trackDeadline = AbortSignal.timeout(30000);
      for (const source of track.sources) {
        if (signal.aborted) throw signal.reason;
        if (trackDeadline.aborted) break;
        try {
          const response = await fetch(source.url, { credentials: 'omit', referrerPolicy: 'no-referrer',
            signal: AbortSignal.any([signal, trackDeadline, AbortSignal.timeout(8000)]) });
          statuses.push(response.status);
          if (!response.ok || (response.url && !safeTrackUrl(response.url))) continue;
          try {
            const converted = convert(await boundedText(response), source.format, options.output, globalThis.DOMParser, track.language, options.colors || 'nonwhite');
            if (converted.suspect?.length) lastSuspect = { route, reasons: converted.suspect.slice(0, 6), format: source.format, language: track.language, when: new Date().toISOString() };
            return converted;
          }
          catch (error) { if (!signal.aborted) reason = error.message === 'transferError' ? 'transferError' : 'formatError'; }
        } catch (error) { if (signal.aborted) throw error; statuses.push(String(error?.name || 'Error')); }
      }
      lastFailure = { route, reason, responses: statuses.slice(0, 8), formats: track.sources.map(s => s.format), all: false, when: new Date().toISOString() };
      throw new Error(reason);
    }
    async function files(item, sourceTracks, chosen, options, signal, folder = '', failed = null) {
      const base = mediaName(item, options), output = [];
      const deadline = AbortSignal.any([signal, AbortSignal.timeout(WAIT_MS + chosen.filter(track => !track.sources.length).length * 12000)]);
      let bytes = 0;
      const late = [];
      const add = (track, converted) => {
        bytes += bytesOf(converted);
        if (bytes > MAX_EPISODE_BYTES) throw new Error('sizeError');
        const prefix = core.outputPrefix(base, track, chosen);
        for (const file of converted) output.push({ name: folder + prefix + '.' + file.extension, content: file.content });
        done += 1; renderStatus();
      };
      const giveUp = (track, error) => {
        if (!failed) throw error;
        failed.push({ track, reason: error.message }); done += 1; renderStatus();
      };
      for (const track of chosen) {
        if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
        let converted;
        try { converted = await fetchTrack(track, options, deadline); }
        catch (error) {
          if (signal.aborted) throw error;
          if (error.message === 'requestError') { late.push(track); continue; }
          giveUp(track, error); continue;
        }
        add(track, converted);
      }
      // Netflix delivers some addresses with a delay, typically the second variant of a language.
      // Wait for them together, nudging the player once, instead of ten seconds per track.
      if (late.length) {
        const waitFor = async ms => { for (let i = 0; i < ms / 250 && late.some(track => !track.sources.length && !track.dead); i += 1) { if (deadline.aborted) throw deadline.reason; await new Promise(resolve => setTimeout(resolve, 250)); } };
        await waitFor(4000);
        for (const track of late.filter(track => !track.sources.length && !track.dead)) {
          if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
          if (track.sources.length) continue;
          // Going back to the viewer's own track and asking again makes the player send a fresh request.
          try { if (viewerTrack) await netflixPlayer()?.setTimedTextTrack(viewerTrack); } catch {}
          await waitFor(1500);
          if (track.sources.length) continue;
          asked.delete(track.language.toLowerCase() + '|' + track.raw);
          try { await requestTrack(track, deadline); } catch (error) { if (signal.aborted) throw error; }
        }
        for (const track of late) {
          if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
          let converted;
          try { converted = await fetchTrack(track, options, deadline); }
          catch (error) { if (signal.aborted) throw error; giveUp(track, error); continue; }
          add(track, converted);
        }
      }
      return output;
    }
    async function single() {
      if (busy || !playerAt(route) || !media || !selected.size || job?.state === 'active') return;
      const key = route, item = media, sourceTracks = tracks;
      if (sourceTracks !== currentTracksFor(key) || item !== selectedMedia(key)) { tick(); return; }
      const chosen = [...selected].map(i => sourceTracks[i]), opts = { ...prefs };
      done = 0; total = chosen.length; busy = true; abort = new AbortController(); status('downloading','active');
      try {
        const failed = [];
        const output = await files(item, sourceTracks, chosen, opts, abort.signal, '', failed);
        if (abort.signal.aborted) return;
        if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
        if (!output.length) { if (lastFailure) lastFailure.all = true; throw new Error(failed.every(x => x.reason === 'noTextError') ? 'noTextError' : failed.every(x => /^(?:request|noText)Error$/.test(x.reason)) ? 'requestError' : failed.some(x => x.reason === 'formatError') ? 'formatError' : 'transferError'); }
        if (!failed.length) { lastFailure = null; forget(['chgDownload']); if (!lastSuspect) forget(['chgConvert']); }
        if (output.length === 1) save(new Blob([output[0].content], { type: 'text/plain;charset=utf-8' }), output[0].name);
        else save(core.makeZip(output), mediaName(item, opts) + '.zip');
        if (failed.length) status('partial', 'error', failed.map(x => x.track.language + (x.track.kind === 'standard' ? '' : ' ' + t(x.track.kind))).join(', '));
        else status('complete','complete');
      } catch (error) { if (!abort.signal.aborted) status(error.message, 'error'); }
      finally { await restoreViewerTrack(); busy = false; renderTracks(); renderStatus(); }
    }

    function prepare(value) {
      if (busy || lock || (job && job.state !== 'ready') || !selected.size) return;
      if (!playerAt(route)) return;
      picked = batchQueue(media, value); scope = value; pickedIdentity = queueIdentity(picked); excluded.clear(); renderEpisodes();
      if (!picked.length) { status('incomplete','error'); return; }
      if (!prefs.review && (value === 'season' ? media.seasons.get(media.season) : media.verified)) void begin();
      else { setTab('episodes'); status(''); }
    }
    function database() {
      return db ||= new Promise((resolve, reject) => {
        const request = indexedDB.open(baseKey, 1);
        request.onupgradeneeded = () => request.result.createObjectStore('episodes');
        request.onsuccess = () => {
          const handle = request.result;
          handle.onversionchange = () => { handle.close(); db = null; };
          const tx = handle.transaction('episodes', 'readwrite');
          const cursor = tx.objectStore('episodes').openKeyCursor();
          const expiredBefore = Date.now() - 7 * 86400000;
          cursor.onsuccess = () => {
            const current = cursor.result;
            if (!current) return;
            const key = String(current.key), written = parseInt(key.split('-', 1)[0], 36);
            if (key.includes('-') && Number.isFinite(written) && written < expiredBefore && !key.startsWith(job?.key + ':')) tx.objectStore('episodes').delete(current.key);
            current.continue();
          };
          tx.oncomplete = () => resolve(handle);
          tx.onabort = () => { handle.close(); reject(new Error('storageError')); };
        };
        request.onerror = request.onblocked = () => reject(new Error('storageError'));
      }).catch(error => { db = null; throw error; });
    }
    async function store(mode, fn) {
      const databaseHandle = await database();
      return new Promise((resolve, reject) => {
        const tx = databaseHandle.transaction('episodes', mode);
        const req = fn(tx.objectStore('episodes'));
        tx.oncomplete = () => resolve(req?.result);
        tx.onerror = tx.onabort = () => reject(new Error('storageError'));
      });
    }
    function go(target) {
      if (id(target) && watchId(location.pathname) !== target) navigate('/watch/' + target);
    }
    async function begin() {
      if (lock || busy || (job && job.state !== 'ready') || !media?.isEpisode || !selected.size || !playerAt(route)) return;
      const key = route, sourceTracks = tracks, live = batchQueue(selectedMedia(key), scope);
      if (sourceTracks !== currentTracksFor(key)) { tick(); return; }
      if (pickedIdentity !== queueIdentity(live)) {
        picked = live; pickedIdentity = queueIdentity(live); excluded.clear(); renderEpisodes(); setTab('episodes'); status('reviewList'); return;
      }
      const queue = core.filterEpisodes(picked, excluded);
      if (!queue.length) return;
      const choices = [...selected].map(i => {
        const { language, kind, variant } = tracks[i]; return { language, kind, variant };
      });
      lock = true; renderStatus();
      try {
        selectTracks(tracks, choices);
        await database();
        if (job) { const old = job; await store('readwrite', s => { for (let i = 0; i <= old.index; i += 1) s.delete(old.key + ':' + i); }); job = null; saveJob(); }
        if (!playerAt(key) || pickedIdentity !== queueIdentity(batchQueue(selectedMedia(key), scope))) {
          status('reviewList'); return;
        }
        job = { key: Date.now().toString(36) + '-' + crypto.randomUUID(), state: 'active', queue, index: 0, bytes: 0, choices, scope,
          options: { output: prefs.output, epTitle: prefs.epTitle, tag: prefs.tag, colors: prefs.colors }, retries: 0, since: Date.now() };
        saveJob(); picked = []; renderEpisodes(); setTab('main'); status('waiting','active');
        go(queue[0].id);
      } catch (error) { job = null; status(error.message === 'missingTrack' ? 'missingTrack' : 'storageError','error'); }
      finally { lock = false; renderStatus(); }
    }
    function pause(reason) {
      if (!job || job.state !== 'active') return;
      job.state = 'paused'; abort?.abort();
      try { saveJob(); } catch {}
      status(reason,'paused');
    }
    async function batch() {
      if (busy || lock || job?.state !== 'active') return;
      const item = job.queue[job.index];
      if (!item) return pause('storageError');
      if (job.nextAt && Date.now() < job.nextAt) return;
      if (job.nextAt) { job.nextAt = 0; job.since = Date.now(); try { saveJob(); } catch {} go(item.id); return; }
      if (route !== item.id || !tracks.length || !host || host.hidden) {
        // Netflix sometimes stalls after many episodes in a row. Reload the episode twice before giving up.
        if (Date.now() - job.since >= STALL_MS) {
          if ((job.retries || 0) < 2 && route === item.id) {
            job.retries = (job.retries || 0) + 1; job.since = Date.now();
            try { saveJob(); location.reload(); } catch { pause('stalled'); }
          } else pause('stalled');
        }
        return;
      }
      const sourceTracks = tracks;
      if (!validPlayback(item, sourceTracks)) {
        if (Date.now() - job.since >= WAIT_MS) pause('playbackChanged');
        return;
      }
      let chosen;
      try { chosen = selectTracks(sourceTracks, job.choices); }
      catch { if (Date.now() - job.since >= WAIT_MS) pause('missingTrack'); return; }
      const run = job;
      busy = true; done = 0; total = chosen.length; abort = new AbortController(); status('downloading','active');
      try {
        const folder = run.scope === 'series' ? 'S' + String(item.season).padStart(2,'0') + '/' : '';
        const output = await files(item, sourceTracks, chosen, run.options, abort.signal, folder);
        await restoreViewerTrack();
        const bytes = bytesOf(output);
        if (run.bytes + bytes > MAX_ARCHIVE_BYTES) throw new Error('sizeError');
        if (run.state !== 'active' || abort.signal.aborted) return;
        if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
        await store('readwrite', s => s.put(output, run.key + ':' + run.index));
        if (run.state !== 'active' || abort.signal.aborted) return;
        if (!validPlayback(item, sourceTracks)) throw new Error('playbackChanged');
        run.index += 1; run.bytes += bytes; run.since = Date.now(); run.retries = 0;
        if (run.index === run.queue.length) run.state = 'ready';
        if (run.state === 'active') run.nextAt = Date.now() + Number(prefs.delay) * 1000;
        try { saveJob(); } catch (error) { run.index -= 1; run.bytes -= bytes; run.state = 'active'; run.nextAt = 0; throw error; }
        if (run.state === 'ready') { status('complete','complete'); busy = false; await archive(true); }
        else status('waiting','active');
      } catch (error) { if (run.state === 'active') pause(['formatError','storageError','sizeError','playbackChanged','requestError','noTextError'].includes(error.message) ? error.message : 'transferError'); }
      finally { await restoreViewerTrack(); busy = false; renderStatus(); }
    }
    async function archive(automatic) {
      if (busy || lock || !job || (job.state !== 'ready' && (job.state !== 'paused' || !job.index))) return;
      lock = true; renderStatus();
      try {
        const all = [], partial = job.state !== 'ready';
        let bytes = 0;
        for (let i = 0; i < job.index; i += 1) {
          const output = await store('readonly', s => s.get(job.key + ':' + i));
          const expected = job.choices.length * (job.options.output === 'both' ? 2 : 1);
          if (!Array.isArray(output) || output.length !== expected) throw new Error('storageError');
          bytes += bytesOf(output);
          if (bytes > job.bytes) throw new Error('storageError');
          all.push(...output);
        }
        if (bytes !== job.bytes) throw new Error('storageError');
        if (partial) all.push({ name: 'INCOMPLETE.txt', content: t('incomplete') + '\n' + job.queue.slice(job.index).map(core.episodeCode).join('\n') });
        const first = job.queue[0];
        const name = core.safeName(first.title, 130, false, 180) + (job.scope === 'season' ? ' S' + String(first.season).padStart(2,'0') : '') +
          (first.year && !first.title.endsWith(' (' + first.year + ')') ? ' (' + first.year + ')' : '') + (partial ? '.incomplete' : '') + '.zip';
        save(core.makeZip(all), name); if (!partial) { job.saved = true; try { saveJob(); } catch {} }
        status(automatic ? 'autoZip' : 'complete','complete');
      } catch { status('storageError','error'); }
      finally { lock = false; renderStatus(); }
    }
    async function clearBatch() {
      if (!job || busy || lock || job.state === 'active') return;
      lock = true; renderStatus();
      try {
        await store('readwrite', s => { for (let i = 0; i <= job.index; i += 1) s.delete(job.key + ':' + i); });
        job = null; saveJob(); status('');
      } catch { status('storageError','error'); }
      finally { lock = false; renderStatus(); }
    }
    function tick() {
      const current = watchId(location.pathname);
      if (route !== current) {
        if (busy) abort?.abort();
        route = current; seenAt = Date.now(); lastFailure = null; lastSuspect = null; if (tab === 'episodes') tab = 'main'; signature = ''; trackSignature = ''; selected.clear(); picked = []; pickedIdentity = ''; excluded.clear(); msg = ''; phase = 'idle';
        if (job?.state === 'active' && current !== job.queue[job.index]?.id) pause('wrongEpisode');
        if (job?.state === 'ready' && job.saved && !job.queue.some(e => e.id === current)) void clearBatch();
      }
      if (!route && !host) return;
      if (route) mount();
      if (!host) return;
      const player = route && document.querySelector('video');
      host.hidden = !player;
      if (!player) { if (job?.state === 'active') void batch(); return; }
      const currentTracks = currentTracksFor(route);
      const currentMedia = selectedMedia(route);
      if (!currentMedia || (currentMedia.seeded && job?.state !== 'active')) void requestMetadata(route);
      const nextTracks = JSON.stringify(currentTracks.map(track => [track.language, track.kind, track.variant]));
      const next = JSON.stringify([currentMedia?.title, currentMedia?.season, currentMedia?.episode, currentMedia?.episodeTitle,
        currentMedia?.queue?.length, currentMedia?.incomplete, currentMedia?.verified, nextTracks]);
      tracks = currentTracks; media = currentMedia;
      if (signature !== next) {
        if (trackSignature !== nextTracks) {
          // A list that only grew for the same title keeps the viewer's selection.
          if (selectedFor !== route) selected = new Set(presetIndexes(tracks));
          if (tracks.length) selectedFor = route;
          trackSignature = nextTracks;
        }
        signature = next; if (job && tab === 'episodes') tab = 'main'; render();
      }
      renderStatus();
      void batch();
    }
    function safeTick() { try { tick(); } catch { status('health','error'); } }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', safeTick, { once: true });
    else safeTick();
    setInterval(safeTick, 600);
  }

  // One entry per menu language; anything missing falls back to English.
  const LABELS = {
    tracks: {"pt": "Legendas", "en": "Subtitles", "fr": "Sous-titres", "es": "Subtítulos", "de": "Untertitel", "it": "Sottotitoli", "pt-BR": "Legendas", "ja": "字幕", "ko": "자막", "zh-Hans": "字幕", "zh-Hant": "字幕", "ru": "Субтитры", "uk": "Субтитри"},
    manager: {"pt": "Gestor de legendas", "en": "Subtitle manager", "fr": "Gestionnaire de sous-titres", "es": "Gestor de subtítulos", "de": "Untertitel-Manager", "it": "Gestione sottotitoli", "pt-BR": "Gerenciador de legendas", "ja": "字幕マネージャー", "ko": "자막 관리자", "zh-Hans": "字幕管理器", "zh-Hant": "字幕管理員", "ru": "Менеджер субтитров", "uk": "Менеджер субтитрів"},
    batch: {"pt": "Lotes", "en": "Batches", "fr": "Lots", "es": "Lotes", "de": "Stapel", "it": "Lotti", "pt-BR": "Lotes", "ja": "一括処理", "ko": "일괄 작업", "zh-Hans": "批量任务", "zh-Hant": "批次", "ru": "Пакеты", "uk": "Пакети"},
    close: {"pt": "Fechar", "en": "Close", "fr": "Fermer", "es": "Cerrar", "de": "Schließen", "it": "Chiudi", "pt-BR": "Fechar", "ja": "閉じる", "ko": "닫기", "zh-Hans": "关闭", "zh-Hant": "關閉", "ru": "Закрыть", "uk": "Закрити"},
    language: {"pt": "Idioma do menu", "en": "Menu language", "fr": "Langue du menu", "es": "Idioma del menú", "de": "Menüsprache", "it": "Lingua del menu", "pt-BR": "Idioma do menu", "ja": "メニューの言語", "ko": "메뉴 언어", "zh-Hans": "菜单语言", "zh-Hant": "選單語言", "ru": "Язык меню", "uk": "Мова меню"},
    all: {"pt": "Todas", "en": "All", "fr": "Toutes", "es": "Todos", "de": "Alle", "it": "Tutti", "pt-BR": "Todas", "ja": "すべて", "ko": "모두", "zh-Hans": "全部", "zh-Hant": "全部", "ru": "Все", "uk": "Усі"},
    none: {"pt": "Nenhuma", "en": "None", "fr": "Aucune", "es": "Ninguno", "de": "Keine", "it": "Nessuno", "pt-BR": "Nenhuma", "ja": "なし", "ko": "없음", "zh-Hans": "无", "zh-Hant": "無", "ru": "Нет", "uk": "Жодних"},
    preset: {"pt": "Predefinidas", "en": "Defaults", "fr": "Par défaut", "es": "Predeterminados", "de": "Standard", "it": "Predefiniti", "pt-BR": "Padrão", "ja": "既定", "ko": "기본값", "zh-Hans": "默认", "zh-Hant": "預設", "ru": "Основные", "uk": "Типові"},
    savePreset: {"pt": "Guardar como predefinidas", "en": "Save selection as default", "fr": "Enregistrer la sélection par défaut", "es": "Guardar como predeterminados", "de": "Als Standard speichern", "it": "Salva come predefiniti", "pt-BR": "Salvar como padrão", "ja": "既定として保存", "ko": "기본값으로 저장", "zh-Hans": "保存为默认", "zh-Hant": "儲存為預設", "ru": "Сохранить как основные", "uk": "Зберегти як типові"},
    presetInfo: {"pt": "Predefinidas:", "en": "Defaults:", "fr": "Par défaut :", "es": "Predeterminados:", "de": "Standard:", "it": "Predefiniti:", "pt-BR": "Padrão:", "ja": "既定:", "ko": "기본값:", "zh-Hans": "默认：", "zh-Hant": "預設：", "ru": "Основные:", "uk": "Типові:"},
    presetSaved: {"pt": "Predefinidas atualizadas. Passam a ficar marcadas sempre que existirem.", "en": "Defaults updated. They will be ticked whenever available.", "fr": "Sélection par défaut mise à jour. Elle sera cochée dès qu’elle est disponible.", "es": "Predeterminados actualizados. Se marcarán siempre que estén disponibles.", "de": "Standard aktualisiert. Diese Spuren werden markiert, sobald sie verfügbar sind.", "it": "Predefiniti aggiornati. Saranno selezionati ogni volta che sono disponibili.", "pt-BR": "Padrão atualizado. Essas legendas serão marcadas sempre que estiverem disponíveis.", "ja": "既定を更新しました。利用できるときは常に選択されます。", "ko": "기본값을 업데이트했습니다. 사용할 수 있을 때마다 선택됩니다.", "zh-Hans": "默认已更新。只要可用，就会自动勾选。", "zh-Hant": "預設已更新。只要可用就會自動勾選。", "ru": "Основные языки обновлены. Они будут отмечаться, когда доступны.", "uk": "Типові оновлено. Їх буде позначено щоразу, коли вони доступні."},
    presetMissing: {"pt": "As legendas predefinidas não existem neste título. Escolhe outras.", "en": "Your default subtitles are not available for this title. Pick others.", "fr": "Tes sous-titres par défaut n’existent pas pour ce titre. Choisis-en d’autres.", "es": "Tus subtítulos predeterminados no están disponibles en este título. Elige otros.", "de": "Deine Standard-Untertitel gibt es für diesen Titel nicht. Wähle andere.", "it": "I tuoi sottotitoli predefiniti non sono disponibili per questo titolo. Scegline altri.", "pt-BR": "Suas legendas padrão não estão disponíveis neste título. Escolha outras.", "ja": "既定の字幕はこのタイトルにありません。別の字幕を選んでください。", "ko": "기본 자막이 이 작품에는 없습니다. 다른 자막을 선택하세요.", "zh-Hans": "此作品没有你的默认字幕。请选择其他字幕。", "zh-Hant": "這部作品沒有你的預設字幕。請選擇其他字幕。", "ru": "Ваших основных субтитров нет для этого фильма или сериала. Выберите другие.", "uk": "Ваших типових субтитрів немає для цього фільму чи серіалу. Виберіть інші."},
    partial: {"pt": "Guardado, mas estas faixas falharam:", "en": "Saved, but these tracks failed:", "fr": "Enregistré, mais ces pistes ont échoué :", "es": "Guardado, pero estas pistas fallaron:", "de": "Gespeichert, aber diese Spuren sind fehlgeschlagen:", "it": "Salvato, ma queste tracce non sono riuscite:", "pt-BR": "Salvo, mas estas faixas falharam:", "ja": "保存しましたが、次のトラックは失敗しました:", "ko": "저장했지만 다음 트랙은 실패했습니다:", "zh-Hans": "已保存，但以下字幕轨失败：", "zh-Hant": "已儲存，但下列字幕軌失敗：", "ru": "Сохранено, но эти дорожки не удалось загрузить:", "uk": "Збережено, але ці доріжки не вдалося завантажити:"},
    episode: {"pt": "Título do episódio no nome", "en": "Episode title in name", "fr": "Titre de l’épisode dans le nom", "es": "Título del episodio en el nombre", "de": "Episodentitel im Namen", "it": "Titolo dell’episodio nel nome", "pt-BR": "Título do episódio no nome", "ja": "ファイル名にエピソード名", "ko": "파일 이름에 에피소드 제목", "zh-Hans": "文件名包含剧集标题", "zh-Hant": "檔名包含集數標題", "ru": "Название эпизода в имени", "uk": "Назва епізоду в імені"},
    service: {"pt": "Serviço no nome", "en": "Service in name", "fr": "Service dans le nom", "es": "Servicio en el nombre", "de": "Dienst im Namen", "it": "Servizio nel nome", "pt-BR": "Serviço no nome", "ja": "ファイル名にサービス名", "ko": "파일 이름에 서비스", "zh-Hans": "文件名包含服务名", "zh-Hant": "檔名包含服務名稱", "ru": "Сервис в имени", "uk": "Сервіс в імені"},
    tagNone: {"pt": "Não incluir", "en": "Leave out", "fr": "Ne pas inclure", "es": "No incluir", "de": "Weglassen", "it": "Non includere", "pt-BR": "Não incluir", "ja": "含めない", "ko": "포함 안 함", "zh-Hans": "不包含", "zh-Hant": "不包含", "ru": "Не добавлять", "uk": "Не додавати"},
    colors: {"pt": "Cores no SRT", "en": "Colours in SRT", "fr": "Couleurs dans le SRT", "es": "Colores en el SRT", "de": "Farben im SRT", "it": "Colori nell’SRT", "pt-BR": "Cores no SRT", "ja": "SRT の色", "ko": "SRT 색상", "zh-Hans": "SRT 中的颜色", "zh-Hant": "SRT 中的顏色", "ru": "Цвета в SRT", "uk": "Кольори в SRT"},
    colorsNonWhite: {"pt": "Sem o branco", "en": "Without white", "fr": "Sans le blanc", "es": "Sin el blanco", "de": "Ohne Weiß", "it": "Senza il bianco", "pt-BR": "Sem o branco", "ja": "白以外", "ko": "흰색 제외", "zh-Hans": "去掉白色", "zh-Hant": "去除白色", "ru": "Без белого", "uk": "Без білого"},
    colorsAll: {"pt": "Todas", "en": "All", "fr": "Toutes", "es": "Todos", "de": "Alle", "it": "Tutti", "pt-BR": "Todas", "ja": "すべて", "ko": "모두", "zh-Hans": "全部", "zh-Hant": "全部", "ru": "Все", "uk": "Усі"},
    colorsNone: {"pt": "Nenhuma", "en": "None", "fr": "Aucune", "es": "Ninguno", "de": "Keine", "it": "Nessuno", "pt-BR": "Nenhuma", "ja": "なし", "ko": "없음", "zh-Hans": "无", "zh-Hant": "無", "ru": "Без цветов", "uk": "Без кольорів"},
    delay: {"pt": "Pausa entre episódios", "en": "Pause between episodes", "fr": "Pause entre les épisodes", "es": "Pausa entre episodios", "de": "Pause zwischen Episoden", "it": "Pausa tra gli episodi", "pt-BR": "Pausa entre episódios", "ja": "エピソード間の待機", "ko": "에피소드 사이 대기", "zh-Hans": "剧集之间暂停", "zh-Hant": "集數之間暫停", "ru": "Пауза между эпизодами", "uk": "Пауза між епізодами"},
    delayNone: {"pt": "Sem pausa", "en": "No pause", "fr": "Sans pause", "es": "Sin pausa", "de": "Keine Pause", "it": "Nessuna pausa", "pt-BR": "Sem pausa", "ja": "待機なし", "ko": "대기 없음", "zh-Hans": "不暂停", "zh-Hant": "不暫停", "ru": "Без паузы", "uk": "Без паузи"},
    stalled: {"pt": "A Netflix não abriu este episódio depois de três tentativas. Espera um minuto e clica em «Retomar».", "en": "Netflix did not open this episode after three attempts. Wait a minute and click “Resume”.", "fr": "Netflix n’a pas ouvert cet épisode après trois tentatives. Attends une minute et clique sur « Reprendre ».", "es": "Netflix no abrió este episodio tras tres intentos. Espera un minuto y pulsa «Reanudar».", "de": "Netflix hat diese Episode nach drei Versuchen nicht geöffnet. Warte eine Minute und klicke auf „Fortsetzen“.", "it": "Netflix non ha aperto questo episodio dopo tre tentativi. Attendi un minuto e fai clic su «Riprendi».", "pt-BR": "A Netflix não abriu este episódio depois de três tentativas. Espere um minuto e clique em “Retomar”.", "ja": "3 回試しましたが、Netflix がこのエピソードを開きませんでした。1 分待ってから「再開」をクリックしてください。", "ko": "세 번 시도했지만 Netflix가 이 에피소드를 열지 않았습니다. 1분 기다린 뒤 ‘재개’를 클릭하세요.", "zh-Hans": "尝试三次后，Netflix 仍未打开这一集。请等待一分钟，然后点击“继续”。", "zh-Hant": "嘗試三次後，Netflix 仍未開啟這一集。請等待一分鐘，然後點選「繼續」。", "ru": "Netflix не открыл этот эпизод после трёх попыток. Подождите минуту и нажмите «Продолжить».", "uk": "Netflix не відкрив цей епізод після трьох спроб. Зачекайте хвилину й натисніть «Продовжити»."},
    review: {"pt": "Rever episódios antes de iniciar", "en": "Review episodes before starting", "fr": "Vérifier les épisodes avant de commencer", "es": "Revisar los episodios antes de empezar", "de": "Episoden vor dem Start prüfen", "it": "Rivedi gli episodi prima di iniziare", "pt-BR": "Revisar os episódios antes de começar", "ja": "開始前にエピソードを確認", "ko": "시작 전에 에피소드 확인", "zh-Hans": "开始前检查剧集", "zh-Hant": "開始前檢查集數", "ru": "Проверить эпизоды перед началом", "uk": "Переглянути епізоди перед початком"},
    season: {"pt": "Temporada", "en": "Season", "fr": "Saison", "es": "Temporada", "de": "Staffel", "it": "Stagione", "pt-BR": "Temporada", "ja": "シーズン", "ko": "시즌", "zh-Hans": "季", "zh-Hant": "季", "ru": "Сезон", "uk": "Сезон"},
    series: {"pt": "Série completa", "en": "Whole series", "fr": "Série complète", "es": "Serie completa", "de": "Ganze Serie", "it": "Serie completa", "pt-BR": "Série completa", "ja": "シリーズ全体", "ko": "시리즈 전체", "zh-Hans": "整部剧集", "zh-Hant": "整部影集", "ru": "Весь сериал", "uk": "Увесь серіал"},
    startBatch: {"pt": "Descarregar episódios", "en": "Download episodes", "fr": "Télécharger les épisodes", "es": "Descargar episodios", "de": "Episoden herunterladen", "it": "Scarica gli episodi", "pt-BR": "Baixar episódios", "ja": "エピソードをダウンロード", "ko": "에피소드 다운로드", "zh-Hans": "下载剧集", "zh-Hant": "下載集數", "ru": "Скачать эпизоды", "uk": "Завантажити епізоди"},
    back: {"pt": "Voltar", "en": "Back", "fr": "Retour", "es": "Volver", "de": "Zurück", "it": "Indietro", "pt-BR": "Voltar", "ja": "戻る", "ko": "뒤로", "zh-Hans": "返回", "zh-Hant": "返回", "ru": "Назад", "uk": "Назад"},
    of: {"pt": "de", "en": "of", "fr": "sur", "es": "de", "de": "von", "it": "di", "pt-BR": "de", "ja": "/", "ko": "/", "zh-Hans": "/", "zh-Hant": "/", "ru": "из", "uk": "з"},
    settings: {"pt": "Definições", "en": "Settings", "fr": "Paramètres", "es": "Ajustes", "de": "Einstellungen", "it": "Impostazioni", "pt-BR": "Configurações", "ja": "設定", "ko": "설정", "zh-Hans": "设置", "zh-Hant": "設定", "ru": "Настройки", "uk": "Налаштування"},
    sdhGroup: {"pt": "Para surdos (SDH)", "en": "For the deaf (SDH)", "fr": "Pour sourds (SME)", "es": "Para sordos (SDH)", "de": "Für Hörgeschädigte (SDH)", "it": "Per non udenti (SDH)", "pt-BR": "Para surdos (SDH)", "ja": "聴覚障害者向け (SDH)", "ko": "청각 장애인용 (SDH)", "zh-Hans": "听障字幕 (SDH)", "zh-Hant": "聽障字幕 (SDH)", "ru": "Для глухих (SDH)", "uk": "Для людей з вадами слуху (SDH)"},
    forcedGroup: {"pt": "Forçadas", "en": "Forced", "fr": "Forcés", "es": "Forzados", "de": "Erzwungene", "it": "Forzati", "pt-BR": "Forçadas", "ja": "強制字幕", "ko": "강제 자막", "zh-Hans": "强制字幕", "zh-Hant": "強制字幕", "ru": "Принудительные", "uk": "Примусові"},
    noText: {"pt": "sem texto", "en": "no text", "fr": "sans texte", "es": "sin texto", "de": "kein Text", "it": "senza testo", "pt-BR": "sem texto", "ja": "テキストなし", "ko": "텍스트 없음", "zh-Hans": "无文本", "zh-Hant": "無文字", "ru": "без текста", "uk": "без тексту"},
    noTextError: {"pt": "A Netflix só tem esta legenda em imagem ou num formato sem texto, por isso não pode ser guardada.", "en": "Netflix only has this subtitle as images or in a format without text, so it cannot be saved.", "fr": "Netflix ne propose ce sous-titre qu’en image ou dans un format sans texte ; il ne peut pas être enregistré.", "es": "Netflix solo tiene este subtítulo en imágenes o en un formato sin texto, así que no se puede guardar.", "de": "Netflix hat diesen Untertitel nur als Bilder oder in einem Format ohne Text, daher kann er nicht gespeichert werden.", "it": "Netflix ha questo sottotitolo solo come immagini o in un formato senza testo, quindi non può essere salvato.", "pt-BR": "A Netflix só tem esta legenda em imagem ou em um formato sem texto, então ela não pode ser salva.", "ja": "この字幕は Netflix に画像またはテキストのない形式しかないため、保存できません。", "ko": "Netflix에는 이 자막이 이미지나 텍스트가 없는 형식으로만 있어 저장할 수 없습니다.", "zh-Hans": "Netflix 只有图像格式或无文本格式的此字幕，因此无法保存。", "zh-Hant": "Netflix 只有圖像格式或無文字格式的此字幕，因此無法儲存。", "ru": "У Netflix эти субтитры есть только в виде изображений или в формате без текста, поэтому их нельзя сохранить.", "uk": "Netflix має ці субтитри лише як зображення або у форматі без тексту, тож їх не можна зберегти."},
    onRequest: {"pt": "a pedido", "en": "on request", "fr": "sur demande", "es": "bajo demanda", "de": "auf Anfrage", "it": "su richiesta", "pt-BR": "sob demanda", "ja": "要求時", "ko": "요청 시", "zh-Hans": "按需", "zh-Hant": "依需求", "ru": "по запросу", "uk": "на запит"},
    requestError: {"pt": "A Netflix não entregou esta legenda a pedido. Escolhe-a uma vez no menu de legendas do leitor e volta a descarregar.", "en": "Netflix did not deliver this subtitle on request. Pick it once in the player’s subtitle menu and download again.", "fr": "Netflix n’a pas fourni ce sous-titre sur demande. Choisis-le une fois dans le menu des sous-titres du lecteur, puis relance le téléchargement.", "es": "Netflix no entregó este subtítulo bajo demanda. Elígelo una vez en el menú de subtítulos del reproductor y vuelve a descargar.", "de": "Netflix hat diesen Untertitel auf Anfrage nicht geliefert. Wähle ihn einmal im Untertitelmenü des Players und lade erneut herunter.", "it": "Netflix non ha fornito questo sottotitolo su richiesta. Selezionalo una volta nel menu dei sottotitoli del lettore e riprova a scaricare.", "pt-BR": "A Netflix não entregou esta legenda sob demanda. Escolha-a uma vez no menu de legendas do player e baixe de novo.", "ja": "Netflix は要求に応じてこの字幕を提供しませんでした。プレーヤーの字幕メニューで一度選んでから、もう一度ダウンロードしてください。", "ko": "Netflix가 요청한 이 자막을 제공하지 않았습니다. 플레이어의 자막 메뉴에서 한 번 선택한 뒤 다시 다운로드하세요.", "zh-Hans": "Netflix 未按需提供此字幕。请在播放器的字幕菜单中选择一次，然后重新下载。", "zh-Hant": "Netflix 未依需求提供此字幕。請在播放器的字幕選單中選擇一次，然後重新下載。", "ru": "Netflix не отдал эти субтитры по запросу. Выберите их один раз в меню субтитров плеера и скачайте снова.", "uk": "Netflix не надав ці субтитри на запит. Виберіть їх один раз у меню субтитрів плеєра й завантажте знову."},
    chgConvert: {"pt": "A conversão para SRT deixou marcação que o script não conhece ou perdeu entradas. Guarda também o original.", "en": "The SRT conversion left markup the script does not know, or lost entries. Save the original as well.", "fr": "La conversion en SRT a laissé un balisage inconnu ou perdu des entrées. Enregistre aussi l’original.", "es": "La conversión a SRT dejó marcas que el script no conoce o perdió entradas. Guarda también el original.", "de": "Die SRT-Umwandlung hat unbekannte Auszeichnungen hinterlassen oder Einträge verloren. Speichere auch das Original.", "it": "La conversione in SRT ha lasciato tag sconosciuti allo script o ha perso delle voci. Salva anche l’originale.", "pt-BR": "A conversão para SRT deixou marcações que o script não conhece ou perdeu entradas. Salve também o original.", "ja": "SRT への変換で、スクリプトが認識できないタグが残ったか、エントリが失われました。元のファイルも保存してください。", "ko": "SRT 변환 중 스크립트가 모르는 태그가 남았거나 항목이 사라졌습니다. 원본도 함께 저장하세요.", "zh-Hans": "转换为 SRT 后留下了脚本不认识的标记，或丢失了条目。请同时保存原始文件。", "zh-Hant": "轉換為 SRT 後留下了指令碼不認識的標記，或遺失了項目。請同時儲存原始檔案。", "ru": "При преобразовании в SRT остались неизвестные скрипту теги или пропали записи. Сохраните и оригинал.", "uk": "Під час перетворення в SRT лишилися невідомі скрипту теги або зникли записи. Збережіть також оригінал."},
    chgMaybe: {"pt": "Pode ser passageiro: recarrega a página e tenta outra vez.", "en": "It may be temporary: reload the page and try again.", "fr": "C’est peut-être passager : recharge la page et réessaie.", "es": "Puede ser pasajero: recarga la página y vuelve a intentarlo.", "de": "Das kann vorübergehend sein: Lade die Seite neu und versuche es erneut.", "it": "Potrebbe essere temporaneo: ricarica la pagina e riprova.", "pt-BR": "Pode ser temporário: recarregue a página e tente de novo.", "ja": "一時的な問題かもしれません。ページを再読み込みして、もう一度お試しください。", "ko": "일시적인 문제일 수 있습니다. 페이지를 새로고침하고 다시 시도하세요.", "zh-Hans": "可能是暂时的：请刷新页面后重试。", "zh-Hant": "可能只是暫時的：請重新整理頁面後再試一次。", "ru": "Возможно, это временно: перезагрузите страницу и попробуйте ещё раз.", "uk": "Можливо, це тимчасово: перезавантажте сторінку й спробуйте ще раз."},
    chgConfirmed: {"pt": "Já aconteceu em {n} títulos: é provável que a Netflix tenha mudado. Exporta o diagnóstico.", "en": "It has now happened on {n} titles: Netflix has probably changed. Export the diagnostic.", "fr": "C’est arrivé sur {n} titres : Netflix a probablement changé. Exporte le diagnostic.", "es": "Ya ha ocurrido en {n} títulos: probablemente Netflix ha cambiado. Exporta el diagnóstico.", "de": "Das ist jetzt bei {n} Titeln passiert: Netflix hat sich wahrscheinlich geändert. Exportiere die Diagnose.", "it": "È già successo su {n} titoli: probabilmente Netflix è cambiato. Esporta la diagnostica.", "pt-BR": "Já aconteceu em {n} títulos: provavelmente a Netflix mudou. Exporte o diagnóstico.", "ja": "これで {n} 件のタイトルで発生しました。Netflix が変更された可能性があります。診断をエクスポートしてください。", "ko": "이제 {n}개 작품에서 발생했습니다. Netflix가 바뀌었을 가능성이 높습니다. 진단을 내보내세요.", "zh-Hans": "已在 {n} 部作品中出现：Netflix 很可能已更改。请导出诊断信息。", "zh-Hant": "已在 {n} 部作品中發生：Netflix 很可能已變更。請匯出診斷資訊。", "ru": "Это уже случилось с {n} фильмами или сериалами: вероятно, Netflix что-то изменил. Экспортируйте диагностику.", "uk": "Це вже сталося з {n} фільмами чи серіалами: імовірно, Netflix щось змінив. Експортуйте діагностику."},
    chgManifest: {"pt": "A lista de legendas não chegou ao script.", "en": "The subtitle list did not reach the script.", "fr": "La liste des sous-titres n’est pas parvenue au script.", "es": "La lista de subtítulos no llegó al script.", "de": "Die Untertitelliste ist nicht beim Skript angekommen.", "it": "L’elenco dei sottotitoli non è arrivato allo script.", "pt-BR": "A lista de legendas não chegou ao script.", "ja": "字幕の一覧がスクリプトに届きませんでした。", "ko": "자막 목록이 스크립트에 전달되지 않았습니다.", "zh-Hans": "字幕列表未传到脚本。", "zh-Hant": "字幕清單未傳到指令碼。", "ru": "Список субтитров не дошёл до скрипта.", "uk": "Список субтитрів не дійшов до скрипту."},
    chgSources: {"pt": "As legendas vieram num formato ou endereço que o script não reconhece.", "en": "Subtitles arrived in a format or address the script does not recognise.", "fr": "Les sous-titres sont arrivés dans un format ou une adresse que le script ne reconnaît pas.", "es": "Los subtítulos llegaron en un formato o una dirección que el script no reconoce.", "de": "Die Untertitel kamen in einem Format oder unter einer Adresse an, die das Skript nicht kennt.", "it": "I sottotitoli sono arrivati in un formato o a un indirizzo che lo script non riconosce.", "pt-BR": "As legendas vieram em um formato ou endereço que o script não reconhece.", "ja": "字幕がスクリプトの認識できない形式またはアドレスで届きました。", "ko": "자막이 스크립트가 인식하지 못하는 형식이나 주소로 전달되었습니다.", "zh-Hans": "字幕的格式或地址无法被脚本识别。", "zh-Hant": "字幕的格式或位址無法被指令碼辨識。", "ru": "Субтитры пришли в формате или по адресу, которые скрипт не распознаёт.", "uk": "Субтитри надійшли у форматі або за адресою, яких скрипт не розпізнає."},
    chgMetadata: {"pt": "Não foi possível obter o título e os episódios. Os ficheiros saem com um nome genérico e os lotes ficam indisponíveis.", "en": "The title and episodes could not be loaded. Files get a generic name and batches are unavailable.", "fr": "Impossible d’obtenir le titre et les épisodes. Les fichiers auront un nom générique et les lots sont indisponibles.", "es": "No se pudieron cargar el título y los episodios. Los archivos tendrán un nombre genérico y los lotes no estarán disponibles.", "de": "Titel und Episoden konnten nicht geladen werden. Dateien erhalten einen allgemeinen Namen, und Stapel sind nicht verfügbar.", "it": "Impossibile caricare il titolo e gli episodi. I file avranno un nome generico e i lotti non saranno disponibili.", "pt-BR": "Não foi possível obter o título e os episódios. Os arquivos ficam com um nome genérico e os lotes ficam indisponíveis.", "ja": "タイトルとエピソードを読み込めませんでした。ファイル名は一般的な名前になり、一括処理は使えません。", "ko": "제목과 에피소드를 불러오지 못했습니다. 파일은 일반 이름으로 저장되고 일괄 작업은 사용할 수 없습니다.", "zh-Hans": "无法加载标题和剧集。文件将使用通用名称，且无法批量下载。", "zh-Hant": "無法載入標題和集數。檔案會使用通用名稱，且無法批次下載。", "ru": "Не удалось загрузить название и эпизоды. Файлы получат общее имя, пакетная загрузка недоступна.", "uk": "Не вдалося завантажити назву й епізоди. Файли отримають загальну назву, пакетне завантаження недоступне."},
    chgDownload: {"pt": "Nenhuma das legendas escolhidas pôde ser transferida.", "en": "None of the chosen subtitles could be downloaded.", "fr": "Aucun des sous-titres choisis n’a pu être téléchargé.", "es": "No se pudo descargar ninguno de los subtítulos elegidos.", "de": "Keiner der gewählten Untertitel konnte heruntergeladen werden.", "it": "Non è stato possibile scaricare nessuno dei sottotitoli scelti.", "pt-BR": "Nenhuma das legendas escolhidas pôde ser baixada.", "ja": "選んだ字幕を 1 つもダウンロードできませんでした。", "ko": "선택한 자막을 하나도 다운로드하지 못했습니다.", "zh-Hans": "所选字幕均无法下载。", "zh-Hant": "所選字幕都無法下載。", "ru": "Не удалось скачать ни одни из выбранных субтитров.", "uk": "Не вдалося завантажити жодних вибраних субтитрів."},
    pause: {"pt": "Pausar", "en": "Pause", "fr": "Mettre en pause", "es": "Pausar", "de": "Pausieren", "it": "Pausa", "pt-BR": "Pausar", "ja": "一時停止", "ko": "일시 중지", "zh-Hans": "暂停", "zh-Hant": "暫停", "ru": "Пауза", "uk": "Пауза"},
    resume: {"pt": "Retomar", "en": "Resume", "fr": "Reprendre", "es": "Reanudar", "de": "Fortsetzen", "it": "Riprendi", "pt-BR": "Retomar", "ja": "再開", "ko": "재개", "zh-Hans": "继续", "zh-Hant": "繼續", "ru": "Продолжить", "uk": "Продовжити"},
    saveZip: {"pt": "Guardar ZIP", "en": "Save ZIP", "fr": "Enregistrer le ZIP", "es": "Guardar ZIP", "de": "ZIP speichern", "it": "Salva ZIP", "pt-BR": "Salvar ZIP", "ja": "ZIP を保存", "ko": "ZIP 저장", "zh-Hans": "保存 ZIP", "zh-Hant": "儲存 ZIP", "ru": "Сохранить ZIP", "uk": "Зберегти ZIP"},
    clear: {"pt": "Limpar lote", "en": "Clear batch", "fr": "Effacer le lot", "es": "Borrar lote", "de": "Stapel löschen", "it": "Cancella lotto", "pt-BR": "Limpar lote", "ja": "一括処理を消去", "ko": "일괄 작업 지우기", "zh-Hans": "清除批量任务", "zh-Hant": "清除批次", "ru": "Очистить пакет", "uk": "Очистити пакет"},
    format: {"pt": "Formato", "en": "Format", "fr": "Format", "es": "Formato", "de": "Format", "it": "Formato", "pt-BR": "Formato", "ja": "形式", "ko": "형식", "zh-Hans": "格式", "zh-Hant": "格式", "ru": "Формат", "uk": "Формат"},
    native: {"pt": "Original (WebVTT ou TTML)", "en": "Original (WebVTT or TTML)", "fr": "Original (WebVTT ou TTML)", "es": "Original (WebVTT o TTML)", "de": "Original (WebVTT oder TTML)", "it": "Originale (WebVTT o TTML)", "pt-BR": "Original (WebVTT ou TTML)", "ja": "元のファイル (WebVTT または TTML)", "ko": "원본 (WebVTT 또는 TTML)", "zh-Hans": "原始文件 (WebVTT 或 TTML)", "zh-Hant": "原始檔案 (WebVTT 或 TTML)", "ru": "Оригинал (WebVTT или TTML)", "uk": "Оригінал (WebVTT або TTML)"},
    both: {"pt": "SRT e original", "en": "SRT and original", "fr": "SRT et original", "es": "SRT y original", "de": "SRT und Original", "it": "SRT e originale", "pt-BR": "SRT e original", "ja": "SRT と元のファイル", "ko": "SRT와 원본", "zh-Hans": "SRT 和原始文件", "zh-Hant": "SRT 和原始檔案", "ru": "SRT и оригинал", "uk": "SRT і оригінал"},
    download: {"pt": "Descarregar", "en": "Download", "fr": "Télécharger", "es": "Descargar", "de": "Herunterladen", "it": "Scarica", "pt-BR": "Baixar", "ja": "ダウンロード", "ko": "다운로드", "zh-Hans": "下载", "zh-Hant": "下載", "ru": "Скачать", "uk": "Завантажити"},
    auto: {"pt": "Automático", "en": "Automatic", "fr": "Automatique", "es": "Automático", "de": "Automatisch", "it": "Automatico", "pt-BR": "Automático", "ja": "自動", "ko": "자동", "zh-Hans": "自动", "zh-Hant": "自動", "ru": "Автоматически", "uk": "Автоматично"},
    diagnostic: {"pt": "Exportar diagnóstico", "en": "Export diagnostic", "fr": "Exporter le diagnostic", "es": "Exportar diagnóstico", "de": "Diagnose exportieren", "it": "Esporta diagnostica", "pt-BR": "Exportar diagnóstico", "ja": "診断をエクスポート", "ko": "진단 내보내기", "zh-Hans": "导出诊断信息", "zh-Hant": "匯出診斷資訊", "ru": "Диагностика", "uk": "Експорт діагностики"},
    forced: {"pt": "Forçada", "en": "Forced", "fr": "Forcé", "es": "Forzado", "de": "Erzwungen", "it": "Forzato", "pt-BR": "Forçada", "ja": "強制", "ko": "강제", "zh-Hans": "强制", "zh-Hant": "強制", "ru": "принудительные", "uk": "примусові"},
    sdh: {"pt": "SDH", "en": "SDH", "fr": "SME", "es": "SDH", "de": "SDH", "it": "SDH", "pt-BR": "SDH", "ja": "SDH", "ko": "SDH", "zh-Hans": "SDH", "zh-Hant": "SDH", "ru": "SDH", "uk": "SDH"},
    waiting: {"pt": "A aguardar os dados do leitor…", "en": "Waiting for player data…", "fr": "En attente des données du lecteur…", "es": "Esperando los datos del reproductor…", "de": "Warte auf Player-Daten…", "it": "In attesa dei dati del lettore…", "pt-BR": "Aguardando os dados do player…", "ja": "プレーヤーのデータを待っています…", "ko": "플레이어 데이터를 기다리는 중…", "zh-Hans": "正在等待播放器数据…", "zh-Hant": "正在等待播放器資料…", "ru": "Ожидание данных плеера…", "uk": "Очікування даних плеєра…"},
    health: {"pt": "Os dados esperados não apareceram. Inicia a reprodução e, se continuar, exporta um diagnóstico.", "en": "Expected data did not appear. Start playback and export a diagnostic if the issue persists.", "fr": "Les données attendues ne sont pas apparues. Lance la lecture et exporte un diagnostic si le problème persiste.", "es": "No aparecieron los datos esperados. Inicia la reproducción y exporta un diagnóstico si el problema continúa.", "de": "Die erwarteten Daten sind nicht erschienen. Starte die Wiedergabe und exportiere eine Diagnose, falls das Problem bleibt.", "it": "I dati previsti non sono comparsi. Avvia la riproduzione ed esporta una diagnostica se il problema persiste.", "pt-BR": "Os dados esperados não apareceram. Inicie a reprodução e exporte um diagnóstico se o problema continuar.", "ja": "想定したデータが届きませんでした。再生を開始し、問題が続く場合は診断をエクスポートしてください。", "ko": "예상한 데이터가 나타나지 않았습니다. 재생을 시작하고 문제가 계속되면 진단을 내보내세요.", "zh-Hans": "未出现预期的数据。请开始播放；如果问题仍然存在，请导出诊断信息。", "zh-Hant": "未出現預期的資料。請開始播放；如果問題持續，請匯出診斷資訊。", "ru": "Ожидаемые данные не появились. Запустите воспроизведение и экспортируйте диагностику, если проблема сохранится.", "uk": "Очікувані дані не з’явилися. Запустіть відтворення й експортуйте діагностику, якщо проблема не зникне."},
    missingTitle: {"pt": "O título não foi identificado.", "en": "The title could not be identified.", "fr": "Le titre n’a pas été identifié.", "es": "No se pudo identificar el título.", "de": "Der Titel konnte nicht ermittelt werden.", "it": "Impossibile identificare il titolo.", "pt-BR": "Não foi possível identificar o título.", "ja": "タイトルを特定できませんでした。", "ko": "제목을 확인할 수 없습니다.", "zh-Hans": "无法识别标题。", "zh-Hant": "無法辨識標題。", "ru": "Не удалось определить название.", "uk": "Не вдалося визначити назву."},
    missingTrack: {"pt": "Uma faixa escolhida está ausente ou é ambígua neste episódio.", "en": "A selected track is missing or ambiguous in this episode.", "fr": "Une piste sélectionnée est absente ou ambiguë dans cet épisode.", "es": "Una pista elegida falta o es ambigua en este episodio.", "de": "Eine gewählte Spur fehlt oder ist in dieser Episode nicht eindeutig.", "it": "Una traccia scelta manca o è ambigua in questo episodio.", "pt-BR": "Uma faixa escolhida está faltando ou é ambígua neste episódio.", "ja": "選んだトラックがこのエピソードにないか、特定できません。", "ko": "선택한 트랙이 이 에피소드에 없거나 구별되지 않습니다.", "zh-Hans": "所选字幕轨在这一集中缺失或无法区分。", "zh-Hant": "所選字幕軌在這一集中缺少或無法區分。", "ru": "Выбранная дорожка отсутствует или неоднозначна в этом эпизоде.", "uk": "Вибраної доріжки немає або вона неоднозначна в цьому епізоді."},
    formatError: {"pt": "O formato recebido não pode ser convertido. Experimenta guardar o original.", "en": "The received format cannot be converted. Try saving the original.", "fr": "Le format reçu ne peut pas être converti. Essaie d’enregistrer l’original.", "es": "El formato recibido no se puede convertir. Prueba a guardar el original.", "de": "Das empfangene Format kann nicht umgewandelt werden. Versuche, das Original zu speichern.", "it": "Il formato ricevuto non può essere convertito. Prova a salvare l’originale.", "pt-BR": "O formato recebido não pode ser convertido. Tente salvar o original.", "ja": "受信した形式は変換できません。元のファイルを保存してみてください。", "ko": "받은 형식을 변환할 수 없습니다. 원본을 저장해 보세요.", "zh-Hans": "收到的格式无法转换。请尝试保存原始文件。", "zh-Hant": "收到的格式無法轉換。請嘗試儲存原始檔案。", "ru": "Полученный формат нельзя преобразовать. Попробуйте сохранить оригинал.", "uk": "Отриманий формат неможливо перетворити. Спробуйте зберегти оригінал."},
    transferError: {"pt": "A transferência falhou. Atualiza a reprodução e tenta novamente.", "en": "The download failed. Refresh playback and try again.", "fr": "Le téléchargement a échoué. Actualise la lecture et réessaie.", "es": "La descarga falló. Recarga la reproducción y vuelve a intentarlo.", "de": "Der Download ist fehlgeschlagen. Lade die Wiedergabe neu und versuche es erneut.", "it": "Download non riuscito. Ricarica la riproduzione e riprova.", "pt-BR": "O download falhou. Recarregue a reprodução e tente de novo.", "ja": "ダウンロードに失敗しました。再生を再読み込みして、もう一度お試しください。", "ko": "다운로드에 실패했습니다. 재생을 새로고침하고 다시 시도하세요.", "zh-Hans": "下载失败。请重新加载播放后重试。", "zh-Hant": "下載失敗。請重新載入播放後再試一次。", "ru": "Загрузка не удалась. Перезапустите воспроизведение и попробуйте ещё раз.", "uk": "Завантаження не вдалося. Перезапустіть відтворення й спробуйте ще раз."},
    sizeError: {"pt": "O lote ou episódio excede o limite de tamanho. Escolhe menos episódios ou faixas.", "en": "The batch or episode exceeds the size limit. Select fewer episodes or tracks.", "fr": "Le lot ou l’épisode dépasse la taille maximale. Sélectionne moins d’épisodes ou de pistes.", "es": "El lote o el episodio supera el límite de tamaño. Elige menos episodios o pistas.", "de": "Der Stapel oder die Episode überschreitet die Größengrenze. Wähle weniger Episoden oder Spuren.", "it": "Il lotto o l’episodio supera il limite di dimensione. Scegli meno episodi o tracce.", "pt-BR": "O lote ou episódio excede o limite de tamanho. Escolha menos episódios ou faixas.", "ja": "一括処理またはエピソードがサイズ上限を超えています。エピソードかトラックを減らしてください。", "ko": "일괄 작업 또는 에피소드가 크기 제한을 넘습니다. 에피소드나 트랙을 줄이세요.", "zh-Hans": "批量任务或剧集超出大小限制。请减少剧集或字幕轨。", "zh-Hant": "批次或集數超過大小限制。請減少集數或字幕軌。", "ru": "Пакет или эпизод превышает ограничение размера. Выберите меньше эпизодов или дорожек.", "uk": "Пакет або епізод перевищує обмеження розміру. Виберіть менше епізодів або доріжок."},
    incomplete: {"pt": "A lista de episódios parece incompleta.", "en": "The episode list appears incomplete.", "fr": "La liste des épisodes semble incomplète.", "es": "La lista de episodios parece incompleta.", "de": "Die Episodenliste scheint unvollständig zu sein.", "it": "L’elenco degli episodi sembra incompleto.", "pt-BR": "A lista de episódios parece incompleta.", "ja": "エピソード一覧が不完全なようです。", "ko": "에피소드 목록이 불완전한 것 같습니다.", "zh-Hans": "剧集列表似乎不完整。", "zh-Hant": "集數清單似乎不完整。", "ru": "Список эпизодов, похоже, неполный.", "uk": "Список епізодів, схоже, неповний."},
    reviewList: {"pt": "Confirma os episódios da lista antes de iniciar.", "en": "Check the episode list before starting.", "fr": "Vérifie la liste des épisodes avant de commencer.", "es": "Revisa la lista de episodios antes de empezar.", "de": "Prüfe die Episodenliste vor dem Start.", "it": "Controlla l’elenco degli episodi prima di iniziare.", "pt-BR": "Confira a lista de episódios antes de começar.", "ja": "開始前にエピソード一覧を確認してください。", "ko": "시작하기 전에 에피소드 목록을 확인하세요.", "zh-Hans": "开始前请检查剧集列表。", "zh-Hant": "開始前請檢查集數清單。", "ru": "Проверьте список эпизодов перед началом.", "uk": "Перевірте список епізодів перед початком."},
    storageError: {"pt": "Não foi possível aceder ao lote guardado neste separador.", "en": "The batch stored in this tab could not be accessed.", "fr": "Le lot enregistré dans cet onglet est inaccessible.", "es": "No se pudo acceder al lote guardado en esta pestaña.", "de": "Auf den in diesem Tab gespeicherten Stapel konnte nicht zugegriffen werden.", "it": "Impossibile accedere al lotto salvato in questa scheda.", "pt-BR": "Não foi possível acessar o lote salvo nesta aba.", "ja": "このタブに保存された一括処理にアクセスできませんでした。", "ko": "이 탭에 저장된 일괄 작업에 접근할 수 없습니다.", "zh-Hans": "无法访问此标签页中保存的批量任务。", "zh-Hant": "無法存取此分頁中儲存的批次。", "ru": "Нет доступа к пакету, сохранённому в этой вкладке.", "uk": "Немає доступу до пакета, збереженого в цій вкладці."},
    downloading: {"pt": "A descarregar legendas…", "en": "Downloading subtitles…", "fr": "Téléchargement des sous-titres…", "es": "Descargando subtítulos…", "de": "Untertitel werden heruntergeladen…", "it": "Download dei sottotitoli in corso…", "pt-BR": "Baixando legendas…", "ja": "字幕をダウンロードしています…", "ko": "자막을 다운로드하는 중…", "zh-Hans": "正在下载字幕…", "zh-Hant": "正在下載字幕…", "ru": "Скачивание субтитров…", "uk": "Завантаження субтитрів…"},
    paused: {"pt": "Lote pausado. O episódio atual será repetido.", "en": "Batch paused. The current episode will be retried.", "fr": "Lot en pause. L’épisode actuel sera repris.", "es": "Lote en pausa. Se volverá a intentar el episodio actual.", "de": "Stapel pausiert. Die aktuelle Episode wird erneut versucht.", "it": "Lotto in pausa. L’episodio corrente verrà riprovato.", "pt-BR": "Lote pausado. O episódio atual será tentado de novo.", "ja": "一括処理を一時停止しました。現在のエピソードをもう一度試します。", "ko": "일괄 작업을 일시 중지했습니다. 현재 에피소드를 다시 시도합니다.", "zh-Hans": "批量任务已暂停。将重试当前剧集。", "zh-Hant": "批次已暫停。將重試目前這一集。", "ru": "Пакет приостановлен. Текущий эпизод будет загружен повторно.", "uk": "Пакет призупинено. Поточний епізод буде завантажено повторно."},
    playbackChanged: {"pt": "Os dados do leitor mudaram. Confirma o vídeo e tenta novamente.", "en": "Player data changed. Check the video and try again.", "fr": "Les données du lecteur ont changé. Vérifie la vidéo et réessaie.", "es": "Los datos del reproductor cambiaron. Revisa el vídeo y vuelve a intentarlo.", "de": "Die Player-Daten haben sich geändert. Prüfe das Video und versuche es erneut.", "it": "I dati del lettore sono cambiati. Controlla il video e riprova.", "pt-BR": "Os dados do player mudaram. Confira o vídeo e tente de novo.", "ja": "プレーヤーのデータが変わりました。動画を確認して、もう一度お試しください。", "ko": "플레이어 데이터가 바뀌었습니다. 동영상을 확인하고 다시 시도하세요.", "zh-Hans": "播放器数据已更改。请检查视频后重试。", "zh-Hant": "播放器資料已變更。請檢查影片後再試一次。", "ru": "Данные плеера изменились. Проверьте видео и попробуйте ещё раз.", "uk": "Дані плеєра змінилися. Перевірте відео й спробуйте ще раз."},
    wrongEpisode: {"pt": "Lote pausado. O leitor abriu um episódio diferente.", "en": "Batch paused. The player opened a different episode.", "fr": "Lot en pause. Le lecteur a ouvert un autre épisode.", "es": "Lote en pausa. El reproductor abrió otro episodio.", "de": "Stapel pausiert. Der Player hat eine andere Episode geöffnet.", "it": "Lotto in pausa. Il lettore ha aperto un altro episodio.", "pt-BR": "Lote pausado. O player abriu outro episódio.", "ja": "一括処理を一時停止しました。プレーヤーが別のエピソードを開きました。", "ko": "일괄 작업을 일시 중지했습니다. 플레이어가 다른 에피소드를 열었습니다.", "zh-Hans": "批量任务已暂停。播放器打开了另一集。", "zh-Hant": "批次已暫停。播放器開啟了另一集。", "ru": "Пакет приостановлен. Плеер открыл другой эпизод.", "uk": "Пакет призупинено. Плеєр відкрив інший епізод."},
    complete: {"pt": "Ficheiros preparados para guardar.", "en": "Files ready to save.", "fr": "Fichiers prêts à enregistrer.", "es": "Archivos listos para guardar.", "de": "Dateien bereit zum Speichern.", "it": "File pronti da salvare.", "pt-BR": "Arquivos prontos para salvar.", "ja": "保存の準備ができました。", "ko": "저장할 준비가 되었습니다.", "zh-Hans": "文件已可保存。", "zh-Hant": "檔案已可儲存。", "ru": "Файлы готовы к сохранению.", "uk": "Файли готові до збереження."},
    autoZip: {"pt": "ZIP preparado. Se o navegador o bloquear, usa «Guardar ZIP».", "en": "ZIP ready. If the browser blocks it, use “Save ZIP”.", "fr": "ZIP prêt. Si le navigateur le bloque, utilise « Enregistrer le ZIP ».", "es": "ZIP preparado. Si el navegador lo bloquea, usa «Guardar ZIP».", "de": "ZIP bereit. Falls der Browser es blockiert, nutze „ZIP speichern“.", "it": "ZIP pronto. Se il browser lo blocca, usa «Salva ZIP».", "pt-BR": "ZIP pronto. Se o navegador bloquear, use “Salvar ZIP”.", "ja": "ZIP の準備ができました。ブラウザーがブロックした場合は「ZIP を保存」を使ってください。", "ko": "ZIP이 준비되었습니다. 브라우저가 차단하면 ‘ZIP 저장’을 사용하세요.", "zh-Hans": "ZIP 已准备好。如果浏览器阻止下载，请使用“保存 ZIP”。", "zh-Hant": "ZIP 已準備好。如果瀏覽器封鎖下載，請使用「儲存 ZIP」。", "ru": "ZIP готов. Если браузер его заблокирует, нажмите «Сохранить ZIP».", "uk": "ZIP готовий. Якщо браузер його заблокує, натисніть «Зберегти ZIP»."}
  };
  const CSS = [
    ':host{all:initial;color-scheme:dark;--base:#1e1e2e;--mantle:#181825;--surface:#313244;--overlay:#45475a;--text:#cdd6f4;--sub:#a6adc8;--accent:#f9e2af;--red:#f38ba8;--green:#a6e3a1;--peach:#fab387;color:var(--text);font:13px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}',
    '*{box-sizing:border-box}[hidden]{display:none!important}button,select{font:inherit;color:inherit}button{cursor:pointer}button:disabled,select:disabled,input:disabled{opacity:.45;cursor:default}',
    'button:focus-visible,select:focus-visible,input:focus-visible,summary:focus-visible{outline:2px solid var(--accent);outline-offset:2px}',
    '.launcher{position:relative;overflow:hidden;display:flex;align-items:center;gap:8px;height:30px;padding:0 10px;border:1px solid var(--surface);border-radius:10px;background:var(--base);box-shadow:0 4px 14px #0007;font-size:12px;font-weight:600;white-space:nowrap}',
    '.mark{display:grid;gap:2px;width:14px}.mark:before,.mark:after{content:"";height:3px;border-radius:2px;background:var(--accent)}.mark:after{width:9px;justify-self:center}',
    '.launcher[data-warning=true] .mark:before,.launcher[data-warning=true] .mark:after{background:var(--peach)}',
    '.num{font-weight:500;color:var(--sub);font-variant-numeric:tabular-nums}',
    '.fill{position:absolute;left:0;bottom:0;height:2px;width:0;background:var(--accent);transition:width .2s linear}.launcher[data-transfer=complete] .fill{background:var(--green)}.launcher[data-transfer=error] .fill{background:var(--red)}.launcher[data-transfer=paused] .fill{background:var(--peach)}',
    '.panel{position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:8px;width:min(320px,calc(100vw - 24px));max-height:calc(100dvh - 64px);display:flex;flex-direction:column;border:1px solid var(--surface);border-radius:14px;background:var(--base);box-shadow:0 16px 40px #000a;overflow:hidden}',
    'header{display:flex;align-items:center;gap:4px;padding:12px 8px 10px 14px}.what{flex:1;min-width:0}.what strong,.what small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.what strong{font-size:14px;font-weight:600}.what small{color:var(--sub);font-size:12px}.what small:empty{display:none}',
    '.icon{flex:none;display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:none;color:var(--sub);font-size:18px;line-height:1}.icon:hover,.icon[aria-pressed=true]{background:var(--surface);color:var(--text)}',
    '.alert{margin:0 12px 10px;padding:9px 10px;border-radius:10px;background:#fab3871f;border:1px solid #fab38766}.alert p{margin:0 0 7px;color:var(--text);font-size:12px}.alert[data-level=confirmed]{background:#f38ba81f;border-color:#f38ba880}.alert[data-level=confirmed] button{background:var(--red)}.alert button{border:0;border-radius:7px;padding:5px 9px;background:var(--peach);color:var(--base);font-weight:600;font-size:12px}',
    'main{padding:0 12px;min-height:0;display:flex;flex-direction:column}[data-pane]{display:flex;flex-direction:column;gap:8px;min-height:0}',
    '.seg{display:flex;gap:2px;padding:2px;border-radius:9px;background:var(--mantle)}.seg button{flex:1;border:0;border-radius:7px;padding:5px 4px;background:none;color:var(--sub);font-size:12px}.seg button:hover:not(:disabled){background:var(--surface);color:var(--text)}',
    '.list{overflow:auto;max-height:min(236px,38dvh);border-radius:10px;background:var(--mantle);padding:4px;scrollbar-width:thin;scrollbar-color:var(--overlay) transparent}.list:empty{display:none}',
    '.item{display:grid;grid-template-columns:16px 50px 1fr auto;align-items:center;gap:8px;padding:5px 8px;border-radius:7px;cursor:pointer}.item:hover{background:var(--surface)}.item input{margin:0;width:15px;height:15px;accent-color:var(--accent)}',
    '.code{color:var(--sub);font-size:12px;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.name{grid-column:3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tag{grid-column:4;color:var(--sub);font-size:11px}',
    '[data-pane=settings] .item{grid-template-columns:16px 1fr;padding:5px 2px}[data-pane=settings] .item .name{grid-column:2;white-space:normal}',
    'details{margin-top:2px}summary{list-style:none;padding:6px 8px;border-radius:7px;color:var(--sub);font-size:12px;cursor:pointer}summary::-webkit-details-marker{display:none}summary:before{content:"+";display:inline-block;width:16px;margin-right:8px;text-align:center}details[open]>summary:before{content:"−"}summary:hover{background:var(--surface);color:var(--text)}',
    '.primary{border:0;border-radius:10px;padding:9px 12px;background:var(--accent);color:var(--base);font-weight:650}.primary:hover:not(:disabled){filter:brightness(1.06)}',
    '.link{align-self:flex-start;border:0;background:none;padding:0 2px;color:var(--accent);font-size:12px;text-decoration:underline;text-underline-offset:2px}',
    '.batch{display:flex;gap:6px}.batch button{flex:1;min-width:0;border:1px solid var(--surface);border-radius:9px;padding:7px 8px;background:none;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.batch button:hover:not(:disabled){background:var(--surface)}.batch .primary{border:0;background:var(--accent);padding:8px}',
    '.field{display:grid;grid-template-columns:1fr 1.25fr;align-items:center;gap:10px;color:var(--sub);font-size:12px}select{min-width:0;width:100%;border:1px solid var(--surface);border-radius:8px;padding:6px 8px;background:var(--mantle);color:var(--text);font-size:12px}',
    '.hint{margin:0;color:var(--sub);font-size:12px;overflow-wrap:anywhere}.hint:empty{display:none}.version{text-align:right;font-size:11px}',
    '.status{margin:0;padding:8px 14px 12px;min-height:12px;color:var(--sub);font-size:12px;overflow-wrap:anywhere}.status:empty{padding:0 0 12px}.status[data-phase=error]{color:var(--red)}.status[data-phase=complete]{color:var(--green)}.status[data-phase=paused]{color:var(--peach)}',
    '@media(prefers-reduced-motion:reduce){.fill{transition:none}}'
  ].join('\n');
  if (typeof module === 'object' && module.exports && typeof process === 'object' && process.versions?.node) {
    module.exports = { start, parseManifest, parseMetadata, batchQueue, convert, safeTrackUrl, selectTracks, capture };
  } else start();
})();
