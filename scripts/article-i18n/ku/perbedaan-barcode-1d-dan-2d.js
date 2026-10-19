// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Ferqa Barkoda 1D û 2D: Hûn Hewceyî Kîjanê Ne?",
  desc: "Barkoda xêzikî û QR Code herdu jî barkod in, lê bikaranînên wan cuda ne. Kapasîte, awayê skankirinê û mînakên bikaranînê berhev bikin.",
  tags: ["Bingehîn", "Barkod"],
  coverCaption: "Skanera destî li embarê barkodên 1D û 2D dixwîne.",
  inlineCaption: "Etîketên şandinê bi gelemperî barkoda xêzikî bi kar tînin.",
  faq: [
    ["Gelo skanera kasê dikare QR Code bixwîne?", "Ne hemû. Skanerên lazerî yên 1D tenê barkoda xêzikî dixwînin. Ji bo QR Code skanereke 2D ya li ser bingeha kamerayê an kameraya telefonê pêwîst e."],
    ["Barkoda herî piçûk kîjan e?", "Data Matrix barkodeke 2D ye ku dikare pir piçûk were çapkirin, ji ber vê yekê gelek caran li ser perçeyên elektronîkî, amûrên tenduristiyê û etîketên dermanan tê bikaranîn."],
    ["Gelo meriv dikare li ser berhemên firotana hûrde QR Code li şûna EAN-13 bi kar bîne?", "Ji bo firotina li firoşgehên hûrde, berhem hîn hewceyî EAN-13 an UPC ya tomarkirî ye. QR Code dikare wekî temamker li pakêtê were zêdekirin, wek mînak ji bo agahiyên berhemê an reklamê."]
  ],
  body: `
<p>Dema ku barkodê çêdikin, pirsa yekem a ku bi gelemperî derdikeve ev e: barkoda xêzikî an QR Code bi kar bînin? Herdu jî barkod tên gotin, lê awayê hilanîna daneyan cuda ye, ji ber vê yekê bikaranînên wan jî cuda ne.</p>

<h2>Barkoda 1D (xêzikî)</h2>
<p>Barkoda 1D barkodeke ji xêzikên vertîkal pêk tê. Dane bi yek alî ve, ango ji çepê ber bi rastê ve, tên hilanîn. Mînakên herî naskirî <a href="/?type=ean13">EAN-13</a> li ser pakêtên berheman û <a href="/?type=code128">Code 128</a> li ser etîketên şandinê ne.</p>
<ul>
  <li>Kapasîteya piçûk, bi gelemperî ji deh heta çend dehan tîpan.</li>
  <li>Dikare bi skanerên lazerî yên kasê yên erzan û pir bilez were xwendin.</li>
  <li>Ji bo kodên berheman, hejmarên rêzê û hejmarên şopandina pakêtan guncaw e.</li>
</ul>

<h2>Barkoda 2D</h2>
<p>Barkoda 2D daneyan bi du alî ve, ber bi kêlekê û ber bi jêr ve, hildigire, ji ber vê yekê gelekî zêdetir dane tê de cih digirin. Mînak: <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> û <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapasîteya mezin, ji çend dehan heta bi hezaran tîpan.</li>
  <li>Dikare bi kameraya telefonê ji aliyên cuda ve were skankirin.</li>
  <li>Rastkirina şaşiyan heye, ji ber vê yekê her çend beşek jê xera bibe jî tê xwendin.</li>
  <li>Dikare pir piçûk were çêkirin, wek mînak Data Matrix li ser perçeyên elektronîkî.</li>
</ul>

<h2>Berhevdana kurt</h2>
<table>
  <thead><tr><th></th><th>Barkoda 1D</th><th>Barkoda 2D</th></tr></thead>
  <tbody>
    <tr><td>Şikl</td><td>Xêzikên vertîkal</td><td>Çargoşe/xal di hundirê çargoşeyekê de</td></tr>
    <tr><td>Kapasîte</td><td>Piçûk</td><td>Mezin</td></tr>
    <tr><td>Amûra skankirinê</td><td>Skanera lazerî an kamera</td><td>Kamera an skanera 2D</td></tr>
    <tr><td>Berxwedana li hember xerabûnê</td><td>Sînordar</td><td>Rastkirina şaşiyan heye</td></tr>
    <tr><td>Mînak</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kengê kîjan were bikaranîn?</h2>
<ul>
  <li><strong>Berhemên ku li firoşgeh an mînîmarketan tên firotin</strong>: EAN-13 ya fermî ji GS1 bi kar bînin. Li <a href="/artikel/cara-mendapatkan-barcode-ean-13">çawa barkoda EAN-13 tê wergirtin</a> binêrin.</li>
  <li><strong>Etîketên embar, refik an şandinê</strong>: Code 128 bijareyeke gelemperî ye ji ber ku tîr e û piştgiriya tîp û hejmaran dide.</li>
  <li><strong>Girêdan, menû, WiFi an têkilî ji bo xerîdaran</strong>: QR Code, ji ber ku dikare rasterast bi kameraya telefonê were skankirin.</li>
  <li><strong>Etîketên pir piçûk</strong>: Data Matrix.</li>
  <li><strong>Kartên nasnameyê, bilêtên balafirê an belge</strong>: PDF417 an Aztec.</li>
</ul>
<p>Hemû cureyên li jor hûn dikarin belaş li ser <a href="/">I Need Barcode</a> çêkin. Heke hîn dudil in, ji bo hewcedariyên xerîdaran bi QR Code û ji bo hewcedariyên navxweyî bi Code 128 dest pê bikin.</p>
`
};
