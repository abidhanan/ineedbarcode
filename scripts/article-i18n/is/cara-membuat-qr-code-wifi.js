// cara-membuat-qr-code-wifi
module.exports = {
  title: "Hvernig á að búa til WiFi QR Code svo gestir þurfi ekki að slá inn lykilorð",
  desc: "Gestir þurfa aðeins að skanna QR Code til að tengjast WiFi. Hentar fyrir kaffihús, skrifstofur, gististaði og heimili. Svona býrð þú það til og setur það upp.",
  tags: ["Leiðbeiningar", "QR Code"],
  coverCaption: "WiFi-upplýsingarnar af beininum má geyma í einu QR Code.",
  inlineCaption: "Gestir kaffihússins geta tengst strax án þess að slá inn lykilorð.",
  faq: [
    ["Geta allir símar skannað WiFi QR Code?", "Innbyggða myndavélin í iPhone með iOS 11 eða nýrra og flestum Android-símum með Android 10 eða nýrra getur lesið það beint. Eldri símar gætu þurft forrit til að skanna QR Code."],
    ["Er WiFi QR Code öruggt?", "Hver sem skannar QR Code getur tengst WiFi-netinu þínu. Notaðu því gestanet og ekki setja upp QR Code fyrir einkanetið þitt á almannafæri."],
    ["Hvað á að gera ef skipt er um WiFi-lykilorð?", "Búðu til og prentaðu nýtt WiFi QR Code, því gamla QR Code inniheldur enn gamla lykilorðið."]
  ],
  body: `
<p>Það er oft fyrirhafnarsamt að stafa langt WiFi-lykilorð fyrir gesti, sérstaklega ef það inniheldur hástafi, tölustafi og tákn. Með <strong>WiFi QR Code</strong> þurfa gestir aðeins að beina myndavél símans að QR Code og tengjast samstundis.</p>

<h2>Hvernig WiFi QR Code virkar</h2>
<p>WiFi QR Code geymir heiti netsins (SSID), öryggisgerð og lykilorð á sérstöku sniði sem símar þekkja, til dæmis <code>WIFI:T:WPA;S:HeitiNets;P:Lykilord;;</code>. Innbyggða myndavélin í iPhone (iOS 11 eða nýrra) og flestum Android-símum (Android 10 eða nýrra) getur lesið það beint, án aukaforrita.</p>

<h2>Skrefin til að búa það til</h2>
<ol>
  <li>Opnaðu <a href="/?type=qrcode">QR Code-rafalinn</a> og veldu flipann <strong>WiFi</strong> undir Gögn.</li>
  <li>Sláðu inn <strong>heiti netsins</strong> nákvæmlega eins og það birtist á WiFi-listanum, þar með talið hástafi og lágstafi.</li>
  <li>Sláðu inn <strong>lykilorðið</strong> og veldu öryggisgerð. Flestir beinar á heimilum og skrifstofum nota WPA/WPA2/WPA3.</li>
  <li>Hakaðu við <strong>Falið net</strong> ef heiti WiFi-netsins birtist ekki á listanum.</li>
  <li>Bættu við ramma með texta eins og "SCAN WIFI" svo gestir viti til hvers það er, og sæktu síðan PNG-skrána.</li>
</ol>

<h2>Hvar á að setja það upp?</h2>
<ul>
  <li>Lítið spjald á borðinu á kaffihúsinu eða veitingastaðnum.</li>
  <li>Á vegg í setustofunni, í móttökunni eða í fundarherbergi skrifstofunnar.</li>
  <li>Í herbergjum á gististöðum, við dyrnar eða sjónvarpið.</li>
  <li>Undir beininum heima, svo fjölskyldan geti auðveldlega tengt ný tæki.</li>
</ul>

<h2>Öryggisráð</h2>
<ul>
  <li>Notaðu <strong>gestanet</strong> (guest network) ef beinirinn þinn styður það, svo gestir fari ekki inn á sama net og tölvur skrifstofunnar.</li>
  <li>Ef skipt er um WiFi-lykilorð skaltu búa til og prenta QR Code aftur, því gamla QR Code inniheldur gamla lykilorðið.</li>
  <li>Ekki setja upp WiFi QR Code fyrir einkanet á almannafæri þar sem hver sem er getur tekið mynd af því.</li>
</ul>

<h2>Ef QR Code tengist ekki</h2>
<p>Athugaðu stafsetningu á heiti netsins og lykilorðinu aftur, því einn rangur stafur veldur því að síminn nær ekki að tengjast. Gakktu einnig úr skugga um að valin öryggisgerð passi við stillingar beinisins. Vegna annarra vandamála við skönnun getur þú lesið um <a href="/artikel/barcode-tidak-bisa-dipindai">ástæður þess að ekki er hægt að skanna strikamerki</a>.</p>
`
};
