// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 arsye pse barkodi nuk skanohet dhe si ta zgjidhni",
  desc: "Barkodi ose QR Code nuk skanohet? Kontrolloni shtatë shkaqet më të shpeshta, nga kontrasti i ngjyrave te madhësia, si dhe mënyrat për t'i rregulluar.",
  tags: ["Këshilla", "Barkod"],
  coverCaption: "Kontrasti dhe madhësia përcaktojnë nëse QR Code skanohet lehtë.",
  inlineCaption: "Në magazinë, barkodi që nuk skanohet e ngadalëson punën.",
  faq: [
    ["Pse QR Code skanohet me një telefon, por jo me një tjetër?", "Kamerat dhe aplikacionet e skanimit kanë aftësi të ndryshme. QR Code që është shumë i vogël, ka kontrast të ulët ose ngjyra të përmbysura dështon më shpesh në disa telefona. Provojeni me disa telefona para se ta printoni."],
    ["A mund të skanohet një barkod me ngjyra?", "Po, për sa kohë ngjyra është e errët mbi një sfond të çelur. Shmangni ngjyrën e kuqe për vijat e barkodit, sepse shumë skanerë arkash përdorin dritë të kuqe."],
    ["Si të kontrolloj nëse barkodi është i saktë?", "Skanoni kopjen e printuar me disa telefona ose skanerë dhe sigurohuni që të dhënat e lexuara të jenë saktësisht të njëjta me të dhënat që keni futur."]
  ],
  body: `
<p>Nuk ka gjë më të bezdisshme sesa një barkod që është printuar tashmë në qindra kopje dhe pastaj del se nuk skanohet. Lajmi i mirë është se shkaku zakonisht është i thjeshtë dhe lehtë mund të parandalohet. Ja shtatë shkaqet më të shpeshta.</p>

<h2>1. Kontrasti i ngjyrave është shumë i ulët</h2>
<p>Skaneri lexon ndryshimin midis të errëtës dhe të çelurës. Një barkod gri i çelët mbi të bardhë, ose blu e errët mbi të zezë, dallohet me vështirësi. <strong>Zgjidhja:</strong> përdorni ngjyrë të errët mbi sfond të çelur. E zeza mbi të bardhë është zgjedhja më e sigurt.</p>

<h2>2. Ngjyra të përmbysura ose ngjyrë e kuqe</h2>
<p>Barkodi i çelët mbi sfond të errët nuk mbështetet nga të gjithë skanerët. Për më tepër, shumë skanerë arkash përdorin dritë të kuqe, kështu që vijat e kuqe duken njësoj si sfondi i bardhë. <strong>Zgjidhja:</strong> shmangni ngjyrën e kuqe për vijat ose modulet e barkodit dhe mos i përmbysni ngjyrat.</p>

<h2>3. Madhësia është shumë e vogël</h2>
<p>Kamerës i duhen mjaft piksela për të njohur çdo modul. <strong>Zgjidhja:</strong> zmadhoni barkodin. Për QR Code që skanohet nga afër, përdorni të paktën rreth 2 × 2 cm. Shikoni <a href="/artikel/ukuran-barcode-untuk-dicetak">udhëzuesin për madhësinë e printimit</a>.</p>

<h2>4. Mungon zona e qetë</h2>
<p>Barkodi që prek një imazh, tekst ose skajin e letrës dallohet me vështirësi nga rrethina. <strong>Zgjidhja:</strong> lini hapësirë bosh përreth barkodit, sidomos majtas dhe djathtas barkodit me vija.</p>

<h2>5. Imazh i turbullt ose i shtrembëruar</h2>
<p>Barkodi që zmadhohet nga një imazh i vogël, ruhet si JPG me cilësi të ulët ose tërhiqet deri sa humbet përpjesëtimet, e humbet formën e vet. <strong>Zgjidhja:</strong> shkarkojeni me madhësi më të madhe moduli në formatin PNG dhe ndryshojeni gjithmonë madhësinë në mënyrë proporcionale.</p>

<h2>6. Të dhëna të gabuara ose që nuk i përshtaten llojit</h2>
<p>Çdo lloj barkodi ka rregullat e veta. EAN-13, për shembull, pranon vetëm 12 ose 13 shifra me shifër kontrolli të saktë. Një lidhje e shtypur gabim gjithashtu bën që QR Code të lexohet, por të mos hapë asgjë. <strong>Zgjidhja:</strong> kontrolloni të dhënat para printimit. Gjeneratori <a href="/">I Need Barcode</a> shfaq një mesazh nëse të dhënat nuk përputhen me rregullat e llojit të zgjedhur të barkodit.</p>

<h2>7. Sipërfaqja dhe ndriçimi</h2>
<p>Materialet me shkëlqim, plastika e tejdukshme, palosjet dhe sipërfaqet e lakuara mund të reflektojnë dritën ose të ndryshojnë formën e barkodit. <strong>Zgjidhja:</strong> printojeni mbi një sipërfaqe të sheshtë dhe pa shkëlqim, pastaj provojeni në kushtet reale të ndriçimit.</p>

<h2>Për QR Code me dizajn</h2>
<p>QR Code që ka formë, ngjyrë ose kornizë mund të skanohet ende, për sa kohë tre katrorët shënjues në qoshet e tij janë të paprekur dhe kontrasti është i mjaftueshëm. Lexoni më shumë te <a href="/artikel/desain-qr-code-kreatif">dizajni kreativ i QR Code që mbetet i lexueshëm</a>.</p>
<p>Zakoni më i mirë: <strong>provoni gjithmonë një kopje të printuar</strong> me disa telefona dhe skanerë para se të printoni në sasi të mëdha.</p>
`
};
