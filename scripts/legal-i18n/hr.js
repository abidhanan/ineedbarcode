// Pravila privatnosti i Uvjeti korištenja (hrvatski).
module.exports = {
  labels: {
    privacy: "Pravila privatnosti",
    terms: "Uvjeti korištenja",
    effective: "Na snazi od {date}"
  },
  privacy: {
    title: "Pravila privatnosti",
    desc: "Koje podatke I Need Barcode obrađuje kada izrađujete crtične kodove i QR Code te kako s njima postupamo.",
    body: `
<p>I Need Barcode (ineedbarcode.com) besplatan je generator crtičnih kodova i QR Code kojim upravlja Abid Hanan Wicaksono. Ova pravila objašnjavaju koje podatke obrađujemo kada koristite ovu web-stranicu i kako s njima postupamo. Namjerno prikupljamo što je moguće manje podataka: za korištenje usluge ne morate se registrirati, prijaviti niti navesti ime i adresu e-pošte.</p>
<h2>Podaci koje obrađujemo</h2>
<ul>
<li><strong>Sadržaj koda.</strong> Tekst, poveznice, podaci o WiFi mreži, kontakti i drugi podaci koje unesete obrađuju se izravno u vašem pregledniku. Slika crtičnog koda izrađuje se na vašem uređaju i ne šalje se na naš poslužitelj, ni kada izrađujete više kodova odjednom.</li>
<li><strong>Lokacija.</strong> Gumb „Koristi moju lokaciju” traži lokaciju uređaja tek nakon što to dopustite u pregledniku. Koordinate se samo upisuju u polje obrasca i ne šalju se nama.</li>
<li><strong>Približna država.</strong> Radi odabira početnog jezika web-stranica može očitati vašu približnu državu iz zahtjeva upućenog našem poslužitelju. Ta se informacija ne pohranjuje u bazu podataka.</li>
<li><strong>Tehnički podaci.</strong> Kao gotovo svaka web-stranica, naš pružatelj usluge smještaja (Vercel) bilježi tehničke podatke o zahtjevima, poput IP adrese, vrste preglednika i vremena pristupa, radi sigurnosti i rada usluge. Ti se zapisi čuvaju samo privremeno u skladu s pravilima tvrtke Vercel.</li>
<li><strong>Statistika članaka.</strong> Ako je ta značajka uključena, broj pregleda, oznaka „sviđa mi se” i dijeljenja pohranjuje se samo kao ukupni brojevi po članku, bez podataka koji bi vas identificirali.</li>
</ul>
<h2>Kolačići i pohrana u pregledniku</h2>
<ul>
<li><strong>inbLang</strong>: pamti jezik koji ste odabrali na ovom uređaju (localStorage).</li>
<li><strong>inbCountry</strong>: čuva približnu državu tijekom jedne sesije kako jezik ne bi trebalo ponovno utvrđivati (sessionStorage).</li>
<li><strong>Ostala lokalna pohrana</strong> (localStorage i sessionStorage): označava članke koji su vam se svidjeli i sprječava da se jedan posjet broji dvaput. Ti podaci ostaju na vašem uređaju.</li>
<li><strong>Analitički kolačići trećih strana</strong> usluga Google Analytics i Microsoft Clarity, opisani u nastavku.</li>
</ul>
<h2>Analitika</h2>
<p>Analitičke alate koristimo kako bismo razumjeli kako se web-stranica koristi i poboljšali je. Ti se alati učitavaju tek kada počnete koristiti stranicu i uopće se ne učitavaju ako vaš preglednik šalje signal Global Privacy Control ili Do Not Track. Sadržaj kodova i obrazaca nikada se ne šalje analitičkim alatima; bilježe se samo događaji poput odabrane vrste koda i klika na gumb za preuzimanje.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): koristi kolačiće za mjerenje otvorenih stranica, približne države, vrste uređaja i gore navedenih događaja. Pohrana za oglašavanje i Google Signals isključeni su. Podatke obrađuje Google u skladu s <a href="https://policies.google.com/privacy">Pravilima o privatnosti tvrtke Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: bilježi interakcije poput klikova i pomicanja za toplinske karte i snimke sesija te prikriva sadržaj polja za unos. Podatke obrađuje Microsoft u skladu s <a href="https://privacy.microsoft.com/privacystatement">Microsoftovom izjavom o zaštiti privatnosti</a>.</li>
</ul>
<p>Analitiku možete odbiti tako da uključite Global Privacy Control ili Do Not Track, blokirate kolačiće trećih strana u postavkama preglednika, koristite blokator praćenja ili instalirate <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Web-stranicu i dalje možete u potpunosti koristiti.</p>
<h2>Usluge trećih strana</h2>
<ul>
<li><strong>Vercel Inc.</strong> pruža uslugu smještaja. Njegovi se poslužitelji mogu nalaziti izvan Indonezije.</li>
<li><strong>Google Fonts</strong> koristi se za prikaz nekih pisama (na primjer arapskog, tajlandskog ili japanskog). Pri učitavanju fontova vaša je IP adresa vidljiva tvrtki Google.</li>
<li><strong>Gumbi za dijeljenje</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) i poveznice na društvene mreže povezuju se s tim uslugama samo kada ih kliknete.</li>
</ul>
<h2>Sigurnost i dijeljenje podataka</h2>
<p>Sve veze s ovom web-stranicom koriste HTTPS. Osobne podatke ne prodajemo, ne iznajmljujemo niti njima trgujemo. Podaci se dijele samo s gore navedenim pružateljima usluga u mjeri potrebnoj za rad web-stranice ili ako to zahtijeva zakon.</p>
<h2>Djeca</h2>
<p>Usluga nije namijenjena djeci mlađoj od 13 godina i svjesno ne prikupljamo osobne podatke djece.</p>
<h2>Vaša prava</h2>
<p>U skladu sa Zakonom br. 27 iz 2022. o zaštiti osobnih podataka imate pravo zatražiti pristup svojim osobnim podacima, njihov ispravak ili brisanje te povući privolu za obradu. Budući da gotovo ne čuvamo podatke koji bi vas identificirali, većina se zahtjeva može riješiti jednostavnim brisanjem kolačića i podataka web-stranice u vašem pregledniku. Za podatke koje obrađuju Google ili Microsoft možete koristiti i postavke privatnosti u njihovim uslugama. Za ostale zahtjeve obratite nam se.</p>
<h2>Izmjene pravila</h2>
<p>Ova se pravila mogu ažurirati u bilo kojem trenutku. Izmjene stupaju na snagu objavom na ovoj stranici, a datum stupanja na snagu naveden je na vrhu.</p>
<h2>Kontakt</h2>
<p>Pitanja o ovim pravilima možete poslati putem poveznice za kontakt na dnu svake stranice ili putem <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Pročitajte i naše <a href="/syarat-ketentuan">Uvjete korištenja</a>.</p>
`
  },
  terms: {
    title: "Uvjeti korištenja",
    desc: "Uvjeti korištenja I Need Barcode, besplatnog generatora crtičnih kodova i QR Code.",
    body: `
<p>Korištenjem I Need Barcode (ineedbarcode.com) prihvaćate sljedeće uvjete. Ako se s njima ne slažete, molimo vas da ne koristite ovu uslugu.</p>
<h2>O usluzi</h2>
<p>I Need Barcode besplatan je alat za izradu slika crtičnih kodova i QR Code izravno u pregledniku. I Need Barcode nije povezan s GS1 ni s bilo kojim vlasnikom standarda crtičnih kodova, oni ga ne podržavaju i s njima ne surađuje. QR Code registrirani je žig tvrtke DENSO WAVE INCORPORATED. Svi žigovi pripadaju svojim vlasnicima.</p>
<h2>Dopuštena upotreba</h2>
<ul>
<li>Slike crtičnih kodova koje izradite smijete koristiti u osobne i komercijalne svrhe, primjerice za proizvode, ambalažu, etikete i tiskane materijale, bez vodenog žiga i bez naknade.</li>
<li>Mi samo izrađujemo slike crtičnih kodova i ne dodjeljujemo brojeve kodova. Za maloprodajne proizvode brojevi EAN, UPC ili GTIN moraju biti službeno registrirani putem GS1.</li>
<li>Pridržavajte se i pravila koja vrijede tamo gdje se kod koristi, primjerice zahtjeva trgovina, internetskih tržnica ili dostavnih službi.</li>
</ul>
<h2>Vaša odgovornost</h2>
<p>U potpunosti ste odgovorni za podatke koje unesete u crtični kod i za način na koji ga koristite. Prije tiskanja u velikim količinama kod uvijek testirajte s nekoliko čitača ili aplikacija za kameru i provjerite odgovaraju li njegova veličina, boja i kontrast vašim potrebama.</p>
<h2>Što je zabranjeno</h2>
<ul>
<li>Izrađivati crtične kodove ili QR Code koji vode do prijevara, krađe identiteta (phishinga), zlonamjernog softvera ili nezakonitog sadržaja.</li>
<li>Koristiti crtične kodove za krivotvorenje proizvoda, dokumenata, ulaznica ili brojeva koji pripadaju drugima.</li>
<li>Koristiti botove, skripte ili automatizaciju za masovni pristup usluzi.</li>
<li>Ometati, preopterećivati ili pokušavati probiti zaštitu naših poslužitelja i usluga.</li>
</ul>
<h2>Dostupnost usluge</h2>
<p>Usluga se pruža besplatno i može se u bilo kojem trenutku bez obavijesti izmijeniti, ograničiti ili ukinuti.</p>
<h2>Odricanje od jamstva</h2>
<p>Usluga se pruža „kakva jest” i „kako je dostupna”, bez ikakvih jamstava, uključujući jamstvo da će usluga uvijek raditi, da će biti bez pogrešaka ili da će svaki izrađeni crtični kod moći očitati svi uređaji i da će biti prikladan za određenu svrhu.</p>
<h2>Ograničenje odgovornosti</h2>
<p>U mjeri dopuštenoj zakonom ne odgovaramo za izravnu ni neizravnu štetu nastalu korištenjem ove usluge ili crtičnih kodova koje ste izradili, uključujući troškove ponovnog tiska i gubitke zbog nečitljivih kodova.</p>
<h2>Poveznice na treće strane</h2>
<p>Ova web-stranica sadrži poveznice na web-stranice i usluge trećih strana. Ne odgovaramo za sadržaj ni pravila tih web-stranica.</p>
<h2>Izmjene uvjeta</h2>
<p>Ovi se uvjeti mogu ažurirati u bilo kojem trenutku. Nastavkom korištenja usluge nakon objave izmjena smatra se da prihvaćate najnoviju verziju.</p>
<h2>Mjerodavno pravo</h2>
<p>Na ove se uvjete primjenjuje pravo Republike Indonezije.</p>
<h2>Kontakt</h2>
<p>Pitanja i prijave možete poslati putem poveznice za kontakt na dnu svake stranice ili putem <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Pročitajte i naša <a href="/kebijakan-privasi">Pravila privatnosti</a>.</p>
`
  }
};
