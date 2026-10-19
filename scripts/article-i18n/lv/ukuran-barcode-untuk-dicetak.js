// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Pareizs svītrkoda izmērs un izšķirtspēja drukāšanai",
  desc: "Pārāk mazu vai izplūdušu svītrkodu ir grūti noskenēt. Uzziniet minimālo izmēru, skenēšanas attāluma noteikumu un drukāšanai drošu attēla izšķirtspēju.",
  tags: ["Ceļveži", "Drukāšana"],
  coverCaption: "Etiķešu printeris drukā svītrkodus pakām un iepakojumiem.",
  inlineCaption: "Etiķetes izmērs nosaka, cik lielu svītrkodu var izdrukāt.",
  faq: [
    ["Kāds ir minimālais QR Code izmērs drukāšanai?", "Skenējot no tuva attāluma, aptuveni 2 × 2 cm ir droša robeža. Lielākiem attālumiem izmantojiet aptuveni 10 : 1 attiecību starp skenēšanas attālumu un QR Code platumu."],
    ["Kāds ir standarta EAN-13 svītrkoda izmērs?", "Standarta EAN-13 izmērs ir aptuveni 37,3 × 25,9 mm. To drīkst samazināt līdz aptuveni 80 % vai palielināt līdz 200 %."],
    ["Kāpēc svītrkods pēc izdrukāšanas ir izplūdis?", "Parasti tāpēc, ka mazs attēls tika palielināts vai saglabāts kā zemas kvalitātes JPG. Lejupielādējiet ar lielāku moduļa izmēru PNG formātā."]
  ],
  body: `
<p>Svītrkods, kas ekrānā izskatās labi, pēc izdrukāšanas ne vienmēr ir nolasāms. Pārāk mazs izmērs, zema izšķirtspēja vai izplūdusi tinte var traucēt skenerim. Lūk, ceļvedis, kā panākt, lai jūsu izdrukas būtu nolasāmas.</p>

<h2>Iepazīstiet moduli</h2>
<p><strong>Modulis</strong> ir svītrkoda mazākā vienība, proti, viens mazs kvadrātiņš QR Code vai šaurākā svītra lineārajā svītrkodā. Moduļa izmērs nosaka, cik viegli svītrkodu var nolasīt. Vietnē <a href="/">I Need Barcode</a> moduļa izmēru var iestatīt sadaļā “Iestatījumi”: jo lielāka vērtība, jo lielāks un asāks ir lejupielādētais attēls.</p>

<h2>Minimālais QR Code izmērs</h2>
<ul>
  <li>Skenējot no tuva attāluma (piemēram, vizītkarte vai preces etiķete), aptuveni <strong>2 × 2 cm</strong> ir droša robeža.</li>
  <li>Izmantojiet aptuveni <strong>10 : 1</strong> attiecības noteikumu: skenēšanas attālums ir apmēram desmit reizes lielāks par QR Code platumu. Plakātam, ko skenē no 2 metru attāluma, izveidojiet QR Code vismaz aptuveni 20 cm lielu.</li>
  <li>Jo vairāk datu tiek saglabāts, jo blīvāks raksts, tāpēc vajadzīgs lielāks izmērs.</li>
</ul>

<h2>Preču svītrkodu izmērs</h2>
<p>Standarta <a href="/?type=ean13">EAN-13</a> izmērs ir aptuveni 37,3 × 25,9 mm (100 %). To drīkst samazināt līdz aptuveni 80 % vai palielināt līdz 200 %. Nesaīsiniet svītru augstumu pārāk daudz, jo kases skenerim vajadzīga vieta, lai nolasītu no dažādiem leņķiem.</p>

<h2>Attēla izšķirtspēja</h2>
<ul>
  <li>Drukāšanai centieties, lai katrs modulis būtu attēlots ar <strong>vairākiem veseliem pikseļiem</strong>, nevis ar pikseļa daļu. Lejupielādējot izvēlieties lielāku moduļa izmēru un pēc tam samaziniet dizaina lietotnē, nevis otrādi.</li>
  <li>Nepalieliniet mazu svītrkoda attēlu, jo kvadrātiņu malas kļūs izplūdušas vai robainas.</li>
  <li>Saglabājiet PNG formātā, lai krāsas un malas netiktu sabojātas kā JPG formātā.</li>
</ul>

<h2>Klusā zona</h2>
<p>Katram svītrkodam vajadzīga tukša vieta apkārt, ko sauc par <strong>kluso zonu</strong> (quiet zone). QR Code tai ideālā gadījumā jābūt četru moduļu platumā. Lineārajam svītrkodam tukšā vieta kreisajā un labajā pusē ir ļoti svarīga. Nenovietojiet tekstu, dizaina līnijas vai iepakojuma malu pārāk tuvu.</p>

<h2>Krāsas un materiāli</h2>
<ul>
  <li>Svītrkodam izmantojiet tumšu krāsu, bet fonam – gaišu.</li>
  <li>Izvairieties no spīdīgiem vai caurspīdīgiem materiāliem, jo gaismas atstarojumi var traucēt kamerai.</li>
  <li>Pirms lielas tirāžas drukāšanas vienmēr izdrukājiet vienu paraugu un pārbaudiet to ar vairākiem tālruņiem vai skeneriem.</li>
</ul>
<p>Ja jūsu svītrkodu joprojām ir grūti noskenēt, apskatiet <a href="/artikel/barcode-tidak-bisa-dipindai">7 iemeslus, kāpēc svītrkodu nevar noskenēt</a>.</p>
`
};
