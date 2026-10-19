// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Razlika između 1D i 2D barkodova: Koji vam treba?",
  desc: "Linijski barkod i QR Code oboje su barkodovi, ali služe različitim svrhama. Usporedite njihov kapacitet, način skeniranja i primjere upotrebe.",
  tags: ["Osnove", "Barkodovi"],
  coverCaption: "Ručni čitač u skladištu očitava 1D i 2D barkodove.",
  inlineCaption: "Naljepnice za pošiljke obično koriste linijski barkod.",
  faq: [
    ["Može li blagajnički čitač očitati QR Code?", "Ne svaki. Laserski 1D čitač očitava samo linijske barkodove. Za QR Code potreban je 2D čitač s kamerom ili kamera mobitela."],
    ["Koji je barkod najmanji?", "Data Matrix ubraja se u 2D barkodove koji se mogu ispisati u vrlo maloj veličini pa se često koristi na elektroničkim komponentama, medicinskim proizvodima i naljepnicama lijekova."],
    ["Smijem li na maloprodajnom proizvodu koristiti QR Code umjesto EAN-13?", "Za prodaju u maloprodajnim trgovinama proizvodu je i dalje potreban registrirani EAN-13 ili UPC. QR Code možete dodati na ambalažu kao dopunu, primjerice za informacije o proizvodu ili promociju."]
  ],
  body: `
<p>Pri izradi barkoda obično se prvo postavlja pitanje: linijski barkod ili QR Code? Oboje se nazivaju barkodovima, ali podatke pohranjuju na različit način pa se razlikuje i njihova namjena.</p>

<h2>1D (linearni) barkod</h2>
<p>1D barkod sastoji se od okomitih linija. Podaci su pohranjeni u jednom smjeru, slijeva nadesno. Najpoznatiji su primjeri <a href="/?type=ean13">EAN-13</a> na ambalaži proizvoda i <a href="/?type=code128">Code 128</a> na naljepnicama za pošiljke.</p>
<ul>
  <li>Mali kapacitet, obično od desetak do nekoliko desetaka znakova.</li>
  <li>Može ga očitati jeftin i vrlo brz laserski blagajnički čitač.</li>
  <li>Prikladan za kodove proizvoda, serijske brojeve i brojeve pošiljaka.</li>
</ul>

<h2>2D barkod</h2>
<p>2D barkod pohranjuje podatke u dva smjera, vodoravno i okomito, pa u njega stane mnogo više. Primjeri su <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Velik kapacitet, od nekoliko desetaka do nekoliko tisuća znakova.</li>
  <li>Može se skenirati kamerom mobitela iz različitih smjerova.</li>
  <li>Ima ispravljanje pogrešaka pa ostaje čitljiv i kad je djelomično oštećen.</li>
  <li>Može biti vrlo malen, primjerice Data Matrix na elektroničkim komponentama.</li>
</ul>

<h2>Kratka usporedba</h2>
<table>
  <thead><tr><th></th><th>1D barkod</th><th>2D barkod</th></tr></thead>
  <tbody>
    <tr><td>Oblik</td><td>Okomite linije</td><td>Kvadratići/točkice u kvadratu</td></tr>
    <tr><td>Kapacitet</td><td>Mali</td><td>Velik</td></tr>
    <tr><td>Uređaj za skeniranje</td><td>Laserski čitač ili kamera</td><td>Kamera ili 2D čitač</td></tr>
    <tr><td>Otpornost na oštećenja</td><td>Ograničena</td><td>Ima ispravljanje pogrešaka</td></tr>
    <tr><td>Primjeri</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kada koristiti koji?</h2>
<ul>
  <li><strong>Proizvodi koji se prodaju u trgovinama</strong>: koristite službeni EAN-13 od GS1. Pogledajte <a href="/artikel/cara-mendapatkan-barcode-ean-13">kako dobiti barkod EAN-13</a>.</li>
  <li><strong>Naljepnice za skladište, police ili pošiljke</strong>: Code 128 čest je izbor jer je kompaktan i podržava slova i brojeve.</li>
  <li><strong>Poveznice, jelovnici, WiFi ili kontakti za kupce</strong>: QR Code, jer se može skenirati izravno kamerom mobitela.</li>
  <li><strong>Vrlo male naljepnice</strong>: Data Matrix.</li>
  <li><strong>Osobne iskaznice, zrakoplovne karte ili dokumenti</strong>: PDF417 ili Aztec.</li>
</ul>
<p>Sve navedene vrste možete besplatno izraditi na <a href="/">I Need Barcode</a>. Ako još dvojite, počnite s QR Code za potrebe kupaca i s Code 128 za interne potrebe.</p>
`
};
