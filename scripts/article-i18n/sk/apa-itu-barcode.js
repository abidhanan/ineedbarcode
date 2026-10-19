// apa-itu-barcode
module.exports = {
  title: "Čo je čiarový kód? Význam, princíp fungovania a typy",
  desc: "Čiarový kód nájdete takmer na každom výrobku, ktorý kúpite. Zistite, ako funguje, aká je jeho stručná história a ktoré typy čiarových kódov sa používajú najčastejšie.",
  tags: ["Základy", "Čiarové kódy"],
  coverCaption: "Čiarový kód na obale uchováva jedinečný kód výrobku.",
  inlineCaption: "Pokladníčka prečíta čiarový kód skenerom v okamihu.",
  faq: [
    ["Aký je rozdiel medzi čiarovým kódom a QR Code?", "QR Code je jedným z typov čiarového kódu, konkrétne 2D kódom. Čiarový kód tvorený čiarami (1D) uchováva len niekoľko znakov a číta sa zľava doprava, zatiaľ čo QR Code ukladá dáta v dvoch smeroch, takže sa doň zmestí odkaz, text alebo údaje o WiFi."],
    ["Obsahuje čiarový kód cenu výrobku?", "Zvyčajne nie. Čiarový kód výrobku obsahuje iba kód. Cena a názov výrobku sú uložené v pokladničnom systéme a vyhľadajú sa podľa naskenovaného kódu."],
    ["Musím za vytvorenie čiarového kódu platiť?", "Nie. Obrázok čiarového kódu môžete vytvoriť zadarmo, napríklad na I Need Barcode. Platenú registráciu vyžaduje iba oficiálne číslo pre maloobchodné čiarové kódy, ako je EAN-13, a to prostredníctvom GS1."]
  ],
  body: `
<p>Čiarový kód je spôsob, ako zapísať dáta vo forme vzoru, ktorý dokáže prečítať stroj. Tento vzor zvyčajne tvoria čierne a biele čiary rôznej šírky alebo malé štvorčeky usporiadané do štvorca. Pri skenovaní sa vzor prevedie späť na čísla alebo text, napríklad na kód výrobku, číslo zásielky alebo adresu webu.</p>
<p>Keďže čiarový kód číta stroj, je oveľa rýchlejší a menej náchylný na chyby než ručné prepisovanie kódu. Preto sa čiarové kódy používajú pri pokladniciach, v skladoch, nemocniciach, na vstupenkách aj na obaloch potravín.</p>

<h2>Stručná história čiarového kódu</h2>
<p>Myšlienku čiarového kódu si v roku 1952 dali v USA patentovať Norman Joseph Woodland a Bernard Silver. V obchodoch sa skutočne začal používať až v roku 1974, keď v jednom supermarkete v Ohiu naskenovali balenie žuvačiek s kódom UPC. Odvtedy sa čiarové kódy rozšírili po celom svete a dnes ich globálne spravuje normalizačná organizácia GS1.</p>

<h2>Ako čiarový kód funguje?</h2>
<p>Skener čiarový kód osvetlí a číta odrazené svetlo. Tmavé časti odrážajú málo svetla, svetlé časti veľa. Tento rozdiel sa prevedie na rad núl a jednotiek a porovná sa s pravidlami daného typu čiarového kódu. Mnohé čiarové kódy majú aj <strong>kontrolnú číslicu</strong> (check digit), teda poslednú číslicu vypočítanú z predchádzajúcich čísel. Ak výpočet nesedí, skener spozná, že niečo nie je v poriadku, a výsledok odmietne.</p>
<p>Samotný čiarový kód zvyčajne uchováva iba kód. Informácie ako názov výrobku alebo cena sú uložené v pokladničnom systéme či databáze a vyhľadávajú sa podľa tohto kódu.</p>

<h2>Najčastejšie používané typy čiarových kódov</h2>
<p>Vo všeobecnosti sa čiarové kódy delia do dvoch veľkých skupín:</p>
<ul>
  <li><strong>1D (lineárne) čiarové kódy</strong>: tvoria ich zvislé čiary, ktoré sa čítajú zľava doprava. Príkladom sú <a href="/?type=ean13">EAN-13</a> a <a href="/?type=upca">UPC-A</a> pre maloobchodné výrobky a tiež <a href="/?type=code128">Code 128</a> a <a href="/?type=code39">Code 39</a> pre logistiku a sklady.</li>
  <li><strong>2D čiarové kódy</strong>: tvorí ich štvorcový vzor, ktorý ukladá dáta v dvoch smeroch, takže sa do nich zmestí oveľa viac. Príkladom sú <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> a <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Okrem toho existujú špeciálne čiarové kódy pre poštu a prepravu, zdravotníctvo a tiež štandardy GS1 pre dodávateľské reťazce. Podrobnejšie vysvetlenie rozdielov nájdete v článku <a href="/artikel/perbedaan-barcode-1d-dan-2d">Rozdiel medzi 1D a 2D čiarovými kódmi</a>.</p>

<h2>Na čo sa čiarové kódy používajú?</h2>
<ul>
  <li><strong>Maloobchod</strong>: zrýchľujú prácu pri pokladnici a automaticky evidujú zásoby.</li>
  <li><strong>Sklady a preprava</strong>: sledujú tovar a balíky z jedného miesta na druhé.</li>
  <li><strong>Vstupenky a podujatia</strong>: overujú pravosť vstupenky jediným naskenovaním.</li>
  <li><strong>Marketing</strong>: QR Code na letáku alebo obale privedie ľudí priamo na váš web, menu alebo WhatsApp.</li>
</ul>

<h2>Vytvorte si vlastný čiarový kód</h2>
<p>Na vytvorenie čiarového kódu nepotrebujete platenú aplikáciu. Na <a href="/">I Need Barcode</a> zvoľte typ čiarového kódu, vyplňte dáta a stiahnite si ho ako obrázok PNG. Vyberať môžete z viac než 100 typov a všetky sú zadarmo a bez registrácie.</p>
`
};
