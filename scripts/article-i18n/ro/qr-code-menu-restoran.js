// qr-code-menu-restoran
module.exports = {
  title: "QR Code pentru meniul restaurantului: ghid complet",
  desc: "Meniul digital prin QR Code le ușurează viața clienților și reduce costurile de tipărire. Iată cum îl creați, cum pregătiți meniul și cum îl plasați pe mese.",
  tags: ["Afaceri", "QR Code"],
  coverCaption: "QR Code-ul de pe masă îi duce pe clienți direct la meniul digital.",
  inlineCaption: "Plasați QR Code-ul într-un loc ușor de atins de pe scaun.",
  faq: [
    ["Ce este mai bine pentru un meniu digital: PDF sau pagină web?", "O pagină web este de obicei mai comodă de citit pe telefon și se deschide mai repede. Un PDF poate fi folosit dacă are dimensiune mică și textul este suficient de mare pe ecran."],
    ["Ce dimensiune trebuie să aibă QR Code-ul pentru meniu de pe masă?", "Aproximativ 3 până la 5 cm sunt suficienți pentru scanarea de pe scaun. Folosiți un material rezistent la vărsarea lichidelor și nu prea lucios."],
    ["Trebuie retipărit QR Code-ul când se schimbă meniul?", "Nu, atât timp cât linkul rămâne același. Este suficient să actualizați conținutul paginii sau al fișierului de meniu către care duce QR Code-ul."]
  ],
  body: `
<p>Meniul digital prin QR Code a devenit ceva obișnuit în cafenele și restaurante. Clienții trebuie doar să scaneze QR Code-ul de pe masă pentru a vedea lista de preparate, prețurile și fotografiile. Pentru proprietari, această metodă reduce costurile de tipărire și facilitează schimbarea prețurilor sau a meniului.</p>

<h2>Avantajele unui meniu cu QR Code</h2>
<ul>
  <li><strong>Ușor de actualizat</strong>: schimbați prețuri sau adăugați preparate fără să retipăriți meniul.</li>
  <li><strong>Economie de costuri</strong>: este suficient să tipăriți un QR Code mic pentru fiecare masă.</li>
  <li><strong>Mai informativ</strong>: afișați fotografii, descrieri și etichete precum picant sau vegetarian.</li>
  <li><strong>Permite comenzi online</strong>: direcționați clienții către un formular de comandă sau către WhatsApp.</li>
</ul>

<h2>Pasul 1: Pregătiți meniul online</h2>
<p>QR Code-ul conține doar un link, așa că aveți nevoie de un meniu care poate fi deschis pe internet. Opțiunile includ, printre altele, o pagină pe site-ul propriu, un fișier PDF într-un spațiu de stocare online partajat public sau o pagină de catalog pe o platformă de comenzi. Asigurați-vă că meniul se citește comod pe ecranul telefonului: text suficient de mare, fotografii nu prea grele și prețuri clare.</p>

<h2>Pasul 2: Creați QR Code-ul</h2>
<ol>
  <li>Copiați linkul meniului dumneavoastră.</li>
  <li>Deschideți <a href="/?type=qrcode">generatorul de QR Code</a>, alegeți fila <strong>URL</strong>, apoi lipiți linkul.</li>
  <li>Adăugați în secțiunea Design un cadru cu textul „MENIU” sau „SCANAȚI PENTRU MENIU”.</li>
  <li>Adaptați culorile la identitatea restaurantului, dar folosiți în continuare o culoare închisă pe un fundal deschis.</li>
  <li>Descărcați PNG-ul cu o dimensiune a modulului suficient de mare pentru tipărire.</li>
</ol>
<p>Folosiți un link care nu se va schimba. Dacă meniul este mutat la o altă adresă, QR Code-ul deja tipărit nu mai poate fi actualizat. Explicația se află în articolul <a href="/artikel/apa-itu-qr-code">ce este un QR Code</a>.</p>

<h2>Pasul 3: Tipăriți și plasați</h2>
<ul>
  <li>Tipăriți la o dimensiune de cel puțin aproximativ 3–5 cm, astfel încât să poată fi scanat ușor de pe scaun.</li>
  <li>Folosiți un material rezistent la vărsarea lichidelor, precum autocolantul din vinil sau un card laminat fără luciu excesiv.</li>
  <li>Plasați-l într-o poziție ușor accesibilă, de exemplu pe un suport acrilic în mijlocul mesei.</li>
  <li>Adăugați numărul mesei lângă QR Code dacă clienții comandă prin chat.</li>
</ul>

<h2>Nu uitați de clienții fără telefon</h2>
<p>Pregătiți unul sau două meniuri tipărite pentru clienții care nu au telefonul la ei, au bateria descărcată sau preferă să citească un meniu fizic.</p>
<p>Puteți crea și un <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a> pentru oaspeți și îl puteți plasa lângă QR Code-ul meniului.</p>
`
};
