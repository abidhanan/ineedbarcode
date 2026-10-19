// cara-membuat-qr-code-wifi
module.exports = {
  title: "Come creare un QR Code WiFi così gli ospiti non devono digitare la password",
  desc: "Agli ospiti basta scansionare un QR Code per connettersi al WiFi. Ideale per bar, uffici, strutture ricettive e abitazioni. Ecco come crearlo e dove posizionarlo.",
  tags: ["Guida", "QR Code"],
  coverCaption: "I dati WiFi del router si possono memorizzare in un unico QR Code.",
  inlineCaption: "I clienti del bar possono connettersi subito senza digitare la password.",
  faq: [
    ["Tutti gli smartphone possono scansionare un QR Code WiFi?", "La fotocamera integrata dell'iPhone con iOS 11 o versioni successive e la maggior parte dei dispositivi con Android 10 o versioni successive possono leggerlo direttamente. Gli smartphone più vecchi potrebbero richiedere un'app per la scansione dei QR."],
    ["Il QR Code WiFi è sicuro?", "Chiunque scansioni quel QR Code può connettersi al Suo WiFi. Per questo usi una rete per gli ospiti e non esponga il QR Code della Sua rete privata in luoghi pubblici."],
    ["Che cosa bisogna fare se si cambia la password del WiFi?", "Crei e ristampi il QR Code WiFi, perché il vecchio QR Code contiene ancora la vecchia password."]
  ],
  body: `
<p>Dettare agli ospiti una lunga password del WiFi è spesso scomodo, soprattutto se contiene maiuscole, numeri e simboli. Con un <strong>QR Code WiFi</strong>, all'ospite basta inquadrare il QR Code con la fotocamera dello smartphone per connettersi subito.</p>

<h2>Come funziona il QR Code WiFi</h2>
<p>Il QR Code WiFi memorizza il nome della rete (SSID), il tipo di sicurezza e la password in un formato speciale riconosciuto dagli smartphone, ad esempio <code>WIFI:T:WPA;S:NomeRete;P:Password;;</code>. La fotocamera integrata dell'iPhone (iOS 11 o successivo) e la maggior parte dei dispositivi Android (Android 10 o successivo) possono leggerlo direttamente, senza app aggiuntive.</p>

<h2>Come crearlo</h2>
<ol>
  <li>Apra il <a href="/?type=qrcode">generatore di QR Code</a> e selezioni la scheda <strong>WiFi</strong> nella sezione Dati.</li>
  <li>Digiti il <strong>nome della rete</strong> esattamente come appare nell'elenco delle reti WiFi, rispettando maiuscole e minuscole.</li>
  <li>Digiti la <strong>password</strong> e scelga il tipo di sicurezza. La maggior parte dei router domestici e aziendali usa WPA/WPA2/WPA3.</li>
  <li>Spunti <strong>Rete nascosta</strong> se il nome del Suo WiFi non compare nell'elenco.</li>
  <li>Aggiunga una cornice con una scritta come "SCAN WIFI" perché gli ospiti ne capiscano la funzione, poi scarichi il PNG.</li>
</ol>

<h2>Dove posizionarlo?</h2>
<ul>
  <li>Su un cartoncino sui tavoli del bar o del ristorante.</li>
  <li>Sulla parete della sala d'attesa, alla reception o nella sala riunioni dell'ufficio.</li>
  <li>Nelle camere delle strutture ricettive, vicino alla porta o alla TV.</li>
  <li>Sotto il router di casa, così i familiari possono connettere facilmente i nuovi dispositivi.</li>
</ul>

<h2>Consigli per la sicurezza</h2>
<ul>
  <li>Usi una <strong>rete per gli ospiti</strong> (guest network) se il Suo router la supporta, in modo che gli ospiti non accedano alla stessa rete dei computer dell'ufficio.</li>
  <li>Se cambia la password del WiFi, crei e ristampi il QR Code, perché quello vecchio conterrà la vecchia password.</li>
  <li>Non esponga un QR Code WiFi della Sua rete privata in luoghi pubblici dove chiunque potrebbe fotografarlo.</li>
</ul>

<h2>Se il QR Code non si connette</h2>
<p>Ricontrolli l'ortografia del nome della rete e della password, perché basta una lettera sbagliata per impedire allo smartphone di connettersi. Verifichi anche che il tipo di sicurezza scelto corrisponda alle impostazioni del router. Per altri problemi di scansione, legga <a href="/artikel/barcode-tidak-bisa-dipindai">perché un codice a barre non si legge</a>.</p>
`
};
