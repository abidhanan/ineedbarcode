// cara-membuat-qr-code-wifi
module.exports = {
  title: "Wéi Dir e WiFi QR Code maacht, fir datt Gäscht d'Passwuert net antippe mussen",
  desc: "Gäscht mussen just en QR Code scannen, fir sech mam WiFi ze verbannen. Ideal fir Caféen, Büroen, Ënnerkënfte an doheem. Sou maacht Dir en a bréngt en un.",
  tags: ["Guide", "QR Code"],
  coverCaption: "D'WiFi-Donnéeë vum Router kënnen an engem eenzegen QR Code gespäichert ginn.",
  inlineCaption: "Gäscht am Café kënne sech direkt verbannen, ouni d'Passwuert anzetippen.",
  faq: [
    ["Kann all Handy e WiFi QR Code scannen?", "Déi agebaute Kamera vum iPhone mat iOS 11 oder méi nei an de meeschten Android-Handye mat Android 10 oder méi nei kann en direkt liesen. Méi al Handye brauchen eventuell eng App fir QR Coden ze scannen."],
    ["Ass e WiFi QR Code sécher?", "Jiddereen, deen dësen QR Code scannt, ka sech mat Ärem WiFi verbannen. Benotzt dofir e Gaaschtnetz a bréngt keen QR Code vun Ärem private Netz op ëffentleche Plazen un."],
    ["Wat maache wann d'WiFi-Passwuert geännert gëtt?", "Maacht an dréckt en neie WiFi QR Code, well den alen QR Code nach ëmmer dat aalt Passwuert enthält."]
  ],
  body: `
<p>E laangt WiFi-Passwuert fir Gäscht ze buschtawéieren ass dacks ëmständlech, virun allem wann et Groussbuschtawen, Zuelen a Symboler huet. Mat engem <strong>WiFi QR Code</strong> mussen d'Gäscht just d'Kamera vum Handy op den QR Code riichten a si direkt verbonnen.</p>

<h2>Wéi e WiFi QR Code funktionéiert</h2>
<p>E WiFi QR Code späichert den Numm vum Netz (SSID), d'Sécherheetsaart an d'Passwuert an engem spezielle Format, deen Handyen erkennen, zum Beispill <code>WIFI:T:WPA;S:NummVumNetz;P:Passwuert;;</code>. Déi agebaute Kamera vum iPhone (iOS 11 oder méi nei) an de meeschten Android-Handyen (Android 10 oder méi nei) kann en direkt liesen, ouni zousätzlech App.</p>

<h2>D'Schrëtt, fir en ze maachen</h2>
<ol>
  <li>Maacht de <a href="/?type=qrcode">QR Code-Generator</a> op a wielt den Tab <strong>WiFi</strong> ënner Donnéeën.</li>
  <li>Tippt den <strong>Numm vum Netz</strong> genee esou an, wéi en an der WiFi-Lëscht erschéngt, inklusiv Grouss- a Klengschreiwung.</li>
  <li>Tippt d'<strong>Passwuert</strong> an a wielt d'Sécherheetsaart. Déi meescht Routeren doheem an am Büro benotzen WPA/WPA2/WPA3.</li>
  <li>Kräizt <strong>Verstoppt Netz</strong> un, wann den Numm vun Ärem WiFi net an der Lëscht ugewise gëtt.</li>
  <li>Setzt e Rumm mat zum Beispill dem Text "SCAN WIFI" derbäi, fir datt d'Gäscht wëssen, fir wat en ass, an downloadt dann d'PNG.</li>
</ol>

<h2>Wou bréngt een en un?</h2>
<ul>
  <li>Op enger klenger Kaart um Dësch am Café oder am Restaurant.</li>
  <li>Un der Mauer vum Openthaltsraum, vun der Receptioun oder vum Reuniounsraum am Büro.</li>
  <li>An den Zëmmere vun Ënnerkënften, no bei der Dier oder beim Fernseh.</li>
  <li>Ënnen um Router doheem, fir datt d'Famill nei Geräter einfach verbanne kann.</li>
</ul>

<h2>Sécherheetstipps</h2>
<ul>
  <li>Benotzt e <strong>Gaaschtnetz</strong> (guest network), wann Äre Router dat ënnerstëtzt, sou datt Gäscht net am selwechten Netz wéi d'Computere vum Büro sinn.</li>
  <li>Wann d'WiFi-Passwuert geännert gëtt, maacht an dréckt den QR Code nei, well den alen QR Code dat aalt Passwuert enthält.</li>
  <li>Bréngt kee WiFi QR Code fir e privat Netz op ëffentleche Plazen un, wou jiddereen e fotograféiere kann.</li>
</ul>

<h2>Wann den QR Code sech net verbënnt</h2>
<p>Kontrolléiert nach eng Kéier d'Schreifweis vum Netznumm a vum Passwuert, well een eenzege falsche Buschtaf dofir suergt, datt den Handy sech net verbanne kann. Vergewëssert Iech och, datt déi gewielt Sécherheetsaart mat den Astellunge vum Router iwwereneestëmmt. Fir aner Problemer beim Scannen, liest <a href="/artikel/barcode-tidak-bisa-dipindai">Grënn, firwat e Barcode sech net scanne léisst</a>.</p>
`
};
