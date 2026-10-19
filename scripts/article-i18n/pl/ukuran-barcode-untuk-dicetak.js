// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Właściwy rozmiar i rozdzielczość kodu kreskowego do druku",
  desc: "Zbyt mały lub rozmazany kod kreskowy trudno zeskanować. Warto poznać minimalne rozmiary, zasadę odległości skanowania i bezpieczną rozdzielczość obrazu do druku.",
  tags: ["Poradnik", "Druk"],
  coverCaption: "Drukarka etykiet drukuje kody kreskowe na paczki i opakowania.",
  inlineCaption: "Rozmiar etykiety określa, jak duży kod kreskowy można wydrukować.",
  faq: [
    ["Jaki jest minimalny rozmiar QR Code do druku?", "Przy skanowaniu z bliska bezpiecznym minimum jest około 2 × 2 cm. Przy większych odległościach należy stosować proporcję około 10 : 1 między odległością skanowania a szerokością QR Code."],
    ["Jaki jest standardowy rozmiar kodu kreskowego EAN-13?", "Standardowy rozmiar EAN-13 to około 37,3 × 25,9 mm. Można go zmniejszyć do około 80% lub powiększyć do 200%."],
    ["Dlaczego kod kreskowy jest rozmazany po wydrukowaniu?", "Zwykle dlatego, że mały obraz został powiększony lub zapisany jako JPG niskiej jakości. Należy pobrać kod z większym rozmiarem modułu w formacie PNG."]
  ],
  body: `
<p>Kod kreskowy, który dobrze wygląda na ekranie, nie zawsze jest czytelny po wydrukowaniu. Zbyt mały rozmiar, niska rozdzielczość lub rozlewający się tusz mogą sprawić, że skaner go nie odczyta. Oto poradnik, dzięki któremu wydruki pozostaną czytelne.</p>

<h2>Czym jest moduł</h2>
<p><strong>Moduł</strong> to najmniejsza jednostka kodu kreskowego, czyli jeden mały kwadracik w QR Code lub najwęższa kreska w kodzie liniowym. Rozmiar modułu decyduje o tym, jak łatwo odczytać kod. W <a href="/">I Need Barcode</a> rozmiar modułu można ustawić w sekcji Ustawienia: im większa wartość, tym większy i ostrzejszy pobrany obraz.</p>

<h2>Minimalny rozmiar QR Code</h2>
<ul>
  <li>Przy skanowaniu z bliska (na przykład wizytówka lub etykieta produktu) bezpiecznym minimum jest około <strong>2 × 2 cm</strong>.</li>
  <li>Warto stosować zasadę proporcji około <strong>10 : 1</strong>: odległość skanowania to mniej więcej dziesięciokrotność szerokości QR Code. W przypadku plakatu skanowanego z odległości 2 metrów QR Code powinien mieć co najmniej około 20 cm.</li>
  <li>Im więcej danych zapisano, tym gęstszy wzór, a więc potrzebny jest większy rozmiar.</li>
</ul>

<h2>Rozmiar kodu kreskowego produktu</h2>
<p>Standardowy rozmiar <a href="/?type=ean13">EAN-13</a> to około 37,3 × 25,9 mm (100%). Można go zmniejszyć do około 80% lub powiększyć do 200%. Nie należy zbytnio skracać wysokości kresek, ponieważ skaner kasowy potrzebuje miejsca, aby odczytywać kod pod różnymi kątami.</p>

<h2>Rozdzielczość obrazu</h2>
<ul>
  <li>Do druku każdy moduł powinien być odwzorowany przez <strong>kilka pełnych pikseli</strong>, a nie ułamek piksela. Przy pobieraniu warto wybrać większy rozmiar modułu, a potem pomniejszyć kod w programie graficznym, a nie odwrotnie.</li>
  <li>Należy unikać powiększania małego obrazu kodu kreskowego, ponieważ krawędzie kwadracików staną się rozmyte lub postrzępione.</li>
  <li>Najlepiej zapisywać w formacie PNG, aby kolory i krawędzie nie ulegały zniekształceniu jak w JPG.</li>
</ul>

<h2>Strefa ciszy</h2>
<p>Każdy kod kreskowy potrzebuje wokół siebie pustej przestrzeni, zwanej <strong>strefą ciszy</strong> (quiet zone). W przypadku QR Code powinna mieć idealnie szerokość czterech modułów. W kodzie liniowym szczególnie ważna jest pusta przestrzeń po lewej i prawej stronie. Nie należy umieszczać zbyt blisko tekstu, linii dekoracyjnych ani krawędzi opakowania.</p>

<h2>Kolor i materiał</h2>
<ul>
  <li>Należy używać ciemnego koloru dla kodu kreskowego i jasnego dla tła.</li>
  <li>Warto unikać materiałów błyszczących lub przezroczystych, ponieważ odbicia światła mogą przeszkadzać aparatowi.</li>
  <li>Zawsze warto wydrukować jeden egzemplarz próbny i przetestować go kilkoma telefonami lub skanerami przed drukiem w większej ilości.</li>
</ul>
<p>Jeśli kod kreskowy nadal trudno zeskanować, proszę zajrzeć do artykułu <a href="/artikel/barcode-tidak-bisa-dipindai">7 powodów, dla których kod kreskowy się nie skanuje</a>.</p>
`
};
