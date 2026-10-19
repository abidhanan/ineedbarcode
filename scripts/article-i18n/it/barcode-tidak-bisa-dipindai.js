// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 motivi per cui un codice a barre non si legge e come risolverli",
  desc: "Il codice a barre o il QR Code non viene letto? Ecco le sette cause più frequenti, dal contrasto dei colori alle dimensioni, e come rimediare.",
  tags: ["Consigli", "Codici a barre"],
  coverCaption: "Contrasto e dimensioni determinano se un QR Code è facile da scansionare.",
  inlineCaption: "In magazzino, un codice a barre che non si legge rallenta il lavoro.",
  faq: [
    ["Perché il QR Code si legge con uno smartphone ma non con un altro?", "Le fotocamere e le app di scansione hanno capacità diverse. I QR Code troppo piccoli, poco contrastati o con i colori invertiti falliscono più spesso su alcuni smartphone. Li provi con più smartphone prima di stampare."],
    ["I codici a barre colorati si possono leggere?", "Sì, purché il colore sia scuro su sfondo chiaro. Eviti il rosso per le barre, perché molti scanner di cassa usano luce rossa."],
    ["Come si verifica che un codice a barre sia corretto?", "Scansioni la stampa con diversi smartphone o scanner e si assicuri che i dati letti siano esattamente uguali a quelli inseriti."]
  ],
  body: `
<p>Non c'è niente di più frustrante che stampare centinaia di fogli con un codice a barre e scoprire poi che non si riesce a leggerlo. La buona notizia è che di solito la causa è semplice e facile da prevenire. Ecco le sette cause più frequenti.</p>

<h2>1. Contrasto dei colori troppo basso</h2>
<p>Lo scanner legge la differenza tra scuro e chiaro. Un codice a barre grigio chiaro su bianco, o blu scuro su nero, è difficile da distinguere. <strong>Soluzione:</strong> usi un colore scuro su sfondo chiaro. Nero su bianco è la scelta più sicura.</p>

<h2>2. Colori invertiti o colore rosso</h2>
<p>Un codice a barre chiaro su sfondo scuro non è supportato da tutti gli scanner. Inoltre, molti scanner di cassa usano luce rossa, per cui le barre rosse appaiono uguali allo sfondo bianco. <strong>Soluzione:</strong> eviti il rosso per le barre o i moduli del codice a barre e non inverta i colori.</p>

<h2>3. Dimensioni troppo piccole</h2>
<p>La fotocamera ha bisogno di pixel sufficienti per riconoscere ogni modulo. <strong>Soluzione:</strong> ingrandisca il codice a barre. Per un QR Code scansionato da vicino, usi almeno circa 2 × 2 cm. Consulti la <a href="/artikel/ukuran-barcode-untuk-dicetak">guida alle dimensioni di stampa</a>.</p>

<h2>4. Manca la zona di rispetto</h2>
<p>Un codice a barre attaccato a immagini, testo o al bordo del foglio è difficile da separare da ciò che lo circonda. <strong>Soluzione:</strong> lasci uno spazio vuoto intorno al codice a barre, soprattutto a sinistra e a destra dei codici a barre lineari.</p>

<h2>5. Immagine sfocata o distorta</h2>
<p>Un codice a barre ingrandito da un'immagine piccola, salvato come JPG di bassa qualità o stirato in modo non proporzionale perde la sua forma. <strong>Soluzione:</strong> lo scarichi con un modulo più grande in formato PNG e lo ridimensioni sempre in modo proporzionale.</p>

<h2>6. Dati errati o non adatti al tipo</h2>
<p>Ogni tipo di codice a barre ha le sue regole. L'EAN-13, ad esempio, accetta solo 12 o 13 cifre con la cifra di controllo corretta. Anche un link digitato male fa sì che il QR Code venga letto ma non apra nulla. <strong>Soluzione:</strong> controlli i dati prima di stampare. Il generatore di <a href="/">I Need Barcode</a> mostra un messaggio se i dati non rispettano le regole del tipo di codice a barre scelto.</p>

<h2>7. Superficie e illuminazione</h2>
<p>Materiali lucidi, plastica trasparente, pieghe e superfici curve possono riflettere la luce o deformare il codice a barre. <strong>Soluzione:</strong> stampi su una superficie piana e opaca e faccia una prova nelle condizioni di luce reali.</p>

<h2>A proposito dei QR Code personalizzati</h2>
<p>Un QR Code con forme, colori o cornici resta leggibile purché i tre quadrati di riferimento agli angoli siano integri e il contrasto sia sufficiente. Approfondisca in <a href="/artikel/desain-qr-code-kreatif">design creativo dei QR Code che restano leggibili</a>.</p>
<p>L'abitudine migliore: <strong>provi sempre una stampa</strong> con diversi smartphone e scanner prima di stampare in grandi quantità.</p>
`
};
