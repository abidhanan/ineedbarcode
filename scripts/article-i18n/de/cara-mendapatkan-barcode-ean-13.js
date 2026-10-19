// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "So erhalten Sie einen EAN-13-Produktbarcode für kleine Unternehmen",
  desc: "Sie möchten Ihr Produkt in Minimärkte oder Supermärkte bringen? Erfahren Sie, was die Ziffern des EAN-13 bedeuten, wie Sie eine offizielle Nummer bei GS1 Indonesia registrieren und wie Sie sie drucken.",
  tags: ["Business", "Einzelhandel"],
  coverCaption: "Verpackungen von Handelsprodukten benötigen einen registrierten EAN-13-Barcode.",
  inlineCaption: "Einzelhändler erkennen Produkte anhand der EAN-13-Nummer in ihrem Kassensystem.",
  faq: [
    ["Darf ich mir eine EAN-13-Nummer selbst ausdenken?", "Das Barcode-Bild dürfen Sie selbst erstellen, die Nummer sollte aber offiziell von GS1 stammen. Selbst ausgedachte Nummern können mit anderen Produkten kollidieren und von Einzelhändlern abgelehnt werden."],
    ["Braucht jede Produktvariante einen eigenen Barcode?", "Ja. Jede unterschiedliche Variante, zum Beispiel mit anderem Geschmack, anderer Größe oder anderem Packungsinhalt, benötigt eine eigene EAN-13-Nummer."],
    ["Was ist die Prüfziffer beim EAN-13?", "Die Prüfziffer ist die 13. Ziffer, die aus den 12 vorherigen Ziffern berechnet wird. Der Scanner verwendet sie, um sicherzustellen, dass der Barcode korrekt gelesen wurde. Der Generator von I Need Barcode berechnet sie automatisch, wenn Sie 12 Ziffern eingeben."]
  ],
  body: `
<p>Wenn Ihr Produkt in Minimärkten, Supermärkten oder auf großen Online-Marktplätzen verkauft werden soll, werden Sie in der Regel aufgefordert, einen <strong>EAN-13</strong>-Barcode auf der Verpackung anzubringen. Dieser Barcode enthält 13 Ziffern, die Ihr Produkt weltweit eindeutig identifizieren.</p>

<h2>Die Bedeutung der 13 Ziffern beim EAN-13</h2>
<ul>
  <li><strong>GS1-Präfix</strong>: Die ersten drei Ziffern geben an, welche GS1-Organisation die Nummer vergeben hat. Von GS1 Indonesia vergebene Nummern beginnen mit <strong>899</strong>.</li>
  <li><strong>Unternehmensnummer</strong>: die Kennung Ihres Unternehmens, die Sie bei der Registrierung erhalten.</li>
  <li><strong>Produktnummer</strong>: wird vom Unternehmen selbst für jede Produktvariante festgelegt, zum Beispiel für unterschiedliche Geschmacksrichtungen oder Größen.</li>
  <li><strong>Prüfziffer</strong>: die letzte Ziffer, die automatisch aus den 12 vorherigen Ziffern berechnet wird, um Lesefehler zu verhindern.</li>
</ul>

<h2>Warum eine offizielle Nummer?</h2>
<p>Einen EAN-13-Barcode kann jeder zeichnen, aber die <strong>Nummer</strong> muss registriert sein. Einzelhändler nutzen diese Nummer, um Produkte in ihrem System zu erkennen. Wenn Sie sich selbst eine Nummer ausdenken, kann sie mit dem Produkt eines anderen Unternehmens kollidieren und bei der Listung des Produkts im Geschäft abgelehnt werden.</p>

<h2>So registrieren Sie eine Nummer bei GS1 Indonesia</h2>
<ol>
  <li>Halten Sie Ihre Unternehmensunterlagen bereit, etwa die NIB (indonesische Unternehmensidentifikationsnummer) und die NPWP (Steuernummer), sowie eine Liste der Produkte, die einen Barcode erhalten sollen.</li>
  <li>Registrieren Sie Ihr Unternehmen über die offizielle Website von GS1 Indonesia und wählen Sie die benötigte Anzahl an Nummern.</li>
  <li>Bezahlen Sie die Registrierungsgebühr und den Jahresbeitrag gemäß den geltenden Bestimmungen.</li>
  <li>Nach der Genehmigung erhalten Sie eine Unternehmensnummer und können für jedes Produkt eine Nummer erstellen.</li>
</ol>
<p>Anforderungen und Gebühren können sich ändern, prüfen Sie daher immer die aktuellen Informationen direkt auf der Website von GS1 Indonesia.</p>

<h2>Das Barcode-Bild erstellen</h2>
<p>Sobald Sie eine Nummer haben, öffnen Sie den <a href="/?type=ean13">EAN-13-Generator</a> und geben die 12 oder 13 Ziffern Ihrer Produktnummer ein. Wenn Sie 12 Ziffern eingeben, wird die Prüfziffer automatisch berechnet. Achten Sie darauf, dass die Option für Text unter dem Barcode aktiviert ist, damit die Ziffern mitgedruckt werden, und laden Sie den Barcode als PNG herunter.</p>

<h2>Tipps für den Druck auf der Verpackung</h2>
<ul>
  <li>Verwenden Sie schwarze oder dunkelblaue Striche auf weißem Hintergrund. Vermeiden Sie Rot für die Striche, da viele Kassenscanner rotes Licht verwenden und rote Striche daher nicht gelesen werden.</li>
  <li>Verkleinern Sie den Barcode nicht zu stark. Die Standardgröße des EAN-13 beträgt etwa 37,3 × 25,9 mm und darf auf etwa 80 % verkleinert werden. Mehr dazu im <a href="/artikel/ukuran-barcode-untuk-dicetak">Leitfaden zur Barcode-Größe</a>.</li>
  <li>Lassen Sie links und rechts vom Barcode freien Raum und platzieren Sie ihn nicht auf Falzen oder Nähten der Verpackung.</li>
  <li>Testen Sie den Druck mit einem Scanner, bevor Sie in großer Stückzahl drucken.</li>
</ul>
<p>Für Produkte, die in Nordamerika verkauft werden, müssen Sie möglicherweise zusätzlich einen <a href="/?type=upca">UPC-A</a> mit 12 Ziffern verwenden.</p>
`
};
