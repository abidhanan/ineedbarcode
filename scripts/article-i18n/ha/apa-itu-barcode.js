// apa-itu-barcode
module.exports = {
  title: "Mene Ne Barcode? Ma'anarsa, Yadda Yake Aiki, da Nau'o'insa",
  desc: "Barcode yana kusan kan duk kayan da kuke saya. Ku san yadda yake aiki, taƙaitaccen tarihinsa, da nau'o'in barcode da aka fi amfani da su.",
  tags: ["Tushe", "Barcode"],
  coverCaption: "Barcode a kan kwalin kaya yana ɗauke da lambar musamman ta kayan.",
  inlineCaption: "Mai karɓar kuɗi yana amfani da na'urar sikan don karanta barcode cikin ƙiftawar ido.",
  faq: [
    ["Mene ne bambancin barcode da QR Code?", "QR Code ɗaya ne daga cikin nau'o'in barcode, wato barcode na 2D. Barcode na layi (1D) yana ɗaukar 'yan haruffa kaɗan kawai kuma ana karanta shi daga hagu zuwa dama, yayin da QR Code yake ajiye bayanai a hanyoyi biyu, don haka yana iya ɗaukar mahaɗi, rubutu, ko bayanan WiFi."],
    ["Shin barcode yana ɗauke da farashin kaya?", "Yawanci ba ya ɗauka. Barcode na kaya lamba kawai yake ɗauke da ita. Ana ajiye farashi da sunan kaya a cikin tsarin karɓar kuɗi, sannan a nemo su bisa lambar da aka yi sikanin ta."],
    ["Shin dole ne a biya kuɗi don ƙirƙirar barcode?", "A'a. Ana iya ƙirƙirar hoton barcode kyauta, misali a I Need Barcode. Abin da kawai ake biyan kuɗi don yin rajista shi ne lambar hukuma ta barcode na kayan sayarwa kamar EAN-13, ta hanyar GS1."]
  ],
  body: `
<p>Barcode hanya ce ta rubuta bayanai a cikin wani tsari da na'ura za ta iya karantawa. Wannan tsarin yawanci layuka ne baƙi da fari masu faɗi daban-daban, ko ƙananan akwatuna da aka jera a cikin murabba'i. Idan aka yi sikanin sa, ana sake fassara tsarin zuwa lambobi ko rubutu, misali lambar kaya, lambar bin diddigin kaya, ko adireshin shafin yanar gizo.</p>
<p>Saboda na'ura ce ke karanta shi, barcode ya fi sauri sosai kuma kuskurensa ya fi ƙanƙanta idan aka kwatanta da rubuta lamba da hannu. Shi ya sa ake amfani da barcode a wuraren biyan kuɗi, rumbunan ajiya, asibitoci, tikiti, har ma da kwalayen abinci.</p>

<h2>Taƙaitaccen tarihin barcode</h2>
<p>Norman Joseph Woodland da Bernard Silver ne suka mallaki haƙƙin ƙirƙirar ra'ayin barcode a shekarar 1952 a Amurka. Sai a 1974 ne aka fara amfani da barcode a shaguna a zahiri, lokacin da aka yi sikanin wani fakitin cingam a wani babban kanti a Ohio da lambar UPC. Tun daga lokacin, barcode ya bazu zuwa ko'ina a duniya, kuma yanzu wata ƙungiyar ƙa'idoji mai suna GS1 ce ke kula da shi a matakin duniya.</p>

<h2>Ta yaya barcode yake aiki?</h2>
<p>Na'urar sikan tana haska haske a kan barcode sannan ta karanta hasken da ya dawo. Sashen duhu yana mayar da haske kaɗan, sashen haske kuma yana mayar da yawa. Ana mayar da wannan bambanci zuwa jerin lambobi 0 da 1, sannan a kwatanta shi da ƙa'idojin nau'in barcode ɗin. Barcode da yawa kuma suna da <strong>lambar tantancewa</strong> (check digit), wato lambar ƙarshe da ake lissafawa daga lambobin da suka gabace ta. Idan sakamakon lissafin bai dace ba, na'urar sikan za ta san akwai kuskure kuma ta ƙi sakamakon.</p>
<p>Barcode da kansa yawanci lamba kawai yake ɗauke da ita. Bayanai kamar sunan kaya ko farashi ana ajiye su a cikin tsarin karɓar kuɗi ko a rumbun bayanai (database), sannan a nemo su bisa wannan lambar.</p>

<h2>Nau'o'in barcode da aka fi amfani da su</h2>
<p>A dunƙule, barcode ya kasu kashi biyu manya:</p>
<ul>
  <li><strong>Barcode na 1D (na layi)</strong>: layuka a tsaye ne da ake karantawa daga hagu zuwa dama. Misalansu sun haɗa da <a href="/?type=ean13">EAN-13</a> da <a href="/?type=upca">UPC-A</a> don kayan sayarwa, da kuma <a href="/?type=code128">Code 128</a> da <a href="/?type=code39">Code 39</a> don jigilar kaya da rumbunan ajiya.</li>
  <li><strong>Barcode na 2D</strong>: tsarin akwatuna ne da ke ajiye bayanai a hanyoyi biyu, don haka yana ɗaukar abubuwa da yawa fiye da haka. Misalansu sun haɗa da <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, da <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Bayan waɗannan, akwai barcode na musamman don gidan waya da jigilar kaya, don fannin lafiya, da kuma ƙa'idojin GS1 don sarkar samar da kayayyaki. Za ku iya karanta ƙarin bayani game da bambance-bambancensu a maƙalar <a href="/artikel/perbedaan-barcode-1d-dan-2d">Bambancin Barcode na 1D da 2D</a>.</p>

<h2>Me ake yi da barcode?</h2>
<ul>
  <li><strong>Dillanci</strong>: yana hanzarta biyan kuɗi kuma yana rubuta adadin kaya kai tsaye.</li>
  <li><strong>Rumbun ajiya da jigilar kaya</strong>: yana bin diddigin kaya da fakiti daga wuri ɗaya zuwa wani.</li>
  <li><strong>Tikiti da taruka</strong>: yana tabbatar da sahihancin tikiti da sikan ɗaya.</li>
  <li><strong>Tallace-tallace</strong>: QR Code a kan takardar talla ko kwalin kaya yana kai mutane kai tsaye zuwa shafinku, menu ɗinku, ko WhatsApp ɗinku.</li>
</ul>

<h2>Ƙirƙirar barcode da kanku</h2>
<p>Ba kwa buƙatar manhaja ta kuɗi don ƙirƙirar barcode. A <a href="/">I Need Barcode</a>, ku zaɓi nau'in barcode, ku shigar da bayanai, sannan ku sauke shi a matsayin hoton PNG. Akwai nau'o'i fiye da 100 da za ku iya zaɓa, kuma duka kyauta ne ba tare da yin rajista ba.</p>
`
};
