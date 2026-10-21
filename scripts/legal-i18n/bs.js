// Politika privatnosti i Uslovi korištenja (bosanski, latinica).
module.exports = {
  labels: {
    privacy: "Politika privatnosti",
    terms: "Uslovi korištenja",
    effective: "Na snazi od {date}"
  },
  privacy: {
    title: "Politika privatnosti",
    desc: "Koje podatke I Need Barcode obrađuje kada pravite barkodove i QR Code te kako s njima postupamo.",
    body: `
<p>I Need Barcode (ineedbarcode.com) je besplatan generator barkodova i QR Code kojim upravlja Abid Hanan Wicaksono. Ova politika objašnjava koje podatke obrađujemo kada koristite ovu web-stranicu i kako s njima postupamo. Namjerno prikupljamo što je moguće manje podataka: za korištenje usluge ne morate se registrovati, prijaviti niti navesti ime i adresu e-pošte.</p>
<h2>Podaci koje obrađujemo</h2>
<ul>
<li><strong>Sadržaj koda.</strong> Tekst, linkovi, podaci o WiFi mreži, kontakti i drugi podaci koje unesete obrađuju se direktno u vašem pregledniku. Slika barkoda pravi se na vašem uređaju i ne šalje se na naš server, čak ni kada pravite više kodova odjednom.</li>
<li><strong>Lokacija.</strong> Dugme „Koristi moju lokaciju” traži lokaciju uređaja tek nakon što to dozvolite u pregledniku. Koordinate se samo upisuju u polje obrasca i ne šalju se nama.</li>
<li><strong>Približna država.</strong> Radi odabira početnog jezika web-stranica može očitati vašu približnu državu iz zahtjeva upućenog našem serveru. Ta informacija se ne pohranjuje u bazu podataka.</li>
<li><strong>Tehnički podaci.</strong> Kao gotovo svaka web-stranica, naš pružalac hostinga (Vercel) bilježi tehničke podatke o zahtjevima, kao što su IP adresa, vrsta preglednika i vrijeme pristupa, radi sigurnosti i rada usluge. Ti zapisi se čuvaju samo privremeno u skladu s pravilima kompanije Vercel.</li>
<li><strong>Statistika članaka.</strong> Ako je ta funkcija uključena, broj pregleda, oznaka „sviđa mi se” i dijeljenja pohranjuje se samo kao ukupni brojevi po članku, bez podataka koji bi vas identifikovali.</li>
</ul>
<h2>Kolačići i pohrana u pregledniku</h2>
<ul>
<li><strong>inbLang</strong>: pamti jezik koji ste odabrali na ovom uređaju (localStorage).</li>
<li><strong>inbCountry</strong>: čuva približnu državu tokom jedne sesije kako jezik ne bi trebalo ponovo utvrđivati (sessionStorage).</li>
<li><strong>Ostala lokalna pohrana</strong> (localStorage i sessionStorage): označava članke koji su vam se svidjeli i sprečava da se jedna posjeta broji dvaput. Ti podaci ostaju na vašem uređaju.</li>
<li><strong>Analitički kolačići trećih strana</strong> usluga Google Analytics i Microsoft Clarity, opisani u nastavku.</li>
</ul>
<h2>Analitika</h2>
<p>Analitičke alate koristimo kako bismo razumjeli kako se web-stranica koristi i poboljšali je. Ti alati se učitavaju tek kada počnete koristiti stranicu i uopće se ne učitavaju ako vaš preglednik šalje signal Global Privacy Control ili Do Not Track. Sadržaj kodova i obrazaca nikada se ne šalje analitičkim alatima; bilježe se samo događaji kao što su odabrana vrsta koda i klik na dugme za preuzimanje.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): koristi kolačiće za mjerenje otvorenih stranica, približne države, vrste uređaja i gore navedenih događaja. Pohrana za oglašavanje i Google Signals su isključeni. Podatke obrađuje Google u skladu s <a href="https://policies.google.com/privacy">Politikom privatnosti kompanije Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: bilježi interakcije kao što su klikovi i pomicanje za toplotne mape i snimke sesija te maskira sadržaj polja za unos. Podatke obrađuje Microsoft u skladu s <a href="https://privacy.microsoft.com/privacystatement">Microsoftovom izjavom o privatnosti</a>.</li>
</ul>
<p>Analitiku možete odbiti tako što ćete uključiti Global Privacy Control ili Do Not Track, blokirati kolačiće trećih strana u postavkama preglednika, koristiti bloker praćenja ili instalirati <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Web-stranicu i dalje možete u potpunosti koristiti.</p>
<h2>Usluge trećih strana</h2>
<ul>
<li><strong>Vercel Inc.</strong> pruža hosting. Njegovi serveri mogu se nalaziti izvan Indonezije.</li>
<li><strong>Google Fonts</strong> koristi se za prikaz nekih pisama (na primjer arapskog, tajlandskog ili japanskog). Prilikom učitavanja fontova vaša IP adresa vidljiva je kompaniji Google.</li>
<li><strong>Dugmad za dijeljenje</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) i linkovi na društvene mreže povezuju se s tim uslugama samo kada ih kliknete.</li>
</ul>
<h2>Sigurnost i dijeljenje podataka</h2>
<p>Sve veze s ovom web-stranicom koriste HTTPS. Lične podatke ne prodajemo, ne iznajmljujemo niti njima trgujemo. Podaci se dijele samo s gore navedenim pružaocima usluga u mjeri potrebnoj za rad web-stranice ili ako to zahtijeva zakon.</p>
<h2>Djeca</h2>
<p>Usluga nije namijenjena djeci mlađoj od 13 godina i svjesno ne prikupljamo lične podatke djece.</p>
<h2>Vaša prava</h2>
<p>U skladu sa Zakonom br. 27 iz 2022. godine o zaštiti ličnih podataka imate pravo zatražiti pristup svojim ličnim podacima, njihovu ispravku ili brisanje te povući saglasnost za obradu. Budući da gotovo ne čuvamo podatke koji bi vas identifikovali, većina zahtjeva može se riješiti jednostavnim brisanjem kolačića i podataka web-stranice u vašem pregledniku. Za podatke koje obrađuju Google ili Microsoft možete koristiti i postavke privatnosti u njihovim uslugama. Za ostale zahtjeve obratite nam se.</p>
<h2>Izmjene politike</h2>
<p>Ova politika može se ažurirati u bilo kojem trenutku. Izmjene stupaju na snagu objavljivanjem na ovoj stranici, a datum stupanja na snagu naveden je na vrhu.</p>
<h2>Kontakt</h2>
<p>Pitanja o ovoj politici možete poslati putem linka za kontakt na dnu svake stranice ili putem <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Pročitajte i naše <a href="/syarat-ketentuan">Uslove korištenja</a>.</p>
`
  },
  terms: {
    title: "Uslovi korištenja",
    desc: "Uslovi korištenja I Need Barcode, besplatnog generatora barkodova i QR Code.",
    body: `
<p>Korištenjem I Need Barcode (ineedbarcode.com) prihvatate sljedeće uslove. Ako se s njima ne slažete, molimo vas da ne koristite ovu uslugu.</p>
<h2>O usluzi</h2>
<p>I Need Barcode je besplatan alat za pravljenje slika barkodova i QR Code direktno u pregledniku. I Need Barcode nije povezan s GS1 niti s bilo kojim vlasnikom standarda barkodova, oni ga ne podržavaju i s njima ne sarađuje. QR Code je registrovani žig kompanije DENSO WAVE INCORPORATED. Svi žigovi pripadaju svojim vlasnicima.</p>
<h2>Dozvoljena upotreba</h2>
<ul>
<li>Slike barkodova koje napravite smijete koristiti u lične i komercijalne svrhe, naprimjer za proizvode, ambalažu, etikete i štampane materijale, bez vodenog žiga i bez naknade.</li>
<li>Mi samo pravimo slike barkodova i ne dodjeljujemo brojeve barkodova. Za maloprodajne proizvode brojevi EAN, UPC ili GTIN moraju biti zvanično registrovani putem GS1.</li>
<li>Pridržavajte se i pravila koja važe tamo gdje se kod koristi, naprimjer zahtjeva prodavnica, online tržnica ili dostavnih službi.</li>
</ul>
<h2>Vaša odgovornost</h2>
<p>U potpunosti ste odgovorni za podatke koje unesete u barkod i za način na koji ga koristite. Prije štampanja u velikim količinama kod uvijek testirajte s nekoliko čitača ili aplikacija za kameru i provjerite da li njegova veličina, boja i kontrast odgovaraju vašim potrebama.</p>
<h2>Šta je zabranjeno</h2>
<ul>
<li>Praviti barkodove ili QR Code koji vode do prevara, phishinga, zlonamjernog softvera ili nezakonitog sadržaja.</li>
<li>Koristiti barkodove za falsifikovanje proizvoda, dokumenata, ulaznica ili brojeva koji pripadaju drugima.</li>
<li>Koristiti botove, skripte ili automatizaciju za masovni pristup usluzi.</li>
<li>Ometati, preopterećivati ili pokušavati probiti zaštitu naših servera i usluga.</li>
</ul>
<h2>Dostupnost usluge</h2>
<p>Usluga se pruža besplatno i može se u bilo kojem trenutku bez obavještenja izmijeniti, ograničiti ili ukinuti.</p>
<h2>Odricanje od garancije</h2>
<p>Usluga se pruža „takva kakva jeste” i „kako je dostupna”, bez ikakvih garancija, uključujući garanciju da će usluga uvijek raditi, da će biti bez grešaka ili da će svaki napravljeni barkod moći očitati svi uređaji i da će biti prikladan za određenu svrhu.</p>
<h2>Ograničenje odgovornosti</h2>
<p>U mjeri dozvoljenoj zakonom ne odgovaramo za direktnu ni indirektnu štetu nastalu korištenjem ove usluge ili barkodova koje ste napravili, uključujući troškove ponovnog štampanja i gubitke zbog nečitljivih barkodova.</p>
<h2>Linkovi ka trećim stranama</h2>
<p>Ova web-stranica sadrži linkove ka web-stranicama i uslugama trećih strana. Ne odgovaramo za sadržaj ni pravila tih web-stranica.</p>
<h2>Izmjene uslova</h2>
<p>Ovi uslovi mogu se ažurirati u bilo kojem trenutku. Nastavkom korištenja usluge nakon objavljivanja izmjena smatra se da prihvatate najnoviju verziju.</p>
<h2>Mjerodavno pravo</h2>
<p>Na ove uslove primjenjuje se pravo Republike Indonezije.</p>
<h2>Kontakt</h2>
<p>Pitanja i prijave možete poslati putem linka za kontakt na dnu svake stranice ili putem <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Pročitajte i našu <a href="/kebijakan-privasi">Politiku privatnosti</a>.</p>
`
  }
};
