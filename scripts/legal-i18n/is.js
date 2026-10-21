// Persónuverndarstefna & Skilmálar (íslenska), þýtt úr scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Persónuverndarstefna",
    terms: "Skilmálar",
    effective: "Gildir frá {date}"
  },
  privacy: {
    title: "Persónuverndarstefna",
    desc: "Hvaða gögn I Need Barcode vinnur með þegar þú býrð til strikamerki og QR Codes og hvernig við meðhöndlum þau.",
    body: `
<p>I Need Barcode (ineedbarcode.com) er ókeypis rafall fyrir strikamerki og QR Codes sem Abid Hanan Wicaksono rekur. Þessi stefna útskýrir hvaða gögn við vinnum með þegar þú notar vefsíðuna og hvernig við meðhöndlum þau. Við söfnum vísvitandi eins litlum gögnum og mögulegt er: þú þarft hvorki að skrá þig, skrá þig inn né gefa upp nafn og netfang til að nota þjónustuna.</p>
<h2>Gögn sem við vinnum með</h2>
<ul>
<li><strong>Efni strikamerkis.</strong> Texti, tenglar, WiFi-upplýsingar, tengiliðir og önnur gögn sem þú slærð inn eru unnin beint í vafranum þínum. Myndir af strikamerkjum eru búnar til í tækinu þínu og eru ekki sendar á netþjóna okkar, ekki heldur þegar þú býrð til mörg strikamerki í einu.</li>
<li><strong>Staðsetning.</strong> Hnappurinn „Nota staðsetningu mína“ biður aðeins um staðsetningu tækisins eftir að þú hefur leyft það í vafranum. Hnitin eru aðeins sett inn í reit eyðublaðsins og eru ekki send til okkar.</li>
<li><strong>Áætlað land.</strong> Til að velja upphafstungumál getur vefsíðan lesið áætlað land þitt út frá beiðninni til netþjóns okkar. Þessar upplýsingar eru ekki vistaðar í gagnagrunni.</li>
<li><strong>Tæknileg gögn.</strong> Eins og á nánast öllum vefsíðum skráir hýsingaraðili okkar (Vercel) tæknileg gögn um beiðnir, svo sem IP-tölu, gerð vafra og tíma aðgangs, vegna öryggis og rekstrar. Þessar skrár eru aðeins geymdar tímabundið í samræmi við stefnu Vercel.</li>
<li><strong>Tölfræði greina.</strong> Ef kveikt er á henni eru áhorf, „líkar við“ og deilingar aðeins geymd sem heildartölur fyrir hverja grein, án gagna sem auðkenna þig.</li>
</ul>
<h2>Vafrakökur og geymsla í vafra</h2>
<ul>
<li><strong>inbLang</strong>: man tungumálið sem þú valdir í þessu tæki (localStorage).</li>
<li><strong>inbCountry</strong>: geymir áætlað land meðan á einni lotu stendur svo ekki þurfi að finna tungumálið aftur (sessionStorage).</li>
<li><strong>Önnur staðbundin geymsla</strong> (localStorage og sessionStorage): merkir greinar sem þér líkar við og kemur í veg fyrir að ein heimsókn sé talin tvisvar. Þessi gögn verða áfram í tækinu þínu.</li>
<li><strong>Greiningarvafrakökur frá þriðja aðila</strong> frá Google Analytics og Microsoft Clarity, sem lýst er hér að neðan.</li>
</ul>
<h2>Greining</h2>
<p>Við notum greiningartól til að skilja hvernig vefsíðan er notuð og til að bæta hana. Tólin eru ekki hlaðin fyrr en þú byrjar að hafa samskipti við síðuna og eru alls ekki hlaðin ef vafrinn þinn sendir Global Privacy Control- eða Do Not Track-merki. Efni strikamerkja og eyðublaða er aldrei sent til greiningartólanna; aðeins atburðir á borð við valda gerð strikamerkis og smelli á niðurhalshnappinn eru skráðir.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): notar vafrakökur til að mæla skoðaðar síður, áætlað land, gerð tækis og atburðina hér að ofan. Slökkt er á geymslu vegna auglýsinga og á Google Signals. Google vinnur gögnin í samræmi við <a href="https://policies.google.com/privacy">persónuverndarstefnu Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: skráir samskipti á borð við smelli og skrun fyrir hitakort og upptökur af lotum og hylur efni innsláttarreita. Microsoft vinnur gögnin í samræmi við <a href="https://privacy.microsoft.com/privacystatement">persónuverndaryfirlýsingu Microsoft</a>.</li>
</ul>
<p>Þú getur hafnað greiningu með því að kveikja á Global Privacy Control eða Do Not Track, loka á vafrakökur frá þriðja aðila í stillingum vafrans, nota rakningarvörn eða setja upp <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Vefsíðan er áfram fullkomlega nothæf.</p>
<h2>Þjónusta þriðju aðila</h2>
<ul>
<li><strong>Vercel Inc.</strong> sér um hýsingu. Netþjónarnir geta verið staðsettir utan Indónesíu.</li>
<li><strong>Google Fonts</strong> er notað til að birta tiltekin letur (til dæmis arabískt, taílenskt eða japanskt). Þegar leturgerðir eru hlaðnar sér Google IP-tölu þína.</li>
<li><strong>Deilingarhnappar</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) og tenglar á samfélagsmiðla hafa aðeins samband við þessar þjónustur þegar þú smellir á þá.</li>
</ul>
<h2>Öryggi og miðlun gagna</h2>
<p>Allar tengingar við vefsíðuna nota HTTPS. Við seljum hvorki, leigjum né verslum með persónuupplýsingar. Gögnum er aðeins miðlað til ofangreindra þjónustuveitenda að því marki sem nauðsynlegt er til að reka vefsíðuna, eða ef lög krefjast þess.</p>
<h2>Börn</h2>
<p>Þjónustan er ekki ætluð börnum yngri en 13 ára og við söfnum ekki vísvitandi persónuupplýsingum um börn.</p>
<h2>Réttindi þín</h2>
<p>Samkvæmt lögum nr. 27 frá 2022 um vernd persónuupplýsinga átt þú rétt á að fá aðgang að persónuupplýsingum þínum, fá þær leiðréttar eða þeim eytt, og að afturkalla samþykki þitt fyrir vinnslunni. Þar sem við geymum nánast engin gögn sem auðkenna þig er hægt að afgreiða flestar beiðnir með því að eyða vafrakökum og vefsvæðisgögnum í vafranum þínum. Fyrir gögn sem Google eða Microsoft vinna með getur þú einnig notað persónuverndarstillingar í þjónustu þeirra. Hafðu samband við okkur vegna annarra beiðna.</p>
<h2>Breytingar á stefnunni</h2>
<p>Þessari stefnu kann að vera breytt hvenær sem er. Breytingar taka gildi þegar þær eru birtar á þessari síðu, og gildistökudagur kemur fram efst.</p>
<h2>Hafa samband</h2>
<p>Spurningar um þessa stefnu má senda í gegnum tengiliðatengilinn neðst á hverri síðu eða í gegnum <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lestu einnig <a href="/syarat-ketentuan">Skilmála</a> okkar.</p>
`
  },
  terms: {
    title: "Skilmálar",
    desc: "Notkunarskilmálar I Need Barcode, ókeypis rafals fyrir strikamerki og QR Codes.",
    body: `
<p>Með því að nota I Need Barcode (ineedbarcode.com) samþykkir þú eftirfarandi skilmála. Ef þú samþykkir þá ekki biðjum við þig um að nota ekki þjónustuna.</p>
<h2>Um þjónustuna</h2>
<p>I Need Barcode er ókeypis tól til að búa til myndir af strikamerkjum og QR Codes beint í vafranum. I Need Barcode er hvorki tengt, stutt af né í samstarfi við GS1 eða nokkurn annan eiganda strikamerkjastaðals. QR Code er skráð vörumerki í eigu DENSO WAVE INCORPORATED. Öll vörumerki eru í eigu viðkomandi eigenda.</p>
<h2>Leyfileg notkun</h2>
<ul>
<li>Myndir af strikamerkjum sem þú býrð til má nota bæði í persónulegum og viðskiptalegum tilgangi, til dæmis fyrir vörur, umbúðir, merkimiða og prentefni, án vatnsmerkis og án endurgjalds.</li>
<li>Við búum aðeins til myndir af strikamerkjum og gefum ekki út strikamerkjanúmer. Fyrir smásöluvörur þarf að skrá EAN-, UPC- eða GTIN-númer með formlegum hætti í gegnum GS1.</li>
<li>Fylgdu einnig þeim reglum sem gilda þar sem strikamerkið er notað, til dæmis skilmálum verslana, markaðstorga eða flutningsþjónustu.</li>
</ul>
<h2>Ábyrgð þín</h2>
<p>Þú berð fulla ábyrgð á gögnunum sem þú setur í strikamerki og á því hvernig þú notar þau. Prófaðu strikamerki alltaf með nokkrum skönnum eða myndavélaforritum áður en þú prentar þau í miklu magni, og gakktu úr skugga um að stærð, litur og birtuskil henti þínum þörfum.</p>
<h2>Bönnuð notkun</h2>
<ul>
<li>Að búa til strikamerki eða QR Codes sem vísa á svik, vefveiðar, spilliforrit eða ólöglegt efni.</li>
<li>Að nota strikamerki til að falsa vörur, skjöl, miða eða númer í eigu annarra.</li>
<li>Að nota vélmenni, skriftur eða sjálfvirkni til að fá aðgang að þjónustunni í miklu magni.</li>
<li>Að trufla, ofhlaða eða reyna að brjóta öryggi netþjóna okkar og þjónustu.</li>
</ul>
<h2>Framboð þjónustunnar</h2>
<p>Þjónustan er veitt án endurgjalds og getur verið breytt, takmörkuð eða hætt hvenær sem er án fyrirvara.</p>
<h2>Fyrirvari</h2>
<p>Þjónustan er veitt „eins og hún er“ og „eins og hún er tiltæk“, án nokkurrar ábyrgðar, þar á meðal ábyrgðar á því að þjónustan virki alltaf, sé villulaus, eða að hvert strikamerki sem búið er til sé skannanlegt í öllum tækjum og henti tilteknum tilgangi.</p>
<h2>Takmörkun ábyrgðar</h2>
<p>Að því marki sem lög leyfa berum við ekki ábyrgð á beinu eða óbeinu tjóni sem hlýst af notkun þjónustunnar eða af strikamerkjum sem þú býrð til, þar á meðal kostnaði við endurprentun og tjóni vegna strikamerkja sem ekki er hægt að lesa.</p>
<h2>Tenglar á þriðju aðila</h2>
<p>Vefsíðan inniheldur tengla á vefsvæði og þjónustu þriðju aðila. Við berum ekki ábyrgð á efni eða stefnum þessara vefsvæða.</p>
<h2>Breytingar á skilmálum</h2>
<p>Þessum skilmálum kann að vera breytt hvenær sem er. Með því að halda áfram að nota þjónustuna eftir að breytingar hafa verið birtar telst þú samþykkja nýjustu útgáfuna.</p>
<h2>Gildandi lög</h2>
<p>Um þessa skilmála gilda lög Lýðveldisins Indónesíu.</p>
<h2>Hafa samband</h2>
<p>Spurningar og tilkynningar má senda í gegnum tengiliðatengilinn neðst á hverri síðu eða í gegnum <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lestu einnig <a href="/kebijakan-privasi">Persónuverndarstefnu</a> okkar.</p>
`
  }
};
