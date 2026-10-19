// qr-code-menu-restoran
module.exports = {
  title: "QR Code za meni u restoranu: potpuni vodič",
  desc: "Digitalni meni putem QR Code olakšava posao gostima i štedi troškove štampanja. Evo kako ga napraviti, pripremiti meni i postaviti ga na stolove.",
  tags: ["Poslovanje", "QR Code"],
  coverCaption: "QR Code na stolu vodi goste direktno do digitalnog menija.",
  inlineCaption: "Postavite QR Code na mjesto do kojeg se lako dosegne sa stolice.",
  faq: [
    ["Šta je bolje za digitalni meni: PDF ili web-stranica?", "Web-stranica se obično ugodnije čita na telefonu i brže se otvara. PDF se može koristiti ako je male veličine, a tekst dovoljno krupan na ekranu."],
    ["Kolika treba biti veličina QR Code za meni na stolu?", "Oko 3 do 5 cm je dovoljno da se skenira sa stolice. Koristite materijal otporan na prolijevanje koji nije previše sjajan."],
    ["Da li je potrebno ponovo štampati QR Code kada se meni promijeni?", "Nije, sve dok link ostaje isti. Dovoljno je ažurirati sadržaj stranice ili datoteke menija na koju QR Code vodi."]
  ],
  body: `
<p>Digitalni meni putem QR Code danas je uobičajena stvar u kafićima i restoranima. Gosti samo skeniraju QR Code na stolu da bi vidjeli spisak jela, cijene i fotografije. Vlasnicima objekata to štedi troškove štampanja i olakšava promjenu cijena ili menija.</p>

<h2>Prednosti menija s QR Code</h2>
<ul>
  <li><strong>Lako ažuriranje</strong>: promijenite cijene ili dodajte jela bez ponovnog štampanja jelovnika.</li>
  <li><strong>Ušteda novca</strong>: dovoljno je odštampati mali QR Code za svaki sto.</li>
  <li><strong>Više informacija</strong>: prikažite fotografije, opise i oznake kao što su ljuto ili vegetarijansko.</li>
  <li><strong>Podrška za online naručivanje</strong>: usmjerite goste na obrazac za narudžbu ili na WhatsApp.</li>
</ul>

<h2>Korak 1: Pripremite online meni</h2>
<p>QR Code sadrži samo link, pa vam je potreban meni koji se može otvoriti na internetu. Neke od mogućnosti su stranica na vašoj web-stranici, PDF datoteka u online pohrani koja je javno podijeljena ili stranica kataloga na platformi za naručivanje. Provjerite da li se meni ugodno čita na ekranu telefona: tekst treba biti dovoljno krupan, fotografije ne previše velike, a cijene jasne.</p>

<h2>Korak 2: Napravite QR Code</h2>
<ol>
  <li>Kopirajte link svog menija.</li>
  <li>Otvorite <a href="/?type=qrcode">generator QR Code</a>, odaberite karticu <strong>URL</strong> i zalijepite link.</li>
  <li>U odjeljku Dizajn dodajte okvir s natpisom „MENI“ ili „SKENIRAJTE ZA MENI“.</li>
  <li>Prilagodite boje vizuelnom identitetu restorana, ali i dalje koristite tamnu boju na svijetloj pozadini.</li>
  <li>Preuzmite PNG s dovoljno velikom veličinom modula za štampanje.</li>
</ol>
<p>Koristite link koji se neće mijenjati. Ako se meni premjesti na drugu adresu, već odštampani QR Code ne može se ažurirati. Objašnjenje se nalazi u članku <a href="/artikel/apa-itu-qr-code">šta je QR Code</a>.</p>

<h2>Korak 3: Odštampajte i postavite</h2>
<ul>
  <li>Štampajte u veličini od najmanje oko 3–5 cm kako bi se lako skenirao sa stolice.</li>
  <li>Koristite materijal otporan na prolijevanje, kao što su vinilne naljepnice ili plastificirane kartice bez pretjeranog sjaja.</li>
  <li>Postavite ga na mjesto do kojeg se lako dosegne, na primjer na akrilni stalak na sredini stola.</li>
  <li>Dodajte broj stola pored QR Code ako gosti naručuju putem chata.</li>
</ul>

<h2>Ne zaboravite goste bez telefona</h2>
<p>Pripremite jedan ili dva odštampana menija za goste koji nemaju telefon kod sebe, kojima se ispraznila baterija ili kojima je ugodnije čitati papirni meni.</p>
<p>Možete napraviti i <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> za goste i postaviti ga pored QR Code za meni.</p>
`
};
