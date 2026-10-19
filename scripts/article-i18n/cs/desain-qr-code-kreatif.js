// desain-qr-code-kreatif
module.exports = {
  title: "Kreativní design QR Code, který lze stále naskenovat",
  desc: "QR Code může mít tvar srdce nebo kruhu, případně rámeček a barvy. Naučte se pravidla, díky kterým bude design atraktivní a zároveň se snadno naskenuje.",
  tags: ["Design", "QR Code"],
  coverCaption: "Barvy dělají QR Code atraktivnějším, pokud zůstane kontrast výrazný.",
  inlineCaption: "Design QR Code je vhodné vždy před tiskem vyzkoušet.",
  faq: [
    ["Lze QR Code ve tvaru srdce stále naskenovat?", "Ano. Původní QR Code zůstává nedotčený uprostřed a zbytek je jen ozdobný vzor. Pokud je kontrast výrazný a velikost dostatečná, QR Code zůstane čitelný."],
    ["Jaké barvy jsou pro QR Code bezpečné?", "Tmavé barvy, jako je černá, tmavě modrá, tmavě zelená, fialová nebo tmavě hnědá, na bílém nebo velmi světlém pozadí."],
    ["Může mít QR Code nápis nebo rámeček?", "Ano. Rámeček s výzvou jako „NASKENUJTE MĚ“ lidem naopak pomáhá pochopit, k čemu slouží, pokud rámeček QR Code nezakrývá."]
  ],
  body: `
<p>Černobílý QR Code je sice funkční, ale na obalech, pozvánkách nebo propagačních materiálech často působí strnule. S trochou designu může QR Code vypadat atraktivněji, aniž by ztratil svou funkci. Klíčem je pochopit, které části lze měnit a které musí zůstat nedotčené.</p>

<h2>Vnější tvar: srdce, kruh a další</h2>
<p>V části Design v <a href="/?type=qrcode">generátoru QR Code</a> můžete zvolit tvar jako kruh, srdce, šestiúhelník, osmiúhelník, hvězdu nebo kosočtverec. Původní QR Code zůstává uprostřed a zbytek se vyplní ozdobným vzorem, dokud nevznikne zvolený tvar. Ozdobný vzor neobsahuje žádná data, takže skenování neruší, pokud kolem původního QR Code zůstane prázdná mezera.</p>

<h2>Styl teček</h2>
<p>Čtverečky QR Code lze změnit na zaoblené tvary nebo kulaté tečky. Aby šel QR Code stále snadno naskenovat, měly by tři velké čtverce v rozích (finder pattern) zůstat celistvými čtverci, protože právě tyto části hledá fotoaparát jako první. Náš generátor tyto části vždy kreslí jako celistvé čtverce, nanejvýš se zaoblenými rohy, bez ohledu na zvolený styl teček.</p>

<h2>Barvy</h2>
<ul>
  <li>Pro QR Code používejte <strong>tmavou</strong> barvu a pro pozadí <strong>světlou</strong>. Tmavě modrá, tmavě zelená, fialová nebo tmavě hnědá jsou obecně bezpečné.</li>
  <li>Pro QR Code nepoužívejte bledé barvy, jako je žlutá, bledě růžová nebo světle šedá.</li>
  <li>Neobracejte barvy na světlý QR Code na tmavém pozadí, protože to nepodporují všechny skenovací aplikace.</li>
</ul>

<h2>Rámeček a výzva</h2>
<p>Rámeček s výzvou jako „NASKENUJTE MĚ“, „MENU“ nebo „SCAN WIFI“ prokazatelně pomáhá lidem pochopit, k čemu QR Code slouží. Můžete zvolit rámeček se štítkem dole, se štítkem nahoře, rohový, bublinu, kruh nebo stuhu a poté změnit nápis a jeho barvu.</p>

<h2>Pravidla, aby design zůstal čitelný</h2>
<ol>
  <li>Udržujte výrazný <strong>kontrast</strong> mezi QR Code a jeho pozadím.</li>
  <li>Nechte <strong>tři značky</strong> v rozích jasně viditelné a nezakryté.</li>
  <li>Ponechte <strong>prázdný prostor</strong> kolem QR Code a rámečku.</li>
  <li>QR Code s designem příliš nezmenšujte. Tvary jako srdce způsobí, že plocha původního QR Code je menší než celková velikost obrázku.</li>
  <li>Před tiskem ho <strong>vyzkoušejte</strong> na několika telefonech.</li>
</ol>

<p>Pokud se váš design špatně skenuje, vracejte jednotlivé volby postupně k základnímu nastavení tlačítkem <strong>Obnovit</strong>, abyste našli příčinu. Další běžné příčiny najdete v článku <a href="/artikel/barcode-tidak-bisa-dipindai">7 příčin, proč nejde čárový kód naskenovat</a>.</p>
`
};
