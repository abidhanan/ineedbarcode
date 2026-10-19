// apa-itu-qr-code
module.exports = {
  title: "Wat is een QR Code en hoe werkt het?",
  desc: "Een QR Code kan links, tekst en zelfs WiFi-gegevens opslaan en blijft leesbaar, ook als hij gedeeltelijk beschadigd is. Zo werkt hij en dit zijn de voordelen.",
  tags: ["Basis", "QR Code"],
  coverCaption: "Een QR Code kunt u direct scannen met de camera van uw telefoon.",
  inlineCaption: "Elke QR Code bestaat uit kleine zwarte en witte vierkantjes.",
  faq: [
    ["Kan een QR Code verlopen?", "Een statische QR Code verloopt nooit, omdat de gegevens direct in de afbeelding zijn opgenomen. Een dynamische QR Code kan stoppen met werken als de dienst die de link levert ophoudt te bestaan of als het abonnement afloopt."],
    ["Hoeveel gegevens kan een QR Code opslaan?", "De grootste versie van een QR Code kan tot 7.089 cijfers of ongeveer 2.953 bytes opslaan. Maar hoe minder gegevens, hoe makkelijker de QR Code te scannen is."],
    ["Blijft een QR Code leesbaar als hij gedeeltelijk beschadigd is?", "Ja. Dankzij foutcorrectie blijft een QR Code leesbaar, ook als ongeveer 7% tot 30% ervan beschadigd is, afhankelijk van het gebruikte correctieniveau: L, M, Q of H."]
  ],
  body: `
<p>Een QR Code (Quick Response Code) is een vierkante 2D-barcode die bestaat uit kleine zwarte en witte vierkantjes. Anders dan een streepjescode, die slechts een stuk of tien cijfers bevat, kan een QR Code websitelinks, lange teksten, telefoonnummers, contactgegevens en zelfs WiFi-netwerkgegevens opslaan.</p>
<p>De QR Code werd in 1994 ontwikkeld door Denso Wave, een Japans bedrijf, om auto-onderdelen in fabrieken te volgen. Tegenwoordig wordt de QR Code overal gebruikt, van digitale betalingen tot restaurantmenu's, omdat hij direct met de camera van een telefoon te scannen is.</p>

<h2>De onderdelen van een QR Code</h2>
<ul>
  <li><strong>Drie grote vierkanten in de hoeken</strong> (finder pattern): helpen de camera de QR Code te vinden en de richting te bepalen, zodat hij ook scheef of ondersteboven leesbaar blijft.</li>
  <li><strong>Uitlijningspatroon</strong> (alignment pattern): een klein vierkant dat helpt om een gebogen of schuin bekeken QR Code te lezen.</li>
  <li><strong>Gegevensgebied</strong>: de kleine vierkantjes die de informatie bevatten die u opslaat.</li>
  <li><strong>Stille zone</strong> (quiet zone): de lege ruimte rond de QR Code, zodat hij goed van de achtergrond te onderscheiden is.</li>
</ul>

<h2>Hoeveel gegevens passen erin?</h2>
<p>Een QR Code heeft 40 formaatversies. De grootste versie kan tot 7.089 cijfers of ongeveer 2.953 bytes aan gegevens opslaan. In de praktijk geldt: hoe minder gegevens u opslaat, hoe groter de vierkantjes en hoe makkelijker de QR Code te scannen is. Daarom is een korte link beter dan een heel lange.</p>

<h2>Leesbaar ondanks schade</h2>
<p>Een QR Code gebruikt foutcorrectie (error correction). Er zijn vier niveaus:</p>
<ul>
  <li><strong>L</strong>: de gegevens zijn nog te herstellen als ongeveer 7% van de QR Code beschadigd is.</li>
  <li><strong>M</strong>: ongeveer 15%. Dit is de gangbare, evenwichtige keuze.</li>
  <li><strong>Q</strong>: ongeveer 25%.</li>
  <li><strong>H</strong>: ongeveer 30%, geschikt voor QR Codes die een logo krijgen of worden gedrukt op plekken die snel vuil worden.</li>
</ul>
<p>Hoe hoger het correctieniveau, hoe meer vierkantjes er nodig zijn, waardoor het patroon van de QR Code er dichter uitziet.</p>

<h2>Wat kunt u in een QR Code opslaan?</h2>
<ul>
  <li>Links naar websites, webwinkels of formulieren.</li>
  <li>WiFi-gegevens, zodat gasten verbinding kunnen maken zonder een wachtwoord in te typen. Zie de handleiding <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitale visitekaartjes (vCard), e-mail, sms en WhatsApp-chats.</li>
  <li>Locaties op een kaart en evenementen.</li>
</ul>

<h2>Statische en dynamische QR Codes</h2>
<p>Een QR Code die direct uit de gegevens wordt gemaakt, heet een <strong>statische QR Code</strong>: de inhoud zit in de afbeelding en kan niet worden gewijzigd, maar verloopt ook nooit. Een <strong>dynamische</strong> QR Code bevat een korte link van een dienst die vervolgens doorverwijst naar uw bestemming; die bestemming kan worden gewijzigd, maar de QR Code werkt niet meer als de dienst stopt. Voor de meeste toepassingen is een statische QR Code ruim voldoende en op de lange termijn veiliger.</p>

<p>Wilt u het proberen? Maak nu een <a href="/?type=qrcode">gratis QR Code</a>, of lees <a href="/artikel/cara-membuat-qr-code-gratis">hoe u in 3 stappen een QR Code maakt</a>.</p>
`
};
