// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 cauze pentru care un cod de bare nu poate fi scanat și cum le remediați",
  desc: "Codul de bare sau QR Code-ul nu se scanează? Verificați cele mai frecvente șapte cauze, de la contrastul culorilor până la dimensiune, împreună cu modul de remediere.",
  tags: ["Sfaturi", "Cod de bare"],
  coverCaption: "Contrastul și dimensiunea determină dacă un QR Code se scanează ușor.",
  inlineCaption: "În depozit, un cod de bare care nu se scanează încetinește munca.",
  faq: [
    ["De ce un QR Code se scanează pe un telefon, dar nu și pe altul?", "Camerele și aplicațiile de scanare au capacități diferite. Un QR Code prea mic, cu contrast scăzut sau cu culori inversate eșuează mai des pe anumite telefoane. Testați cu mai multe telefoane înainte de tipărire."],
    ["Poate fi scanat un cod de bare colorat?", "Da, atât timp cât culoarea este închisă pe un fundal deschis. Evitați culoarea roșie pentru liniile codului de bare, deoarece multe scannere de casă folosesc lumină roșie."],
    ["Cum verific dacă un cod de bare este corect?", "Scanați exemplarul tipărit cu mai multe telefoane sau scannere și asigurați-vă că datele citite sunt exact aceleași cu datele pe care le-ați introdus."]
  ],
  body: `
<p>Nimic nu este mai enervant decât un cod de bare tipărit în sute de exemplare care se dovedește apoi că nu poate fi scanat. Vestea bună este că, de obicei, cauza este simplă și ușor de prevenit. Iată cele mai frecvente șapte cauze.</p>

<h2>1. Contrastul culorilor este prea scăzut</h2>
<p>Scannerul citește diferența dintre întunecat și deschis. Un cod de bare gri deschis pe alb sau albastru închis pe negru se disting greu. <strong>Soluție:</strong> folosiți o culoare închisă pe un fundal deschis. Negru pe alb este cea mai sigură alegere.</p>

<h2>2. Culori inversate sau culoarea roșie</h2>
<p>Un cod de bare deschis pe un fundal întunecat nu este acceptat de toate scannerele. În plus, multe scannere de casă folosesc lumină roșie, astfel încât liniile roșii arată la fel ca fundalul alb. <strong>Soluție:</strong> evitați culoarea roșie pentru liniile sau modulele codului de bare și nu inversați culorile.</p>

<h2>3. Dimensiunea este prea mică</h2>
<p>Camera are nevoie de suficienți pixeli pentru a recunoaște fiecare modul. <strong>Soluție:</strong> măriți codul de bare. Pentru un QR Code scanat de aproape, folosiți cel puțin aproximativ 2 × 2 cm. Consultați <a href="/artikel/ukuran-barcode-untuk-dicetak">ghidul dimensiunilor pentru tipărire</a>.</p>

<h2>4. Lipsește zona liniștită</h2>
<p>Un cod de bare lipit de o imagine, de un text sau de marginea hârtiei se separă greu de ceea ce îl înconjoară. <strong>Soluție:</strong> lăsați spațiu gol în jurul codului de bare, mai ales în stânga și în dreapta codului de bare liniar.</p>

<h2>5. Imagine neclară sau distorsionată</h2>
<p>Un cod de bare mărit dintr-o imagine mică, salvat ca JPG de calitate scăzută sau întins disproporționat își pierde forma. <strong>Soluție:</strong> descărcați-l cu o dimensiune mai mare a modulului în format PNG și redimensionați-l întotdeauna proporțional.</p>

<h2>6. Date greșite sau nepotrivite pentru tip</h2>
<p>Fiecare tip de cod de bare are reguli proprii. EAN-13, de exemplu, acceptă doar 12 sau 13 cifre cu o cifră de control corectă. Un link scris greșit face, de asemenea, ca QR Code-ul să fie citit, dar să nu deschidă nimic. <strong>Soluție:</strong> verificați datele înainte de tipărire. Generatorul <a href="/">I Need Barcode</a> va afișa un mesaj dacă datele nu respectă regulile tipului de cod de bare ales.</p>

<h2>7. Suprafața și iluminarea</h2>
<p>Materialele lucioase, plasticul transparent, pliurile și suprafețele curbate pot reflecta lumina sau pot modifica forma codului de bare. <strong>Soluție:</strong> tipăriți pe o suprafață plană și mată, apoi testați în condițiile reale de iluminare.</p>

<h2>Despre QR Code-urile cu design</h2>
<p>Un QR Code căruia i s-a adăugat o formă, o culoare sau un cadru poate fi scanat în continuare, atât timp cât cele trei pătrate de reper din colțuri sunt intacte și contrastul este suficient. Citiți mai multe în <a href="/artikel/desain-qr-code-kreatif">design creativ de QR Code care rămâne lizibil</a>.</p>
<p>Cel mai bun obicei: <strong>testați întotdeauna o probă tipărită</strong> cu mai multe telefoane și scannere înainte de a tipări în cantități mari.</p>
`
};
