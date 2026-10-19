// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D we 2D ştrihkodlaryň tapawudy: Size haýsysy gerek?",
  desc: "Çyzykly ştrihkod hem, QR Code hem ştrihkoddyr, ýöne olaryň ulanylyşy dürli. Olaryň sygymyny, skanerlenişini we ulanylyş mysallaryny deňeşdiriň.",
  tags: ["Esaslar", "Ştrihkod"],
  coverCaption: "Ammardaky elde göterilýän skaner 1D we 2D ştrihkodlary okaýar.",
  inlineCaption: "Iberiş ýarlyklarynda adatça çyzykly ştrihkod ulanylýar.",
  faq: [
    ["Kassanyň skaneri QR Code-y okap bilýärmi?", "Hemmesi däl. 1D lazer skaneri diňe çyzykly ştrihkodlary okaýar. QR Code üçin kamera esasly 2D skaner ýa-da telefonyň kamerasy gerek."],
    ["Haýsy ştrihkod iň kiçisi?", "Data Matrix juda kiçi çap edip bolýan 2D ştrihkodlaryň biridir, şonuň üçin ol köplenç elektron bölekleriň, lukmançylyk enjamlarynyň we derman ýarlyklarynyň üstünde ulanylýar."],
    ["Bölek satuw harytlarynda EAN-13-iň ýerine QR Code ulanyp bolýarmy?", "Bölek satuw dükanynda satmak üçin harydyňyza barybir hasaba alnan EAN-13 ýa-da UPC gerek. QR Code-y gaplama goşmaça hökmünde goşup bolýar, meselem, haryt barada maglumat ýa-da mahabat üçin."]
  ],
  body: `
<p>Ştrihkod döredeniňizde adatça ilkinji ýüze çykýan sorag şu: çyzykly ştrihkod ulanmalymy ýa-da QR Code? Ikisi hem ştrihkod diýlip atlandyrylýar, ýöne olaryň maglumaty saklaýyş usuly dürli, şonuň üçin ulanylyşy hem dürli.</p>

<h2>1D (çyzykly) ştrihkod</h2>
<p>1D ştrihkod dik çyzyklardan ybarat ştrihkoddyr. Maglumat bir ugur boýunça, ýagny çepden saga saklanýar. Iň tanymal mysallary harydyň gaplamasyndaky <a href="/?type=ean13">EAN-13</a> we iberiş ýarlyklaryndaky <a href="/?type=code128">Code 128</a>.</p>
<ul>
  <li>Sygymy kiçi, adatça ondan birnäçe onluga çenli nyşan.</li>
  <li>Arzan we juda çalt işleýän kassa lazer skanerleri bilen okalýar.</li>
  <li>Harydyň kody, seriýa belgisi we iberiş belgisi üçin amatly.</li>
</ul>

<h2>2D ştrihkod</h2>
<p>2D ştrihkod maglumaty iki ugur boýunça, ýagny keseligine we dikligine saklaýar, şonuň üçin oňa has köp maglumat sygýar. Mysal üçin, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> we <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Sygymy uly, onlarça nyşandan müňlerçe nyşana çenli.</li>
  <li>Telefonyň kamerasy bilen dürli ugurlardan skanerläp bolýar.</li>
  <li>Ýalňyşlyklary düzetmek mümkinçiligi bar, şonuň üçin bir bölegi zaýalansa-da okalýar.</li>
  <li>Juda kiçi edip döredip bolýar, meselem, elektron böleklerdäki Data Matrix.</li>
</ul>

<h2>Gysgaça deňeşdirme</h2>
<table>
  <thead><tr><th></th><th>1D ştrihkod</th><th>2D ştrihkod</th></tr></thead>
  <tbody>
    <tr><td>Görnüşi</td><td>Dik çyzyklar</td><td>Inedördülüň içindäki inedördüller/nokatlar</td></tr>
    <tr><td>Sygymy</td><td>Kiçi</td><td>Uly</td></tr>
    <tr><td>Skaner enjamy</td><td>Lazer skaneri ýa-da kamera</td><td>Kamera ýa-da 2D skaner</td></tr>
    <tr><td>Zaýalanmaga durnuklylygy</td><td>Çäkli</td><td>Ýalňyşlyklary düzetmek bar</td></tr>
    <tr><td>Mysallar</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Haýsysyny haçan ulanmaly?</h2>
<ul>
  <li><strong>Dükanda ýa-da minimarketde satylýan harytlar</strong>: GS1-den alnan resmi EAN-13 ulanyň. <a href="/artikel/cara-mendapatkan-barcode-ean-13">EAN-13 ştrihkodyny nädip almaly</a> atly makala serediň.</li>
  <li><strong>Ammar, tekje ýa-da iberiş ýarlyklary</strong>: Code 128 umumy saýlawdyr, sebäbi ol ykjam we harplary hem sanlary goldaýar.</li>
  <li><strong>Müşderiler üçin salgy, menýu, WiFi ýa-da kontakt</strong>: QR Code, sebäbi ony göni telefonyň kamerasy bilen skanerläp bolýar.</li>
  <li><strong>Juda kiçi ýarlyklar</strong>: Data Matrix.</li>
  <li><strong>Şahsyýet kartlary, uçar biletleri ýa-da resminamalar</strong>: PDF417 ýa-da Aztec.</li>
</ul>
<p>Ýokardaky görnüşleriň hemmesini <a href="/">I Need Barcode</a>-da mugt döredip bilersiňiz. Eger henizem ikirjiňlenýän bolsaňyz, müşderiler üçin QR Code-dan, içerki zerurlyklar üçin bolsa Code 128-den başlaň.</p>
`
};
