// apa-itu-barcode
module.exports = {
  title: "Hvað er strikamerki? Merking, virkni og tegundir",
  desc: "Strikamerki eru á nánast öllum vörum sem þú kaupir. Kynntu þér hvernig þau virka, stutta sögu þeirra og þær tegundir strikamerkja sem mest eru notaðar.",
  tags: ["Grunnatriði", "Strikamerki"],
  coverCaption: "Strikamerkið á umbúðunum geymir einkvæman kóða vörunnar.",
  inlineCaption: "Afgreiðslufólk notar skanna til að lesa strikamerkið á augabragði.",
  faq: [
    ["Hver er munurinn á strikamerki og QR Code?", "QR Code er ein tegund strikamerkis, nánar tiltekið tvívítt (2D) strikamerki. Línulegt strikamerki (1D) geymir aðeins fáa stafi og er lesið frá vinstri til hægri, en QR Code geymir gögn í tvær áttir og rúmar því tengil, texta eða WiFi-upplýsingar."],
    ["Geymir strikamerkið verð vörunnar?", "Yfirleitt ekki. Strikamerki vöru inniheldur aðeins kóða. Verð og heiti vörunnar eru geymd í afgreiðslukerfinu og flett upp út frá kóðanum sem er skannaður."],
    ["Kostar eitthvað að búa til strikamerki?", "Nei. Sjálfa strikamerkjamyndina má búa til ókeypis, til dæmis hjá I Need Barcode. Það eina sem þarf að skrá gegn gjaldi er opinbert númer fyrir strikamerki á smásöluvörum, eins og EAN-13, í gegnum GS1."]
  ],
  body: `
<p>Strikamerki er leið til að skrá gögn í formi mynsturs sem vél getur lesið. Mynstrið samanstendur yfirleitt af svörtum og hvítum strikum af mismunandi breidd eða af litlum ferningum sem raðað er í ferhyrning. Þegar það er skannað er mynstrinu breytt aftur í tölur eða texta, til dæmis vörunúmer, sendingarnúmer eða vefslóð.</p>
<p>Þar sem vél les strikamerkið er það mun fljótlegra og villuminna en að slá kóðann inn handvirkt. Þess vegna eru strikamerki notuð við afgreiðslukassa, í vöruhúsum, á sjúkrahúsum, á miðum og á matvælaumbúðum.</p>

<h2>Stutt saga strikamerkisins</h2>
<p>Norman Joseph Woodland og Bernard Silver fengu einkaleyfi á hugmyndinni að strikamerkinu árið 1952 í Bandaríkjunum. Strikamerki komust ekki í raunverulega notkun í verslunum fyrr en árið 1974, þegar tyggjópakki var skannaður með UPC-kóða í stórmarkaði í Ohio. Síðan þá hafa strikamerki breiðst út um allan heim og nú er þeim stýrt á heimsvísu af staðlasamtökunum GS1.</p>

<h2>Hvernig virkar strikamerki?</h2>
<p>Skanninn lýsir á strikamerkið og les endurkastið. Dökku svæðin endurkasta litlu ljósi en ljósu svæðin miklu. Þessum mun er breytt í röð af 0 og 1 sem síðan er borin saman við reglur viðkomandi tegundar strikamerkis. Mörg strikamerki eru einnig með <strong>vartölu</strong> (check digit), það er síðasta tölustaf sem reiknaður er út frá tölustöfunum á undan. Ef útreikningurinn stemmir ekki veit skanninn að eitthvað er að og hafnar niðurstöðunni.</p>
<p>Strikamerkið sjálft geymir yfirleitt aðeins kóða. Upplýsingar eins og vöruheiti eða verð eru geymdar í afgreiðslukerfinu eða gagnagrunni og flett upp út frá kóðanum.</p>

<h2>Algengustu tegundir strikamerkja</h2>
<p>Almennt skiptast strikamerki í tvo stóra flokka:</p>
<ul>
  <li><strong>1D-strikamerki (línuleg)</strong>: lóðrétt strik sem lesin eru frá vinstri til hægri. Dæmi eru <a href="/?type=ean13">EAN-13</a> og <a href="/?type=upca">UPC-A</a> fyrir smásöluvörur, ásamt <a href="/?type=code128">Code 128</a> og <a href="/?type=code39">Code 39</a> fyrir flutninga og vöruhús.</li>
  <li><strong>2D-strikamerki</strong>: ferningamynstur sem geymir gögn í tvær áttir og rúmar því mun meira. Dæmi eru <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Auk þess eru til sérstök strikamerki fyrir póst og sendingar, heilbrigðisþjónustu og GS1-staðlar fyrir aðfangakeðjuna. Nánari útskýringu á muninum getur þú lesið í greininni <a href="/artikel/perbedaan-barcode-1d-dan-2d">Munurinn á 1D- og 2D-strikamerkjum</a>.</p>

<h2>Til hvers eru strikamerki notuð?</h2>
<ul>
  <li><strong>Smásala</strong>: flýta afgreiðslu og skrá birgðir sjálfkrafa.</li>
  <li><strong>Vöruhús og sendingar</strong>: rekja vörur og pakka frá einum stað til annars.</li>
  <li><strong>Miðar og viðburðir</strong>: staðfesta að miði sé ósvikinn með einni skönnun.</li>
  <li><strong>Markaðssetning</strong>: QR Code á bæklingi eða umbúðum leiðir fólk beint á vefsíðuna þína, matseðilinn eða WhatsApp.</li>
</ul>

<h2>Búðu til þitt eigið strikamerki</h2>
<p>Þú þarft ekki greitt forrit til að búa til strikamerki. Hjá <a href="/">I Need Barcode</a> velur þú tegund strikamerkis, fyllir inn gögnin og sækir það sem PNG-mynd. Hægt er að velja úr meira en 100 tegundum og þær eru allar ókeypis án skráningar.</p>
`
};
