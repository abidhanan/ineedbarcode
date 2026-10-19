// cara-membuat-qr-code-wifi
module.exports = {
  title: "So erstellen Sie einen WiFi-QR-Code, damit Gäste kein Passwort eintippen müssen",
  desc: "Gäste scannen einfach einen QR Code, um sich mit dem WiFi zu verbinden. Ideal für Cafés, Büros, Unterkünfte und Zuhause. So erstellen und platzieren Sie ihn.",
  tags: ["Anleitung", "QR Code"],
  coverCaption: "Die WiFi-Daten des Routers lassen sich in einem einzigen QR Code speichern.",
  inlineCaption: "Cafégäste können sich sofort verbinden, ohne ein Passwort einzutippen.",
  faq: [
    ["Können alle Handys einen WiFi-QR-Code scannen?", "Die integrierte Kamera von iPhones ab iOS 11 und den meisten Android-Geräten ab Android 10 kann ihn direkt lesen. Ältere Handys benötigen eventuell eine QR-Scanner-App."],
    ["Ist ein WiFi-QR-Code sicher?", "Jeder, der den QR Code scannt, kann sich mit Ihrem WiFi verbinden. Nutzen Sie daher ein Gastnetzwerk und hängen Sie den QR Code Ihres privaten Netzwerks nicht an öffentlichen Orten auf."],
    ["Was ist zu tun, wenn das WiFi-Passwort geändert wird?", "Erstellen und drucken Sie den WiFi-QR-Code neu, denn der alte QR Code enthält noch das alte Passwort."]
  ],
  body: `
<p>Gästen ein langes WiFi-Passwort zu buchstabieren ist oft mühsam, vor allem wenn es Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthält. Mit einem <strong>WiFi-QR-Code</strong> richten Gäste einfach die Handykamera auf den QR Code und sind sofort verbunden.</p>

<h2>So funktioniert ein WiFi-QR-Code</h2>
<p>Ein WiFi-QR-Code speichert den Netzwerknamen (SSID), die Sicherheitsart und das Passwort in einem speziellen Format, das Handys erkennen, zum Beispiel <code>WIFI:T:WPA;S:Netzwerkname;P:Passwort;;</code>. Die integrierte Kamera von iPhones (ab iOS 11) und den meisten Android-Geräten (ab Android 10) kann ihn direkt lesen, ohne zusätzliche App.</p>

<h2>Schritt für Schritt erstellen</h2>
<ol>
  <li>Öffnen Sie den <a href="/?type=qrcode">QR-Code-Generator</a> und wählen Sie im Bereich Daten eingeben den Reiter <strong>WiFi</strong>.</li>
  <li>Geben Sie den <strong>Netzwerknamen</strong> genau so ein, wie er in der WiFi-Liste erscheint, einschließlich Groß- und Kleinschreibung.</li>
  <li>Geben Sie das <strong>Passwort</strong> ein und wählen Sie die Sicherheitsart. Die meisten Router in Wohnungen und Büros verwenden WPA/WPA2/WPA3.</li>
  <li>Setzen Sie ein Häkchen bei <strong>Verborgenes Netzwerk</strong>, wenn Ihr WiFi-Name nicht in der Liste angezeigt wird.</li>
  <li>Fügen Sie einen Rahmen mit einem Text wie „SCAN WIFI“ hinzu, damit Gäste wissen, wofür er gedacht ist, und laden Sie das PNG herunter.</li>
</ol>

<h2>Wo bringen Sie ihn an?</h2>
<ul>
  <li>Auf einer kleinen Karte auf dem Tisch im Café oder Restaurant.</li>
  <li>An der Wand im Wartebereich, am Empfang oder im Besprechungsraum des Büros.</li>
  <li>Im Zimmer einer Unterkunft, in der Nähe der Tür oder des Fernsehers.</li>
  <li>Auf der Unterseite des Routers zu Hause, damit die Familie neue Geräte leicht verbinden kann.</li>
</ul>

<h2>Sicherheitstipps</h2>
<ul>
  <li>Nutzen Sie ein <strong>Gastnetzwerk</strong> (guest network), wenn Ihr Router das unterstützt, damit Gäste nicht im selben Netzwerk wie die Bürocomputer landen.</li>
  <li>Wenn Sie das WiFi-Passwort ändern, erstellen und drucken Sie den QR Code neu, denn der alte QR Code enthält das alte Passwort.</li>
  <li>Hängen Sie keinen WiFi-QR-Code für ein privates Netzwerk an öffentlichen Orten auf, an denen ihn jeder fotografieren kann.</li>
</ul>

<h2>Wenn der QR Code keine Verbindung herstellt</h2>
<p>Prüfen Sie die Schreibweise von Netzwerkname und Passwort, denn schon ein falscher Buchstabe verhindert die Verbindung. Achten Sie außerdem darauf, dass die gewählte Sicherheitsart mit den Einstellungen des Routers übereinstimmt. Bei anderen Scanproblemen lesen Sie <a href="/artikel/barcode-tidak-bisa-dipindai">Gründe, warum sich ein Barcode nicht scannen lässt</a>.</p>
`
};
