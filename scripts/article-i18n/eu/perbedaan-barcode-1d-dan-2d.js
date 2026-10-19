// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D eta 2D barra-kodeen arteko desberdintasuna: Zein behar duzu?",
  desc: "Barra-kode linealak eta QR Codeak barra-kodeak dira biak, baina erabilera desberdinak dituzte. Alderatu edukiera, eskaneatzeko modua eta erabilera-adibideak.",
  tags: ["Oinarriak", "Barra-kodea"],
  coverCaption: "Biltegiko esku-eskanerrak 1D eta 2D barra-kodeak irakurtzen ditu.",
  inlineCaption: "Bidalketa-etiketek barra-kode linealak erabili ohi dituzte.",
  faq: [
    ["Irakur al ditzakete kutxetako eskanerrek QR Codeak?", "Ez guztiek. 1D laser-eskanerrek barra-kode linealak baino ez dituzte irakurtzen. QR Codeetarako kamera bidezko 2D eskaner bat edo telefonoaren kamera behar da."],
    ["Zein da barra-koderik txikiena?", "Data Matrix oso txiki inprima daitekeen 2D barra-kodea da, eta, horregatik, maiz erabiltzen da osagai elektronikoetan, osasun-ekipoetan eta botiken etiketetan."],
    ["Erabil al daiteke QR Code bat EAN-13ren ordez txikizkako produktuetan?", "Txikizkako dendetan saltzeko, produktuak erregistratutako EAN-13 edo UPC bat behar du oraindik. QR Codea osagarri gisa gehi daiteke ontzian, adibidez produktuaren informaziorako edo sustapenetarako."]
  ],
  body: `
<p>Barra-kode bat sortzean, normalean lehen galdera hau izaten da: barra-kode lineala ala QR Code? Biei barra-kode deitzen zaie, baina datuak modu desberdinean gordetzen dituzte, eta, beraz, erabilera ere desberdina da.</p>

<h2>1D barra-kodeak (linealak)</h2>
<p>1D barra-kodea marra bertikalez osatutako barra-kodea da. Datuak norabide bakarrean gordetzen dira, hau da, ezkerretik eskuinera. Adibiderik ezagunenak ontzietako <a href="/?type=ean13">EAN-13</a> eta bidalketa-etiketetako <a href="/?type=code128">Code 128</a> dira.</p>
<ul>
  <li>Edukiera txikia, normalean dozena batetik hainbat dozena karakterera.</li>
  <li>Kutxetako laser-eskanerrek irakur dezakete, merkeak eta oso azkarrak baitira.</li>
  <li>Egokia produktu-kodeetarako, serie-zenbakietarako eta bidalketa-zenbakietarako.</li>
</ul>

<h2>2D barra-kodeak</h2>
<p>2D barra-kodeek datuak bi norabidetan gordetzen dituzte, horizontalean eta bertikalean, eta, beraz, askoz gehiago sartzen da. Adibidez, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> eta <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Edukiera handia, hainbat dozenatik milaka karakterera.</li>
  <li>Telefonoaren kamerarekin eskanea daitezke hainbat norabidetatik.</li>
  <li>Akatsen zuzenketa dute, eta, beraz, irakurgarriak dira zati bat hondatuta egon arren.</li>
  <li>Oso txiki egin daitezke, adibidez osagai elektronikoetako Data Matrix.</li>
</ul>

<h2>Alderaketa laburra</h2>
<table>
  <thead><tr><th></th><th>1D barra-kodea</th><th>2D barra-kodea</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Marra bertikalak</td><td>Laukiak/puntuak karratu batean</td></tr>
    <tr><td>Edukiera</td><td>Txikia</td><td>Handia</td></tr>
    <tr><td>Eskaneatzeko gailua</td><td>Laser-eskanerra edo kamera</td><td>Kamera edo 2D eskanerra</td></tr>
    <tr><td>Kalteekiko erresistentzia</td><td>Mugatua</td><td>Akatsen zuzenketa du</td></tr>
    <tr><td>Adibideak</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Noiz erabili bakoitza?</h2>
<ul>
  <li><strong>Dendetan edo supermerkatu txikietan saltzen diren produktuak</strong>: erabili GS1en EAN-13 ofiziala. Ikusi <a href="/artikel/cara-mendapatkan-barcode-ean-13">nola lortu EAN-13 barra-kodea</a>.</li>
  <li><strong>Biltegi, apal edo bidalketetarako etiketak</strong>: Code 128 aukera ohikoa da, trinkoa delako eta letrak eta zenbakiak onartzen dituelako.</li>
  <li><strong>Bezeroentzako estekak, menuak, WiFi edo kontaktuak</strong>: QR Code, telefonoaren kamerarekin zuzenean eskanea daitekeelako.</li>
  <li><strong>Etiketa oso txikiak</strong>: Data Matrix.</li>
  <li><strong>Nortasun-agiriak, hegazkin-txartelak edo dokumentuak</strong>: PDF417 edo Aztec.</li>
</ul>
<p>Goiko mota guztiak doan sor ditzakezu <a href="/">I Need Barcode</a>-n. Oraindik zalantzak badituzu, hasi QR Codearekin bezeroen beharretarako eta Code 128rekin barne-beharretarako.</p>
`
};
