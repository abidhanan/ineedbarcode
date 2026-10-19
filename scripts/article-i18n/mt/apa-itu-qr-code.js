// apa-itu-qr-code
module.exports = {
  title: "X'inhu QR Code u Kif Jaħdem?",
  desc: "QR Code jista' jaħżen links, test u anke data tal-WiFi, u jibqa' jinqara anke jekk parti minnu tkun bil-ħsara. Hawn kif jaħdem u l-vantaġġi tiegħu.",
  tags: ["Bażi", "QR Code"],
  coverCaption: "QR Code jista' jiġi skenjat direttament bil-kamera tal-mowbajl.",
  inlineCaption: "Kull QR Code huwa magħmul minn kwadri żgħar suwed u bojod.",
  faq: [
    ["QR Code jista' jiskadi?", "QR Code statiku qatt ma jiskadi, għax id-data tiegħu tkun inkorporata direttament fl-istampa. QR Code dinamiku jista' jieqaf jaħdem jekk is-servizz li jipprovdi l-link jieqaf jew jekk l-abbonament jintemm."],
    ["Kemm data jista' jaħżen QR Code?", "L-ikbar verżjoni ta' QR Code tista' taħżen sa 7,089 ċifra jew madwar 2,953 byte. Madankollu, iktar ma tkun inqas id-data, iktar ikun faċli li QR Code jiġi skenjat."],
    ["QR Code jibqa' jinqara jekk parti minnu tkun bil-ħsara?", "Iva. Bis-saħħa tal-korrezzjoni tal-iżbalji, QR Code jibqa' jinqara anke jekk madwar 7% sa 30% minnu jkun bil-ħsara, skont il-livell ta' korrezzjoni L, M, Q jew H li jintuża."]
  ],
  body: `
<p>QR Code (Quick Response Code) huwa barcode 2D kwadru magħmul minn kwadri żgħar suwed u bojod. B'differenza mill-barcode bil-linji li jaħżen biss xi tużżana ċifri, QR Code jista' jaħżen links ta' siti web, test twil, numri tat-telefon, kuntatti u anke data tan-netwerk tal-WiFi.</p>
<p>QR Code ġie żviluppat fl-1994 minn Denso Wave, kumpanija Ġappuniża, biex jittraċċa l-partijiet tal-vetturi fil-fabbriki. Illum QR Code jintuża kullimkien, mill-ħlasijiet diġitali sal-menus tar-ristoranti, għax jista' jiġi skenjat direttament bil-kamera tal-mowbajl.</p>

<h2>Il-partijiet ta' QR Code</h2>
<ul>
  <li><strong>Tliet kwadri kbar fil-kantunieri</strong> (finder pattern): jgħinu lill-kamera ssib il-QR Code u tagħraf id-direzzjoni tiegħu, biex jibqa' jinqara anke jekk jiġi skenjat mżerżaq jew ta' taħt fuq.</li>
  <li><strong>Disinn ta' allinjament</strong> (alignment pattern): kwadru żgħir li jgħin biex jinqara QR Code li jkun mgħawweġ jew jidher minn angolu.</li>
  <li><strong>Żona tad-data</strong>: il-kwadri żgħar li fihom l-informazzjoni li taħżen.</li>
  <li><strong>Żona kwieta</strong> (quiet zone): l-ispazju vojt madwar il-QR Code biex ikun faċli jinfired mill-isfond.</li>
</ul>

<h2>Kemm data jista' jaħżen?</h2>
<p>QR Code għandu 40 verżjoni ta' daqs. L-ikbar verżjoni tista' taħżen sa 7,089 ċifra jew madwar 2,953 byte ta' data. Fil-prattika, iktar ma tkun inqas id-data maħżuna, iktar ikunu kbar il-kwadri u iktar ikun faċli li l-QR Code jiġi skenjat. Għalhekk link qasira hija aħjar minn link twila ħafna.</p>

<h2>Jibqa' jinqara anke jekk ikollu l-ħsara</h2>
<p>QR Code juża l-korrezzjoni tal-iżbalji (error correction). Hemm erba' livelli:</p>
<ul>
  <li><strong>L</strong>: id-data tista' tiġi rkuprata xorta jekk madwar 7% tal-QR Code ikun bil-ħsara.</li>
  <li><strong>M</strong>: madwar 15%. Din hija l-għażla komuni u bilanċjata.</li>
  <li><strong>Q</strong>: madwar 25%.</li>
  <li><strong>H</strong>: madwar 30%, adattat għal QR Code li se jkollu logo jew li se jiġi stampat f'post fejn jitħammeġ faċilment.</li>
</ul>
<p>Iktar ma jkun għoli l-livell ta' korrezzjoni, iktar ikun hemm bżonn kwadri, u għalhekk id-disinn tal-QR Code jidher iktar dens.</p>

<h2>X'tista' taħżen f'QR Code?</h2>
<ul>
  <li>Links għal sit web, ħanut onlajn jew formola.</li>
  <li>Data tal-WiFi, biex il-mistednin ikunu jistgħu jikkonnettjaw mingħajr ma jittajpjaw il-password. Ara l-gwida <a href="/artikel/cara-membuat-qr-code-wifi">QR Code tal-WiFi</a>.</li>
  <li>Biljetti tan-negozju diġitali (vCard), email, SMS u chats fuq WhatsApp.</li>
  <li>Postijiet fuq il-mappa u skedi ta' avvenimenti.</li>
</ul>

<h2>QR Code statiku u dinamiku</h2>
<p>QR Code li jinħoloq direttament mid-data jissejjaħ <strong>QR Code statiku</strong>: il-kontenut tiegħu jkun inkorporat fl-istampa u ma jistax jinbidel, iżda lanqas ma jiskadi qatt. QR Code <strong>dinamiku</strong> fih link qasira ta' xi servizz li mbagħad jindirizzak lejn id-destinazzjoni tiegħek; id-destinazzjoni tista' tinbidel, iżda l-QR Code jieqaf jaħdem jekk dak is-servizz jieqaf. Għall-biċċa l-kbira tal-bżonnijiet, QR Code statiku huwa biżżejjed u iktar sikur fit-tul.</p>

<p>Trid tipprova? Oħloq <a href="/?type=qrcode">QR Code b'xejn</a> issa, jew aqra <a href="/artikel/cara-membuat-qr-code-gratis">kif toħloq QR Code fi 3 passi</a>.</p>
`
};
