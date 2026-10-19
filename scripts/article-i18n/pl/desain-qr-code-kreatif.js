// desain-qr-code-kreatif
module.exports = {
  title: "Kreatywny projekt QR Code, który nadal da się zeskanować",
  desc: "QR Code może mieć kształt serca lub koła, ramkę i kolory. Warto poznać zasady, dzięki którym projekt pozostanie atrakcyjny, a kod łatwy do zeskanowania.",
  tags: ["Projektowanie", "QR Code"],
  coverCaption: "Kolor sprawia, że QR Code jest atrakcyjniejszy, o ile kontrast pozostaje mocny.",
  inlineCaption: "Projekt QR Code zawsze warto przetestować przed drukiem.",
  faq: [
    ["Czy QR Code w kształcie serca da się zeskanować?", "Tak. Właściwy QR Code pozostaje nienaruszony w środku, a reszta to jedynie wzór dekoracyjny. Dopóki kontrast jest mocny, a rozmiar wystarczający, QR Code pozostaje czytelny."],
    ["Jakie kolory są bezpieczne dla QR Code?", "Ciemne kolory, takie jak czarny, granatowy, ciemnozielony, fioletowy lub ciemnobrązowy, na białym lub bardzo jasnym tle."],
    ["Czy do QR Code można dodać napis lub ramkę?", "Tak. Ramka z wezwaniem w rodzaju „ZESKANUJ MNIE” wręcz pomaga zrozumieć, do czego służy kod, o ile nie zasłania QR Code."]
  ],
  body: `
<p>Czarno-biały QR Code jest funkcjonalny, ale na opakowaniu, zaproszeniu czy materiałach promocyjnych często wygląda sztywno. Odrobina projektowania sprawia, że QR Code wygląda atrakcyjniej i nie traci swojej funkcji. Kluczem jest zrozumienie, które elementy można zmieniać, a które muszą pozostać nienaruszone.</p>

<h2>Kształt zewnętrzny: serce, koło i inne</h2>
<p>W sekcji Projekt w <a href="/?type=qrcode">generatorze QR Code</a> można wybrać kształt, taki jak koło, serce, sześciokąt, ośmiokąt, gwiazda lub romb. Właściwy QR Code pozostaje w środku, a reszta jest wypełniana wzorem dekoracyjnym aż do uzyskania wybranego kształtu. Wzór dekoracyjny nie zawiera danych, więc nie przeszkadza w skanowaniu, o ile wokół właściwego QR Code jest pusta przestrzeń.</p>

<h2>Styl kropek</h2>
<p>Kwadraciki QR Code można zamienić na zaokrąglone kształty lub okrągłe kropki. Aby kod nadal łatwo się skanował, trzy duże kwadraty w rogach (finder pattern) najlepiej pozostawić jako pełne kwadraty, ponieważ to ich aparat szuka w pierwszej kolejności. Nasz generator zawsze rysuje te elementy jako pełne kwadraty, co najwyżej z zaokrąglonymi rogami, niezależnie od wybranego stylu kropek.</p>

<h2>Kolor</h2>
<ul>
  <li>Należy używać <strong>ciemnego</strong> koloru dla QR Code i <strong>jasnego</strong> dla tła. Granatowy, ciemnozielony, fioletowy lub ciemnobrązowy są zazwyczaj bezpieczne.</li>
  <li>Warto unikać bladych kolorów dla QR Code, takich jak żółty, bladoróżowy czy jasnoszary.</li>
  <li>Nie należy odwracać kolorów, tworząc jasny QR Code na ciemnym tle, ponieważ nie wszystkie aplikacje skanujące to obsługują.</li>
</ul>

<h2>Ramka i wezwanie do działania</h2>
<p>Ramka z wezwaniem w rodzaju „ZESKANUJ MNIE”, „MENU” lub „SCAN WIFI” wyraźnie pomaga ludziom zrozumieć przeznaczenie QR Code. Można wybrać ramkę z etykietą u dołu, etykietą u góry, narożnikami, dymkiem, kołem lub wstęgą, a następnie zmienić jej tekst i kolor.</p>

<h2>Zasady, dzięki którym projekt pozostaje czytelny</h2>
<ol>
  <li>Należy zachować mocny <strong>kontrast</strong> między QR Code a tłem.</li>
  <li><strong>Trzy kwadraty znacznikowe</strong> w rogach powinny być wyraźne i niezasłonięte.</li>
  <li>Wokół QR Code i ramki trzeba zostawić <strong>pustą przestrzeń</strong>.</li>
  <li>Nie należy nadmiernie pomniejszać ozdobionego QR Code. Kształty takie jak serce sprawiają, że obszar właściwego QR Code jest mniejszy niż cały obraz.</li>
  <li>Przed drukiem warto <strong>przetestować</strong> kod kilkoma telefonami.</li>
</ol>

<p>Jeśli projekt trudno zeskanować, proszę przywracać ustawienia podstawowe pojedynczo za pomocą przycisku <strong>Resetuj</strong>, aby znaleźć przyczynę. O innych częstych przyczynach można przeczytać w artykule <a href="/artikel/barcode-tidak-bisa-dipindai">7 powodów, dla których kod kreskowy się nie skanuje</a>.</p>
`
};
