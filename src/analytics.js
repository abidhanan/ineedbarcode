(function () {
  'use strict';

  var GA_ID = 'G-J7MWQB7Q3F';
  var CLARITY_ID = 'z08mkd1rir';
  var started = false;
  var pending = [];

  // Respect browser-level opt-out signals. No form values or barcode contents are tracked.
  if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    security_storage: 'granted'
  });
  window.gtag('set', 'allow_google_signals', false);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_flags: 'SameSite=None;Secure'
  });

  function addScript(src) {
    var script = document.createElement('script');
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function dispatch(name, params) {
    window.gtag('event', name, params || {});
    window.clarity('event', name);
  }

  window.inbTrack = function (name, params) {
    if (!name) return;
    if (!started) pending.push([name, params]);
    else dispatch(name, params);
  };

  function start() {
    if (started) return;
    started = true;
    addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID));
    addScript('https://www.clarity.ms/tag/' + CLARITY_ID);
    while (pending.length) dispatch.apply(null, pending.shift());
  }

  ['pointerdown', 'keydown', 'touchstart'].forEach(function (eventName) {
    window.addEventListener(eventName, start, { once: true, passive: true });
  });
  window.addEventListener('load', function () { setTimeout(start, 15000); }, { once: true });
}());
