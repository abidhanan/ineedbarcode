// apa-itu-barcode
module.exports = {
  title: "Ce este un cod de bare? Definiție, mod de funcționare și tipuri",
  desc: "Codurile de bare se află pe aproape toate produsele pe care le cumpărați. Aflați cum funcționează, scurta lor istorie și tipurile de coduri de bare cele mai des folosite.",
  tags: ["Noțiuni de bază", "Cod de bare"],
  coverCaption: "Codul de bare de pe ambalaj stochează codul unic al produsului.",
  inlineCaption: "Casierul folosește un scanner pentru a citi codul de bare într-o clipă.",
  faq: [
    ["Care este diferența dintre un cod de bare și un QR Code?", "QR Code este un tip de cod de bare, mai exact un cod de bare 2D. Codul de bare liniar (1D) stochează doar câteva caractere și se citește de la stânga la dreapta, în timp ce QR Code stochează date în două direcții, astfel încât poate cuprinde un link, un text sau date WiFi."],
    ["Stochează codul de bare prețul produsului?", "De obicei, nu. Codul de bare al produsului conține doar un cod. Prețul și numele produsului sunt stocate în sistemul de casă și sunt căutate pe baza codului scanat."],
    ["Trebuie să plătesc pentru a crea un cod de bare?", "Nu. Imaginea codului de bare poate fi creată gratuit, de exemplu pe I Need Barcode. Singurul lucru care trebuie înregistrat contra cost este numărul oficial pentru codurile de bare ale produselor de retail, precum EAN-13, prin GS1."]
  ],
  body: `
<p>Codul de bare este o modalitate de a scrie date sub forma unui model care poate fi citit de o mașină. Acest model constă de obicei din linii negre și albe de lățimi diferite sau din pătrățele mici dispuse într-un pătrat. La scanare, modelul este transformat înapoi în cifre sau text, de exemplu un cod de produs, un număr de expediere sau adresa unui site.</p>
<p>Fiind citit de o mașină, codul de bare este mult mai rapid și mai puțin predispus la erori decât introducerea manuală a unui cod. De aceea, codurile de bare sunt folosite la case de marcat, în depozite, spitale, pe bilete și chiar pe ambalajele alimentelor.</p>

<h2>Scurtă istorie a codului de bare</h2>
<p>Ideea codului de bare a fost brevetată în 1952 de Norman Joseph Woodland și Bernard Silver în Statele Unite. Codul de bare a început să fie folosit cu adevărat în magazine abia în 1974, când un pachet de gumă de mestecat a fost scanat într-un supermarket din Ohio cu un cod UPC. De atunci, codul de bare s-a răspândit în întreaga lume și astăzi este administrat la nivel global de organizația de standardizare numită GS1.</p>

<h2>Cum funcționează codul de bare?</h2>
<p>Scannerul luminează codul de bare și citește lumina reflectată. Zonele întunecate reflectă puțină lumină, iar cele deschise reflectă multă. Această diferență este transformată într-un șir de 0 și 1, care este apoi comparat cu regulile tipului respectiv de cod de bare. Multe coduri de bare au și o <strong>cifră de control</strong> (check digit), adică ultima cifră, calculată din cifrele anterioare. Dacă rezultatul calculului nu se potrivește, scannerul știe că ceva nu este în regulă și respinge rezultatul.</p>
<p>Codul de bare în sine stochează de obicei doar un cod. Informații precum numele produsului sau prețul sunt stocate în sistemul de casă sau într-o bază de date și sunt căutate pe baza acelui cod.</p>

<h2>Tipuri de coduri de bare folosite frecvent</h2>
<p>În general, codurile de bare se împart în două mari grupe:</p>
<ul>
  <li><strong>Coduri de bare 1D (liniare)</strong>: linii verticale care se citesc de la stânga la dreapta. Exemple sunt <a href="/?type=ean13">EAN-13</a> și <a href="/?type=upca">UPC-A</a> pentru produsele de retail, precum și <a href="/?type=code128">Code 128</a> și <a href="/?type=code39">Code 39</a> pentru logistică și depozite.</li>
  <li><strong>Coduri de bare 2D</strong>: modele de pătrățele care stochează date în două direcții, astfel încât cuprind mult mai mult. Exemple sunt <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> și <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Pe lângă acestea, există coduri de bare speciale pentru poștă și expediere, pentru domeniul sănătății, precum și standarde GS1 pentru lanțul de aprovizionare. O explicație mai detaliată a diferențelor puteți citi în articolul <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferența dintre codurile de bare 1D și 2D</a>.</p>

<h2>La ce folosesc codurile de bare?</h2>
<ul>
  <li><strong>Retail</strong>: accelerează plata la casă și înregistrează automat stocurile.</li>
  <li><strong>Depozite și expediere</strong>: urmăresc mărfurile și coletele dintr-un loc în altul.</li>
  <li><strong>Bilete și evenimente</strong>: verifică autenticitatea biletelor cu o singură scanare.</li>
  <li><strong>Marketing</strong>: un QR Code pe o broșură sau pe un ambalaj îi duce pe oameni direct la site-ul, meniul sau WhatsApp-ul dumneavoastră.</li>
</ul>

<h2>Creați singur un cod de bare</h2>
<p>Nu aveți nevoie de o aplicație cu plată pentru a crea un cod de bare. Pe <a href="/">I Need Barcode</a>, alegeți tipul de cod de bare, introduceți datele și descărcați-l ca imagine PNG. Există peste 100 de tipuri din care puteți alege și toate sunt gratuite, fără înregistrare.</p>
`
};
