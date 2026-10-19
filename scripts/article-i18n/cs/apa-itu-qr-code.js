// apa-itu-qr-code
module.exports = {
  title: "Co je QR Code a jak funguje?",
  desc: "QR Code dokáže uchovat odkaz, text i údaje o WiFi a zůstane čitelný, i když je částečně poškozený. Takto funguje a v tom jsou jeho výhody.",
  tags: ["Základy", "QR Code"],
  coverCaption: "QR Code lze naskenovat přímo fotoaparátem telefonu.",
  inlineCaption: "Každý QR Code se skládá z malých černých a bílých čtverečků.",
  faq: [
    ["Může QR Code vypršet?", "Statický QR Code nikdy nevyprší, protože jeho data jsou vložena přímo v obrázku. Dynamický QR Code může přestat fungovat, pokud služba, která poskytuje jeho odkaz, skončí nebo vyprší předplatné."],
    ["Kolik dat dokáže QR Code uchovat?", "Největší verze QR Code dokáže uchovat až 7 089 číslic nebo přibližně 2 953 bajtů. Čím méně dat však obsahuje, tím snáze se QR Code skenuje."],
    ["Je QR Code čitelný, i když je částečně poškozený?", "Ano. Díky opravě chyb zůstane QR Code čitelný, i když je poškozeno přibližně 7 % až 30 % jeho plochy, podle použité úrovně opravy L, M, Q nebo H."]
  ],
  body: `
<p>QR Code (Quick Response Code) je čtvercový 2D čárový kód složený z malých černých a bílých čtverečků. Na rozdíl od klasického čárového kódu, který uchová jen něco přes deset číslic, dokáže QR Code uchovat odkaz na web, dlouhý text, telefonní číslo, kontakt nebo i údaje o síti WiFi.</p>
<p>QR Code vyvinula v roce 1994 japonská společnost Denso Wave ke sledování autodílů v továrně. Dnes se QR Code používá všude, od digitálních plateb po menu v restauracích, protože ho lze naskenovat přímo fotoaparátem telefonu.</p>

<h2>Části QR Code</h2>
<ul>
  <li><strong>Tři velké čtverce v rozích</strong> (finder pattern): pomáhají fotoaparátu QR Code najít a určit jeho orientaci, takže zůstane čitelný, i když ho skenujete šikmo nebo vzhůru nohama.</li>
  <li><strong>Zarovnávací vzor</strong> (alignment pattern): malý čtverec, který pomáhá přečíst QR Code, jenž je zakřivený nebo snímaný pod úhlem.</li>
  <li><strong>Datová oblast</strong>: malé čtverečky obsahující informace, které uložíte.</li>
  <li><strong>Klidová zóna</strong> (quiet zone): prázdný prostor kolem QR Code, díky kterému se snadno oddělí od pozadí.</li>
</ul>

<h2>Kolik dat dokáže uchovat?</h2>
<p>QR Code má 40 velikostních verzí. Největší verze dokáže uchovat až 7 089 číslic nebo přibližně 2 953 bajtů dat. V praxi platí, že čím méně dat uložíte, tím větší jsou čtverečky a tím snáze se QR Code skenuje. Proto je krátký odkaz lepší než velmi dlouhý.</p>

<h2>Čitelný i při poškození</h2>
<p>QR Code využívá opravu chyb (error correction). Existují čtyři úrovně:</p>
<ul>
  <li><strong>L</strong>: data lze obnovit, i když je poškozeno přibližně 7 % QR Code.</li>
  <li><strong>M</strong>: přibližně 15 %. Jde o běžnou a vyváženou volbu.</li>
  <li><strong>Q</strong>: přibližně 25 %.</li>
  <li><strong>H</strong>: přibližně 30 %, vhodné pro QR Code, do kterého vložíte logo, nebo který bude vytištěn na místě, kde se snadno ušpiní.</li>
</ul>
<p>Čím vyšší je úroveň opravy, tím více čtverečků je potřeba, takže vzor QR Code vypadá hustší.</p>

<h2>Co všechno lze do QR Code uložit?</h2>
<ul>
  <li>Odkaz na web, e-shop nebo formulář.</li>
  <li>Údaje o WiFi, aby se hosté mohli připojit bez psaní hesla. Viz návod <a href="/artikel/cara-membuat-qr-code-wifi">QR Code pro WiFi</a>.</li>
  <li>Digitální vizitku (vCard), e-mail, SMS a chat na WhatsAppu.</li>
  <li>Polohu na mapě a termín akce.</li>
</ul>

<h2>Statický a dynamický QR Code</h2>
<p>QR Code vytvořený přímo z dat se nazývá <strong>statický QR Code</strong>: jeho obsah je vložen v obrázku a nelze ho změnit, ale zároveň nikdy nevyprší. <strong>Dynamický</strong> QR Code obsahuje krátký odkaz určité služby, který pak přesměruje na váš cíl; cíl lze změnit, ale QR Code přestane fungovat, pokud služba skončí. Pro většinu potřeb statický QR Code plně postačí a z dlouhodobého hlediska je bezpečnější.</p>

<p>Chcete to vyzkoušet? Vytvořte si <a href="/?type=qrcode">QR Code zdarma</a> hned teď, nebo si přečtěte, <a href="/artikel/cara-membuat-qr-code-gratis">jak vytvořit QR Code ve 3 krocích</a>.</p>
`
};
