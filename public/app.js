(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var each = function (list, fn) { Array.prototype.forEach.call(list, fn); };

  // ---------- Bahasa ----------
  var LANGS = window.INB_LANGS;
  var LANG_BY = {};
  LANGS.forEach(function (l) { LANG_BY[l[0]] = l; });
  // Teks bawaan (Bahasa Indonesia + Inggris) sudah disisipkan di HTML -> halaman langsung tampil
  var BOOT = window.INB_BOOT || { lang: 'en', strings: {}, en: {} };
  var EN = BOOT.en || {};
  var dict = BOOT.strings || {};
  var lang = BOOT.lang;
  var cache = {};
  cache[BOOT.lang] = dict;
  cache.en = EN;

  function t(key, vars) {
    var s = dict[key] != null ? dict[key] : EN[key] != null ? EN[key] : key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  function loadDict(code) {
    if (cache[code]) return Promise.resolve(cache[code]);
    return fetch('/i18n/' + code + '.json').then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (d) { cache[code] = d; return d; });
  }

  // Kode bahasa browser -> kode bahasa situs
  function matchLang(tag) {
    if (!tag) return null;
    var s = String(tag).replace('_', '-');
    var low = s.toLowerCase();
    var base = low.split('-')[0];
    if (base === 'zh') return /hant|tw|hk|mo/.test(low) ? 'zh-TW' : 'zh-CN';
    if (base === 'pt') return /-(pt|ao|mz|cv|gw|st|tl)\b/.test(low) ? 'pt-PT' : 'pt-BR';
    if (base === 'no' || base === 'nn' || base === 'nb') return 'nb';
    if (base === 'tl') return 'fil';
    if (base === 'iw') return 'he';
    if (base === 'in') return 'id';
    if (base === 'ckb' || base === 'kmr') return 'ku';
    return LANG_BY[base] ? base : null;
  }

  function countryCode() {
    try {
      var c = sessionStorage.getItem('inbCountry');
      if (c != null) return Promise.resolve(c);
    } catch (e) { /* abaikan */ }
    var timeout = new Promise(function (resolve) { setTimeout(function () { resolve(''); }, 1500); });
    var req = fetch('/api/geo').then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (d) {
        var cc = (d && d.country) || '';
        try { sessionStorage.setItem('inbCountry', cc); } catch (e) { /* abaikan */ }
        return cc;
      }).catch(function () { return ''; });
    return Promise.race([req, timeout]);
  }

  // Urutan: pilihan tersimpan > ?lang= > bahasa browser (selain Inggris) > negara pengunjung > Inggris
  function detectLang() {
    try {
      var q = matchLang(new URLSearchParams(location.search).get('lang'));
      if (q) return Promise.resolve(q);
      var saved = localStorage.getItem('inbLang');
      if (saved && LANG_BY[saved]) return Promise.resolve(saved);
    } catch (e) { /* abaikan */ }
    var prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
    var primary = matchLang(prefs[0]);
    // Gunakan preferensi browser yang sudah dikenali tanpa request geo tambahan.
    // Ini mempercepat interaksi awal dan mencegah pergantian bahasa kedua yang memicu layout shift.
    if (primary) return Promise.resolve(primary);
    return countryCode().then(function (cc) {
      var byCountry = window.INB_COUNTRY_LANG[String(cc).toUpperCase()];
      if (byCountry) return byCountry;
      for (var i = 0; i < prefs.length; i++) {
        var m = matchLang(prefs[i]);
        if (m) return m;
      }
      return 'en';
    });
  }

  var loadedFonts = {};
  function applyFont(script) {
    var root = document.documentElement;
    if (!script) { root.style.removeProperty('--font'); return; }
    var family = 'Noto Sans ' + script;
    if (!loadedFonts[script]) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=' + family.replace(/ /g, '+') + ':wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
      loadedFonts[script] = true;
    }
    root.style.setProperty('--font', '"Noto Sans", "' + family + '", sans-serif');
  }

  function applyStatic() {
    each(document.querySelectorAll('[data-i18n]'), function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    each(document.querySelectorAll('[data-i18n-ph]'), function (n) { n.placeholder = t(n.getAttribute('data-i18n-ph')); });
    each(document.querySelectorAll('[data-i18n-aria]'), function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    // Kredit: nama pembuat tebal & menuju situs pribadinya
    var made = $('madeBy');
    var author = made.querySelector('a');
    var parts = t('footer.madeBy').split('{name}');
    made.textContent = '';
    made.appendChild(document.createTextNode(parts[0]));
    made.appendChild(author);
    made.appendChild(document.createTextNode(parts.slice(1).join('')));
    document.title = t('meta.title');
    each(document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]'), function (m) {
      m.setAttribute('content', t('meta.title'));
    });
    // Deskripsi metatag mengikuti bahasa pengunjung
    each(document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]'), function (m) {
      m.setAttribute('content', t('meta.desc'));
    });
  }

  // Ganti bahasa tanpa berpindah posisi: catat elemen yang sedang di atas layar, lalu kembalikan
  // posisinya setelah teks, tata letak, dan font baru selesai (tinggi teks berubah antarbahasa).
  function captureAnchor() {
    if (window.scrollY < 2) return null;
    var top = document.querySelector('.topbar').getBoundingClientRect().bottom + 4;
    // Utamakan elemen kecil yang terlihat (kartu, judul, butir); section hanya cadangan
    var groups = [
      'main .card, main .section-head, main .hero, main .steps > li, main .accordion > details, main .article-card, .site-footer',
      'main > section'
    ];
    for (var g = 0; g < groups.length; g++) {
      var list = document.querySelectorAll(groups[g]);
      var firstEdge = null, spanning = null;
      for (var i = 0; i < list.length; i++) {
        var r = list[i].getBoundingClientRect();
        if (!r.height || r.bottom <= top + 24 || r.top >= window.innerHeight) continue;
        // 1) elemen pertama yang tepi atasnya terlihat di bawah navbar
        if (r.top >= top - 1) { if (!firstEdge || r.top < firstEdge.top) firstEdge = { el: list[i], top: r.top }; }
        // 2) cadangan: elemen yang melintasi garis atas (ambil yang paling dalam/terakhir)
        else spanning = { el: list[i], top: r.top };
      }
      if (firstEdge && firstEdge.top < window.innerHeight * 0.6) return firstEdge;
      if (spanning) return spanning;
      if (firstEdge) return firstEdge;
    }
    return null;
  }
  function keepAnchor(a) {
    if (!a) return;
    var cancelled = false;
    var events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    function cancel() { cancelled = true; events.forEach(function (ev) { window.removeEventListener(ev, cancel, true); }); }
    // Berhenti hanya bila pengunjung sendiri mulai menggulir/berinteraksi
    events.forEach(function (ev) { window.addEventListener(ev, cancel, { capture: true, passive: true }); });
    function restore() {
      if (cancelled) return;
      var diff = a.el.getBoundingClientRect().top - a.top;
      if (Math.abs(diff) > 0.5) window.scrollTo({ top: window.scrollY + diff, behavior: 'instant' });
    }
    restore();
    [30, 120, 400, 900, 1500].forEach(function (ms) { setTimeout(restore, ms); });
    setTimeout(cancel, 1600);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(restore, 0); });
  }

  function setLanguage(code, save) {
    if (!LANG_BY[code]) code = 'en';
    return loadDict(code).catch(function () { return {}; }).then(function (d) {
      var anchor = captureAnchor();
      lang = code;
      dict = d;
      var meta = LANG_BY[code];
      var root = document.documentElement;
      root.lang = code;
      root.dir = window.INB_RTL.indexOf(code) >= 0 ? 'rtl' : 'ltr';
      applyFont(meta[3]);
      applyStatic();
      langPicker.setValue(code);
      var btn = $('langPicker').querySelector('.lang-btn');
      btn.querySelector('.flag').src = '/flags/' + meta[2] + '.svg';
      btn.querySelector('.lang-name').textContent = meta[1];
      btn.setAttribute('aria-label', meta[1]);
      if (save) { try { localStorage.setItem('inbLang', code); } catch (e) { /* abaikan */ } }
      refreshTexts();
      localizeArticles(code);
      // Tautan halaman per bahasa (Kebijakan Privasi, Syarat & Ketentuan)
      each(document.querySelectorAll('[data-lang-href]'), function (a) {
        a.href = (code === 'id' ? '' : '/' + code.toLowerCase()) + a.getAttribute('data-lang-href');
      });
      keepAnchor(anchor);
    });
  }

  // Kartu artikel beranda mengikuti bahasa: data dari /artikel/cards/<kode>.json (dibuat scripts/build.js);
  // bahasa yang artikelnya belum diterjemahkan memakai versi Inggris.
  var cardsCache = {};
  function fetchCards(code) {
    if (!cardsCache[code]) {
      cardsCache[code] = fetch('/artikel/cards/' + code + '.json').then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
      cardsCache[code].catch(function () { delete cardsCache[code]; });
    }
    return cardsCache[code];
  }
  function localizeArticles(code) {
    var track = $('articleTrack');
    if (!track) return;
    fetchCards(code).catch(function () { return fetchCards('en'); }).then(function (data) {
      if (lang !== code) return;
      var bySlug = {};
      data.items.forEach(function (it) { bySlug[it.slug] = it; });
      each(track.querySelectorAll('.article-card[data-slug]'), function (card) {
        var it = bySlug[card.getAttribute('data-slug')];
        if (!it) return;
        card.querySelector('.article-link').href = data.base + '/artikel/' + it.slug;
        card.querySelector('.article-thumb img').alt = it.title;
        var tags = card.querySelector('.article-tags');
        tags.textContent = '';
        it.tags.forEach(function (tg) {
          var span = document.createElement('span');
          span.textContent = tg;
          tags.appendChild(span);
        });
        card.querySelector('.article-title').textContent = it.title;
        card.querySelector('.article-excerpt').textContent = it.desc;
        card.querySelector('time').textContent = it.date;
      });
      var all = document.querySelector('.articles-all');
      if (all) all.href = data.base + '/artikel';
    }).catch(function () { /* tetap memakai kartu yang ada */ });
  }

  // ---------- Dropdown (dipakai untuk jenis barcode & bahasa) ----------
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  function Picker(root, opts) {
    var btn = root.querySelector('.picker-btn');
    var panel = root.querySelector('.picker-panel');
    var search = root.querySelector('.picker-search input');
    // Dropdown kecil (tanpa kolom cari) memakai komponen yang sama
    var hasSearch = !!search;
    if (!search) search = { value: '', addEventListener: function () {}, focus: function () {} };
    var list = root.querySelector('.picker-list');
    var groups = [];
    var value = null;
    var active = -1;
    var optionEls = [];
    var listId = root.id + '-list';
    list.id = listId;
    btn.setAttribute('aria-controls', listId);

    function norm(s) { return String(s).toLowerCase().replace(/[\s\-_()/]/g, ''); }

    function build() {
      var q = norm(search.value);
      list.innerHTML = '';
      optionEls = [];
      var seen = {};
      groups.forEach(function (g) {
        var items = g.items.filter(function (it) {
          if (!q) return true;
          if (seen[it.value]) return false;
          return norm(it.label + ' ' + (it.keywords || '')).indexOf(q) >= 0;
        });
        if (!items.length) return;
        if (g.label) {
          var h = document.createElement('div');
          h.className = 'picker-group';
          h.textContent = g.label;
          list.appendChild(h);
        }
        items.forEach(function (it) {
          if (q) seen[it.value] = true;
          var o = document.createElement('button');
          o.type = 'button';
          o.className = 'picker-option';
          o.setAttribute('role', 'option');
          o.tabIndex = -1;
          o.dataset.value = it.value;
          o.setAttribute('aria-selected', it.value === value ? 'true' : 'false');
          if (it.flag) {
            var img = document.createElement('img');
            img.className = 'flag';
            img.alt = '';
            img.width = 20; img.height = 15;
            img.loading = 'lazy';
            img.src = '/flags/' + it.flag + '.svg';
            o.appendChild(img);
          }
          var sp = document.createElement('span');
          sp.className = 'opt-label';
          sp.textContent = it.label;
          o.appendChild(sp);
          if (it.lang) sp.lang = it.lang;
          o.addEventListener('click', function () { choose(it.value); });
          o.addEventListener('mousemove', function () { setActive(optionEls.indexOf(o), false); });
          list.appendChild(o);
          optionEls.push(o);
        });
      });
      if (!optionEls.length) {
        var e = document.createElement('div');
        e.className = 'picker-empty';
        e.textContent = opts.empty();
        list.appendChild(e);
      }
      if (q) setActive(0, false);
      else if (opts.scrollToSelected) setActive(optionEls.findIndex(function (o) { return o.dataset.value === value; }), true);
      else setActive(-1, false);
    }

    // scroll hanya saat navigasi keyboard (atau membuka ke pilihan aktif), bukan saat kursor lewat
    function setActive(i, scroll) {
      if (optionEls[active]) optionEls[active].classList.remove('active');
      active = i;
      var o = optionEls[i];
      if (o) {
        o.classList.add('active');
        if (!scroll) return;
        var top = o.offsetTop, bottom = top + o.offsetHeight;
        if (top < list.scrollTop + 32) list.scrollTop = Math.max(0, top - 32);
        else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight;
      }
    }

    function open() {
      if (!panel.hidden) return;
      Picker.closeAll(self);
      search.value = '';
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      build();
      if (!opts.scrollToSelected) list.scrollTop = 0;
      if (!hasSearch) { list.tabIndex = -1; list.focus({ preventScroll: true }); }
      else if (!coarse) search.focus({ preventScroll: true });
    }
    function close(focusBtn) {
      if (panel.hidden) return;
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      if (focusBtn) btn.focus();
    }
    function choose(v) {
      close(true);
      opts.onSelect(v);
    }

    btn.addEventListener('click', function () { panel.hidden ? open() : close(); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(); }
    });
    search.addEventListener('input', build);
    function onKey(e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(Math.min(active + 1, optionEls.length - 1), true); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(active - 1, 0), true); }
      else if (e.key === 'Enter') { e.preventDefault(); if (optionEls[active]) choose(optionEls[active].dataset.value); }
      else if (e.key === 'Escape') { e.preventDefault(); close(true); }
      else if (e.key === 'Tab') { close(); }
    }
    search.addEventListener('keydown', onKey);
    list.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', function (e) { if (!root.contains(e.target)) close(); });

    var self = {
      setGroups: function (g) { groups = g; if (!panel.hidden) build(); },
      setValue: function (v) { value = v; if (!panel.hidden) build(); },
      close: close
    };
    Picker.all.push(self);
    return self;
  }
  Picker.all = [];
  Picker.closeAll = function (except) { Picker.all.forEach(function (p) { if (p !== except) p.close(); }); };

  // Ganti <select> bawaan browser dengan dropdown bertema situs. Mengembalikan objek dengan .value
  function upgradeSelect(sel, onChange) {
    var options = Array.prototype.map.call(sel.options, function (o) { return [o.value, o.textContent]; });
    var value = sel.value;
    var root = document.createElement('div');
    root.className = 'picker picker-select';
    root.id = sel.id + 'Picker';
    root.innerHTML = '<button type="button" class="picker-btn" aria-haspopup="listbox" aria-expanded="false">' +
      '<span class="picker-value"></span><svg class="chev" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"/></svg></button>' +
      '<div class="picker-panel" hidden><div class="picker-list" role="listbox"></div></div>';
    var btn = root.querySelector('.picker-btn');
    btn.id = sel.id; // label for=... tetap terhubung
    var api;
    var p = Picker(root, {
      scrollToSelected: true,
      onSelect: function (v) { api.value = v; if (onChange) onChange(v); },
      empty: function () { return ''; }
    });
    p.setGroups([{ label: '', items: options.map(function (o) { return { value: o[0], label: o[1] }; }) }]);
    function update() {
      var o = options.filter(function (x) { return x[0] === value; })[0] || options[0];
      value = o[0];
      root.querySelector('.picker-value').textContent = o[1];
      p.setValue(value);
    }
    api = {
      root: root,
      get value() { return value; },
      set value(v) { value = String(v); update(); }
    };
    update();
    if (sel.parentNode) sel.parentNode.replaceChild(root, sel);
    return api;
  }

  // ---------- Jenis barcode ----------
  var SYMBOLS = bwipjs.symbolList.slice();
  var BY_ID = {};
  SYMBOLS.forEach(function (s) { BY_ID[s.bcid] = s; });
  if (BY_ID.qrcode) BY_ID.qrcode.text = 'https://ineedbarcode.com';
  var NO_TYPE = null; // belum ada jenis yang dipilih saat halaman pertama dibuka

  var POPULAR = ['qrcode', 'code128', 'ean13', 'upca', 'datamatrix', 'pdf417', 'azteccode', 'code39', 'ean8', 'itf14'];
  var IS_2D = /qrcode|matrix|pdf417|aztec|maxicode|codeone|hanxin|dotcode|ultracode|codablock|code16k|code49|d3aqr|^gs1-cc$/i;
  // Jenis yang bisa menyimpan teks bebas & mudah dipindai (untuk URL, WiFi, kontak, dll.)
  var FREE_TEXT = ['qrcode', 'datamatrix', 'datamatrixrectangular', 'datamatrixrectangularextension',
    'pdf417', 'pdf417compact', 'micropdf417', 'azteccode', 'azteccodecompact',
    'hanxin', 'dotcode', 'codeone', 'ultracode'];

  var GROUPS = ['2d', '1d', 'retail', 'gs1', 'postal', 'health', 'other'];
  function groupOf(id) {
    if (/^hibc/.test(id) || ['code32', 'pzn', 'pharmacode', 'pharmacode2'].indexOf(id) >= 0) return 'health';
    if (/composite$|^gs1|^databar|^ean14$|^sscc18$|^d3aqr$/.test(id)) return 'gs1';
    if (['ean13', 'ean8', 'ean5', 'ean2', 'upca', 'upce', 'isbn', 'ismn', 'issn', 'mands'].indexOf(id) >= 0) return 'retail';
    if (['onecode', 'postnet', 'planet', 'royalmail', 'auspost', 'kix', 'japanpost', 'mailmark', 'identcode', 'leitcode'].indexOf(id) >= 0) return 'postal';
    if (IS_2D.test(id)) return '2d';
    if (['flattermarken', 'raw', 'daft', 'symbol'].indexOf(id) >= 0) return 'other';
    return '1d';
  }
  SYMBOLS.forEach(function (s) { s.group = groupOf(s.bcid); });
  function sortedIn(g) {
    return SYMBOLS.filter(function (s) { return s.group === g; })
      .sort(function (a, b) { return a.desc.localeCompare(b.desc, 'en'); });
  }

  function parseOpts(str) {
    var out = {};
    (str || '').trim().split(/\s+/).forEach(function (tok) {
      if (!tok) return;
      var i = tok.indexOf('=');
      if (i < 0) out[tok] = true;
      else out[tok.slice(0, i)] = tok.slice(i + 1);
    });
    return out;
  }

  // ---------- Jenis data ----------
  function esc(v) { return String(v || '').replace(/([\\;,:"])/g, '\\$1'); }
  function vesc(v) { return String(v || '').replace(/([\\;,])/g, '\\$1').replace(/\n/g, '\\n'); }
  function digits(v) { return String(v || '').replace(/[^\d+]/g, ''); }
  function icsDate(v) { return v ? v.replace(/[-:]/g, '') + (v.length === 16 ? '00' : '') : ''; }

  var DATA_TYPES = [
    { id: 'text', label: 'data.text', fields: [{ k: 'text', label: 'f.data', type: 'textarea', full: true }],
      build: function (v) { return v.text || ''; } },
    { id: 'url', label: 'data.url', fields: [{ k: 'url', label: 'f.website', type: 'url', ph: 'https://', full: true }],
      build: function (v) {
        var u = (v.url || '').trim();
        if (u && !/^[a-z][a-z0-9+.-]*:/i.test(u)) u = 'https://' + u;
        return u;
      } },
    { id: 'wifi', label: 'data.wifi', fields: [
        { k: 'ssid', label: 'f.ssid', type: 'text', full: true },
        { k: 'pass', label: 'f.password', type: 'text' },
        { k: 'enc', label: 'f.security', type: 'select', options: [['WPA', 'WPA/WPA2/WPA3'], ['WEP', 'WEP'], ['nopass', '@f.noPassword']], def: 'WPA' },
        { k: 'hidden', label: 'f.hidden', type: 'checkbox', full: true }],
      build: function (v) {
        if (!v.ssid) return '';
        var enc = v.enc || 'WPA';
        return 'WIFI:T:' + enc + ';S:' + esc(v.ssid) + ';' + (enc !== 'nopass' ? 'P:' + esc(v.pass) + ';' : '') + (v.hidden ? 'H:true;' : '') + ';';
      } },
    { id: 'vcard', label: 'data.contact', fields: [
        { k: 'first', label: 'f.firstName', type: 'text' },
        { k: 'last', label: 'f.lastName', type: 'text' },
        { k: 'tel', label: 'f.phone', type: 'tel', ph: '+' },
        { k: 'email', label: 'f.email', type: 'email' },
        { k: 'org', label: 'f.company', type: 'text' },
        { k: 'title', label: 'f.jobTitle', type: 'text' },
        { k: 'url', label: 'f.site', type: 'url', full: true },
        { k: 'adr', label: 'f.address', type: 'text', full: true }],
      build: function (v) {
        if (!v.first && !v.last && !v.tel && !v.email && !v.org) return '';
        var L = ['BEGIN:VCARD', 'VERSION:3.0',
          'N:' + vesc(v.last) + ';' + vesc(v.first) + ';;;',
          'FN:' + vesc([v.first, v.last].filter(Boolean).join(' ') || v.org)];
        if (v.org) L.push('ORG:' + vesc(v.org));
        if (v.title) L.push('TITLE:' + vesc(v.title));
        if (v.tel) L.push('TEL;TYPE=CELL:' + digits(v.tel));
        if (v.email) L.push('EMAIL:' + v.email.trim());
        if (v.url) L.push('URL:' + v.url.trim());
        if (v.adr) L.push('ADR:;;' + vesc(v.adr) + ';;;;');
        L.push('END:VCARD');
        return L.join('\n');
      } },
    { id: 'email', label: 'data.email', fields: [
        { k: 'to', label: 'f.to', type: 'email', ph: '@', full: true },
        { k: 'subject', label: 'f.subject', type: 'text', full: true },
        { k: 'body', label: 'f.message', type: 'textarea', full: true }],
      build: function (v) {
        if (!v.to) return '';
        var q = [];
        if (v.subject) q.push('subject=' + encodeURIComponent(v.subject));
        if (v.body) q.push('body=' + encodeURIComponent(v.body));
        return 'mailto:' + v.to.trim() + (q.length ? '?' + q.join('&') : '');
      } },
    { id: 'tel', label: 'data.phone', fields: [{ k: 'tel', label: 'f.phoneNumber', type: 'tel', ph: '+', full: true }],
      build: function (v) { return v.tel ? 'tel:' + digits(v.tel) : ''; } },
    { id: 'sms', label: 'data.sms', fields: [
        { k: 'tel', label: 'f.recipient', type: 'tel', full: true },
        { k: 'msg', label: 'f.message', type: 'textarea', full: true }],
      build: function (v) { return v.tel ? 'SMSTO:' + digits(v.tel) + ':' + (v.msg || '') : ''; } },
    { id: 'wa', label: 'data.whatsapp', fields: [
        { k: 'tel', label: 'f.waNumber', type: 'tel', full: true, hint: 'f.waHint' },
        { k: 'msg', label: 'f.initialMessage', type: 'textarea', full: true }],
      build: function (v) {
        var n = String(v.tel || '').replace(/\D/g, '');
        return n ? 'https://wa.me/' + n + (v.msg ? '?text=' + encodeURIComponent(v.msg) : '') : '';
      } },
    { id: 'geo', label: 'data.location', fields: [
        { k: 'lat', label: 'f.latitude', type: 'number', ph: '-6.200000' },
        { k: 'lng', label: 'f.longitude', type: 'number', ph: '106.816666' },
        { k: 'locate', label: 'f.useLocation', type: 'button', full: true }],
      build: function (v) { return v.lat && v.lng ? 'geo:' + v.lat + ',' + v.lng : ''; } },
    { id: 'event', label: 'data.event', fields: [
        { k: 'title', label: 'f.eventName', type: 'text', full: true },
        { k: 'start', label: 'f.start', type: 'datetime-local' },
        { k: 'end', label: 'f.end', type: 'datetime-local' },
        { k: 'loc', label: 'f.venue', type: 'text', full: true }],
      build: function (v) {
        if (!v.title) return '';
        var L = ['BEGIN:VEVENT', 'SUMMARY:' + vesc(v.title)];
        if (v.start) L.push('DTSTART:' + icsDate(v.start));
        if (v.end) L.push('DTEND:' + icsDate(v.end));
        if (v.loc) L.push('LOCATION:' + vesc(v.loc));
        L.push('END:VEVENT');
        return L.join('\n');
      } }
  ];
  var DT = {};
  DATA_TYPES.forEach(function (d) { DT[d.id] = d; });

  // ---------- State ----------
  var DEFAULTS = { scale: '4', rotate: 'N', height: '', padding: '1', bar: '#000000', bg: '#ffffff', transparent: false };
  var state = { bcid: 'qrcode', dataType: 'text', edited: false, bulk: false, bulkText: '', values: {}, last: null, typeOpts: {} };
  DATA_TYPES.forEach(function (d) { state.values[d.id] = {}; });

  var el = {
    tabs: $('dataTabs'), form: $('dataForm'), bulk: $('bulkToggle'),
    preview: $('preview'), grid: $('bulkGrid'), error: $('errorBox'), meta: $('previewMeta'), toast: $('toast'),
    scale: $('scale'), rotate: $('rotate'), height: $('height'), heightField: $('heightField'), padding: $('padding'),
    bar: $('barColor'), barHex: $('barColorHex'), bg: $('bgColor'), bgHex: $('bgColorHex'),
    includeText: $('includeText'), textField: $('textField'), transparent: $('transparent'),
    dlPng: $('dlPng'), typeValue: $('typePicker').querySelector('.picker-value')
  };

  var typePicker = Picker($('typePicker'), {
    onSelect: function (v) { setType(v); },
    scrollToSelected: true,
    empty: function () { return t('type.noResults'); }
  });
  var langPicker = Picker($('langPicker'), {
    onSelect: function (v) { setLanguage(v, true); },
    empty: function () { return t('type.noResults'); }
  });
  function langGroups() {
    var local = null, english = null;
    try {
      local = new Intl.DisplayNames([lang], { type: 'language' });
      english = new Intl.DisplayNames(['en'], { type: 'language' });
    } catch (e) { /* browser lama: cari dengan nama asli saja */ }
    return [{ label: '', items: LANGS.map(function (l) {
      var inLocal = '', inEn = '';
      try { inLocal = local ? local.of(l[0]) : ''; inEn = english ? english.of(l[0]) : ''; } catch (e) { /* abaikan */ }
      // Nama dalam bahasa aktif & Inggris hanya dipakai untuk pencarian, tidak ditampilkan
      return { value: l[0], label: l[1], flag: l[2], lang: l[0], keywords: l[0] + ' ' + inLocal + ' ' + inEn };
    }) }];
  }

  function typeGroups() {
    var popular = { label: t('group.popular'), items: POPULAR.filter(function (id) { return BY_ID[id]; }).map(function (id) {
      return { value: id, label: BY_ID[id].desc, keywords: id };
    }) };
    return [popular].concat(GROUPS.map(function (g) {
      return { label: t('group.' + g), items: sortedIn(g).map(function (s) {
        return { value: s.bcid, label: s.desc, keywords: s.bcid + ' ' + t('group.' + g) };
      }) };
    }));
  }

  // ---------- Pilih jenis ----------
  // Label tombol jenis: nama jenis, atau ajakan memilih bila belum ada
  function updateTypeLabel() {
    var s = BY_ID[state.bcid];
    var label = s ? s.desc : t('how.s1t');
    el.typeValue.textContent = label;
    el.typeValue.closest('button').setAttribute('aria-label', label);
    el.typeValue.classList.toggle('placeholder', !s);
  }

  function setType(id, init) {
    var s = BY_ID[id];
    if (!s) return;
    state.bcid = id;
    typePicker.setValue(id);
    updateTypeLabel();

    // Opsi khusus jenis ini selalu dipakai otomatis
    var sample = parseOpts(s.opts);
    var supportsText = !!sample.includetext;
    delete sample.includetext;
    state.typeOpts = sample;
    el.textField.hidden = !supportsText;
    if (supportsText) el.includeText.checked = true;
    el.heightField.hidden = IS_2D.test(id) && !/composite$/.test(id);
    updateDesignVisibility();

    // Data terstruktur hanya untuk barcode 2D yang bisa menyimpan teks bebas
    if (state.dataType !== 'text' && FREE_TEXT.indexOf(id) < 0) {
      state.dataType = 'text';
    }
    // Contoh data mengikuti jenis terpilih selama pengguna belum mengubahnya
    if (!state.edited) state.values.text.text = s.text;

    if (!init) {
      if (window.inbTrack) window.inbTrack('select_barcode_type', { barcode_type: id });
      try {
        var u = new URL(location.href);
        u.searchParams.set('type', id);
        u.searchParams.delete('jenis'); // parameter lama
        history.replaceState(null, '', u.pathname + u.search);
      } catch (e) { /* abaikan */ }
    }
    renderTabs();
    renderForm();
    render();
  }

  // ---------- Form data ----------
  function renderTabs() {
    el.tabs.innerHTML = '';
    el.tabs.hidden = state.bulk;
    DATA_TYPES.forEach(function (d) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tab';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', d.id === state.dataType ? 'true' : 'false');
      b.textContent = t(d.label);
      b.addEventListener('click', function () {
        state.dataType = d.id;
        if (d.id !== 'text' && FREE_TEXT.indexOf(state.bcid) < 0) {
          setType('qrcode');
          showToast(t('toast.switchedQR'));
        } else {
          renderTabs();
          renderForm();
          render();
        }
      });
      el.tabs.appendChild(b);
    });
  }

  function fieldEl(dt, f) {
    var vals = state.values[dt.id];
    var wrap = document.createElement('div');
    wrap.className = 'field' + (f.full ? ' full' : '');
    var id = 'f-' + dt.id + '-' + f.k;
    var input;

    if (f.type === 'button') {
      input = document.createElement('button');
      input.type = 'button';
      input.className = 'btn';
      input.textContent = t(f.label);
      input.addEventListener('click', locateMe);
      wrap.appendChild(input);
      return wrap;
    }

    if (f.type === 'checkbox') {
      var lab = document.createElement('label');
      lab.className = 'check';
      input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = !!vals[f.k];
      input.addEventListener('change', function () { vals[f.k] = input.checked; scheduleRender(); });
      var sp = document.createElement('span');
      sp.textContent = t(f.label);
      lab.appendChild(input);
      lab.appendChild(sp);
      wrap.appendChild(lab);
      return wrap;
    }

    var label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = t(f.label);
    wrap.appendChild(label);

    if (f.type === 'textarea') {
      input = document.createElement('textarea');
      input.rows = dt.id === 'text' ? 4 : 3;
    } else if (f.type === 'select') {
      input = document.createElement('select');
      f.options.forEach(function (o) {
        var opt = document.createElement('option');
        opt.value = o[0];
        opt.textContent = o[1].charAt(0) === '@' ? t(o[1].slice(1)) : o[1];
        input.appendChild(opt);
      });
      if (vals[f.k] == null) vals[f.k] = f.def;
      input.id = id;
      input.value = vals[f.k];
      // Dropdown bertema situs, bukan <select> bawaan browser
      var api = upgradeSelect(input, function (v) { vals[f.k] = v; scheduleRender(); });
      wrap.appendChild(api.root);
      return wrap;
    } else {
      input = document.createElement('input');
      input.type = f.type;
      if (f.type === 'number') { input.inputMode = 'decimal'; input.step = 'any'; }
      if (['url', 'email', 'tel', 'number'].indexOf(f.type) >= 0) {
        input.autocapitalize = 'off';
        input.spellcheck = false;
        input.dir = 'ltr';
      }
    }
    input.id = id;
    if (f.ph) input.placeholder = f.ph;
    // Contoh format jenis terpilih ditampilkan samar, tidak diisikan
    if (dt.id === 'text' && BY_ID[state.bcid]) input.placeholder = BY_ID[state.bcid].text;
    if (f.type === 'textarea' || f.type === 'text') input.dir = 'auto';
    input.value = vals[f.k] != null ? vals[f.k] : '';
    input.addEventListener('input', function () {
      vals[f.k] = input.value;
      if (dt.id === 'text') state.edited = true;
      scheduleRender();
    });
    wrap.appendChild(input);

    if (f.hint) {
      var h = document.createElement('p');
      h.className = 'hint';
      h.textContent = t(f.hint);
      wrap.appendChild(h);
    }
    return wrap;
  }

  function renderForm() {
    el.form.innerHTML = '';
    if (state.bulk) {
      var w = document.createElement('div');
      w.className = 'field';
      var l = document.createElement('label');
      l.htmlFor = 'f-bulk';
      l.textContent = t('bulk.label');
      var ta = document.createElement('textarea');
      ta.id = 'f-bulk';
      ta.rows = 8;
      ta.spellcheck = false;
      ta.dir = 'auto';
      ta.placeholder = t('bulk.placeholder');
      ta.value = state.bulkText;
      ta.addEventListener('input', function () { state.bulkText = ta.value; scheduleRender(); });
      w.appendChild(l);
      w.appendChild(ta);
      el.form.appendChild(w);
      return;
    }
    var dt = DT[state.dataType];
    var box = document.createElement('div');
    box.className = dt.fields.length > 1 ? 'grid-2' : '';
    dt.fields.forEach(function (f) { box.appendChild(fieldEl(dt, f)); });
    el.form.appendChild(box);
  }

  function locateMe() {
    if (!navigator.geolocation) { showToast(t('geo.unsupported')); return; }
    showToast(t('geo.locating'));
    navigator.geolocation.getCurrentPosition(function (p) {
      var v = state.values.geo;
      v.lat = p.coords.latitude.toFixed(6);
      v.lng = p.coords.longitude.toFixed(6);
      renderForm();
      render();
      showToast(t('geo.found'));
    }, function () {
      showToast(t('geo.denied'));
    }, { enableHighAccuracy: true, timeout: 10000 });
  }

  // ---------- Render ----------
  function hexOf(v) {
    var m = /^#?([0-9a-f]{6})$/i.exec((v || '').trim());
    return m ? m[1].toUpperCase() : null;
  }

  function buildOpts(text) {
    var o = {};
    Object.keys(state.typeOpts).forEach(function (k) { o[k] = state.typeOpts[k]; });
    o.bcid = state.bcid;
    o.text = text;
    o.scale = +el.scale.value || 4;
    o.rotate = el.rotate.value;
    var pad = parseInt(el.padding.value, 10);
    o.padding = isNaN(pad) ? 0 : Math.max(0, Math.min(pad, 200));
    if (!el.heightField.hidden && el.height.value) {
      var h = parseFloat(el.height.value);
      if (h > 0) o.height = h;
    }
    if (!el.textField.hidden && el.includeText.checked) o.includetext = true;
    var bar = hexOf(el.barHex.value) || '000000';
    o.barcolor = bar;
    o.textcolor = bar;
    if (!el.transparent.checked) o.backgroundcolor = hexOf(el.bgHex.value) || 'FFFFFF';
    return o;
  }

  function errDetail(e) {
    var msg = (e && e.message) || String(e);
    return msg.replace(/^bwipp\.[\w-]+#\d+:\s*/, '').replace(/^bwip-js:\s*/, '');
  }
  function friendlyError(e) { return t('error.invalid', { type: BY_ID[state.bcid].desc }) + ' ' + errDetail(e); }

  // Pratinjau tajam: digambar ulang tepat seukuran piksel layar (tanpa diperbesar/diperkecil browser)
  function previewCanvas(opts, full) {
    var dpr = window.devicePixelRatio || 1;
    var boxW = Math.max(120, el.preview.clientWidth - 40);
    var maxH = 480;
    // Besar pratinjau mengikuti ukuran modul (1 px ≈ 35% kotak, 4 px ≈ 69%, 12 px penuh) dan sama untuk
    // semua bentuk desain, sehingga perubahan ukuran modul terlihat tanpa pratinjau menjadi terlalu kecil
    var mod = Math.min(12, Math.max(1, +el.scale.value || 4));
    var fraction = 0.35 + 0.65 * Math.sqrt((mod - 1) / 11);
    var cssW = Math.min(boxW, maxH * full.width / full.height) * fraction;
    var D = window.INB_DESIGN;
    var effective = D.effectiveScale(opts, state.design);
    var o = {};
    Object.keys(opts).forEach(function (k) { o[k] = opts[k]; });
    if (D.isCustom(opts, state.design)) {
      // Desain bentuk: modul bilangan bulat per 1 px agar pratinjau mengisi kotak & tetap tajam
      var units = full.width / (effective * 2);
      o.scale = Math.max(1, Math.ceil(cssW * dpr / units)) / 2;
    } else {
      o.scale = Math.max(1, Math.ceil(cssW * dpr / (full.width / effective)));
    }
    var d = {};
    Object.keys(state.design).forEach(function (k) { d[k] = state.design[k]; });
    d.minModule = 1;
    var c = window.INB_DESIGN.compose(o, d);
    // Digambar sedikit lebih besar (skala dibulatkan ke atas) lalu ditampilkan tepat selebar target,
    // agar setiap ukuran modul punya besar pratinjau yang berbeda
    var shown = Math.min(c.width / dpr, cssW, boxW);
    c.style.width = shown + 'px';
    c.setAttribute('role', 'img');
    c.setAttribute('aria-label', BY_ID[state.bcid].desc);
    return c;
  }

  // Barcode lengkap (bentuk, gaya titik, bingkai) sebagai canvas
  function makeCanvas(opts) {
    var c = window.INB_DESIGN.compose(opts, state.design);
    c.setAttribute('role', 'img');
    c.setAttribute('aria-label', BY_ID[state.bcid].desc);
    return c;
  }

  var timer = 0;
  function scheduleRender() { clearTimeout(timer); timer = setTimeout(render, 140); }

  function setError(msg) { el.error.hidden = !msg; el.error.textContent = msg || ''; }

  function showEmpty(msg) {
    el.grid.hidden = true;
    el.preview.hidden = false;
    el.preview.innerHTML = '';
    el.preview.classList.add('empty');
    el.preview.textContent = msg;
    el.meta.textContent = '';
  }

  function render() {
    clearTimeout(timer);
    queueSnap();
    el.preview.classList.toggle('checker', el.transparent.checked);
    el.dlPng.textContent = t(state.bulk ? 'dl.zip' : 'dl.png');
    if (!BY_ID[state.bcid]) {
      state.last = null;
      showEmpty(t('how.s1d'));
      setError('');
      el.dlPng.disabled = true;
      return;
    }
    if (state.bulk) { renderBulk(); return; }

    el.grid.hidden = true;
    el.preview.hidden = false;
    var dt = DT[state.dataType];
    var text = dt.build(state.values[dt.id]);
    state.last = null;

    if (!text) {
      showEmpty(t('preview.empty'));
      setError('');
      el.dlPng.disabled = true;
      return;
    }
    try {
      var opts = buildOpts(text);
      // bwip-js menambahkan scaleX/scaleY & padding ke opsi saat menggambar; pratinjau memakai salinan bersih
      // agar skalanya sendiri tidak tertimpa (barcode tanpa desain bentuk tampil sama besar dengan yang lain)
      var previewOpts = {};
      Object.keys(opts).forEach(function (k) { previewOpts[k] = opts[k]; });
      // Gambar untuk diunduh (sesuai ukuran modul pilihan)
      var full = makeCanvas(opts);
      var view = previewCanvas(previewOpts, full);
      el.preview.innerHTML = '';
      el.preview.classList.remove('empty');
      el.preview.appendChild(view);
      el.meta.textContent = full.width + ' × ' + full.height + ' px';
      state.last = { opts: opts, canvas: full };
      setError('');
      el.dlPng.disabled = false;
    } catch (e) {
      showEmpty(t('preview.failed'));
      setError(friendlyError(e));
      el.dlPng.disabled = true;
    }
  }

  var bulkItems = [];
  function renderBulk() {
    bulkItems = [];
    var lines = state.bulkText.split(/\r?\n/).map(function (s) { return s.trim(); }).filter(Boolean);
    var over = lines.length > 100;
    lines = lines.slice(0, 100);
    if (!lines.length) {
      showEmpty(t('preview.bulkEmpty'));
      setError('');
      el.dlPng.disabled = true;
      return;
    }
    el.preview.hidden = true;
    el.grid.hidden = false;
    el.grid.innerHTML = '';
    var bad = 0;
    lines.forEach(function (line, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bulk-item';
      var cap = document.createElement('span');
      cap.dir = 'auto';
      try {
        var opts = buildOpts(line);
        var c = makeCanvas(opts);
        b.appendChild(c);
        cap.textContent = line;
        b.title = line;
        var item = { text: line, opts: opts, index: i, canvas: c };
        bulkItems.push(item);
        b.addEventListener('click', function () { downloadPng(item.canvas, fileName(item)); });
      } catch (e) {
        bad++;
        b.classList.add('bad');
        b.disabled = true;
        cap.textContent = line + ' — ' + errDetail(e);
      }
      b.appendChild(cap);
      el.grid.appendChild(b);
    });
    el.meta.textContent = t('bulk.count', { n: bulkItems.length }) + (bad ? ' · ' + t('bulk.failed', { n: bad }) : '');
    setError(over ? t('bulk.limit') : '');
    el.dlPng.disabled = !bulkItems.length;
  }

  // ---------- Unduh ----------
  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'barcode';
  }
  function fileName(item) { return String(item.index + 1).padStart(3, '0') + '-' + slug(item.text); }

  function pngBlob(c) {
    return new Promise(function (resolve, reject) {
      try {
        if (c.toBlob) c.toBlob(function (b) { b ? resolve(b) : reject(new Error('PNG')); }, 'image/png');
        else resolve(dataUrlToBlob(c.toDataURL('image/png')));
      } catch (e) { reject(e); }
    });
  }
  function dataUrlToBlob(u) {
    var bin = atob(u.split(',')[1]), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: 'image/png' });
  }
  function saveBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }
  function downloadPng(canvas, base) {
    pngBlob(canvas).then(function (b) { saveBlob(b, base + '.png'); })
      .catch(function (e) { setError(friendlyError(e)); });
  }

  el.dlPng.addEventListener('click', function () {
    if (window.inbTrack) window.inbTrack('generate_barcode', {
      barcode_type: state.bcid,
      generation_mode: state.bulk ? 'bulk' : 'single',
      item_count: state.bulk ? bulkItems.length : 1
    });
    if (state.bulk) zipAll();
    else if (state.last) downloadPng(state.last.canvas, 'barcode-' + state.bcid);
  });

  // ZIP sederhana (tanpa kompresi) untuk mode massal
  var CRC_TABLE = (function () {
    var tb = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
      tb[n] = c >>> 0;
    }
    return tb;
  })();
  function crc32(buf) {
    var crc = 0xFFFFFFFF;
    for (var i = 0; i < buf.length; i++) crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }
  function makeZip(files) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0, d = new Date();
    var time = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1);
    var date = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    files.forEach(function (f) {
      var name = enc.encode(f.name), crc = crc32(f.data), size = f.data.length;
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true);
      lh.setUint16(10, time, true); lh.setUint16(12, date, true); lh.setUint32(14, crc, true);
      lh.setUint32(18, size, true); lh.setUint32(22, size, true); lh.setUint16(26, name.length, true);
      parts.push(new Uint8Array(lh.buffer), name, f.data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true);
      ch.setUint16(12, time, true); ch.setUint16(14, date, true); ch.setUint32(16, crc, true);
      ch.setUint32(20, size, true); ch.setUint32(24, size, true); ch.setUint16(28, name.length, true);
      ch.setUint32(42, offset, true);
      central.push(new Uint8Array(ch.buffer), name);
      offset += 30 + name.length + size;
    });
    var cdSize = central.reduce(function (a, b) { return a + b.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
    end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]), { type: 'application/zip' });
  }
  function zipAll() {
    if (!bulkItems.length) return;
    showToast(t('dl.preparing'));
    Promise.all(bulkItems.map(function (it) {
      return pngBlob(it.canvas).then(function (b) { return b.arrayBuffer(); })
        .then(function (ab) { return { name: fileName(it) + '.png', data: new Uint8Array(ab) }; });
    })).then(function (files) {
      saveBlob(makeZip(files), 'barcode-' + state.bcid + '.zip');
      showToast(t('dl.ready', { n: files.length }));
    }).catch(function (e) { setError(friendlyError(e)); });
  }

  var toastTimer = 0;
  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.hidden = true; }, 3500);
  }

  // ---------- Pengaturan ----------
  function syncColor(picker, hex) {
    picker.addEventListener('input', function () { hex.value = picker.value.toUpperCase(); scheduleRender(); });
    hex.addEventListener('input', function () {
      var h = hexOf(hex.value);
      if (h) { picker.value = '#' + h.toLowerCase(); scheduleRender(); }
    });
    hex.addEventListener('blur', function () { hex.value = picker.value.toUpperCase(); });
  }
  syncColor(el.bar, el.barHex);
  syncColor(el.bg, el.bgHex);
  // Ukuran modul & rotasi memakai dropdown bertema situs
  el.scale = upgradeSelect(el.scale, render);
  el.rotate = upgradeSelect(el.rotate, render);
  [el.includeText, el.transparent].forEach(function (x) { x.addEventListener('change', render); });
  [el.height, el.padding].forEach(function (x) { x.addEventListener('input', scheduleRender); });

  function applyDefaults() {
    el.scale.value = DEFAULTS.scale;
    el.rotate.value = DEFAULTS.rotate;
    el.height.value = DEFAULTS.height;
    el.padding.value = DEFAULTS.padding;
    el.bar.value = DEFAULTS.bar; el.barHex.value = DEFAULTS.bar.toUpperCase();
    el.bg.value = DEFAULTS.bg; el.bgHex.value = DEFAULTS.bg.toUpperCase();
    el.transparent.checked = DEFAULTS.transparent;
  }
  $('resetSettings').addEventListener('click', function () {
    applyDefaults();
    if (BY_ID[state.bcid]) setType(state.bcid); else render();
  });

  el.bulk.addEventListener('change', function () {
    state.bulk = el.bulk.checked;
    if (state.bulk && !state.bulkText && state.dataType === 'text' && state.values.text.text) {
      state.bulkText = state.values.text.text;
    }
    renderTabs();
    renderForm();
    render();
  });

  // ---------- Desain: bentuk, gaya titik, bingkai ----------
  state.design = { shape: 'square', dots: 'square', frame: 'none', frameText: '', frameColor: '#000000' };
  var frameTextEdited = false;
  var ICONS = {
    shape: {
      square: '<rect x="4" y="4" width="16" height="16" rx="1.5"/>',
      circle: '<circle cx="12" cy="12" r="8.5"/>',
      heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>',
      hexagon: '<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/>',
      octagon: '<path d="M8.5 3.5h7l5 5v7l-5 5h-7l-5-5v-7z"/>',
      star: '<path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L3.3 9.8l6.1-.7z"/>',
      diamond: '<path d="M12 3l9 9-9 9-9-9z"/>'
    },
    dots: {
      square: '<g class="fill"><rect x="5" y="5" width="6" height="6"/><rect x="13" y="5" width="6" height="6"/><rect x="5" y="13" width="6" height="6"/></g>',
      rounded: '<g class="fill"><rect x="5" y="5" width="6" height="6" rx="2.6"/><rect x="13" y="5" width="6" height="6" rx="2.6"/><rect x="5" y="13" width="6" height="6" rx="2.6"/></g>',
      dots: '<g class="fill"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/></g>'
    },
    frame: {
      none: '<circle cx="12" cy="12" r="8"/><path d="M6.5 17.5l11-11"/>',
      bottom: '<rect x="4" y="3" width="16" height="18" rx="2"/><path class="fill" d="M4 15h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>',
      top: '<rect x="4" y="3" width="16" height="18" rx="2"/><path class="fill" d="M4 9h16V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/>',
      rounded: '<rect x="4" y="3" width="16" height="14" rx="4"/><path d="M8 20.5h8"/>',
      corners: '<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/>',
      bubble: '<path d="M6 3h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4l-2 3-2-3H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>',
      circle: '<circle cx="12" cy="11" r="8"/><rect class="fill" x="7" y="16.5" width="10" height="4" rx="2"/>',
      banner: '<rect x="6" y="3" width="12" height="12" rx="1.5"/><path class="fill" d="M2 16h20l-2 2.5 2 2.5H2l2-2.5z"/>'
    }
  };
  var DESIGN_GROUPS = [
    { key: 'shape', box: 'shapeTiles', prefix: 'shape.', items: ['square', 'circle', 'heart', 'hexagon', 'octagon', 'star', 'diamond'] },
    { key: 'dots', box: 'dotsTiles', prefix: 'dots.', items: ['square', 'rounded', 'dots'] },
    { key: 'frame', box: 'frameTiles', prefix: 'frame.', items: ['none', 'bottom', 'top', 'rounded', 'corners', 'bubble', 'circle', 'banner'] }
  ];

  function renderDesign() {
    DESIGN_GROUPS.forEach(function (g) {
      var box = $(g.box);
      box.innerHTML = '';
      g.items.forEach(function (id) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'tile';
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', state.design[g.key] === id ? 'true' : 'false');
        b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[g.key][id] + '</svg><span></span>';
        b.lastChild.textContent = t(g.prefix + id);
        b.addEventListener('click', function () {
          state.design[g.key] = id;
          renderDesign();
          render();
        });
        box.appendChild(b);
      });
    });
    if (!frameTextEdited) {
      state.design.frameText = t('design.scanMe');
      $('frameText').value = state.design.frameText;
    }
    updateDesignVisibility();
  }

  // Bentuk & gaya titik hanya untuk kode 2D bermodul persegi; bingkai untuk semua jenis
  function updateDesignVisibility() {
    var known = !!BY_ID[state.bcid];
    var can = !known || window.INB_DESIGN.shapeable(state.bcid);
    $('shapeGroup').hidden = !can;
    $('dotsGroup').hidden = !can;
    $('shapeHint').hidden = can;
    $('frameOptions').hidden = state.design.frame === 'none';
  }

  var DESIGN_DEFAULTS = { shape: 'square', dots: 'square', frame: 'none', frameColor: '#000000' };
  $('resetDesign').addEventListener('click', function () {
    Object.keys(DESIGN_DEFAULTS).forEach(function (k) { state.design[k] = DESIGN_DEFAULTS[k]; });
    frameTextEdited = false;
    $('frameColor').value = DESIGN_DEFAULTS.frameColor;
    $('frameColorHex').value = DESIGN_DEFAULTS.frameColor.toUpperCase();
    renderDesign();
    render();
  });

  $('frameText').addEventListener('input', function () {
    frameTextEdited = true;
    state.design.frameText = this.value;
    scheduleRender();
  });
  (function () {
    var picker = $('frameColor'), hex = $('frameColorHex');
    picker.addEventListener('input', function () {
      hex.value = picker.value.toUpperCase();
      state.design.frameColor = picker.value;
      scheduleRender();
    });
    hex.addEventListener('input', function () {
      var h = hexOf(hex.value);
      if (h) { picker.value = '#' + h.toLowerCase(); state.design.frameColor = '#' + h; scheduleRender(); }
    });
    hex.addEventListener('blur', function () { hex.value = picker.value.toUpperCase(); });
  })();

  // ---------- Section jenis barcode ----------
  function goToType(id) {
    setType(id);
    $('generator').scrollIntoView({ behavior: 'smooth' });
  }

  // Tautan menu: gulir ke section tanpa menambahkan # ke alamat
  function stripHash() {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    stripHash();
  });
  // Link lama dengan # tetap dibuka di section-nya, lalu # dihapus dari alamat
  var initialTarget = location.hash ? document.getElementById(location.hash.slice(1)) : null;
  stripHash();
  function renderTypeGroups() {
    var box = $('typeGroups');
    // Sudah ada: cukup ganti teksnya (akordeon yang terbuka tetap terbuka, posisi tidak melompat)
    if (box.children.length === GROUPS.length) {
      GROUPS.forEach(function (g, i) {
        var sum = box.children[i].querySelector('summary');
        sum.firstChild.textContent = t('group.' + g);
        sum.lastChild.textContent = t('types.count', { n: sortedIn(g).length });
      });
      return;
    }
    box.innerHTML = '';
    GROUPS.forEach(function (g) {
      var list = sortedIn(g);
      var card = document.createElement('details');
      card.className = 'card';
      var h = document.createElement('summary');
      var title = document.createElement('span');
      title.textContent = t('group.' + g);
      var small = document.createElement('small');
      small.textContent = t('types.count', { n: list.length });
      h.appendChild(title);
      h.appendChild(small);
      card.appendChild(h);
      var ul = document.createElement('ul');
      ul.className = 'type-list';
      list.forEach(function (s) {
        var li = document.createElement('li');
        var b = document.createElement('button');
        b.type = 'button';
        b.textContent = s.desc;
        b.dir = 'ltr';
        b.addEventListener('click', function () { goToType(s.bcid); });
        li.appendChild(b);
        ul.appendChild(li);
      });
      card.appendChild(ul);
      box.appendChild(card);
    });
  }
  each(document.querySelectorAll('[data-type]'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); goToType(a.getAttribute('data-type')); });
  });

  // ---------- Navbar ----------
  $('year').textContent = new Date().getFullYear();
  // Baris hak cipta selalu satu baris: kecilkan huruf bila tidak muat
  function fitCredit() {
    var p = document.querySelector('.footer-bottom p');
    if (!p) return;
    p.style.fontSize = '';
    var size = parseFloat(getComputedStyle(p).fontSize);
    while (p.scrollWidth > p.clientWidth + 1 && size > 8) {
      size -= 0.5;
      p.style.fontSize = size + 'px';
    }
  }
  window.addEventListener('resize', fitCredit);

  // Pola titik latar (24px): tinggi tiap section dibulatkan ke kelipatan 24px dan pola dimulai
  // tepat di awal section pertama, sehingga garis pembatas selalu jatuh di antara baris titik.
  var PATTERN = 24;
  var snapQueued = false;
  function snapPattern() {
    snapQueued = false;
    var secs = document.querySelectorAll('main > section');
    if (!secs.length) return;
    // Margin TIDAK dihapus dulu: tinggi section tidak termasuk margin, dan menghapus-lalu-memasang
    // margin membuat scroll anchoring browser menggeser halaman sendiri (terasa di HP saat menggulir).
    var top0 = secs[0].getBoundingClientRect().top + window.scrollY;
    var py = (top0 % PATTERN) + 'px';
    if (document.body.style.getPropertyValue('--pattern-y') !== py) document.body.style.setProperty('--pattern-y', py);
    var extras = [];
    each(secs, function (sec) { extras.push((PATTERN - (sec.getBoundingClientRect().height % PATTERN)) % PATTERN); });
    each(secs, function (sec, i) {
      var want = extras[i] > 0.01 ? extras[i].toFixed(2) + 'px' : '';
      if (sec.style.marginBottom !== want) sec.style.marginBottom = want;
    });
  }
  function queueSnap() {
    if (snapQueued) return;
    snapQueued = true;
    setTimeout(snapPattern, 16);
  }
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(queueSnap);
    each(document.querySelectorAll('main > section'), function (sec) { ro.observe(sec); });
  }
  window.addEventListener('resize', queueSnap);
  // Gambar ulang pratinjau hanya bila LEBAR berubah (di HP tinggi layar berubah terus saat bar alamat muncul/hilang)
  var lastWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    scheduleRender();
  });
  if (document.fonts) document.fonts.addEventListener('loadingdone', scheduleRender);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueSnap);
  // Akordeon dibuka/tutup mengubah tinggi section
  document.addEventListener('toggle', queueSnap, true);

  // ---------- Carousel artikel: bergeser sendiri setiap 4 detik (seperti ineedsave.site) ----------
  (function () {
    var carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;
    var track = carousel.querySelector('.carousel-track');
    function rtl() { return document.documentElement.dir === 'rtl'; }
    function step() {
      var first = track.firstElementChild;
      return (first ? first.getBoundingClientRect().width : 0) + parseFloat(getComputedStyle(track).columnGap || 0);
    }
    function atEnd() { return Math.abs(track.scrollLeft) + track.clientWidth >= track.scrollWidth - 4; }
    function behavior() { return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'; }
    setInterval(function () {
      if (document.hidden) return;
      if (atEnd()) track.scrollTo({ left: 0, behavior: behavior() });
      else track.scrollBy({ left: step() * (rtl() ? -1 : 1), behavior: behavior() });
    }, 4000);
  })();

  // ---------- Navbar: tandai section yang sedang tampil ----------
  (function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
    var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    function updateNav() {
      var line = document.querySelector('.topbar').offsetHeight + window.innerHeight * 0.3;
      var current = 0;
      sections.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top <= line) current = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = sections.length - 1;
      links.forEach(function (a, i) { if (i === current) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    updateNav();
  })();

  // Teks dinamis yang perlu diperbarui saat bahasa berganti
  function refreshTexts() {
    langPicker.setGroups(langGroups());
    typePicker.setGroups(typeGroups());
    updateTypeLabel();
    renderTypeGroups();
    renderDesign();
    renderTabs();
    renderForm();
    render();
    queueSnap();
    fitCredit();
  }

  // ---------- Mulai ----------
  applyDefaults();
  // Awal: jenis barcode & data kosong (kecuali link berisi ?type=)
  var initial = NO_TYPE;
  try {
    var q = new URLSearchParams(location.search).get('type');
    if (q && BY_ID[q]) initial = q;
  } catch (e) { /* abaikan */ }
  state.bcid = initial;
  // Awal: data contoh sudah terisi (jenis barcode tetap belum dipilih)
  state.values.text.text = initial ? BY_ID[initial].text : BY_ID.qrcode.text;
  state.edited = false;
  if (initial) setType(initial, true);
  else { updateTypeLabel(); renderTabs(); renderForm(); render(); }

  // Tampilkan langsung dengan bahasa bawaan, lalu ganti bila bahasa pengunjung berbeda
  setLanguage(lang, false)
    .then(detectLang)
    .then(function (code) { return code !== lang ? setLanguage(code, false) : null; })
    .then(function () { if (initialTarget) initialTarget.scrollIntoView({ behavior: 'instant' }); });
})();
