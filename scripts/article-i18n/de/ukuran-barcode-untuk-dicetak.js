// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Die richtige Barcode-Größe und Auflösung für den Druck",
  desc: "Zu kleine oder unscharfe Barcodes lassen sich schwer scannen. Erfahren Sie mehr über Mindestgrößen, die Faustregel für den Scanabstand und eine sichere Bildauflösung für den Druck.",
  tags: ["Anleitung", "Druck"],
  coverCaption: "Ein Etikettendrucker druckt Barcodes für Pakete und Verpackungen.",
  inlineCaption: "Die Größe des Etiketts bestimmt, wie groß der Barcode gedruckt werden kann.",
  faq: [
    ["Wie groß muss ein QR Code für den Druck mindestens sein?", "Für das Scannen aus der Nähe sind etwa 2 × 2 cm die sichere Untergrenze. Für größere Entfernungen verwenden Sie ein Verhältnis von etwa 10 : 1 zwischen Scanabstand und Breite des QR Codes."],
    ["Wie groß ist die Standardgröße eines EAN-13-Barcodes?", "Die Standardgröße des EAN-13 beträgt etwa 37,3 × 25,9 mm. Sie darf auf etwa 80 % verkleinert oder auf bis zu 200 % vergrößert werden."],
    ["Warum ist der Barcode nach dem Drucken unscharf?", "Meist, weil ein kleines Bild vergrößert oder als JPG in niedriger Qualität gespeichert wurde. Laden Sie ihn mit einer größeren Modulgröße im PNG-Format herunter."]
  ],
  body: `
<p>Ein Barcode, der auf dem Bildschirm gut aussieht, ist nach dem Druck nicht unbedingt lesbar. Eine zu kleine Größe, eine niedrige Auflösung oder verlaufende Tinte können dazu führen, dass der Scanner ihn nicht lesen kann. Hier ist ein Leitfaden, damit Ihre Ausdrucke lesbar bleiben.</p>

<h2>Das Modul verstehen</h2>
<p>Ein <strong>Modul</strong> ist die kleinste Einheit eines Barcodes, also ein kleines Quadrat bei einem QR Code oder der schmalste Strich bei einem Strichcode. Die Modulgröße bestimmt, wie leicht ein Barcode gelesen werden kann. Bei <a href="/">I Need Barcode</a> lässt sich die Modulgröße im Bereich Einstellungen festlegen: Je größer der Wert, desto größer und schärfer das heruntergeladene Bild.</p>

<h2>Mindestgröße für QR Codes</h2>
<ul>
  <li>Für das Scannen aus der Nähe (zum Beispiel bei Visitenkarten oder Produktetiketten) sind etwa <strong>2 × 2 cm</strong> die sichere Untergrenze.</li>
  <li>Verwenden Sie eine Faustregel von etwa <strong>10 : 1</strong>: Der Scanabstand beträgt ungefähr das Zehnfache der Breite des QR Codes. Für ein Poster, das aus 2 Metern Entfernung gescannt wird, sollte der QR Code mindestens etwa 20 cm groß sein.</li>
  <li>Je mehr Daten gespeichert werden, desto dichter ist das Muster und desto größer muss der Code sein.</li>
</ul>

<h2>Größe von Produktbarcodes</h2>
<p>Die Standardgröße des <a href="/?type=ean13">EAN-13</a> beträgt etwa 37,3 × 25,9 mm (100 %). Sie darf auf etwa 80 % verkleinert oder auf bis zu 200 % vergrößert werden. Kürzen Sie die Höhe der Striche nicht zu stark, denn Kassenscanner brauchen Platz, um aus verschiedenen Winkeln zu lesen.</p>

<h2>Bildauflösung</h2>
<ul>
  <li>Achten Sie beim Druck darauf, dass jedes Modul aus <strong>mehreren vollen Pixeln</strong> besteht und nicht aus Teilpixeln. Wählen Sie beim Herunterladen eine größere Modulgröße und verkleinern Sie das Bild dann im Grafikprogramm, nicht umgekehrt.</li>
  <li>Vermeiden Sie es, ein kleines Barcode-Bild zu vergrößern, da die Kanten der Quadrate sonst unscharf oder gezackt werden.</li>
  <li>Speichern Sie im PNG-Format, damit Farben und Kanten nicht wie bei JPG beschädigt werden.</li>
</ul>

<h2>Ruhezone</h2>
<p>Jeder Barcode braucht freien Raum um sich herum, die sogenannte <strong>Ruhezone</strong> (quiet zone). Bei QR Codes sollte sie idealerweise vier Module breit sein. Bei Strichcodes ist der freie Raum links und rechts besonders wichtig. Platzieren Sie Text, Gestaltungslinien oder den Rand der Verpackung nicht zu nah daran.</p>

<h2>Farbe und Material</h2>
<ul>
  <li>Verwenden Sie eine dunkle Farbe für den Barcode und eine helle Farbe für den Hintergrund.</li>
  <li>Vermeiden Sie glänzende oder transparente Materialien, da Lichtreflexe die Kamera stören können.</li>
  <li>Drucken Sie immer ein Muster und testen Sie es mit mehreren Handys oder Scannern, bevor Sie in großer Menge drucken.</li>
</ul>
<p>Wenn sich Ihr Barcode trotzdem schlecht scannen lässt, lesen Sie <a href="/artikel/barcode-tidak-bisa-dipindai">7 Gründe, warum sich ein Barcode nicht scannen lässt</a>.</p>
`
};
