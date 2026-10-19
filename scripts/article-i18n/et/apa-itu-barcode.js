// apa-itu-barcode
module.exports = {
  title: "Mis on vöötkood? Määratlus, tööpõhimõte ja liigid",
  desc: "Vöötkood on peaaegu igal tootel, mida te ostate. Tutvuge sellega, kuidas see töötab, selle lühikese ajaloo ja kõige sagedamini kasutatavate vöötkoodiliikidega.",
  tags: ["Alused", "Vöötkoodid"],
  coverCaption: "Pakendil olev vöötkood sisaldab toote unikaalset koodi.",
  inlineCaption: "Kassapidaja loeb skanneriga vöötkoodi hetkega.",
  faq: [
    ["Mis vahe on vöötkoodil ja QR Code'il?", "QR Code on üks vöötkoodi liikidest, nimelt 2D-vöötkood. Joonkood (1D) mahutab vaid vähe märke ja seda loetakse vasakult paremale, QR Code aga salvestab andmeid kahes suunas, nii et sinna mahub link, tekst või WiFi andmed."],
    ["Kas vöötkood sisaldab toote hinda?", "Tavaliselt mitte. Toote vöötkood sisaldab ainult koodi. Hind ja toote nimi on salvestatud kassasüsteemis ning need leitakse skannitud koodi järgi."],
    ["Kas vöötkoodi loomine on tasuline?", "Ei. Vöötkoodi pildi saab luua tasuta, näiteks I Need Barcode'is. Tasu eest tuleb registreerida ainult jaemüügitoodete vöötkoodide, näiteks EAN-13, ametlik number GS1 kaudu."]
  ],
  body: `
<p>Vöötkood on viis kirjutada andmed üles mustrina, mida masin suudab lugeda. See muster koosneb tavaliselt eri laiusega mustadest ja valgetest joontest või ruudu sisse paigutatud väikestest ruutudest. Skannimisel tõlgitakse muster tagasi numbriteks või tekstiks, näiteks tootekoodiks, saadetise numbriks või veebiaadressiks.</p>
<p>Kuna vöötkoodi loeb masin, on see palju kiirem ja väiksema veariskiga kui koodi käsitsi sisestamine. Seetõttu kasutatakse vöötkoode kassades, ladudes, haiglates, piletitel ja isegi toidupakenditel.</p>

<h2>Vöötkoodi lühiajalugu</h2>
<p>Vöötkoodi idee patenteerisid 1952. aastal Ameerika Ühendriikides Norman Joseph Woodland ja Bernard Silver. Kauplustes hakati vöötkoode päriselt kasutama alles 1974. aastal, kui ühes Ohio supermarketis skanniti UPC-koodiga närimiskummipakk. Sellest ajast peale on vöötkoodid levinud üle kogu maailma ning neid haldab nüüd ülemaailmselt standardiorganisatsioon GS1.</p>

<h2>Kuidas vöötkood töötab?</h2>
<p>Skanner valgustab vöötkoodi ja loeb selle peegeldust. Tumedad osad peegeldavad vähe valgust, heledad palju. See erinevus muudetakse nullide ja ühtede jadaks, mida võrreldakse vastava vöötkoodiliigi reeglitega. Paljudel vöötkoodidel on ka <strong>kontrollnumber</strong> (check digit) – viimane number, mis arvutatakse eelnevate numbrite põhjal. Kui arvutuse tulemus ei klapi, saab skanner aru, et midagi on valesti, ja lükkab tulemuse tagasi.</p>
<p>Vöötkood ise sisaldab tavaliselt ainult koodi. Teave, nagu toote nimi või hind, on salvestatud kassasüsteemis või andmebaasis ja leitakse selle koodi järgi.</p>

<h2>Sagedamini kasutatavad vöötkoodiliigid</h2>
<p>Üldiselt jagunevad vöötkoodid kahte suurde rühma:</p>
<ul>
  <li><strong>1D- (lineaarsed) vöötkoodid</strong>: vertikaalsed jooned, mida loetakse vasakult paremale. Näiteks <a href="/?type=ean13">EAN-13</a> ja <a href="/?type=upca">UPC-A</a> jaemüügitoodetel ning <a href="/?type=code128">Code 128</a> ja <a href="/?type=code39">Code 39</a> logistikas ja ladudes.</li>
  <li><strong>2D-vöötkoodid</strong>: ruutudest koosnev muster, mis salvestab andmeid kahes suunas, nii et sinna mahub palju rohkem. Näiteks <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ja <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Lisaks on olemas spetsiaalsed vöötkoodid posti ja saadetiste ning tervishoiu jaoks, samuti GS1 standardid tarneahela jaoks. Täpsemalt saate nende erinevuste kohta lugeda artiklist <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D- ja 2D-vöötkoodide erinevused</a>.</p>

<h2>Milleks vöötkoode kasutatakse?</h2>
<ul>
  <li><strong>Jaekaubandus</strong>: kiirendab kassatööd ja peab automaatselt laoarvestust.</li>
  <li><strong>Laod ja saadetised</strong>: võimaldab jälgida kaupu ja pakke ühest kohast teise.</li>
  <li><strong>Piletid ja üritused</strong>: pileti ehtsust saab kontrollida ühe skannimisega.</li>
  <li><strong>Turundus</strong>: brošüüril või pakendil olev QR Code viib inimesed otse teie veebilehele, menüüsse või WhatsAppi.</li>
</ul>

<h2>Vöötkoodi loomine ise</h2>
<p>Vöötkoodi loomiseks ei ole vaja tasulist rakendust. Valige <a href="/">I Need Barcode</a>'is vöötkoodi liik, sisestage andmed ja laadige see alla PNG-pildina. Valida saab üle 100 liigi ning kõik need on tasuta ja registreerumata.</p>
`
};
