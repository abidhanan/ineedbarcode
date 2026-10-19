// desain-qr-code-kreatif
module.exports = {
  title: "Kreatívny dizajn QR Code, ktorý sa dá stále naskenovať",
  desc: "QR Code môže mať tvar srdca alebo kruhu, prípadne rámik a farby. Naučte sa pravidlá, vďaka ktorým bude dizajn atraktívny a zároveň sa ľahko naskenuje.",
  tags: ["Dizajn", "QR Code"],
  coverCaption: "Farby robia QR Code atraktívnejším, ak zostane kontrast výrazný.",
  inlineCaption: "Dizajn QR Code je vhodné vždy pred tlačou vyskúšať.",
  faq: [
    ["Dá sa QR Code v tvare srdca stále naskenovať?", "Áno. Pôvodný QR Code zostáva nedotknutý v strede a zvyšok je len ozdobný vzor. Ak je kontrast výrazný a veľkosť dostatočná, QR Code zostane čitateľný."],
    ["Aké farby sú pre QR Code bezpečné?", "Tmavé farby, ako je čierna, tmavomodrá, tmavozelená, fialová alebo tmavohnedá, na bielom alebo veľmi svetlom pozadí."],
    ["Môže mať QR Code nápis alebo rámik?", "Áno. Rámik s výzvou ako „NASKENUJTE MA“ ľuďom naopak pomáha pochopiť, na čo slúži, ak rámik QR Code nezakrýva."]
  ],
  body: `
<p>Čiernobiely QR Code je síce funkčný, ale na obaloch, pozvánkach alebo propagačných materiáloch často pôsobí strnulo. S trochou dizajnu môže QR Code vyzerať atraktívnejšie bez toho, aby stratil svoju funkciu. Kľúčom je pochopiť, ktoré časti sa dajú meniť a ktoré musia zostať nedotknuté.</p>

<h2>Vonkajší tvar: srdce, kruh a ďalšie</h2>
<p>V časti Dizajn v <a href="/?type=qrcode">generátore QR Code</a> môžete zvoliť tvar ako kruh, srdce, šesťuholník, osemuholník, hviezdu alebo kosoštvorec. Pôvodný QR Code zostáva v strede a zvyšok sa vyplní ozdobným vzorom, kým nevznikne zvolený tvar. Ozdobný vzor neobsahuje žiadne dáta, takže skenovanie neruší, ak okolo pôvodného QR Code zostane prázdna medzera.</p>

<h2>Štýl bodiek</h2>
<p>Štvorčeky QR Code sa dajú zmeniť na zaoblené tvary alebo okrúhle bodky. Aby sa QR Code dal stále ľahko naskenovať, tri veľké štvorce v rohoch (finder pattern) by mali zostať celistvými štvorcami, pretože práve tieto časti hľadá fotoaparát ako prvé. Náš generátor tieto časti vždy kreslí ako celistvé štvorce, nanajvýš so zaoblenými rohmi, bez ohľadu na zvolený štýl bodiek.</p>

<h2>Farby</h2>
<ul>
  <li>Pre QR Code používajte <strong>tmavú</strong> farbu a pre pozadie <strong>svetlú</strong>. Tmavomodrá, tmavozelená, fialová alebo tmavohnedá sú vo všeobecnosti bezpečné.</li>
  <li>Pre QR Code nepoužívajte bledé farby, ako je žltá, bledoružová alebo svetlosivá.</li>
  <li>Neobracajte farby na svetlý QR Code na tmavom pozadí, pretože to nepodporujú všetky skenovacie aplikácie.</li>
</ul>

<h2>Rámik a výzva</h2>
<p>Rámik s výzvou ako „NASKENUJTE MA“, „MENU“ alebo „SCAN WIFI“ preukázateľne pomáha ľuďom pochopiť, na čo QR Code slúži. Môžete zvoliť rámik so štítkom dole, so štítkom hore, rohový, bublinu, kruh alebo stuhu a potom zmeniť nápis a jeho farbu.</p>

<h2>Pravidlá, aby dizajn zostal čitateľný</h2>
<ol>
  <li>Udržujte výrazný <strong>kontrast</strong> medzi QR Code a jeho pozadím.</li>
  <li>Nechajte <strong>tri značky</strong> v rohoch jasne viditeľné a nezakryté.</li>
  <li>Ponechajte <strong>prázdny priestor</strong> okolo QR Code a rámika.</li>
  <li>QR Code s dizajnom príliš nezmenšujte. Tvary ako srdce spôsobia, že plocha pôvodného QR Code je menšia než celková veľkosť obrázka.</li>
  <li>Pred tlačou ho <strong>vyskúšajte</strong> na niekoľkých telefónoch.</li>
</ol>

<p>Ak sa váš dizajn ťažko skenuje, vracajte jednotlivé voľby postupne k základnému nastaveniu tlačidlom <strong>Obnoviť</strong>, aby ste našli príčinu. Ďalšie bežné príčiny nájdete v článku <a href="/artikel/barcode-tidak-bisa-dipindai">7 príčin, prečo sa čiarový kód nedá naskenovať</a>.</p>
`
};
