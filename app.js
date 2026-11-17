/* TÜK gyakorló – alkalmazáslogika (vanilla JS, nincs build, GitHub Pages-re kész) */
(function () {
'use strict';

const QS = TUK.q, TOPICS = TUK.topics, TETELEK = TUK.tetelek;
const QBYID = Object.fromEntries(QS.map(q => [q.id, q]));
const TOPIC = Object.fromEntries(TOPICS.map(t => [t.id, t]));
const INTERVALS = [0, 1, 2, 4, 8, 16]; // Leitner-doboz → napok
const KEY = 'tuk-gyakorlo-v1';

/* ---------------- állapot ---------------- */
const DEF = { q: {}, tet: {}, xp: 0, streak: 0, lastDay: null, days: {}, best: 0,
  settings: { len: 8, exam: '', rate: 0.95, voice: '', pause: 5 }, sessions: 0 };
let S = load();
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return Object.assign(structuredClone(DEF), s, { settings: Object.assign({}, DEF.settings, s.settings || {}) }); } catch (e) {}
  return structuredClone(DEF);
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const addDays = (iso, n) => { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5);
const qs = id => S.q[id] || (S.q[id] = { box: 0, due: null, seen: 0, ok: 0, bad: 0 });
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const $ = s => document.querySelector(s);

/* ---------------- szintek, játékelemek ---------------- */
const LEVELS = ['Kezdő gyakornok', 'Iratfutár', 'Iktató', 'Kezelőpont', 'Nyilvántartó', 'Titkos ügykezelő', 'Főügykezelő', 'Biztonsági vezető', 'NBF-legenda'];
function levelInfo(xp) {
  let lvl = 0, need = 100, acc = 0;
  while (xp >= acc + need && lvl < LEVELS.length - 1) { acc += need; lvl++; need = Math.round(need * 1.35); }
  return { lvl, name: LEVELS[lvl], into: xp - acc, need };
}
const PRAISE = ['Szép!', 'Pontosan!', 'Ez az!', 'Telitalálat!', 'Így kell!', 'Hibátlan!', 'Megy ez!'];
const COMFORT = ['Semmi gond, most megtanultuk.', 'Ez most nem ült, de pont ezért gyakorlunk.', 'Majd visszahozom, és akkor már menni fog.', 'Jó, hogy most derült ki és nem a vizsgán.'];
const pick = a => a[Math.floor(Math.random() * a.length)];

function mastery(id) { const s = S.q[id]; return s ? s.box : 0; }
function topicStats(tid) {
  const list = QS.filter(q => q.t === tid);
  const seen = list.filter(q => S.q[q.id] && S.q[q.id].seen).length;
  const strong = list.filter(q => mastery(q.id) >= 3).length;
  const score = list.reduce((a, q) => a + Math.min(mastery(q.id), 4), 0) / (list.length * 4);
  return { total: list.length, seen, strong, pct: Math.round(score * 100) };
}
function dueList() { const t = today(); return QS.filter(q => { const s = S.q[q.id]; return s && s.seen && s.due && s.due <= t; }); }
function newList() { return QS.filter(q => !(S.q[q.id] && S.q[q.id].seen)); }

/* ---------------- menet összeállítása ---------------- */
function buildSession(opts) {
  const len = opts.len || S.settings.len;
  let pool = QS;
  if (opts.topic) pool = QS.filter(q => q.t === opts.topic);
  if (opts.ids) pool = opts.ids.map(id => QBYID[id]);
  const t = today();
  if (opts.mode === 'mistakes') {
    pool = QS.filter(q => { const s = S.q[q.id]; return s && s.bad > 0 && s.box <= 2; });
    return shuffle(pool).slice(0, len).map(q => q.id);
  }
  const due = shuffle(pool.filter(q => { const s = S.q[q.id]; return s && s.seen && s.due && s.due <= t; }))
    .sort((a, b) => mastery(a.id) - mastery(b.id));
  const fresh = pool.filter(q => !(S.q[q.id] && S.q[q.id].seen));
  // új kérdések: témánként felváltva, a gyengébb témákat előre véve
  const byTopic = {};
  fresh.forEach(q => (byTopic[q.t] = byTopic[q.t] || []).push(q));
  const order = Object.keys(byTopic).sort((a, b) => topicStats(a).pct - topicStats(b).pct || Math.random() - .5);
  const freshRR = []; let added = true;
  while (added) { added = false; for (const k of order) { const x = byTopic[k].shift(); if (x) { freshRR.push(x); added = true; } } }

  const nDue = Math.min(due.length, opts.topic ? Math.ceil(len / 2) : Math.ceil(len * 0.6));
  let picked = due.slice(0, nDue);
  picked = picked.concat(freshRR.slice(0, len - picked.length));
  if (picked.length < len) picked = picked.concat(due.slice(nDue, nDue + len - picked.length));
  if (picked.length < len) { // ha minden friss és semmi nem esedékes: a leggyengébbek
    const rest = shuffle(pool.filter(q => !picked.includes(q))).sort((a, b) => mastery(a.id) - mastery(b.id));
    picked = picked.concat(rest.slice(0, len - picked.length));
  }
  return shuffle(picked).map(q => q.id);
}


/* ---------------- FELOLVASÁS (Web Speech API, a telefon magyar hangjával) ---------------- */
const TTS = (() => {
  const ok = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  let voices = [], queue = [], timer = null, active = false, onDone = null, wake = null;
  function load() { if (!ok) return; voices = speechSynthesis.getVoices().filter(v => /^hu/i.test(v.lang)); if (tab === 'stats' && !active) render(); }
  if (ok) { voices = speechSynthesis.getVoices().filter(v => /^hu/i.test(v.lang)); speechSynthesis.onvoiceschanged = load; }
  const voice = () => voices.find(v => v.name === S.settings.voice) || voices.find(v => /natural|online|neural|premium|enhanced/i.test(v.name)) || voices.find(v => /hu-HU/i.test(v.lang)) || voices[0] || null;
  const SUBS = [
    [/!”/g, '”'], [/[„”"“]/g, ''], [/!/g, '.'],
    [/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, ''],
    [/SZBT-vel/g, 'személyi biztonsági tanúsítvánnyal'], [/SZBT-je/g, 'személyi biztonsági tanúsítványa'], [/SZBT-jét/g, 'személyi biztonsági tanúsítványát'],
    [/SZBT-t/g, 'személyi biztonsági tanúsítványt'], [/SZBT-k/g, 'személyi biztonsági tanúsítványok'], [/SZBT/g, 'személyi biztonsági tanúsítvány'],
    [/\bBV-/g, 'biztonsági vezető'], [/\bBV\b/g, 'biztonsági vezető'], [/ÁFSZ-nél/g, 'Állami Futárszolgálatnál'], [/ÁFSZ/g, 'Állami Futárszolgálat'], [/\bMH\b/g, 'Magyar Honvédség'],
    [/(^|[\s,.;:(])([A-ZÁÉÍÓÖŐÚÜŰ]{4,})(?=[\s,.;:)]|$)/g, (m, a, w) => a + w.toLowerCase()],
    [/([a-záéíóöőúüű])\/([a-záéíóöőúüű])/gi, '$1 vagy $2'], [/\s\/\s/g, ', illetve '], [/\bFj\./g, 'futárjegyzék'],
    [/\bST\b/g, 'Szigorúan titkos'], [/\bKT\b/g, 'Korlátozott terjesztésű'], [/\bB\+/g, 'Bizalmas vagy magasabb'],
    [/(^|[\s(\/,])B(?=[\s:,)\/.]|$)/g, '$1Bizalmas'], [/(^|[\s(\/,])T(?=[\s:,)\/.]|$)/g, '$1Titkos'],
    [/\bpl\./g, 'például'], [/\bill\./g, 'illetve'], [/\bmax\./g, 'legfeljebb'], [/\bkb\./g, 'körülbelül'], [/\bstb\./g, 'és így tovább'],
    [/\bpld\./g, 'példány'], [/\bsoksz\./g, 'sokszorosított'], [/\bFnyt\./g, 'főnyilvántartási'], [/\bikt\./g, 'iktatási'], [/\bsz\./g, 'számú'],
    [/Korm\. r(endelet)?\.?/g, 'kormányrendelet'], [/\btv\./g, 'törvény'], [/§/g, ' paragrafus'], [/Σ\s*/g, 'összesen '],
    [/\b1\s*×\s*/g, 'egyszer '], [/\b2\s*×\s*/g, 'kétszer '], [/×/g, 'szor'], [/→/g, ', majd '], [/≥/g, 'legalább '], [/\s[–—-]\s/g, ', '],
    [/\s*·\s*/g, ', '], [/[()]/g, ', '], [/\s\+\s/g, ' és '], [/\s+,/g, ','], [/,\s*([,.;])/g, '$1'], [/\s{2,}/g, ' ']
  ];
  function prep(t) { let s = ' ' + t + ' '; for (const [a, b] of SUBS) s = s.replace(a, b); return s.trim(); }
  function chunks(t) { // hosszú szövegeket mondatokra bontunk (egyes böngészők elakadnak a hosszú felolvasáson)
    return t.split(/(?<=[^\d\s][.;:?!])\s+(?=[A-ZÁÉÍÓÖŐÚÜŰ])/).map(x => x.trim()).filter(Boolean);
  }
  async function lock() { try { if ('wakeLock' in navigator && !wake) wake = await navigator.wakeLock.request('screen'); } catch (e) {} }
  function unlock() { try { wake && wake.release(); } catch (e) {} wake = null; }
  function stop() { active = false; queue = []; clearTimeout(timer); onDone = null; if (ok) speechSynthesis.cancel(); unlock(); document.querySelectorAll('.spk.on').forEach(b => b.classList.remove('on')); }
  function play(items, done, btn) {
    if (!ok) { toast('Ez a böngésző nem tud felolvasni 😕'); return; }
    stop(); active = true; onDone = done || null; queue = items.slice(); lock();
    if (btn) btn.classList.add('on');
    if (!voices.length) toast('Nem találok magyar hangot – lásd Mizu? › Felolvasás');
    step();
  }
  function step() {
    if (!active) return;
    const it = queue.shift();
    if (it === undefined) { active = false; unlock(); document.querySelectorAll('.spk.on').forEach(b => b.classList.remove('on')); const d = onDone; onDone = null; if (d) d(); return; }
    if (typeof it === 'object') { timer = setTimeout(step, it.pause); return; }
    const cs = chunks(prep(it)); if (!cs.length) return step();
    if (cs.length > 1) { const rest = []; cs.slice(1).forEach(c => rest.push({ pause: 350 }, c)); queue.unshift(...rest); }
    const u = new SpeechSynthesisUtterance(cs[0]); const v = voice(); if (v) u.voice = v;
    u.lang = 'hu-HU'; u.rate = S.settings.rate || 1;
    u.onend = () => step(); u.onerror = () => { if (active) setTimeout(step, 50); };
    speechSynthesis.speak(u);
  }
  // a már előkészített szövegrészeket ne bontsuk újra: a chunks kimenete már prep-elt, a prep idempotens elég
  return { ok, play, stop, voices: () => voices, get active() { return active; } };
})();
const spkBtn = (id, extra) => `<button class="spk" id="${id}" title="Felolvasás" ${extra || ''}>🔊</button>`;

/* ---------------- navigáció ---------------- */
let tab = 'home';
document.querySelectorAll('.tabbar button').forEach(b => b.onclick = () => go(b.dataset.tab));
function go(t) {
  if (SES && !SES.done && t !== 'quiz') { if (!confirm('Abbahagyod ezt a kört? Az eddigi válaszaid megmaradnak.')) return; SES = null; }
  TTS.stop(); LS = null;
  tab = t;
  document.querySelectorAll('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.tab === t));
  render(); window.scrollTo(0, 0);
}
function render() {
  updateChips();
  const v = $('#view');
  if (tab === 'home') v.innerHTML = homeHTML();
  else if (tab === 'topics') v.innerHTML = topicsHTML();
  else if (tab === 'tetelek') v.innerHTML = tetelekHTML();
  else if (tab === 'stats') v.innerHTML = statsHTML();
  else if (tab === 'quiz') return renderQuiz();
  bind();
}
function updateChips() {
  const t = today();
  const alive = S.lastDay && daysBetween(S.lastDay, t) <= 1;
  $('#chipStreak').textContent = '🔥 ' + (alive ? S.streak : 0);
  $('#chipXp').textContent = '⭐ ' + S.xp;
}

/* ---------------- KEZDŐLAP ---------------- */
function greeting() {
  const h = new Date().getHours();
  return h < 10 ? 'Jó reggelt!' : h < 18 ? 'Szia!' : 'Jó estét!';
}
function examLine() {
  if (!S.settings.exam) return '';
  const d = daysBetween(today(), S.settings.exam);
  if (d < 0) return '';
  if (d === 0) return '<div class="small" style="opacity:.95;margin-bottom:10px">🎯 Ma van a vizsga – sok sikert! Egy gyors ismétlés belefér.</div>';
  return `<div class="small" style="opacity:.95;margin-bottom:10px">🎯 Vizsgáig: <b>${d} nap</b></div>`;
}
function homeHTML() {
  const due = dueList().length, fresh = newList().length;
  const doneToday = S.days[today()] || 0;
  const L = levelInfo(S.xp);
  const weakest = TOPICS.map(t => ({ t, s: topicStats(t.id) })).sort((a, b) => a.s.pct - b.s.pct)[0];
  const mist = QS.filter(q => { const s = S.q[q.id]; return s && s.bad > 0 && s.box <= 2; }).length;
  let msg;
  if (!S.sessions) msg = 'Kezdjük! Egy kör kb. 3–5 perc, rövid és mindent elmagyaráz.';
  else if (doneToday) msg = `Ma már ${doneToday} kört csináltál. 💪 Jöhet még egy, ha van kedved.`;
  else if (due) msg = `${due} kérdés vár ismétlésre – ezeket most a legjobb felfrissíteni.`;
  else msg = 'Ma nincs esedékes ismétlés, jöhetnek az új kérdések.';
  return `
  <section class="card hero pop">
    <h1>${greeting()}</h1>
    <p>${msg}</p>
    ${examLine()}
    <button class="btn white block" data-act="start">▶️ Mai kör (${S.settings.len} kérdés)</button>
    <div class="lvl small"><b>Lvl ${L.lvl + 1}</b> ${esc(L.name)}<div class="bar"><i style="width:${Math.round(L.into / L.need * 100)}%"></i></div></div>
  </section>
  <div class="grid2">
    <div class="stat"><span class="muted small">Ismétlésre vár</span><b>${due}</b></div>
    <div class="stat"><span class="muted small">Még nem láttad</span><b>${fresh}</b></div>
  </div>
  <div style="height:12px"></div>
  ${weakest && S.sessions ? `<section class="card topic" data-topic="${weakest.t.id}">
    <div class="ic">${weakest.t.icon}</div>
    <div class="tx"><span class="muted small">Itt van a legtöbb tanulnivaló</span><b>${esc(weakest.t.name)}</b>
    <div class="bar" style="margin-top:6px"><i style="width:${weakest.s.pct}%"></i></div></div><span>›</span></section>` : ''}
  <div class="row">
    <button class="btn ghost" data-act="mistakes" ${mist ? '' : 'disabled'}>🩹 Hibáim (${mist})</button>
    <button class="btn ghost" data-act="draw">🎴 Húzz egy tételt</button>
  </div>
  <p class="muted small" style="margin-top:16px">Tipp: minden válasz után jön a magyarázat és a forrás (tankönyvi fejezet, tételszám). A 🆕 jelű kérdések a 2026-os változásokat érintik.</p>`;
}

/* ---------------- TÉMÁK ---------------- */
function topicsHTML() {
  return `<h2>Témák</h2><p class="muted small">Koppints egy témára, és csak abból kapsz kérdéseket. A csík azt mutatja, mennyire megy már.</p>` +
    TOPICS.map(t => { const s = topicStats(t.id); return `
    <section class="card topic" data-topic="${t.id}">
      <div class="ic">${t.icon}</div>
      <div class="tx"><b>${esc(t.name)}</b><span class="muted small">${esc(t.tetel)} • ${s.seen}/${s.total} látott</span>
      <div class="bar" style="margin-top:6px"><i style="width:${s.pct}%"></i></div></div><span class="pill">${s.pct}%</span>
    </section>`; }).join('');
}

/* ---------------- TÉTELEK ---------------- */
let tetKind = 'szobeli', tetOpen = null, tetReveal = false;
function tetKey(t) { return t.kind + t.n; }
function tetelekHTML() {
  if (LS) return listenHTML();
  if (tetOpen) return tetelCardHTML();
  const list = TETELEK.filter(t => t.kind === tetKind);
  const R = { 2: '😎', 1: '🤔', 0: '😵' };
  return `<h2>Tételek</h2>
  <div class="seg"><button data-kind="szobeli" class="${tetKind === 'szobeli' ? 'on' : ''}">Szóbeli (22)</button><button data-kind="gyak" class="${tetKind === 'gyak' ? 'on' : ''}">Gyakorlati (17)</button></div>
  <div class="row"><button class="btn primary" data-act="draw">🎴 Húzz egy tételt!</button><button class="btn brand" data-act="listen">🎧 Hallgatós mód</button></div>
  <p class="muted small">Gondold végig vagy mondd el hangosan, aztán nézd meg a vázlatot, és értékeld magad. A húzás azokat hozza előbb, amelyek még nem mentek.</p>
  <section class="card tlist">${list.map(t => { const r = S.tet[tetKey(t)]; return `
    <div class="t" data-tet="${tetKey(t)}"><span class="no">${t.n}.</span><span class="tx">${esc(t.q)}</span><span>${r != null ? R[r] : '·'}</span></div>`; }).join('')}
  </section>`;
}
function tetelCardHTML() {
  const t = tetOpen;
  return `<button class="btn ghost" data-act="tetback">‹ Vissza</button>
  <section class="card tetel pop" style="margin-top:12px">
    <div class="qhead" style="margin:0"><span class="pill">${t.kind === 'szobeli' ? 'Szóbeli' : 'Gyakorlati'} ${t.n}. tétel</span>${spkBtn('spkTet')}</div>
    <p class="q">${esc(t.q)}</p>
    ${tetReveal ? `<h3>Vázlat</h3>${tetBodyHTML(t)}
      <p class="muted small">Hogy ment?</p>
      <div class="row"><button class="btn" data-grade="0">😵 Nem ment</button><button class="btn" data-grade="1">🤔 Részben</button><button class="btn" data-grade="2">😎 Tudtam</button></div>`
      : `<p class="muted">Gondold végig: mik a fő pontok? Ha megvan, nézd meg a vázlatot.</p>
      <button class="btn brand block" data-act="reveal">👀 Mutasd a vázlatot</button>`}
  </section>
  <button class="btn ghost block" data-topic="${t.t}">📝 Kérdések ebből a témából</button>`;
}
function drawTetel() {
  const list = TETELEK.filter(t => t.kind === tetKind);
  const w = list.map(t => { const r = S.tet[tetKey(t)]; return { t, w: r == null ? 3 : r === 0 ? 4 : r === 1 ? 2 : 0.5 }; });
  let sum = w.reduce((a, x) => a + x.w, 0), r = Math.random() * sum;
  for (const x of w) { r -= x.w; if (r <= 0) return x.t; }
  return list[0];
}



/* ---------------- tételvázlat megjelenítése és felolvasása ---------------- */
function tetBodyHTML(t) {
  let h = `<div class="kw">${t.kw.map(k => `<span>${esc(k)}</span>`).join('')}</div>`;
  if (t.kind === 'szobeli') {
    h += `<ul>${t.v.map(([a, b]) => `<li><b>${esc(a)}</b> ${esc(b)}</li>`).join('')}</ul>`;
    if (t.f && t.f.length) h += `<h3>Fogalmak</h3><ul>${t.f.map(([a, b]) => `<li><b>${esc(a)}:</b> ${esc(b)}</li>`).join('')}</ul>`;
    if (t.w) h += `<div class="note warn"><b>⚠ Figyelj!</b> ${esc(t.w)}</div>`;
  } else {
    h += `<p class="small"><b>Menet:</b> <i>${esc(t.flow)}</i></p><ol>${t.steps.map(([a, b]) => `<li><b>${esc(a)}</b> ${esc(b)}</li>`).join('')}</ol>`;
    h += `<div class="note okn"><b>✎ Kitöltési minta:</b> ${esc(t.minta)}</div><div class="note badn"><b>✗ Tipikus hiba:</b> ${esc(t.hiba)}</div>`;
  }
  return h + `<p class="small muted">📍 ${esc(t.ref || t.src)}${t.gy ? ' • Kapcsolódó gyakorlati tétel: ' + esc(t.gy) : ''}</p>`;
}
const ORD = ['Első', 'Második', 'Harmadik', 'Negyedik', 'Ötödik', 'Hatodik', 'Hetedik', 'Nyolcadik', 'Kilencedik', 'Tizedik'];
function tetSpeech(t, withBody, thinkPause) {
  const P = ms => ({ pause: ms });
  const it = [kindName(t.kind) + ' ' + t.n + '. tétel.', P(600), t.q, P(900)];
  if (thinkPause) it.push(P(thinkPause));
  if (!withBody) return it;
  it.push('Kulcsszavak.', P(400));
  t.kw.forEach(k => it.push(k + '.', P(350)));
  it.push(P(700));
  const list = t.kind === 'szobeli' ? t.v : t.steps;
  if (t.kind === 'gyak') it.push('A menet lépései.', P(500));
  list.forEach(([a, b], i) => it.push((t.kind === 'gyak' ? (ORD[i] || (i + 1) + '.') + ' lépés. ' : '') + a.replace(/:$/, '.'), P(450), b, P(1100)));
  if (t.f && t.f.length) { it.push('Fogalmak.', P(400)); t.f.forEach(([a, b]) => it.push(a + '.', P(300), b, P(900))); }
  if (t.w) it.push('Figyelj!', P(400), t.w, P(900));
  if (t.minta) it.push('Kitöltési minta.', P(400), t.minta, P(900), 'Tipikus hiba.', P(400), t.hiba, P(900));
  return it;
}

/* ---------------- HALLGATÓS MÓD ---------------- */
let LS = null;
const kindName = k => k === 'szobeli' ? 'Szóbeli' : 'Gyakorlati';
function listenStart() { LS = { list: TETELEK.filter(t => t.kind === tetKind), pos: 0, playing: false, phase: '' }; render(); window.scrollTo(0, 0); }
function listenPlay() {
  const t = LS.list[LS.pos]; LS.playing = true; LS.phase = 'kérdés';
  const p = S.settings.pause;
  const items = tetSpeech(t, true, p * 1000).concat([{ pause: 1800 }]);
  renderListen();
  setTimeout(() => { if (LS && LS.playing) { LS.phase = 'vázlat'; } }, 0);
  TTS.play(items, () => {
    if (!LS) return;
    if (LS.pos < LS.list.length - 1) { LS.pos++; listenPlay(); }
    else { LS.playing = false; renderListen(); toast('Végére értél 🎉'); }
  });
}
function renderListen() { if (tab === 'tetelek' && LS) { $('#view').innerHTML = listenHTML(); bind(); } }
function listenHTML() {
  const t = LS.list[LS.pos];
  return `<button class="btn ghost" data-act="listenexit">‹ Vissza a tételekhez</button>
  <section class="card tetel" style="margin-top:12px">
    <div class="qhead" style="margin:0"><span class="pill">🎧 ${kindName(t.kind)} ${t.n}. tétel • ${LS.pos + 1}/${LS.list.length}</span>${LS.playing ? '<span class="pill new">▶ szól</span>' : ''}</div>
    <p class="q">${esc(t.q)}</p>
    <details ${LS.playing ? '' : 'open'}><summary class="small muted">Vázlat mutatása</summary>${tetBodyHTML(t)}</details>
  </section>
  <div class="row player">
    <button class="btn" data-act="lprev" ${LS.pos ? '' : 'disabled'}>⏮</button>
    <button class="btn primary" data-act="lplay" style="flex:2">${LS.playing ? '⏸ Szünet' : '▶️ Lejátszás'}</button>
    <button class="btn" data-act="lnext" ${LS.pos < LS.list.length - 1 ? '' : 'disabled'}>⏭</button>
  </div>
  <section class="card" style="margin-top:12px">
    <p class="small muted" style="margin:0 0 6px">Gondolkodási szünet a kérdés után (közben felelj magadban!)</p>
    <div class="seg">${[0, 5, 15, 30].map(n => `<button data-pause="${n}" class="${S.settings.pause === n ? 'on' : ''}">${n ? n + ' mp' : 'nincs'}</button>`).join('')}</div>
    <p class="small muted" style="margin:0 0 6px">Sebesség</p>
    <div class="seg">${[0.8, 0.95, 1.1, 1.3].map(n => `<button data-rate="${n}" class="${S.settings.rate === n ? 'on' : ''}">${n}×</button>`).join('')}</div>
    <p class="small muted" style="margin:0">Sorban felolvassa az összes ${kindName(LS.list[0].kind).toLowerCase()} tételt: cím, kérdés, szünet, majd a vázlat. Lejátszás közben ébren tartja a képernyőt; ha lezárod a telefont, a felolvasás megállhat.</p>
  </section>`;
}

/* ---------------- STATISZTIKA ---------------- */
function statsHTML() {
  const seen = QS.filter(q => S.q[q.id] && S.q[q.id].seen).length;
  const strong = QS.filter(q => mastery(q.id) >= 3).length;
  const tot = QS.reduce((a, q) => { const s = S.q[q.id]; if (s) { a.ok += s.ok; a.bad += s.bad; } return a; }, { ok: 0, bad: 0 });
  const acc = tot.ok + tot.bad ? Math.round(tot.ok / (tot.ok + tot.bad) * 100) : 0;
  const tetDone = Object.values(S.tet).filter(r => r === 2).length;
  const L = levelInfo(S.xp);
  const sorted = TOPICS.map(t => ({ t, s: topicStats(t.id) })).sort((a, b) => a.s.pct - b.s.pct);
  let verdict;
  if (!seen) verdict = 'Még nem kezdtél el gyakorolni – egy kör után itt látod, hol tartasz.';
  else if (strong / QS.length > .8) verdict = 'Nagyon jól állsz! Most már főleg a tételvázlatokat és a hibáidat ismételd.';
  else if (seen / QS.length < .5) verdict = `Az anyag ${Math.round(seen / QS.length * 100)}%-át láttad eddig. Napi 1–2 körrel pár nap alatt végigérsz.`;
  else verdict = `Szépen haladsz. A leggyengébb területed most: <b>${esc(sorted[0].t.name)}</b>.`;
  return `<h2>Mizu? 📊</h2>
  <section class="card"><p style="margin:0">${verdict}</p></section>
  <div class="grid2">
    <div class="stat"><span class="muted small">Látott kérdés</span><b>${seen}/${QS.length}</b></div>
    <div class="stat"><span class="muted small">Biztosan megy</span><b>${strong}</b></div>
    <div class="stat"><span class="muted small">Találati arány</span><b>${acc}%</b></div>
    <div class="stat"><span class="muted small">„Tudtam” tétel</span><b>${tetDone}/${TETELEK.length}</b></div>
    <div class="stat"><span class="muted small">Szint</span><b>${L.lvl + 1}</b><span class="small">${esc(L.name)}</span></div>
    <div class="stat"><span class="muted small">Leghosszabb sorozat</span><b>🔥 ${Math.max(S.best, S.streak)}</b></div>
  </div>
  <div style="height:12px"></div>
  <section class="card"><h3>Témánként</h3>
  ${sorted.map(x => `<div style="margin:10px 0" data-topic="${x.t.id}"><div class="small" style="display:flex;justify-content:space-between"><span>${x.t.icon} ${esc(x.t.name)}</span><b>${x.s.pct}%</b></div><div class="bar"><i style="width:${x.s.pct}%"></i></div></div>`).join('')}
  </section>
  <section class="card"><h3>Beállítások</h3>
    <p class="small muted" style="margin:0 0 6px">Kérdések egy körben</p>
    <div class="seg">${[5, 8, 12, 15].map(n => `<button data-len="${n}" class="${S.settings.len === n ? 'on' : ''}">${n}</button>`).join('')}</div>
    <p class="small muted" style="margin:0 0 6px">Felolvasás sebessége</p>
    <div class="seg">${[0.8, 0.95, 1.1, 1.3].map(n => `<button data-rate="${n}" class="${S.settings.rate === n ? 'on' : ''}">${n}×</button>`).join('')}</div>
    ${TTS.voices().length >= 1 ? `<p class="small muted" style="margin:0 0 6px">Magyar hang (a „Natural” / „Online” a legszebb)</p><select id="voiceSel" class="sel"><option value="">Automatikus (legjobb elérhető)</option>${TTS.voices().map(v => `<option ${v.name === S.settings.voice ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select>` : ''}
    ${!TTS.ok ? '<p class="small" style="color:var(--bad)">Ez a böngésző nem tud felolvasni.</p>' : !TTS.voices().length ? '<p class="small" style="color:var(--bad)">Nem találok magyar felolvasóhangot. iPhone: Beállítások › Kisegítő lehetőségek › Beszélt tartalom › Hangok › Magyar. Android: Beállítások › Kisegítő lehetőségek › Szövegfelolvasó › Google › Hanganyag telepítése › Magyar.</p>' : ''}
    <button class="btn ghost block" data-act="ttstest" style="margin:6px 0 14px">🔊 Hang kipróbálása</button>
    <p class="small muted" style="margin:0 0 6px">Vizsga napja (visszaszámláláshoz)</p>
    <input type="date" id="examDate" value="${esc(S.settings.exam)}">
    <div class="row" style="margin-top:14px">
      <button class="btn ghost" data-act="export">⬇️ Mentés fájlba</button>
      <button class="btn ghost" data-act="import">⬆️ Betöltés</button>
    </div>
    <button class="btn ghost block" style="margin-top:8px;color:var(--bad)" data-act="reset">Haladás törlése</button>
    <p class="small muted">A haladás ebben a böngészőben tárolódik. Másik eszközre a „Mentés fájlba” / „Betöltés” gombokkal viheted át.</p>
  </section>
  <p class="small muted">Forrás: Titkos ügykezelői ismeretek (NKE, 2026), a 2026. 08. 26-i változásokról szóló tájékoztató, NBF diasorok (2026. augusztus), fogalomtár. ${QS.length} kérdés, ${TETELEK.length} tételvázlat.</p>`;
}

/* ---------------- események ---------------- */
function bind() {
  document.querySelectorAll('[data-act]').forEach(b => b.onclick = () => act(b.dataset.act));
  document.querySelectorAll('[data-topic]').forEach(b => b.onclick = e => { e.stopPropagation(); startSession({ topic: b.dataset.topic, title: TOPIC[b.dataset.topic].name }); });
  document.querySelectorAll('[data-kind]').forEach(b => b.onclick = () => { tetKind = b.dataset.kind; render(); });
  document.querySelectorAll('[data-tet]').forEach(b => b.onclick = () => { tetOpen = TETELEK.find(t => tetKey(t) === b.dataset.tet); tetReveal = false; render(); window.scrollTo(0, 0); });
  document.querySelectorAll('[data-grade]').forEach(b => b.onclick = () => {
    const r = +b.dataset.grade; const k = tetKey(tetOpen);
    S.tet[k] = r; S.xp += r === 2 ? 8 : r === 1 ? 5 : 3; markDay(); save();
    toast(r === 2 ? '😎 Szuper! ' + pick(PRAISE) : r === 1 ? '🤔 Majd visszahozom még.' : '😵 Ezt hamarosan újra kihúzod.');
    tetOpen = drawTetel(); tetReveal = false; render(); window.scrollTo(0, 0);
  });
  document.querySelectorAll('[data-len]').forEach(b => b.onclick = () => { S.settings.len = +b.dataset.len; save(); render(); });
  document.querySelectorAll('[data-rate]').forEach(b => b.onclick = () => { S.settings.rate = +b.dataset.rate; save(); if (LS) renderListen(); else render(); });
  document.querySelectorAll('[data-pause]').forEach(b => b.onclick = () => { S.settings.pause = +b.dataset.pause; save(); renderListen(); });
  const vs = $('#voiceSel'); if (vs) vs.onchange = () => { S.settings.voice = vs.value; save(); };
  const st = $('#spkTet'); if (st) st.onclick = () => { if (TTS.active) return TTS.stop(); const t = tetOpen; TTS.play(tetSpeech(t, tetReveal, 0), null, st); };
  const ed = $('#examDate'); if (ed) ed.onchange = () => { S.settings.exam = ed.value; save(); toast('Vizsganap elmentve ✔'); };
}
function act(a) {
  if (a === 'start') startSession({ title: 'Mai kör' });
  else if (a === 'mistakes') startSession({ mode: 'mistakes', title: 'Hibáim' });
  else if (a === 'draw') { tab = 'tetelek'; document.querySelectorAll('.tabbar button').forEach(b => b.classList.toggle('active', b.dataset.tab === 'tetelek')); tetOpen = drawTetel(); tetReveal = false; render(); window.scrollTo(0, 0); }
  else if (a === 'reveal') { TTS.stop(); tetReveal = true; render(); }
  else if (a === 'listen') { TTS.stop(); listenStart(); }
  else if (a === 'listenexit') { TTS.stop(); LS = null; render(); }
  else if (a === 'lplay') { if (LS.playing) { TTS.stop(); LS.playing = false; renderListen(); } else listenPlay(); }
  else if (a === 'lprev' || a === 'lnext') { const was = LS.playing; TTS.stop(); LS.pos += a === 'lnext' ? 1 : -1; LS.playing = false; if (was) listenPlay(); else renderListen(); }
  else if (a === 'ttstest') TTS.play(['Szia! Így fogok felolvasni. A Szigorúan titkos minősítési szintű adat érvényességi ideje legfeljebb 30 év.']);
  else if (a === 'tetback') { TTS.stop(); tetOpen = null; render(); }
  else if (a === 'reset') { if (confirm('Biztosan törlöd az összes haladást? Ez nem vonható vissza.')) { S = structuredClone(DEF); save(); render(); toast('Törölve'); } }
  else if (a === 'export') {
    const blob = new Blob([JSON.stringify(S)], { type: 'application/json' });
    const u = URL.createObjectURL(blob); const l = document.createElement('a');
    l.href = u; l.download = 'tuk-haladas-' + today() + '.json'; document.body.appendChild(l); l.click(); l.remove(); setTimeout(() => URL.revokeObjectURL(u), 1000);
  } else if (a === 'import') {
    const i = document.createElement('input'); i.type = 'file'; i.accept = 'application/json,.json';
    i.onchange = () => { const f = i.files[0]; if (!f) return; f.text().then(t => { try { const o = JSON.parse(t); if (!o.q) throw 0; S = Object.assign(structuredClone(DEF), o); save(); render(); toast('Haladás betöltve ✔'); } catch (e) { toast('Ez nem jó mentésfájl'); } }); };
    i.click();
  }
}

/* ---------------- KVÍZ ---------------- */
let SES = null;
function startSession(opts) {
  const ids = buildSession(opts);
  if (!ids.length) { toast(opts.mode === 'mistakes' ? 'Nincs hibás kérdés – szép!' : 'Nincs kérdés ebben a módban'); return; }
  SES = { ids, i: 0, title: opts.title || 'Gyakorlás', first: {}, retryQueued: {}, xp: 0, combo: 0, maxCombo: 0, done: false, results: [] };
  tab = 'quiz'; document.querySelectorAll('.tabbar button').forEach(b => b.classList.remove('active'));
  newQ(); render(); window.scrollTo(0, 0);
}
let CUR = null; // aktuális kérdés UI-állapota
function newQ() {
  const q = QBYID[SES.ids[SES.i]];
  CUR = { q, sel: new Set(), order: [], match: {}, num: '', checked: false, correct: null, shown: false, attempt: (CUR && CUR.q === q) ? CUR.attempt + 1 : 1 };
  if (q.type === 'mc' || q.type === 'multi') CUR.perm = shuffle(q.o.map((_, i) => i));
  if (q.type === 'order') CUR.pool = shuffle(q.o.map((_, i) => i));
  if (q.type === 'match') CUR.rights = shuffle([...new Set(q.pairs.map(p => p[1].trim()))]);
  if (q.type === 'cloze') { CUR.cl = {}; CUR.clPerm = q.blanks.map(b => shuffle(b.o.map((_, i) => i))); }
}
function renderQuiz() {
  const v = $('#view');
  if (SES.done) { v.innerHTML = summaryHTML(); bindSummary(); return; }
  const q = CUR.q, T = TOPIC[q.t];
  const n = SES.ids.length;
  v.innerHTML = `
  <div class="qhead"><button class="btn ghost" style="min-height:38px;padding:6px 12px" id="quit">✕</button>
    <span class="small muted">${esc(SES.title)} • ${SES.i + 1}/${n}</span>
    <span class="combo small">${SES.combo >= 2 ? '🔥×' + SES.combo : ''}</span></div>
  <div class="progress"><i style="width:${(SES.i) / n * 100}%"></i></div>
  <section class="card pop" id="qcard">
    <div class="row" style="gap:6px;margin-bottom:4px"><span class="pill">${T.icon} ${esc(T.name)}</span>${q.ch ? '<span class="pill new">🆕 2026-os változás</span>' : ''}${!(S.q[q.id] && S.q[q.id].seen) ? '<span class="pill">új</span>' : ''}</div>
    <div class="qtextrow"><div class="qtext">${esc(q.q)}</div>${spkBtn('spkQ')}</div>
    <div id="ans">${answerHTML()}</div>
    ${CUR.checked ? explHTML() : ''}
  </section>
  <div class="actions">${actionsHTML()}</div>`;
  bindQuiz();
}
function answerHTML() {
  const q = CUR.q, C = CUR.checked;
  if (q.type === 'mc' || q.type === 'multi') {
    const multi = q.type === 'multi';
    const good = multi ? new Set(q.a) : new Set([q.a]);
    return (multi ? '<p class="small muted" style="margin:-6px 0 8px">Több jó válasz is lehet.</p>' : '') + '<div class="opts">' + CUR.perm.map(i => {
      let cls = 'opt' + (multi ? ' multi' : '');
      const sel = CUR.sel.has(i);
      if (C) { if (good.has(i) && sel) cls += ' right'; else if (sel) cls += ' wrong'; else if (good.has(i)) cls += ' missed'; }
      else if (sel) cls += ' sel';
      const mk = C ? (good.has(i) ? '✓' : sel ? '✗' : '') : (sel ? '✓' : '');
      const fb = C && q.fb && (sel || good.has(i)) ? `<div class="fbx ${good.has(i) ? 'ok' : 'bad'}">${esc(q.fb[i])}</div>` : '';
      return `<button class="${cls}" data-o="${i}" ${C ? 'disabled' : ''}><span class="mk">${mk}</span><span>${esc(q.o[i])}</span></button>${fb}`;
    }).join('') + '</div>';
  }
  if (q.type === 'tf') {
    return '<div class="tf">' + [true, false].map(val => {
      let cls = 'opt'; const sel = CUR.sel.has(val);
      if (C) { if (val === q.a) cls += sel ? ' right' : ' missed'; else if (sel) cls += ' wrong'; } else if (sel) cls += ' sel';
      return `<button class="${cls}" data-tf="${val}" ${C ? 'disabled' : ''}>${val ? 'Igaz' : 'Hamis'}</button>`;
    }).join('') + '</div>';
  }
  if (q.type === 'num') {
    const ok = C && Number(String(CUR.num).replace(',', '.')) === q.a;
    return `<div class="num"><input id="numIn" inputmode="decimal" type="text" value="${esc(CUR.num)}" ${C ? 'disabled' : ''} placeholder="?" style="${C ? (ok ? 'border-color:var(--ok)' : 'border-color:var(--bad)') : ''}"><span class="u">${esc(q.unit || '')}</span></div>`
      + (C && !ok ? `<p style="color:var(--ok);font-weight:700">Helyes válasz: ${q.a} ${esc(q.unit || '')}</p>` : '');
  }
  if (q.type === 'order') {
    const placed = CUR.order;
    let h = '<p class="small muted" style="margin:-6px 0 8px">Koppints a lépésekre a helyes sorrendben. A már betett lépésre koppintva kiveheted.</p><div class="order"><div class="slot">';
    h += placed.length ? placed.map((i, k) => `<div class="it ${C ? (i === k ? 'right' : 'wrong') : ''}" data-rm="${k}"><span class="n">${k + 1}.</span><span>${esc(q.o[i])}</span></div>`).join('') : '<span class="muted small" style="padding:8px">ide kerülnek a lépések…</span>';
    h += '</div>';
    if (!C) h += CUR.pool.filter(i => !placed.includes(i)).map(i => `<div class="it" data-add="${i}" style="margin-bottom:6px"><span class="n">+</span><span>${esc(q.o[i])}</span></div>`).join('');
    else if (!CUR.correct) h += '<p class="small" style="font-weight:700;color:var(--ok)">Helyes sorrend:</p>' + q.o.map((x, k) => `<div class="it right" style="margin-bottom:6px"><span class="n">${k + 1}.</span><span>${esc(x)}</span></div>`).join('');
    return h + '</div>';
  }
  if (q.type === 'cloze') {
    const parts = q.text.split(/\{(\d+)\}/);
    let h = '<p class="small muted" style="margin:-6px 0 8px">Válaszd ki a legördülőkből a hiányzó részeket.</p><div class="cloze">';
    parts.forEach((part, idx) => {
      if (idx % 2 === 0) { h += esc(part); return; }
      const k = +part, b = q.blanks[k], val = CUR.cl[k];
      const ok = C && val === b.a;
      h += `<select data-cl="${k}" ${C ? 'disabled' : ''} class="${C ? (ok ? 'right' : 'wrong') : ''}"><option value="">– válassz –</option>${CUR.clPerm[k].map(i => `<option value="${i}" ${val === i ? 'selected' : ''}>${esc(b.o[i])}</option>`).join('')}</select>`;
      if (C && !ok) h += `<span class="clfix">✓ ${esc(b.o[b.a])}</span>`;
    });
    return h + '</div>';
  }
  if (q.type === 'match') {
    return '<p class="small muted" style="margin:-6px 0 8px">Válaszd ki mindegyikhez a párját.</p><div class="match">' + q.pairs.map((p, k) => {
      const val = CUR.match[k] || '';
      let cls = 'm'; const ok = val === p[1].trim();
      if (C) cls += ok ? ' right' : ' wrong';
      return `<div class="${cls}"><b>${esc(p[0])}</b><select data-m="${k}" ${C ? 'disabled' : ''}><option value="">– válassz –</option>${CUR.rights.map(r => `<option ${r === val ? 'selected' : ''}>${esc(r)}</option>`).join('')}</select>${C && !ok ? `<div class="fix">✓ ${esc(p[1].trim())}</div>` : ''}</div>`;
    }).join('') + '</div>';
  }
  return '';
}
function explHTML() {
  const q = CUR.q;
  const cls = CUR.shown ? 'shown' : CUR.correct ? 'ok' : 'bad';
  const head = CUR.shown ? '📖 Itt a megoldás' : CUR.correct ? '✅ ' + pick(PRAISE) : '❌ Nem egészen. ' + pick(COMFORT);
  const again = !CUR.correct && SES.retryQueued[q.id] && SES.ids.indexOf(q.id) !== SES.i ? '<div class="src">🔁 A kör végén még egyszer előjön.</div>' : '';
  return `<div class="expl ${cls}"><h4>${head}</h4><div>${esc(q.e)}</div><div class="src">📍 ${esc(q.src)}</div>${again}</div>`;
}
function actionsHTML() {
  if (!CUR.checked) return `<button class="btn ghost" id="show">💡 Megoldás</button><button class="btn primary" id="check" ${canCheck() ? '' : 'disabled'}>Ellenőrzés</button>`;
  const last = SES.i >= SES.ids.length - 1;
  return (CUR.correct ? '' : `<button class="btn ghost" id="retry">🔁 Újra</button>`) + `<button class="btn brand" id="next">${last ? 'Befejezés 🏁' : 'Tovább ›'}</button>`;
}
function canCheck() {
  const q = CUR.q;
  if (q.type === 'mc' || q.type === 'multi' || q.type === 'tf') return CUR.sel.size > 0;
  if (q.type === 'num') return String(CUR.num).trim() !== '';
  if (q.type === 'order') return CUR.order.length === q.o.length;
  if (q.type === 'match') return q.pairs.every((_, k) => CUR.match[k]);
  if (q.type === 'cloze') return q.blanks.every((_, k) => CUR.cl[k] != null);
  return false;
}
function bindQuiz() {
  const q = CUR.q;
  $('#quit').onclick = () => { TTS.stop(); if (confirm('Kilépsz a körből? Az eddigi válaszaid megmaradnak.')) { SES = null; go('home'); } };
  document.querySelectorAll('[data-o]').forEach(b => b.onclick = () => {
    const i = +b.dataset.o;
    if (q.type === 'mc') { CUR.sel = new Set([i]); } else { CUR.sel.has(i) ? CUR.sel.delete(i) : CUR.sel.add(i); }
    refreshAns();
  });
  document.querySelectorAll('[data-tf]').forEach(b => b.onclick = () => { CUR.sel = new Set([b.dataset.tf === 'true']); refreshAns(); });
  document.querySelectorAll('[data-add]').forEach(b => b.onclick = () => { CUR.order.push(+b.dataset.add); refreshAns(); });
  document.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { if (CUR.checked) return; CUR.order.splice(+b.dataset.rm, 1); refreshAns(); });
  document.querySelectorAll('[data-m]').forEach(s => s.onchange = () => { CUR.match[+s.dataset.m] = s.value; refreshActions(); });
  document.querySelectorAll('[data-cl]').forEach(s => s.onchange = () => { CUR.cl[+s.dataset.cl] = s.value === '' ? null : +s.value; refreshActions(); });
  const ni = $('#numIn'); if (ni) { ni.oninput = () => { CUR.num = ni.value; refreshActions(); }; ni.onkeydown = e => { if (e.key === 'Enter' && canCheck()) check(false); }; }
  const c = $('#check'); if (c) c.onclick = () => check(false);
  const s = $('#show'); if (s) s.onclick = () => check(true);
  const r = $('#retry'); if (r) r.onclick = () => { newQ(); renderQuiz(); };
  const n = $('#next'); if (n) n.onclick = next;
  const sq = $('#spkQ'); if (sq) sq.onclick = () => { if (TTS.active) return TTS.stop(); TTS.play(quizSpeech(), null, sq); };
}
function refreshAns() { $('#ans').innerHTML = answerHTML(); refreshActions(); bindQuiz(); }
function refreshActions() { document.querySelector('.actions').innerHTML = actionsHTML(); const c = $('#check'); if (c) c.onclick = () => check(false); const s = $('#show'); if (s) s.onclick = () => check(true); }

function isCorrect() {
  const q = CUR.q;
  if (q.type === 'mc') return CUR.sel.has(q.a) && CUR.sel.size === 1;
  if (q.type === 'multi') return CUR.sel.size === q.a.length && q.a.every(i => CUR.sel.has(i));
  if (q.type === 'tf') return CUR.sel.has(q.a);
  if (q.type === 'num') return Number(String(CUR.num).replace(',', '.')) === q.a;
  if (q.type === 'order') return CUR.order.every((i, k) => i === k);
  if (q.type === 'match') return q.pairs.every((p, k) => CUR.match[k] === p[1].trim());
  if (q.type === 'cloze') return q.blanks.every((b, k) => CUR.cl[k] === b.a);
}
function check(show) {
  const q = CUR.q;
  if (show) { // megoldás mutatása: kitöltjük a helyes választ
    CUR.shown = true;
    if (q.type === 'mc') CUR.sel = new Set([q.a]);
    if (q.type === 'multi') CUR.sel = new Set(q.a);
    if (q.type === 'tf') CUR.sel = new Set([q.a]);
    if (q.type === 'num') CUR.num = String(q.a);
    if (q.type === 'order') CUR.order = q.o.map((_, i) => i);
    if (q.type === 'match') q.pairs.forEach((p, k) => CUR.match[k] = p[1].trim());
    if (q.type === 'cloze') q.blanks.forEach((b, k) => CUR.cl[k] = b.a);
    CUR.correct = false;
  } else CUR.correct = isCorrect();
  CUR.checked = true;

  // SRS-t csak az első próbálkozás alapján frissítünk
  if (!(q.id in SES.first)) {
    const firstOk = CUR.correct && !CUR.shown;
    SES.first[q.id] = firstOk;
    const st = qs(q.id); st.seen++; st.last = today();
    if (firstOk) { st.ok++; st.box = Math.min(st.box + 1, 5); SES.combo++; SES.maxCombo = Math.max(SES.maxCombo, SES.combo); const g = 10 + Math.min(SES.combo - 1, 5); SES.xp += g; }
    else { st.bad++; st.box = 1; SES.combo = 0; SES.xp += 2;
      if (!SES.retryQueued[q.id]) { SES.retryQueued[q.id] = true; SES.ids.push(q.id); } // a kör végén még egyszer
    }
    st.due = addDays(today(), INTERVALS[st.box]);
    SES.results.push({ id: q.id, ok: firstOk });
    save();
  } else if (CUR.correct && !CUR.shown) { SES.xp += 3; }
  renderQuiz();
  const card = $('#qcard'); if (card) card.classList.add(CUR.correct ? 'pop' : (CUR.shown ? 'pop' : 'shake'));
  if (CUR.correct && SES.combo > 0 && SES.combo % 5 === 0) toast('🔥 ' + SES.combo + ' jó válasz egymás után!');
  setTimeout(() => { const e = document.querySelector('.expl'); if (e) e.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 60);
}
function quizSpeech() {
  const q = CUR.q;
  if (CUR.checked) {
    const head = CUR.shown ? 'A megoldás.' : CUR.correct ? 'Helyes.' : 'Nem egészen.';
    return [head, q.e];
  }
  const out = [q.q];
  if (q.type === 'mc' || q.type === 'multi') CUR.perm.forEach((i, k) => out.push((k + 1) + '. válasz: ' + q.o[i] + '.'));
  if (q.type === 'tf') out.push('Igaz vagy hamis?');
  if (q.type === 'cloze') out.push(q.text.replace(/\{\d+\}/g, ' pötty pötty pötty '));
  if (q.type === 'match') q.pairs.forEach(p => out.push(p[0] + '.'));
  if (q.type === 'order') out.push('Állítsd sorrendbe a lépéseket.');
  return out;
}
function next() {
  TTS.stop();
  if (SES.i >= SES.ids.length - 1) return finish();
  SES.i++; CUR = null; newQ(); renderQuiz(); window.scrollTo(0, 0);
}
function markDay() {
  const t = today();
  if (S.lastDay !== t) {
    S.streak = (S.lastDay && daysBetween(S.lastDay, t) === 1) ? S.streak + 1 : 1;
    S.lastDay = t; S.best = Math.max(S.best || 0, S.streak);
  }
}
function finish() {
  const L0 = levelInfo(S.xp).lvl;
  markDay();
  S.days[today()] = (S.days[today()] || 0) + 1;
  S.sessions++; S.xp += SES.xp + 5; SES.xp += 5;
  save();
  SES.done = true; SES.lvlUp = levelInfo(S.xp).lvl > L0;
  renderQuiz(); updateChips(); window.scrollTo(0, 0);
  const firstRes = SES.results; const ok = firstRes.filter(r => r.ok).length;
  if (ok / firstRes.length >= .7 || SES.lvlUp) confetti();
}
function summaryHTML() {
  const res = SES.results, ok = res.filter(r => r.ok).length, n = res.length;
  const pct = Math.round(ok / n * 100);
  const bad = res.filter(r => !r.ok).map(r => QBYID[r.id]);
  const mood = pct === 100 ? '🏆 Hibátlan kör!' : pct >= 80 ? '🎉 Nagyon jó!' : pct >= 50 ? '👍 Jó úton vagy!' : '💪 Az elején mindig ilyen – holnap már jobb lesz!';
  return `<section class="card summary pop" style="text-align:center">
    <h2>${mood}</h2>
    <div class="big">${ok}/${n}</div>
    <p class="muted">első próbálkozásra jó • ⭐ +${SES.xp} XP${SES.maxCombo >= 3 ? ' • leghosszabb sorozat: 🔥' + SES.maxCombo : ''}</p>
    ${SES.lvlUp ? `<p><b>⬆️ Szintet léptél: ${esc(levelInfo(S.xp).name)}!</b></p>` : ''}
  </section>
  ${bad.length ? `<section class="card"><h3>Ezeket visszahozom hamarosan:</h3>${bad.map(q => `<p class="small" style="margin:8px 0">• ${esc(q.q)}<br><span class="muted">${esc(q.src)}</span></p>`).join('')}</section>` : ''}
  <div class="row"><button class="btn ghost" id="home">🏠 Kezdőlap</button><button class="btn primary" id="again">▶️ Még egy kör</button></div>`;
}
function bindSummary() {
  $('#home').onclick = () => { SES = null; go('home'); };
  $('#again').onclick = () => { SES = null; startSession({ title: 'Mai kör' }); };
}

/* ---------------- apróságok ---------------- */
let tt;
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2200); }
function confetti() {
  const c = $('#confetti'), x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
  const cols = ['#c8553d', '#e0a526', '#2e5c8a', '#2f855a', '#8fb6e8'];
  const P = Array.from({ length: 120 }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * .5, r: 4 + Math.random() * 5, c: pick(cols), vy: 2 + Math.random() * 3, vx: -1 + Math.random() * 2, a: Math.random() * 6 }));
  let f = 0; (function step() { x.clearRect(0, 0, c.width, c.height); P.forEach(p => { p.y += p.vy; p.x += p.vx; p.a += .1; x.fillStyle = p.c; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); x.restore(); }); if (++f < 160) requestAnimationFrame(step); else x.clearRect(0, 0, c.width, c.height); })();
}

render();
})();
