// cara-membuat-qr-code-wifi
module.exports = {
  title: "Jinsi ya Kutengeneza QR Code ya WiFi ili Wageni Wasilazimike Kuandika Nenosiri",
  desc: "Wageni wanahitaji tu kusoma QR Code ili kuunganishwa na WiFi. Inafaa kwa mikahawa, ofisi, nyumba za kulala wageni, na nyumbani. Hii ndiyo njia ya kuitengeneza na kuiweka.",
  tags: ["Mwongozo", "QR Code"],
  coverCaption: "Data ya WiFi kutoka kwenye ruta inaweza kuhifadhiwa ndani ya QR Code moja.",
  inlineCaption: "Wageni wa mkahawa wanaweza kuunganishwa mara moja bila kuandika nenosiri.",
  faq: [
    ["Je, simu zote zinaweza kusoma QR Code ya WiFi?", "Kamera ya kawaida ya iPhone yenye iOS 11 na kuendelea pamoja na simu nyingi za Android 10 na kuendelea zinaweza kuisoma moja kwa moja. Simu za zamani huenda zikahitaji programu ya kusoma QR."],
    ["Je, QR Code ya WiFi ni salama?", "Mtu yeyote anayesoma QR Code hiyo anaweza kuunganishwa na WiFi yako. Kwa hiyo, tumia mtandao wa wageni na usiweke QR Code ya mtandao binafsi mahali pa umma."],
    ["Nifanye nini ikiwa nenosiri la WiFi limebadilishwa?", "Tengeneza na uchapishe upya QR Code ya WiFi, kwa sababu QR Code ya zamani bado ina nenosiri la zamani."]
  ],
  body: `
<p>Kumtajia mgeni herufi moja moja za nenosiri refu la WiFi mara nyingi husumbua, hasa likiwa na herufi kubwa, tarakimu, na alama. Kwa <strong>QR Code ya WiFi</strong>, mgeni anahitaji tu kuelekeza kamera ya simu kwenye QR Code kisha anaunganishwa mara moja.</p>

<h2>Jinsi QR Code ya WiFi inavyofanya kazi</h2>
<p>QR Code ya WiFi huhifadhi jina la mtandao (SSID), aina ya usalama, na nenosiri katika muundo maalum unaotambuliwa na simu, kwa mfano <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Kamera ya kawaida ya iPhone (iOS 11 na kuendelea) na simu nyingi za Android (Android 10 na kuendelea) zinaweza kuisoma moja kwa moja, bila programu ya ziada.</p>

<h2>Hatua za kuitengeneza</h2>
<ol>
  <li>Fungua <a href="/?type=qrcode">jenereta ya QR Code</a> na uchague kichupo cha <strong>WiFi</strong> kwenye sehemu ya Jaza data.</li>
  <li>Andika <strong>jina la mtandao</strong> kama lilivyo hasa kwenye orodha ya WiFi, ikiwemo herufi kubwa na ndogo.</li>
  <li>Andika <strong>nenosiri</strong>, kisha chagua aina ya usalama. Ruta nyingi za nyumbani na ofisini hutumia WPA/WPA2/WPA3.</li>
  <li>Weka alama kwenye <strong>Mtandao uliofichwa</strong> ikiwa jina la WiFi yako halionyeshwi kwenye orodha.</li>
  <li>Ongeza fremu yenye maandishi kama "SCAN WIFI" ili wageni wajue kazi yake, kisha pakua PNG.</li>
</ol>

<h2>Uiweke wapi?</h2>
<ul>
  <li>Kadi ndogo juu ya meza ya mkahawa au mgahawa.</li>
  <li>Ukutani mwa sebule, mapokezi, au chumba cha mikutano ofisini.</li>
  <li>Vyumba vya nyumba za kulala wageni, ikibandikwa karibu na mlango au TV.</li>
  <li>Sehemu ya chini ya ruta nyumbani, ili familia iweze kuunganisha vifaa vipya kwa urahisi.</li>
</ul>

<h2>Vidokezo vya usalama</h2>
<ul>
  <li>Tumia <strong>mtandao wa wageni</strong> (guest network) ikiwa ruta yako inauwezesha, ili wageni wasiingie kwenye mtandao uleule wa kompyuta za ofisi.</li>
  <li>Ikiwa nenosiri la WiFi limebadilishwa, tengeneza na uchapishe upya QR Code yake, kwa sababu QR Code ya zamani itakuwa na nenosiri la zamani.</li>
  <li>Usiweke QR Code ya WiFi ya mtandao binafsi mahali pa umma ambapo mtu yeyote anaweza kuipiga picha.</li>
</ul>

<h2>Ikiwa QR Code haiunganishi</h2>
<p>Kagua tena tahajia ya jina la mtandao na nenosiri, kwa sababu herufi moja isiyo sahihi hufanya simu ishindwe kuunganishwa. Hakikisha pia aina ya usalama iliyochaguliwa inalingana na mipangilio ya ruta. Kwa matatizo mengine ya usomaji, soma <a href="/artikel/barcode-tidak-bisa-dipindai">sababu za barcode kushindwa kusomwa</a>.</p>
`
};
