// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Umehluko Phakathi Kwe-Barcode Ye-1D Ne-2D: Iyiphi Eniyidingayo?",
  desc: "I-barcode enemigqa ne-QR Code zombili zingama-barcode, kodwa ukusetshenziswa kwazo kuhlukile. Qhathanisani umthamo, indlela yokuskena, nezibonelo zokusetshenziswa kwazo.",
  tags: ["Izisekelo", "Barcode"],
  coverCaption: "Isiskena esiphathwa ngesandla endaweni yokugcina impahla sifunda ama-barcode e-1D ne-2D.",
  inlineCaption: "Amalebula okuthumela izimpahla ngokuvamile asebenzisa i-barcode enemigqa.",
  faq: [
    ["Ingabe isiskena sendawo yokukhokha singayifunda i-QR Code?", "Akusibo bonke. Isiskena se-laser se-1D sifunda i-barcode enemigqa kuphela. Ku-QR Code kudingeka isiskena se-2D esisebenzisa ikhamera noma ikhamera yefoni."],
    ["Iyiphi i-barcode encane kakhulu?", "I-Data Matrix ingenye yama-barcode e-2D angaphrintwa abe mancane kakhulu, ngakho ivame ukusetshenziswa ezingxenyeni zikagesi (electronics), emishinini yezempilo, nasemalebulini emithi."],
    ["Ingabe ngingasebenzisa i-QR Code esikhundleni se-EAN-13 emikhiqizweni yokudayisa?", "Ukuze uthengiswe ezitolo, umkhiqizo usadinga i-EAN-13 noma i-UPC ebhalisiwe. I-QR Code ingangezwa ephaketheni njengesengezo, isibonelo kolwazi lomkhiqizo noma ukuphromotha."]
  ],
  body: `
<p>Lapho nenza i-barcode, umbuzo wokuqala ovame ukuvela uthi: ngisebenzise i-barcode enemigqa noma i-QR Code? Zombili zibizwa ngokuthi ama-barcode, kodwa indlela ezigcina ngayo idatha ihlukile ngakho nokusetshenziswa kwazo kuhlukile.</p>

<h2>I-barcode ye-1D (enemigqa)</h2>
<p>I-barcode ye-1D yi-barcode enemigqa emile. Idatha igcinwa ngendlela eyodwa, okungukuthi kusukela kwesobunxele kuya kwesokudla. Izibonelo ezaziwa kakhulu yi-<a href="/?type=ean13">EAN-13</a> emaphaketheni emikhiqizo ne-<a href="/?type=code128">Code 128</a> emalebulini okuthumela izimpahla.</p>
<ul>
  <li>Umthamo omncane, ngokuvamile izinhlamvu ezingaphezudlwana kweshumi kuya emashumini ambalwa.</li>
  <li>Ingafundwa yizinhlelo zokuskena ze-laser zezindawo zokukhokha ezishibhile nezisheshayo kakhulu.</li>
  <li>Ilungele amakhodi emikhiqizo, izinombolo zochungechunge (serial), nezinombolo zokulandelela amaphasela.</li>
</ul>

<h2>I-barcode ye-2D</h2>
<p>I-barcode ye-2D igcina idatha ngezindlela ezimbili, eceleni nangezansi, ngakho iqukatha okuningi kakhulu. Izibonelo zayo yi-<a href="/?type=qrcode">QR Code</a>, i-<a href="/?type=datamatrix">Data Matrix</a>, i-<a href="/?type=pdf417">PDF417</a>, ne-<a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Umthamo omkhulu, kusukela emashumini kuya ezinkulungwaneni zezinhlamvu.</li>
  <li>Ingaskenwa ngekhamera yefoni kusukela ezinhlangothini ezahlukene.</li>
  <li>Inokulungiswa kwamaphutha, ngakho isafundeka noma ingxenye yayo yonakele.</li>
  <li>Ingenziwa ibe ncane kakhulu, isibonelo i-Data Matrix ezingxenyeni zikagesi.</li>
</ul>

<h2>Ukuqhathanisa okufushane</h2>
<table>
  <thead><tr><th></th><th>I-barcode ye-1D</th><th>I-barcode ye-2D</th></tr></thead>
  <tbody>
    <tr><td>Isimo</td><td>Imigqa emile</td><td>Amabhokisi/amachashaza ngaphakathi kwesikwele</td></tr>
    <tr><td>Umthamo</td><td>Omncane</td><td>Omkhulu</td></tr>
    <tr><td>Ithuluzi lokuskena</td><td>Isiskena se-laser noma ikhamera</td><td>Ikhamera noma isiskena se-2D</td></tr>
    <tr><td>Ukumelana nokonakala</td><td>Kunomkhawulo</td><td>Kunokulungiswa kwamaphutha</td></tr>
    <tr><td>Izibonelo</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kusetshenziswa nini eyiphi?</h2>
<ul>
  <li><strong>Imikhiqizo ethengiswa ezitolo noma ezitolo ezincane</strong>: sebenzisani i-EAN-13 esemthethweni evela ku-GS1. Bhekani <a href="/artikel/cara-mendapatkan-barcode-ean-13">indlela yokuthola i-barcode ye-EAN-13</a>.</li>
  <li><strong>Amalebula ezindawo zokugcina impahla, amashalofu, noma okuthumela izimpahla</strong>: i-Code 128 iyisinqumo esivamile ngoba iminyene futhi isekela izinhlamvu nezinombolo.</li>
  <li><strong>Izixhumanisi, imenyu, i-WiFi, noma imininingwane yokuxhumana yamakhasimende</strong>: i-QR Code, ngoba ingaskenwa ngqo ngekhamera yefoni.</li>
  <li><strong>Amalebula amancane kakhulu</strong>: i-Data Matrix.</li>
  <li><strong>Amakhadi kamazisi, amathikithi endiza, noma amadokhumenti</strong>: i-PDF417 noma i-Aztec.</li>
</ul>
<p>Zonke lezi zinhlobo ezingenhla ningazenza mahhala ku-<a href="/">I Need Barcode</a>. Uma nisangabaza, qalani nge-QR Code yezidingo zamakhasimende ne-Code 128 yezidingo zangaphakathi.</p>
`
};
