// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Come ottenere un codice a barre EAN-13 per i prodotti delle piccole imprese",
  desc: "Vuole che il Suo prodotto arrivi nei minimarket o nei supermercati? Scopra il significato delle cifre dell'EAN-13, come registrare un numero ufficiale presso GS1 Indonesia e come stamparlo.",
  tags: ["Business", "Retail"],
  coverCaption: "Le confezioni dei prodotti di vendita al dettaglio richiedono un codice a barre EAN-13 registrato.",
  inlineCaption: "I negozi riconoscono il prodotto dal numero EAN-13 nel loro sistema di cassa.",
  faq: [
    ["Posso creare da solo un numero EAN-13?", "L'immagine del codice a barre può crearla da sé, ma è meglio che il numero sia ufficiale, rilasciato da GS1. Un numero inventato può coincidere con quello di un altro prodotto ed essere rifiutato dai negozi."],
    ["Ogni variante del prodotto richiede un codice a barre diverso?", "Sì. Ogni variante diversa, ad esempio per gusto, formato o contenuto della confezione, richiede un proprio numero EAN-13."],
    ["Che cos'è la cifra di controllo dell'EAN-13?", "La cifra di controllo è la 13ª cifra, calcolata a partire dalle 12 precedenti. Lo scanner la usa per assicurarsi che il codice a barre sia stato letto correttamente. Il generatore di I Need Barcode la calcola automaticamente se inserisce 12 cifre."]
  ],
  body: `
<p>Se desidera vendere il Suo prodotto nei minimarket, nei supermercati o sui grandi marketplace, di solito Le verrà chiesto di riportare un codice a barre <strong>EAN-13</strong> sulla confezione. Questo codice a barre contiene 13 cifre che costituiscono l'identità univoca del Suo prodotto in tutto il mondo.</p>

<h2>Il significato delle 13 cifre dell'EAN-13</h2>
<ul>
  <li><strong>Prefisso GS1</strong>: le prime tre cifre indicano l'organizzazione GS1 che ha rilasciato il numero. I numeri rilasciati da GS1 Indonesia iniziano con <strong>899</strong>.</li>
  <li><strong>Numero dell'azienda</strong>: l'identificativo della Sua azienda, assegnato al momento della registrazione.</li>
  <li><strong>Numero del prodotto</strong>: stabilito dall'azienda stessa per ogni variante del prodotto, ad esempio per gusto o formato diverso.</li>
  <li><strong>Cifra di controllo</strong>: l'ultima cifra, calcolata automaticamente dalle 12 cifre precedenti per evitare errori di lettura.</li>
</ul>

<h2>Perché serve un numero ufficiale?</h2>
<p>Chiunque può disegnare un codice a barre EAN-13, ma il <strong>numero</strong> deve essere registrato. I negozi usano quel numero per riconoscere il prodotto nei loro sistemi. Se inventa un numero, potrebbe coincidere con il prodotto di un'altra azienda ed essere rifiutato al momento dell'inserimento del prodotto nel negozio.</p>

<h2>Come registrare un numero presso GS1 Indonesia</h2>
<ol>
  <li>Prepari i documenti dell'azienda, come il NIB (numero di registrazione dell'impresa indonesiano) e l'NPWP (codice fiscale), oltre all'elenco dei prodotti a cui assegnare il codice a barre.</li>
  <li>Registri l'azienda tramite il sito ufficiale di GS1 Indonesia e scelga la quantità di numeri necessaria.</li>
  <li>Paghi la quota di registrazione e il contributo annuale secondo le condizioni in vigore.</li>
  <li>Una volta approvata la richiesta, riceverà il numero dell'azienda e potrà creare i numeri per ciascun prodotto.</li>
</ol>
<p>Requisiti e costi possono cambiare, quindi verifichi sempre le informazioni più aggiornate direttamente sul sito di GS1 Indonesia.</p>

<h2>Creare l'immagine del codice a barre</h2>
<p>Una volta ottenuto il numero, apra il <a href="/?type=ean13">generatore di EAN-13</a> e inserisca le 12 o 13 cifre del numero del Suo prodotto. Se inserisce 12 cifre, la cifra di controllo verrà calcolata automaticamente. Si assicuri che l'opzione del testo sotto il codice a barre sia attiva, in modo che le cifre vengano stampate, poi lo scarichi in formato PNG.</p>

<h2>Consigli per la stampa sulla confezione</h2>
<ul>
  <li>Usi barre nere o blu scuro su sfondo bianco. Eviti il rosso per le barre, perché molti scanner di cassa usano luce rossa e le barre rosse non vengono lette.</li>
  <li>Non rimpicciolisca eccessivamente il codice a barre. La dimensione standard dell'EAN-13 è di circa 37,3 × 25,9 mm e può essere ridotta fino a circa l'80%. Maggiori dettagli nella <a href="/artikel/ukuran-barcode-untuk-dicetak">guida alle dimensioni dei codici a barre</a>.</li>
  <li>Lasci uno spazio vuoto a sinistra e a destra del codice a barre ed eviti di posizionarlo su pieghe o giunture della confezione.</li>
  <li>Provi la stampa con uno scanner prima di stampare in grandi quantità.</li>
</ul>
<p>Per i prodotti venduti in Nord America, potrebbe esserLe richiesto anche l'<a href="/?type=upca">UPC-A</a>, che contiene 12 cifre.</p>
`
};
