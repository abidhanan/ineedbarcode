// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Az 1D és 2D vonalkódok közötti különbség: melyikre van szüksége?",
  desc: "A vonalas vonalkód és a QR Code egyaránt vonalkód, de eltérő célt szolgálnak. Hasonlítsa össze a kapacitásukat, a beolvasás módját és a felhasználási példákat.",
  tags: ["Alapok", "Vonalkód"],
  coverCaption: "A raktári kézi szkenner 1D és 2D vonalkódokat is beolvas.",
  inlineCaption: "A szállítási címkéken általában vonalas vonalkódot használnak.",
  faq: [
    ["Be tudja olvasni a pénztári szkenner a QR Code-ot?", "Nem mindegyik. Az 1D lézerszkenner csak vonalas vonalkódokat olvas. A QR Code-hoz kamerás 2D szkenner vagy telefonkamera szükséges."],
    ["Melyik a legkisebb vonalkód?", "A Data Matrix olyan 2D vonalkód, amely nagyon kicsi méretben is nyomtatható, ezért gyakran használják elektronikai alkatrészeken, orvostechnikai eszközökön és gyógyszercímkéken."],
    ["Használhatok QR Code-ot az EAN-13 helyett kiskereskedelmi termékeken?", "Az üzletekben történő értékesítéshez a terméknek továbbra is regisztrált EAN-13 vagy UPC kódra van szüksége. A QR Code kiegészítésként felkerülhet a csomagolásra, például termékinformációkhoz vagy promóciókhoz."]
  ],
  body: `
<p>Vonalkód készítésekor általában az első kérdés: vonalas vonalkód vagy QR Code? Mindkettőt vonalkódnak nevezik, de eltérő módon tárolják az adatokat, így a felhasználásuk is különbözik.</p>

<h2>1D (lineáris) vonalkód</h2>
<p>Az 1D vonalkód függőleges vonalakból álló vonalkód. Az adatokat egy irányban, balról jobbra tárolja. A legismertebb példák a termékcsomagolásokon található <a href="/?type=ean13">EAN-13</a> és a szállítási címkéken lévő <a href="/?type=code128">Code 128</a>.</p>
<ul>
  <li>Kis kapacitás, általában egy tucat és néhány tucat karakter között.</li>
  <li>Olcsó és nagyon gyors pénztári lézerszkennerrel is beolvasható.</li>
  <li>Termékkódokhoz, sorozatszámokhoz és csomagszámokhoz ideális.</li>
</ul>

<h2>2D vonalkód</h2>
<p>A 2D vonalkód két irányban, vízszintesen és függőlegesen tárolja az adatokat, így sokkal több fér el benne. Ilyen például a <a href="/?type=qrcode">QR Code</a>, a <a href="/?type=datamatrix">Data Matrix</a>, a <a href="/?type=pdf417">PDF417</a> és az <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Nagy kapacitás, néhány tucattól több ezer karakterig.</li>
  <li>Telefonkamerával különböző irányokból is beolvasható.</li>
  <li>Hibajavítással rendelkezik, így részleges sérülés esetén is olvasható marad.</li>
  <li>Nagyon kicsi méretben is elkészíthető, például Data Matrix elektronikai alkatrészeken.</li>
</ul>

<h2>Rövid összehasonlítás</h2>
<table>
  <thead><tr><th></th><th>1D vonalkód</th><th>2D vonalkód</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Függőleges vonalak</td><td>Négyzetek/pontok egy négyzetben</td></tr>
    <tr><td>Kapacitás</td><td>Kicsi</td><td>Nagy</td></tr>
    <tr><td>Beolvasó eszköz</td><td>Lézerszkenner vagy kamera</td><td>Kamera vagy 2D szkenner</td></tr>
    <tr><td>Sérüléstűrés</td><td>Korlátozott</td><td>Van hibajavítás</td></tr>
    <tr><td>Példák</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Mikor melyiket használja?</h2>
<ul>
  <li><strong>Üzletekben vagy boltokban árusított termékek</strong>: használjon hivatalos, GS1-től származó EAN-13-at. Lásd: <a href="/artikel/cara-mendapatkan-barcode-ean-13">hogyan szerezhet EAN-13 vonalkódot</a>.</li>
  <li><strong>Raktári, polc- vagy szállítási címkék</strong>: a Code 128 gyakori választás, mert tömör, és betűket és számokat is támogat.</li>
  <li><strong>Hivatkozások, étlapok, WiFi vagy névjegyek az ügyfeleknek</strong>: QR Code, mert közvetlenül telefonkamerával beolvasható.</li>
  <li><strong>Nagyon kicsi címkék</strong>: Data Matrix.</li>
  <li><strong>Személyi igazolványok, beszállókártyák vagy dokumentumok</strong>: PDF417 vagy Aztec.</li>
</ul>
<p>A fenti típusok mindegyikét ingyenesen elkészítheti az <a href="/">I Need Barcode</a> oldalon. Ha még bizonytalan, kezdje QR Code-dal az ügyfelek igényeihez, és Code 128-cal a belső igényekhez.</p>
`
};
