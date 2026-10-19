// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Dimensioni e risoluzione corrette dei codici a barre per la stampa",
  desc: "Un codice a barre troppo piccolo o sfocato è difficile da scansionare. Scopra le dimensioni minime, la regola della distanza di scansione e la risoluzione d'immagine sicura per la stampa.",
  tags: ["Guida", "Stampa"],
  coverCaption: "La stampante di etichette stampa codici a barre per pacchi e confezioni.",
  inlineCaption: "Le dimensioni dell'etichetta determinano quanto può essere grande il codice a barre stampato.",
  faq: [
    ["Qual è la dimensione minima di un QR Code da stampare?", "Per la scansione da vicino, circa 2 × 2 cm è il limite sicuro. Per distanze maggiori, usi un rapporto di circa 10 : 1 tra distanza di scansione e larghezza del QR Code."],
    ["Qual è la dimensione standard di un codice a barre EAN-13?", "La dimensione standard dell'EAN-13 è di circa 37,3 × 25,9 mm. Può essere ridotta fino a circa l'80% o ingrandita fino al 200%."],
    ["Perché il codice a barre risulta sfocato dopo la stampa?", "Di solito perché l'immagine era piccola ed è stata ingrandita, oppure è stata salvata come JPG di bassa qualità. Lo scarichi con un modulo più grande in formato PNG."]
  ],
  body: `
<p>Un codice a barre che appare bene sullo schermo non è detto che sia leggibile una volta stampato. Dimensioni troppo piccole, una risoluzione bassa o l'inchiostro che sbava possono impedire allo scanner di leggerlo. Ecco una guida per mantenere leggibili le Sue stampe.</p>

<h2>Conosca il modulo</h2>
<p>Il <strong>modulo</strong> è l'unità più piccola di un codice a barre, cioè un quadratino nel QR Code o la barra più sottile nel codice a barre lineare. La dimensione del modulo determina quanto è facile leggere il codice a barre. Su <a href="/">I Need Barcode</a> la dimensione del modulo si regola nella sezione Impostazioni: più alto è il valore, più grande e nitida è l'immagine scaricata.</p>

<h2>Dimensione minima del QR Code</h2>
<ul>
  <li>Per la scansione da vicino (ad esempio biglietti da visita o etichette di prodotti), circa <strong>2 × 2 cm</strong> è il limite sicuro.</li>
  <li>Usi la regola del rapporto di circa <strong>10 : 1</strong>: la distanza di scansione è circa dieci volte la larghezza del QR Code. Per un poster scansionato da 2 metri, crei un QR Code di almeno 20 cm circa.</li>
  <li>Più dati si memorizzano, più fitto diventa lo schema, e quindi serve una dimensione maggiore.</li>
</ul>

<h2>Dimensioni dei codici a barre dei prodotti</h2>
<p>La dimensione standard dell'<a href="/?type=ean13">EAN-13</a> è di circa 37,3 × 25,9 mm (100%). Può essere ridotta fino a circa l'80% o ingrandita fino al 200%. Eviti di accorciare troppo l'altezza delle barre, perché lo scanner di cassa ha bisogno di spazio per leggere da diverse angolazioni.</p>

<h2>Risoluzione dell'immagine</h2>
<ul>
  <li>Per la stampa, faccia in modo che ogni modulo sia disegnato con <strong>diversi pixel interi</strong>, non con frazioni di pixel. Scelga un modulo più grande al momento del download e poi lo rimpicciolisca nel programma di grafica, non il contrario.</li>
  <li>Eviti di ingrandire un'immagine piccola di codice a barre, perché i bordi dei quadrati diventano sfocati o seghettati.</li>
  <li>Salvi in formato PNG, così colori e bordi non si deteriorano come accade con il JPG.</li>
</ul>

<h2>Zona di rispetto</h2>
<p>Ogni codice a barre ha bisogno di uno spazio vuoto intorno, chiamato <strong>zona di rispetto</strong> (quiet zone). Per il QR Code, idealmente deve essere larga quattro moduli. Per il codice a barre lineare, lo spazio vuoto a sinistra e a destra è molto importante. Non avvicini troppo testi, linee decorative o il bordo della confezione.</p>

<h2>Colori e materiali</h2>
<ul>
  <li>Usi un colore scuro per il codice a barre e un colore chiaro per lo sfondo.</li>
  <li>Eviti materiali lucidi o trasparenti, perché i riflessi di luce possono disturbare la fotocamera.</li>
  <li>Stampi sempre un campione e lo provi con diversi smartphone o scanner prima di stampare in quantità.</li>
</ul>
<p>Se il Suo codice a barre resta difficile da scansionare, consulti <a href="/artikel/barcode-tidak-bisa-dipindai">7 motivi per cui un codice a barre non si legge</a>.</p>
`
};
