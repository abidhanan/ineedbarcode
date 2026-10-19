// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 razloga zašto se barkod ne može skenirati i kako ih riješiti",
  desc: "Barkod ili QR Code ne može se skenirati? Provjerite sedam najčešćih uzroka, od kontrasta boja do veličine, zajedno s načinima kako ih popraviti.",
  tags: ["Savjeti", "Barkodovi"],
  coverCaption: "Kontrast i veličina određuju hoće li se QR Code lako skenirati.",
  inlineCaption: "U skladištu barkod koji se ne može skenirati usporava posao.",
  faq: [
    ["Zašto se QR Code može skenirati jednim mobitelom, ali drugim ne?", "Kamere i aplikacije za skeniranje imaju različite mogućnosti. QR Code koji je premalen, slabog kontrasta ili obrnutih boja češće ne uspijeva na pojedinim mobitelima. Prije ispisa isprobajte ga na nekoliko mobitela."],
    ["Može li se skenirati barkod u boji?", "Može, sve dok je boja tamna na svijetloj pozadini. Izbjegavajte crvenu boju za linije barkoda jer mnogi blagajnički čitači koriste crveno svjetlo."],
    ["Kako provjeriti je li barkod ispravan?", "Skenirajte ispis s nekoliko mobitela ili čitača i provjerite podudaraju li se očitani podaci točno s podacima koje ste unijeli."]
  ],
  body: `
<p>Nema ničeg frustrirajućijeg od barkoda koji ste već ispisali u stotinama primjeraka, a onda shvatite da se ne može skenirati. Dobra je vijest da je uzrok obično jednostavan i lako ga je spriječiti. Evo sedam najčešćih uzroka.</p>

<h2>1. Prenizak kontrast boja</h2>
<p>Čitač očitava razliku između tamnog i svijetlog. Svijetlosivi barkod na bijeloj podlozi ili tamnoplavi na crnoj teško se razlikuju. <strong>Rješenje:</strong> koristite tamnu boju na svijetloj pozadini. Crno na bijelom najsigurniji je izbor.</p>

<h2>2. Obrnute boje ili crvena boja</h2>
<p>Svijetli barkod na tamnoj pozadini ne podržavaju svi čitači. Osim toga, mnogi blagajnički čitači koriste crveno svjetlo pa crvene linije izgledaju jednako kao bijela pozadina. <strong>Rješenje:</strong> ne koristite crvenu boju za linije ili module barkoda i ne obrćite boje.</p>

<h2>3. Premala veličina</h2>
<p>Kameri je potrebno dovoljno piksela da prepozna svaki modul. <strong>Rješenje:</strong> povećajte barkod. Za QR Code koji se skenira izbliza koristite najmanje oko 2 × 2 cm. Pogledajte <a href="/artikel/ukuran-barcode-untuk-dicetak">vodič za veličine ispisa</a>.</p>

<h2>4. Nema tihe zone</h2>
<p>Barkod koji dodiruje sliku, tekst ili rub papira teško je odvojiti od okoline. <strong>Rješenje:</strong> ostavite prazan prostor oko barkoda, osobito lijevo i desno od linijskog barkoda.</p>

<h2>5. Mutna ili izobličena slika</h2>
<p>Barkod povećan iz male slike, spremljen kao JPG niske kvalitete ili nerazmjerno razvučen gubi svoj oblik. <strong>Rješenje:</strong> preuzmite ga s većom veličinom modula u PNG formatu i uvijek mijenjajte veličinu proporcionalno.</p>

<h2>6. Pogrešni podaci ili podaci koji ne odgovaraju vrsti</h2>
<p>Svaka vrsta barkoda ima svoja pravila. EAN-13, primjerice, prihvaća samo 12 ili 13 znamenki s ispravnom kontrolnom znamenkom. Zbog tipfelera u poveznici QR Code će se očitati, ali neće ništa otvoriti. <strong>Rješenje:</strong> provjerite podatke prije ispisa. Generator <a href="/">I Need Barcode</a> prikazat će poruku ako podaci ne odgovaraju pravilima odabrane vrste barkoda.</p>

<h2>7. Površina i osvjetljenje</h2>
<p>Sjajni materijali, prozirna plastika, pregibi i zakrivljene površine mogu reflektirati svjetlost ili promijeniti oblik barkoda. <strong>Rješenje:</strong> ispisujte na ravnu površinu bez sjaja, a skeniranje isprobajte u stvarnim uvjetima osvjetljenja.</p>

<h2>A QR Code s dizajnom?</h2>
<p>QR Code kojem dodate oblik, boju ili okvir i dalje se može skenirati sve dok su tri oznake u kutovima netaknute, a kontrast dovoljan. Više pročitajte u članku <a href="/artikel/desain-qr-code-kreatif">kreativan dizajn QR Code koji ostaje čitljiv</a>.</p>
<p>Najbolja navika: <strong>uvijek isprobajte jedan ispis</strong> s nekoliko mobitela i čitača prije ispisa u velikim količinama.</p>
`
};
