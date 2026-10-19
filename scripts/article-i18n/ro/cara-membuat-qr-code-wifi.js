// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cum să creați un QR Code WiFi pentru ca oaspeții să nu mai tasteze parola",
  desc: "Oaspeții trebuie doar să scaneze un QR Code pentru a se conecta la WiFi. Potrivit pentru cafenele, birouri, unități de cazare și case. Iată cum îl creați și unde îl plasați.",
  tags: ["Ghid", "QR Code"],
  coverCaption: "Datele WiFi ale routerului pot fi stocate într-un singur QR Code.",
  inlineCaption: "Clienții cafenelei se pot conecta imediat, fără să tasteze parola.",
  faq: [
    ["Pot toate telefoanele să scaneze un QR Code WiFi?", "Camera integrată a iPhone-urilor cu iOS 11 sau mai nou și a majorității dispozitivelor cu Android 10 sau mai nou îl poate citi direct. Telefoanele mai vechi pot avea nevoie de o aplicație de scanare QR."],
    ["Este sigur un QR Code WiFi?", "Oricine scanează acel QR Code se poate conecta la rețeaua dumneavoastră WiFi. De aceea, folosiți o rețea pentru oaspeți și nu afișați QR Code-ul unei rețele private în locuri publice."],
    ["Ce trebuie să fac dacă schimb parola WiFi?", "Creați și tipăriți din nou QR Code-ul WiFi, deoarece cel vechi conține în continuare parola veche."]
  ],
  body: `
<p>A dicta oaspeților o parolă WiFi lungă este adesea complicat, mai ales dacă aceasta conține majuscule, cifre și simboluri. Cu un <strong>QR Code WiFi</strong>, oaspeții trebuie doar să îndrepte camera telefonului spre QR Code și se conectează imediat.</p>

<h2>Cum funcționează un QR Code WiFi</h2>
<p>Un QR Code WiFi stochează numele rețelei (SSID), tipul de securitate și parola într-un format special recunoscut de telefoane, de exemplu <code>WIFI:T:WPA;S:NumeRetea;P:Parola;;</code>. Camera integrată a iPhone-ului (iOS 11 sau mai nou) și a majorității dispozitivelor Android (Android 10 sau mai nou) îl poate citi direct, fără o aplicație suplimentară.</p>

<h2>Pașii pentru a-l crea</h2>
<ol>
  <li>Deschideți <a href="/?type=qrcode">generatorul de QR Code</a> și alegeți fila <strong>WiFi</strong> din secțiunea Introducere date.</li>
  <li>Tastați <strong>numele rețelei</strong> exact așa cum apare în lista de rețele WiFi, inclusiv majusculele și minusculele.</li>
  <li>Tastați <strong>parola</strong>, apoi alegeți tipul de securitate. Majoritatea routerelor de acasă și de birou folosesc WPA/WPA2/WPA3.</li>
  <li>Bifați <strong>Rețea ascunsă</strong> dacă numele rețelei dumneavoastră WiFi nu este afișat în listă.</li>
  <li>Adăugați un cadru cu un text, de exemplu „SCAN WIFI”, pentru ca oaspeții să știe la ce folosește, apoi descărcați PNG-ul.</li>
</ol>

<h2>Unde să îl plasați?</h2>
<ul>
  <li>Un card mic pe masa din cafenea sau restaurant.</li>
  <li>Pe peretele din sala de așteptare, la recepție sau în sala de ședințe a biroului.</li>
  <li>În camera unității de cazare, lipit lângă ușă sau lângă televizor.</li>
  <li>Pe partea de jos a routerului de acasă, astfel încât familia să conecteze ușor dispozitive noi.</li>
</ul>

<h2>Sfaturi de securitate</h2>
<ul>
  <li>Folosiți o <strong>rețea pentru oaspeți</strong> (guest network) dacă routerul dumneavoastră o acceptă, astfel încât oaspeții să nu intre în aceeași rețea cu computerele din birou.</li>
  <li>Dacă schimbați parola WiFi, creați și tipăriți din nou QR Code-ul, deoarece cel vechi va conține parola veche.</li>
  <li>Nu afișați QR Code-ul WiFi al unei rețele private în locuri publice, unde oricine îl poate fotografia.</li>
</ul>

<h2>Dacă QR Code-ul nu se conectează</h2>
<p>Verificați din nou scrierea numelui rețelei și a parolei, deoarece o singură literă greșită face ca telefonul să nu se poată conecta. Asigurați-vă, de asemenea, că tipul de securitate ales corespunde setărilor routerului. Pentru alte probleme de scanare, citiți <a href="/artikel/barcode-tidak-bisa-dipindai">cauzele pentru care un cod de bare nu poate fi scanat</a>.</p>
`
};
