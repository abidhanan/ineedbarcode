// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Die verskil tussen 1D- en 2D-strepieskodes: Watter een het u nodig?",
  desc: "Lynstrepieskodes en QR Codes is albei strepieskodes, maar hulle word vir verskillende dinge gebruik. Vergelyk die kapasiteit, skanderingsmetode en gebruiksvoorbeelde.",
  tags: ["Basies", "Strepieskode"],
  coverCaption: "'n Handskandeerder in die pakhuis lees 1D- en 2D-strepieskodes.",
  inlineCaption: "Versendingsetikette gebruik gewoonlik lynstrepieskodes.",
  faq: [
    ["Kan kassaskandeerders QR Codes lees?", "Nie almal nie. 1D-laserskandeerders lees net lynstrepieskodes. Vir QR Codes is 'n kamera-gebaseerde 2D-skandeerder of 'n foon se kamera nodig."],
    ["Watter strepieskode is die kleinste?", "Data Matrix is 'n 2D-strepieskode wat baie klein gedruk kan word, en word daarom dikwels op elektroniese komponente, mediese toerusting en medisyne-etikette gebruik."],
    ["Mag ek 'n QR Code in plaas van EAN-13 op kleinhandelprodukte gebruik?", "Om in kleinhandelwinkels verkoop te word, het die produk steeds 'n geregistreerde EAN-13 of UPC nodig. 'n QR Code kan as aanvulling op die verpakking gevoeg word, byvoorbeeld vir produkinligting of promosies."]
  ],
  body: `
<p>Wanneer 'n mens 'n strepieskode maak, is die eerste vraag gewoonlik: 'n lynstrepieskode of 'n QR Code? Albei word strepieskodes genoem, maar hulle stoor data op verskillende maniere en word dus ook vir verskillende dinge gebruik.</p>

<h2>1D-strepieskodes (lineêr)</h2>
<p>'n 1D-strepieskode is 'n strepieskode wat uit vertikale strepe bestaan. Die data word in een rigting gestoor, naamlik van links na regs. Die bekendste voorbeelde is <a href="/?type=ean13">EAN-13</a> op produkverpakking en <a href="/?type=code128">Code 128</a> op versendingsetikette.</p>
<ul>
  <li>Klein kapasiteit, gewoonlik 'n dosyn tot 'n paar dosyn karakters.</li>
  <li>Kan gelees word deur kassalaserskandeerders, wat goedkoop en baie vinnig is.</li>
  <li>Geskik vir produkkodes, reeksnommers en versendingsnommers.</li>
</ul>

<h2>2D-strepieskodes</h2>
<p>'n 2D-strepieskode stoor data in twee rigtings, horisontaal en vertikaal, en kan dus baie meer bevat. Voorbeelde is <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> en <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Groot kapasiteit, van 'n paar dosyn tot duisende karakters.</li>
  <li>Kan met 'n foon se kamera uit verskillende rigtings geskandeer word.</li>
  <li>Het foutkorreksie, sodat dit leesbaar bly al is 'n deel beskadig.</li>
  <li>Kan baie klein gemaak word, byvoorbeeld Data Matrix op elektroniese komponente.</li>
</ul>

<h2>Kort vergelyking</h2>
<table>
  <thead><tr><th></th><th>1D-strepieskode</th><th>2D-strepieskode</th></tr></thead>
  <tbody>
    <tr><td>Vorm</td><td>Vertikale strepe</td><td>Blokkies/kolletjies in 'n vierkant</td></tr>
    <tr><td>Kapasiteit</td><td>Klein</td><td>Groot</td></tr>
    <tr><td>Skandeertoestel</td><td>Laserskandeerder of kamera</td><td>Kamera of 2D-skandeerder</td></tr>
    <tr><td>Bestand teen skade</td><td>Beperk</td><td>Het foutkorreksie</td></tr>
    <tr><td>Voorbeelde</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Wanneer gebruik u watter een?</h2>
<ul>
  <li><strong>Produkte wat in winkels of geriefswinkels verkoop word</strong>: gebruik 'n amptelike EAN-13 van GS1. Sien <a href="/artikel/cara-mendapatkan-barcode-ean-13">hoe om 'n EAN-13-strepieskode te kry</a>.</li>
  <li><strong>Etikette vir pakhuise, rakke of versending</strong>: Code 128 is 'n algemene keuse omdat dit kompak is en letters sowel as syfers ondersteun.</li>
  <li><strong>Skakels, spyskaarte, WiFi of kontakte vir kliënte</strong>: QR Code, omdat dit direk met die foon se kamera geskandeer kan word.</li>
  <li><strong>Baie klein etikette</strong>: Data Matrix.</li>
  <li><strong>Identiteitskaarte, vliegtuigkaartjies of dokumente</strong>: PDF417 of Aztec.</li>
</ul>
<p>Al die bogenoemde tipes kan u gratis by <a href="/">I Need Barcode</a> maak. As u nog twyfel, begin met 'n QR Code vir kliëntbehoeftes en Code 128 vir interne behoeftes.</p>
`
};
