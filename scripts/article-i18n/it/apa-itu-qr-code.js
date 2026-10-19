// apa-itu-qr-code
module.exports = {
  title: "Che cos'è un QR Code e come funziona?",
  desc: "Il QR Code può contenere link, testo e persino dati WiFi, e resta leggibile anche se in parte danneggiato. Ecco come funziona e quali sono i suoi vantaggi.",
  tags: ["Nozioni di base", "QR Code"],
  coverCaption: "Il QR Code si può scansionare direttamente con la fotocamera dello smartphone.",
  inlineCaption: "Ogni QR Code è composto da piccoli quadrati bianchi e neri.",
  faq: [
    ["Un QR Code può scadere?", "Un QR Code statico non scade mai, perché i dati sono incorporati direttamente nell'immagine. Un QR Code dinamico può smettere di funzionare se il servizio che fornisce il link chiude o se l'abbonamento termina."],
    ["Quanti dati può contenere un QR Code?", "La versione più grande del QR Code può contenere fino a 7.089 cifre o circa 2.953 byte. Tuttavia, meno dati contiene, più facile è scansionare il QR Code."],
    ["Il QR Code resta leggibile se è in parte danneggiato?", "Sì. Grazie alla correzione degli errori, il QR Code resta leggibile anche se circa il 7%-30% della sua superficie è danneggiato, a seconda del livello di correzione L, M, Q o H utilizzato."]
  ],
  body: `
<p>Il QR Code (Quick Response Code) è un codice a barre 2D di forma quadrata composto da piccoli quadrati bianchi e neri. A differenza del codice a barre lineare, che contiene solo una decina di cifre o poco più, il QR Code può contenere link a siti web, testi lunghi, numeri di telefono, contatti e persino i dati di una rete WiFi.</p>
<p>Il QR Code è stato sviluppato nel 1994 da Denso Wave, un'azienda giapponese, per tracciare i componenti dei veicoli in fabbrica. Oggi il QR Code si usa ovunque, dai pagamenti digitali ai menu dei ristoranti, perché si può scansionare direttamente con la fotocamera dello smartphone.</p>

<h2>Le parti del QR Code</h2>
<ul>
  <li><strong>Tre grandi quadrati agli angoli</strong> (finder pattern): aiutano la fotocamera a trovare il QR Code e a capirne l'orientamento, così il QR Code resta leggibile anche se inquadrato storto o capovolto.</li>
  <li><strong>Schema di allineamento</strong> (alignment pattern): un piccolo quadrato che aiuta a leggere i QR Code piegati o visti di sbieco.</li>
  <li><strong>Area dati</strong>: i piccoli quadrati che contengono le informazioni memorizzate.</li>
  <li><strong>Zona di rispetto</strong> (quiet zone): lo spazio vuoto intorno al QR Code, che lo rende facile da distinguere dallo sfondo.</li>
</ul>

<h2>Quanti dati può contenere?</h2>
<p>Il QR Code ha 40 versioni di dimensione. La versione più grande può contenere fino a 7.089 cifre o circa 2.953 byte di dati. In pratica, meno dati si memorizzano, più grandi sono i quadrati e più facile è scansionare il QR Code. Per questo un link breve è preferibile a un link molto lungo.</p>

<h2>Leggibile anche se danneggiato</h2>
<p>Il QR Code utilizza la correzione degli errori (error correction). I livelli sono quattro:</p>
<ul>
  <li><strong>L</strong>: i dati si possono ancora recuperare se circa il 7% del QR Code è danneggiato.</li>
  <li><strong>M</strong>: circa il 15%. È la scelta più comune ed equilibrata.</li>
  <li><strong>Q</strong>: circa il 25%.</li>
  <li><strong>H</strong>: circa il 30%, adatto ai QR Code che riporteranno un logo o che verranno stampati in luoghi dove si sporcano facilmente.</li>
</ul>
<p>Più alto è il livello di correzione, più quadrati sono necessari, e lo schema del QR Code appare più fitto.</p>

<h2>Che cosa si può memorizzare in un QR Code?</h2>
<ul>
  <li>Link a siti, negozi online o moduli.</li>
  <li>Dati WiFi, così gli ospiti possono connettersi senza digitare la password. Veda la guida al <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Biglietti da visita digitali (vCard), e-mail, SMS e chat WhatsApp.</li>
  <li>Posizioni sulla mappa e appuntamenti di eventi.</li>
</ul>

<h2>QR Code statici e dinamici</h2>
<p>Il QR Code creato direttamente a partire dai dati si chiama <strong>QR Code statico</strong>: il contenuto è incorporato nell'immagine e non si può modificare, ma non scade mai. Il QR Code <strong>dinamico</strong> contiene un link breve di un servizio che poi reindirizza alla destinazione desiderata; la destinazione si può cambiare, ma il QR Code smette di funzionare se il servizio chiude. Per la maggior parte delle esigenze, il QR Code statico è sufficiente e più sicuro nel lungo periodo.</p>

<p>Vuole provare? Crei subito un <a href="/?type=qrcode">QR Code gratuito</a> oppure legga <a href="/artikel/cara-membuat-qr-code-gratis">come creare un QR Code in 3 passaggi</a>.</p>
`
};
