// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kuidas saada väikeettevõttele EAN-13 toote vöötkood",
  desc: "Soovite, et teie toode jõuaks kauplustesse või supermarketitesse? Uurige, mida tähendavad EAN-13 numbrid, kuidas registreerida ametlik number GS1 Indonesia juures ja kuidas seda printida.",
  tags: ["Äri", "Jaekaubandus"],
  coverCaption: "Jaemüügitoote pakend vajab registreeritud EAN-13 vöötkoodi.",
  inlineCaption: "Kauplus tunneb toote ära EAN-13 numbri järgi oma kassasüsteemis.",
  faq: [
    ["Kas EAN-13 numbri võib ise välja mõelda?", "Vöötkoodi pildi võite ise luua, kuid number peaks olema ametlik, GS1-lt saadud. Ise välja mõeldud number võib kattuda mõne teise toote numbriga ja kauplused lükkavad selle tagasi."],
    ["Kas iga tootevariant vajab eraldi vöötkoodi?", "Jah. Iga erinev variant, näiteks teise maitse, suuruse või pakendi sisuga, vajab oma EAN-13 numbrit."],
    ["Mis on EAN-13 kontrollnumber?", "Kontrollnumber on 13. number, mis arvutatakse eelneva 12 numbri põhjal. Skanner kasutab seda, et veenduda vöötkoodi õiges lugemises. I Need Barcode'i generaator arvutab selle automaatselt, kui sisestate 12 numbrit."]
  ],
  body: `
<p>Kui soovite oma toodet müüa kauplustes, supermarketites või suurtel müügiplatvormidel, palutakse teil tavaliselt lisada pakendile <strong>EAN-13</strong> vöötkood. See vöötkood koosneb 13 numbrist, mis on teie toote unikaalne tunnus kogu maailmas.</p>

<h2>Mida tähendavad EAN-13 13 numbrit</h2>
<ul>
  <li><strong>GS1 prefiks</strong>: esimesed kolm numbrit näitavad numbri väljastanud GS1 organisatsiooni. GS1 Indonesia väljastatud numbrid algavad numbritega <strong>899</strong>.</li>
  <li><strong>Ettevõtte number</strong>: teie ettevõtte tunnus, mis antakse registreerimisel.</li>
  <li><strong>Toote number</strong>: ettevõte määrab selle ise igale tootevariandile, näiteks teise maitse või suuruse jaoks.</li>
  <li><strong>Kontrollnumber</strong>: viimane number, mis arvutatakse automaatselt eelneva 12 numbri põhjal, et vältida lugemisvigu.</li>
</ul>

<h2>Miks on vaja ametlikku numbrit?</h2>
<p>EAN-13 vöötkoodi saab joonistada igaüks, kuid <strong>number</strong> peab olema registreeritud. Kauplused kasutavad seda numbrit toote tuvastamiseks oma süsteemides. Kui mõtlete numbri ise välja, võib see kattuda mõne teise ettevõtte toote numbriga ja see lükatakse tagasi, kui toodet kaupluses registreeritakse.</p>

<h2>Kuidas registreerida number GS1 Indonesia juures</h2>
<ol>
  <li>Valmistage ette ettevõtte dokumendid, nagu NIB (Nomor Induk Berusaha) ja NPWP, ning nende toodete loend, millele vöötkood antakse.</li>
  <li>Registreerige ettevõte GS1 Indonesia ametlikul veebilehel ja valige vajalik numbrite arv.</li>
  <li>Tasuge registreerimistasu ja aastamaks vastavalt kehtivatele tingimustele.</li>
  <li>Pärast kinnitamist saate ettevõtte numbri ja saate luua numbrid igale tootele.</li>
</ol>
<p>Nõuded ja tasud võivad muutuda, seega kontrollige alati uusimat teavet otse GS1 Indonesia veebilehelt.</p>

<h2>Vöötkoodi pildi loomine</h2>
<p>Kui number on olemas, avage <a href="/?type=ean13">EAN-13 generaator</a> ja sisestage oma tootenumbri 12 või 13 numbrit. Kui sisestate 12 numbrit, arvutatakse kontrollnumber automaatselt. Veenduge, et vöötkoodi all oleva teksti valik on sisse lülitatud, et numbrid prinditaks, ja laadige alla PNG-na.</p>

<h2>Nõuanded pakendile printimiseks</h2>
<ul>
  <li>Kasutage musti või tumesiniseid jooni valgel taustal. Vältige joonte puhul punast värvi, sest paljud kassaskannerid kasutavad punast valgust ja punaseid jooni ei loeta.</li>
  <li>Ärge vähendage vöötkoodi liigselt. EAN-13 standardsuurus on umbes 37,3 × 25,9 mm ja seda võib vähendada umbes 80%-ni. Täpsemalt <a href="/artikel/ukuran-barcode-untuk-dicetak">vöötkoodi suuruste juhendis</a>.</li>
  <li>Jätke vöötkoodist vasakule ja paremale tühja ruumi ning vältige selle paigutamist pakendi voltidele või õmblustele.</li>
  <li>Katsetage väljaprinti skanneriga enne suures koguses printimist.</li>
</ul>
<p>Põhja-Ameerikas müüdavate toodete puhul võidakse teilt nõuda ka 12-numbrilise <a href="/?type=upca">UPC-A</a> kasutamist.</p>
`
};
