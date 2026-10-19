// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kako dobiti barkod proizvoda EAN-13 za mala i srednja preduzeća",
  desc: "Želite da se vaš proizvod nađe u prodavnicama ili supermarketima? Saznajte šta znače cifre u EAN-13, kako registrovati službeni broj kod GS1 Indonesia i kako ga odštampati.",
  tags: ["Poslovanje", "Maloprodaja"],
  coverCaption: "Ambalaži maloprodajnog proizvoda potreban je registrovan barkod EAN-13.",
  inlineCaption: "Maloprodajne radnje prepoznaju proizvod po broju EAN-13 u svom kasnom sistemu.",
  faq: [
    ["Smijem li sam napraviti broj EAN-13?", "Sliku barkoda smijete napraviti sami, ali je najbolje da broj bude službeni, od GS1. Broj koji sami smislite može se poklopiti s drugim proizvodom i maloprodajne radnje ga mogu odbiti."],
    ["Da li je svakoj varijanti proizvoda potreban poseban barkod?", "Da. Svakoj različitoj varijanti, na primjer drugog okusa, veličine ili sadržaja pakovanja, potreban je vlastiti broj EAN-13."],
    ["Šta je kontrolna cifra u EAN-13?", "Kontrolna cifra je 13. cifra, koja se izračunava iz prethodnih 12 cifara. Skener je koristi da provjeri da li je barkod ispravno očitan. Generator I Need Barcode izračunava je automatski ako unesete 12 cifara."]
  ],
  body: `
<p>Ako želite prodavati svoj proizvod u manjim prodavnicama, supermarketima ili na velikim online tržnicama, obično će se od vas tražiti da na ambalaži navedete barkod <strong>EAN-13</strong>. Ovaj barkod sadrži 13 cifara koje predstavljaju jedinstveni identitet vašeg proizvoda u cijelom svijetu.</p>

<h2>Značenje 13 cifara u EAN-13</h2>
<ul>
  <li><strong>GS1 prefiks</strong>: prve tri cifre označavaju GS1 organizaciju koja je izdala broj. Brojevi koje izdaje GS1 Indonesia počinju s <strong>899</strong>.</li>
  <li><strong>Broj preduzeća</strong>: identitet vašeg preduzeća koji dobijete prilikom registracije.</li>
  <li><strong>Broj proizvoda</strong>: preduzeće ga samo određuje za svaku varijantu proizvoda, na primjer za drugi okus ili drugu veličinu.</li>
  <li><strong>Kontrolna cifra</strong>: posljednja cifra, koja se automatski izračunava iz prethodnih 12 cifara kako bi se spriječilo pogrešno očitavanje.</li>
</ul>

<h2>Zašto broj mora biti službeni?</h2>
<p>Barkod EAN-13 može nacrtati bilo ko, ali <strong>broj</strong> mora biti registrovan. Maloprodajne radnje koriste taj broj da prepoznaju proizvod u svom sistemu. Ako broj sami izmislite, on se može poklopiti s proizvodom drugog preduzeća i biti odbijen kada proizvod prijavljujete prodavnici.</p>

<h2>Kako registrovati broj kod GS1 Indonesia</h2>
<ol>
  <li>Pripremite poslovne dokumente, kao što su NIB (matični broj preduzeća) i NPWP (porezni identifikacioni broj), te spisak proizvoda koji će dobiti barkod.</li>
  <li>Registrujte preduzeće putem službene web-stranice GS1 Indonesia i odaberite potreban broj brojeva.</li>
  <li>Platite naknadu za registraciju i godišnju članarinu u skladu s važećim pravilima.</li>
  <li>Nakon odobrenja dobijate broj preduzeća i možete napraviti broj za svaki proizvod.</li>
</ol>
<p>Uslovi i troškovi mogu se promijeniti, zato uvijek provjerite najnovije informacije direktno na web-stranici GS1 Indonesia.</p>

<h2>Izrada slike barkoda</h2>
<p>Kada dobijete broj, otvorite <a href="/?type=ean13">generator EAN-13</a> i unesite 12 ili 13 cifara broja vašeg proizvoda. Ako unesete 12 cifara, kontrolna cifra će se izračunati automatski. Provjerite da li je uključena opcija teksta ispod barkoda kako bi se cifre odštampale, a zatim preuzmite barkod kao PNG.</p>

<h2>Savjeti za štampanje na ambalaži</h2>
<ul>
  <li>Koristite crne ili tamnoplave linije na bijeloj pozadini. Izbjegavajte crvenu boju za linije, jer mnogi skeneri na kasama koriste crveno svjetlo, pa se crvene linije ne mogu očitati.</li>
  <li>Nemojte pretjerano smanjivati barkod. Standardna veličina EAN-13 je oko 37,3 × 25,9 mm i smije se smanjiti do oko 80%. Više o tome u <a href="/artikel/ukuran-barcode-untuk-dicetak">vodiču za veličinu barkoda</a>.</li>
  <li>Ostavite prazan prostor lijevo i desno od barkoda i izbjegavajte da ga postavite na pregib ili spoj ambalaže.</li>
  <li>Isprobajte otisak skenerom prije nego što štampate velike količine.</li>
</ul>
<p>Za proizvode koji se prodaju u Sjevernoj Americi možda će se od vas tražiti i da koristite <a href="/?type=upca">UPC-A</a>, koji sadrži 12 cifara.</p>
`
};
