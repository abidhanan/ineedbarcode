// apa-itu-qr-code
module.exports = {
  title: "Ce este un QR Code și cum funcționează?",
  desc: "Un QR Code poate stoca un link, un text și chiar date WiFi și rămâne lizibil chiar dacă este parțial deteriorat. Iată cum funcționează și ce avantaje are.",
  tags: ["Noțiuni de bază", "QR Code"],
  coverCaption: "Un QR Code poate fi scanat direct cu camera telefonului.",
  inlineCaption: "Fiecare QR Code este alcătuit din pătrățele mici negre și albe.",
  faq: [
    ["Poate expira un QR Code?", "Un QR Code static nu expiră niciodată, deoarece datele sunt încorporate direct în imagine. Un QR Code dinamic poate înceta să funcționeze dacă serviciul care furnizează linkul se oprește sau abonamentul expiră."],
    ["Câte date poate stoca un QR Code?", "Cea mai mare versiune de QR Code poate stoca până la 7.089 de cifre sau aproximativ 2.953 de octeți. Totuși, cu cât sunt mai puține date, cu atât QR Code-ul se scanează mai ușor."],
    ["Rămâne QR Code-ul lizibil dacă este parțial deteriorat?", "Da. Datorită corecției erorilor, QR Code-ul rămâne lizibil chiar dacă aproximativ 7% până la 30% din el este deteriorat, în funcție de nivelul de corecție L, M, Q sau H folosit."]
  ],
  body: `
<p>QR Code (Quick Response Code) este un cod de bare 2D de formă pătrată, alcătuit din pătrățele mici negre și albe. Spre deosebire de codul de bare liniar, care stochează doar o duzină de cifre, un QR Code poate stoca linkul unui site, un text lung, un număr de telefon, un contact și chiar datele unei rețele WiFi.</p>
<p>QR Code a fost dezvoltat în 1994 de Denso Wave, o companie japoneză, pentru a urmări piesele de schimb auto în fabrici. Astăzi, QR Code este folosit peste tot, de la plățile digitale la meniurile restaurantelor, deoarece poate fi scanat direct cu camera telefonului.</p>

<h2>Părțile unui QR Code</h2>
<ul>
  <li><strong>Trei pătrate mari în colțuri</strong> (finder pattern): ajută camera să găsească QR Code-ul și să îi determine orientarea, astfel încât rămâne lizibil chiar dacă este scanat înclinat sau răsturnat.</li>
  <li><strong>Modelul de aliniere</strong> (alignment pattern): un pătrat mic care ajută la citirea unui QR Code îndoit sau privit dintr-un unghi.</li>
  <li><strong>Zona de date</strong>: pătrățelele mici care conțin informațiile pe care le stocați.</li>
  <li><strong>Zona liniștită</strong> (quiet zone): spațiul gol din jurul QR Code-ului, care îl separă ușor de fundal.</li>
</ul>

<h2>Câte date poate stoca?</h2>
<p>QR Code are 40 de versiuni de dimensiune. Cea mai mare versiune poate stoca până la 7.089 de cifre sau aproximativ 2.953 de octeți de date. În practică, cu cât stocați mai puține date, cu atât pătrățelele sunt mai mari și QR Code-ul se scanează mai ușor. De aceea, un link scurt este mai bun decât unul foarte lung.</p>

<h2>Rămâne lizibil chiar dacă este deteriorat</h2>
<p>QR Code folosește corecția erorilor (error correction). Există patru niveluri:</p>
<ul>
  <li><strong>L</strong>: datele pot fi recuperate dacă aproximativ 7% din QR Code este deteriorat.</li>
  <li><strong>M</strong>: aproximativ 15%. Aceasta este o alegere obișnuită și echilibrată.</li>
  <li><strong>Q</strong>: aproximativ 25%.</li>
  <li><strong>H</strong>: aproximativ 30%, potrivit pentru un QR Code căruia i se va adăuga un logo sau care va fi tipărit într-un loc care se murdărește ușor.</li>
</ul>
<p>Cu cât nivelul de corecție este mai ridicat, cu atât sunt necesare mai multe pătrățele, astfel încât modelul QR Code-ului pare mai dens.</p>

<h2>Ce se poate stoca într-un QR Code?</h2>
<ul>
  <li>Linkul unui site, al unui magazin online sau al unui formular.</li>
  <li>Date WiFi, astfel încât oaspeții se pot conecta fără să tasteze parola. Consultați ghidul <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Carte de vizită digitală (vCard), e-mail, SMS și chat WhatsApp.</li>
  <li>O locație pe hartă și programul unui eveniment.</li>
</ul>

<h2>QR Code static și dinamic</h2>
<p>Un QR Code creat direct din date se numește <strong>QR Code static</strong>: conținutul este încorporat în imagine și nu poate fi modificat, dar nici nu expiră vreodată. Un QR Code <strong>dinamic</strong> conține un link scurt al unui serviciu, care apoi redirecționează către destinația dumneavoastră; destinația poate fi schimbată, dar QR Code-ul nu va mai funcționa dacă serviciul se oprește. Pentru majoritatea nevoilor, un QR Code static este suficient și mai sigur pe termen lung.</p>

<p>Doriți să încercați? Creați acum un <a href="/?type=qrcode">QR Code gratuit</a> sau citiți <a href="/artikel/cara-membuat-qr-code-gratis">cum să creați un QR Code în 3 pași</a>.</p>
`
};
