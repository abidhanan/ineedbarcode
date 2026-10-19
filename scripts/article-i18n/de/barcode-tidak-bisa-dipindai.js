// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Gründe, warum sich ein Barcode nicht scannen lässt, und wie Sie das beheben",
  desc: "Ihr Barcode oder QR Code lässt sich nicht scannen? Prüfen Sie die sieben häufigsten Ursachen, vom Farbkontrast bis zur Größe, und erfahren Sie, wie Sie sie beheben.",
  tags: ["Tipps", "Barcode"],
  coverCaption: "Kontrast und Größe entscheiden darüber, ob sich ein QR Code leicht scannen lässt.",
  inlineCaption: "Im Lager verlangsamen Barcodes, die sich nicht scannen lassen, die Arbeit.",
  faq: [
    ["Warum lässt sich ein QR Code mit einem Handy scannen, mit einem anderen aber nicht?", "Kameras und Scanner-Apps sind unterschiedlich leistungsfähig. QR Codes, die zu klein sind, einen geringen Kontrast haben oder invertierte Farben verwenden, scheitern bei bestimmten Handys häufiger. Testen Sie vor dem Druck mit mehreren Handys."],
    ["Lassen sich farbige Barcodes scannen?", "Ja, solange die Farbe dunkel auf hellem Hintergrund ist. Vermeiden Sie Rot für die Striche des Barcodes, da viele Kassenscanner rotes Licht verwenden."],
    ["Wie prüfe ich, ob ein Barcode korrekt ist?", "Scannen Sie den Ausdruck mit mehreren Handys oder Scannern und vergewissern Sie sich, dass die gelesenen Daten genau mit den eingegebenen Daten übereinstimmen."]
  ],
  body: `
<p>Kaum etwas ist ärgerlicher als ein Barcode, der bereits hundertfach gedruckt wurde und sich dann nicht scannen lässt. Die gute Nachricht: Die Ursache ist meist einfach und leicht zu vermeiden. Hier sind die sieben häufigsten Ursachen.</p>

<h2>1. Zu geringer Farbkontrast</h2>
<p>Ein Scanner liest den Unterschied zwischen Dunkel und Hell. Ein hellgrauer Barcode auf Weiß oder ein dunkelblauer auf Schwarz ist schwer zu unterscheiden. <strong>Lösung:</strong> Verwenden Sie eine dunkle Farbe auf hellem Hintergrund. Schwarz auf Weiß ist die sicherste Wahl.</p>

<h2>2. Invertierte Farben oder die Farbe Rot</h2>
<p>Ein heller Barcode auf dunklem Hintergrund wird nicht von allen Scannern unterstützt. Außerdem verwenden viele Kassenscanner rotes Licht, sodass rote Striche genauso aussehen wie der weiße Hintergrund. <strong>Lösung:</strong> Vermeiden Sie Rot für die Striche oder Module des Barcodes und kehren Sie die Farben nicht um.</p>

<h2>3. Zu kleine Größe</h2>
<p>Die Kamera braucht genügend Pixel, um jedes Modul zu erkennen. <strong>Lösung:</strong> Vergrößern Sie den Barcode. Für QR Codes, die aus der Nähe gescannt werden, sollten Sie mindestens etwa 2 × 2 cm verwenden. Siehe den <a href="/artikel/ukuran-barcode-untuk-dicetak">Leitfaden zur Druckgröße</a>.</p>

<h2>4. Keine Ruhezone</h2>
<p>Ein Barcode, der direkt an Bildern, Text oder dem Papierrand anliegt, lässt sich nur schwer von seiner Umgebung unterscheiden. <strong>Lösung:</strong> Lassen Sie rund um den Barcode freien Raum, besonders links und rechts von einem Strichcode.</p>

<h2>5. Unscharfes oder verzerrtes Bild</h2>
<p>Ein Barcode, der aus einem kleinen Bild vergrößert, als JPG in niedriger Qualität gespeichert oder unproportional gestreckt wurde, verliert seine Form. <strong>Lösung:</strong> Laden Sie ihn mit einer größeren Modulgröße im PNG-Format herunter und ändern Sie die Größe immer proportional.</p>

<h2>6. Falsche Daten oder Daten, die nicht zum Typ passen</h2>
<p>Jeder Barcode-Typ hat seine eigenen Regeln. EAN-13 akzeptiert zum Beispiel nur 12 oder 13 Ziffern mit korrekter Prüfziffer. Auch ein falsch eingetippter Link führt dazu, dass der QR Code zwar gelesen wird, aber nichts öffnet. <strong>Lösung:</strong> Prüfen Sie die Daten vor dem Druck. Der Generator von <a href="/">I Need Barcode</a> zeigt eine Meldung an, wenn die Daten nicht den Regeln des gewählten Barcode-Typs entsprechen.</p>

<h2>7. Oberfläche und Beleuchtung</h2>
<p>Glänzende Materialien, transparenter Kunststoff, Knicke und gewölbte Oberflächen können Licht reflektieren oder die Form des Barcodes verändern. <strong>Lösung:</strong> Drucken Sie auf eine flache, nicht glänzende Oberfläche und testen Sie unter den tatsächlichen Lichtverhältnissen.</p>

<h2>Zu QR Codes mit Design</h2>
<p>Ein QR Code mit Form, Farbe oder Rahmen lässt sich weiterhin scannen, solange die drei Markierungsquadrate in den Ecken unversehrt sind und der Kontrast ausreicht. Mehr dazu lesen Sie unter <a href="/artikel/desain-qr-code-kreatif">kreatives QR-Code-Design, das scannbar bleibt</a>.</p>
<p>Die beste Gewohnheit: <strong>Testen Sie immer einen Probedruck</strong> mit mehreren Handys und Scannern, bevor Sie in großer Stückzahl drucken.</p>
`
};
