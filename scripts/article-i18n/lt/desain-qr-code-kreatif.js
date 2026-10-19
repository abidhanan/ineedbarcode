// desain-qr-code-kreatif
module.exports = {
  title: "Kūrybiškas QR Code dizainas, kurį vis tiek galima nuskaityti",
  desc: "QR Code gali būti širdies ar apskritimo formos, su rėmeliu ir spalvomis. Sužinokite taisykles, kad dizainas būtų patrauklus ir kartu lengvai nuskaitomas.",
  tags: ["Dizainas", "QR Code"],
  coverCaption: "Spalvos daro QR Code patrauklesnį, jei tik kontrastas išlieka stiprus.",
  inlineCaption: "QR Code dizainą visada verta išbandyti prieš spausdinant.",
  faq: [
    ["Ar širdies formos QR Code galima nuskaityti?", "Taip. Tikrasis QR Code lieka nepažeistas centre, o visa kita – tik dekoratyvinis raštas. Jei kontrastas stiprus ir dydis pakankamas, QR Code nuskaitomas."],
    ["Kokios spalvos saugios QR Code?", "Tamsios spalvos, tokios kaip juoda, tamsiai mėlyna, tamsiai žalia, violetinė ar tamsiai ruda, ant balto ar labai šviesaus fono."],
    ["Ar ant QR Code galima dėti užrašą ar rėmelį?", "Taip. Rėmelis su raginimu, pavyzdžiui, „NUSKAITYK MANE“, net padeda žmonėms suprasti kodo paskirtį, jei tik rėmelis neuždengia QR Code."]
  ],
  body: `
<p>Juodai baltas QR Code tikrai funkcionalus, tačiau ant pakuočių, kvietimų ar reklaminės medžiagos dažnai atrodo sustingęs. Šiek tiek pakoregavus dizainą, QR Code gali atrodyti patraukliau neprarasdamas savo funkcijos. Svarbiausia – suprasti, kurias dalis galima keisti, o kurios turi likti nepažeistos.</p>

<h2>Išorinė forma: širdis, apskritimas ir kitos</h2>
<p><a href="/?type=qrcode">QR Code generatoriaus</a> skiltyje „Dizainas“ galite pasirinkti tokias formas kaip apskritimas, širdis, šešiakampis, aštuonkampis, žvaigždė ar rombas. Tikrasis QR Code lieka centre, o likusi vieta užpildoma dekoratyviniu raštu, kol susidaro pasirinkta forma. Dekoratyviniame rašte duomenų nėra, todėl jis netrukdo nuskaityti, jei aplink tikrąjį QR Code paliekama tuščios vietos.</p>

<h2>Taškų stilius</h2>
<p>QR Code kvadratėlius galima paversti suapvalintomis formomis ar apvaliais taškais. Kad kodą būtų lengva nuskaityti, trys dideli kvadratai kampuose (finder pattern) turėtų likti nepažeisti kaip kvadratai, nes būtent juos kamera ieško pirmiausia. Mūsų generatorius šias dalis visada piešia kaip vientisus kvadratus, daugių daugiausia suapvalintais kampais, nesvarbu, kokį taškų stilių pasirinksite.</p>

<h2>Spalvos</h2>
<ul>
  <li>QR Code naudokite <strong>tamsią</strong> spalvą, o fonui – <strong>šviesią</strong>. Tamsiai mėlyna, tamsiai žalia, violetinė ar tamsiai ruda paprastai yra saugios.</li>
  <li>Venkite blyškių spalvų QR Code, tokių kaip geltona, blyškiai rožinė ar šviesiai pilka.</li>
  <li>Neapverskite spalvų, kad gautumėte šviesų QR Code ant tamsaus fono, nes ne visos skaitymo programėlės tai palaiko.</li>
</ul>

<h2>Rėmelis ir raginimas</h2>
<p>Įrodyta, kad rėmelis su raginimu, pavyzdžiui, „NUSKAITYK MANE“, „MENIU“ ar „SCAN WIFI“, padeda žmonėms suprasti QR Code paskirtį. Galite pasirinkti rėmelį su etikete apačioje, etikete viršuje, kampinį, burbulo, apskritimo ar juostos formos, tada pakeisti užrašą ir jo spalvą.</p>

<h2>Taisyklės, kad dizainas liktų nuskaitomas</h2>
<ol>
  <li>Išlaikykite stiprų <strong>kontrastą</strong> tarp QR Code ir jo fono.</li>
  <li>Palikite <strong>tris žymeklius</strong> kampuose aiškius ir neuždengtus.</li>
  <li>Palikite <strong>tuščios vietos</strong> aplink QR Code ir rėmelį.</li>
  <li>Per daug nesumažinkite QR Code su dizainu. Tokios formos kaip širdis sumažina tikrojo QR Code plotą, palyginti su viso paveikslėlio dydžiu.</li>
  <li>Prieš spausdindami <strong>išbandykite</strong> keliais telefonais.</li>
</ol>

<p>Jei jūsų dizainą sunku nuskaityti, mygtuku <strong>Atstatyti</strong> po vieną grąžinkite nustatymus į pradinius, kad rastumėte priežastį. Kitas dažnas priežastis rasite straipsnyje <a href="/artikel/barcode-tidak-bisa-dipindai">7 priežastys, kodėl brūkšninis kodas nenuskaitomas</a>.</p>
`
};
