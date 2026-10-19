// apa-itu-barcode
module.exports = {
  title: "Što je barkod? Značenje, način rada i vrste",
  desc: "Barkod se nalazi na gotovo svakom proizvodu koji kupite. Saznajte kako radi, kakva je njegova kratka povijest i koje se vrste barkodova najčešće koriste.",
  tags: ["Osnove", "Barkodovi"],
  coverCaption: "Barkod na ambalaži sadrži jedinstveni kod proizvoda.",
  inlineCaption: "Blagajnica čitačem u trenu očita barkod.",
  faq: [
    ["Koja je razlika između barkoda i QR Code?", "QR Code je jedna od vrsta barkoda, odnosno 2D barkod. Linijski barkod (1D) sadrži tek nekoliko znakova i čita se slijeva nadesno, dok QR Code pohranjuje podatke u dva smjera pa u njega stane poveznica, tekst ili podaci o WiFi mreži."],
    ["Sadrži li barkod cijenu proizvoda?", "Obično ne. Barkod proizvoda sadrži samo kod. Cijena i naziv proizvoda pohranjeni su u blagajničkom sustavu i pronalaze se na temelju očitanog koda."],
    ["Moram li platiti izradu barkoda?", "Ne. Sliku barkoda možete izraditi besplatno, primjerice na I Need Barcode. Plaćenu registraciju zahtijeva samo službeni broj za maloprodajne barkodove poput EAN-13, i to putem GS1."]
  ],
  body: `
<p>Barkod je način zapisivanja podataka u obliku uzorka koji može pročitati stroj. Taj se uzorak obično sastoji od crnih i bijelih linija različite širine ili od malih kvadratića raspoređenih u kvadrat. Prilikom skeniranja uzorak se ponovno pretvara u brojeve ili tekst, primjerice u kod proizvoda, broj pošiljke ili adresu web-stranice.</p>
<p>Budući da ga čita stroj, barkod je mnogo brži i manje sklon pogreškama od ručnog upisivanja koda. Zato se barkodovi koriste na blagajnama, u skladištima, bolnicama, na ulaznicama, pa čak i na ambalaži hrane.</p>

<h2>Kratka povijest barkoda</h2>
<p>Ideju barkoda patentirali su 1952. u Sjedinjenim Američkim Državama Norman Joseph Woodland i Bernard Silver. U trgovinama se zaista počeo koristiti tek 1974., kada je u jednom supermarketu u Ohiju skenirano pakiranje žvakaćih guma s UPC kodom. Od tada su se barkodovi proširili cijelim svijetom, a danas njima globalno upravlja organizacija za standarde GS1.</p>

<h2>Kako barkod radi?</h2>
<p>Čitač osvijetli barkod i očita reflektiranu svjetlost. Tamni dijelovi reflektiraju malo svjetlosti, a svijetli mnogo. Ta se razlika pretvara u niz nula i jedinica te uspoređuje s pravilima za tu vrstu barkoda. Mnogi barkodovi imaju i <strong>kontrolnu znamenku</strong> (check digit), odnosno posljednju znamenku izračunatu iz prethodnih brojeva. Ako se izračun ne podudara, čitač zna da nešto nije u redu i odbacuje rezultat.</p>
<p>Sam barkod obično sadrži samo kod. Podaci poput naziva proizvoda ili cijene pohranjeni su u blagajničkom sustavu ili bazi podataka i pronalaze se na temelju tog koda.</p>

<h2>Najčešće korištene vrste barkodova</h2>
<p>Općenito se barkodovi dijele u dvije velike skupine:</p>
<ul>
  <li><strong>1D (linearni) barkodovi</strong>: sastoje se od okomitih linija koje se čitaju slijeva nadesno. Primjeri su <a href="/?type=ean13">EAN-13</a> i <a href="/?type=upca">UPC-A</a> za maloprodajne proizvode te <a href="/?type=code128">Code 128</a> i <a href="/?type=code39">Code 39</a> za logistiku i skladišta.</li>
  <li><strong>2D barkodovi</strong>: sastoje se od kvadratnog uzorka koji pohranjuje podatke u dva smjera pa u njih stane mnogo više. Primjeri su <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Osim toga, postoje posebni barkodovi za poštu i dostavu, zdravstvo te GS1 standardi za opskrbne lance. Detaljnije objašnjenje razlika možete pročitati u članku <a href="/artikel/perbedaan-barcode-1d-dan-2d">Razlika između 1D i 2D barkodova</a>.</p>

<h2>Za što se sve koriste barkodovi?</h2>
<ul>
  <li><strong>Maloprodaja</strong>: ubrzavaju rad na blagajni i automatski bilježe zalihe.</li>
  <li><strong>Skladišta i dostava</strong>: prate robu i pakete od jednog mjesta do drugog.</li>
  <li><strong>Ulaznice i događanja</strong>: jednim skeniranjem provjeravaju autentičnost ulaznice.</li>
  <li><strong>Marketing</strong>: QR Code na letku ili ambalaži vodi ljude izravno na vašu web-stranicu, jelovnik ili WhatsApp.</li>
</ul>

<h2>Izradite vlastiti barkod</h2>
<p>Za izradu barkoda ne trebate plaćenu aplikaciju. Na <a href="/">I Need Barcode</a> odaberite vrstu barkoda, unesite podatke i preuzmite ga kao PNG sliku. Možete birati između više od 100 vrsta, a sve su besplatne i bez registracije.</p>
`
};
