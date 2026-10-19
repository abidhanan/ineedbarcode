// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kako pridobiti črtno kodo EAN-13 za izdelke malih podjetij",
  desc: "Želite, da bi vaš izdelek prišel na police trgovin in supermarketov? Spoznajte pomen števk EAN-13, kako uradno številko registrirate pri GS1 Indonesia in kako jo natisnete.",
  tags: ["Poslovanje", "Maloprodaja"],
  coverCaption: "Embalaža maloprodajnih izdelkov potrebuje registrirano črtno kodo EAN-13.",
  inlineCaption: "Maloprodajne trgovine prepoznajo izdelke po številki EAN-13 v svojem blagajniškem sistemu.",
  faq: [
    ["Ali lahko številko EAN-13 ustvarim sam?", "Sliko črtne kode lahko ustvarite sami, številka pa naj bo uradna, od GS1. Izmišljena številka se lahko ujema z drugim izdelkom in jo maloprodajna trgovina zavrne."],
    ["Ali vsaka različica izdelka potrebuje drugo črtno kodo?", "Da. Vsaka drugačna različica, na primer drug okus, velikost ali vsebina pakiranja, potrebuje svojo številko EAN-13."],
    ["Kaj je kontrolna števka pri EAN-13?", "Kontrolna števka je 13. števka, izračunana iz prejšnjih 12 števk. Čitalnik jo uporabi, da preveri, ali je bila črtna koda pravilno prebrana. Generator I Need Barcode jo izračuna samodejno, če vnesete 12 števk."]
  ],
  body: `
<p>Če želite svoj izdelek prodajati v trgovinah, supermarketih ali na velikih spletnih tržnicah, boste običajno morali na embalažo natisniti črtno kodo <strong>EAN-13</strong>. Ta črtna koda vsebuje 13 števk, ki so edinstvena identiteta vašega izdelka po vsem svetu.</p>

<h2>Pomen 13 števk v EAN-13</h2>
<ul>
  <li><strong>Predpona GS1</strong>: prve tri števke označujejo organizacijo GS1, ki je številko izdala. Številke, ki jih izda GS1 Indonesia, se začnejo z <strong>899</strong>.</li>
  <li><strong>Številka podjetja</strong>: identiteta vašega podjetja, ki jo prejmete ob registraciji.</li>
  <li><strong>Številka izdelka</strong>: podjetje jo samo določi za vsako različico izdelka, na primer za drug okus ali drugo velikost.</li>
  <li><strong>Kontrolna števka</strong>: zadnja števka, ki se samodejno izračuna iz prejšnjih 12 števk in preprečuje napačno branje.</li>
</ul>

<h2>Zakaj mora biti številka uradna?</h2>
<p>Črtno kodo EAN-13 lahko nariše kdorkoli, njena <strong>številka</strong> pa mora biti registrirana. Maloprodajne trgovine s to številko prepoznajo izdelek v svojem sistemu. Če si številko izmislite, se lahko ujema z izdelkom drugega podjetja in bo zavrnjena, ko boste izdelek prijavili v trgovino.</p>

<h2>Kako registrirati številko pri GS1 Indonesia</h2>
<ol>
  <li>Pripravite poslovne dokumente, kot sta NIB (indonezijska identifikacijska številka podjetja) in NPWP (davčna številka), ter seznam izdelkov, ki bodo dobili črtno kodo.</li>
  <li>Registrirajte podjetje prek uradnega spletnega mesta GS1 Indonesia in izberite potrebno število številk.</li>
  <li>Plačajte registracijsko pristojbino in letno članarino v skladu z veljavnimi pogoji.</li>
  <li>Po odobritvi prejmete številko podjetja in lahko ustvarite številke za posamezne izdelke.</li>
</ol>
<p>Zahteve in stroški se lahko spremenijo, zato najnovejše informacije vedno preverite neposredno na spletnem mestu GS1 Indonesia.</p>

<h2>Izdelava slike črtne kode</h2>
<p>Ko imate številko, odprite <a href="/?type=ean13">generator EAN-13</a> in vnesite 12 ali 13 števk številke svojega izdelka. Če vnesete 12 števk, se kontrolna števka izračuna samodejno. Prepričajte se, da je možnost besedila pod črtno kodo vklopljena, da se števke natisnejo, nato jo prenesite kot PNG.</p>

<h2>Nasveti za tiskanje na embalažo</h2>
<ul>
  <li>Uporabite črne ali temno modre črte na belem ozadju. Za črte se izogibajte rdeči barvi, ker mnogi blagajniški čitalniki uporabljajo rdečo svetlobo, zato rdečih črt ne preberejo.</li>
  <li>Črtne kode ne pomanjšujte preveč. Standardna velikost EAN-13 je približno 37,3 × 25,9 mm in jo lahko pomanjšate do približno 80 %. Več v <a href="/artikel/ukuran-barcode-untuk-dicetak">vodniku o velikosti črtne kode</a>.</li>
  <li>Levo in desno od črtne kode pustite prazen prostor in je ne postavljajte na pregibe ali spoje embalaže.</li>
  <li>Preden začnete tiskati v velikih količinah, natis preizkusite s čitalnikom.</li>
</ul>
<p>Za izdelke, ki se prodajajo v Severni Ameriki, boste morda morali uporabiti tudi <a href="/?type=upca">UPC-A</a>, ki vsebuje 12 števk.</p>
`
};
