// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Dimensiunea și rezoluția potrivite ale codului de bare pentru tipărire",
  desc: "Un cod de bare prea mic sau neclar se scanează greu. Aflați dimensiunea minimă, regula distanței de scanare și rezoluția sigură a imaginii pentru tipărire.",
  tags: ["Ghid", "Tipărire"],
  coverCaption: "O imprimantă de etichete tipărește coduri de bare pentru colete și ambalaje.",
  inlineCaption: "Dimensiunea etichetei determină cât de mare poate fi tipărit codul de bare.",
  faq: [
    ["Care este dimensiunea minimă a unui QR Code pentru tipărire?", "Pentru scanarea de aproape, aproximativ 2 × 2 cm este limita sigură. Pentru distanțe mai mari, folosiți un raport de aproximativ 10 : 1 între distanța de scanare și lățimea QR Code-ului."],
    ["Care este dimensiunea standard a unui cod de bare EAN-13?", "Dimensiunea standard a EAN-13 este de aproximativ 37,3 × 25,9 mm. Aceasta poate fi micșorată până la aproximativ 80% sau mărită până la 200%."],
    ["De ce este neclar codul de bare după tipărire?", "De obicei, pentru că imaginea a fost mică și a fost mărită sau a fost salvată ca JPG de calitate scăzută. Descărcați-o cu o dimensiune mai mare a modulului în format PNG."]
  ],
  body: `
<p>Un cod de bare care arată bine pe ecran nu este neapărat lizibil după tipărire. O dimensiune prea mică, o rezoluție scăzută sau cerneala care se întinde pot face ca scannerul să nu reușească să îl citească. Iată un ghid pentru ca tipăriturile dumneavoastră să rămână lizibile.</p>

<h2>Ce este modulul</h2>
<p><strong>Modulul</strong> este cea mai mică unitate a unui cod de bare, adică un pătrățel dintr-un QR Code sau cea mai îngustă linie dintr-un cod de bare liniar. Dimensiunea modulului determină cât de ușor se citește codul de bare. Pe <a href="/">I Need Barcode</a>, dimensiunea modulului poate fi ajustată în secțiunea Setări: cu cât valoarea este mai mare, cu atât imaginea descărcată este mai mare și mai clară.</p>

<h2>Dimensiunea minimă a unui QR Code</h2>
<ul>
  <li>Pentru scanarea de aproape (de exemplu, o carte de vizită sau o etichetă de produs), o dimensiune de aproximativ <strong>2 × 2 cm</strong> este limita sigură.</li>
  <li>Folosiți regula raportului de aproximativ <strong>10 : 1</strong>: distanța de scanare este de aproximativ zece ori lățimea QR Code-ului. Pentru un afiș scanat de la 2 metri, faceți un QR Code de cel puțin aproximativ 20 cm.</li>
  <li>Cu cât stocați mai multe date, cu atât modelul este mai dens, deci este nevoie de o dimensiune mai mare.</li>
</ul>

<h2>Dimensiunea codurilor de bare pentru produse</h2>
<p>Dimensiunea standard a <a href="/?type=ean13">EAN-13</a> este de aproximativ 37,3 × 25,9 mm (100%). Aceasta poate fi micșorată până la aproximativ 80% sau mărită până la 200%. Evitați să scurtați prea mult înălțimea liniilor, deoarece scannerul de casă are nevoie de spațiu pentru a citi din diverse unghiuri.</p>

<h2>Rezoluția imaginii</h2>
<ul>
  <li>Pentru tipărire, încercați ca fiecare modul să fie redat prin <strong>mai mulți pixeli întregi</strong>, nu prin fracțiuni de pixel. Alegeți o dimensiune mai mare a modulului la descărcare, apoi micșorați în aplicația de design, nu invers.</li>
  <li>Evitați mărirea unei imagini mici a codului de bare, deoarece marginile pătrățelelor vor deveni neclare sau zimțate.</li>
  <li>Salvați în format PNG, astfel încât culorile și marginile să nu se degradeze ca în cazul JPG.</li>
</ul>

<h2>Zona liniștită</h2>
<p>Fiecare cod de bare are nevoie de spațiu gol în jurul său, numit <strong>zonă liniștită</strong> (quiet zone). Pentru QR Code, ideal ar fi ca aceasta să aibă lățimea a patru module. Pentru codurile de bare liniare, spațiul gol din stânga și din dreapta este foarte important. Nu plasați texte, linii decorative sau marginea ambalajului prea aproape.</p>

<h2>Culori și materiale</h2>
<ul>
  <li>Folosiți o culoare închisă pentru codul de bare și o culoare deschisă pentru fundal.</li>
  <li>Evitați materialele lucioase sau transparente, deoarece reflexia luminii poate deranja camera.</li>
  <li>Tipăriți întotdeauna un exemplar de probă și testați-l cu mai multe telefoane sau scannere înainte de a tipări în cantități mari.</li>
</ul>
<p>Dacă codul de bare se scanează în continuare greu, consultați <a href="/artikel/barcode-tidak-bisa-dipindai">7 cauze pentru care un cod de bare nu poate fi scanat</a>.</p>
`
};
