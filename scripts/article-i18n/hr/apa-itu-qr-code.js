// apa-itu-qr-code
module.exports = {
  title: "Što je QR Code i kako radi?",
  desc: "QR Code može pohraniti poveznicu, tekst, pa i podatke o WiFi mreži te ostaje čitljiv čak i kad je djelomično oštećen. Evo kako radi i koje su mu prednosti.",
  tags: ["Osnove", "QR Code"],
  coverCaption: "QR Code možete skenirati izravno kamerom mobitela.",
  inlineCaption: "Svaki QR Code sastoji se od malih crnih i bijelih kvadratića.",
  faq: [
    ["Može li QR Code isteći?", "Statični QR Code nikada ne istječe jer su njegovi podaci ugrađeni izravno u sliku. Dinamični QR Code može prestati raditi ako usluga koja pruža njegovu poveznicu prestane s radom ili istekne pretplata."],
    ["Koliko podataka može pohraniti QR Code?", "Najveća verzija QR Code može pohraniti do 7.089 znamenki ili oko 2.953 bajta. Ipak, što je podataka manje, to se QR Code lakše skenira."],
    ["Ostaje li QR Code čitljiv ako je djelomično oštećen?", "Da. Zahvaljujući ispravljanju pogrešaka QR Code ostaje čitljiv čak i kad je oštećeno oko 7 % do 30 % njegove površine, ovisno o korištenoj razini ispravljanja L, M, Q ili H."]
  ],
  body: `
<p>QR Code (Quick Response Code) kvadratni je 2D barkod sastavljen od malih crnih i bijelih kvadratića. Za razliku od linijskog barkoda koji pohranjuje tek desetak znamenki, QR Code može pohraniti poveznicu na web-stranicu, dugačak tekst, telefonski broj, kontakt, pa i podatke o WiFi mreži.</p>
<p>QR Code razvila je 1994. japanska tvrtka Denso Wave za praćenje autodijelova u tvornici. Danas se QR Code koristi posvuda, od digitalnih plaćanja do jelovnika u restoranima, jer ga možete skenirati izravno kamerom mobitela.</p>

<h2>Dijelovi QR Code</h2>
<ul>
  <li><strong>Tri velika kvadrata u kutovima</strong> (finder pattern): pomažu kameri pronaći QR Code i odrediti njegov smjer, tako da ostaje čitljiv čak i kad ga skenirate ukoso ili naopako.</li>
  <li><strong>Uzorak za poravnanje</strong> (alignment pattern): mali kvadrat koji pomaže očitati QR Code koji je savijen ili gledan pod kutom.</li>
  <li><strong>Podatkovno područje</strong>: mali kvadratići koji sadrže informacije koje pohranite.</li>
  <li><strong>Tiha zona</strong> (quiet zone): prazan prostor oko QR Code zahvaljujući kojem ga je lako odvojiti od pozadine.</li>
</ul>

<h2>Koliko podataka može pohraniti?</h2>
<p>QR Code ima 40 verzija veličine. Najveća verzija može pohraniti do 7.089 znamenki ili oko 2.953 bajta podataka. U praksi vrijedi: što manje podataka pohranite, to su kvadratići veći i QR Code se lakše skenira. Zato je kratka poveznica bolja od vrlo dugačke.</p>

<h2>Čitljiv i kad je oštećen</h2>
<p>QR Code koristi ispravljanje pogrešaka (error correction). Postoje četiri razine:</p>
<ul>
  <li><strong>L</strong>: podaci se mogu vratiti čak i kad je oštećeno oko 7 % QR Code.</li>
  <li><strong>M</strong>: oko 15 %. To je uobičajen i uravnotežen izbor.</li>
  <li><strong>Q</strong>: oko 25 %.</li>
  <li><strong>H</strong>: oko 30 %, prikladno za QR Code u koji ćete dodati logotip ili koji će biti ispisan na mjestu gdje se lako zaprlja.</li>
</ul>
<p>Što je razina ispravljanja viša, potrebno je više kvadratića pa uzorak QR Code izgleda gušće.</p>

<h2>Što sve možete pohraniti u QR Code?</h2>
<ul>
  <li>Poveznicu na web-stranicu, web-trgovinu ili obrazac.</li>
  <li>Podatke o WiFi mreži kako bi se gosti mogli spojiti bez upisivanja lozinke. Pogledajte vodič <a href="/artikel/cara-membuat-qr-code-wifi">QR Code za WiFi</a>.</li>
  <li>Digitalnu posjetnicu (vCard), e-poštu, SMS i chat na WhatsAppu.</li>
  <li>Lokaciju na karti i termin događanja.</li>
</ul>

<h2>Statični i dinamični QR Code</h2>
<p>QR Code izrađen izravno iz podataka naziva se <strong>statični QR Code</strong>: njegov je sadržaj ugrađen u sliku i ne može se promijeniti, ali nikada ni ne istječe. <strong>Dinamični</strong> QR Code sadrži kratku poveznicu neke usluge koja zatim preusmjerava na vaše odredište; odredište se može promijeniti, ali QR Code prestaje raditi ako ta usluga prestane s radom. Za većinu potreba statični QR Code sasvim je dovoljan i dugoročno sigurniji.</p>

<p>Želite isprobati? Izradite <a href="/?type=qrcode">besplatan QR Code</a> odmah ili pročitajte <a href="/artikel/cara-membuat-qr-code-gratis">kako izraditi QR Code u 3 koraka</a>.</p>
`
};
