// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Prava veličina i rezolucija barkoda za štampanje",
  desc: "Barkod koji je premali ili mutan teško se skenira. Saznajte minimalne veličine, pravilo udaljenosti skeniranja i rezoluciju slike koja je sigurna za štampanje.",
  tags: ["Vodiči", "Štampa"],
  coverCaption: "Štampač naljepnica štampa barkodove za pakete i ambalažu.",
  inlineCaption: "Veličina naljepnice određuje koliko veliki barkod se može odštampati.",
  faq: [
    ["Koja je minimalna veličina QR Code za štampanje?", "Za skeniranje izbliza sigurna granica je oko 2 × 2 cm. Za veće udaljenosti koristite omjer od oko 10 : 1 između udaljenosti skeniranja i širine QR Code."],
    ["Koja je standardna veličina barkoda EAN-13?", "Standardna veličina EAN-13 je oko 37,3 × 25,9 mm. Smije se smanjiti do oko 80% ili povećati do 200%."],
    ["Zašto je barkod mutan nakon štampanja?", "Obično zato što je mala slika povećana ili sačuvana kao JPG niskog kvaliteta. Preuzmite barkod s većom veličinom modula u formatu PNG."]
  ],
  body: `
<p>Barkod koji dobro izgleda na ekranu ne mora biti čitljiv kada se odštampa. Premala veličina, niska rezolucija ili razliveno mastilo mogu spriječiti skener da ga očita. Evo vodiča kako da vaš otisak ostane čitljiv.</p>

<h2>Upoznajte modul</h2>
<p><strong>Modul</strong> je najmanja jedinica barkoda, odnosno jedan mali kvadratić u QR Code ili najuža linija u linijskom barkodu. Veličina modula određuje koliko se lako barkod očitava. Na <a href="/">I Need Barcode</a> veličinu modula možete podesiti u odjeljku Postavke: što je vrijednost veća, preuzeta slika je veća i oštrija.</p>

<h2>Minimalna veličina QR Code</h2>
<ul>
  <li>Za skeniranje izbliza (na primjer na vizit-karti ili naljepnici proizvoda) sigurna granica je oko <strong>2 × 2 cm</strong>.</li>
  <li>Koristite pravilo omjera od oko <strong>10 : 1</strong>: udaljenost skeniranja je otprilike deset puta veća od širine QR Code. Za plakat koji se skenira s udaljenosti od 2 metra napravite QR Code od najmanje oko 20 cm.</li>
  <li>Što više podataka sačuvate, uzorak je gušći, pa je potrebna veća veličina.</li>
</ul>

<h2>Veličina barkoda proizvoda</h2>
<p>Standardna veličina <a href="/?type=ean13">EAN-13</a> je oko 37,3 × 25,9 mm (100%). Smije se smanjiti do oko 80% ili povećati do 200%. Izbjegavajte da previše skratite visinu linija, jer skeneru na kasi treba prostora da očita barkod iz različitih uglova.</p>

<h2>Rezolucija slike</h2>
<ul>
  <li>Za štampanje nastojte da svaki modul bude nacrtan s <strong>nekoliko cijelih piksela</strong>, a ne s dijelovima piksela. Prilikom preuzimanja odaberite veću veličinu modula, a zatim smanjite sliku u programu za dizajn, a ne obrnuto.</li>
  <li>Izbjegavajte povećavanje male slike barkoda, jer će rubovi kvadratića postati mutni ili nazubljeni.</li>
  <li>Sačuvajte sliku u formatu PNG kako se boje i rubovi ne bi oštetili kao kod JPG.</li>
</ul>

<h2>Tiha zona</h2>
<p>Svakom barkodu potreban je prazan prostor oko njega, koji se zove <strong>tiha zona</strong> (quiet zone). Za QR Code ona bi idealno trebala biti široka četiri modula. Kod linijskih barkodova prazan prostor lijevo i desno veoma je važan. Ne postavljajte tekst, dizajnerske linije ili rub ambalaže preblizu.</p>

<h2>Boje i materijal</h2>
<ul>
  <li>Koristite tamnu boju za barkod i svijetlu boju za pozadinu.</li>
  <li>Izbjegavajte sjajne ili providne materijale, jer odsjaj svjetlosti može ometati kameru.</li>
  <li>Uvijek odštampajte jedan uzorak i isprobajte ga s nekoliko telefona ili skenera prije nego što štampate velike količine.</li>
</ul>
<p>Ako se vaš barkod i dalje teško skenira, pogledajte <a href="/artikel/barcode-tidak-bisa-dipindai">7 razloga zašto se barkod ne može skenirati</a>.</p>
`
};
