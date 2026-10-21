// Polisi Preifatrwydd a Thelerau ac Amodau (Cymraeg).
module.exports = {
  labels: {
    privacy: "Polisi Preifatrwydd",
    terms: "Telerau ac Amodau",
    effective: "Mewn grym o {date}"
  },
  privacy: {
    title: "Polisi Preifatrwydd",
    desc: "Pa ddata y mae I Need Barcode yn ei brosesu pan fyddwch yn creu codau bar a QR Code, a sut rydym yn ei drin.",
    body: `
<p>Mae I Need Barcode (ineedbarcode.com) yn gynhyrchydd codau bar a QR Code am ddim sy'n cael ei reoli gan Abid Hanan Wicaksono. Mae'r polisi hwn yn esbonio pa ddata rydym yn ei brosesu pan fyddwch yn defnyddio'r wefan hon a sut rydym yn ei drin. Rydym yn fwriadol yn casglu cyn lleied o ddata â phosibl: nid oes angen i chi gofrestru, mewngofnodi na rhoi eich enw na'ch cyfeiriad e-bost i ddefnyddio'r gwasanaeth hwn.</p>
<h2>Y data rydym yn ei brosesu</h2>
<ul>
<li><strong>Cynnwys codau bar.</strong> Mae'r testun, y dolenni, y data WiFi, y cysylltiadau a'r data arall rydych yn eu rhoi yn cael eu prosesu'n uniongyrchol yn eich porwr. Caiff delweddau codau bar eu creu ar eich dyfais ac nid ydynt yn cael eu hanfon i'n gweinyddion, gan gynnwys pan fyddwch yn creu llawer o godau bar ar unwaith.</li>
<li><strong>Lleoliad.</strong> Dim ond ar ôl i chi ganiatáu hynny yn eich porwr y mae'r botwm “Defnyddio fy lleoliad” yn gofyn am leoliad y ddyfais. Dim ond i faes y ffurflen y caiff y cyfesurynnau eu rhoi, ac nid ydynt yn cael eu hanfon atom ni.</li>
<li><strong>Gwlad fras.</strong> Er mwyn dewis yr iaith gychwynnol, gall y wefan hon ddarllen eich gwlad fras o'r cais a anfonir i'n gweinydd. Nid yw'r wybodaeth hon yn cael ei chadw mewn cronfa ddata.</li>
<li><strong>Data technegol.</strong> Fel bron pob gwefan, mae ein darparwr gwe-letya (Vercel) yn cofnodi data technegol am geisiadau, megis cyfeiriad IP, math o borwr ac amser mynediad, at ddibenion diogelwch a gweithredu. Dim ond dros dro y caiff y cofnodion hyn eu cadw, yn unol â pholisi Vercel.</li>
<li><strong>Ystadegau erthyglau.</strong> Os ydynt wedi'u galluogi, dim ond fel cyfanswm ar gyfer pob erthygl y caiff nifer y gwylio, yr hoffi a'r rhannu eu cadw, heb unrhyw ddata sy'n eich adnabod chi.</li>
</ul>
<h2>Cwcis a storio yn y porwr</h2>
<ul>
<li><strong>inbLang</strong>: yn cofio'r iaith a ddewisoch ar y ddyfais hon (localStorage).</li>
<li><strong>inbCountry</strong>: yn cadw'r wlad fras am un sesiwn fel nad oes angen pennu'r iaith eto (sessionStorage).</li>
<li><strong>Storio lleol arall</strong> (localStorage a sessionStorage): yn nodi'r erthyglau rydych wedi'u hoffi ac yn atal un ymweliad rhag cael ei gyfrif ddwywaith. Mae'r data hwn yn aros ar eich dyfais.</li>
<li><strong>Cwcis dadansoddi trydydd parti</strong> gan Google Analytics a Microsoft Clarity, a ddisgrifir isod.</li>
</ul>
<h2>Dadansoddeg</h2>
<p>Rydym yn defnyddio offer dadansoddi i ddeall sut mae'r wefan yn cael ei defnyddio ac i'w gwella. Dim ond ar ôl i chi ddechrau rhyngweithio â'r dudalen y caiff yr offer hyn eu llwytho, ac ni chânt eu llwytho o gwbl os yw eich porwr yn anfon signal Global Privacy Control neu Do Not Track. Nid yw cynnwys codau bar na chynnwys ffurflenni byth yn cael eu hanfon at yr offer dadansoddi; dim ond digwyddiadau fel y math o god bar a ddewiswyd a chliciau ar y botwm lawrlwytho sy'n cael eu cofnodi.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): yn defnyddio cwcis i fesur y tudalennau a agorir, y wlad fras, y math o ddyfais a'r digwyddiadau uchod. Mae storio at ddibenion hysbysebu a Google Signals wedi'u hanalluogi. Mae Google yn prosesu'r data yn unol â <a href="https://policies.google.com/privacy">Pholisi Preifatrwydd Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: yn cofnodi rhyngweithiadau fel cliciau a sgrolio ar gyfer mapiau gwres a recordiadau sesiynau, ac yn cuddio cynnwys meysydd mewnbwn. Mae Microsoft yn prosesu'r data yn unol â <a href="https://privacy.microsoft.com/privacystatement">Datganiad Preifatrwydd Microsoft</a>.</li>
</ul>
<p>Gallwch wrthod dadansoddeg drwy alluogi Global Privacy Control neu Do Not Track, rhwystro cwcis trydydd parti yng ngosodiadau eich porwr, defnyddio rhwystrwr tracio, neu osod <a href="https://tools.google.com/dlpage/gaoptout">Ychwanegyn Porwr Optio Allan Google Analytics</a>. Gellir defnyddio'r wefan yn llawn o hyd.</p>
<h2>Gwasanaethau trydydd parti</h2>
<ul>
<li><strong>Vercel Inc.</strong> sy'n darparu'r gwe-letya. Gall ei weinyddion fod y tu allan i Indonesia.</li>
<li><strong>Google Fonts</strong>: fe'i defnyddir i ddangos rhai systemau ysgrifennu (er enghraifft Arabeg, Thai neu Japaneeg). Pan fydd y ffontiau'n llwytho, mae eich cyfeiriad IP yn weladwy i Google.</li>
<li><strong>Botymau rhannu</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) a dolenni cyfryngau cymdeithasol: dim ond pan fyddwch yn clicio arnynt y maent yn cysylltu â'r gwasanaethau hynny.</li>
</ul>
<h2>Diogelwch a rhannu data</h2>
<p>Mae pob cysylltiad â'r wefan hon yn defnyddio HTTPS. Nid ydym yn gwerthu, yn rhentu nac yn masnachu data personol. Dim ond i'r graddau sy'n angenrheidiol i redeg y wefan y caiff data ei rannu â'r darparwyr gwasanaeth uchod, neu pan fydd y gyfraith yn mynnu hynny.</p>
<h2>Plant</h2>
<p>Nid yw'r gwasanaeth hwn wedi'i fwriadu ar gyfer plant dan 13 oed, ac nid ydym yn fwriadol yn casglu data personol plant.</p>
<h2>Eich hawliau</h2>
<p>Yn unol â Chyfraith Rhif 27 2022 ar Ddiogelu Data Personol, mae gennych hawl i ofyn am gael gweld, cywiro neu ddileu eich data personol, yn ogystal â thynnu'n ôl eich cydsyniad i'w brosesu. Gan nad ydym yn cadw bron dim data sy'n eich adnabod chi, gellir datrys y rhan fwyaf o geisiadau drwy ddileu'r cwcis a data'r wefan yn eich porwr. Ar gyfer data a brosesir gan Google neu Microsoft, gallwch hefyd ddefnyddio'r gosodiadau preifatrwydd yn eu gwasanaethau. Ar gyfer ceisiadau eraill, cysylltwch â ni.</p>
<h2>Newidiadau i'r polisi</h2>
<p>Gall y polisi hwn gael ei ddiweddaru ar unrhyw adeg. Daw newidiadau i rym pan gânt eu cyhoeddi ar y dudalen hon, gyda'r dyddiad dod i rym ar frig y dudalen.</p>
<h2>Cysylltu</h2>
<p>Gellir anfon cwestiynau am y polisi hwn drwy'r ddolen gyswllt ar waelod pob tudalen neu drwy <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Darllenwch ein <a href="/syarat-ketentuan">Telerau ac Amodau</a> hefyd.</p>
`
  },
  terms: {
    title: "Telerau ac Amodau",
    desc: "Telerau ac amodau defnyddio I Need Barcode, cynhyrchydd codau bar a QR Code am ddim.",
    body: `
<p>Drwy ddefnyddio I Need Barcode (ineedbarcode.com), rydych yn cytuno i'r telerau a'r amodau canlynol. Os nad ydych yn cytuno, peidiwch â defnyddio'r gwasanaeth hwn.</p>
<h2>Am y gwasanaeth</h2>
<p>Offeryn am ddim yw I Need Barcode ar gyfer creu delweddau codau bar a QR Code yn uniongyrchol yn y porwr. Nid yw I Need Barcode yn gysylltiedig â GS1 nac ag unrhyw berchennog safon codau bar, nid yw wedi'i gymeradwyo ganddynt, ac nid yw'n cydweithio â nhw. Mae QR Code yn nod masnach cofrestredig sy'n eiddo i DENSO WAVE INCORPORATED. Mae pob nod masnach yn eiddo i'w perchnogion priodol.</p>
<h2>Defnydd a ganiateir</h2>
<ul>
<li>Gellir defnyddio'r delweddau codau bar a grëwch at ddibenion personol neu fasnachol, er enghraifft ar gyfer cynhyrchion, pecynnu, labeli a deunyddiau printiedig, heb ddyfrnod a heb gost.</li>
<li>Dim ond delweddau codau bar rydym yn eu creu; nid ydym yn dyroddi rhifau codau bar. Ar gyfer cynhyrchion manwerthu, rhaid cofrestru rhifau EAN, UPC neu GTIN yn swyddogol drwy GS1.</li>
<li>Dilynwch hefyd y rheolau sy'n berthnasol lle defnyddir y cod bar, er enghraifft gofynion siopau, marchnadleoedd ar-lein neu wasanaethau cludo.</li>
</ul>
<h2>Eich cyfrifoldeb</h2>
<p>Chi sy'n gwbl gyfrifol am y data rydych yn ei roi yn y codau bar ac am y ffordd rydych yn eu defnyddio. Profwch godau bar bob amser gyda sawl sganiwr neu ap camera cyn eu hargraffu mewn niferoedd mawr, a gwnewch yn siŵr fod eu maint, eu lliwiau a'u cyferbyniad yn addas i'ch anghenion.</p>
<h2>Yr hyn a waherddir</h2>
<ul>
<li>Creu codau bar neu QR Code sy'n arwain at sgamiau, gwe-rwydo, maleiswedd neu gynnwys anghyfreithlon.</li>
<li>Defnyddio codau bar i ffugio cynhyrchion, dogfennau, tocynnau neu rifau sy'n eiddo i bartïon eraill.</li>
<li>Defnyddio botiaid, sgriptiau neu awtomeiddio i gael mynediad at y gwasanaeth ar raddfa fawr.</li>
<li>Tarfu ar ein gweinyddion a'n gwasanaethau, eu gorlwytho, neu geisio torri eu diogelwch.</li>
</ul>
<h2>Argaeledd y gwasanaeth</h2>
<p>Darperir y gwasanaeth am ddim a gall gael ei newid, ei gyfyngu neu ei derfynu ar unrhyw adeg heb rybudd.</p>
<h2>Ymwadiad</h2>
<p>Darperir y gwasanaeth “fel y mae” ac “fel y mae ar gael”, heb unrhyw warant o gwbl, gan gynnwys unrhyw warant y bydd y gwasanaeth bob amser yn gweithio, y bydd yn rhydd rhag gwallau, neu y bydd pob cod bar a grëir yn gallu cael ei sganio gan bob dyfais ac yn addas at ddiben penodol.</p>
<h2>Cyfyngu ar atebolrwydd</h2>
<p>I'r graddau a ganiateir gan y gyfraith, nid ydym yn atebol am unrhyw golled uniongyrchol nac anuniongyrchol sy'n deillio o ddefnyddio'r gwasanaeth hwn neu o'r codau bar a grëwch, gan gynnwys costau ailargraffu a cholledion oherwydd codau bar na ellir eu darllen.</p>
<h2>Dolenni i drydydd partïon</h2>
<p>Mae'r wefan hon yn cynnwys dolenni i wefannau a gwasanaethau trydydd parti. Nid ydym yn gyfrifol am gynnwys na pholisïau'r gwefannau hynny.</p>
<h2>Newidiadau i'r telerau</h2>
<p>Gall y telerau a'r amodau hyn gael eu diweddaru ar unrhyw adeg. Drwy barhau i ddefnyddio'r gwasanaeth ar ôl i newidiadau gael eu cyhoeddi, ystyrir eich bod yn cytuno i'r fersiwn ddiweddaraf.</p>
<h2>Cyfraith lywodraethol</h2>
<p>Mae'r telerau a'r amodau hyn yn ddarostyngedig i gyfraith Gweriniaeth Indonesia.</p>
<h2>Cysylltu</h2>
<p>Gellir anfon cwestiynau ac adroddiadau drwy'r ddolen gyswllt ar waelod pob tudalen neu drwy <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Darllenwch ein <a href="/kebijakan-privasi">Polisi Preifatrwydd</a> hefyd.</p>
`
  }
};
