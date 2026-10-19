// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Y Maint a'r Cydraniad Cywir ar gyfer Argraffu Codau Bar",
  desc: "Mae'n anodd sganio cod bar sy'n rhy fach neu'n aneglur. Dysgwch y maint lleiaf, y rheol pellter sganio, a'r cydraniad delwedd sy'n ddiogel ar gyfer argraffu.",
  tags: ["Canllaw", "Argraffu"],
  coverCaption: "Mae argraffydd labeli yn argraffu codau bar ar gyfer parseli a phecynnau.",
  inlineCaption: "Maint y label sy'n pennu pa mor fawr y gellir argraffu'r cod bar.",
  faq: [
    ["Beth yw'r maint lleiaf ar gyfer argraffu QR Code?", "Ar gyfer sganio'n agos, tua 2 × 2 cm yw'r terfyn diogel. Ar gyfer pellteroedd mwy, defnyddiwch gymhareb o tua 10 : 1 rhwng y pellter sganio a lled y QR Code."],
    ["Beth yw maint safonol cod bar EAN-13?", "Mae maint safonol EAN-13 tua 37.3 × 25.9 mm. Gellir lleihau'r maint hwn i tua 80% neu ei gynyddu hyd at 200%."],
    ["Pam mae cod bar yn aneglur ar ôl ei argraffu?", "Fel arfer oherwydd bod y ddelwedd yn fach ac wedi'i chwyddo, neu wedi'i chadw fel JPG o ansawdd isel. Lawrlwythwch gyda maint modiwl mwy ar ffurf PNG."]
  ],
  body: `
<p>Nid yw cod bar sy'n edrych yn dda ar y sgrin o reidrwydd yn ddarllenadwy ar ôl ei argraffu. Gall maint rhy fach, cydraniad isel neu inc sy'n gwaedu achosi i'r sganiwr fethu. Dyma ganllaw i sicrhau bod eich print yn aros yn ddarllenadwy.</p>

<h2>Deall y modiwl</h2>
<p>Y <strong>modiwl</strong> yw uned leiaf cod bar, sef un sgwâr bach mewn QR Code neu'r llinell gulaf mewn cod bar llinellau. Maint y modiwl sy'n pennu pa mor hawdd yw darllen y cod bar. Ar <a href="/">I Need Barcode</a>, gellir addasu maint y modiwl yn yr adran Gosodiadau: po uchaf y gwerth, mwyaf a miniocaf fydd y ddelwedd a lawrlwythir.</p>

<h2>Maint lleiaf QR Code</h2>
<ul>
  <li>Ar gyfer sganio'n agos (er enghraifft ar gerdyn busnes neu label cynnyrch), tua <strong>2 × 2 cm</strong> yw'r terfyn diogel.</li>
  <li>Defnyddiwch reol cymhareb o tua <strong>10 : 1</strong>: mae'r pellter sganio tua deg gwaith lled y QR Code. Ar gyfer poster sy'n cael ei sganio o 2 fetr, gwnewch y QR Code o leiaf tua 20 cm.</li>
  <li>Po fwyaf o ddata sy'n cael ei storio, dwysaf yw'r patrwm, felly mae angen maint mwy.</li>
</ul>

<h2>Maint codau bar cynnyrch</h2>
<p>Mae maint safonol <a href="/?type=ean13">EAN-13</a> tua 37.3 × 25.9 mm (100%). Gellir lleihau'r maint hwn i tua 80% neu ei gynyddu hyd at 200%. Osgowch dorri uchder y llinellau'n rhy fyr, oherwydd mae angen lle ar sganwyr til i ddarllen o wahanol onglau.</p>

<h2>Cydraniad delwedd</h2>
<ul>
  <li>Ar gyfer argraffu, ceisiwch sicrhau bod pob modiwl yn cael ei dynnu gyda <strong>sawl picsel cyfan</strong>, nid rhan o bicsel. Dewiswch faint modiwl mwy wrth lawrlwytho, ac yna gwnewch ef yn llai yn eich ap dylunio, nid y ffordd arall.</li>
  <li>Osgowch chwyddo delwedd cod bar fach, oherwydd bydd ymylon y sgwariau'n mynd yn aneglur neu'n garpiog.</li>
  <li>Cadwch ar ffurf PNG fel nad yw'r lliwiau a'r ymylon yn cael eu difrodi fel sy'n digwydd gyda JPG.</li>
</ul>

<h2>Parth tawel</h2>
<p>Mae angen lle gwag o amgylch pob cod bar, a elwir yn <strong>barth tawel</strong> (quiet zone). Ar gyfer QR Code, yn ddelfrydol dylai fod yn bedwar modiwl o led. Ar gyfer codau bar llinellau, mae'r lle gwag i'r chwith ac i'r dde yn bwysig iawn. Peidiwch â gosod testun, llinellau dylunio nac ymyl y pecyn yn rhy agos.</p>

<h2>Lliw a deunydd</h2>
<ul>
  <li>Defnyddiwch liw tywyll ar gyfer y cod bar a lliw golau ar gyfer y cefndir.</li>
  <li>Osgowch ddeunyddiau sgleiniog neu dryloyw, oherwydd gall golau sy'n adlewyrchu amharu ar y camera.</li>
  <li>Argraffwch un sampl bob amser a'i brofi gyda sawl ffôn neu sganiwr cyn argraffu llawer.</li>
</ul>
<p>Os yw eich cod bar yn dal yn anodd ei sganio, edrychwch ar <a href="/artikel/barcode-tidak-bisa-dipindai">7 rheswm pam na ellir sganio cod bar</a>.</p>
`
};
