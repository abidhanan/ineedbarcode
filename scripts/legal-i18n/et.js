// Privaatsuspoliitika & Kasutustingimused (eesti), tõlgitud failist scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Privaatsuspoliitika",
    terms: "Kasutustingimused",
    effective: "Kehtib alates {date}"
  },
  privacy: {
    title: "Privaatsuspoliitika",
    desc: "Milliseid andmeid I Need Barcode töötleb, kui loote vöötkoode ja QR Code'e, ning kuidas me neid käsitleme.",
    body: `
<p>I Need Barcode (ineedbarcode.com) on tasuta vöötkoodide ja QR Code'ide generaator, mida haldab Abid Hanan Wicaksono. See poliitika selgitab, milliseid andmeid me töötleme, kui te seda veebisaiti kasutate, ja kuidas me neid käsitleme. Kogume teadlikult nii vähe andmeid kui võimalik: teenuse kasutamiseks ei pea te registreeruma, sisse logima ega oma nime ja e-posti aadressi esitama.</p>
<h2>Andmed, mida me töötleme</h2>
<ul>
<li><strong>Vöötkoodi sisu.</strong> Tekst, lingid, WiFi-andmed, kontaktid ja muud teie sisestatud andmed töödeldakse otse teie brauseris. Vöötkoodide pildid luuakse teie seadmes ja neid ei saadeta meie serveritesse, ka mitte siis, kui loote korraga palju vöötkoode.</li>
<li><strong>Asukoht.</strong> Nupp „Kasuta minu asukohta“ küsib seadme asukohta alles pärast seda, kui olete selle oma brauseris lubanud. Koordinaadid sisestatakse ainult vormi välja ja neid ei saadeta meile.</li>
<li><strong>Ligikaudne riik.</strong> Algse keele valimiseks võib veebisait tuvastada teie ligikaudse riigi meie serverile saadetud päringu põhjal. Seda teavet ei salvestata andmebaasi.</li>
<li><strong>Tehnilised andmed.</strong> Nagu peaaegu kõigil veebisaitidel, logib meie majutusteenuse pakkuja (Vercel) päringute tehnilisi andmeid, nagu IP-aadress, brauseri tüüp ja juurdepääsu aeg, turvalisuse ja käitamise eesmärgil. Neid logisid säilitatakse ainult ajutiselt vastavalt Verceli põhimõtetele.</li>
<li><strong>Artiklite statistika.</strong> Kui see on lubatud, salvestatakse vaatamiste, meeldimiste ja jagamiste arv ainult artikli kogusummana, ilma andmeteta, mis teid tuvastaksid.</li>
</ul>
<h2>Küpsised ja brauserisse salvestamine</h2>
<ul>
<li><strong>inbLang</strong>: jätab meelde keele, mille olete selles seadmes valinud (localStorage).</li>
<li><strong>inbCountry</strong>: salvestab ligikaudse riigi üheks seansiks, et keelt ei peaks uuesti tuvastama (sessionStorage).</li>
<li><strong>Muu kohalik salvestus</strong> (localStorage ja sessionStorage): märgib artiklid, mis teile meeldivad, ja takistab ühe külastuse kahekordset loendamist. Need andmed jäävad teie seadmesse.</li>
<li><strong>Kolmandate osapoolte analüütikaküpsised</strong> teenustelt Google Analytics ja Microsoft Clarity, mida kirjeldatakse allpool.</li>
</ul>
<h2>Analüütika</h2>
<p>Kasutame analüütikatööriistu, et mõista, kuidas veebisaiti kasutatakse, ja seda paremaks muuta. Need tööriistad laaditakse alles pärast seda, kui hakkate lehega suhtlema, ja neid ei laadita üldse, kui teie brauser saadab Global Privacy Control või Do Not Track signaali. Vöötkoodide ja vormide sisu ei saadeta kunagi analüütikatööriistadele; registreeritakse ainult sündmused, nagu valitud vöötkoodi tüüp ja allalaadimisnupu klõpsud.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): kasutab küpsiseid, et mõõta avatud lehti, ligikaudset riiki, seadme tüüpi ja eespool nimetatud sündmusi. Reklaamiga seotud salvestus ja Google Signals on välja lülitatud. Andmeid töötleb Google kooskõlas <a href="https://policies.google.com/privacy">Google'i privaatsuseeskirjadega</a>.</li>
<li><strong>Microsoft Clarity</strong>: registreerib suhtlust, nagu klõpsud ja kerimine, soojuskaartide ja seansisalvestiste jaoks ning varjab sisestusväljade sisu. Andmeid töötleb Microsoft kooskõlas <a href="https://privacy.microsoft.com/privacystatement">Microsofti privaatsusavaldusega</a>.</li>
</ul>
<p>Analüütikast saate keelduda, kui lülitate sisse Global Privacy Control või Do Not Track, blokeerite brauseri seadetes kolmandate osapoolte küpsised, kasutate jälgimise blokeerijat või installite <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> laienduse. Veebisaiti saab endiselt täielikult kasutada.</p>
<h2>Kolmandate osapoolte teenused</h2>
<ul>
<li><strong>Vercel Inc.</strong> pakub majutusteenust. Serverid võivad asuda väljaspool Indoneesiat.</li>
<li><strong>Google Fonts</strong> kasutatakse teatud kirjasüsteemide kuvamiseks (näiteks araabia, tai või jaapani kiri). Fontide laadimisel on teie IP-aadress Google'ile nähtav.</li>
<li><strong>Jagamisnupud</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) ja sotsiaalmeedia lingid võtavad nende teenustega ühendust ainult siis, kui neil klõpsate.</li>
</ul>
<h2>Turvalisus ja andmete jagamine</h2>
<p>Kõik ühendused selle veebisaidiga kasutavad HTTPS-i. Me ei müü, rendi ega kauple isikuandmetega. Andmeid jagatakse ainult eespool nimetatud teenusepakkujatega niivõrd, kuivõrd see on veebisaidi toimimiseks vajalik, või kui seadus seda nõuab.</p>
<h2>Lapsed</h2>
<p>See teenus ei ole mõeldud alla 13-aastastele lastele ja me ei kogu teadlikult laste isikuandmeid.</p>
<h2>Teie õigused</h2>
<p>Vastavalt 2022. aasta seadusele nr 27 isikuandmete kaitse kohta on teil õigus taotleda juurdepääsu oma isikuandmetele, nende parandamist või kustutamist ning võtta tagasi oma nõusolek töötlemiseks. Kuna me ei säilita peaaegu üldse andmeid, mis teid tuvastaksid, saab enamiku taotlustest lahendada, kustutades oma brauseris küpsised ja saidiandmed. Google'i või Microsofti töödeldud andmete puhul saate kasutada ka nende teenuste privaatsusseadeid. Muude taotluste korral võtke meiega ühendust.</p>
<h2>Poliitika muudatused</h2>
<p>Seda poliitikat võidakse igal ajal uuendada. Muudatused kehtivad alates nende avaldamisest sellel lehel ning jõustumise kuupäev on märgitud lehe ülaosas.</p>
<h2>Kontakt</h2>
<p>Selle poliitika kohta saate küsimusi saata iga lehe allosas oleva kontaktlingi kaudu või aadressil <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lugege ka meie <a href="/syarat-ketentuan">Kasutustingimusi</a>.</p>
`
  },
  terms: {
    title: "Kasutustingimused",
    desc: "Tasuta vöötkoodide ja QR Code'ide generaatori I Need Barcode kasutustingimused.",
    body: `
<p>I Need Barcode'i (ineedbarcode.com) kasutades nõustute järgmiste kasutustingimustega. Kui te ei nõustu, palume teil seda teenust mitte kasutada.</p>
<h2>Teenusest</h2>
<p>I Need Barcode on tasuta tööriist vöötkoodide ja QR Code'ide piltide loomiseks otse brauseris. I Need Barcode ei ole seotud GS1-ga ega ühegi teise vöötkoodistandardi omanikuga, ei ole nende poolt toetatud ega tee nendega koostööd. QR Code on DENSO WAVE INCORPORATED registreeritud kaubamärk. Kõik kaubamärgid kuuluvad nende vastavatele omanikele.</p>
<h2>Lubatud kasutus</h2>
<ul>
<li>Teie loodud vöötkoodipilte võib kasutada nii isiklikel kui ka ärilistel eesmärkidel, näiteks toodetel, pakenditel, siltidel ja trükistel, ilma vesimärgita ja tasuta.</li>
<li>Me loome ainult vöötkoodipilte ega väljasta vöötkoodinumbreid. Jaemüügitoodete puhul tuleb EAN-, UPC- või GTIN-numbrid ametlikult registreerida GS1 kaudu.</li>
<li>Järgige ka reegleid, mis kehtivad seal, kus vöötkoodi kasutatakse, näiteks kaupluste, e-turgude või kullerteenuste tingimusi.</li>
</ul>
<h2>Teie vastutus</h2>
<p>Te vastutate täielikult andmete eest, mille vöötkoodidesse sisestate, ja selle eest, kuidas neid kasutate. Testige vöötkoode alati mitme skanneri või kaamerarakendusega enne nende suures koguses trükkimist ning veenduge, et suurus, värv ja kontrast vastavad teie vajadustele.</p>
<h2>Keelatud tegevused</h2>
<ul>
<li>Selliste vöötkoodide või QR Code'ide loomine, mis viivad pettuse, õngitsuse, pahavara või ebaseadusliku sisuni.</li>
<li>Vöötkoodide kasutamine teistele kuuluvate toodete, dokumentide, piletite või numbrite võltsimiseks.</li>
<li>Robotite, skriptide või automatiseerimise kasutamine teenusele suures mahus juurdepääsemiseks.</li>
<li>Meie serverite ja teenuste häirimine, ülekoormamine või nende turvalisuse murdmise katse.</li>
</ul>
<h2>Teenuse kättesaadavus</h2>
<p>Teenust pakutakse tasuta ning seda võidakse igal ajal ette teatamata muuta, piirata või lõpetada.</p>
<h2>Lahtiütlus</h2>
<p>Teenust pakutakse „sellisena, nagu see on“ ja „nagu see on saadaval“, ilma mingite garantiideta, sealhulgas garantiita, et teenus töötab alati, on veatu või et iga loodud vöötkood on kõigi seadmetega skannitav ja sobib teatud eesmärgiks.</p>
<h2>Vastutuse piiramine</h2>
<p>Seadusega lubatud ulatuses ei vastuta me otsese ega kaudse kahju eest, mis tuleneb selle teenuse kasutamisest või teie loodud vöötkoodidest, sealhulgas kordustrüki kulude ja loetamatutest vöötkoodidest tingitud kahjude eest.</p>
<h2>Lingid kolmandatele osapooltele</h2>
<p>See veebisait sisaldab linke kolmandate osapoolte saitidele ja teenustele. Me ei vastuta nende saitide sisu ega põhimõtete eest.</p>
<h2>Tingimuste muudatused</h2>
<p>Neid kasutustingimusi võidakse igal ajal uuendada. Kui jätkate teenuse kasutamist pärast muudatuste avaldamist, loetakse, et nõustute uusima versiooniga.</p>
<h2>Kohaldatav õigus</h2>
<p>Nendele kasutustingimustele kohaldatakse Indoneesia Vabariigi õigust.</p>
<h2>Kontakt</h2>
<p>Küsimusi ja teateid saate saata iga lehe allosas oleva kontaktlingi kaudu või aadressil <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lugege ka meie <a href="/kebijakan-privasi">Privaatsuspoliitikat</a>.</p>
`
  }
};
