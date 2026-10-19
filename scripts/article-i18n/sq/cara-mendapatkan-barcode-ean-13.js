// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Si të merrni barkodin e produktit EAN-13 për bizneset e vogla dhe të mesme",
  desc: "Doni që produkti juaj të shitet në minimarkete ose supermarkete? Mësoni kuptimin e shifrave të EAN-13, si të regjistroni një numër zyrtar në GS1 Indonesia dhe si ta printoni.",
  tags: ["Biznes", "Shitje me pakicë"],
  coverCaption: "Paketimi i produkteve të shitjes me pakicë kërkon një barkod EAN-13 të regjistruar.",
  inlineCaption: "Dyqanet e shitjes me pakicë e njohin produktin nga numri EAN-13 në sistemin e arkës.",
  faq: [
    ["A mund ta krijoj vetë numrin EAN-13?", "Imazhin e barkodit mund ta krijoni vetë, por numri është mirë të jetë zyrtar nga GS1. Një numër i shpikur nga ju mund të përplaset me një produkt tjetër dhe të refuzohet nga dyqanet e shitjes me pakicë."],
    ["A i duhet çdo varianti të produktit një barkod i veçantë?", "Po. Çdo variant i ndryshëm, për shembull me shije, madhësi ose përmbajtje paketimi të ndryshme, kërkon numrin e vet EAN-13."],
    ["Çfarë është shifra e kontrollit në EAN-13?", "Shifra e kontrollit është shifra e 13-të, e cila llogaritet nga 12 shifrat paraardhëse. Skaneri e përdor për t'u siguruar që barkodi është lexuar saktë. Gjeneratori I Need Barcode e llogarit automatikisht nëse futni 12 shifra."]
  ],
  body: `
<p>Nëse doni që produkti juaj të shitet në minimarkete, supermarkete ose tregje të mëdha online, zakonisht do t'ju kërkohet të vendosni një barkod <strong>EAN-13</strong> në paketim. Ky barkod përmban 13 shifra që përbëjnë identitetin unik të produktit tuaj në të gjithë botën.</p>

<h2>Kuptimi i 13 shifrave të EAN-13</h2>
<ul>
  <li><strong>Prefiksi GS1</strong>: tre shifrat e para tregojnë organizatën GS1 që e ka lëshuar numrin. Numrat e lëshuar nga GS1 Indonesia fillojnë me <strong>899</strong>.</li>
  <li><strong>Numri i kompanisë</strong>: identiteti i kompanisë suaj, që jepet gjatë regjistrimit.</li>
  <li><strong>Numri i produktit</strong>: përcaktohet nga vetë kompania për çdo variant produkti, për shembull për shije ose madhësi të ndryshme.</li>
  <li><strong>Shifra e kontrollit</strong>: shifra e fundit, që llogaritet automatikisht nga 12 shifrat paraardhëse për të parandaluar leximin e gabuar.</li>
</ul>

<h2>Pse duhet numër zyrtar?</h2>
<p>Barkodin EAN-13 mund ta vizatojë kushdo, por <strong>numri</strong> duhet të jetë i regjistruar. Dyqanet e shitjes me pakicë e përdorin atë numër për të njohur produktin në sistemin e tyre. Nëse e shpikni vetë numrin, ai mund të përplaset me produktin e një kompanie tjetër dhe të refuzohet kur produkti regjistrohet në dyqan.</p>

<h2>Si ta regjistroni numrin në GS1 Indonesia</h2>
<ol>
  <li>Përgatitni dokumentet e biznesit, si NIB (numri i identifikimit të biznesit) dhe NPWP (numri tatimor), si dhe listën e produkteve që do të marrin barkod.</li>
  <li>Regjistroni kompaninë përmes faqes zyrtare të GS1 Indonesia dhe zgjidhni sasinë e numrave që ju nevojiten.</li>
  <li>Paguani tarifën e regjistrimit dhe kuotën vjetore sipas rregullave në fuqi.</li>
  <li>Pas miratimit, merrni numrin e kompanisë dhe mund të krijoni një numër për çdo produkt.</li>
</ol>
<p>Kërkesat dhe tarifat mund të ndryshojnë, prandaj kontrolloni gjithmonë informacionin më të fundit drejtpërdrejt në faqen e GS1 Indonesia.</p>

<h2>Krijimi i imazhit të barkodit</h2>
<p>Pasi të keni numrin, hapni <a href="/?type=ean13">gjeneratorin EAN-13</a> dhe futni 12 ose 13 shifrat e numrit të produktit tuaj. Nëse futni 12 shifra, shifra e kontrollit do të llogaritet automatikisht. Sigurohuni që opsioni i tekstit poshtë barkodit të jetë aktiv që shifrat të printohen, pastaj shkarkojeni si PNG.</p>

<h2>Këshilla për printimin në paketim</h2>
<ul>
  <li>Përdorni vija të zeza ose blu të errët mbi sfond të bardhë. Shmangni ngjyrën e kuqe për vijat, sepse shumë skanerë arkash përdorin dritë të kuqe dhe vijat e kuqe nuk lexohen.</li>
  <li>Mos e zvogëloni barkodin tepër. Madhësia standarde e EAN-13 është rreth 37,3 × 25,9 mm dhe mund të zvogëlohet deri në rreth 80%. Më shumë te <a href="/artikel/ukuran-barcode-untuk-dicetak">udhëzuesi për madhësinë e barkodit</a>.</li>
  <li>Lini hapësirë bosh majtas dhe djathtas barkodit dhe shmangni vendosjen e tij në palosje ose bashkime të paketimit.</li>
  <li>Provoni printimin me skaner para se të printoni në sasi të mëdha.</li>
</ul>
<p>Për produktet që shiten në Amerikën e Veriut, mund t'ju kërkohet gjithashtu të përdorni <a href="/?type=upca">UPC-A</a>, që përmban 12 shifra.</p>
`
};
