// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 powodów, dla których kod kreskowy się nie skanuje, i jak temu zaradzić",
  desc: "Kod kreskowy lub QR Code nie daje się zeskanować? Oto siedem najczęstszych przyczyn, od kontrastu kolorów po rozmiar, wraz ze sposobami ich naprawy.",
  tags: ["Porady", "Kod kreskowy"],
  coverCaption: "Kontrast i rozmiar decydują o tym, czy QR Code łatwo się skanuje.",
  inlineCaption: "W magazynie kody kreskowe, których nie da się zeskanować, spowalniają pracę.",
  faq: [
    ["Dlaczego QR Code skanuje się na jednym telefonie, a na innym nie?", "Aparaty i aplikacje skanujące mają różne możliwości. QR Code zbyt mały, o niskim kontraście lub z odwróconymi kolorami częściej zawodzi na niektórych telefonach. Przed drukiem warto przetestować go na kilku telefonach."],
    ["Czy kolorowy kod kreskowy da się zeskanować?", "Tak, o ile kolor jest ciemny, a tło jasne. Należy unikać czerwieni dla kresek kodu, ponieważ wiele skanerów kasowych korzysta z czerwonego światła."],
    ["Jak sprawdzić, czy kod kreskowy jest poprawny?", "Wystarczy zeskanować wydruk kilkoma telefonami lub skanerami i upewnić się, że odczytane dane są dokładnie takie same jak wprowadzone."]
  ],
  body: `
<p>Nie ma nic bardziej irytującego niż wydrukowanie setek arkuszy z kodem kreskowym, który okazuje się nieczytelny dla skanera. Dobra wiadomość jest taka, że przyczyna jest zwykle prosta i łatwo jej zapobiec. Oto siedem najczęstszych powodów.</p>

<h2>1. Zbyt niski kontrast kolorów</h2>
<p>Skaner odczytuje różnicę między ciemnym a jasnym. Jasnoszary kod kreskowy na białym tle lub granatowy na czarnym trudno rozróżnić. <strong>Rozwiązanie:</strong> należy używać ciemnego koloru na jasnym tle. Czarny na białym to najbezpieczniejszy wybór.</p>

<h2>2. Odwrócone kolory lub kolor czerwony</h2>
<p>Jasny kod kreskowy na ciemnym tle nie jest obsługiwany przez wszystkie skanery. Ponadto wiele skanerów kasowych korzysta z czerwonego światła, przez co czerwone kreski wyglądają dla nich tak samo jak białe tło. <strong>Rozwiązanie:</strong> należy unikać czerwieni dla kresek i modułów kodu oraz nie odwracać kolorów.</p>

<h2>3. Zbyt mały rozmiar</h2>
<p>Aparat potrzebuje wystarczającej liczby pikseli, aby rozpoznać każdy moduł. <strong>Rozwiązanie:</strong> należy powiększyć kod kreskowy. W przypadku QR Code skanowanego z bliska warto zastosować rozmiar co najmniej około 2 × 2 cm. Zobacz <a href="/artikel/ukuran-barcode-untuk-dicetak">poradnik rozmiarów do druku</a>.</p>

<h2>4. Brak strefy ciszy</h2>
<p>Kod kreskowy przylegający do grafiki, tekstu lub krawędzi papieru trudno oddzielić od otoczenia. <strong>Rozwiązanie:</strong> należy zostawić pustą przestrzeń wokół kodu, zwłaszcza po lewej i prawej stronie kodu liniowego.</p>

<h2>5. Rozmazany lub zniekształcony obraz</h2>
<p>Kod kreskowy powiększony z małego obrazka, zapisany jako JPG niskiej jakości lub rozciągnięty nieproporcjonalnie traci swój kształt. <strong>Rozwiązanie:</strong> należy pobrać go z większym rozmiarem modułu w formacie PNG i zawsze zmieniać rozmiar proporcjonalnie.</p>

<h2>6. Błędne dane lub dane niezgodne z rodzajem kodu</h2>
<p>Każdy rodzaj kodu kreskowego ma swoje zasady. EAN-13 przyjmuje na przykład wyłącznie 12 lub 13 cyfr z poprawną cyfrą kontrolną. Link z literówką sprawia z kolei, że QR Code daje się odczytać, ale niczego nie otwiera. <strong>Rozwiązanie:</strong> należy sprawdzić dane przed drukiem. Generator <a href="/">I Need Barcode</a> wyświetli komunikat, jeśli dane nie są zgodne z zasadami wybranego rodzaju kodu kreskowego.</p>

<h2>7. Powierzchnia i oświetlenie</h2>
<p>Błyszczące materiały, przezroczysty plastik, zagięcia i zakrzywione powierzchnie mogą odbijać światło lub zniekształcać kod. <strong>Rozwiązanie:</strong> należy drukować na płaskiej, matowej powierzchni i testować w rzeczywistych warunkach oświetleniowych.</p>

<h2>A co z QR Code z grafiką?</h2>
<p>QR Code z nadanym kształtem, kolorami lub ramką nadal daje się zeskanować, o ile trzy kwadraty znacznikowe w rogach pozostają nienaruszone, a kontrast jest wystarczający. Więcej w artykule <a href="/artikel/desain-qr-code-kreatif">kreatywny projekt QR Code, który pozostaje czytelny</a>.</p>
<p>Najlepszy nawyk: <strong>zawsze testować jeden wydruk</strong> kilkoma telefonami i skanerami przed drukiem w dużym nakładzie.</p>
`
};
