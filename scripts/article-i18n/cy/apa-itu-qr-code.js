// apa-itu-qr-code
module.exports = {
  title: "Beth Yw QR Code a Sut Mae'n Gweithio?",
  desc: "Gall QR Code storio dolenni, testun a hyd yn oed data WiFi, ac mae'n dal i fod yn ddarllenadwy hyd yn oed os yw rhan ohono wedi'i difrodi. Dyma sut mae'n gweithio a'i fanteision.",
  tags: ["Hanfodion", "QR Code"],
  coverCaption: "Gallwch sganio QR Code yn uniongyrchol gyda chamera eich ffôn.",
  inlineCaption: "Mae pob QR Code wedi'i wneud o sgwariau bach du a gwyn.",
  faq: [
    ["All QR Code ddod i ben?", "Nid yw QR Code statig byth yn dod i ben, oherwydd mae'r data wedi'i fewnosod yn uniongyrchol yn y ddelwedd. Gall QR Code deinamig roi'r gorau i weithio os yw'r gwasanaeth sy'n darparu'r ddolen yn cau neu os yw'r tanysgrifiad yn dod i ben."],
    ["Faint o ddata y gall QR Code ei storio?", "Gall y fersiwn fwyaf o QR Code storio hyd at 7,089 o ddigidau neu tua 2,953 beit. Fodd bynnag, po leiaf o ddata, hawsaf yw sganio'r QR Code."],
    ["Ydy QR Code yn dal yn ddarllenadwy os yw rhan ohono wedi'i difrodi?", "Ydy. Diolch i gywiro gwallau, mae QR Code yn dal yn ddarllenadwy hyd yn oed os yw tua 7% i 30% ohono wedi'i ddifrodi, yn dibynnu ar y lefel gywiro L, M, Q neu H a ddefnyddir."]
  ],
  body: `
<p>Cod bar 2D sgwâr yw QR Code (Quick Response Code), wedi'i wneud o sgwariau bach du a gwyn. Yn wahanol i god bar llinellau sydd ond yn storio rhyw ddwsin o ddigidau, gall QR Code storio dolenni gwefan, testun hir, rhifau ffôn, cysylltiadau a hyd yn oed data rhwydwaith WiFi.</p>
<p>Datblygwyd QR Code ym 1994 gan Denso Wave, cwmni o Japan, i olrhain darnau sbâr cerbydau mewn ffatrïoedd. Heddiw mae QR Code ym mhobman, o daliadau digidol i fwydlenni bwytai, oherwydd gellir ei sganio'n uniongyrchol gyda chamera ffôn.</p>

<h2>Rhannau QR Code</h2>
<ul>
  <li><strong>Tri sgwâr mawr yn y corneli</strong> (finder pattern): maen nhw'n helpu'r camera i ddod o hyd i'r QR Code a deall ei gyfeiriad, fel ei fod yn dal yn ddarllenadwy hyd yn oed os caiff ei sganio ar ongl neu ben i waered.</li>
  <li><strong>Patrwm alinio</strong> (alignment pattern): sgwâr bach sy'n helpu i ddarllen QR Code sydd wedi plygu neu sy'n cael ei weld o ongl.</li>
  <li><strong>Ardal ddata</strong>: y sgwariau bach sy'n cynnwys y wybodaeth rydych chi'n ei storio.</li>
  <li><strong>Parth tawel</strong> (quiet zone): y gofod gwag o amgylch y QR Code sy'n ei gwneud yn hawdd ei wahanu oddi wrth y cefndir.</li>
</ul>

<h2>Faint o ddata y gall ei storio?</h2>
<p>Mae gan QR Code 40 fersiwn o ran maint. Gall y fersiwn fwyaf storio hyd at 7,089 o ddigidau neu tua 2,953 beit o ddata. Yn ymarferol, po leiaf o ddata sy'n cael ei storio, mwyaf yw'r sgwariau a hawsaf yw sganio'r QR Code. Felly mae dolen fer yn well na dolen hir iawn.</p>

<h2>Yn dal yn ddarllenadwy hyd yn oed wedi'i ddifrodi</h2>
<p>Mae QR Code yn defnyddio cywiro gwallau (error correction). Mae pedair lefel:</p>
<ul>
  <li><strong>L</strong>: gellir adfer y data o hyd os yw tua 7% o'r QR Code wedi'i ddifrodi.</li>
  <li><strong>M</strong>: tua 15%. Dyma'r dewis cyffredin a chytbwys.</li>
  <li><strong>Q</strong>: tua 25%.</li>
  <li><strong>H</strong>: tua 30%, addas ar gyfer QR Code a fydd yn cael logo neu'n cael ei argraffu mewn lle sy'n mynd yn fudr yn hawdd.</li>
</ul>
<p>Po uchaf yw'r lefel gywiro, mwyaf o sgwariau sydd eu hangen, felly mae patrwm y QR Code yn edrych yn ddwysach.</p>

<h2>Beth allwch chi ei storio mewn QR Code?</h2>
<ul>
  <li>Dolenni i wefan, siop ar-lein neu ffurflen.</li>
  <li>Data WiFi, fel bod gwesteion yn gallu cysylltu heb deipio cyfrinair. Gweler y canllaw <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Cardiau busnes digidol (vCard), e-bost, SMS a sgyrsiau WhatsApp.</li>
  <li>Lleoliadau ar fap ac amserlenni digwyddiadau.</li>
</ul>

<h2>QR Code statig a deinamig</h2>
<p>Gelwir QR Code sy'n cael ei greu'n uniongyrchol o'r data yn <strong>QR Code statig</strong>: mae'r cynnwys wedi'i fewnosod yn y ddelwedd ac ni ellir ei newid, ond nid yw byth yn dod i ben chwaith. Mae QR Code <strong>deinamig</strong> yn cynnwys dolen fer sy'n perthyn i wasanaeth sydd wedyn yn eich ailgyfeirio i'ch cyrchfan; gellir newid y gyrchfan, ond bydd y QR Code yn peidio â gweithio os yw'r gwasanaeth hwnnw'n dod i ben. Ar gyfer y rhan fwyaf o anghenion, mae QR Code statig yn ddigon ac yn fwy diogel yn y tymor hir.</p>

<p>Hoffech chi roi cynnig arni? Crëwch <a href="/?type=qrcode">QR Code am ddim</a> nawr, neu darllenwch <a href="/artikel/cara-membuat-qr-code-gratis">sut i greu QR Code mewn 3 cham</a>.</p>
`
};
