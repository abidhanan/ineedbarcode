// apa-itu-barcode
module.exports = {
  title: "Wat is 'n strepieskode? Betekenis, werking en tipes",
  desc: "Strepieskodes is op byna elke produk wat u koop. Leer hoe dit werk, ken die kort geskiedenis daarvan en die tipes strepieskodes wat die meeste gebruik word.",
  tags: ["Basies", "Strepieskode"],
  coverCaption: "Die strepieskode op die verpakking bevat die produk se unieke kode.",
  inlineCaption: "Die kassier gebruik 'n skandeerder om die strepieskode in 'n oogwink te lees.",
  faq: [
    ["Wat is die verskil tussen 'n strepieskode en 'n QR Code?", "'n QR Code is een soort strepieskode, naamlik 'n 2D-strepieskode. 'n Lynstrepieskode (1D) bevat net 'n paar karakters en word van links na regs gelees, terwyl 'n QR Code data in twee rigtings stoor en dus 'n skakel, teks of WiFi-data kan bevat."],
    ["Bevat die strepieskode die produk se prys?", "Gewoonlik nie. 'n Produkstrepieskode bevat net 'n kode. Die prys en naam van die produk word in die kassastelsel gestoor en aan die hand van die geskandeerde kode opgesoek."],
    ["Moet 'n mens betaal om 'n strepieskode te maak?", "Nee. Die strepieskodebeeld kan gratis gemaak word, byvoorbeeld by I Need Barcode. Die enigste ding wat teen betaling geregistreer moet word, is die amptelike nommer vir strepieskodes op kleinhandelprodukte soos EAN-13, via GS1."]
  ],
  body: `
<p>'n Strepieskode is 'n manier om data te skryf in die vorm van 'n patroon wat 'n masjien kan lees. Die patroon bestaan gewoonlik uit swart en wit strepe van verskillende breedtes, of uit klein blokkies wat in 'n vierkant gerangskik is. Wanneer dit geskandeer word, word die patroon weer in syfers of teks omgeskakel, byvoorbeeld 'n produkkode, 'n versendingsnommer of 'n webwerfadres.</p>
<p>Omdat 'n masjien dit lees, is 'n strepieskode baie vinniger en maak dit baie minder foute as om die kode met die hand in te tik. Dit is waarom strepieskodes by kassatoonbanke, in pakhuise, hospitale, op kaartjies en selfs op voedselverpakking gebruik word.</p>

<h2>'n Kort geskiedenis van die strepieskode</h2>
<p>Die idee van die strepieskode is in 1952 deur Norman Joseph Woodland en Bernard Silver in die Verenigde State gepatenteer. Strepieskodes is eers in 1974 werklik in winkels gebruik, toe 'n pakkie kougom met 'n UPC-kode in 'n supermark in Ohio geskandeer is. Sedertdien het strepieskodes oor die hele wêreld versprei, en vandag word dit wêreldwyd deur die standaardeorganisasie GS1 bestuur.</p>

<h2>Hoe werk 'n strepieskode?</h2>
<p>Die skandeerder skyn lig op die strepieskode en lees die weerkaatsing. Donker dele weerkaats min lig, ligte dele weerkaats baie. Daardie verskil word omgeskakel in 'n reeks van 0'e en 1'e, wat dan met die reëls van daardie tipe strepieskode vergelyk word. Baie strepieskodes het ook 'n <strong>kontrolesyfer</strong> (check digit), dit wil sê 'n laaste syfer wat uit die voorafgaande syfers bereken word. As die berekening nie klop nie, weet die skandeerder dat iets fout is en verwerp dit die resultaat.</p>
<p>Die strepieskode self bevat gewoonlik net 'n kode. Inligting soos die produknaam of prys word in die kassastelsel of 'n databasis gestoor en aan die hand van daardie kode opgesoek.</p>

<h2>Die tipes strepieskodes wat die meeste gebruik word</h2>
<p>Oor die algemeen word strepieskodes in twee groot groepe verdeel:</p>
<ul>
  <li><strong>1D-strepieskodes (lineêr)</strong>: vertikale strepe wat van links na regs gelees word. Voorbeelde is <a href="/?type=ean13">EAN-13</a> en <a href="/?type=upca">UPC-A</a> vir kleinhandelprodukte, asook <a href="/?type=code128">Code 128</a> en <a href="/?type=code39">Code 39</a> vir logistiek en pakhuise.</li>
  <li><strong>2D-strepieskodes</strong>: blokkiespatrone wat data in twee rigtings stoor en dus baie meer kan bevat. Voorbeelde is <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> en <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Daarbenewens is daar spesiale strepieskodes vir pos en versending, vir gesondheidsorg, asook GS1-standaarde vir die voorsieningsketting. 'n Meer gedetailleerde verduideliking van die verskille kan u in die artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Die verskil tussen 1D- en 2D-strepieskodes</a> lees.</p>

<h2>Waarvoor word strepieskodes gebruik?</h2>
<ul>
  <li><strong>Kleinhandel</strong>: maak die kassa vinniger en teken voorraad outomaties aan.</li>
  <li><strong>Pakhuis en versending</strong>: spoor goedere en pakkies van een plek na 'n ander na.</li>
  <li><strong>Kaartjies en geleenthede</strong>: kontroleer met 'n enkele skandering of 'n kaartjie eg is.</li>
  <li><strong>Bemarking</strong>: 'n QR Code op 'n brosjure of verpakking neem mense direk na u webwerf, spyskaart of WhatsApp.</li>
</ul>

<h2>Maak u eie strepieskode</h2>
<p>U het nie 'n betaalde toepassing nodig om 'n strepieskode te maak nie. By <a href="/">I Need Barcode</a> kies u die tipe strepieskode, vul die data in en laai dit as 'n PNG-beeld af. Daar is meer as 100 tipes om van te kies, en almal is gratis sonder registrasie.</p>
`
};
