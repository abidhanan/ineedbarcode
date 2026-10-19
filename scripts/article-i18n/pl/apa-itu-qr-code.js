// apa-itu-qr-code
module.exports = {
  title: "Czym jest QR Code i jak działa?",
  desc: "QR Code może przechowywać link, tekst, a nawet dane WiFi i pozostaje czytelny, nawet gdy jest częściowo uszkodzony. Oto jak działa i jakie ma zalety.",
  tags: ["Podstawy", "QR Code"],
  coverCaption: "QR Code można zeskanować bezpośrednio aparatem telefonu.",
  inlineCaption: "Każdy QR Code składa się z małych czarnych i białych kwadracików.",
  faq: [
    ["Czy QR Code może wygasnąć?", "Statyczny QR Code nigdy nie wygasa, ponieważ dane są zapisane bezpośrednio w obrazie. Dynamiczny QR Code może przestać działać, jeśli usługa dostarczająca link zostanie zamknięta lub skończy się subskrypcja."],
    ["Ile danych może przechowywać QR Code?", "Największa wersja QR Code mieści do 7 089 cyfr, czyli około 2 953 bajtów. Im mniej danych, tym łatwiej jednak zeskanować QR Code."],
    ["Czy QR Code jest czytelny, gdy jest częściowo uszkodzony?", "Tak. Dzięki korekcji błędów QR Code pozostaje czytelny, nawet gdy uszkodzone jest od około 7% do 30% jego powierzchni, w zależności od użytego poziomu korekcji L, M, Q lub H."]
  ],
  body: `
<p>QR Code (Quick Response Code) to kwadratowy kod kreskowy 2D złożony z małych czarnych i białych kwadracików. W przeciwieństwie do liniowego kodu kreskowego, który przechowuje zaledwie kilkanaście cyfr, QR Code może przechowywać link do strony, długi tekst, numer telefonu, kontakt, a nawet dane sieci WiFi.</p>
<p>QR Code został opracowany w 1994 roku przez japońską firmę Denso Wave do śledzenia części samochodowych w fabryce. Dziś QR Code jest używany wszędzie, od płatności cyfrowych po menu w restauracjach, ponieważ można go zeskanować bezpośrednio aparatem telefonu.</p>

<h2>Elementy QR Code</h2>
<ul>
  <li><strong>Trzy duże kwadraty w rogach</strong> (finder pattern): pomagają aparatowi znaleźć QR Code i ustalić jego orientację, dzięki czemu kod jest czytelny nawet przy skanowaniu pod kątem lub do góry nogami.</li>
  <li><strong>Wzór wyrównujący</strong> (alignment pattern): mały kwadrat, który pomaga odczytać QR Code zagięty lub widziany pod kątem.</li>
  <li><strong>Obszar danych</strong>: małe kwadraciki zawierające zapisane przez Państwa informacje.</li>
  <li><strong>Strefa ciszy</strong> (quiet zone): pusta przestrzeń wokół QR Code, dzięki której łatwo oddzielić go od tła.</li>
</ul>

<h2>Ile danych może pomieścić?</h2>
<p>QR Code ma 40 wersji rozmiaru. Największa wersja mieści do 7 089 cyfr, czyli około 2 953 bajtów danych. W praktyce im mniej danych jest zapisanych, tym większe są kwadraciki i tym łatwiej zeskanować QR Code. Dlatego krótki link jest lepszy niż bardzo długi.</p>

<h2>Czytelny nawet po uszkodzeniu</h2>
<p>QR Code wykorzystuje korekcję błędów (error correction). Istnieją cztery poziomy:</p>
<ul>
  <li><strong>L</strong>: dane można odzyskać, jeśli uszkodzone jest około 7% QR Code.</li>
  <li><strong>M</strong>: około 15%. To popularny i zrównoważony wybór.</li>
  <li><strong>Q</strong>: około 25%.</li>
  <li><strong>H</strong>: około 30%; odpowiedni dla QR Code, na którym zostanie umieszczone logo lub który będzie drukowany w miejscu łatwo ulegającym zabrudzeniu.</li>
</ul>
<p>Im wyższy poziom korekcji, tym więcej kwadracików jest potrzebnych, więc wzór QR Code wygląda na gęstszy.</p>

<h2>Co można zapisać w QR Code?</h2>
<ul>
  <li>Link do strony, sklepu internetowego lub formularza.</li>
  <li>Dane WiFi, aby goście mogli połączyć się bez wpisywania hasła. Zobacz poradnik <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Cyfrową wizytówkę (vCard), e-mail, SMS i czat WhatsApp.</li>
  <li>Lokalizację na mapie i termin wydarzenia.</li>
</ul>

<h2>Statyczny i dynamiczny QR Code</h2>
<p>QR Code utworzony bezpośrednio z danych nazywa się <strong>statycznym QR Code</strong>: jego zawartość jest zapisana w obrazie i nie można jej zmienić, ale za to nigdy nie wygasa. <strong>Dynamiczny</strong> QR Code zawiera krótki link należący do jakiejś usługi, który następnie przekierowuje do wybranego przez Państwa celu; cel można zmienić, ale QR Code przestanie działać, jeśli usługa zostanie zamknięta. W większości zastosowań statyczny QR Code w zupełności wystarcza i jest bezpieczniejszy w dłuższej perspektywie.</p>

<p>Chcą Państwo spróbować? Proszę utworzyć <a href="/?type=qrcode">darmowy QR Code</a> już teraz lub przeczytać, <a href="/artikel/cara-membuat-qr-code-gratis">jak utworzyć QR Code w 3 krokach</a>.</p>
`
};
