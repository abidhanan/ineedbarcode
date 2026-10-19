// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 põhjust, miks vöötkood ei skanni, ja kuidas seda parandada",
  desc: "Vöötkoodi või QR Code'i ei õnnestu skannida? Vaadake üle seitse kõige sagedasemat põhjust – värvikontrastist suuruseni – ja nende parandamise viisid.",
  tags: ["Nõuanded", "Vöötkoodid"],
  coverCaption: "Kontrast ja suurus määravad, kas QR Code'i on lihtne skannida.",
  inlineCaption: "Laos aeglustab skannimata jääv vöötkood tööd.",
  faq: [
    ["Miks QR Code skannib ühe telefoniga, aga mitte teisega?", "Kaamerate ja skannimisrakenduste võimekus on erinev. Liiga väike, madala kontrastiga või ümberpööratud värvidega QR Code ebaõnnestub teatud telefonides sagedamini. Enne printimist katsetage mitme telefoniga."],
    ["Kas värvilist vöötkoodi saab skannida?", "Jah, kui värv on tume heledal taustal. Vältige vöötkoodi joonte puhul punast värvi, sest paljud kassaskannerid kasutavad punast valgust."],
    ["Kuidas kontrollida, kas vöötkood on õige?", "Skannige väljaprinti mitme telefoni või skanneriga ja veenduge, et loetud andmed ühtivad täpselt teie sisestatud andmetega."]
  ],
  body: `
<p>Pole midagi tüütumat kui vöötkood, mis on juba sadadele lehtedele prinditud, kuid selgub, et seda ei saa skannida. Hea uudis on see, et põhjus on tavaliselt lihtne ja kergesti välditav. Siin on seitse kõige sagedasemat põhjust.</p>

<h2>1. Liiga madal värvikontrast</h2>
<p>Skanner loeb tumeda ja heleda erinevust. Helehalli vöötkoodi valgel taustal või tumesinist mustal on raske eristada. <strong>Lahendus:</strong> kasutage tumedat värvi heledal taustal. Must valgel on kõige kindlam valik.</p>

<h2>2. Ümberpööratud värvid või punane värv</h2>
<p>Heledat vöötkoodi tumedal taustal ei toeta kõik skannerid. Lisaks kasutavad paljud kassaskannerid punast valgust, mistõttu punased jooned paistavad samasugused nagu valge taust. <strong>Lahendus:</strong> vältige punast värvi vöötkoodi joonte või moodulite puhul ja ärge pöörake värve ümber.</p>

<h2>3. Liiga väike suurus</h2>
<p>Kaamera vajab iga mooduli tuvastamiseks piisavalt piksleid. <strong>Lahendus:</strong> suurendage vöötkoodi. Lähedalt skannitava QR Code'i puhul kasutage vähemalt umbes 2 × 2 cm. Vaadake <a href="/artikel/ukuran-barcode-untuk-dicetak">printimissuuruste juhendit</a>.</p>

<h2>4. Vaikne tsoon puudub</h2>
<p>Pildi, teksti või paberi servaga kokku puutuvat vöötkoodi on raske ümbrusest eristada. <strong>Lahendus:</strong> jätke vöötkoodi ümber tühja ruumi, eriti joonkoodi vasakule ja paremale poole.</p>

<h2>5. Hägune või moonutatud pilt</h2>
<p>Vöötkood, mis on suurendatud väikesest pildist, salvestatud madala kvaliteediga JPG-na või venitatud ebaproportsionaalseks, kaotab oma kuju. <strong>Lahendus:</strong> laadige alla suurema moodulisuurusega PNG-vormingus ja muutke suurust alati proportsionaalselt.</p>

<h2>6. Valed või liigile mittevastavad andmed</h2>
<p>Igal vöötkoodiliigil on omad reeglid. Näiteks EAN-13 aktsepteerib ainult 12 või 13 numbrit õige kontrollnumbriga. Ka trükiveaga link muudab QR Code'i loetavaks, kuid see ei ava midagi. <strong>Lahendus:</strong> kontrollige andmeid enne printimist. <a href="/">I Need Barcode</a>'i generaator kuvab teate, kui andmed ei vasta valitud vöötkoodiliigi reeglitele.</p>

<h2>7. Pind ja valgustus</h2>
<p>Läikivad materjalid, läbipaistev plast, voldid ja kumerad pinnad võivad valgust peegeldada või vöötkoodi kuju muuta. <strong>Lahendus:</strong> printige tasasele, mitteläikivale pinnale ja katsetage tegelikes valgustingimustes.</p>

<h2>Disainitud QR Code'ist</h2>
<p>Kuju, värvide või raamiga QR Code on endiselt skannitav, kui kolm nurgamärki on terved ja kontrast piisav. Lugege lähemalt artiklist <a href="/artikel/desain-qr-code-kreatif">loominguline QR Code'i disain, mis jääb loetavaks</a>.</p>
<p>Parim harjumus: <strong>katsetage alati üht väljaprinti</strong> mitme telefoni ja skanneriga enne suures koguses printimist.</p>
`
};
