// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Jak uzyskać kod kreskowy produktu EAN-13 dla małej firmy",
  desc: "Chcą Państwo, aby produkt trafił do sklepów osiedlowych lub supermarketów? Warto poznać znaczenie cyfr EAN-13, sposób rejestracji oficjalnego numeru w GS1 Indonesia i zasady jego drukowania.",
  tags: ["Biznes", "Handel detaliczny"],
  coverCaption: "Opakowanie produktu detalicznego wymaga zarejestrowanego kodu kreskowego EAN-13.",
  inlineCaption: "Sklep detaliczny rozpoznaje produkt po numerze EAN-13 w swoim systemie kasowym.",
  faq: [
    ["Czy można samodzielnie wymyślić numer EAN-13?", "Obraz kodu kreskowego można utworzyć samodzielnie, ale numer powinien pochodzić oficjalnie z GS1. Wymyślony numer może pokrywać się z numerem innego produktu i zostać odrzucony przez sklep detaliczny."],
    ["Czy każdy wariant produktu potrzebuje osobnego kodu kreskowego?", "Tak. Każdy odmienny wariant, na przykład o innym smaku, rozmiarze lub zawartości opakowania, wymaga własnego numeru EAN-13."],
    ["Czym jest cyfra kontrolna w EAN-13?", "Cyfra kontrolna to 13. cyfra obliczana na podstawie 12 poprzednich. Skaner wykorzystuje ją, aby upewnić się, że kod kreskowy został odczytany poprawnie. Generator I Need Barcode oblicza ją automatycznie po wpisaniu 12 cyfr."]
  ],
  body: `
<p>Jeśli chcą Państwo sprzedawać produkt w sklepach osiedlowych, supermarketach lub na dużych platformach sprzedażowych, zwykle zostaną Państwo poproszeni o umieszczenie na opakowaniu kodu kreskowego <strong>EAN-13</strong>. Kod ten zawiera 13 cyfr, które stanowią unikalny identyfikator produktu na całym świecie.</p>

<h2>Znaczenie 13 cyfr kodu EAN-13</h2>
<ul>
  <li><strong>Prefiks GS1</strong>: pierwsze trzy cyfry wskazują organizację GS1, która wydała numer. Numery wydawane przez GS1 Indonesia zaczynają się od <strong>899</strong>.</li>
  <li><strong>Numer firmy</strong>: identyfikator Państwa firmy nadawany podczas rejestracji.</li>
  <li><strong>Numer produktu</strong>: ustalany samodzielnie przez firmę dla każdego wariantu produktu, na przykład o innym smaku lub rozmiarze.</li>
  <li><strong>Cyfra kontrolna</strong>: ostatnia cyfra obliczana automatycznie na podstawie 12 poprzednich, aby zapobiec błędnym odczytom.</li>
</ul>

<h2>Dlaczego numer musi być oficjalny?</h2>
<p>Kod kreskowy EAN-13 może narysować każdy, ale jego <strong>numer</strong> musi być zarejestrowany. Sklepy detaliczne używają tego numeru, aby rozpoznawać produkt w swoim systemie. Numer wymyślony samodzielnie może pokrywać się z produktem innej firmy i zostać odrzucony podczas wprowadzania produktu do sklepu.</p>

<h2>Jak zarejestrować numer w GS1 Indonesia</h2>
<ol>
  <li>Należy przygotować dokumenty firmowe, takie jak NIB (numer rejestracyjny przedsiębiorstwa) i NPWP, oraz listę produktów, które mają otrzymać kod kreskowy.</li>
  <li>Zarejestrować firmę za pośrednictwem oficjalnej strony GS1 Indonesia i wybrać potrzebną liczbę numerów.</li>
  <li>Uiścić opłatę rejestracyjną i składkę roczną zgodnie z obowiązującymi zasadami.</li>
  <li>Po zatwierdzeniu otrzymają Państwo numer firmy i będą mogli tworzyć numery dla każdego produktu.</li>
</ol>
<p>Wymagania i opłaty mogą się zmieniać, dlatego zawsze warto sprawdzać aktualne informacje bezpośrednio na stronie GS1 Indonesia.</p>

<h2>Tworzenie obrazu kodu kreskowego</h2>
<p>Po otrzymaniu numeru proszę otworzyć <a href="/?type=ean13">generator EAN-13</a> i wpisać 12 lub 13 cyfr numeru produktu. Po wpisaniu 12 cyfr cyfra kontrolna zostanie obliczona automatycznie. Należy upewnić się, że opcja tekstu pod kodem kreskowym jest włączona, aby cyfry zostały wydrukowane, a następnie pobrać kod jako PNG.</p>

<h2>Porady dotyczące druku na opakowaniu</h2>
<ul>
  <li>Najlepiej używać czarnych lub granatowych kresek na białym tle. Należy unikać czerwieni dla kresek, ponieważ wiele skanerów kasowych korzysta z czerwonego światła, przez co czerwone kreski są nieczytelne.</li>
  <li>Nie należy nadmiernie pomniejszać kodu kreskowego. Standardowy rozmiar EAN-13 to około 37,3 × 25,9 mm i można go zmniejszyć do około 80%. Więcej w <a href="/artikel/ukuran-barcode-untuk-dicetak">poradniku rozmiarów kodów kreskowych</a>.</li>
  <li>Warto zostawić pustą przestrzeń po lewej i prawej stronie kodu i nie umieszczać go na zagięciach ani łączeniach opakowania.</li>
  <li>Przed drukiem w dużym nakładzie należy przetestować wydruk skanerem.</li>
</ul>
<p>W przypadku produktów sprzedawanych w Ameryce Północnej mogą Państwo zostać poproszeni również o użycie kodu <a href="/?type=upca">UPC-A</a>, który zawiera 12 cyfr.</p>
`
};
