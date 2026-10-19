// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kako dobiti barkod EAN-13 za proizvode malih poduzeća",
  desc: "Želite da se vaš proizvod nađe u trgovinama i supermarketima? Saznajte što znače znamenke EAN-13, kako registrirati službeni broj kod GS1 Indonesia i kako ga ispisati.",
  tags: ["Poslovanje", "Maloprodaja"],
  coverCaption: "Ambalaža maloprodajnih proizvoda zahtijeva registrirani barkod EAN-13.",
  inlineCaption: "Maloprodajne trgovine prepoznaju proizvode po broju EAN-13 u svom blagajničkom sustavu.",
  faq: [
    ["Smijem li sam izmisliti broj EAN-13?", "Sliku barkoda možete izraditi sami, ali broj bi trebao biti službeni, od GS1. Izmišljeni broj može se poklopiti s drugim proizvodom pa ga maloprodajna trgovina odbije."],
    ["Treba li svaka varijanta proizvoda drugačiji barkod?", "Da. Svaka različita varijanta, primjerice drugi okus, veličina ili sadržaj pakiranja, treba vlastiti broj EAN-13."],
    ["Što je kontrolna znamenka u EAN-13?", "Kontrolna znamenka je 13. znamenka izračunata iz prethodnih 12 znamenki. Čitač je koristi kako bi provjerio je li barkod ispravno očitan. Generator I Need Barcode izračunava je automatski ako unesete 12 znamenki."]
  ],
  body: `
<p>Ako svoj proizvod želite prodavati u trgovinama, supermarketima ili na velikim online tržnicama, obično će se od vas tražiti da na ambalažu stavite barkod <strong>EAN-13</strong>. Taj barkod sadrži 13 znamenki koje su jedinstveni identitet vašeg proizvoda u cijelom svijetu.</p>

<h2>Značenje 13 znamenki u EAN-13</h2>
<ul>
  <li><strong>GS1 prefiks</strong>: prve tri znamenke označavaju GS1 organizaciju koja je izdala broj. Brojevi koje izdaje GS1 Indonesia počinju s <strong>899</strong>.</li>
  <li><strong>Broj tvrtke</strong>: identitet vaše tvrtke koji dobivate pri registraciji.</li>
  <li><strong>Broj proizvoda</strong>: tvrtka ga sama dodjeljuje za svaku varijantu proizvoda, primjerice za drugi okus ili drugu veličinu.</li>
  <li><strong>Kontrolna znamenka</strong>: posljednja znamenka koja se automatski izračunava iz prethodnih 12 znamenki kako bi se spriječilo pogrešno očitavanje.</li>
</ul>

<h2>Zašto broj mora biti službeni?</h2>
<p>Barkod EAN-13 može nacrtati bilo tko, ali njegov <strong>broj</strong> mora biti registriran. Maloprodajne trgovine pomoću tog broja prepoznaju proizvod u svom sustavu. Ako broj sami izmislite, može se poklopiti s proizvodom druge tvrtke i bit će odbijen kada proizvod prijavite u trgovinu.</p>

<h2>Kako registrirati broj kod GS1 Indonesia</h2>
<ol>
  <li>Pripremite poslovne dokumente, kao što su NIB (indonezijski identifikacijski broj poslovnog subjekta) i NPWP (porezni broj), te popis proizvoda koji će dobiti barkod.</li>
  <li>Registrirajte tvrtku putem službene web-stranice GS1 Indonesia i odaberite potreban broj brojeva.</li>
  <li>Platite naknadu za registraciju i godišnju članarinu u skladu s važećim uvjetima.</li>
  <li>Nakon odobrenja dobivate broj tvrtke i možete izrađivati brojeve za svaki proizvod.</li>
</ol>
<p>Uvjeti i troškovi mogu se promijeniti, stoga najnovije informacije uvijek provjerite izravno na web-stranici GS1 Indonesia.</p>

<h2>Izrada slike barkoda</h2>
<p>Kada imate broj, otvorite <a href="/?type=ean13">generator EAN-13</a> i unesite 12 ili 13 znamenki broja svog proizvoda. Ako unesete 12 znamenki, kontrolna znamenka izračunat će se automatski. Provjerite je li uključena opcija teksta ispod barkoda kako bi se znamenke ispisale, a zatim ga preuzmite kao PNG.</p>

<h2>Savjeti za ispis na ambalaži</h2>
<ul>
  <li>Koristite crne ili tamnoplave linije na bijeloj pozadini. Izbjegavajte crvenu boju za linije jer mnogi blagajnički čitači koriste crveno svjetlo pa crvene linije ne mogu očitati.</li>
  <li>Nemojte pretjerano smanjivati barkod. Standardna veličina EAN-13 iznosi oko 37,3 × 25,9 mm i smije se smanjiti na oko 80 %. Više u <a href="/artikel/ukuran-barcode-untuk-dicetak">vodiču za veličinu barkoda</a>.</li>
  <li>Ostavite prazan prostor lijevo i desno od barkoda i ne postavljajte ga na pregibe ili spojeve ambalaže.</li>
  <li>Isprobajte ispis čitačem prije ispisa u velikim količinama.</li>
</ul>
<p>Za proizvode koji se prodaju u Sjevernoj Americi možda će se tražiti i <a href="/?type=upca">UPC-A</a>, koji sadrži 12 znamenki.</p>
`
};
