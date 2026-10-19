// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Razlika između 1D i 2D barkodova: šta vam je potrebno?",
  desc: "Linijski barkod i QR Code su podjednako barkodovi, ali se koriste za različite stvari. Uporedite kapacitet, način skeniranja i primjere upotrebe.",
  tags: ["Osnove", "Barkod"],
  coverCaption: "Ručni skener u skladištu očitava 1D i 2D barkodove.",
  inlineCaption: "Naljepnice za dostavu obično koriste linijski barkod.",
  faq: [
    ["Može li skener na kasi očitati QR Code?", "Ne svaki. Laserski 1D skener očitava samo linijske barkodove. Za QR Code potreban je 2D skener s kamerom ili kamera telefona."],
    ["Koji je barkod najmanji?", "Data Matrix je 2D barkod koji se može odštampati veoma malim, pa se često koristi na elektronskim komponentama, medicinskim sredstvima i naljepnicama lijekova."],
    ["Smijem li koristiti QR Code umjesto EAN-13 na maloprodajnim proizvodima?", "Da bi se prodavao u maloprodajnim radnjama, proizvodu je i dalje potreban registrovan EAN-13 ili UPC. QR Code se može dodati na ambalažu kao dopuna, na primjer za informacije o proizvodu ili promocije."]
  ],
  body: `
<p>Kada pravite barkod, prvo pitanje koje se obično postavi glasi: linijski barkod ili QR Code? Oba se zovu barkodovi, ali podatke čuvaju na različit način, pa se i koriste za različite stvari.</p>

<h2>1D (linijski) barkod</h2>
<p>1D barkod je barkod u obliku vertikalnih linija. Podaci se čuvaju u jednom smjeru, slijeva nadesno. Najpoznatiji primjeri su <a href="/?type=ean13">EAN-13</a> na ambalaži proizvoda i <a href="/?type=code128">Code 128</a> na naljepnicama za dostavu.</p>
<ul>
  <li>Mali kapacitet, obično od desetak do nekoliko desetina znakova.</li>
  <li>Može ga očitati jeftin i veoma brz laserski skener na kasi.</li>
  <li>Pogodan za šifre proizvoda, serijske brojeve i brojeve pošiljki.</li>
</ul>

<h2>2D barkod</h2>
<p>2D barkod čuva podatke u dva smjera, vodoravno i uspravno, pa u njega stane mnogo više. Primjeri su <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Veliki kapacitet, od nekoliko desetina do nekoliko hiljada znakova.</li>
  <li>Može se skenirati kamerom telefona iz različitih smjerova.</li>
  <li>Ima ispravljanje grešaka, pa ostaje čitljiv čak i kada je djelimično oštećen.</li>
  <li>Može biti veoma mali, na primjer Data Matrix na elektronskim komponentama.</li>
</ul>

<h2>Kratko poređenje</h2>
<table>
  <thead><tr><th></th><th>1D barkod</th><th>2D barkod</th></tr></thead>
  <tbody>
    <tr><td>Oblik</td><td>Vertikalne linije</td><td>Kvadratići/tačke u kvadratu</td></tr>
    <tr><td>Kapacitet</td><td>Mali</td><td>Veliki</td></tr>
    <tr><td>Uređaj za skeniranje</td><td>Laserski skener ili kamera</td><td>Kamera ili 2D skener</td></tr>
    <tr><td>Otpornost na oštećenja</td><td>Ograničena</td><td>Ima ispravljanje grešaka</td></tr>
    <tr><td>Primjeri</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kada koristiti koji?</h2>
<ul>
  <li><strong>Proizvodi koji se prodaju u prodavnicama ili marketima</strong>: koristite službeni EAN-13 od GS1. Pogledajte <a href="/artikel/cara-mendapatkan-barcode-ean-13">kako dobiti barkod EAN-13</a>.</li>
  <li><strong>Naljepnice za skladište, police ili dostavu</strong>: Code 128 je čest izbor jer je zbijen i podržava slova i brojeve.</li>
  <li><strong>Linkovi, meniji, WiFi ili kontakti za kupce</strong>: QR Code, jer se može skenirati direktno kamerom telefona.</li>
  <li><strong>Veoma male naljepnice</strong>: Data Matrix.</li>
  <li><strong>Lične karte, avionske karte ili dokumenti</strong>: PDF417 ili Aztec.</li>
</ul>
<p>Sve navedene vrste možete besplatno napraviti na <a href="/">I Need Barcode</a>. Ako još niste sigurni, počnite s QR Code za potrebe kupaca i s Code 128 za interne potrebe.</p>
`
};
