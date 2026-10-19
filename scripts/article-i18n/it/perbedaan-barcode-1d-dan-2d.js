// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Differenza tra codici a barre 1D e 2D: quale Le serve?",
  desc: "Il codice a barre lineare e il QR Code sono entrambi codici a barre, ma hanno usi diversi. Confronti capacità, modalità di scansione ed esempi di utilizzo.",
  tags: ["Nozioni di base", "Codici a barre"],
  coverCaption: "Lo scanner portatile del magazzino legge codici a barre 1D e 2D.",
  inlineCaption: "Le etichette di spedizione di solito usano codici a barre lineari.",
  faq: [
    ["Lo scanner della cassa può leggere i QR Code?", "Non tutti. Gli scanner laser 1D leggono solo i codici a barre lineari. Per i QR Code serve uno scanner 2D basato su fotocamera oppure la fotocamera dello smartphone."],
    ["Qual è il codice a barre più piccolo?", "Il Data Matrix è un codice a barre 2D che si può stampare in dimensioni molto ridotte, per questo è spesso usato su componenti elettronici, dispositivi medici ed etichette dei farmaci."],
    ["Si può usare un QR Code al posto dell'EAN-13 sui prodotti di vendita al dettaglio?", "Per essere venduto nei negozi, il prodotto ha comunque bisogno di un EAN-13 o di un UPC registrato. Il QR Code si può aggiungere sulla confezione come complemento, ad esempio per informazioni sul prodotto o promozioni."]
  ],
  body: `
<p>Quando si crea un codice a barre, la prima domanda che di solito sorge è: meglio un codice a barre lineare o un QR Code? Entrambi si chiamano codici a barre, ma memorizzano i dati in modo diverso e quindi hanno usi diversi.</p>

<h2>Codici a barre 1D (lineari)</h2>
<p>Il codice a barre 1D è formato da linee verticali. I dati sono memorizzati in una sola direzione, da sinistra a destra. Gli esempi più noti sono l'<a href="/?type=ean13">EAN-13</a> sulle confezioni dei prodotti e il <a href="/?type=code128">Code 128</a> sulle etichette di spedizione.</p>
<ul>
  <li>Capacità ridotta, di solito da una decina a qualche decina di caratteri.</li>
  <li>Si possono leggere con gli scanner laser di cassa, economici e molto veloci.</li>
  <li>Adatti a codici prodotto, numeri di serie e numeri di spedizione.</li>
</ul>

<h2>Codici a barre 2D</h2>
<p>Il codice a barre 2D memorizza i dati in due direzioni, in orizzontale e in verticale, quindi può contenere molte più informazioni. Ne sono esempi il <a href="/?type=qrcode">QR Code</a>, il <a href="/?type=datamatrix">Data Matrix</a>, il <a href="/?type=pdf417">PDF417</a> e l'<a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Grande capacità, da decine a migliaia di caratteri.</li>
  <li>Si possono scansionare con la fotocamera dello smartphone da qualsiasi direzione.</li>
  <li>Dispongono della correzione degli errori, quindi restano leggibili anche se in parte danneggiati.</li>
  <li>Possono essere molto piccoli, come il Data Matrix sui componenti elettronici.</li>
</ul>

<h2>Confronto rapido</h2>
<table>
  <thead><tr><th></th><th>Codice a barre 1D</th><th>Codice a barre 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Linee verticali</td><td>Quadrati/punti all'interno di un quadrato</td></tr>
    <tr><td>Capacità</td><td>Ridotta</td><td>Elevata</td></tr>
    <tr><td>Dispositivo di scansione</td><td>Scanner laser o fotocamera</td><td>Fotocamera o scanner 2D</td></tr>
    <tr><td>Resistenza ai danni</td><td>Limitata</td><td>Correzione degli errori</td></tr>
    <tr><td>Esempi</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Quando usare l'uno o l'altro?</h2>
<ul>
  <li><strong>Prodotti venduti in negozi o minimarket</strong>: usi un EAN-13 ufficiale rilasciato da GS1. Veda <a href="/artikel/cara-mendapatkan-barcode-ean-13">come ottenere un codice a barre EAN-13</a>.</li>
  <li><strong>Etichette di magazzino, scaffale o spedizione</strong>: il Code 128 è la scelta più comune perché è compatto e supporta lettere e numeri.</li>
  <li><strong>Link, menu, WiFi o contatti per i clienti</strong>: il QR Code, perché si può scansionare direttamente con la fotocamera dello smartphone.</li>
  <li><strong>Etichette molto piccole</strong>: Data Matrix.</li>
  <li><strong>Documenti d'identità, carte d'imbarco o documenti</strong>: PDF417 o Aztec.</li>
</ul>
<p>Può creare gratuitamente tutti i tipi indicati su <a href="/">I Need Barcode</a>. Se ha ancora dubbi, inizi con il QR Code per le esigenze dei clienti e con il Code 128 per le esigenze interne.</p>
`
};
