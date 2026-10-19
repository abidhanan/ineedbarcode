// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Prava velikost in ločljivost črtne kode za tisk",
  desc: "Premajhno ali zamegljeno črtno kodo je težko skenirati. Spoznajte najmanjšo velikost, pravilo razdalje skeniranja in varno ločljivost slike za tisk.",
  tags: ["Vodniki", "Tisk"],
  coverCaption: "Tiskalnik nalepk tiska črtne kode za pakete in embalažo.",
  inlineCaption: "Velikost nalepke določa, kako veliko črtno kodo lahko natisnete.",
  faq: [
    ["Kakšna je najmanjša velikost QR Code za tisk?", "Za skeniranje od blizu je varna meja približno 2 × 2 cm. Za večje razdalje uporabite razmerje približno 10 : 1 med razdaljo skeniranja in širino QR Code."],
    ["Kakšna je standardna velikost črtne kode EAN-13?", "Standardna velikost EAN-13 je približno 37,3 × 25,9 mm. Lahko jo pomanjšate do približno 80 % ali povečate do 200 %."],
    ["Zakaj je črtna koda po tiskanju zamegljena?", "Običajno zato, ker je bila majhna slika povečana ali shranjena kot JPG nizke kakovosti. Prenesite jo z večjo velikostjo modula v formatu PNG."]
  ],
  body: `
<p>Črtna koda, ki je na zaslonu videti dobro, po tiskanju ni nujno berljiva. Premajhna velikost, nizka ločljivost ali razlito črnilo lahko povzročijo, da je čitalnik ne prebere. Tukaj je vodnik, kako poskrbeti, da bodo vaši natisi ostali berljivi.</p>

<h2>Spoznajte modul</h2>
<p><strong>Modul</strong> je najmanjša enota črtne kode, to je en majhen kvadratek v QR Code ali najožja črta v linearni črtni kodi. Velikost modula določa, kako enostavno se črtna koda bere. Na <a href="/">I Need Barcode</a> lahko velikost modula nastavite v razdelku Nastavitve: višja ko je vrednost, večja in ostrejša je prenesena slika.</p>

<h2>Najmanjša velikost QR Code</h2>
<ul>
  <li>Za skeniranje od blizu (na primer na vizitki ali nalepki izdelka) je varna meja velikost približno <strong>2 × 2 cm</strong>.</li>
  <li>Uporabite pravilo razmerja približno <strong>10 : 1</strong>: razdalja skeniranja je približno desetkratnik širine QR Code. Za plakat, ki se skenira z razdalje 2 metrov, naj bo QR Code velik vsaj približno 20 cm.</li>
  <li>Več ko je shranjenih podatkov, gostejši je vzorec, zato je potrebna večja velikost.</li>
</ul>

<h2>Velikost črtne kode izdelka</h2>
<p>Standardna velikost <a href="/?type=ean13">EAN-13</a> je približno 37,3 × 25,9 mm (100 %). Lahko jo pomanjšate do približno 80 % ali povečate do 200 %. Višine črt ne skrajšajte preveč, ker blagajniški čitalnik potrebuje prostor za branje iz različnih kotov.</p>

<h2>Ločljivost slike</h2>
<ul>
  <li>Za tisk poskrbite, da je vsak modul izrisan z <strong>več celimi slikovnimi pikami</strong>, ne z delom slikovne pike. Pri prenosu izberite večjo velikost modula in sliko nato pomanjšajte v programu za oblikovanje, ne obratno.</li>
  <li>Ne povečujte majhne slike črtne kode, ker robovi kvadratkov postanejo zamegljeni ali nazobčani.</li>
  <li>Shranite v formatu PNG, da se barve in robovi ne pokvarijo kot pri JPG.</li>
</ul>

<h2>Mirno območje</h2>
<p>Vsaka črtna koda potrebuje okoli sebe prazen prostor, imenovan <strong>mirno območje</strong> (quiet zone). Pri QR Code naj bo idealno široko štiri module. Pri linearni črtni kodi je prazen prostor levo in desno zelo pomemben. Besedila, oblikovalskih črt ali roba embalaže ne postavljajte preblizu.</p>

<h2>Barve in materiali</h2>
<ul>
  <li>Za črtno kodo uporabite temno barvo, za ozadje pa svetlo.</li>
  <li>Izogibajte se sijočim ali prozornim materialom, ker odboj svetlobe lahko moti kamero.</li>
  <li>Vedno natisnite en vzorec in ga preizkusite z več telefoni ali čitalniki, preden natisnete večjo količino.</li>
</ul>
<p>Če je vašo črtno kodo še vedno težko skenirati, si oglejte <a href="/artikel/barcode-tidak-bisa-dipindai">7 razlogov, zakaj črtne kode ni mogoče skenirati</a>.</p>
`
};
