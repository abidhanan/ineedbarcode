// apa-itu-barcode
module.exports = {
  title: "Šta je barkod? Definicija, način rada i vrste",
  desc: "Barkod se nalazi na gotovo svakom proizvodu koji kupite. Saznajte kako radi, upoznajte njegovu kratku historiju i vrste barkodova koje se najčešće koriste.",
  tags: ["Osnove", "Barkod"],
  coverCaption: "Barkod na ambalaži čuva jedinstveni kod proizvoda.",
  inlineCaption: "Blagajnici koriste skener da u trenu očitaju barkod.",
  faq: [
    ["Koja je razlika između barkoda i QR Code?", "QR Code je jedna vrsta barkoda, tačnije 2D barkod. Linijski (1D) barkod čuva samo nekoliko znakova i čita se slijeva nadesno, dok QR Code čuva podatke u dva smjera, pa u njega stane link, tekst ili podaci o WiFi mreži."],
    ["Da li barkod čuva cijenu proizvoda?", "Obično ne. Barkod proizvoda sadrži samo kod. Cijena i naziv proizvoda čuvaju se u kasnom sistemu i pronalaze se na osnovu skeniranog koda."],
    ["Da li se izrada barkoda plaća?", "Ne. Sliku barkoda možete napraviti besplatno, na primjer na I Need Barcode. Plaćenu registraciju zahtijeva samo službeni broj za barkodove maloprodajnih proizvoda, kao što je EAN-13, putem GS1."]
  ],
  body: `
<p>Barkod je način zapisivanja podataka u obliku uzorka koji mašine mogu očitati. Taj uzorak se obično sastoji od crnih i bijelih linija različite širine ili od malih kvadratića raspoređenih unutar kvadrata. Prilikom skeniranja uzorak se ponovo pretvara u brojeve ili tekst, na primjer u šifru proizvoda, broj pošiljke ili adresu web-stranice.</p>
<p>Budući da ga očitavaju mašine, barkod je mnogo brži i daleko manje sklon greškama nego ručno kucanje koda. Zato se barkodovi koriste na kasama, u skladištima, bolnicama, na ulaznicama, pa sve do ambalaže hrane.</p>

<h2>Kratka historija barkoda</h2>
<p>Ideju barkoda patentirali su 1952. godine Norman Joseph Woodland i Bernard Silver u Sjedinjenim Američkim Državama. Barkod je u prodavnicama zaista počeo da se koristi tek 1974. godine, kada je pakovanje žvakaćih guma skenirano UPC kodom u jednom supermarketu u Ohaju. Od tada su se barkodovi proširili po cijelom svijetu, a danas njima globalno upravlja organizacija za standarde pod nazivom GS1.</p>

<h2>Kako barkod radi?</h2>
<p>Skener osvijetli barkod, a zatim očita odbijenu svjetlost. Tamni dijelovi odbijaju malo svjetlosti, a svijetli mnogo. Ta razlika pretvara se u niz nula i jedinica, koji se zatim upoređuje s pravilima te vrste barkoda. Mnogi barkodovi imaju i <strong>kontrolnu cifru</strong> (check digit), odnosno posljednju cifru koja se izračunava iz prethodnih cifara. Ako se rezultat izračuna ne poklapa, skener zna da nešto nije u redu i odbacuje rezultat.</p>
<p>Sam barkod obično čuva samo kod. Informacije poput naziva proizvoda ili cijene čuvaju se u kasnom sistemu ili bazi podataka i pronalaze se na osnovu tog koda.</p>

<h2>Vrste barkodova koje se često koriste</h2>
<p>Uopšteno, barkodovi se dijele u dvije velike grupe:</p>
<ul>
  <li><strong>1D (linijski) barkod</strong>: vertikalne linije koje se čitaju slijeva nadesno. Primjeri su <a href="/?type=ean13">EAN-13</a> i <a href="/?type=upca">UPC-A</a> za maloprodajne proizvode, te <a href="/?type=code128">Code 128</a> i <a href="/?type=code39">Code 39</a> za logistiku i skladišta.</li>
  <li><strong>2D barkod</strong>: kvadratni uzorak koji čuva podatke u dva smjera, pa u njega stane mnogo više. Primjeri su <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Osim toga, postoje i posebni barkodovi za poštu i dostavu, zdravstvo, kao i GS1 standardi za lance snabdijevanja. Detaljnije objašnjenje razlika možete pročitati u članku <a href="/artikel/perbedaan-barcode-1d-dan-2d">Razlika između 1D i 2D barkodova</a>.</p>

<h2>Za šta se barkodovi koriste?</h2>
<ul>
  <li><strong>Maloprodaja</strong>: ubrzava rad na kasi i automatski evidentira zalihe.</li>
  <li><strong>Skladištenje i dostava</strong>: praćenje robe i paketa od jednog mjesta do drugog.</li>
  <li><strong>Ulaznice i događaji</strong>: provjera autentičnosti ulaznica jednim skeniranjem.</li>
  <li><strong>Marketing</strong>: QR Code na brošuri ili ambalaži vodi ljude direktno na vašu web-stranicu, meni ili WhatsApp.</li>
</ul>

<h2>Izrada vlastitog barkoda</h2>
<p>Za izradu barkoda nije vam potrebna plaćena aplikacija. Na <a href="/">I Need Barcode</a> odaberite vrstu barkoda, unesite podatke i preuzmite ga kao PNG sliku. Na raspolaganju je više od 100 vrsta, a sve su besplatne i bez registracije.</p>
`
};
