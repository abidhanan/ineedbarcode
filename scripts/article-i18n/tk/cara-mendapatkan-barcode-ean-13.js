// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kiçi we orta işewürlik üçin EAN-13 haryt ştrihkodyny nädip almaly",
  desc: "Harydyňyzyň minimarketlere ýa-da supermarketlere girmegini isleýärsiňizmi? EAN-13 sanlarynyň manysyny, GS1 Indonesia-da resmi belgini hasaba aldyrmagyň we ony çap etmegiň usulyny öwreniň.",
  tags: ["Biznes", "Bölek satuw"],
  coverCaption: "Bölek satuw harydynyň gaplamasyna hasaba alnan EAN-13 ştrihkody gerek.",
  inlineCaption: "Bölek satuw dükany harydy kassa ulgamyndaky EAN-13 belgisi boýunça tanaýar.",
  faq: [
    ["EAN-13 belgisini özüm döredip bilerinmi?", "Ştrihkodyň suratyny özüňiz döredip bilersiňiz, ýöne belgisiniň GS1-den resmi alnany gowudyr. Özüňiz oýlap tapan belgi beýleki haryt bilen gabat gelip biler we bölek satuw dükany ony kabul etmez."],
    ["Harydyň her görnüşine aýry ştrihkod gerekmi?", "Hawa. Tagamy, ölçegi ýa-da gaplamadaky mukdary tapawutly bolan her bir görnüşe öz EAN-13 belgisi gerek."],
    ["EAN-13-däki barlag sanly belgisi näme?", "Barlag sanly belgisi öňki 12 sandan hasaplanýan 13-nji sandyr. Skaner ony ştrihkodyň dogry okalandygyna göz ýetirmek üçin ulanýar. Eger Siz 12 san girizseňiz, I Need Barcode generatory ony awtomatik hasaplaýar."]
  ],
  body: `
<p>Eger harydyňyzy minimarketlerde, supermarketlerde ýa-da iri marketpleýslerde satmak isleýän bolsaňyz, adatça Sizden gaplamada <strong>EAN-13</strong> ştrihkodyny görkezmegi talap ederler. Bu ştrihkodda harydyňyzyň bütin dünýädäki özboluşly şahsyýeti bolup hyzmat edýän 13 sanly belgi bar.</p>

<h2>EAN-13-däki 13 sanyň manysy</h2>
<ul>
  <li><strong>GS1 prefiksi</strong>: ilkinji üç san belgini beren GS1 guramasyny görkezýär. GS1 Indonesia tarapyndan berlen belgiler <strong>899</strong> bilen başlaýar.</li>
  <li><strong>Kompaniýanyň belgisi</strong>: hasaba duranyňyzda berilýän kompaniýaňyzyň şahsyýeti.</li>
  <li><strong>Harydyň belgisi</strong>: kompaniýa tarapyndan harydyň her bir görnüşi, meselem, tagamy ýa-da ölçegi tapawutly görnüşler üçin özbaşdak kesgitlenýär.</li>
  <li><strong>Barlag sanly belgisi</strong>: nädogry okalmagyň öňüni almak üçin öňki 12 sandan awtomatik hasaplanýan iň soňky san.</li>
</ul>

<h2>Näme üçin resmi belgi bolmaly?</h2>
<p>EAN-13 ştrihkodyny islendik adam çekip biler, ýöne onuň <strong>belgisi</strong> hasaba alnan bolmaly. Bölek satuw dükanlary bu belgini öz ulgamlarynda harydy tanamak üçin ulanýarlar. Eger belgini özüňiz oýlap tapsaňyz, ol başga kompaniýanyň harydy bilen gabat gelip biler we haryt dükana hasaba alnanda kabul edilmez.</p>

<h2>GS1 Indonesia-da belgini nädip hasaba aldyrmaly</h2>
<ol>
  <li>NIB (Telekeçiligiň esasy belgisi) we NPWP ýaly iş resminamalaryny, şeýle hem ştrihkod berilmeli harytlaryň sanawyny taýýarlaň.</li>
  <li>Kompaniýaňyzy GS1 Indonesia-nyň resmi saýty arkaly hasaba aldyryň we zerur belgileriň sanyny saýlaň.</li>
  <li>Hereket edýän düzgünlere laýyklykda hasaba alyş tölegini we ýyllyk agzalyk tölegini töläň.</li>
  <li>Tassyklanandan soň, Siz kompaniýanyň belgisini alarsyňyz we her bir haryt üçin belgi döredip bilersiňiz.</li>
</ol>
<p>Talaplar we tölegler üýtgäp biler, şonuň üçin iň täze maglumatlary hemişe göni GS1 Indonesia-nyň saýtynda barlaň.</p>

<h2>Ştrihkodyň suratyny döretmek</h2>
<p>Belgä eýe bolanyňyzdan soň, <a href="/?type=ean13">EAN-13 generatoryny</a> açyň we harydyňyzyň 12 ýa-da 13 sanly belgisini giriziň. Eger 12 san girizseňiz, barlag sanly belgisi awtomatik hasaplanar. Sanlaryň çap edilmegi üçin ştrihkodyň aşagyndaky tekst saýlawynyň işjeňdigine göz ýetiriň, soňra PNG görnüşinde ýükläň.</p>

<h2>Gaplamada çap etmek boýunça maslahatlar</h2>
<ul>
  <li>Ak fonda gara ýa-da goýy gök çyzyklary ulanyň. Çyzyklar üçin gyzyl reňkden gaça duruň, sebäbi kassalaryň köp skanerleri gyzyl ýagtylyk ulanýar we gyzyl çyzyklar okalmaýar.</li>
  <li>Ştrihkody aşa kiçeltmäň. EAN-13-iň standart ölçegi takmynan 37,3 × 25,9 mm we ony takmynan 80%-e çenli kiçeldip bolýar. Has giňişleýin <a href="/artikel/ukuran-barcode-untuk-dicetak">ştrihkodyň ölçegi boýunça gollanmada</a> okaň.</li>
  <li>Ştrihkodyň çep we sag tarapynda boş ýer goýuň we ony gaplamanyň epinlerinde ýa-da birleşýän ýerlerinde ýerleşdirmekden gaça duruň.</li>
  <li>Köp mukdarda çap etmezden öň çap edilen nusgany skaner bilen synap görüň.</li>
</ul>
<p>Demirgazyk Amerikada satylýan harytlar üçin Sizden 12 sanly <a href="/?type=upca">UPC-A</a> ulanmak hem talap edilip bilner.</p>
`
};
