// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferența dintre codurile de bare 1D și 2D: de care aveți nevoie?",
  desc: "Codul de bare liniar și QR Code-ul sunt amândouă coduri de bare, dar au utilizări diferite. Comparați capacitatea, modul de scanare și exemplele de utilizare.",
  tags: ["Noțiuni de bază", "Cod de bare"],
  coverCaption: "Scannerul portabil din depozit citește coduri de bare 1D și 2D.",
  inlineCaption: "Etichetele de expediere folosesc de obicei coduri de bare liniare.",
  faq: [
    ["Poate un scanner de casă să citească un QR Code?", "Nu toate. Scannerul laser 1D citește doar coduri de bare liniare. Pentru QR Code este nevoie de un scanner 2D cu cameră sau de camera unui telefon."],
    ["Care este cel mai mic cod de bare?", "Data Matrix este un cod de bare 2D care poate fi tipărit foarte mic, de aceea este folosit adesea pe componente electronice, dispozitive medicale și etichete de medicamente."],
    ["Pot folosi un QR Code în locul EAN-13 pe produsele de retail?", "Pentru a fi vândut în magazine, produsul are în continuare nevoie de un EAN-13 sau UPC înregistrat. QR Code-ul poate fi adăugat pe ambalaj ca element complementar, de exemplu pentru informații despre produs sau promoții."]
  ],
  body: `
<p>Când creați un cod de bare, prima întrebare care apare de obicei este: cod de bare liniar sau QR Code? Ambele se numesc coduri de bare, dar modul în care stochează datele este diferit, așa că și utilizările lor sunt diferite.</p>

<h2>Codul de bare 1D (liniar)</h2>
<p>Codul de bare 1D este format din linii verticale. Datele sunt stocate într-o singură direcție, de la stânga la dreapta. Cele mai cunoscute exemple sunt <a href="/?type=ean13">EAN-13</a> de pe ambalajele produselor și <a href="/?type=code128">Code 128</a> de pe etichetele de expediere.</p>
<ul>
  <li>Capacitate mică, de obicei de la o duzină până la câteva zeci de caractere.</li>
  <li>Poate fi citit de scannere laser de casă ieftine și foarte rapide.</li>
  <li>Potrivit pentru coduri de produs, numere de serie și numere de expediere.</li>
</ul>

<h2>Codul de bare 2D</h2>
<p>Codul de bare 2D stochează date în două direcții, pe orizontală și pe verticală, astfel încât cuprinde mult mai mult. Exemple sunt <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> și <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Capacitate mare, de la câteva zeci până la mii de caractere.</li>
  <li>Poate fi scanat cu camera telefonului din diverse direcții.</li>
  <li>Are corecție a erorilor, așa că rămâne lizibil chiar dacă este parțial deteriorat.</li>
  <li>Poate fi foarte mic, de exemplu Data Matrix pe componente electronice.</li>
</ul>

<h2>Comparație pe scurt</h2>
<table>
  <thead><tr><th></th><th>Cod de bare 1D</th><th>Cod de bare 2D</th></tr></thead>
  <tbody>
    <tr><td>Formă</td><td>Linii verticale</td><td>Pătrățele/puncte într-un pătrat</td></tr>
    <tr><td>Capacitate</td><td>Mică</td><td>Mare</td></tr>
    <tr><td>Dispozitiv de scanare</td><td>Scanner laser sau cameră</td><td>Cameră sau scanner 2D</td></tr>
    <tr><td>Rezistență la deteriorare</td><td>Limitată</td><td>Are corecție a erorilor</td></tr>
    <tr><td>Exemple</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Când îl folosiți pe fiecare?</h2>
<ul>
  <li><strong>Produse vândute în magazine sau minimarketuri</strong>: folosiți un EAN-13 oficial de la GS1. Consultați <a href="/artikel/cara-mendapatkan-barcode-ean-13">cum să obțineți un cod de bare EAN-13</a>.</li>
  <li><strong>Etichete pentru depozit, rafturi sau expediere</strong>: Code 128 este o alegere obișnuită, deoarece este compact și acceptă litere și cifre.</li>
  <li><strong>Linkuri, meniuri, WiFi sau contacte pentru clienți</strong>: QR Code, deoarece poate fi scanat direct cu camera telefonului.</li>
  <li><strong>Etichete foarte mici</strong>: Data Matrix.</li>
  <li><strong>Acte de identitate, bilete de avion sau documente</strong>: PDF417 sau Aztec.</li>
</ul>
<p>Toate tipurile de mai sus le puteți crea gratuit pe <a href="/">I Need Barcode</a>. Dacă încă aveți nelămuriri, începeți cu QR Code pentru nevoile clienților și cu Code 128 pentru nevoile interne.</p>
`
};
