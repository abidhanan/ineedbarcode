// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kā izveidot WiFi QR Code, lai viesiem nav jāievada parole",
  desc: "Viesiem pietiek noskenēt QR Code, lai pieslēgtos WiFi. Piemērots kafejnīcām, birojiem, viesu namiem un mājām. Lūk, kā to izveidot un novietot.",
  tags: ["Ceļveži", "QR Code"],
  coverCaption: "Rūtera WiFi datus var saglabāt vienā QR Code.",
  inlineCaption: "Kafejnīcas viesi var uzreiz pieslēgties, neievadot paroli.",
  faq: [
    ["Vai visi tālruņi var noskenēt WiFi QR Code?", "iPhone iebūvētā kamera ar iOS 11 vai jaunāku versiju un lielākā daļa Android 10 vai jaunāku ierīču to nolasa uzreiz. Vecākiem tālruņiem var būt nepieciešama QR skenēšanas lietotne."],
    ["Vai WiFi QR Code ir drošs?", "Ikviens, kas noskenē šo QR Code, var pieslēgties jūsu WiFi. Tāpēc izmantojiet viesu tīklu un neizvietojiet privātā tīkla QR Code publiskās vietās."],
    ["Ko darīt, ja WiFi parole ir nomainīta?", "Izveidojiet un izdrukājiet WiFi QR Code no jauna, jo vecajā QR Code joprojām ir vecā parole."]
  ],
  body: `
<p>Diktēt viesiem garu WiFi paroli bieži ir neērti, it īpaši, ja tajā ir lielie burti, cipari un simboli. Ar <strong>WiFi QR Code</strong> viesiem pietiek pavērst tālruņa kameru pret QR Code, un viņi uzreiz ir pieslēgušies.</p>

<h2>Kā darbojas WiFi QR Code</h2>
<p>WiFi QR Code glabā tīkla nosaukumu (SSID), drošības veidu un paroli īpašā formātā, ko atpazīst tālruņi, piemēram, <code>WIFI:T:WPA;S:TiklaNosaukums;P:Parole;;</code>. iPhone (iOS 11 vai jaunāka versija) un lielākās daļas Android ierīču (Android 10 vai jaunāka versija) iebūvētā kamera to nolasa uzreiz, bez papildu lietotnēm.</p>

<h2>Kā to izveidot</h2>
<ol>
  <li>Atveriet <a href="/?type=qrcode">QR Code ģeneratoru</a> un sadaļā “Dati” izvēlieties cilni <strong>WiFi</strong>.</li>
  <li>Ievadiet <strong>tīkla nosaukumu</strong> tieši tā, kā tas redzams WiFi sarakstā, ievērojot lielos un mazos burtus.</li>
  <li>Ievadiet <strong>paroli</strong> un izvēlieties drošības veidu. Lielākā daļa mājas un biroja rūteru izmanto WPA/WPA2/WPA3.</li>
  <li>Atzīmējiet <strong>Slēpts tīkls</strong>, ja jūsu WiFi nosaukums sarakstā netiek rādīts.</li>
  <li>Pievienojiet rāmi ar uzrakstu, piemēram, “SCAN WIFI”, lai viesi saprastu tā nozīmi, un lejupielādējiet PNG.</li>
</ol>

<h2>Kur to novietot?</h2>
<ul>
  <li>Maza kartīte uz kafejnīcas vai restorāna galda.</li>
  <li>Uz viesistabas, reģistratūras vai biroja sanāksmju telpas sienas.</li>
  <li>Viesu nama istabā – pielīmēta pie durvīm vai televizora.</li>
  <li>Mājas rūtera apakšā, lai ģimenes locekļi varētu viegli pieslēgt jaunas ierīces.</li>
</ul>

<h2>Drošības padomi</h2>
<ul>
  <li>Izmantojiet <strong>viesu tīklu</strong> (guest network), ja jūsu rūteris to atbalsta, lai viesi nenonāktu tajā pašā tīklā, kurā ir biroja datori.</li>
  <li>Ja WiFi parole tiek nomainīta, izveidojiet un izdrukājiet QR Code no jauna, jo vecajā QR Code būs vecā parole.</li>
  <li>Neizvietojiet privātā tīkla WiFi QR Code publiskās vietās, kur to var nofotografēt jebkurš.</li>
</ul>

<h2>Ja ar QR Code neizdodas pieslēgties</h2>
<p>Vēlreiz pārbaudiet tīkla nosaukuma un paroles pareizrakstību, jo viena nepareiza burta dēļ tālrunis nespēs pieslēgties. Pārliecinieties arī, ka izvēlētais drošības veids atbilst rūtera iestatījumiem. Par citām skenēšanas problēmām lasiet rakstā <a href="/artikel/barcode-tidak-bisa-dipindai">iemesli, kāpēc svītrkodu nevar noskenēt</a>.</p>
`
};
