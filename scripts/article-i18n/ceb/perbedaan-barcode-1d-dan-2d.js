// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D ug 2D nga Barcode: Hain ang Inyong Gikinahanglan?",
  desc: "Ang barcode nga linya ug QR Code parehong barcode, apan lahi ang ilang gamit. Itandi ang ilang kapasidad, ang paagi sa pag-scan, ug mga pananglitan sa paggamit niini.",
  tags: ["Sukaranan", "Barcode"],
  coverCaption: "Ang handheld nga scanner sa bodega mobasa sa 1D ug 2D nga barcode.",
  inlineCaption: "Ang mga label sa pagpadala kasagaran naggamit og barcode nga linya.",
  faq: [
    ["Makabasa ba og QR Code ang scanner sa kahera?", "Dili tanan. Ang 1D nga laser scanner mobasa lamang og barcode nga linya. Ang QR Code nagkinahanglan og 2D nga scanner nga nakabase sa camera o camera sa cellphone."],
    ["Hain nga barcode ang kinagamyan?", "Ang Data Matrix usa ka 2D nga barcode nga ma-imprenta nga gamay kaayo, mao nga kanunay kini gigamit sa mga piyesa sa elektroniko, kagamitan sa medisina, ug label sa tambal."],
    ["Mahimo ba nga QR Code ang akong gamiton imbes nga EAN-13 sa produktong retail?", "Aron mabaligya sa mga tindahan sa retail, ang produkto nagkinahanglan gihapon og narehistro nga EAN-13 o UPC. Ang QR Code mahimong idugang sa putos isip dugang, pananglitan alang sa impormasyon sa produkto o promosyon."]
  ],
  body: `
<p>Sa paghimo og barcode, ang unang pangutana nga kasagarang motungha mao kini: barcode nga linya ba o QR Code ang akong gamiton? Ang duha gitawag nga barcode, apan lahi ang ilang paagi sa pagtipig og datos, mao nga lahi usab ang ilang gamit.</p>

<h2>1D nga barcode (linear)</h2>
<p>Ang 1D nga barcode mao ang barcode nga gilangkoban sa mga bertikal nga linya. Ang datos gitipigan sa usa ka direksiyon, gikan sa wala paingon sa tuo. Ang labing ilado nga pananglitan mao ang <a href="/?type=ean13">EAN-13</a> sa putos sa produkto ug <a href="/?type=code128">Code 128</a> sa mga label sa pagpadala.</p>
<ul>
  <li>Gamay ang kapasidad, kasagaran napulo ug pipila hangtod sa pipila ka napulo ka karakter.</li>
  <li>Mabasa sa barato ug paspas kaayo nga laser scanner sa kahera.</li>
  <li>Angay alang sa code sa produkto, serial number, ug numero sa pagsubay sa padala.</li>
</ul>

<h2>2D nga barcode</h2>
<p>Ang 2D nga barcode nagtipig og datos sa duha ka direksiyon, pinahigda ug patindog, mao nga masudlan kini og mas daghan pa. Pananglitan ang <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ug <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Dako ang kapasidad, gikan sa pipila ka napulo hangtod sa liboan ka karakter.</li>
  <li>Ma-scan sa camera sa cellphone gikan sa lainlaing direksiyon.</li>
  <li>Adunay error correction, mao nga mabasa gihapon bisan kon nadaot ang usa ka bahin.</li>
  <li>Mahimong himoon nga gamay kaayo, pananglitan ang Data Matrix sa mga piyesa sa elektroniko.</li>
</ul>

<h2>Dali nga pagtandi</h2>
<table>
  <thead><tr><th></th><th>1D nga Barcode</th><th>2D nga Barcode</th></tr></thead>
  <tbody>
    <tr><td>Porma</td><td>Bertikal nga mga linya</td><td>Mga kuwadrado/tuldok sulod sa usa ka kuwadrado</td></tr>
    <tr><td>Kapasidad</td><td>Gamay</td><td>Dako</td></tr>
    <tr><td>Himan sa pag-scan</td><td>Laser scanner o camera</td><td>Camera o 2D nga scanner</td></tr>
    <tr><td>Kalig-on batok sa kadaot</td><td>Limitado</td><td>Adunay error correction</td></tr>
    <tr><td>Pananglitan</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kanus-a gamiton ang matag usa?</h2>
<ul>
  <li><strong>Mga produkto nga gibaligya sa tindahan o convenience store</strong>: gamita ang opisyal nga EAN-13 gikan sa GS1. Tan-awa ang <a href="/artikel/cara-mendapatkan-barcode-ean-13">unsaon pagkuha og EAN-13 nga barcode</a>.</li>
  <li><strong>Mga label sa bodega, estante, o pagpadala</strong>: ang Code 128 kasagarang pilian tungod kay compact kini ug mosuporta sa letra ug numero.</li>
  <li><strong>Link, menu, WiFi, o kontak alang sa mga kustomer</strong>: QR Code, tungod kay ma-scan kini dayon gamit ang camera sa cellphone.</li>
  <li><strong>Gagmay kaayo nga mga label</strong>: Data Matrix.</li>
  <li><strong>ID card, boarding pass, o mga dokumento</strong>: PDF417 o Aztec.</li>
</ul>
<p>Ang tanang klase sa ibabaw mahimo ninyong himoon nga libre sa <a href="/">I Need Barcode</a>. Kon dili pa kamo sigurado, sugdi sa QR Code alang sa mga panginahanglan nga may kalabotan sa kustomer ug Code 128 alang sa sulodnong panginahanglan.</p>
`
};
