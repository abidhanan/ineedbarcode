// apa-itu-barcode
module.exports = {
  title: "Beth Yw Cod Bar? Diffiniad, Sut Mae'n Gweithio, a'r Mathau",
  desc: "Mae codau bar ar bron pob cynnyrch rydych chi'n ei brynu. Dewch i ddeall sut maen nhw'n gweithio, eu hanes byr, a'r mathau o god bar a ddefnyddir amlaf.",
  tags: ["Hanfodion", "Cod Bar"],
  coverCaption: "Mae'r cod bar ar y pecyn yn storio cod unigryw y cynnyrch.",
  inlineCaption: "Mae'r ariannwr yn defnyddio sganiwr i ddarllen y cod bar mewn amrantiad.",
  faq: [
    ["Beth yw'r gwahaniaeth rhwng cod bar a QR Code?", "Un math o god bar yw QR Code, sef cod bar 2D. Dim ond ychydig o nodau y mae cod bar llinellau (1D) yn eu storio, ac mae'n cael ei ddarllen o'r chwith i'r dde, tra bod QR Code yn storio data i ddau gyfeiriad, felly mae lle ynddo i ddolen, testun neu ddata WiFi."],
    ["Ydy cod bar yn storio pris y cynnyrch?", "Fel arfer, nac ydy. Dim ond cod sydd mewn cod bar cynnyrch. Mae'r pris ac enw'r cynnyrch yn cael eu cadw yn system y til, ac yna'n cael eu chwilio yn ôl y cod sy'n cael ei sganio."],
    ["Oes rhaid talu i greu cod bar?", "Nac oes. Gallwch greu delwedd cod bar am ddim, er enghraifft ar I Need Barcode. Yr unig beth sydd angen ei gofrestru am dâl yw'r rhif swyddogol ar gyfer codau bar cynnyrch manwerthu fel EAN-13 drwy GS1."]
  ],
  body: `
<p>Mae cod bar yn ffordd o ysgrifennu data ar ffurf patrwm y gall peiriant ei ddarllen. Fel arfer, llinellau du a gwyn o wahanol led yw'r patrwm, neu sgwariau bach wedi'u trefnu mewn sgwâr. Pan gaiff ei sganio, mae'r patrwm yn cael ei drosi'n ôl yn rhifau neu destun, er enghraifft cod cynnyrch, rhif olrhain neu gyfeiriad gwefan.</p>
<p>Gan mai peiriant sy'n ei ddarllen, mae cod bar yn llawer cyflymach ac yn arwain at lai o gamgymeriadau na theipio cod â llaw. Dyna pam mae codau bar yn cael eu defnyddio wrth y til, mewn warysau ac ysbytai, ar docynnau a hyd yn oed ar becynnau bwyd.</p>

<h2>Hanes byr y cod bar</h2>
<p>Cafodd y syniad o god bar ei batentu ym 1952 gan Norman Joseph Woodland a Bernard Silver yn yr Unol Daleithiau. Dim ond ym 1974 y dechreuwyd defnyddio codau bar go iawn mewn siopau, pan sganiwyd pecyn o gwm cnoi mewn archfarchnad yn Ohio gyda chod UPC. Ers hynny, mae codau bar wedi lledu ledled y byd, a heddiw cânt eu rheoli'n fyd-eang gan sefydliad safonau o'r enw GS1.</p>

<h2>Sut mae cod bar yn gweithio?</h2>
<p>Mae'r sganiwr yn taflu golau ar y cod bar ac yna'n darllen yr adlewyrchiad. Mae'r rhannau tywyll yn adlewyrchu ychydig o olau, a'r rhannau golau yn adlewyrchu llawer. Mae'r gwahaniaeth hwnnw'n cael ei droi'n gyfres o 0 ac 1, sydd wedyn yn cael ei chymharu â rheolau'r math hwnnw o god bar. Mae gan lawer o godau bar hefyd <strong>ddigid gwirio</strong> (check digit), sef y rhif olaf sy'n cael ei gyfrifo o'r rhifau o'i flaen. Os nad yw'r cyfrifiad yn cyfateb, mae'r sganiwr yn gwybod bod rhywbeth o'i le ac yn gwrthod y canlyniad.</p>
<p>Fel arfer, dim ond cod y mae'r cod bar ei hun yn ei storio. Mae gwybodaeth fel enw neu bris y cynnyrch yn cael ei chadw yn system y til neu mewn cronfa ddata, ac yna'n cael ei chwilio yn ôl y cod hwnnw.</p>

<h2>Mathau o god bar a ddefnyddir yn aml</h2>
<p>Yn gyffredinol, mae codau bar yn perthyn i ddau brif grŵp:</p>
<ul>
  <li><strong>Codau bar 1D (llinol)</strong>: llinellau fertigol sy'n cael eu darllen o'r chwith i'r dde. Enghreifftiau yw <a href="/?type=ean13">EAN-13</a> ac <a href="/?type=upca">UPC-A</a> ar gyfer cynhyrchion manwerthu, a <a href="/?type=code128">Code 128</a> a <a href="/?type=code39">Code 39</a> ar gyfer logisteg a warysau.</li>
  <li><strong>Codau bar 2D</strong>: patrwm o sgwariau sy'n storio data i ddau gyfeiriad, felly mae lle i lawer mwy. Enghreifftiau yw <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ac <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Yn ogystal, mae codau bar arbennig ar gyfer post a danfon, gofal iechyd, a safonau GS1 ar gyfer y gadwyn gyflenwi. Gallwch ddarllen esboniad manylach o'r gwahaniaethau yn yr erthygl <a href="/artikel/perbedaan-barcode-1d-dan-2d">Y Gwahaniaeth rhwng Codau Bar 1D a 2D</a>.</p>

<h2>At beth y defnyddir codau bar?</h2>
<ul>
  <li><strong>Manwerthu</strong>: cyflymu'r til a chofnodi stoc yn awtomatig.</li>
  <li><strong>Warysau a danfon</strong>: olrhain nwyddau a pharseli o un lle i'r llall.</li>
  <li><strong>Tocynnau a digwyddiadau</strong>: gwirio bod tocyn yn ddilys gydag un sgan.</li>
  <li><strong>Marchnata</strong>: mae QR Code ar daflen neu becyn yn mynd â phobl yn syth i'ch gwefan, eich bwydlen neu'ch WhatsApp.</li>
</ul>

<h2>Creu eich cod bar eich hun</h2>
<p>Does dim angen ap sy'n costio arian arnoch i greu cod bar. Ar <a href="/">I Need Barcode</a>, dewiswch y math o god bar, rhowch y data, ac yna lawrlwythwch ef fel delwedd PNG. Mae dros 100 o fathau i ddewis ohonynt, ac mae'r cyfan am ddim heb gofrestru.</p>
`
};
