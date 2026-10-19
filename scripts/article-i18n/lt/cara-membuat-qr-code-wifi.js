// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kaip sukurti WiFi QR Code, kad svečiams nereikėtų rinkti slaptažodžio",
  desc: "Svečiams pakanka nuskaityti QR Code, kad prisijungtų prie WiFi. Puikiai tinka kavinėms, biurams, apgyvendinimo įstaigoms ir namams. Štai kaip jį sukurti ir pakabinti.",
  tags: ["Gidai", "QR Code"],
  coverCaption: "Maršrutizatoriaus WiFi duomenis galima išsaugoti viename QR Code.",
  inlineCaption: "Kavinės svečiai gali iš karto prisijungti nerinkdami slaptažodžio.",
  faq: [
    ["Ar visi telefonai gali nuskaityti WiFi QR Code?", "Integruota iPhone su iOS 11 ar naujesne versija kamera ir dauguma Android 10 ar naujesnių telefonų jį perskaito iš karto. Senesniems telefonams gali prireikti QR skaitymo programėlės."],
    ["Ar WiFi QR Code saugus?", "Kiekvienas, nuskaitęs tą QR Code, gali prisijungti prie jūsų WiFi. Todėl naudokite svečių tinklą ir nekabinkite privataus tinklo QR Code viešose vietose."],
    ["Ką daryti, jei WiFi slaptažodis pakeistas?", "Sukurkite ir iš naujo atspausdinkite WiFi QR Code, nes senasis QR Code vis dar turi seną slaptažodį."]
  ],
  body: `
<p>Diktuoti svečiams ilgą WiFi slaptažodį dažnai būna nepatogu, ypač jei jame yra didžiųjų raidžių, skaičių ir simbolių. Su <strong>WiFi QR Code</strong> svečiams pakanka nukreipti telefono kamerą į QR Code ir jie iš karto prisijungia.</p>

<h2>Kaip veikia WiFi QR Code</h2>
<p>WiFi QR Code saugo tinklo pavadinimą (SSID), saugos tipą ir slaptažodį specialiu formatu, kurį atpažįsta telefonai, pavyzdžiui, <code>WIFI:T:WPA;S:TinkloPavadinimas;P:Slaptazodis;;</code>. Integruota iPhone (iOS 11 ar naujesnė) ir daugumos Android (Android 10 ar naujesnė) telefonų kamera jį perskaito iš karto, be papildomų programėlių.</p>

<h2>Kaip jį sukurti</h2>
<ol>
  <li>Atidarykite <a href="/?type=qrcode">QR Code generatorių</a> ir skiltyje „Duomenys“ pasirinkite skirtuką <strong>WiFi</strong>.</li>
  <li>Įveskite <strong>tinklo pavadinimą</strong> tiksliai taip, kaip jis rodomas WiFi sąraše, įskaitant didžiąsias ir mažąsias raides.</li>
  <li>Įveskite <strong>slaptažodį</strong> ir pasirinkite saugos tipą. Dauguma namų ir biurų maršrutizatorių naudoja WPA/WPA2/WPA3.</li>
  <li>Pažymėkite <strong>Paslėptas tinklas</strong>, jei jūsų WiFi pavadinimas nerodomas sąraše.</li>
  <li>Pridėkite rėmelį su užrašu, pavyzdžiui, „SCAN WIFI“, kad svečiai suprastų, kam jis skirtas, ir atsisiųskite PNG.</li>
</ol>

<h2>Kur jį pakabinti?</h2>
<ul>
  <li>Maža kortelė ant kavinės ar restorano stalo.</li>
  <li>Svetainės, registratūros ar biuro posėdžių salės siena.</li>
  <li>Apgyvendinimo įstaigos kambarys – priklijuokite šalia durų ar televizoriaus.</li>
  <li>Namų maršrutizatoriaus apačia, kad šeimos nariai lengvai prijungtų naujus įrenginius.</li>
</ul>

<h2>Saugumo patarimai</h2>
<ul>
  <li>Naudokite <strong>svečių tinklą</strong> (guest network), jei jūsų maršrutizatorius jį palaiko, kad svečiai nepatektų į tą patį tinklą kaip biuro kompiuteriai.</li>
  <li>Jei WiFi slaptažodis pakeičiamas, sukurkite ir iš naujo atspausdinkite QR Code, nes senajame QR Code bus senas slaptažodis.</li>
  <li>Nekabinkite privataus tinklo WiFi QR Code viešose vietose, kur jį gali nufotografuoti bet kas.</li>
</ul>

<h2>Jei per QR Code nepavyksta prisijungti</h2>
<p>Dar kartą patikrinkite tinklo pavadinimo ir slaptažodžio rašybą, nes dėl vienos klaidingos raidės telefonas neprisijungs. Taip pat įsitikinkite, kad pasirinktas saugos tipas atitinka maršrutizatoriaus nustatymus. Dėl kitų nuskaitymo problemų skaitykite <a href="/artikel/barcode-tidak-bisa-dipindai">priežastys, kodėl brūkšninis kodas nenuskaitomas</a>.</p>
`
};
