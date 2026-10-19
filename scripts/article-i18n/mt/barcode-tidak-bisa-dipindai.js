// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Raġunijiet Għaliex Barcode Ma Jiġix Skenjat u Kif Issolvihom",
  desc: "Il-barcode jew il-QR Code tiegħek mhux qed jiġi skenjat? Iċċekkja s-seba' kawżi l-iktar komuni, mill-kuntrast tal-kuluri sad-daqs, flimkien ma' kif issolvihom.",
  tags: ["Pariri", "Barcode"],
  coverCaption: "Il-kuntrast u d-daqs jiddeterminaw jekk QR Code huwiex faċli biex jiġi skenjat.",
  inlineCaption: "Fil-magazzin, il-barcodes li ma jiġux skenjati jdewmu x-xogħol.",
  faq: [
    ["Għaliex QR Code jiġi skenjat fuq mowbajl wieħed iżda mhux fuq ieħor?", "Il-kameras u l-apps tal-iskenjar għandhom kapaċitajiet differenti. QR Code li jkun żgħir wisq, b'kuntrast baxx jew bil-kuluri maqluba jfalli iktar spiss fuq ċerti mowbajls. Ittestja b'diversi mowbajls qabel tistampa."],
    ["Barcode bil-kulur jista' jiġi skenjat?", "Iva, sakemm il-kulur ikun skur fuq sfond ċar. Evita l-aħmar għal-linji tal-barcode, għax ħafna skaners tal-kaxxa jużaw dawl aħmar."],
    ["Kif nista' niċċekkja jekk il-barcode huwiex korrett?", "Skenja l-kopja stampata b'diversi mowbajls jew skaners, u kun żgur li d-data li tinqara hija eżattament l-istess bħad-data li daħħalt."]
  ],
  body: `
<p>M'hemm xejn iktar frustranti minn barcode li diġà ġie stampat fuq mijiet ta' folji u mbagħad jirriżulta li ma jistax jiġi skenjat. L-aħbar it-tajba hija li l-kawża normalment tkun sempliċi u faċli biex tiġi evitata. Dawn huma s-seba' kawżi l-iktar komuni.</p>

<h2>1. Kuntrast tal-kuluri baxx wisq</h2>
<p>L-iskaner jaqra d-differenza bejn l-iskur u ċ-ċar. Barcode griż ċar fuq abjad, jew blu skur fuq iswed, huwa diffiċli biex jingħaraf. <strong>Soluzzjoni:</strong> uża kulur skur fuq sfond ċar. L-iswed fuq l-abjad huwa l-iktar għażla sikura.</p>

<h2>2. Kuluri maqluba jew kulur aħmar</h2>
<p>Mhux l-iskaners kollha jappoġġaw barcode ċar fuq sfond skur. Barra minn hekk, ħafna skaners tal-kaxxa jużaw dawl aħmar, u għalhekk il-linji ħomor jidhru l-istess bħall-isfond abjad. <strong>Soluzzjoni:</strong> evita l-aħmar għal-linji jew il-moduli tal-barcode, u taqlibx il-kuluri.</p>

<h2>3. Daqs żgħir wisq</h2>
<p>Il-kamera teħtieġ biżżejjed pixels biex tagħraf kull modulu. <strong>Soluzzjoni:</strong> kabbar il-barcode. Għal QR Code li jiġi skenjat mill-qrib, uża mill-inqas madwar 2 × 2 cm. Ara l-<a href="/artikel/ukuran-barcode-untuk-dicetak">gwida għad-daqs tal-istampar</a>.</p>

<h2>4. L-ebda żona kwieta</h2>
<p>Barcode li jmiss ma' stampa, test jew it-tarf tal-karta huwa diffiċli biex jinfired minn dak li hemm madwaru. <strong>Soluzzjoni:</strong> ħalli spazju vojt madwar il-barcode, speċjalment fuq ix-xellug u l-lemin ta' barcode bil-linji.</p>

<h2>5. Stampa mċajpra jew distorta</h2>
<p>Barcode li jitkabbar minn stampa żgħira, li jiġi ssejvjat bħala JPG ta' kwalità baxxa, jew li jiġi mġebbed b'mod mhux proporzjonat jitlef il-forma tiegħu. <strong>Soluzzjoni:</strong> niżżel b'daqs ta' modulu ikbar fil-format PNG, u dejjem ibdel id-daqs b'mod proporzjonat.</p>

<h2>6. Data ħażina jew li ma taqbilx mat-tip</h2>
<p>Kull tip ta' barcode għandu r-regoli tiegħu. EAN-13, pereżempju, jaċċetta biss 12 jew 13-il ċifra b'ċifra ta' kontroll korretta. Link b'żball fl-ittajpjar tagħmel ukoll li l-QR Code jinqara iżda ma jiftaħ xejn. <strong>Soluzzjoni:</strong> iċċekkja d-data qabel tistampa. Il-ġeneratur <a href="/">I Need Barcode</a> juri messaġġ jekk id-data ma taqbilx mar-regoli tat-tip ta' barcode magħżul.</p>

<h2>7. Il-wiċċ u d-dawl</h2>
<p>Materjali tleqq, plastik trasparenti, tinjiet u uċuħ mgħawġa jistgħu jirriflettu d-dawl jew ibiddlu l-forma tal-barcode. <strong>Soluzzjoni:</strong> stampa fuq wiċċ ċatt u li ma jleqqx, u mbagħad ittestja fil-kundizzjonijiet tad-dawl reali.</p>

<h2>Dwar QR Code b'disinn</h2>
<p>QR Code li jkollu forma, kuluri jew qafas xorta jista' jiġi skenjat sakemm it-tliet kwadri ta' referenza fil-kantunieri jkunu sħaħ u l-kuntrast ikun biżżejjed. Aqra iktar f'<a href="/artikel/desain-qr-code-kreatif">disinji kreattivi ta' QR Code li jibqgħu jinqraw</a>.</p>
<p>L-aħjar drawwa: <strong>dejjem ittestja kopja stampata waħda</strong> b'diversi mowbajls u skaners qabel tistampa kwantità kbira.</p>
`
};
