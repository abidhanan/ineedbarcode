// Halaman artikel: penghitung dilihat/suka/dibagikan, tombol bagikan, "Artikel Populer", dan baris hak cipta
// satu baris - sama seperti ineedsave.site. Angka berasal dari /api/stats; tanpa database semua angka 0
// (suka & bagikan di perangkat ini tetap terlihat) dan Artikel Populer tetap urut terbaru.
(function () {
  'use strict';
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 3000);
  }
  function getItem(s, k) { try { return s.getItem(k); } catch (e) { return null; } }
  function setItem(s, k, v) { try { s.setItem(k, v); } catch (e) { /* penyimpanan dimatikan */ } }
  var T = window.INB_T || { copied: 'Tautan disalin.', copyPrompt: 'Salin tautan ini:' };
  var locale = document.documentElement.lang || 'id';
  function formatCount(n) {
    var options = { notation: n >= 10000 ? 'compact' : 'standard' };
    try { return new Intl.NumberFormat(locale, options).format(n || 0); } catch (e) { return String(n || 0); }
  }
  function api(body) {
    return fetch('/api/stats', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); }).catch(function () { return null; });
  }

  // ---------- artikel ini: dilihat, suka, dibagikan ----------
  var bar = document.querySelector('.post-stats');
  if (bar) {
    var slug = bar.dataset.slug;
    var el = { views: bar.querySelector('[data-views]'), likes: bar.querySelector('[data-likes]'), shares: bar.querySelector('[data-shares]') };
    var likeBtn = bar.querySelector('[data-like]');
    var likedKey = 'inb-liked:' + slug;
    var liked = getItem(localStorage, likedKey) === '1';
    var enabled = false;
    var counts = { views: 0, likes: 0, shares: 0 };

    var render = function () {
      el.views.textContent = formatCount(counts.views);
      el.likes.textContent = formatCount(enabled ? counts.likes : Math.max(counts.likes, liked ? 1 : 0));
      el.shares.textContent = formatCount(counts.shares);
      likeBtn.setAttribute('aria-pressed', String(liked));
    };
    var apply = function (data) {
      if (!data || !data.enabled) return;
      enabled = true;
      counts.views = data.views; counts.likes = data.likes; counts.shares = data.shares;
      render();
    };

    var viewedKey = 'inb-viewed:' + slug;
    if (getItem(sessionStorage, viewedKey) !== '1') {
      setItem(sessionStorage, viewedKey, '1');
      api({ slug: slug, action: 'view' }).then(apply);
    } else {
      fetch('/api/stats?slugs=' + slug).then(function (r) { return r.json(); })
        .then(function (d) { if (d && d.enabled) apply(Object.assign({ enabled: true }, d.stats[slug])); }).catch(function () {});
    }
    render();

    likeBtn.addEventListener('click', function () {
      liked = !liked;
      setItem(localStorage, likedKey, liked ? '1' : '0');
      counts.likes = Math.max(0, counts.likes + (liked ? 1 : -1));
      render();
      api({ slug: slug, action: liked ? 'like' : 'unlike' }).then(apply);
    });

    var shared = function () {
      counts.shares += 1;
      render();
      api({ slug: slug, action: 'share' }).then(apply);
    };
    var copyLink = function () {
      var done = function () { showToast(T.copied); shared(); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bar.dataset.url).then(done, function () { window.prompt(T.copyPrompt, bar.dataset.url); shared(); });
      } else {
        window.prompt(T.copyPrompt, bar.dataset.url);
        shared();
      }
    };

    // Tombol bagikan: menu bagikan perangkat bila ada, jika tidak salin tautan
    bar.querySelector('[data-share]').addEventListener('click', function () {
      if (navigator.share) {
        navigator.share({ title: bar.dataset.title, url: bar.dataset.url }).then(shared, function () { /* dibatalkan */ });
        return;
      }
      copyLink();
    });
    Array.prototype.forEach.call(bar.querySelectorAll('[data-share-link]'), function (a) { a.addEventListener('click', shared); });
    bar.querySelector('[data-copy]').addEventListener('click', copyLink);
  }

  // ---------- "Artikel Populer": paling banyak dilihat dulu (bila statistik aktif) ----------
  var popularList = document.querySelector('[data-popular]');
  function fillCounts(stats) {
    Array.prototype.forEach.call(popularList.querySelectorAll('li[data-slug]'), function (li) {
      var s = (stats && stats[li.dataset.slug]) || {};
      ['views', 'likes', 'shares'].forEach(function (key) { li.querySelector('[data-' + key + ']').textContent = formatCount(s[key]); });
    });
  }
  if (popularList && Array.isArray(window.INB_ARTICLES)) {
    var template = popularList.querySelector('li');
    fetch('/api/stats?popular=8').then(function (r) { return r.json(); }).then(function (data) {
      if (!data || !data.enabled) return null;
      var known = {};
      window.INB_ARTICLES.forEach(function (a) { known[a.slug] = a; });
      var current = popularList.dataset.current;
      var ranked = (data.popular || []).filter(function (s) { return known[s] && s !== current; });
      var rest = window.INB_ARTICLES.map(function (a) { return a.slug; }).filter(function (s) { return s !== current && ranked.indexOf(s) < 0; });
      var top = ranked.concat(rest).slice(0, 4);
      popularList.innerHTML = '';
      top.forEach(function (s) {
        var li = template.cloneNode(true);
        li.dataset.slug = s;
        li.querySelector('a').href = (window.INB_BASE || '') + '/artikel/' + s;
        li.querySelector('img').src = '/artikel/img/' + s + '.webp?v=3';
        li.querySelector('.popular-title').textContent = known[s].title;
        popularList.appendChild(li);
      });
      return fetch('/api/stats?slugs=' + top.join(',')).then(function (r) { return r.json(); });
    }).then(function (stats) { if (stats && stats.enabled) fillCounts(stats.stats); }).catch(function () {});
  }

  // ---------- /artikel: label kategori menyaring daftar artikel ----------
  var filter = document.querySelector('[data-category-filter]');
  if (filter) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.article-grid .article-card'));
    filter.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-category]');
      if (!chip) return;
      var key = chip.dataset.category;
      Array.prototype.forEach.call(filter.querySelectorAll('[data-category]'), function (b) { b.setAttribute('aria-pressed', String(b === chip)); });
      cards.forEach(function (card) { card.hidden = !!key && card.dataset.categories.split('|').indexOf(key) < 0; });
    });
  }

  // ---------- baris hak cipta satu baris ----------
  var copyLine = document.querySelector('.footer-copy');
  function fitCopyLine() {
    if (!copyLine) return;
    copyLine.style.fontSize = '';
    var size = parseFloat(getComputedStyle(copyLine).fontSize);
    while (copyLine.scrollWidth > copyLine.clientWidth + 1 && size > 8) {
      size -= 0.5;
      copyLine.style.fontSize = size + 'px';
    }
  }
  fitCopyLine();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCopyLine);
  window.addEventListener('resize', fitCopyLine);
})();
