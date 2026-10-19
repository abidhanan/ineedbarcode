// apa-itu-qr-code
module.exports = {
  title: "Kaj je QR Code in kako deluje?",
  desc: "QR Code lahko hrani povezavo, besedilo ali celo podatke o WiFi in ostane berljiv, tudi če je delno poškodovan. Tako deluje in to so njegove prednosti.",
  tags: ["Osnove", "QR Code"],
  coverCaption: "QR Code lahko skenirate neposredno s kamero telefona.",
  inlineCaption: "Vsak QR Code je sestavljen iz majhnih črnih in belih kvadratkov.",
  faq: [
    ["Ali lahko QR Code poteče?", "Statični QR Code nikoli ne poteče, ker so njegovi podatki vdelani neposredno v sliko. Dinamični QR Code lahko preneha delovati, če storitev, ki zagotavlja njegovo povezavo, preneha delovati ali se naročnina izteče."],
    ["Koliko podatkov lahko hrani QR Code?", "Največja različica QR Code lahko hrani do 7.089 števk ali približno 2.953 bajtov. Vendar velja: manj ko je podatkov, lažje se QR Code skenira."],
    ["Ali je QR Code berljiv, tudi če je delno poškodovan?", "Da. Zaradi popravljanja napak ostane QR Code berljiv, tudi če je poškodovanih približno 7 % do 30 % njegove površine, odvisno od uporabljene ravni popravljanja L, M, Q ali H."]
  ],
  body: `
<p>QR Code (Quick Response Code) je kvadratna 2D črtna koda, sestavljena iz majhnih črnih in belih kvadratkov. Za razliko od klasične črtne kode, ki hrani le kakšnih deset številk, lahko QR Code hrani povezavo do spletnega mesta, dolgo besedilo, telefonsko številko, stik ali celo podatke o omrežju WiFi.</p>
<p>QR Code je leta 1994 razvilo japonsko podjetje Denso Wave za sledenje avtomobilskim delom v tovarni. Danes se QR Code uporablja povsod, od digitalnih plačil do restavracijskih menijev, saj ga lahko skenirate neposredno s kamero telefona.</p>

<h2>Deli QR Code</h2>
<ul>
  <li><strong>Trije veliki kvadrati v kotih</strong> (finder pattern): kameri pomagajo najti QR Code in določiti njegovo usmerjenost, zato ostane berljiv, tudi če ga skenirate poševno ali obrnjenega na glavo.</li>
  <li><strong>Poravnalni vzorec</strong> (alignment pattern): majhen kvadrat, ki pomaga prebrati QR Code, ki je ukrivljen ali viden pod kotom.</li>
  <li><strong>Podatkovno območje</strong>: majhni kvadratki, ki vsebujejo informacije, ki jih shranite.</li>
  <li><strong>Mirno območje</strong> (quiet zone): prazen prostor okoli QR Code, ki omogoča, da ga je lahko ločiti od ozadja.</li>
</ul>

<h2>Koliko podatkov lahko hrani?</h2>
<p>QR Code ima 40 velikostnih različic. Največja različica lahko hrani do 7.089 števk ali približno 2.953 bajtov podatkov. V praksi velja: manj ko je shranjenih podatkov, večji so kvadratki in lažje se QR Code skenira. Zato je kratka povezava boljša od zelo dolge.</p>

<h2>Berljiv tudi, ko je poškodovan</h2>
<p>QR Code uporablja popravljanje napak (error correction). Obstajajo štiri ravni:</p>
<ul>
  <li><strong>L</strong>: podatke je mogoče obnoviti, tudi če je poškodovanih približno 7 % QR Code.</li>
  <li><strong>M</strong>: približno 15 %. To je običajna in uravnotežena izbira.</li>
  <li><strong>Q</strong>: približno 25 %.</li>
  <li><strong>H</strong>: približno 30 %, primerno za QR Code, v katerega boste dodali logotip ali ki bo natisnjen na mestu, kjer se hitro umaže.</li>
</ul>
<p>Višja ko je raven popravljanja, več kvadratkov je potrebnih, zato je vzorec QR Code videti gostejši.</p>

<h2>Kaj vse lahko shranite v QR Code?</h2>
<ul>
  <li>Povezavo do spletnega mesta, spletne trgovine ali obrazca.</li>
  <li>Podatke o WiFi, da se gostje lahko povežejo brez vnašanja gesla. Oglejte si vodnik <a href="/artikel/cara-membuat-qr-code-wifi">QR Code za WiFi</a>.</li>
  <li>Digitalno vizitko (vCard), e-pošto, SMS in klepet v WhatsAppu.</li>
  <li>Lokacijo na zemljevidu in termin dogodka.</li>
</ul>

<h2>Statični in dinamični QR Code</h2>
<p>QR Code, ustvarjen neposredno iz podatkov, se imenuje <strong>statični QR Code</strong>: njegova vsebina je vdelana v sliko in je ni mogoče spremeniti, vendar tudi nikoli ne poteče. <strong>Dinamični</strong> QR Code vsebuje kratko povezavo določene storitve, ki nato preusmeri na vaš cilj; cilj je mogoče zamenjati, vendar QR Code preneha delovati, če storitev preneha delovati. Za večino potreb statični QR Code povsem zadošča in je dolgoročno varnejši.</p>

<p>Bi radi poskusili? Ustvarite <a href="/?type=qrcode">brezplačen QR Code</a> zdaj ali preberite, <a href="/artikel/cara-membuat-qr-code-gratis">kako ustvariti QR Code v 3 korakih</a>.</p>
`
};
