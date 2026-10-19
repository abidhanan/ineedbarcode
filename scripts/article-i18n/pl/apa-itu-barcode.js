// apa-itu-barcode
module.exports = {
  title: "Czym jest kod kreskowy? Definicja, zasada działania i rodzaje",
  desc: "Kod kreskowy znajduje się niemal na każdym kupowanym przez Państwa produkcie. Warto poznać zasadę jego działania, krótką historię i najczęściej używane rodzaje kodów kreskowych.",
  tags: ["Podstawy", "Kod kreskowy"],
  coverCaption: "Kod kreskowy na opakowaniu przechowuje unikalny kod produktu.",
  inlineCaption: "Kasjer odczytuje kod kreskowy skanerem w ułamku sekundy.",
  faq: [
    ["Czym różni się kod kreskowy od QR Code?", "QR Code to jeden z rodzajów kodu kreskowego, a dokładniej kod 2D. Liniowy kod kreskowy (1D) przechowuje tylko kilka znaków i jest odczytywany od lewej do prawej, natomiast QR Code zapisuje dane w dwóch kierunkach, dzięki czemu mieści link, tekst lub dane WiFi."],
    ["Czy kod kreskowy zawiera cenę produktu?", "Zazwyczaj nie. Kod kreskowy produktu zawiera wyłącznie kod. Cena i nazwa produktu są przechowywane w systemie kasowym i wyszukiwane na podstawie zeskanowanego kodu."],
    ["Czy za utworzenie kodu kreskowego trzeba płacić?", "Nie. Obraz kodu kreskowego można utworzyć bezpłatnie, na przykład w I Need Barcode. Płatnej rejestracji wymaga jedynie oficjalny numer dla kodów kreskowych produktów detalicznych, takich jak EAN-13, w organizacji GS1."]
  ],
  body: `
<p>Kod kreskowy to sposób zapisywania danych w postaci wzoru, który może odczytać maszyna. Wzór ten składa się zwykle z czarnych i białych kresek o różnej szerokości albo z małych kwadracików ułożonych w kwadrat. Podczas skanowania wzór jest z powrotem zamieniany na cyfry lub tekst, na przykład kod produktu, numer przesyłki czy adres strony.</p>
<p>Ponieważ kod kreskowy odczytuje maszyna, jest to znacznie szybsze i mniej podatne na błędy niż ręczne wpisywanie kodu. Dlatego kody kreskowe stosuje się przy kasach, w magazynach, szpitalach, na biletach, a nawet na opakowaniach żywności.</p>

<h2>Krótka historia kodu kreskowego</h2>
<p>Pomysł kodu kreskowego opatentowali w 1952 roku Norman Joseph Woodland i Bernard Silver w Stanach Zjednoczonych. W sklepach kod kreskowy zaczęto naprawdę stosować dopiero w 1974 roku, gdy w jednym z supermarketów w Ohio zeskanowano opakowanie gumy do żucia z kodem UPC. Od tego czasu kody kreskowe rozpowszechniły się na całym świecie, a dziś globalnie zarządza nimi organizacja standaryzacyjna GS1.</p>

<h2>Jak działa kod kreskowy?</h2>
<p>Skaner oświetla kod kreskowy i odczytuje odbite światło. Ciemne obszary odbijają mało światła, jasne — dużo. Ta różnica jest zamieniana na ciąg zer i jedynek, który następnie porównuje się z regułami danego rodzaju kodu kreskowego. Wiele kodów kreskowych ma także <strong>cyfrę kontrolną</strong> (check digit), czyli ostatnią cyfrę obliczaną na podstawie poprzednich. Jeśli wynik obliczenia się nie zgadza, skaner wie, że wystąpił błąd, i odrzuca odczyt.</p>
<p>Sam kod kreskowy zwykle przechowuje wyłącznie kod. Informacje takie jak nazwa produktu czy cena są przechowywane w systemie kasowym lub bazie danych i wyszukiwane na podstawie tego kodu.</p>

<h2>Najczęściej używane rodzaje kodów kreskowych</h2>
<p>Ogólnie kody kreskowe dzielą się na dwie duże grupy:</p>
<ul>
  <li><strong>Kody kreskowe 1D (liniowe)</strong>: pionowe kreski odczytywane od lewej do prawej. Przykładami są <a href="/?type=ean13">EAN-13</a> i <a href="/?type=upca">UPC-A</a> dla produktów detalicznych oraz <a href="/?type=code128">Code 128</a> i <a href="/?type=code39">Code 39</a> w logistyce i magazynach.</li>
  <li><strong>Kody kreskowe 2D</strong>: wzory z kwadracików zapisujące dane w dwóch kierunkach, dzięki czemu mieszczą znacznie więcej. Przykładami są <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> i <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Istnieją też specjalne kody kreskowe dla poczty i wysyłek, ochrony zdrowia oraz standardy GS1 dla łańcucha dostaw. Więcej o różnicach można przeczytać w artykule <a href="/artikel/perbedaan-barcode-1d-dan-2d">Różnice między kodami kreskowymi 1D i 2D</a>.</p>

<h2>Do czego służą kody kreskowe?</h2>
<ul>
  <li><strong>Handel detaliczny</strong>: przyspieszają obsługę przy kasie i automatycznie rejestrują stany magazynowe.</li>
  <li><strong>Magazyn i wysyłka</strong>: pozwalają śledzić towary i paczki w drodze z jednego miejsca do drugiego.</li>
  <li><strong>Bilety i wydarzenia</strong>: autentyczność biletu sprawdza się jednym skanem.</li>
  <li><strong>Marketing</strong>: QR Code na ulotce lub opakowaniu prowadzi ludzi prosto na Państwa stronę, do menu lub na WhatsApp.</li>
</ul>

<h2>Jak samodzielnie utworzyć kod kreskowy</h2>
<p>Do utworzenia kodu kreskowego nie jest potrzebna płatna aplikacja. W <a href="/">I Need Barcode</a> wystarczy wybrać rodzaj kodu kreskowego, wpisać dane i pobrać wynik jako obraz PNG. Do wyboru jest ponad 100 rodzajów, wszystkie bezpłatnie i bez rejestracji.</p>
`
};
