// apa-itu-barcode
module.exports = {
  title: "Çfarë është barkodi? Përkufizimi, si funksionon dhe llojet",
  desc: "Barkodi gjendet pothuajse në çdo produkt që blini. Mësoni si funksionon, historinë e tij të shkurtër dhe llojet e barkodeve që përdoren më shpesh.",
  tags: ["Bazat", "Barkod"],
  coverCaption: "Barkodi në paketim ruan kodin unik të produktit.",
  inlineCaption: "Arkëtarët përdorin skanerin për të lexuar barkodin në një çast.",
  faq: [
    ["Cili është ndryshimi midis barkodit dhe QR Code?", "QR Code është një lloj barkodi, konkretisht barkod 2D. Barkodi me vija (1D) ruan vetëm pak karaktere dhe lexohet nga e majta në të djathtë, ndërsa QR Code ruan të dhëna në dy drejtime, kështu që mund të mbajë një lidhje, tekst ose të dhëna WiFi."],
    ["A e ruan barkodi çmimin e produktit?", "Zakonisht jo. Barkodi i produktit përmban vetëm një kod. Çmimi dhe emri i produktit ruhen në sistemin e arkës dhe kërkohen sipas kodit të skanuar."],
    ["A duhet paguar për të krijuar një barkod?", "Jo. Imazhi i barkodit mund të krijohet falas, për shembull në I Need Barcode. E vetmja gjë që kërkon regjistrim me pagesë është numri zyrtar për barkodet e produkteve të shitjes me pakicë, si EAN-13, përmes GS1."]
  ],
  body: `
<p>Barkodi është një mënyrë për të shkruar të dhëna në formën e një modeli që mund ta lexojnë makinat. Ky model zakonisht përbëhet nga vija bardhë e zi me gjerësi të ndryshme, ose nga katrorë të vegjël të renditur brenda një katrori. Kur skanohet, modeli përkthehet përsëri në numra ose tekst, për shembull në kodin e produktit, numrin e gjurmimit të dërgesës ose adresën e një faqeje interneti.</p>
<p>Meqë lexohet nga makinat, barkodi është shumë më i shpejtë dhe me shumë më pak gabime sesa shtypja manuale e kodit. Prandaj barkodet përdoren në arka, magazina, spitale, bileta e deri te paketimet e ushqimeve.</p>

<h2>Historia e shkurtër e barkodit</h2>
<p>Ideja e barkodit u patentua në vitin 1952 nga Norman Joseph Woodland dhe Bernard Silver në Shtetet e Bashkuara. Barkodi filloi të përdorej vërtet në dyqane vetëm në vitin 1974, kur një pako çamçakëzi u skanua me kod UPC në një supermarket në Ohajo. Që atëherë, barkodet janë përhapur në të gjithë botën dhe sot menaxhohen në nivel global nga një organizatë standardesh e quajtur GS1.</p>

<h2>Si funksionon barkodi?</h2>
<p>Skaneri ndriçon barkodin dhe më pas lexon dritën e reflektuar. Pjesët e errëta reflektojnë pak dritë, ndërsa pjesët e çelura reflektojnë shumë. Ky ndryshim shndërrohet në një varg zerosh dhe njëshash, i cili krahasohet me rregullat e atij lloji barkodi. Shumë barkode kanë edhe një <strong>shifër kontrolli</strong> (check digit), pra shifrën e fundit që llogaritet nga shifrat paraardhëse. Nëse rezultati i llogaritjes nuk përputhet, skaneri e kupton se diçka nuk shkon dhe e refuzon rezultatin.</p>
<p>Vetë barkodi zakonisht ruan vetëm një kod. Informacione si emri ose çmimi i produktit ruhen në sistemin e arkës ose në një bazë të dhënash dhe kërkohen sipas atij kodi.</p>

<h2>Llojet e barkodeve që përdoren shpesh</h2>
<p>Në përgjithësi, barkodet ndahen në dy grupe të mëdha:</p>
<ul>
  <li><strong>Barkodi 1D (linear)</strong>: vija vertikale që lexohen nga e majta në të djathtë. Shembuj janë <a href="/?type=ean13">EAN-13</a> dhe <a href="/?type=upca">UPC-A</a> për produktet e shitjes me pakicë, si dhe <a href="/?type=code128">Code 128</a> dhe <a href="/?type=code39">Code 39</a> për logjistikën dhe magazinat.</li>
  <li><strong>Barkodi 2D</strong>: model katrorësh që ruan të dhëna në dy drejtime, kështu që mban shumë më tepër. Shembuj janë <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> dhe <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Përveç këtyre, ka barkode të posaçme për postën dhe transportin, shëndetësinë, si dhe standardet GS1 për zinxhirin e furnizimit. Një shpjegim më të hollësishëm të ndryshimeve mund ta lexoni në artikullin <a href="/artikel/perbedaan-barcode-1d-dan-2d">Ndryshimi midis barkodeve 1D dhe 2D</a>.</p>

<h2>Për çfarë përdoren barkodet?</h2>
<ul>
  <li><strong>Shitja me pakicë</strong>: përshpejton arkën dhe regjistron automatikisht stokun.</li>
  <li><strong>Magazinimi dhe transporti</strong>: gjurmimi i mallrave dhe pakove nga një vend në tjetrin.</li>
  <li><strong>Biletat dhe eventet</strong>: verifikimi i vërtetësisë së biletave me një skanim të vetëm.</li>
  <li><strong>Marketingu</strong>: QR Code në një broshurë ose paketim i çon njerëzit drejtpërdrejt te faqja juaj e internetit, menyja ose WhatsApp.</li>
</ul>

<h2>Krijoni vetë barkodin tuaj</h2>
<p>Nuk ju duhet një aplikacion me pagesë për të krijuar barkod. Në <a href="/">I Need Barcode</a>, zgjidhni llojin e barkodit, plotësoni të dhënat dhe shkarkojeni si imazh PNG. Ka më shumë se 100 lloje për të zgjedhur, dhe të gjitha janë falas, pa regjistrim.</p>
`
};
