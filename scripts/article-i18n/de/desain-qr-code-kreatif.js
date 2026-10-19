// desain-qr-code-kreatif
module.exports = {
  title: "Kreatives QR-Code-Design, das trotzdem scannbar bleibt",
  desc: "QR Codes können herzförmig oder rund sein oder einen Rahmen und Farben erhalten. Lernen Sie die Regeln, damit das Design attraktiv aussieht und sich trotzdem leicht scannen lässt.",
  tags: ["Design", "QR Code"],
  coverCaption: "Farben machen einen QR Code attraktiver, solange der Kontrast stark bleibt.",
  inlineCaption: "Ein QR-Code-Design sollte vor dem Druck immer getestet werden.",
  faq: [
    ["Lässt sich ein herzförmiger QR Code noch scannen?", "Ja. Der eigentliche QR Code bleibt in der Mitte vollständig erhalten, der Rest ist nur ein Ziermuster. Solange der Kontrast stark und die Größe ausreichend ist, bleibt der QR Code lesbar."],
    ["Welche Farben sind für QR Codes sicher?", "Dunkle Farben wie Schwarz, Dunkelblau, Dunkelgrün, Lila oder Dunkelbraun auf weißem oder sehr hellem Hintergrund."],
    ["Kann ein QR Code einen Text oder Rahmen erhalten?", "Ja. Ein Rahmen mit einer Aufforderung wie „SCAN MICH“ hilft den Menschen sogar, die Funktion zu verstehen, solange der Rahmen den QR Code nicht verdeckt."]
  ],
  body: `
<p>Schwarz-weiße QR Codes sind zwar funktional, wirken auf Verpackungen, Einladungen oder Werbematerialien aber oft steif. Mit ein wenig Design kann ein QR Code ansprechender aussehen, ohne seine Funktion zu verlieren. Entscheidend ist zu verstehen, welche Teile verändert werden dürfen und welche unverändert bleiben müssen.</p>

<h2>Außenform: Herz, Kreis und mehr</h2>
<p>Im Bereich Design des <a href="/?type=qrcode">QR-Code-Generators</a> können Sie Formen wie Kreis, Herz, Sechseck, Achteck, Stern oder Raute wählen. Der eigentliche QR Code bleibt in der Mitte, und der Rest wird mit einem Ziermuster aufgefüllt, bis die gewählte Form entsteht. Das Ziermuster enthält keine Daten und stört das Scannen daher nicht, solange rund um den eigentlichen QR Code ein freier Abstand bleibt.</p>

<h2>Punktstil</h2>
<p>Die Quadrate eines QR Codes lassen sich in abgerundete Formen oder runde Punkte umwandeln. Damit er gut scannbar bleibt, sollten die drei großen Quadrate in den Ecken (finder pattern) als vollständige Quadrate erhalten bleiben, denn nach diesem Teil sucht die Kamera zuerst. Unser Generator zeichnet diesen Teil immer als vollständiges Quadrat, höchstens mit abgerundeten Ecken, egal welchen Punktstil Sie wählen.</p>

<h2>Farben</h2>
<ul>
  <li>Verwenden Sie eine <strong>dunkle</strong> Farbe für den QR Code und eine <strong>helle</strong> Farbe für den Hintergrund. Dunkelblau, Dunkelgrün, Lila oder Dunkelbraun sind in der Regel sicher.</li>
  <li>Vermeiden Sie blasse Farben für den QR Code, etwa Gelb, Zartrosa oder Hellgrau.</li>
  <li>Kehren Sie die Farben nicht zu einem hellen QR Code auf dunklem Hintergrund um, da dies nicht alle Scanner-Apps unterstützen.</li>
</ul>

<h2>Rahmen und Handlungsaufforderung</h2>
<p>Ein Rahmen mit einer Aufforderung wie „SCAN MICH“, „MENÜ“ oder „SCAN WIFI“ hilft nachweislich dabei, dass Menschen die Funktion des QR Codes verstehen. Sie können einen Rahmen mit Beschriftung unten, Beschriftung oben, Ecke, Sprechblase, Kreis oder Band wählen und anschließend Text und Farbe anpassen.</p>

<h2>Regeln, damit das Design lesbar bleibt</h2>
<ol>
  <li>Sorgen Sie für einen starken <strong>Kontrast</strong> zwischen QR Code und Hintergrund.</li>
  <li>Lassen Sie die <strong>drei Markierungsquadrate</strong> in den Ecken deutlich sichtbar und unverdeckt.</li>
  <li>Lassen Sie <strong>freien Raum</strong> rund um den QR Code und den Rahmen.</li>
  <li>Verkleinern Sie einen gestalteten QR Code nicht zu stark. Formen wie ein Herz machen die Fläche des eigentlichen QR Codes kleiner als die Gesamtgröße des Bildes.</li>
  <li><strong>Testen</strong> Sie mit mehreren Handys, bevor Sie drucken.</li>
</ol>

<p>Wenn sich Ihr Design schlecht scannen lässt, setzen Sie die Einstellungen mit der Schaltfläche <strong>Zurücksetzen</strong> nacheinander auf die Grundeinstellungen zurück, um die Ursache zu finden. Weitere häufige Ursachen finden Sie unter <a href="/artikel/barcode-tidak-bisa-dipindai">7 Gründe, warum sich ein Barcode nicht scannen lässt</a>.</p>
`
};
