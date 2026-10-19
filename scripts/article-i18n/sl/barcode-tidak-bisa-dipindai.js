// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 razlogov, zakaj črtne kode ni mogoče skenirati, in kako jih odpraviti",
  desc: "Črtne kode ali QR Code ni mogoče skenirati? Preverite sedem najpogostejših vzrokov, od barvnega kontrasta do velikosti, skupaj z načini, kako jih odpraviti.",
  tags: ["Nasveti", "Črtne kode"],
  coverCaption: "Kontrast in velikost odločata o tem, ali se QR Code zlahka skenira.",
  inlineCaption: "V skladišču črtna koda, ki je ni mogoče skenirati, upočasni delo.",
  faq: [
    ["Zakaj lahko QR Code skeniram z enim telefonom, z drugim pa ne?", "Kamere in aplikacije za skeniranje imajo različne zmogljivosti. QR Code, ki je premajhen, ima nizek kontrast ali obrnjene barve, na nekaterih telefonih pogosteje odpove. Pred tiskanjem ga preizkusite z več telefoni."],
    ["Ali je barvno črtno kodo mogoče skenirati?", "Da, če je barva temna na svetlem ozadju. Za črte črtne kode se izogibajte rdeči barvi, ker mnogi blagajniški čitalniki uporabljajo rdečo svetlobo."],
    ["Kako preverim, ali je črtna koda pravilna?", "Natis skenirajte z več telefoni ali čitalniki in se prepričajte, da se prebrani podatki natančno ujemajo s podatki, ki ste jih vnesli."]
  ],
  body: `
<p>Nič ni bolj nadležnega kot črtna koda, ki ste jo natisnili v več sto izvodih, nato pa ugotovite, da je ni mogoče skenirati. Dobra novica je, da je vzrok običajno preprost in ga je lahko preprečiti. Tukaj je sedem najpogostejših vzrokov.</p>

<h2>1. Prenizek barvni kontrast</h2>
<p>Čitalnik bere razliko med temnim in svetlim. Svetlo siva črtna koda na beli podlagi ali temno modra na črni se težko razlikuje. <strong>Rešitev:</strong> uporabite temno barvo na svetlem ozadju. Črna na beli je najvarnejša izbira.</p>

<h2>2. Obrnjene barve ali rdeča barva</h2>
<p>Svetle črtne kode na temnem ozadju ne podpirajo vsi čitalniki. Poleg tega mnogi blagajniški čitalniki uporabljajo rdečo svetlobo, zato so rdeče črte videti enako kot belo ozadje. <strong>Rešitev:</strong> za črte ali module črtne kode ne uporabljajte rdeče barve in barv ne obračajte.</p>

<h2>3. Premajhna velikost</h2>
<p>Kamera potrebuje dovolj slikovnih pik, da prepozna vsak modul. <strong>Rešitev:</strong> povečajte črtno kodo. Za QR Code, ki se skenira od blizu, uporabite vsaj približno 2 × 2 cm. Oglejte si <a href="/artikel/ukuran-barcode-untuk-dicetak">vodnik o velikostih za tisk</a>.</p>

<h2>4. Ni mirnega območja</h2>
<p>Črtno kodo, ki se dotika slike, besedila ali roba papirja, je težko ločiti od okolice. <strong>Rešitev:</strong> okoli črtne kode pustite prazen prostor, zlasti levo in desno od linearne črtne kode.</p>

<h2>5. Zamegljena ali popačena slika</h2>
<p>Črtna koda, povečana iz majhne slike, shranjena kot JPG nizke kakovosti ali nesorazmerno raztegnjena, izgubi svojo obliko. <strong>Rešitev:</strong> prenesite jo z večjo velikostjo modula v formatu PNG in velikost vedno spreminjajte sorazmerno.</p>

<h2>6. Napačni podatki ali podatki, ki ne ustrezajo vrsti</h2>
<p>Vsaka vrsta črtne kode ima svoja pravila. EAN-13 na primer sprejme le 12 ali 13 števk s pravilno kontrolno števko. Zaradi tipkarske napake v povezavi se QR Code sicer prebere, vendar ne odpre ničesar. <strong>Rešitev:</strong> pred tiskanjem preverite podatke. Generator <a href="/">I Need Barcode</a> prikaže sporočilo, če podatki ne ustrezajo pravilom izbrane vrste črtne kode.</p>

<h2>7. Površina in osvetlitev</h2>
<p>Sijoči materiali, prozorna plastika, pregibi in ukrivljene površine lahko odbijajo svetlobo ali spremenijo obliko črtne kode. <strong>Rešitev:</strong> tiskajte na ravno površino, ki se ne sveti, in skeniranje preizkusite v dejanskih svetlobnih pogojih.</p>

<h2>Kaj pa QR Code z oblikovanjem?</h2>
<p>QR Code, ki mu dodate obliko, barvo ali okvir, je še vedno mogoče skenirati, če trije označevalni kvadrati v kotih ostanejo nedotaknjeni in je kontrast zadosten. Več o tem preberite v članku <a href="/artikel/desain-qr-code-kreatif">kreativno oblikovanje QR Code, ki ostane berljiv</a>.</p>
<p>Najboljša navada: <strong>vedno preizkusite en natis</strong> z več telefoni in čitalniki, preden začnete tiskati v velikih količinah.</p>
`
};
