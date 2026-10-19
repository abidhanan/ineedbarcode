// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cum să obțineți un cod de bare EAN-13 pentru produsele IMM-urilor",
  desc: "Doriți ca produsul dumneavoastră să ajungă în minimarketuri sau supermarketuri? Aflați ce înseamnă cifrele EAN-13, cum să înregistrați un număr oficial la GS1 Indonesia și cum să îl tipăriți.",
  tags: ["Afaceri", "Retail"],
  coverCaption: "Ambalajele produselor de retail necesită un cod de bare EAN-13 înregistrat.",
  inlineCaption: "Magazinele recunosc produsul după numărul EAN-13 din sistemul lor de casă.",
  faq: [
    ["Pot să îmi creez singur un număr EAN-13?", "Imaginea codului de bare o puteți crea singur, dar este recomandat ca numărul să fie oficial, de la GS1. Un număr inventat poate intra în conflict cu alt produs și poate fi respins de magazine."],
    ["Fiecare variantă de produs are nevoie de un cod de bare diferit?", "Da. Fiecare variantă diferită, de exemplu cu altă aromă, altă dimensiune sau alt conținut al ambalajului, necesită propriul număr EAN-13."],
    ["Ce este cifra de control din EAN-13?", "Cifra de control este a 13-a cifră, calculată din cele 12 cifre anterioare. Scannerul o folosește pentru a se asigura că codul de bare a fost citit corect. Generatorul I Need Barcode o calculează automat dacă introduceți 12 cifre."]
  ],
  body: `
<p>Dacă doriți ca produsul dumneavoastră să fie vândut în minimarketuri, supermarketuri sau pe marile platforme online, de obicei vi se va cere să aplicați pe ambalaj un cod de bare <strong>EAN-13</strong>. Acest cod de bare conține 13 cifre care reprezintă identitatea unică a produsului dumneavoastră în întreaga lume.</p>

<h2>Semnificația celor 13 cifre din EAN-13</h2>
<ul>
  <li><strong>Prefixul GS1</strong>: primele trei cifre indică organizația GS1 care a emis numărul. Numerele emise de GS1 Indonesia încep cu <strong>899</strong>.</li>
  <li><strong>Numărul companiei</strong>: identitatea companiei dumneavoastră, atribuită la înregistrare.</li>
  <li><strong>Numărul produsului</strong>: stabilit de companie pentru fiecare variantă de produs, de exemplu altă aromă sau altă dimensiune.</li>
  <li><strong>Cifra de control</strong>: ultima cifră, calculată automat din cele 12 cifre anterioare pentru a preveni citirile greșite.</li>
</ul>

<h2>De ce trebuie să fie un număr oficial?</h2>
<p>Un cod de bare EAN-13 poate fi desenat de oricine, dar <strong>numărul</strong> trebuie să fie înregistrat. Magazinele folosesc acel număr pentru a recunoaște produsul în sistemul lor. Dacă inventați singur un număr, acesta poate intra în conflict cu produsul altei companii și poate fi respins atunci când produsul este înregistrat la magazin.</p>

<h2>Cum să înregistrați un număr la GS1 Indonesia</h2>
<ol>
  <li>Pregătiți documentele firmei, precum NIB (Nomor Induk Berusaha, numărul de identificare a afacerii) și NPWP (codul fiscal), precum și lista produselor care vor primi cod de bare.</li>
  <li>Înregistrați compania prin site-ul oficial GS1 Indonesia și alegeți câte numere vă sunt necesare.</li>
  <li>Plătiți taxa de înregistrare și cotizația anuală conform regulilor în vigoare.</li>
  <li>După aprobare, primiți numărul companiei și puteți crea un număr pentru fiecare produs.</li>
</ol>
<p>Cerințele și costurile se pot schimba, așa că verificați întotdeauna cele mai recente informații direct pe site-ul GS1 Indonesia.</p>

<h2>Crearea imaginii codului de bare</h2>
<p>După ce aveți numărul, deschideți <a href="/?type=ean13">generatorul EAN-13</a> și introduceți cele 12 sau 13 cifre ale numărului produsului dumneavoastră. Dacă introduceți 12 cifre, cifra de control va fi calculată automat. Asigurați-vă că opțiunea de text sub codul de bare este activată, pentru ca cifrele să fie tipărite, apoi descărcați-l ca PNG.</p>

<h2>Sfaturi pentru tipărirea pe ambalaj</h2>
<ul>
  <li>Folosiți linii negre sau albastru închis pe fundal alb. Evitați culoarea roșie pentru linii, deoarece multe scannere de casă folosesc lumină roșie, iar liniile roșii nu pot fi citite.</li>
  <li>Nu micșorați excesiv codul de bare. Dimensiunea standard a EAN-13 este de aproximativ 37,3 × 25,9 mm și poate fi micșorată până la aproximativ 80%. Mai multe detalii în <a href="/artikel/ukuran-barcode-untuk-dicetak">ghidul dimensiunilor codurilor de bare</a>.</li>
  <li>Lăsați spațiu gol în stânga și în dreapta codului de bare și evitați să îl plasați pe pliuri sau îmbinări ale ambalajului.</li>
  <li>Testați tiparul cu un scanner înainte de a tipări în cantități mari.</li>
</ul>
<p>Pentru produsele vândute în America de Nord, vi se poate cere să folosiți și <a href="/?type=upca">UPC-A</a>, care conține 12 cifre.</p>
`
};
