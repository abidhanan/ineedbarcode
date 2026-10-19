// desain-qr-code-kreatif
module.exports = {
  title: "Design creativ de QR Code care poate fi scanat în continuare",
  desc: "Un QR Code poate avea formă de inimă sau de cerc ori poate primi un cadru și culori. Aflați regulile prin care designul rămâne atractiv și, în același timp, ușor de scanat.",
  tags: ["Design", "QR Code"],
  coverCaption: "Culorile fac un QR Code mai atractiv, cu condiția ca contrastul să rămână puternic.",
  inlineCaption: "Este recomandat ca designul unui QR Code să fie testat întotdeauna înainte de tipărire.",
  faq: [
    ["Un QR Code în formă de inimă poate fi scanat?", "Da. QR Code-ul original rămâne intact în centru, iar restul este doar un model decorativ. Atât timp cât contrastul este puternic și dimensiunea suficientă, QR Code-ul rămâne lizibil."],
    ["Ce culori sunt sigure pentru un QR Code?", "Culori închise precum negru, albastru închis, verde închis, mov sau maro închis, pe un fundal alb sau foarte deschis."],
    ["Pot adăuga un text sau un cadru unui QR Code?", "Da. Un cadru cu un îndemn precum „SCANEAZĂ-MĂ” îi ajută chiar pe oameni să înțeleagă la ce folosește, atât timp cât cadrul nu acoperă QR Code-ul."]
  ],
  body: `
<p>Un QR Code alb-negru este funcțional, dar arată adesea rigid pe ambalaje, invitații sau materiale promoționale. Cu puțin design, un QR Code poate arăta mai atractiv fără să își piardă funcția. Cheia este să înțelegeți ce părți pot fi modificate și care trebuie să rămână intacte.</p>

<h2>Forma exterioară: inimă, cerc și altele</h2>
<p>În secțiunea Design a <a href="/?type=qrcode">generatorului de QR Code</a>, puteți alege o formă precum cerc, inimă, hexagon, octogon, stea sau romb. QR Code-ul original rămâne în centru, iar restul este umplut cu un model decorativ până când se formează forma aleasă. Modelul decorativ nu conține date, așa că nu afectează scanarea, atât timp cât există un spațiu gol în jurul QR Code-ului original.</p>

<h2>Stilul punctelor</h2>
<p>Pătrățelele unui QR Code pot fi transformate în forme rotunjite sau în puncte rotunde. Pentru a rămâne ușor de scanat, este recomandat ca cele trei pătrate mari din colțuri (finder pattern) să rămână pătrate întregi, deoarece pe acestea le caută camera mai întâi. Generatorul nostru desenează întotdeauna aceste părți ca pătrate întregi, cel mult cu colțuri rotunjite, indiferent de stilul punctelor pe care îl alegeți.</p>

<h2>Culori</h2>
<ul>
  <li>Folosiți o culoare <strong>închisă</strong> pentru QR Code și o culoare <strong>deschisă</strong> pentru fundal. Albastrul închis, verdele închis, movul sau maroul închis sunt în general sigure.</li>
  <li>Evitați culorile pale pentru QR Code, precum galben, roz pal sau gri deschis.</li>
  <li>Nu inversați culorile într-un QR Code deschis pe fundal întunecat, deoarece nu toate aplicațiile de scanare acceptă acest lucru.</li>
</ul>

<h2>Cadre și îndemnuri</h2>
<p>Un cadru cu un îndemn precum „SCANEAZĂ-MĂ”, „MENIU” sau „SCAN WIFI” s-a dovedit că îi ajută pe oameni să înțeleagă funcția unui QR Code. Puteți alege un cadru cu etichetă jos, etichetă sus, colțuri, balon, cerc sau panglică, apoi puteți schimba textul și culoarea.</p>

<h2>Reguli pentru ca designul să rămână lizibil</h2>
<ol>
  <li>Păstrați un <strong>contrast</strong> puternic între QR Code și fundal.</li>
  <li>Lăsați cele <strong>trei pătrate de reper</strong> din colțuri clare și neacoperite.</li>
  <li>Lăsați <strong>spațiu gol</strong> în jurul QR Code-ului și al cadrului.</li>
  <li>Nu micșorați excesiv un QR Code cu design. Formele precum inima fac ca zona QR Code-ului original să fie mai mică decât dimensiunea totală a imaginii.</li>
  <li><strong>Testați</strong> cu mai multe telefoane înainte de tipărire.</li>
</ol>

<p>Dacă designul dumneavoastră se scanează greu, readuceți setările una câte una la cele de bază cu butonul <strong>Resetare</strong> pentru a găsi cauza. Alte cauze frecvente puteți citi în <a href="/artikel/barcode-tidak-bisa-dipindai">7 cauze pentru care un cod de bare nu poate fi scanat</a>.</p>
`
};
