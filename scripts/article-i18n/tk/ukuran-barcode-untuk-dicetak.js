// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Çap etmek üçin ştrihkodyň dogry ölçegi we çözgüdi",
  desc: "Gaty kiçi ýa-da bulaşyk ştrihkody skanerlemek kyn. Iň kiçi ölçegi, skanerleme aralygynyň düzgünini we çap etmek üçin ygtybarly surat çözgüdini öwreniň.",
  tags: ["Gollanma", "Çap etmek"],
  coverCaption: "Ýarlyk printeri posylkalar we gaplamalar üçin ştrihkod çap edýär.",
  inlineCaption: "Ştrihkody näçe uly çap edip boljakdygyny ýarlygyň ölçegi kesgitleýär.",
  faq: [
    ["Çap etmek üçin QR Code-yň iň kiçi ölçegi näçe?", "Ýakyn aralykdan skanerlemek üçin takmynan 2 × 2 sm howpsuz çäkdir. Has uzak aralyk üçin skanerleme aralygy bilen QR Code-yň giňliginiň arasynda takmynan 10 : 1 gatnaşygy ulanyň."],
    ["EAN-13 ştrihkodynyň standart ölçegi näçe?", "EAN-13-iň standart ölçegi takmynan 37,3 × 25,9 mm. Bu ölçegi takmynan 80%-e çenli kiçeldip ýa-da 200%-e çenli ulaldyp bolýar."],
    ["Näme üçin ştrihkod çap edilenden soň bulaşyk bolýar?", "Adatça surat kiçi ölçegde bolup, soňra ulaldylany ýa-da pes hilli JPG görnüşinde saklanany üçin. Moduluň ölçegini has uly edip, PNG formatynda ýükläň."]
  ],
  body: `
<p>Ekranda gowy görünýän ştrihkod çap edilenden soň hökman okalar diýen zat däl. Gaty kiçi ölçeg, pes çözgüt ýa-da ýaýran syýa skaneriň okap bilmezligine sebäp bolup biler. Çap edilen nusgaňyzyň okalmagy üçin gollanma aşakda.</p>

<h2>Modul bilen tanyşyň</h2>
<p><strong>Modul</strong> ştrihkodyň iň kiçi birligi, ýagny QR Code-daky bir kiçijik inedördül ýa-da çyzykly ştrihkoddaky iň inçe çyzykdyr. Moduluň ölçegi ştrihkodyň näçe aňsat okaljakdygyny kesgitleýär. <a href="/">I Need Barcode</a>-da moduluň ölçegini Sazlamalar bölüminde sazlap bolýar: bahasy näçe uly bolsa, ýüklenen surat şonça-da uly we ýiti bolýar.</p>

<h2>QR Code-yň iň kiçi ölçegi</h2>
<ul>
  <li>Ýakyn aralykdan skanerlemek üçin (meselem, wizit kartoçkasy ýa-da harydyň ýarlygy) takmynan <strong>2 × 2 sm</strong> ölçeg howpsuz çäkdir.</li>
  <li>Takmynan <strong>10 : 1</strong> gatnaşyk düzgünini ulanyň: skanerleme aralygy QR Code-yň giňliginden takmynan on esse uly. 2 metr aralykdan skanerlenýän afişa üçin QR Code-y azyndan takmynan 20 sm ediň.</li>
  <li>Saklanýan maglumat näçe köp bolsa, nagyş şonça-da dykyz bolýar, şonuň üçin has uly ölçeg gerek.</li>
</ul>

<h2>Harydyň ştrihkodynyň ölçegi</h2>
<p><a href="/?type=ean13">EAN-13</a>-iň standart ölçegi takmynan 37,3 × 25,9 mm (100%). Bu ölçegi takmynan 80%-e çenli kiçeldip ýa-da 200%-e çenli ulaldyp bolýar. Çyzyklaryň beýikligini aşa gysgaltmakdan gaça duruň, sebäbi kassanyň skanerine dürli burçlardan okamak üçin ýer gerek.</p>

<h2>Suratyň çözgüdi</h2>
<ul>
  <li>Çap etmek üçin her bir modulyň pikseliň bir bölegi bilen däl-de, <strong>birnäçe doly piksel</strong> bilen çekilmegine çalyşyň. Ýükläniňizde has uly modul ölçegini saýlaň, soňra dizaýn programmasynda kiçeldiň, tersine däl.</li>
  <li>Kiçi ştrihkod suratyny ulaltmakdan gaça duruň, sebäbi inedördülleriň gyralary bulaşyk ýa-da tişli bolar.</li>
  <li>Reňkleri we gyralary JPG-däki ýaly zaýalanmaz ýaly, PNG formatynda saklaň.</li>
</ul>

<h2>Asuda zona</h2>
<p>Her bir ştrihkoda onuň daş-töweregindäki boş ýer gerek, oňa <strong>asuda zona</strong> (quiet zone) diýilýär. QR Code üçin onuň iň amatly giňligi dört moduldyr. Çyzykly ştrihkod üçin çep we sag tarapdaky boş ýer juda möhümdir. Ýazgylary, dizaýn çyzyklaryny ýa-da gaplamanyň gyrasyny aşa ýakyn ýerleşdirmäň.</p>

<h2>Reňk we material</h2>
<ul>
  <li>Ştrihkod üçin garaňky, fon üçin bolsa açyk reňk ulanyň.</li>
  <li>Ýalpyldawuk ýa-da aýna ýaly materiallardan gaça duruň, sebäbi ýagtylygyň serpigmegi kamera päsgel berip biler.</li>
  <li>Köp çap etmezden öň hemişe bir nusga çap ediň we ony birnäçe telefon ýa-da skaner bilen synap görüň.</li>
</ul>
<p>Eger ştrihkodyňyz henizem kyn skanerlenýän bolsa, <a href="/artikel/barcode-tidak-bisa-dipindai">ştrihkodyň skanerlenmezliginiň 7 sebäbi</a> atly makala serediň.</p>
`
};
