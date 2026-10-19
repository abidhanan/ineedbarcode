// apa-itu-qr-code
module.exports = {
  title: "Kas yra QR Code ir kaip jis veikia?",
  desc: "QR Code gali saugoti nuorodą, tekstą ir net WiFi duomenis, o nuskaitomas būna net iš dalies pažeistas. Štai kaip jis veikia ir kokie jo privalumai.",
  tags: ["Pagrindai", "QR Code"],
  coverCaption: "QR Code galima nuskaityti tiesiog telefono kamera.",
  inlineCaption: "Kiekvieną QR Code sudaro maži juodi ir balti kvadratėliai.",
  faq: [
    ["Ar QR Code gali nustoti galioti?", "Statinis QR Code niekada nenustoja galioti, nes duomenys yra tiesiogiai įterpti į paveikslėlį. Dinaminis QR Code gali nustoti veikti, jei nuorodą teikianti paslauga nutraukia veiklą arba baigiasi prenumerata."],
    ["Kiek duomenų galima išsaugoti QR Code?", "Didžiausia QR Code versija gali talpinti iki 7 089 skaitmenų arba apie 2 953 baitus. Tačiau kuo mažiau duomenų, tuo lengviau QR Code nuskaityti."],
    ["Ar QR Code nuskaitomas, jei yra iš dalies pažeistas?", "Taip. Dėl klaidų taisymo QR Code nuskaitomas net tada, kai pažeista maždaug nuo 7 % iki 30 % jo ploto, priklausomai nuo naudojamo taisymo lygio L, M, Q ar H."]
  ],
  body: `
<p>QR Code (Quick Response Code) – tai kvadrato formos 2D brūkšninis kodas, sudarytas iš mažų juodų ir baltų kvadratėlių. Kitaip nei linijinis brūkšninis kodas, saugantis vos keliolika skaitmenų, QR Code gali talpinti svetainės nuorodą, ilgą tekstą, telefono numerį, kontaktą ir net WiFi tinklo duomenis.</p>
<p>QR Code 1994 m. sukūrė Japonijos bendrovė Denso Wave, kad gamykloje galėtų sekti automobilių dalis. Šiandien QR Code naudojamas visur – nuo skaitmeninių mokėjimų iki restoranų meniu, nes jį galima nuskaityti tiesiog telefono kamera.</p>

<h2>QR Code dalys</h2>
<ul>
  <li><strong>Trys dideli kvadratai kampuose</strong> (finder pattern): padeda kamerai rasti QR Code ir nustatyti jo kryptį, todėl jis nuskaitomas net pakreiptas ar apverstas.</li>
  <li><strong>Lygiavimo raštas</strong> (alignment pattern): mažas kvadratas, padedantis nuskaityti sulenktą ar kampu matomą QR Code.</li>
  <li><strong>Duomenų sritis</strong>: maži kvadratėliai, kuriuose yra jūsų išsaugota informacija.</li>
  <li><strong>Tylos zona</strong> (quiet zone): tuščia erdvė aplink QR Code, kad jį būtų lengva atskirti nuo fono.</li>
</ul>

<h2>Kiek duomenų galima išsaugoti?</h2>
<p>QR Code turi 40 dydžio versijų. Didžiausia versija gali talpinti iki 7 089 skaitmenų arba apie 2 953 baitus duomenų. Praktikoje kuo mažiau duomenų išsaugoma, tuo didesni kvadratėliai ir tuo lengviau QR Code nuskaityti. Todėl trumpa nuoroda geriau nei labai ilga.</p>

<h2>Nuskaitomas net pažeistas</h2>
<p>QR Code naudoja klaidų taisymą (error correction). Yra keturi lygiai:</p>
<ul>
  <li><strong>L</strong>: duomenis galima atkurti, jei pažeista apie 7 % QR Code.</li>
  <li><strong>M</strong>: apie 15 %. Tai įprastas ir subalansuotas pasirinkimas.</li>
  <li><strong>Q</strong>: apie 25 %.</li>
  <li><strong>H</strong>: apie 30 %, tinka QR Code, ant kurio bus dedamas logotipas arba kuris bus spausdinamas lengvai nešvarioje vietoje.</li>
</ul>
<p>Kuo aukštesnis taisymo lygis, tuo daugiau kvadratėlių reikia, todėl QR Code raštas atrodo tankesnis.</p>

<h2>Ką galima išsaugoti QR Code?</h2>
<ul>
  <li>Svetainės, internetinės parduotuvės ar formos nuorodą.</li>
  <li>WiFi duomenis, kad svečiai galėtų prisijungti neįvesdami slaptažodžio. Žr. gidą <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Skaitmeninę vizitinę kortelę (vCard), el. laišką, SMS ir WhatsApp pokalbį.</li>
  <li>Vietą žemėlapyje ir renginio tvarkaraštį.</li>
</ul>

<h2>Statinis ir dinaminis QR Code</h2>
<p>QR Code, sukurtas tiesiai iš duomenų, vadinamas <strong>statiniu QR Code</strong>: jo turinys įterptas į paveikslėlį ir negali būti pakeistas, tačiau jis taip pat niekada nenustoja galioti. <strong>Dinaminis</strong> QR Code turi tam tikros paslaugos trumpąją nuorodą, kuri nukreipia į jūsų tikslą; tikslą galima pakeisti, bet QR Code nustos veikti, jei ta paslauga nutrauks veiklą. Daugeliui poreikių statinio QR Code pakanka, be to, ilgalaikėje perspektyvoje jis saugesnis.</p>

<p>Norite išbandyti? Sukurkite <a href="/?type=qrcode">nemokamą QR Code</a> dabar arba perskaitykite, <a href="/artikel/cara-membuat-qr-code-gratis">kaip sukurti QR Code per 3 žingsnius</a>.</p>
`
};
