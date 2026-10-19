// apa-itu-qr-code
module.exports = {
  title: "Was ist ein QR Code und wie funktioniert er?",
  desc: "Ein QR Code kann Links, Texte und sogar WiFi-Daten speichern und bleibt lesbar, auch wenn er teilweise beschädigt ist. So funktioniert er und das sind seine Vorteile.",
  tags: ["Grundlagen", "QR Code"],
  coverCaption: "Ein QR Code lässt sich direkt mit der Handykamera scannen.",
  inlineCaption: "Jeder QR Code besteht aus kleinen schwarzen und weißen Quadraten.",
  faq: [
    ["Kann ein QR Code ablaufen?", "Ein statischer QR Code läuft nie ab, weil die Daten direkt im Bild gespeichert sind. Ein dynamischer QR Code kann aufhören zu funktionieren, wenn der Dienst, der den Link bereitstellt, eingestellt wird oder das Abonnement endet."],
    ["Wie viele Daten kann ein QR Code speichern?", "Die größte Version eines QR Codes kann bis zu 7.089 Ziffern oder etwa 2.953 Byte speichern. Je weniger Daten er jedoch enthält, desto leichter lässt sich der QR Code scannen."],
    ["Ist ein QR Code noch lesbar, wenn er teilweise beschädigt ist?", "Ja. Dank der Fehlerkorrektur bleibt ein QR Code lesbar, auch wenn etwa 7 % bis 30 % davon beschädigt sind, je nachdem, welche Korrekturstufe (L, M, Q oder H) verwendet wird."]
  ],
  body: `
<p>Ein QR Code (Quick Response Code) ist ein quadratischer 2D-Barcode, der aus kleinen schwarzen und weißen Quadraten besteht. Anders als ein Strichcode, der nur ein gutes Dutzend Ziffern speichert, kann ein QR Code Website-Links, lange Texte, Telefonnummern, Kontakte und sogar WiFi-Netzwerkdaten enthalten.</p>
<p>Der QR Code wurde 1994 von dem japanischen Unternehmen Denso Wave entwickelt, um Fahrzeugteile in Fabriken zu verfolgen. Heute ist der QR Code überall im Einsatz, vom digitalen Bezahlen bis zur Speisekarte im Restaurant, weil er sich direkt mit der Handykamera scannen lässt.</p>

<h2>Die Bestandteile eines QR Codes</h2>
<ul>
  <li><strong>Drei große Quadrate in den Ecken</strong> (finder pattern): helfen der Kamera, den QR Code zu finden und seine Ausrichtung zu erkennen, sodass er auch schräg oder auf dem Kopf stehend lesbar bleibt.</li>
  <li><strong>Ausrichtungsmuster</strong> (alignment pattern): kleine Quadrate, die helfen, einen gebogenen oder schräg betrachteten QR Code zu lesen.</li>
  <li><strong>Datenbereich</strong>: kleine Quadrate, die die von Ihnen gespeicherten Informationen enthalten.</li>
  <li><strong>Ruhezone</strong> (quiet zone): ein freier Rand rund um den QR Code, damit er sich gut vom Hintergrund abhebt.</li>
</ul>

<h2>Wie viele Daten passen hinein?</h2>
<p>QR Codes gibt es in 40 Größenversionen. Die größte Version kann bis zu 7.089 Ziffern oder etwa 2.953 Byte an Daten speichern. In der Praxis gilt: Je weniger Daten gespeichert werden, desto größer sind die Quadrate und desto leichter lässt sich der QR Code scannen. Deshalb ist ein kurzer Link besser als ein sehr langer.</p>

<h2>Lesbar trotz Beschädigung</h2>
<p>QR Codes verwenden eine Fehlerkorrektur (error correction). Es gibt vier Stufen:</p>
<ul>
  <li><strong>L</strong>: Die Daten lassen sich noch wiederherstellen, wenn etwa 7 % des QR Codes beschädigt sind.</li>
  <li><strong>M</strong>: etwa 15 %. Dies ist die übliche, ausgewogene Wahl.</li>
  <li><strong>Q</strong>: etwa 25 %.</li>
  <li><strong>H</strong>: etwa 30 %, geeignet für QR Codes, die ein Logo erhalten oder an Stellen gedruckt werden, die leicht verschmutzen.</li>
</ul>
<p>Je höher die Korrekturstufe, desto mehr Quadrate werden benötigt, sodass das Muster des QR Codes dichter aussieht.</p>

<h2>Was lässt sich in einem QR Code speichern?</h2>
<ul>
  <li>Links zu Websites, Onlineshops oder Formularen.</li>
  <li>WiFi-Daten, damit Gäste sich verbinden können, ohne ein Passwort einzutippen. Siehe die Anleitung <a href="/artikel/cara-membuat-qr-code-wifi">WiFi-QR-Code</a>.</li>
  <li>Digitale Visitenkarten (vCard), E-Mails, SMS und WhatsApp-Chats.</li>
  <li>Orte auf einer Karte und Veranstaltungstermine.</li>
</ul>

<h2>Statische und dynamische QR Codes</h2>
<p>Ein QR Code, der direkt aus den Daten erstellt wird, heißt <strong>statischer QR Code</strong>: Der Inhalt ist im Bild gespeichert und kann nicht geändert werden, läuft dafür aber auch nie ab. Ein <strong>dynamischer</strong> QR Code enthält einen Kurzlink eines Dienstes, der anschließend zu Ihrem Ziel weiterleitet; das Ziel lässt sich ändern, aber der QR Code funktioniert nicht mehr, wenn der Dienst eingestellt wird. Für die meisten Zwecke reicht ein statischer QR Code völlig aus und ist auf lange Sicht sicherer.</p>

<p>Möchten Sie es ausprobieren? Erstellen Sie jetzt einen <a href="/?type=qrcode">kostenlosen QR Code</a> oder lesen Sie, <a href="/artikel/cara-membuat-qr-code-gratis">wie Sie in 3 Schritten einen QR Code erstellen</a>.</p>
`
};
