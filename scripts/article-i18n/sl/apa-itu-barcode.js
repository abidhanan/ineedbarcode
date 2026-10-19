// apa-itu-barcode
module.exports = {
  title: "Kaj je črtna koda? Pomen, delovanje in vrste",
  desc: "Črtna koda je na skoraj vsakem izdelku, ki ga kupite. Spoznajte, kako deluje, njeno kratko zgodovino in vrste črtnih kod, ki se uporabljajo najpogosteje.",
  tags: ["Osnove", "Črtne kode"],
  coverCaption: "Črtna koda na embalaži hrani edinstveno kodo izdelka.",
  inlineCaption: "Blagajničarka s čitalnikom v trenutku prebere črtno kodo.",
  faq: [
    ["Kakšna je razlika med črtno kodo in QR Code?", "QR Code je ena od vrst črtne kode, in sicer 2D koda. Črtna koda iz črt (1D) hrani le nekaj znakov in se bere od leve proti desni, QR Code pa shranjuje podatke v dveh smereh, zato vanj lahko shranite povezavo, besedilo ali podatke o WiFi."],
    ["Ali črtna koda vsebuje ceno izdelka?", "Običajno ne. Črtna koda izdelka vsebuje le kodo. Cena in ime izdelka sta shranjena v blagajniškem sistemu in se poiščeta na podlagi skenirane kode."],
    ["Ali je izdelava črtne kode plačljiva?", "Ne. Sliko črtne kode lahko izdelate brezplačno, na primer na I Need Barcode. Plačljivo registracijo zahteva le uradna številka za maloprodajne črtne kode, kot je EAN-13, ki jo pridobite prek GS1."]
  ],
  body: `
<p>Črtna koda je način zapisa podatkov v obliki vzorca, ki ga lahko prebere naprava. Ta vzorec običajno sestavljajo črne in bele črte različnih širin ali majhni kvadratki, razporejeni v kvadrat. Pri skeniranju se vzorec znova pretvori v številke ali besedilo, na primer v kodo izdelka, številko pošiljke ali naslov spletnega mesta.</p>
<p>Ker črtno kodo bere naprava, je veliko hitrejša in manj podvržena napakam kot ročno vnašanje kode. Zato se črtne kode uporabljajo na blagajnah, v skladiščih, bolnišnicah, na vstopnicah in celo na embalaži živil.</p>

<h2>Kratka zgodovina črtne kode</h2>
<p>Zamisel o črtni kodi sta leta 1952 v Združenih državah Amerike patentirala Norman Joseph Woodland in Bernard Silver. V trgovinah se je zares začela uporabljati šele leta 1974, ko so v nekem supermarketu v Ohiu skenirali zavojček žvečilnih gumijev s kodo UPC. Od takrat so se črtne kode razširile po vsem svetu, danes pa jih globalno upravlja organizacija za standarde GS1.</p>

<h2>Kako deluje črtna koda?</h2>
<p>Čitalnik osvetli črtno kodo in prebere odbito svetlobo. Temni deli odbijejo malo svetlobe, svetli deli pa veliko. Ta razlika se pretvori v zaporedje ničel in enic ter primerja s pravili za to vrsto črtne kode. Mnoge črtne kode imajo tudi <strong>kontrolno števko</strong> (check digit), to je zadnjo števko, izračunano iz prejšnjih števk. Če se izračun ne ujema, čitalnik ve, da je nekaj narobe, in rezultat zavrne.</p>
<p>Sama črtna koda običajno hrani le kodo. Podatki, kot sta ime izdelka ali cena, so shranjeni v blagajniškem sistemu ali zbirki podatkov in se poiščejo na podlagi te kode.</p>

<h2>Najpogosteje uporabljane vrste črtnih kod</h2>
<p>Na splošno se črtne kode delijo v dve veliki skupini:</p>
<ul>
  <li><strong>1D (linearne) črtne kode</strong>: sestavljajo jih navpične črte, ki se berejo od leve proti desni. Primeri so <a href="/?type=ean13">EAN-13</a> in <a href="/?type=upca">UPC-A</a> za maloprodajne izdelke ter <a href="/?type=code128">Code 128</a> in <a href="/?type=code39">Code 39</a> za logistiko in skladišča.</li>
  <li><strong>2D črtne kode</strong>: sestavlja jih kvadratni vzorec, ki shranjuje podatke v dveh smereh, zato vanje gre veliko več. Primeri so <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> in <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Poleg tega obstajajo posebne črtne kode za pošto in dostavo, zdravstvo ter standardi GS1 za dobavne verige. Podrobnejšo razlago razlik lahko preberete v članku <a href="/artikel/perbedaan-barcode-1d-dan-2d">Razlika med 1D in 2D črtnimi kodami</a>.</p>

<h2>Za kaj se uporabljajo črtne kode?</h2>
<ul>
  <li><strong>Maloprodaja</strong>: pospešijo delo na blagajni in samodejno beležijo zaloge.</li>
  <li><strong>Skladišča in dostava</strong>: sledijo blagu in paketom od enega kraja do drugega.</li>
  <li><strong>Vstopnice in dogodki</strong>: z enim skeniranjem preverijo pristnost vstopnice.</li>
  <li><strong>Trženje</strong>: QR Code na letaku ali embalaži ljudi pripelje neposredno na vaše spletno mesto, meni ali WhatsApp.</li>
</ul>

<h2>Izdelajte svojo črtno kodo</h2>
<p>Za izdelavo črtne kode ne potrebujete plačljive aplikacije. Na <a href="/">I Need Barcode</a> izberite vrsto črtne kode, vnesite podatke in jo prenesite kot sliko PNG. Izbirate lahko med več kot 100 vrstami, vse pa so brezplačne in brez registracije.</p>
`
};
