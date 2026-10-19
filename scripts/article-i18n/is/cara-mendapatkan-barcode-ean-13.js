// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Hvernig lítil og meðalstór fyrirtæki fá EAN-13-strikamerki fyrir vörur",
  desc: "Viltu koma vörunum þínum í smáverslanir eða stórmarkaði? Kynntu þér hvað tölurnar í EAN-13 þýða, hvernig þú skráir opinbert númer hjá GS1 Indonesia og hvernig þú prentar það.",
  tags: ["Viðskipti", "Smásala"],
  coverCaption: "Umbúðir smásöluvara þurfa skráð EAN-13-strikamerki.",
  inlineCaption: "Smásöluverslanir þekkja vörur út frá EAN-13-númerinu í afgreiðslukerfinu.",
  faq: [
    ["Má ég búa til mitt eigið EAN-13-númer?", "Sjálfa strikamerkjamyndina máttu búa til sjálf(ur), en númerið ætti að vera opinbert frá GS1. Heimatilbúið númer getur rekist á aðrar vörur og verið hafnað af smásöluverslunum."],
    ["Þarf hvert vöruafbrigði sitt eigið strikamerki?", "Já. Hvert ólíkt afbrigði, til dæmis með öðru bragði, stærð eða magni í pakkningu, þarf sitt eigið EAN-13-númer."],
    ["Hvað er vartalan í EAN-13?", "Vartalan er 13. tölustafurinn sem reiknaður er út frá 12 tölustöfunum á undan. Skanninn notar hana til að tryggja að strikamerkið sé rétt lesið. Rafallinn hjá I Need Barcode reiknar hana sjálfkrafa ef þú slærð inn 12 tölustafi."]
  ],
  body: `
<p>Ef selja á vörurnar þínar í smáverslunum, stórmörkuðum eða á stórum markaðstorgum á netinu verður þú yfirleitt beðin(n) um að hafa <strong>EAN-13</strong>-strikamerki á umbúðunum. Strikamerkið inniheldur 13 tölustafi sem eru einkvæmt auðkenni vörunnar þinnar um allan heim.</p>

<h2>Hvað 13 tölustafirnir í EAN-13 þýða</h2>
<ul>
  <li><strong>GS1-forskeyti</strong>: fyrstu þrír tölustafirnir sýna hvaða GS1-samtök gáfu númerið út. Númer sem GS1 Indonesia gefur út byrja á <strong>899</strong>.</li>
  <li><strong>Fyrirtækjanúmer</strong>: auðkenni fyrirtækisins þíns sem þú færð við skráningu.</li>
  <li><strong>Vörunúmer</strong>: ákveðið af fyrirtækinu sjálfu fyrir hvert vöruafbrigði, til dæmis annað bragð eða aðra stærð.</li>
  <li><strong>Vartala</strong>: síðasti tölustafurinn, sem reiknaður er sjálfkrafa út frá 12 tölustöfunum á undan til að koma í veg fyrir rangan lestur.</li>
</ul>

<h2>Af hverju þarf númerið að vera opinbert?</h2>
<p>Hver sem er getur teiknað EAN-13-strikamerki, en <strong>númerið</strong> verður að vera skráð. Smásöluverslanir nota númerið til að þekkja vöruna í kerfum sínum. Ef þú býrð til númer sjálf(ur) getur það rekist á vöru annars fyrirtækis og verið hafnað þegar varan er skráð hjá versluninni.</p>

<h2>Hvernig á að skrá númer hjá GS1 Indonesia</h2>
<ol>
  <li>Undirbúðu rekstrargögn, svo sem NIB (skráningarnúmer fyrirtækis) og NPWP (skattnúmer), ásamt lista yfir þær vörur sem eiga að fá strikamerki.</li>
  <li>Skráðu fyrirtækið á opinberum vef GS1 Indonesia og veldu þann fjölda númera sem þú þarft.</li>
  <li>Greiddu skráningargjald og árgjald samkvæmt gildandi reglum.</li>
  <li>Þegar umsóknin hefur verið samþykkt færð þú fyrirtækjanúmer og getur búið til númer fyrir hverja vöru.</li>
</ol>
<p>Kröfur og gjöld geta breyst, svo athugaðu alltaf nýjustu upplýsingarnar beint á vef GS1 Indonesia.</p>

<h2>Að búa til strikamerkjamyndina</h2>
<p>Þegar þú hefur fengið númer opnar þú <a href="/?type=ean13">EAN-13-rafalinn</a> og slærð inn 12 eða 13 tölustafi vörunúmersins. Ef þú slærð inn 12 tölustafi er vartalan reiknuð sjálfkrafa. Gakktu úr skugga um að kveikt sé á valkostinum fyrir texta undir strikamerkinu svo tölurnar prentist með, og sæktu það síðan sem PNG.</p>

<h2>Ráð við prentun á umbúðir</h2>
<ul>
  <li>Notaðu svört eða dökkblá strik á hvítum bakgrunni. Forðastu rauðan lit á strikin, því margir afgreiðsluskannar nota rautt ljós svo að rauð strik verða ólæsileg.</li>
  <li>Ekki minnka strikamerkið um of. Staðalstærð EAN-13 er um 37,3 × 25,9 mm og má minnka niður í um 80%. Nánar í <a href="/artikel/ukuran-barcode-untuk-dicetak">leiðbeiningum um stærð strikamerkja</a>.</li>
  <li>Skildu eftir autt svæði vinstra og hægra megin við strikamerkið og forðastu að setja það á brot eða samskeyti umbúðanna.</li>
  <li>Prófaðu prentunina með skanna áður en þú prentar í miklu magni.</li>
</ul>
<p>Fyrir vörur sem seldar eru í Norður-Ameríku gætir þú einnig verið beðin(n) um að nota <a href="/?type=upca">UPC-A</a>, sem inniheldur 12 tölustafi.</p>
`
};
