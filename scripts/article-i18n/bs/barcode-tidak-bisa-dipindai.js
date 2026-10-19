// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 razloga zašto se barkod ne može skenirati i kako to riješiti",
  desc: "Barkod ili QR Code se ne može skenirati? Provjerite sedam najčešćih uzroka, od kontrasta boja do veličine, kao i načine da ih otklonite.",
  tags: ["Savjeti", "Barkod"],
  coverCaption: "Kontrast i veličina određuju da li se QR Code lako skenira.",
  inlineCaption: "U skladištu barkod koji se ne može skenirati usporava posao.",
  faq: [
    ["Zašto se QR Code može skenirati jednim telefonom, a drugim ne?", "Kamere i aplikacije za skeniranje razlikuju se po mogućnostima. QR Code koji je premali, ima nizak kontrast ili obrnute boje češće ne uspijeva na pojedinim telefonima. Isprobajte ga s nekoliko telefona prije štampanja."],
    ["Može li se skenirati barkod u boji?", "Može, sve dok je boja tamna na svijetloj pozadini. Izbjegavajte crvenu boju za linije barkoda jer mnogi skeneri na kasama koriste crveno svjetlo."],
    ["Kako provjeriti da li je barkod ispravan?", "Skenirajte odštampani primjerak s nekoliko telefona ili skenera i provjerite da li su očitani podaci potpuno isti kao podaci koje ste unijeli."]
  ],
  body: `
<p>Ništa nije neugodnije od barkoda koji je već odštampan u stotinama primjeraka, a onda se ispostavi da se ne može skenirati. Dobra vijest je da je uzrok obično jednostavan i lako ga je spriječiti. Evo sedam najčešćih uzroka.</p>

<h2>1. Kontrast boja je prenizak</h2>
<p>Skener očitava razliku između tamnog i svijetlog. Svijetlosivi barkod na bijeloj ili tamnoplavi na crnoj pozadini teško se razlikuju. <strong>Rješenje:</strong> koristite tamnu boju na svijetloj pozadini. Crna na bijeloj je najsigurniji izbor.</p>

<h2>2. Obrnute boje ili crvena boja</h2>
<p>Svijetli barkod na tamnoj pozadini ne podržavaju svi skeneri. Osim toga, mnogi skeneri na kasama koriste crveno svjetlo, pa crvene linije izgledaju isto kao bijela pozadina. <strong>Rješenje:</strong> izbjegavajte crvenu boju za linije ili module barkoda i ne obrćite boje.</p>

<h2>3. Veličina je premala</h2>
<p>Kameri je potrebno dovoljno piksela da prepozna svaki modul. <strong>Rješenje:</strong> povećajte barkod. Za QR Code koji se skenira izbliza koristite najmanje oko 2 × 2 cm. Pogledajte <a href="/artikel/ukuran-barcode-untuk-dicetak">vodič za veličinu pri štampanju</a>.</p>

<h2>4. Nema tihe zone</h2>
<p>Barkod koji se dodiruje sa slikom, tekstom ili rubom papira teško je odvojiti od okoline. <strong>Rješenje:</strong> ostavite prazan prostor oko barkoda, posebno lijevo i desno od linijskog barkoda.</p>

<h2>5. Slika je mutna ili izobličena</h2>
<p>Barkod koji je povećan iz male slike, sačuvan kao JPG niskog kvaliteta ili razvučen tako da nije proporcionalan gubi svoj oblik. <strong>Rješenje:</strong> preuzmite ga s većom veličinom modula u formatu PNG i uvijek mijenjajte veličinu proporcionalno.</p>

<h2>6. Podaci su pogrešni ili ne odgovaraju vrsti</h2>
<p>Svaka vrsta barkoda ima svoja pravila. EAN-13, na primjer, prihvata samo 12 ili 13 cifara s ispravnom kontrolnom cifrom. Pogrešno otkucan link takođe znači da se QR Code očita, ali ništa ne otvori. <strong>Rješenje:</strong> provjerite podatke prije štampanja. Generator <a href="/">I Need Barcode</a> prikazaće poruku ako podaci ne odgovaraju pravilima odabrane vrste barkoda.</p>

<h2>7. Površina i osvjetljenje</h2>
<p>Sjajni materijali, providna plastika, pregibi i zakrivljene površine mogu odbijati svjetlost ili mijenjati oblik barkoda. <strong>Rješenje:</strong> štampajte na ravnoj površini koja nije sjajna, a zatim ga isprobajte u stvarnim uslovima osvjetljenja.</p>

<h2>O QR Code s dizajnom</h2>
<p>QR Code koji ima oblik, boju ili okvir i dalje se može skenirati sve dok su tri kvadrata za orijentaciju u uglovima netaknuta, a kontrast dovoljan. Više pročitajte u članku <a href="/artikel/desain-qr-code-kreatif">kreativan dizajn QR Code koji ostaje čitljiv</a>.</p>
<p>Najbolja navika: <strong>uvijek isprobajte jedan otisak</strong> s nekoliko telefona i skenera prije nego što štampate velike količine.</p>
`
};
