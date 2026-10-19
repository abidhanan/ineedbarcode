// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Id-Differenza bejn Barcodes 1D u 2D: Liema Għandek Bżonn?",
  desc: "Il-barcodes bil-linji u l-QR Code it-tnejn huma barcodes, iżda l-użu tagħhom huwa differenti. Qabbel il-kapaċità, il-mod kif jiġu skenjati u eżempji tal-użu tagħhom.",
  tags: ["Bażi", "Barcode"],
  coverCaption: "Skaner tal-idejn fil-magazzin jaqra barcodes 1D u 2D.",
  inlineCaption: "It-tikketti tal-ġarr normalment jużaw barcodes bil-linji.",
  faq: [
    ["L-iskaners tal-kaxxa jistgħu jaqraw QR Code?", "Mhux kollha. L-iskaners bil-lejżer 1D jaqraw biss barcodes bil-linji. Għal QR Code hemm bżonn skaner 2D ibbażat fuq kamera jew il-kamera tal-mowbajl."],
    ["Liema barcode huwa l-iżgħar?", "Data Matrix huwa barcode 2D li jista' jiġi stampat żgħir ħafna, u għalhekk spiss jintuża fuq komponenti elettroniċi, apparat mediku u tikketti tal-mediċini."],
    ["Nista' nuża QR Code minflok EAN-13 fuq prodotti tal-bejgħ bl-imnut?", "Biex jinbiegħu fil-ħwienet tal-bejgħ bl-imnut, il-prodotti xorta jeħtieġu EAN-13 jew UPC irreġistrat. QR Code jista' jiżdied fuq l-imballaġġ bħala supplement, pereżempju għal informazzjoni dwar il-prodott jew promozzjonijiet."]
  ],
  body: `
<p>Meta toħloq barcode, l-ewwel mistoqsija li normalment titfaċċa hija: barcode bil-linji jew QR Code? It-tnejn jissejħu barcodes, iżda jaħżnu d-data b'modi differenti, u għalhekk l-użu tagħhom ukoll huwa differenti.</p>

<h2>Barcodes 1D (lineari)</h2>
<p>Barcode 1D huwa barcode magħmul minn linji vertikali. Id-data tinħażen f'direzzjoni waħda, jiġifieri mix-xellug għal-lemin. L-iktar eżempji magħrufa huma <a href="/?type=ean13">EAN-13</a> fuq l-imballaġġ tal-prodotti u <a href="/?type=code128">Code 128</a> fuq it-tikketti tal-ġarr.</p>
<ul>
  <li>Kapaċità żgħira, normalment minn tużżana sa xi għexieren ta' karattri.</li>
  <li>Jistgħu jinqraw minn skaners bil-lejżer tal-kaxxa li huma rħas u mgħaġġlin ħafna.</li>
  <li>Adattati għal kodiċijiet tal-prodotti, numri tas-serje u numri ta' traċċar.</li>
</ul>

<h2>Barcodes 2D</h2>
<p>Il-barcodes 2D jaħżnu d-data f'żewġ direzzjonijiet, minn naħa għal oħra u 'l isfel, u għalhekk fihom post għal ħafna iktar. Eżempji huma <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> u <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapaċità kbira, minn għexieren sa eluf ta' karattri.</li>
  <li>Jistgħu jiġu skenjati bil-kamera tal-mowbajl minn diversi direzzjonijiet.</li>
  <li>Għandhom korrezzjoni tal-iżbalji, għalhekk jibqgħu jinqraw anke jekk parti minnhom tkun bil-ħsara.</li>
  <li>Jistgħu jsiru żgħar ħafna, pereżempju Data Matrix fuq komponenti elettroniċi.</li>
</ul>

<h2>Paragun qasir</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Linji vertikali</td><td>Kwadri/tikek ġo kwadru</td></tr>
    <tr><td>Kapaċità</td><td>Żgħira</td><td>Kbira</td></tr>
    <tr><td>Apparat tal-iskenjar</td><td>Skaner bil-lejżer jew kamera</td><td>Kamera jew skaner 2D</td></tr>
    <tr><td>Reżistenza għall-ħsara</td><td>Limitata</td><td>Korrezzjoni tal-iżbalji</td></tr>
    <tr><td>Eżempji</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Meta tuża liema wieħed?</h2>
<ul>
  <li><strong>Prodotti li jinbiegħu fil-ħwienet jew fil-minimarkets</strong>: uża EAN-13 uffiċjali minn GS1. Ara <a href="/artikel/cara-mendapatkan-barcode-ean-13">kif tikseb barcode EAN-13</a>.</li>
  <li><strong>Tikketti tal-magazzin, tal-ixkafef jew tal-ġarr</strong>: Code 128 huwa għażla komuni għax huwa kompatt u jappoġġa kemm ittri kif ukoll numri.</li>
  <li><strong>Links, menus, WiFi jew kuntatti għall-klijenti</strong>: QR Code, għax jista' jiġi skenjat direttament bil-kamera tal-mowbajl.</li>
  <li><strong>Tikketti żgħar ħafna</strong>: Data Matrix.</li>
  <li><strong>Karti tal-identità, boarding passes jew dokumenti</strong>: PDF417 jew Aztec.</li>
</ul>
<p>It-tipi kollha ta' hawn fuq tista' toħloqhom b'xejn fuq <a href="/">I Need Barcode</a>. Jekk għadek m'intix ċert, ibda b'QR Code għall-bżonnijiet tal-klijenti u Code 128 għall-bżonnijiet interni.</p>
`
};
