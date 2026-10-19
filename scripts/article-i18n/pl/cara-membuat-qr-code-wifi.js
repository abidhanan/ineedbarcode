// cara-membuat-qr-code-wifi
module.exports = {
  title: "Jak utworzyć QR Code WiFi, aby goście nie musieli wpisywać hasła",
  desc: "Gościom wystarczy zeskanować QR Code, aby połączyć się z WiFi. Idealne rozwiązanie dla kawiarni, biur, pensjonatów i domu. Oto jak go utworzyć i gdzie umieścić.",
  tags: ["Poradnik", "QR Code"],
  coverCaption: "Dane WiFi z routera można zapisać w jednym QR Code.",
  inlineCaption: "Goście kawiarni mogą od razu połączyć się bez wpisywania hasła.",
  faq: [
    ["Czy wszystkie telefony mogą zeskanować QR Code WiFi?", "Wbudowany aparat iPhone'a z iOS 11 lub nowszym oraz większości telefonów z Androidem 10 lub nowszym odczytuje go bezpośrednio. Starsze telefony mogą wymagać aplikacji do skanowania kodów QR."],
    ["Czy QR Code WiFi jest bezpieczny?", "Każdy, kto zeskanuje ten QR Code, może połączyć się z Państwa WiFi. Dlatego warto korzystać z sieci dla gości i nie umieszczać QR Code prywatnej sieci w miejscach publicznych."],
    ["Co zrobić, jeśli hasło WiFi zostało zmienione?", "Należy utworzyć i ponownie wydrukować QR Code WiFi, ponieważ stary QR Code nadal zawiera stare hasło."]
  ],
  body: `
<p>Dyktowanie gościom długiego hasła WiFi bywa kłopotliwe, zwłaszcza gdy zawiera wielkie litery, cyfry i symbole. Dzięki <strong>QR Code WiFi</strong> gościom wystarczy skierować aparat telefonu na QR Code, aby od razu się połączyć.</p>

<h2>Jak działa QR Code WiFi</h2>
<p>QR Code WiFi przechowuje nazwę sieci (SSID), rodzaj zabezpieczeń i hasło w specjalnym formacie rozpoznawanym przez telefony, na przykład <code>WIFI:T:WPA;S:NazwaSieci;P:Haslo;;</code>. Wbudowany aparat iPhone'a (iOS 11 lub nowszy) i większości urządzeń z Androidem (Android 10 lub nowszy) odczytuje go bezpośrednio, bez dodatkowych aplikacji.</p>

<h2>Jak go utworzyć</h2>
<ol>
  <li>Proszę otworzyć <a href="/?type=qrcode">generator QR Code</a> i wybrać kartę <strong>WiFi</strong> w sekcji Dane.</li>
  <li>Należy wpisać <strong>nazwę sieci</strong> dokładnie tak, jak widnieje na liście WiFi, z zachowaniem wielkich i małych liter.</li>
  <li>Następnie wpisać <strong>hasło</strong> i wybrać rodzaj zabezpieczeń. Większość domowych i biurowych routerów korzysta z WPA/WPA2/WPA3.</li>
  <li>Zaznaczyć <strong>Sieć ukryta</strong>, jeśli nazwa Państwa sieci WiFi nie jest widoczna na liście.</li>
  <li>Dodać ramkę z napisem, na przykład „SCAN WIFI”, aby goście wiedzieli, do czego służy kod, a potem pobrać PNG.</li>
</ol>

<h2>Gdzie go umieścić?</h2>
<ul>
  <li>Mała karteczka na stoliku w kawiarni lub restauracji.</li>
  <li>Ściana w salonie, recepcji lub sali konferencyjnej w biurze.</li>
  <li>Pokój w pensjonacie, przy drzwiach lub telewizorze.</li>
  <li>Spód routera w domu, aby domownicy mogli łatwo podłączać nowe urządzenia.</li>
</ul>

<h2>Porady dotyczące bezpieczeństwa</h2>
<ul>
  <li>Warto korzystać z <strong>sieci dla gości</strong> (guest network), jeśli router ją obsługuje, aby goście nie trafiali do tej samej sieci co komputery biurowe.</li>
  <li>Jeśli hasło WiFi zostanie zmienione, należy utworzyć i ponownie wydrukować QR Code, ponieważ stary QR Code będzie zawierał stare hasło.</li>
  <li>Nie należy umieszczać QR Code WiFi prywatnej sieci w miejscach publicznych, gdzie każdy może go sfotografować.</li>
</ul>

<h2>Gdy QR Code nie łączy z siecią</h2>
<p>Proszę ponownie sprawdzić pisownię nazwy sieci i hasła, ponieważ jedna błędna litera uniemożliwia połączenie. Warto też upewnić się, że wybrany rodzaj zabezpieczeń odpowiada ustawieniom routera. O innych problemach ze skanowaniem można przeczytać w artykule <a href="/artikel/barcode-tidak-bisa-dipindai">powody, dla których kod kreskowy się nie skanuje</a>.</p>
`
};
