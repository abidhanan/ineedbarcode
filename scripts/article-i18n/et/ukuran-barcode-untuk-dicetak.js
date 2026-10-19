// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Õige vöötkoodi suurus ja eraldusvõime printimiseks",
  desc: "Liiga väikest või hägust vöötkoodi on raske skannida. Uurige minimaalset suurust, skannimiskauguse reeglit ja printimiseks sobivat pildi eraldusvõimet.",
  tags: ["Juhendid", "Trükkimine"],
  coverCaption: "Sildiprinter prindib vöötkoode pakkidele ja pakenditele.",
  inlineCaption: "Sildi suurus määrab, kui suure vöötkoodi saab printida.",
  faq: [
    ["Milline on QR Code'i minimaalne suurus printimiseks?", "Lähedalt skannimisel on umbes 2 × 2 cm ohutu piir. Suuremate kauguste puhul kasutage skannimiskauguse ja QR Code'i laiuse suhet umbes 10 : 1."],
    ["Milline on EAN-13 vöötkoodi standardsuurus?", "EAN-13 standardsuurus on umbes 37,3 × 25,9 mm. Seda võib vähendada umbes 80%-ni või suurendada kuni 200%-ni."],
    ["Miks on vöötkood pärast printimist hägune?", "Tavaliselt seetõttu, et väike pilt suurendati või salvestati madala kvaliteediga JPG-na. Laadige alla suurema moodulisuurusega PNG-vormingus."]
  ],
  body: `
<p>Ekraanil hästi välja nägev vöötkood ei pruugi pärast printimist loetav olla. Liiga väike suurus, madal eraldusvõime või laialivalguv tint võivad skanneri lugemise nurjata. Siin on juhend, et teie väljaprindid jääksid loetavaks.</p>

<h2>Tutvuge mooduliga</h2>
<p><strong>Moodul</strong> on vöötkoodi väikseim ühik, st üks väike ruut QR Code'is või kitsaim joon joonkoodis. Mooduli suurus määrab, kui kergesti vöötkoodi loetakse. <a href="/">I Need Barcode</a>'is saab mooduli suurust määrata jaotises „Seaded“: mida suurem väärtus, seda suurem ja teravam on allalaaditav pilt.</p>

<h2>QR Code'i minimaalne suurus</h2>
<ul>
  <li>Lähedalt skannimisel (näiteks visiitkaart või tootesilt) on umbes <strong>2 × 2 cm</strong> ohutu piir.</li>
  <li>Kasutage umbes <strong>10 : 1</strong> suhte reeglit: skannimiskaugus on ligikaudu kümme korda suurem kui QR Code'i laius. 2 meetri kauguselt skannitava plakati jaoks tehke QR Code vähemalt umbes 20 cm suurune.</li>
  <li>Mida rohkem andmeid salvestatakse, seda tihedam on muster, mistõttu on vaja suuremat suurust.</li>
</ul>

<h2>Toote vöötkoodi suurus</h2>
<p><a href="/?type=ean13">EAN-13</a> standardsuurus on umbes 37,3 × 25,9 mm (100%). Seda võib vähendada umbes 80%-ni või suurendada kuni 200%-ni. Ärge lõigake joonte kõrgust liiga lühikeseks, sest kassaskanner vajab ruumi, et lugeda eri nurkade alt.</p>

<h2>Pildi eraldusvõime</h2>
<ul>
  <li>Printimiseks püüdke, et iga moodul oleks kujutatud <strong>mitme täispiksliga</strong>, mitte piksli osaga. Valige allalaadimisel suurem moodulisuurus ja vähendage seejärel disainirakenduses, mitte vastupidi.</li>
  <li>Vältige väikese vöötkoodipildi suurendamist, sest ruutude servad muutuvad häguseks või sakiliseks.</li>
  <li>Salvestage PNG-vormingus, et värvid ja servad ei rikneks nagu JPG puhul.</li>
</ul>

<h2>Vaikne tsoon</h2>
<p>Iga vöötkood vajab enda ümber tühja ruumi, mida nimetatakse <strong>vaikseks tsooniks</strong> (quiet zone). QR Code'i puhul peaks see ideaalis olema nelja mooduli laiune. Joonkoodi puhul on tühi ruum vasakul ja paremal väga oluline. Ärge paigutage teksti, disainijooni ega pakendi serva liiga lähedale.</p>

<h2>Värvid ja materjalid</h2>
<ul>
  <li>Kasutage vöötkoodi jaoks tumedat ja tausta jaoks heledat värvi.</li>
  <li>Vältige läikivaid või läbipaistvaid materjale, sest valguse peegeldused võivad kaamerat segada.</li>
  <li>Printige alati üks näidis ja katsetage seda mitme telefoni või skanneriga enne suures koguses printimist.</li>
</ul>
<p>Kui teie vöötkoodi on endiselt raske skannida, vaadake <a href="/artikel/barcode-tidak-bisa-dipindai">7 põhjust, miks vöötkood ei skanni</a>.</p>
`
};
