// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Różnice między kodami kreskowymi 1D i 2D: który jest Państwu potrzebny?",
  desc: "Liniowy kod kreskowy i QR Code to oba kody kreskowe, ale służą do różnych celów. Porównanie pojemności, sposobu skanowania i przykładów zastosowań.",
  tags: ["Podstawy", "Kod kreskowy"],
  coverCaption: "Ręczny skaner w magazynie odczytuje kody kreskowe 1D i 2D.",
  inlineCaption: "Na etykietach wysyłkowych zwykle stosuje się liniowy kod kreskowy.",
  faq: [
    ["Czy skaner kasowy odczyta QR Code?", "Nie każdy. Laserowy skaner 1D odczytuje wyłącznie liniowe kody kreskowe. Do QR Code potrzebny jest skaner 2D oparty na kamerze lub aparat telefonu."],
    ["Który kod kreskowy jest najmniejszy?", "Data Matrix to kod 2D, który można drukować w bardzo małym rozmiarze, dlatego często stosuje się go na podzespołach elektronicznych, wyrobach medycznych i etykietach leków."],
    ["Czy QR Code może zastąpić EAN-13 na produktach detalicznych?", "Aby produkt mógł być sprzedawany w sklepach, nadal potrzebuje zarejestrowanego kodu EAN-13 lub UPC. QR Code można dodać na opakowaniu jako uzupełnienie, na przykład z informacjami o produkcie lub promocją."]
  ],
  body: `
<p>Przy tworzeniu kodu kreskowego pierwsze pytanie brzmi zwykle: kod liniowy czy QR Code? Oba nazywane są kodami kreskowymi, ale zapisują dane w różny sposób, więc mają też różne zastosowania.</p>

<h2>Kod kreskowy 1D (liniowy)</h2>
<p>Kod kreskowy 1D składa się z pionowych kresek. Dane są zapisane w jednym kierunku, od lewej do prawej. Najbardziej znane przykłady to <a href="/?type=ean13">EAN-13</a> na opakowaniach produktów i <a href="/?type=code128">Code 128</a> na etykietach wysyłkowych.</p>
<ul>
  <li>Mała pojemność, zwykle od kilkunastu do kilkudziesięciu znaków.</li>
  <li>Odczytywany przez tanie i bardzo szybkie laserowe skanery kasowe.</li>
  <li>Odpowiedni dla kodów produktów, numerów seryjnych i numerów przesyłek.</li>
</ul>

<h2>Kod kreskowy 2D</h2>
<p>Kod kreskowy 2D zapisuje dane w dwóch kierunkach, w poziomie i w pionie, dzięki czemu mieści znacznie więcej. Przykłady to <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Duża pojemność, od kilkudziesięciu do tysięcy znaków.</li>
  <li>Można go zeskanować aparatem telefonu z różnych kierunków.</li>
  <li>Ma korekcję błędów, więc pozostaje czytelny nawet po częściowym uszkodzeniu.</li>
  <li>Może być bardzo mały, na przykład Data Matrix na podzespołach elektronicznych.</li>
</ul>

<h2>Krótkie porównanie</h2>
<table>
  <thead><tr><th></th><th>Kod kreskowy 1D</th><th>Kod kreskowy 2D</th></tr></thead>
  <tbody>
    <tr><td>Wygląd</td><td>Pionowe kreski</td><td>Kwadraciki/kropki w kwadracie</td></tr>
    <tr><td>Pojemność</td><td>Mała</td><td>Duża</td></tr>
    <tr><td>Urządzenie skanujące</td><td>Skaner laserowy lub kamera</td><td>Kamera lub skaner 2D</td></tr>
    <tr><td>Odporność na uszkodzenia</td><td>Ograniczona</td><td>Korekcja błędów</td></tr>
    <tr><td>Przykłady</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kiedy który wybrać?</h2>
<ul>
  <li><strong>Produkty sprzedawane w sklepach i marketach</strong>: oficjalny EAN-13 z GS1. Zobacz <a href="/artikel/cara-mendapatkan-barcode-ean-13">jak uzyskać kod kreskowy EAN-13</a>.</li>
  <li><strong>Etykiety magazynowe, regałowe lub wysyłkowe</strong>: Code 128 to popularny wybór, ponieważ jest zwarty i obsługuje litery oraz cyfry.</li>
  <li><strong>Linki, menu, WiFi lub kontakty dla klientów</strong>: QR Code, ponieważ można go zeskanować bezpośrednio aparatem telefonu.</li>
  <li><strong>Bardzo małe etykiety</strong>: Data Matrix.</li>
  <li><strong>Dokumenty tożsamości, karty pokładowe lub inne dokumenty</strong>: PDF417 lub Aztec.</li>
</ul>
<p>Wszystkie powyższe rodzaje mogą Państwo bezpłatnie utworzyć w <a href="/">I Need Barcode</a>. W razie wątpliwości warto zacząć od QR Code dla klientów i Code 128 do zastosowań wewnętrznych.</p>
`
};
