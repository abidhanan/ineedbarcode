// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Prava veličina i razlučivost barkoda za ispis",
  desc: "Premalen ili mutan barkod teško se skenira. Saznajte minimalnu veličinu, pravilo udaljenosti skeniranja i sigurnu razlučivost slike za ispis.",
  tags: ["Vodiči", "Ispis"],
  coverCaption: "Pisač naljepnica ispisuje barkodove za pakete i ambalažu.",
  inlineCaption: "Veličina naljepnice određuje koliko velik barkod možete ispisati.",
  faq: [
    ["Koja je minimalna veličina QR Code za ispis?", "Za skeniranje izbliza sigurna je granica oko 2 × 2 cm. Za veće udaljenosti koristite omjer od oko 10 : 1 između udaljenosti skeniranja i širine QR Code."],
    ["Koja je standardna veličina barkoda EAN-13?", "Standardna veličina EAN-13 iznosi oko 37,3 × 25,9 mm. Smije se smanjiti na oko 80 % ili povećati do 200 %."],
    ["Zašto je barkod mutan nakon ispisa?", "Obično zato što je mala slika povećana ili spremljena kao JPG niske kvalitete. Preuzmite ga s većom veličinom modula u PNG formatu."]
  ],
  body: `
<p>Barkod koji dobro izgleda na zaslonu ne mora nužno biti čitljiv nakon ispisa. Premala veličina, niska razlučivost ili razlivena tinta mogu uzrokovati da ga čitač ne uspije očitati. Evo vodiča kako bi vaši ispisi ostali čitljivi.</p>

<h2>Upoznajte modul</h2>
<p><strong>Modul</strong> je najmanja jedinica barkoda, odnosno jedan mali kvadratić u QR Code ili najuža linija u linijskom barkodu. Veličina modula određuje koliko se lako barkod čita. Na <a href="/">I Need Barcode</a> veličinu modula možete podesiti u odjeljku Postavke: što je vrijednost veća, preuzeta slika je veća i oštrija.</p>

<h2>Minimalna veličina QR Code</h2>
<ul>
  <li>Za skeniranje izbliza (primjerice na posjetnici ili naljepnici proizvoda) sigurna je granica veličina od oko <strong>2 × 2 cm</strong>.</li>
  <li>Koristite pravilo omjera od oko <strong>10 : 1</strong>: udaljenost skeniranja otprilike je deset puta veća od širine QR Code. Za plakat koji se skenira s udaljenosti od 2 metra izradite QR Code od najmanje oko 20 cm.</li>
  <li>Što više podataka pohranite, uzorak je gušći pa je potrebna veća veličina.</li>
</ul>

<h2>Veličina barkoda proizvoda</h2>
<p>Standardna veličina <a href="/?type=ean13">EAN-13</a> iznosi oko 37,3 × 25,9 mm (100 %). Smije se smanjiti na oko 80 % ili povećati do 200 %. Izbjegavajte previše skraćivati visinu linija jer blagajničkom čitaču treba prostor za očitavanje iz različitih kutova.</p>

<h2>Razlučivost slike</h2>
<ul>
  <li>Za ispis nastojte da svaki modul bude prikazan s <strong>nekoliko cijelih piksela</strong>, a ne s dijelom piksela. Pri preuzimanju odaberite veću veličinu modula, a zatim sliku smanjite u programu za dizajn, a ne obrnuto.</li>
  <li>Izbjegavajte povećavanje male slike barkoda jer će rubovi kvadratića postati mutni ili nazubljeni.</li>
  <li>Spremite u PNG formatu kako se boje i rubovi ne bi oštetili kao kod JPG-a.</li>
</ul>

<h2>Tiha zona</h2>
<p>Svakom barkodu potreban je prazan prostor oko njega, takozvana <strong>tiha zona</strong> (quiet zone). Kod QR Code idealno bi trebala biti široka četiri modula. Kod linijskog barkoda prazan prostor lijevo i desno vrlo je važan. Ne stavljajte tekst, dizajnerske linije ili rub ambalaže preblizu.</p>

<h2>Boje i materijali</h2>
<ul>
  <li>Za barkod koristite tamnu boju, a za pozadinu svijetlu.</li>
  <li>Izbjegavajte sjajne ili prozirne materijale jer odsjaj svjetlosti može ometati kameru.</li>
  <li>Uvijek ispišite jedan uzorak i isprobajte ga s nekoliko mobitela ili čitača prije ispisa veće količine.</li>
</ul>
<p>Ako se vaš barkod i dalje teško skenira, pogledajte <a href="/artikel/barcode-tidak-bisa-dipindai">7 razloga zašto se barkod ne može skenirati</a>.</p>
`
};
