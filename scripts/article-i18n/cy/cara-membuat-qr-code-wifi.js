// cara-membuat-qr-code-wifi
module.exports = {
  title: "Sut i Greu QR Code WiFi fel nad Oes Rhaid i Westeion Deipio'r Cyfrinair",
  desc: "Dim ond sganio QR Code sydd angen i westeion ei wneud i gysylltu â'r WiFi. Addas ar gyfer caffis, swyddfeydd, llety a chartrefi. Dyma sut i'w greu a'i osod.",
  tags: ["Canllaw", "QR Code"],
  coverCaption: "Gellir storio data WiFi y llwybrydd mewn un QR Code.",
  inlineCaption: "Gall gwesteion caffi gysylltu'n syth heb deipio cyfrinair.",
  faq: [
    ["Ydy pob ffôn yn gallu sganio QR Code WiFi?", "Gall camera adeiledig iPhone gydag iOS 11 neu'n ddiweddarach a'r rhan fwyaf o ffonau Android 10 neu'n ddiweddarach ei ddarllen yn uniongyrchol. Efallai y bydd angen ap sganio QR ar ffonau hŷn."],
    ["Ydy QR Code WiFi yn ddiogel?", "Gall unrhyw un sy'n sganio'r QR Code gysylltu â'ch WiFi. Felly, defnyddiwch rwydwaith gwesteion a pheidiwch â gosod QR Code ar gyfer rhwydwaith preifat mewn man cyhoeddus."],
    ["Beth ddylwn i ei wneud os bydd cyfrinair y WiFi yn newid?", "Crëwch ac argraffwch QR Code WiFi newydd, oherwydd mae'r hen QR Code yn dal i gynnwys yr hen gyfrinair."]
  ],
  body: `
<p>Mae sillafu cyfrinair WiFi hir i westeion yn aml yn drafferthus, yn enwedig os oes ynddo briflythrennau, rhifau a symbolau. Gyda <strong>QR Code WiFi</strong>, dim ond pwyntio camera'r ffôn at y QR Code sydd angen i westeion ei wneud, ac maen nhw wedi cysylltu'n syth.</p>

<h2>Sut mae QR Code WiFi yn gweithio</h2>
<p>Mae QR Code WiFi yn storio enw'r rhwydwaith (SSID), y math o ddiogelwch a'r cyfrinair mewn fformat arbennig y mae ffonau'n ei adnabod, er enghraifft <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Gall camera adeiledig iPhone (iOS 11 neu'n ddiweddarach) a'r rhan fwyaf o ffonau Android (Android 10 neu'n ddiweddarach) ei ddarllen yn uniongyrchol, heb ap ychwanegol.</p>

<h2>Camau i'w greu</h2>
<ol>
  <li>Agorwch y <a href="/?type=qrcode">generadur QR Code</a> a dewiswch y tab <strong>WiFi</strong> yn yr adran Data.</li>
  <li>Teipiwch <strong>enw'r rhwydwaith</strong> yn union fel y mae'n ymddangos yn y rhestr WiFi, gan gynnwys priflythrennau a llythrennau bach.</li>
  <li>Teipiwch y <strong>cyfrinair</strong>, ac yna dewiswch y math o ddiogelwch. Mae'r rhan fwyaf o lwybryddion cartref a swyddfa yn defnyddio WPA/WPA2/WPA3.</li>
  <li>Ticiwch <strong>Rhwydwaith cudd</strong> os nad yw enw eich WiFi yn cael ei ddangos yn y rhestr.</li>
  <li>Ychwanegwch ffrâm gyda thestun fel "SCAN WIFI" fel bod gwesteion yn gwybod beth yw ei bwrpas, ac yna lawrlwythwch PNG.</li>
</ol>

<h2>Ble i'w osod?</h2>
<ul>
  <li>Cerdyn bach ar fwrdd caffi neu fwyty.</li>
  <li>Wal yr ystafell aros, y dderbynfa neu ystafell gyfarfod y swyddfa.</li>
  <li>Ystafelloedd llety, wedi'i lynu ger y drws neu'r teledu.</li>
  <li>O dan y llwybrydd gartref, fel bod y teulu'n gallu cysylltu dyfeisiau newydd yn hawdd.</li>
</ul>

<h2>Awgrymiadau diogelwch</h2>
<ul>
  <li>Defnyddiwch <strong>rwydwaith gwesteion</strong> (guest network) os yw eich llwybrydd yn ei gefnogi, fel nad yw gwesteion ar yr un rhwydwaith â chyfrifiaduron y swyddfa.</li>
  <li>Os bydd cyfrinair y WiFi yn newid, crëwch ac argraffwch y QR Code eto, oherwydd bydd yr hen QR Code yn cynnwys yr hen gyfrinair.</li>
  <li>Peidiwch â gosod QR Code WiFi ar gyfer rhwydwaith preifat mewn man cyhoeddus lle gall unrhyw un dynnu llun ohono.</li>
</ul>

<h2>Os nad yw'r QR Code yn cysylltu</h2>
<p>Gwiriwch sillafu enw'r rhwydwaith a'r cyfrinair eto, oherwydd mae un llythyren anghywir yn golygu na fydd y ffôn yn gallu cysylltu. Gwnewch yn siŵr hefyd fod y math o ddiogelwch a ddewiswyd yn cyfateb i osodiadau'r llwybrydd. Ar gyfer problemau sganio eraill, darllenwch <a href="/artikel/barcode-tidak-bisa-dipindai">pam na ellir sganio cod bar</a>.</p>
`
};
