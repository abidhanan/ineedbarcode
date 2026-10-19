// qr-code-menu-restoran
module.exports = {
  title: "QR Code restorāna ēdienkartei: pilns ceļvedis",
  desc: "Digitālā ēdienkarte ar QR Code atvieglo dzīvi klientiem un ietaupa drukas izmaksas. Lūk, kā to izveidot, sagatavot ēdienkarti un novietot uz galda.",
  tags: ["Bizness", "QR Code"],
  coverCaption: "QR Code uz galda ved klientus tieši uz digitālo ēdienkarti.",
  inlineCaption: "Novietojiet QR Code vietā, kur to viegli sasniegt no krēsla.",
  faq: [
    ["Ko labāk izmantot digitālajai ēdienkartei: PDF vai tīmekļa lapu?", "Tīmekļa lapu parasti ir ērtāk lasīt tālrunī, un tā atveras ātrāk. PDF var izmantot, ja fails ir neliels un teksts ekrānā ir pietiekami liels."],
    ["Cik lielam jābūt ēdienkartes QR Code uz galda?", "Ar aptuveni 3–5 cm pietiek, lai to varētu noskenēt no krēsla. Izmantojiet materiālu, kas ir izturīgs pret izlijušiem dzērieniem un nav pārāk spīdīgs."],
    ["Vai, mainoties ēdienkartei, QR Code jāizdrukā no jauna?", "Nē, ja saite paliek tā pati. Pietiek atjaunināt tās lapas vai ēdienkartes faila saturu, uz kuru ved QR Code."]
  ],
  body: `
<p>Digitālā ēdienkarte ar QR Code mūsdienās ir ierasta lieta kafejnīcās un restorānos. Klientiem pietiek noskenēt QR Code uz galda, lai redzētu ēdienu sarakstu, cenas un fotoattēlus. Uzņēmumu īpašniekiem tas ietaupa drukas izmaksas un atvieglo cenu vai ēdienkartes maiņu.</p>

<h2>QR Code ēdienkartes priekšrocības</h2>
<ul>
  <li><strong>Viegli atjaunināt</strong>: mainiet cenas vai pievienojiet ēdienus, nepārdrukājot ēdienkartes grāmatiņu.</li>
  <li><strong>Ietaupījums</strong>: pietiek izdrukāt nelielu QR Code katram galdam.</li>
  <li><strong>Vairāk informācijas</strong>: rādiet fotoattēlus, aprakstus un atzīmes, piemēram, “ass” vai “veģetārs”.</li>
  <li><strong>Atbalsta pasūtīšanu tiešsaistē</strong>: novirziet klientus uz pasūtījuma veidlapu vai WhatsApp.</li>
</ul>

<h2>1. solis: sagatavojiet ēdienkarti tiešsaistē</h2>
<p>QR Code satur tikai saiti, tāpēc jums vajadzīga ēdienkarte, ko var atvērt internetā. Iespējas ir, piemēram, lapa jūsu vietnē, PDF fails publiski kopīgotā tiešsaistes krātuvē vai kataloga lapa pasūtīšanas platformā. Pārliecinieties, ka ēdienkarti ir ērti lasīt tālruņa ekrānā: teksts pietiekami liels, fotoattēli ne pārāk smagi un cenas skaidras.</p>

<h2>2. solis: izveidojiet QR Code</h2>
<ol>
  <li>Nokopējiet savas ēdienkartes saiti.</li>
  <li>Atveriet <a href="/?type=qrcode">QR Code ģeneratoru</a>, izvēlieties cilni <strong>URL</strong> un ielīmējiet saiti.</li>
  <li>Sadaļā “Dizains” pievienojiet rāmi ar uzrakstu “ĒDIENKARTE” vai “SKENĒJIET, LAI REDZĒTU ĒDIENKARTI”.</li>
  <li>Pielāgojiet krāsas restorāna identitātei, bet joprojām izmantojiet tumšu krāsu uz gaiša fona.</li>
  <li>Lejupielādējiet PNG ar drukāšanai pietiekami lielu moduļa izmēru.</li>
</ol>
<p>Izmantojiet saiti, kas nemainīsies. Ja ēdienkarte tiks pārvietota uz citu adresi, jau izdrukāto QR Code atjaunināt nevarēs. Skaidrojumu atradīsiet rakstā <a href="/artikel/apa-itu-qr-code">kas ir QR Code</a>.</p>

<h2>3. solis: izdrukājiet un novietojiet</h2>
<ul>
  <li>Drukājiet vismaz aptuveni 3–5 cm lielu, lai to būtu viegli noskenēt no krēsla.</li>
  <li>Izmantojiet pret izlijušiem dzērieniem izturīgu materiālu, piemēram, vinila uzlīmi vai laminētu kartīti bez pārmērīga spīduma.</li>
  <li>Novietojiet viegli sasniedzamā vietā, piemēram, akrila statīvā galda vidū.</li>
  <li>Ja klienti pasūta, izmantojot tērzēšanu, blakus QR Code norādiet galda numuru.</li>
</ul>

<h2>Neaizmirstiet klientus bez tālruņa</h2>
<p>Turiet vienu vai divas drukātas ēdienkartes klientiem, kuriem nav līdzi tālruņa, kuriem izlādējies akumulators vai kuriem ērtāk lasīt papīra ēdienkarti.</p>
<p>Varat arī izveidot <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> viesiem un novietot to blakus ēdienkartes QR Code.</p>
`
};
