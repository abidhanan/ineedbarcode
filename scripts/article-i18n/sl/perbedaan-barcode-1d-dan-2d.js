// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Razlika med 1D in 2D črtnimi kodami: Katero potrebujete?",
  desc: "Linearna črtna koda in QR Code sta obe črtni kodi, vendar imata različne namene. Primerjajte njuno zmogljivost, način skeniranja in primere uporabe.",
  tags: ["Osnove", "Črtne kode"],
  coverCaption: "Ročni čitalnik v skladišču bere 1D in 2D črtne kode.",
  inlineCaption: "Nalepke za pošiljke običajno uporabljajo linearno črtno kodo.",
  faq: [
    ["Ali lahko blagajniški čitalnik prebere QR Code?", "Ne vsak. Laserski 1D čitalnik bere le linearne črtne kode. Za QR Code potrebujete 2D čitalnik s kamero ali kamero telefona."],
    ["Katera črtna koda je najmanjša?", "Data Matrix spada med 2D črtne kode, ki jih je mogoče natisniti v zelo majhni velikosti, zato se pogosto uporablja na elektronskih komponentah, medicinskih pripomočkih in nalepkah zdravil."],
    ["Ali lahko na maloprodajnem izdelku namesto EAN-13 uporabim QR Code?", "Za prodajo v maloprodajnih trgovinah izdelek še vedno potrebuje registrirano kodo EAN-13 ali UPC. QR Code lahko dodate na embalažo kot dopolnilo, na primer za informacije o izdelku ali promocijo."]
  ],
  body: `
<p>Ko izdelujete črtno kodo, se običajno najprej pojavi vprašanje: linearna črtna koda ali QR Code? Obe se imenujeta črtna koda, vendar podatke shranjujeta različno, zato se razlikuje tudi njuna uporaba.</p>

<h2>1D (linearna) črtna koda</h2>
<p>1D črtno kodo sestavljajo navpične črte. Podatki so shranjeni v eni smeri, in sicer od leve proti desni. Najbolj znana primera sta <a href="/?type=ean13">EAN-13</a> na embalaži izdelkov in <a href="/?type=code128">Code 128</a> na nalepkah za pošiljke.</p>
<ul>
  <li>Majhna zmogljivost, običajno od deset do nekaj deset znakov.</li>
  <li>Prebere jo lahko poceni in zelo hiter laserski blagajniški čitalnik.</li>
  <li>Primerna za kode izdelkov, serijske številke in številke pošiljk.</li>
</ul>

<h2>2D črtna koda</h2>
<p>2D črtna koda shranjuje podatke v dveh smereh, vodoravno in navpično, zato vanjo gre veliko več. Primeri so <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> in <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Velika zmogljivost, od nekaj deset do več tisoč znakov.</li>
  <li>Lahko jo skenirate s kamero telefona iz različnih smeri.</li>
  <li>Ima popravljanje napak, zato ostane berljiva, tudi če je delno poškodovana.</li>
  <li>Lahko je zelo majhna, na primer Data Matrix na elektronskih komponentah.</li>
</ul>

<h2>Kratka primerjava</h2>
<table>
  <thead><tr><th></th><th>1D črtna koda</th><th>2D črtna koda</th></tr></thead>
  <tbody>
    <tr><td>Oblika</td><td>Navpične črte</td><td>Kvadratki/pike v kvadratu</td></tr>
    <tr><td>Zmogljivost</td><td>Majhna</td><td>Velika</td></tr>
    <tr><td>Naprava za skeniranje</td><td>Laserski čitalnik ali kamera</td><td>Kamera ali 2D čitalnik</td></tr>
    <tr><td>Odpornost na poškodbe</td><td>Omejena</td><td>Ima popravljanje napak</td></tr>
    <tr><td>Primeri</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kdaj uporabiti katero?</h2>
<ul>
  <li><strong>Izdelki, ki se prodajajo v trgovinah</strong>: uporabite uradno kodo EAN-13 od GS1. Oglejte si, <a href="/artikel/cara-mendapatkan-barcode-ean-13">kako pridobiti črtno kodo EAN-13</a>.</li>
  <li><strong>Nalepke za skladišče, police ali pošiljke</strong>: Code 128 je pogosta izbira, ker je kompaktna in podpira črke ter številke.</li>
  <li><strong>Povezave, meniji, WiFi ali stiki za stranke</strong>: QR Code, ker ga lahko skenirate neposredno s kamero telefona.</li>
  <li><strong>Zelo majhne nalepke</strong>: Data Matrix.</li>
  <li><strong>Osebne izkaznice, letalske vozovnice ali dokumenti</strong>: PDF417 ali Aztec.</li>
</ul>
<p>Vse zgoraj navedene vrste lahko brezplačno ustvarite na <a href="/">I Need Barcode</a>. Če ste še vedno v dvomih, začnite s QR Code za potrebe strank in s Code 128 za notranje potrebe.</p>
`
};
