// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Sut i Gael Cod Bar Cynnyrch EAN-13 ar gyfer Busnesau Bach",
  desc: "Hoffech chi weld eich cynnyrch mewn siopau cyfleustra neu archfarchnadoedd? Dysgwch ystyr rhifau EAN-13, sut i gofrestru rhif swyddogol gyda GS1 Indonesia, a sut i'w argraffu.",
  tags: ["Busnes", "Manwerthu"],
  coverCaption: "Mae angen cod bar EAN-13 cofrestredig ar becynnau cynhyrchion manwerthu.",
  inlineCaption: "Mae siopau manwerthu yn adnabod cynhyrchion o'r rhif EAN-13 yn eu system til.",
  faq: [
    ["Ga i greu fy rhif EAN-13 fy hun?", "Cewch greu delwedd y cod bar eich hun, ond dylai'r rhif fod yn un swyddogol gan GS1. Gall rhif rydych chi wedi'i greu eich hun wrthdaro â chynhyrchion eraill a chael ei wrthod gan siopau manwerthu."],
    ["Oes angen cod bar gwahanol ar bob amrywiad o gynnyrch?", "Oes. Mae angen ei rif EAN-13 ei hun ar bob amrywiad gwahanol, er enghraifft blas, maint neu gynnwys pecyn gwahanol."],
    ["Beth yw'r digid gwirio mewn EAN-13?", "Y digid gwirio yw'r 13eg rhif, sy'n cael ei gyfrifo o'r 12 rhif o'i flaen. Mae sganwyr yn ei ddefnyddio i sicrhau bod y cod bar wedi'i ddarllen yn gywir. Mae generadur I Need Barcode yn ei gyfrifo'n awtomatig os rhowch chi 12 digid i mewn."]
  ],
  body: `
<p>Os ydych chi am werthu eich cynnyrch mewn siopau cyfleustra, archfarchnadoedd neu farchnadoedd ar-lein mawr, fel arfer bydd gofyn i chi gynnwys cod bar <strong>EAN-13</strong> ar y pecyn. Mae'r cod bar hwn yn cynnwys 13 digid sy'n gweithredu fel hunaniaeth unigryw eich cynnyrch ledled y byd.</p>

<h2>Ystyr y 13 digid mewn EAN-13</h2>
<ul>
  <li><strong>Rhagddodiad GS1</strong>: mae'r tri digid cyntaf yn dangos pa sefydliad GS1 a gyhoeddodd y rhif. Mae rhifau a gyhoeddir gan GS1 Indonesia yn dechrau gyda <strong>899</strong>.</li>
  <li><strong>Rhif y cwmni</strong>: hunaniaeth eich cwmni, a roddir pan fyddwch chi'n cofrestru.</li>
  <li><strong>Rhif y cynnyrch</strong>: wedi'i bennu gan y cwmni ei hun ar gyfer pob amrywiad o'r cynnyrch, er enghraifft blas neu faint gwahanol.</li>
  <li><strong>Digid gwirio</strong>: y digid olaf, sy'n cael ei gyfrifo'n awtomatig o'r 12 digid o'i flaen i atal camddarllen.</li>
</ul>

<h2>Pam mae angen rhif swyddogol?</h2>
<p>Gall unrhyw un dynnu llun cod bar EAN-13, ond rhaid i'r <strong>rhif</strong> fod wedi'i gofrestru. Mae siopau manwerthu yn defnyddio'r rhif hwnnw i adnabod cynhyrchion yn eu systemau. Os byddwch chi'n dyfeisio rhif eich hun, gall wrthdaro â chynnyrch cwmni arall a chael ei wrthod pan fydd y cynnyrch yn cael ei gofrestru gyda'r siop.</p>

<h2>Sut i gofrestru rhif gyda GS1 Indonesia</h2>
<ol>
  <li>Paratowch eich dogfennau busnes, fel NIB (Nomor Induk Berusaha) a NPWP, ynghyd â rhestr o'r cynhyrchion a fydd yn cael cod bar.</li>
  <li>Cofrestrwch eich cwmni drwy wefan swyddogol GS1 Indonesia a dewiswch faint o rifau sydd eu hangen arnoch.</li>
  <li>Talwch y ffi gofrestru a'r tâl blynyddol yn unol â'r rheolau sy'n berthnasol.</li>
  <li>Ar ôl cael eich cymeradwyo, byddwch chi'n derbyn rhif cwmni a gallwch greu rhif ar gyfer pob cynnyrch.</li>
</ol>
<p>Gall y gofynion a'r ffioedd newid, felly gwiriwch y wybodaeth ddiweddaraf yn uniongyrchol ar wefan GS1 Indonesia bob amser.</p>

<h2>Creu delwedd y cod bar</h2>
<p>Unwaith y bydd gennych rif, agorwch y <a href="/?type=ean13">generadur EAN-13</a> a rhowch 12 neu 13 digid rhif eich cynnyrch. Os rhowch chi 12 digid, bydd y digid gwirio'n cael ei gyfrifo'n awtomatig. Gwnewch yn siŵr bod yr opsiwn testun o dan y cod bar wedi'i alluogi fel bod y rhifau'n cael eu hargraffu, ac yna lawrlwythwch ef fel PNG.</p>

<h2>Awgrymiadau ar gyfer argraffu ar becynnau</h2>
<ul>
  <li>Defnyddiwch linellau du neu las tywyll ar gefndir gwyn. Osgowch goch ar gyfer y llinellau, oherwydd mae llawer o sganwyr til yn defnyddio golau coch, felly ni ellir darllen llinellau coch.</li>
  <li>Peidiwch â gwneud y cod bar yn rhy fach. Mae maint safonol EAN-13 tua 37.3 × 25.9 mm a gellir ei leihau i tua 80%. Mwy o wybodaeth yn y <a href="/artikel/ukuran-barcode-untuk-dicetak">canllaw maint cod bar</a>.</li>
  <li>Gadewch le gwag i'r chwith ac i'r dde o'r cod bar, ac osgowch ei osod ar blygiadau neu wythiennau'r pecyn.</li>
  <li>Profwch y copi printiedig gyda sganiwr cyn argraffu mewn niferoedd mawr.</li>
</ul>
<p>Ar gyfer cynhyrchion sy'n cael eu gwerthu yng Ngogledd America, efallai y gofynnir i chi hefyd ddefnyddio <a href="/?type=upca">UPC-A</a>, sy'n cynnwys 12 digid.</p>
`
};
