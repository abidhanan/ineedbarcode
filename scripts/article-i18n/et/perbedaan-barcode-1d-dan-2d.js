// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D- ja 2D-vöötkoodide erinevused: millist teie vajate?",
  desc: "Joonkood ja QR Code on mõlemad vöötkoodid, kuid nende kasutusotstarve on erinev. Võrrelge mahtu, skannimisviisi ja kasutusnäiteid.",
  tags: ["Alused", "Vöötkoodid"],
  coverCaption: "Lao käsiskanner loeb 1D- ja 2D-vöötkoode.",
  inlineCaption: "Saatmissiltidel kasutatakse tavaliselt joonkoode.",
  faq: [
    ["Kas kassaskanner saab QR Code'i lugeda?", "Mitte kõik. 1D-laserskannerid loevad ainult joonkoode. QR Code'i jaoks on vaja kaamerapõhist 2D-skannerit või telefoni kaamerat."],
    ["Milline vöötkood on kõige väiksem?", "Data Matrix on 2D-vöötkood, mida saab printida väga väikesena, mistõttu kasutatakse seda sageli elektroonikakomponentidel, meditsiiniseadmetel ja ravimisiltidel."],
    ["Kas jaemüügitootel võib EAN-13 asemel kasutada QR Code'i?", "Kauplustes müümiseks vajab toode endiselt registreeritud EAN-13 või UPC-d. QR Code'i saab pakendile lisada täiendusena, näiteks tooteteabe või kampaaniate jaoks."]
  ],
  body: `
<p>Vöötkoodi loomisel tekib tavaliselt esimesena küsimus: kas kasutada joonkoodi või QR Code'i? Mõlemaid nimetatakse vöötkoodideks, kuid nad salvestavad andmeid erinevalt, seega on ka nende kasutusotstarve erinev.</p>

<h2>1D- (lineaarne) vöötkood</h2>
<p>1D-vöötkood koosneb vertikaalsetest joontest. Andmed salvestatakse ühes suunas, st vasakult paremale. Tuntuimad näited on <a href="/?type=ean13">EAN-13</a> tootepakenditel ja <a href="/?type=code128">Code 128</a> saatmissiltidel.</p>
<ul>
  <li>Väike maht, tavaliselt paarkümmend kuni mõnikümmend märki.</li>
  <li>Loetav odavate ja väga kiirete kassa laserskanneritega.</li>
  <li>Sobib tootekoodide, seerianumbrite ja saadetiste numbrite jaoks.</li>
</ul>

<h2>2D-vöötkood</h2>
<p>2D-vöötkood salvestab andmeid kahes suunas – horisontaalselt ja vertikaalselt –, nii et sinna mahub palju rohkem. Näiteks <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ja <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Suur maht – mõnekümnest kuni tuhandete märkideni.</li>
  <li>Skannitav telefoni kaameraga eri suundadest.</li>
  <li>Sisaldab veaparandust, seega on loetav ka osaliselt kahjustatuna.</li>
  <li>Võib olla väga väike, näiteks Data Matrix elektroonikakomponentidel.</li>
</ul>

<h2>Lühivõrdlus</h2>
<table>
  <thead><tr><th></th><th>1D-vöötkood</th><th>2D-vöötkood</th></tr></thead>
  <tbody>
    <tr><td>Kuju</td><td>Vertikaalsed jooned</td><td>Ruudud/punktid ruudu sees</td></tr>
    <tr><td>Maht</td><td>Väike</td><td>Suur</td></tr>
    <tr><td>Skannimisseade</td><td>Laserskanner või kaamera</td><td>Kaamera või 2D-skanner</td></tr>
    <tr><td>Kahjustuskindlus</td><td>Piiratud</td><td>Veaparandus olemas</td></tr>
    <tr><td>Näited</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Millal millist kasutada?</h2>
<ul>
  <li><strong>Kauplustes või supermarketites müüdavad tooted</strong>: kasutage ametlikku GS1 EAN-13. Vaadake <a href="/artikel/cara-mendapatkan-barcode-ean-13">kuidas saada EAN-13 vöötkood</a>.</li>
  <li><strong>Lao-, riiuli- või saatmissildid</strong>: Code 128 on levinud valik, sest see on kompaktne ning toetab tähti ja numbreid.</li>
  <li><strong>Lingid, menüüd, WiFi või kontaktid klientidele</strong>: QR Code, sest seda saab skannida otse telefoni kaameraga.</li>
  <li><strong>Väga väikesed sildid</strong>: Data Matrix.</li>
  <li><strong>Isikutunnistused, lennupiletid või dokumendid</strong>: PDF417 või Aztec.</li>
</ul>
<p>Kõiki eespool nimetatud liike saate tasuta luua <a href="/">I Need Barcode</a>'is. Kui te ikka kahtlete, alustage klientide vajadusteks QR Code'iga ja sisevajadusteks Code 128-ga.</p>
`
};
