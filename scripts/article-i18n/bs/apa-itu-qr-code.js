// apa-itu-qr-code
module.exports = {
  title: "Šta je QR Code i kako radi?",
  desc: "QR Code može čuvati link, tekst, pa čak i podatke o WiFi mreži, a ostaje čitljiv i kada je djelimično oštećen. Evo kako radi i koje su njegove prednosti.",
  tags: ["Osnove", "QR Code"],
  coverCaption: "QR Code možete skenirati direktno kamerom telefona.",
  inlineCaption: "Svaki QR Code sastoji se od malih crnih i bijelih kvadratića.",
  faq: [
    ["Može li QR Code isteći?", "Statički QR Code nikada ne ističe jer su njegovi podaci ugrađeni direktno u sliku. Dinamički QR Code može prestati raditi ako usluga koja pruža njegov link prestane s radom ili istekne pretplata."],
    ["Koliko podataka može sačuvati QR Code?", "Najveća verzija QR Code može sačuvati do 7.089 cifara ili oko 2.953 bajta. Ipak, što je manje podataka, QR Code se lakše skenira."],
    ["Da li QR Code ostaje čitljiv ako je djelimično oštećen?", "Da. Zahvaljujući ispravljanju grešaka, QR Code ostaje čitljiv čak i kada je oštećeno oko 7% do 30% njegove površine, zavisno od korištenog nivoa ispravljanja L, M, Q ili H."]
  ],
  body: `
<p>QR Code (Quick Response Code) je kvadratni 2D barkod sastavljen od malih crnih i bijelih kvadratića. Za razliku od linijskog barkoda, koji čuva tek desetak cifara, QR Code može sačuvati link ka web-stranici, dug tekst, broj telefona, kontakt, pa čak i podatke o WiFi mreži.</p>
<p>QR Code je 1994. godine razvila japanska kompanija Denso Wave za praćenje dijelova vozila u fabrici. Danas se QR Code koristi svuda, od digitalnog plaćanja do menija u restoranima, jer se može skenirati direktno kamerom telefona.</p>

<h2>Dijelovi QR Code</h2>
<ul>
  <li><strong>Tri velika kvadrata u uglovima</strong> (finder pattern): pomažu kameri da pronađe QR Code i odredi njegov smjer, tako da ostaje čitljiv čak i kada ga skenirate ukoso ili naopako.</li>
  <li><strong>Uzorak za poravnanje</strong> (alignment pattern): mali kvadrat koji pomaže da se očita QR Code koji je savijen ili se gleda pod uglom.</li>
  <li><strong>Područje podataka</strong>: mali kvadratići koji sadrže informacije koje čuvate.</li>
  <li><strong>Tiha zona</strong> (quiet zone): prazan prostor oko QR Code kako bi se lako odvojio od pozadine.</li>
</ul>

<h2>Koliko podataka može sačuvati?</h2>
<p>QR Code ima 40 verzija veličine. Najveća verzija može sačuvati do 7.089 cifara ili oko 2.953 bajta podataka. U praksi, što je manje sačuvanih podataka, to su kvadratići veći i QR Code se lakše skenira. Zato je kratak link bolji od veoma dugog.</p>

<h2>Čitljiv i kada je oštećen</h2>
<p>QR Code koristi ispravljanje grešaka (error correction). Postoje četiri nivoa:</p>
<ul>
  <li><strong>L</strong>: podaci se mogu povratiti ako je oštećeno oko 7% QR Code.</li>
  <li><strong>M</strong>: oko 15%. Ovo je uobičajen i uravnotežen izbor.</li>
  <li><strong>Q</strong>: oko 25%.</li>
  <li><strong>H</strong>: oko 30%, pogodno za QR Code koji će dobiti logo ili se štampati na mjestima koja se lako zaprljaju.</li>
</ul>
<p>Što je nivo ispravljanja viši, potrebno je više kvadratića, pa uzorak QR Code izgleda gušće.</p>

<h2>Šta se sve može sačuvati u QR Code?</h2>
<ul>
  <li>Link ka web-stranici, online prodavnici ili obrascu.</li>
  <li>Podaci o WiFi mreži, tako da se gosti mogu povezati bez kucanja lozinke. Pogledajte vodič za <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitalna vizit-karta (vCard), e-mail, SMS i WhatsApp chat.</li>
  <li>Lokacija na mapi i raspored događaja.</li>
</ul>

<h2>Statički i dinamički QR Code</h2>
<p>QR Code napravljen direktno iz podataka zove se <strong>statički QR Code</strong>: sadržaj mu je ugrađen u sliku i ne može se mijenjati, ali zato nikada ne ističe. <strong>Dinamički</strong> QR Code sadrži kratki link neke usluge koji zatim preusmjerava na vaše odredište; odredište se može promijeniti, ali QR Code prestaje raditi ako ta usluga prestane s radom. Za većinu potreba statički QR Code je sasvim dovoljan i sigurniji na duže staze.</p>

<p>Želite li isprobati? Napravite <a href="/?type=qrcode">besplatan QR Code</a> odmah ili pročitajte <a href="/artikel/cara-membuat-qr-code-gratis">kako napraviti QR Code u 3 koraka</a>.</p>
`
};
