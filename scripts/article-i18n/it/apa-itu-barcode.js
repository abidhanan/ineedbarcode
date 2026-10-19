// apa-itu-barcode
module.exports = {
  title: "Che cos'è un codice a barre? Definizione, funzionamento e tipi",
  desc: "Il codice a barre è presente su quasi tutti i prodotti che acquista. Scopra come funziona, la sua breve storia e i tipi di codice a barre più utilizzati.",
  tags: ["Nozioni di base", "Codici a barre"],
  coverCaption: "Il codice a barre sulla confezione contiene il codice univoco del prodotto.",
  inlineCaption: "Alla cassa si usa uno scanner per leggere il codice a barre in un attimo.",
  faq: [
    ["Qual è la differenza tra codice a barre e QR Code?", "Il QR Code è un tipo di codice a barre, cioè un codice a barre 2D. Il codice a barre lineare (1D) contiene pochi caratteri e si legge da sinistra a destra, mentre il QR Code memorizza i dati in due direzioni e può quindi contenere link, testo o dati WiFi."],
    ["Il codice a barre contiene il prezzo del prodotto?", "Di solito no. Il codice a barre del prodotto contiene solo un codice. Il prezzo e il nome del prodotto sono memorizzati nel sistema di cassa e vengono recuperati in base al codice scansionato."],
    ["Creare un codice a barre è a pagamento?", "No. L'immagine del codice a barre si può creare gratuitamente, ad esempio su I Need Barcode. A pagamento è soltanto la registrazione del numero ufficiale per i codici a barre dei prodotti di vendita al dettaglio, come l'EAN-13, tramite GS1."]
  ],
  body: `
<p>Il codice a barre è un modo per scrivere dati sotto forma di uno schema leggibile dalle macchine. Lo schema è di solito composto da linee bianche e nere di larghezza diversa, oppure da piccoli quadrati disposti all'interno di un quadrato. Quando viene scansionato, lo schema viene ritrasformato in numeri o testo, ad esempio un codice prodotto, un numero di spedizione o l'indirizzo di un sito.</p>
<p>Poiché viene letto dalle macchine, il codice a barre è molto più rapido e meno soggetto a errori rispetto alla digitazione manuale di un codice. Per questo è utilizzato alle casse, nei magazzini, negli ospedali, sui biglietti e persino sulle confezioni alimentari.</p>

<h2>Breve storia del codice a barre</h2>
<p>L'idea del codice a barre fu brevettata nel 1952 da Norman Joseph Woodland e Bernard Silver negli Stati Uniti. Il codice a barre entrò davvero in uso nei negozi solo nel 1974, quando una confezione di gomme da masticare fu scansionata in un supermercato dell'Ohio con un codice UPC. Da allora il codice a barre si è diffuso in tutto il mondo e oggi è gestito a livello globale da un'organizzazione di standardizzazione chiamata GS1.</p>

<h2>Come funziona il codice a barre?</h2>
<p>Lo scanner illumina il codice a barre e ne legge il riflesso. Le parti scure riflettono poca luce, quelle chiare ne riflettono molta. Questa differenza viene convertita in una sequenza di 0 e 1, che viene poi confrontata con le regole di quel tipo di codice a barre. Molti codici a barre hanno anche una <strong>cifra di controllo</strong> (check digit), cioè l'ultima cifra, calcolata a partire dalle cifre precedenti. Se il risultato del calcolo non corrisponde, lo scanner capisce che c'è un errore e scarta la lettura.</p>
<p>Il codice a barre in sé di solito contiene solo un codice. Informazioni come il nome del prodotto o il prezzo sono memorizzate nel sistema di cassa o in un database e vengono recuperate in base a quel codice.</p>

<h2>I tipi di codice a barre più utilizzati</h2>
<p>In generale, i codici a barre si dividono in due grandi gruppi:</p>
<ul>
  <li><strong>Codici a barre 1D (lineari)</strong>: formati da linee verticali che si leggono da sinistra a destra. Ne sono esempi l'<a href="/?type=ean13">EAN-13</a> e l'<a href="/?type=upca">UPC-A</a> per i prodotti di vendita al dettaglio, oltre al <a href="/?type=code128">Code 128</a> e al <a href="/?type=code39">Code 39</a> per la logistica e i magazzini.</li>
  <li><strong>Codici a barre 2D</strong>: formati da uno schema di quadrati che memorizza i dati in due direzioni, quindi possono contenere molte più informazioni. Ne sono esempi il <a href="/?type=qrcode">QR Code</a>, il <a href="/?type=datamatrix">Data Matrix</a>, il <a href="/?type=pdf417">PDF417</a> e l'<a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Esistono inoltre codici a barre specifici per le poste e le spedizioni, per il settore sanitario, oltre agli standard GS1 per la catena di approvvigionamento. Una spiegazione più dettagliata delle differenze è disponibile nell'articolo <a href="/artikel/perbedaan-barcode-1d-dan-2d">Differenza tra codici a barre 1D e 2D</a>.</p>

<h2>A che cosa servono i codici a barre?</h2>
<ul>
  <li><strong>Vendita al dettaglio</strong>: velocizzano la cassa e registrano automaticamente le scorte.</li>
  <li><strong>Magazzini e spedizioni</strong>: permettono di tracciare merci e pacchi da un luogo all'altro.</li>
  <li><strong>Biglietti ed eventi</strong>: verificano l'autenticità dei biglietti con una sola scansione.</li>
  <li><strong>Marketing</strong>: un QR Code su volantini o confezioni porta le persone direttamente al Suo sito, al Suo menu o al Suo WhatsApp.</li>
</ul>

<h2>Creare un codice a barre da sé</h2>
<p>Non serve un'app a pagamento per creare codici a barre. Su <a href="/">I Need Barcode</a> scelga il tipo di codice a barre, inserisca i dati e lo scarichi come immagine PNG. Sono disponibili oltre 100 tipi, tutti gratuiti e senza registrazione.</p>
`
};
