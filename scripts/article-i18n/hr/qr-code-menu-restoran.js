// qr-code-menu-restoran
module.exports = {
  title: "QR Code za jelovnik restorana: Potpuni vodič",
  desc: "Digitalni jelovnik putem QR Code olakšava posao gostima i štedi troškove ispisa. Evo kako ga izraditi, pripremiti jelovnik i postaviti ga na stolove.",
  tags: ["Poslovanje", "QR Code"],
  coverCaption: "QR Code na stolu vodi goste izravno do digitalnog jelovnika.",
  inlineCaption: "Postavite QR Code na mjesto do kojeg gost lako dosegne sa stolice.",
  faq: [
    ["Što je bolje za digitalni jelovnik: PDF ili web-stranica?", "Web-stranica se na mobitelu obično ugodnije čita i brže otvara. PDF se može koristiti ako je malen, a tekst na zaslonu dovoljno velik."],
    ["Koliko velik treba biti QR Code za jelovnik na stolu?", "Oko 3 do 5 cm dovoljno je za skeniranje sa stolice. Koristite materijal otporan na prolijevanje koji nije previše sjajan."],
    ["Moram li ponovno ispisati QR Code kada se jelovnik promijeni?", "Ne, sve dok poveznica ostane ista. Dovoljno je ažurirati sadržaj stranice ili datoteke s jelovnikom na koju QR Code upućuje."]
  ],
  body: `
<p>Digitalni jelovnik putem QR Code danas je uobičajen u kafićima i restoranima. Gosti samo skeniraju QR Code na stolu i vide popis jela, cijene i fotografije. Vlasnicima ugostiteljskih objekata ovaj način štedi troškove ispisa i olakšava promjenu cijena ili ponude.</p>

<h2>Prednosti jelovnika s QR Code</h2>
<ul>
  <li><strong>Lako ažuriranje</strong>: promijenite cijene ili dodajte jela bez ponovnog ispisa jelovnika.</li>
  <li><strong>Ušteda troškova</strong>: dovoljno je ispisati mali QR Code za svaki stol.</li>
  <li><strong>Više informacija</strong>: prikažite fotografije, opise i oznake poput ljuto ili vegetarijansko.</li>
  <li><strong>Podrška za online narudžbe</strong>: usmjerite goste na obrazac za narudžbu ili WhatsApp.</li>
</ul>

<h2>1. korak: Pripremite online jelovnik</h2>
<p>QR Code sadrži samo poveznicu pa vam treba jelovnik koji se može otvoriti na internetu. Mogućnosti su, među ostalim, stranica na vlastitoj web-stranici, PDF datoteka u javno dijeljenoj online pohrani ili stranica kataloga na platformi za naručivanje. Provjerite čita li se jelovnik ugodno na zaslonu mobitela: dovoljno velik tekst, ne preteške fotografije i jasne cijene.</p>

<h2>2. korak: Izradite QR Code</h2>
<ol>
  <li>Kopirajte poveznicu na svoj jelovnik.</li>
  <li>Otvorite <a href="/?type=qrcode">generator QR Code</a>, odaberite karticu <strong>URL</strong> i zalijepite poveznicu.</li>
  <li>U odjeljku Dizajn dodajte okvir s natpisom „MENU“ ili „SKENIRAJTE ZA JELOVNIK“.</li>
  <li>Prilagodite boje identitetu restorana, ali i dalje koristite tamnu boju na svijetloj pozadini.</li>
  <li>Preuzmite PNG s dovoljno velikom veličinom modula za ispis.</li>
</ol>
<p>Koristite poveznicu koja se neće mijenjati. Ako jelovnik premjestite na drugu adresu, već ispisani QR Code ne može se ažurirati. Objašnjenje potražite u članku <a href="/artikel/apa-itu-qr-code">što je QR Code</a>.</p>

<h2>3. korak: Ispišite i postavite</h2>
<ul>
  <li>Ispišite u veličini od najmanje oko 3–5 cm kako bi se lako skenirao sa stolice.</li>
  <li>Koristite materijal otporan na prolijevanje, primjerice vinilnu naljepnicu ili plastificiranu karticu bez pretjeranog sjaja.</li>
  <li>Postavite ga na lako dostupno mjesto, primjerice u akrilni stalak na sredini stola.</li>
  <li>Dodajte broj stola pokraj QR Code ako gosti naručuju putem chata.</li>
</ul>

<h2>Ne zaboravite goste bez mobitela</h2>
<p>Pripremite jedan ili dva ispisana jelovnika za goste koji nemaju mobitel uza sebe, kojima se baterija ispraznila ili koji radije čitaju tiskani jelovnik.</p>
<p>Za goste možete izraditi i <a href="/artikel/cara-membuat-qr-code-wifi">QR Code za WiFi</a> te ga postaviti pokraj QR Code s jelovnikom.</p>
`
};
