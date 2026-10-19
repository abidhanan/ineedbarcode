// apa-itu-barcode
module.exports = {
  title: "Was ist ein Barcode? Definition, Funktionsweise und Arten",
  desc: "Barcodes finden sich auf fast jedem Produkt, das Sie kaufen. Erfahren Sie, wie sie funktionieren, wie sie entstanden sind und welche Barcode-Arten am häufigsten verwendet werden.",
  tags: ["Grundlagen", "Barcode"],
  coverCaption: "Der Barcode auf der Verpackung enthält den eindeutigen Code des Produkts.",
  inlineCaption: "An der Kasse wird der Barcode mit einem Scanner im Handumdrehen gelesen.",
  faq: [
    ["Was ist der Unterschied zwischen einem Barcode und einem QR Code?", "Ein QR Code ist eine Art von Barcode, nämlich ein 2D-Barcode. Ein Strichcode (1D) speichert nur wenige Zeichen und wird von links nach rechts gelesen, während ein QR Code Daten in zwei Richtungen speichert und daher Links, Texte oder WiFi-Daten aufnehmen kann."],
    ["Enthält ein Barcode den Preis des Produkts?", "In der Regel nicht. Ein Produktbarcode enthält nur einen Code. Preis und Produktname sind im Kassensystem gespeichert und werden anhand des gescannten Codes abgerufen."],
    ["Muss man für die Erstellung eines Barcodes bezahlen?", "Nein. Das Barcode-Bild können Sie kostenlos erstellen, zum Beispiel bei I Need Barcode. Kostenpflichtig registriert werden muss nur die offizielle Nummer für Barcodes von Handelsprodukten wie EAN-13, und zwar über GS1."]
  ],
  body: `
<p>Ein Barcode ist eine Möglichkeit, Daten in Form eines maschinenlesbaren Musters darzustellen. Dieses Muster besteht meist aus schwarzen und weißen Strichen unterschiedlicher Breite oder aus kleinen Quadraten, die in einem Viereck angeordnet sind. Beim Scannen wird das Muster wieder in Zahlen oder Text übersetzt, etwa in einen Produktcode, eine Sendungsnummer oder eine Website-Adresse.</p>
<p>Da Barcodes maschinell gelesen werden, sind sie viel schneller und weniger fehleranfällig als das manuelle Eintippen eines Codes. Deshalb werden Barcodes an Kassen, in Lagern, Krankenhäusern, auf Tickets und sogar auf Lebensmittelverpackungen eingesetzt.</p>

<h2>Eine kurze Geschichte des Barcodes</h2>
<p>Die Idee des Barcodes wurde 1952 von Norman Joseph Woodland und Bernard Silver in den USA patentiert. Im Handel tatsächlich eingesetzt wurde der Barcode erst 1974, als in einem Supermarkt in Ohio eine Packung Kaugummi mit einem UPC-Code gescannt wurde. Seitdem haben sich Barcodes weltweit verbreitet und werden heute global von einer Standardisierungsorganisation namens GS1 verwaltet.</p>

<h2>Wie funktioniert ein Barcode?</h2>
<p>Der Scanner beleuchtet den Barcode und liest das reflektierte Licht. Dunkle Bereiche reflektieren wenig Licht, helle Bereiche viel. Dieser Unterschied wird in eine Folge von Nullen und Einsen umgewandelt und mit den Regeln des jeweiligen Barcode-Typs abgeglichen. Viele Barcodes haben außerdem eine <strong>Prüfziffer</strong> (check digit), also eine letzte Ziffer, die aus den vorherigen Ziffern berechnet wird. Stimmt das Ergebnis der Berechnung nicht, erkennt der Scanner, dass etwas nicht stimmt, und verwirft das Ergebnis.</p>
<p>Der Barcode selbst enthält in der Regel nur einen Code. Informationen wie Produktname oder Preis sind im Kassensystem oder in einer Datenbank gespeichert und werden anhand dieses Codes abgerufen.</p>

<h2>Häufig verwendete Barcode-Arten</h2>
<p>Grundsätzlich lassen sich Barcodes in zwei große Gruppen einteilen:</p>
<ul>
  <li><strong>1D-Barcodes (linear)</strong>: bestehen aus senkrechten Strichen, die von links nach rechts gelesen werden. Beispiele sind <a href="/?type=ean13">EAN-13</a> und <a href="/?type=upca">UPC-A</a> für Handelsprodukte sowie <a href="/?type=code128">Code 128</a> und <a href="/?type=code39">Code 39</a> für Logistik und Lager.</li>
  <li><strong>2D-Barcodes</strong>: bestehen aus einem Muster aus Quadraten, das Daten in zwei Richtungen speichert und daher viel mehr Platz bietet. Beispiele sind <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> und <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Darüber hinaus gibt es spezielle Barcodes für Post und Versand, für das Gesundheitswesen sowie GS1-Standards für die Lieferkette. Eine ausführlichere Erklärung der Unterschiede finden Sie im Artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Unterschied zwischen 1D- und 2D-Barcodes</a>.</p>

<h2>Wofür werden Barcodes verwendet?</h2>
<ul>
  <li><strong>Einzelhandel</strong>: beschleunigt den Kassiervorgang und erfasst den Lagerbestand automatisch.</li>
  <li><strong>Lager und Versand</strong>: verfolgt Waren und Pakete von einem Ort zum anderen.</li>
  <li><strong>Tickets und Veranstaltungen</strong>: prüft die Echtheit von Tickets mit einem einzigen Scan.</li>
  <li><strong>Marketing</strong>: Ein QR Code auf einer Broschüre oder Verpackung führt Menschen direkt zu Ihrer Website, Ihrer Speisekarte oder Ihrem WhatsApp.</li>
</ul>

<h2>Barcodes selbst erstellen</h2>
<p>Sie brauchen keine kostenpflichtige App, um einen Barcode zu erstellen. Wählen Sie bei <a href="/">I Need Barcode</a> den Barcode-Typ aus, geben Sie die Daten ein und laden Sie das Ergebnis als PNG-Bild herunter. Es stehen über 100 Typen zur Auswahl, alle kostenlos und ohne Registrierung.</p>
`
};
