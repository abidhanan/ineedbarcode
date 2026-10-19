// Halaman artikel: pindah ke versi bahasa pengunjung, dengan urutan yang sama seperti beranda (app.js):
// ?lang= > pilihan tersimpan > bahasa browser (selain Inggris) > negara pengunjung > Inggris.
// Mesin pencari tidak dipindahkan; setiap versi bahasa ditautkan lewat hreflang.
(function () {
  'use strict';
  var P = window.INB_PAGE;
  if (!P || /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|headless/i.test(navigator.userAgent)) return;
  var available = {};
  P.langs.forEach(function (c) { available[c] = true; });
  var LANG_BY = {};
  (window.INB_LANGS || []).forEach(function (l) { LANG_BY[l[0]] = l; });

  // Kode bahasa browser -> kode bahasa situs (sama dengan app.js)
  function matchLang(tag) {
    if (!tag) return null;
    var low = String(tag).replace('_', '-').toLowerCase();
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

  function go(code) {
    if (!code || code === P.lang) return;
    if (!available[code]) code = available.en ? 'en' : null; // bahasa tanpa terjemahan artikel: Inggris
    if (!code || code === P.lang) return;
    location.replace((code === 'id' ? '' : '/' + code.toLowerCase()) + P.rest + location.hash);
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

  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q) { go(matchLang(q)); return; }
    var saved = localStorage.getItem('inbLang');
    if (saved && LANG_BY[saved]) { go(saved); return; }
  } catch (e) { /* abaikan */ }
  var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  var primary = matchLang(prefs[0]);
  if (primary && primary !== 'en') { go(primary); return; }
  countryCode().then(function (cc) {
    var byCountry = (window.INB_COUNTRY_LANG || {})[String(cc).toUpperCase()];
    if (byCountry) return go(byCountry);
    for (var i = 0; i < prefs.length; i++) {
      var m = matchLang(prefs[i]);
      if (m) return go(m);
    }
    go('en');
  });
})();
