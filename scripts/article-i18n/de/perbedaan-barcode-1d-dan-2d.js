// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Unterschied zwischen 1D- und 2D-Barcodes: Welchen brauchen Sie?",
  desc: "Strichcodes und QR Codes sind beides Barcodes, werden aber für unterschiedliche Zwecke eingesetzt. Vergleichen Sie Kapazität, Scanmethode und Anwendungsbeispiele.",
  tags: ["Grundlagen", "Barcode"],
  coverCaption: "Ein Handscanner im Lager liest 1D- und 2D-Barcodes.",
  inlineCaption: "Versandetiketten verwenden in der Regel einen Strichcode.",
  faq: [
    ["Können Kassenscanner QR Codes lesen?", "Nicht alle. 1D-Laserscanner lesen nur Strichcodes. Für QR Codes wird ein kamerabasierter 2D-Scanner oder eine Handykamera benötigt."],
    ["Welcher Barcode ist der kleinste?", "Data Matrix ist ein 2D-Barcode, der sehr klein gedruckt werden kann und daher häufig auf elektronischen Bauteilen, Medizinprodukten und Arzneimitteletiketten verwendet wird."],
    ["Darf ich bei Handelsprodukten einen QR Code anstelle eines EAN-13 verwenden?", "Für den Verkauf im Einzelhandel benötigt ein Produkt weiterhin einen registrierten EAN-13 oder UPC. Ein QR Code kann ergänzend auf der Verpackung angebracht werden, zum Beispiel für Produktinformationen oder Werbeaktionen."]
  ],
  body: `
<p>Beim Erstellen eines Barcodes stellt sich meist zuerst die Frage: Strichcode oder QR Code? Beide werden als Barcode bezeichnet, speichern Daten aber auf unterschiedliche Weise und haben daher unterschiedliche Einsatzzwecke.</p>

<h2>1D-Barcodes (linear)</h2>
<p>Ein 1D-Barcode besteht aus senkrechten Strichen. Die Daten werden in einer Richtung gespeichert, nämlich von links nach rechts. Die bekanntesten Beispiele sind <a href="/?type=ean13">EAN-13</a> auf Produktverpackungen und <a href="/?type=code128">Code 128</a> auf Versandetiketten.</p>
<ul>
  <li>Geringe Kapazität, meist ein gutes Dutzend bis einige Dutzend Zeichen.</li>
  <li>Lesbar mit günstigen und sehr schnellen Laserscannern an der Kasse.</li>
  <li>Geeignet für Produktcodes, Seriennummern und Sendungsnummern.</li>
</ul>

<h2>2D-Barcodes</h2>
<p>Ein 2D-Barcode speichert Daten in zwei Richtungen, waagerecht und senkrecht, und fasst daher viel mehr. Beispiele sind <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> und <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Große Kapazität, von einigen Dutzend bis zu Tausenden von Zeichen.</li>
  <li>Lässt sich mit der Handykamera aus verschiedenen Richtungen scannen.</li>
  <li>Verfügt über Fehlerkorrektur und bleibt daher lesbar, auch wenn er teilweise beschädigt ist.</li>
  <li>Kann sehr klein gestaltet werden, zum Beispiel Data Matrix auf elektronischen Bauteilen.</li>
</ul>

<h2>Kurzer Vergleich</h2>
<table>
  <thead><tr><th></th><th>1D-Barcode</th><th>2D-Barcode</th></tr></thead>
  <tbody>
    <tr><td>Form</td><td>Senkrechte Striche</td><td>Quadrate/Punkte in einem Viereck</td></tr>
    <tr><td>Kapazität</td><td>Gering</td><td>Groß</td></tr>
    <tr><td>Scangerät</td><td>Laserscanner oder Kamera</td><td>Kamera oder 2D-Scanner</td></tr>
    <tr><td>Beschädigungsresistenz</td><td>Begrenzt</td><td>Fehlerkorrektur vorhanden</td></tr>
    <tr><td>Beispiele</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Wann verwenden Sie welchen?</h2>
<ul>
  <li><strong>Produkte, die im Geschäft oder Minimarkt verkauft werden</strong>: Verwenden Sie einen offiziellen EAN-13 von GS1. Siehe <a href="/artikel/cara-mendapatkan-barcode-ean-13">so erhalten Sie einen EAN-13-Barcode</a>.</li>
  <li><strong>Lager-, Regal- oder Versandetiketten</strong>: Code 128 ist eine gängige Wahl, weil er kompakt ist und Buchstaben sowie Zahlen unterstützt.</li>
  <li><strong>Links, Speisekarten, WiFi oder Kontakte für Kunden</strong>: QR Code, weil er sich direkt mit der Handykamera scannen lässt.</li>
  <li><strong>Sehr kleine Etiketten</strong>: Data Matrix.</li>
  <li><strong>Ausweise, Bordkarten oder Dokumente</strong>: PDF417 oder Aztec.</li>
</ul>
<p>Alle oben genannten Typen können Sie kostenlos bei <a href="/">I Need Barcode</a> erstellen. Wenn Sie noch unsicher sind, beginnen Sie mit einem QR Code für Ihre Kunden und mit Code 128 für interne Zwecke.</p>
`
};
