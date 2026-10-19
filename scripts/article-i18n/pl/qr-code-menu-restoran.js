// qr-code-menu-restoran
module.exports = {
  title: "QR Code do menu restauracji: kompletny poradnik",
  desc: "Cyfrowe menu dostępne przez QR Code to wygoda dla gości i oszczędność na druku. Oto jak je utworzyć, przygotować menu i umieścić kod na stolikach.",
  tags: ["Biznes", "QR Code"],
  coverCaption: "QR Code na stoliku prowadzi gości prosto do cyfrowego menu.",
  inlineCaption: "QR Code warto umieścić tam, gdzie łatwo po niego sięgnąć z krzesła.",
  faq: [
    ["Co lepiej sprawdza się jako cyfrowe menu: PDF czy strona internetowa?", "Strona internetowa jest zwykle wygodniejsza w czytaniu na telefonie i szybciej się otwiera. PDF można stosować, jeśli plik jest mały, a tekst na ekranie wystarczająco duży."],
    ["Jaki rozmiar powinien mieć QR Code menu na stoliku?", "Około 3–5 cm wystarcza, aby zeskanować go z krzesła. Najlepiej użyć materiału odpornego na rozlane napoje i niezbyt błyszczącego."],
    ["Czy po zmianie menu trzeba ponownie drukować QR Code?", "Nie, o ile link pozostaje ten sam. Wystarczy zaktualizować zawartość strony lub pliku menu, do którego prowadzi QR Code."]
  ],
  body: `
<p>Cyfrowe menu dostępne przez QR Code stało się codziennością w kawiarniach i restauracjach. Gościom wystarczy zeskanować QR Code na stoliku, aby zobaczyć listę dań, ceny i zdjęcia. Właściciel lokalu oszczędza dzięki temu na druku i może łatwo zmieniać ceny lub menu.</p>

<h2>Zalety menu z QR Code</h2>
<ul>
  <li><strong>Łatwa aktualizacja</strong>: zmiana cen lub dodanie dań bez ponownego drukowania karty.</li>
  <li><strong>Oszczędność</strong>: wystarczy wydrukować mały QR Code dla każdego stolika.</li>
  <li><strong>Więcej informacji</strong>: zdjęcia, opisy i oznaczenia, takie jak ostre czy wegetariańskie.</li>
  <li><strong>Obsługa zamówień online</strong>: kierowanie gości do formularza zamówienia lub na WhatsApp.</li>
</ul>

<h2>Krok 1: Przygotowanie menu online</h2>
<p>QR Code zawiera wyłącznie link, dlatego potrzebne jest menu dostępne w internecie. Możliwości to między innymi podstrona własnej witryny, plik PDF w publicznie udostępnionym magazynie online lub strona katalogu na platformie zamówień. Należy zadbać, aby menu było wygodne w czytaniu na ekranie telefonu: tekst odpowiednio duży, zdjęcia niezbyt ciężkie, a ceny czytelne.</p>

<h2>Krok 2: Utworzenie QR Code</h2>
<ol>
  <li>Proszę skopiować link do menu.</li>
  <li>Otworzyć <a href="/?type=qrcode">generator QR Code</a>, wybrać kartę <strong>URL</strong> i wkleić link.</li>
  <li>W sekcji Projekt dodać ramkę z napisem „MENU” lub „ZESKANUJ, ABY ZOBACZYĆ MENU”.</li>
  <li>Dopasować kolory do identyfikacji restauracji, zachowując jednak ciemny kolor na jasnym tle.</li>
  <li>Pobrać PNG z rozmiarem modułu wystarczająco dużym do druku.</li>
</ol>
<p>Warto używać linku, który się nie zmieni. Jeśli menu zostanie przeniesione pod inny adres, wydrukowanego już QR Code nie da się zaktualizować. Wyjaśnienie znajduje się w artykule <a href="/artikel/apa-itu-qr-code">czym jest QR Code</a>.</p>

<h2>Krok 3: Druk i umieszczenie</h2>
<ul>
  <li>Drukować w rozmiarze co najmniej około 3–5 cm, aby łatwo było zeskanować kod z krzesła.</li>
  <li>Używać materiałów odpornych na rozlane napoje, takich jak naklejka winylowa lub laminowana karta bez nadmiernego połysku.</li>
  <li>Umieścić kod w łatwo dostępnym miejscu, na przykład na akrylowym stojaku na środku stolika.</li>
  <li>Dodać numer stolika obok QR Code, jeśli goście zamawiają przez czat.</li>
</ul>

<h2>Nie zapominajmy o gościach bez telefonu</h2>
<p>Warto mieć jedno lub dwa drukowane menu dla gości, którzy nie mają przy sobie telefonu, mają rozładowaną baterię lub po prostu wolą papierową kartę.</p>
<p>Mogą Państwo również utworzyć <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a> dla gości i umieścić go obok QR Code menu.</p>
`
};
