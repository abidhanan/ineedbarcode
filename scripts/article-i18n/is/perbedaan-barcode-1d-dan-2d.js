// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Munurinn á 1D- og 2D-strikamerkjum: Hvort þarft þú?",
  desc: "Línuleg strikamerki og QR Code eru hvort tveggja strikamerki, en notkun þeirra er ólík. Berðu saman getu, skönnunaraðferð og dæmi um notkun.",
  tags: ["Grunnatriði", "Strikamerki"],
  coverCaption: "Handskanni í vöruhúsi les bæði 1D- og 2D-strikamerki.",
  inlineCaption: "Sendingamiðar nota yfirleitt línuleg strikamerki.",
  faq: [
    ["Geta afgreiðsluskannar lesið QR Code?", "Ekki allir. 1D-leysiskannar lesa aðeins línuleg strikamerki. Fyrir QR Code þarf myndavélarbyggðan 2D-skanna eða myndavél síma."],
    ["Hvaða strikamerki er minnst?", "Data Matrix er 2D-strikamerki sem hægt er að prenta mjög smátt og er því oft notað á rafeindaíhluti, lækningatæki og lyfjamerkingar."],
    ["Má nota QR Code í stað EAN-13 á smásöluvörum?", "Til að hægt sé að selja vöruna í smásöluverslunum þarf hún samt skráð EAN-13 eða UPC. Bæta má QR Code við á umbúðirnar til viðbótar, til dæmis fyrir vöruupplýsingar eða kynningar."]
  ],
  body: `
<p>Þegar strikamerki er búið til vaknar yfirleitt fyrst sú spurning: á að nota línulegt strikamerki eða QR Code? Hvort tveggja kallast strikamerki, en þau geyma gögn á ólíkan hátt og notkun þeirra er því einnig ólík.</p>

<h2>1D-strikamerki (línuleg)</h2>
<p>1D-strikamerki er strikamerki úr lóðréttum strikum. Gögnin eru geymd í eina átt, það er frá vinstri til hægri. Þekktustu dæmin eru <a href="/?type=ean13">EAN-13</a> á vöruumbúðum og <a href="/?type=code128">Code 128</a> á sendingamiðum.</p>
<ul>
  <li>Lítil geta, yfirleitt frá rúmlega tug upp í nokkra tugi stafa.</li>
  <li>Hægt að lesa með leysiskönnum við afgreiðslukassa, sem eru ódýrir og mjög fljótir.</li>
  <li>Hentar fyrir vörunúmer, raðnúmer og sendingarnúmer.</li>
</ul>

<h2>2D-strikamerki</h2>
<p>2D-strikamerki geymir gögn í tvær áttir, lárétt og lóðrétt, og rúmar því mun meira. Dæmi eru <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Mikil geta, frá nokkrum tugum upp í þúsundir stafa.</li>
  <li>Hægt að skanna með myndavél síma úr ýmsum áttum.</li>
  <li>Hefur villuleiðréttingu, svo það er læsilegt þótt hluti þess sé skemmdur.</li>
  <li>Hægt að gera mjög smátt, til dæmis Data Matrix á rafeindaíhlutum.</li>
</ul>

<h2>Stuttur samanburður</h2>
<table>
  <thead><tr><th></th><th>1D-strikamerki</th><th>2D-strikamerki</th></tr></thead>
  <tbody>
    <tr><td>Lögun</td><td>Lóðrétt strik</td><td>Ferningar/punktar í ferhyrningi</td></tr>
    <tr><td>Geta</td><td>Lítil</td><td>Mikil</td></tr>
    <tr><td>Skönnunartæki</td><td>Leysiskanni eða myndavél</td><td>Myndavél eða 2D-skanni</td></tr>
    <tr><td>Þol gegn skemmdum</td><td>Takmarkað</td><td>Hefur villuleiðréttingu</td></tr>
    <tr><td>Dæmi</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Hvenær á að nota hvað?</h2>
<ul>
  <li><strong>Vörur sem seldar eru í verslunum eða smáverslunum</strong>: notaðu opinbert EAN-13 frá GS1. Sjá <a href="/artikel/cara-mendapatkan-barcode-ean-13">hvernig á að fá EAN-13-strikamerki</a>.</li>
  <li><strong>Merkingar fyrir vöruhús, hillur eða sendingar</strong>: Code 128 er algengt val því það er þétt og styður bæði bókstafi og tölustafi.</li>
  <li><strong>Tenglar, matseðlar, WiFi eða tengiliðir fyrir viðskiptavini</strong>: QR Code, því hægt er að skanna það beint með myndavél símans.</li>
  <li><strong>Mjög litlar merkingar</strong>: Data Matrix.</li>
  <li><strong>Persónuskilríki, flugmiðar eða skjöl</strong>: PDF417 eða Aztec.</li>
</ul>
<p>Allar ofangreindar tegundir getur þú búið til ókeypis hjá <a href="/">I Need Barcode</a>. Ef þú ert enn í vafa skaltu byrja á QR Code fyrir þarfir viðskiptavina og Code 128 fyrir innri þarfir.</p>
`
};
