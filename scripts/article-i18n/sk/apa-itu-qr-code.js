// apa-itu-qr-code
module.exports = {
  title: "Čo je QR Code a ako funguje?",
  desc: "QR Code dokáže uchovať odkaz, text aj údaje o WiFi a zostane čitateľný, aj keď je čiastočne poškodený. Takto funguje a v tom sú jeho výhody.",
  tags: ["Základy", "QR Code"],
  coverCaption: "QR Code sa dá naskenovať priamo fotoaparátom telefónu.",
  inlineCaption: "Každý QR Code sa skladá z malých čiernych a bielych štvorčekov.",
  faq: [
    ["Môže platnosť QR Code vypršať?", "Statický QR Code nikdy nevyprší, pretože jeho dáta sú vložené priamo v obrázku. Dynamický QR Code môže prestať fungovať, ak služba, ktorá poskytuje jeho odkaz, skončí alebo vyprší predplatné."],
    ["Koľko dát dokáže QR Code uchovať?", "Najväčšia verzia QR Code dokáže uchovať až 7 089 číslic alebo približne 2 953 bajtov. Čím menej dát však obsahuje, tým ľahšie sa QR Code skenuje."],
    ["Je QR Code čitateľný, aj keď je čiastočne poškodený?", "Áno. Vďaka oprave chýb zostane QR Code čitateľný, aj keď je poškodených približne 7 % až 30 % jeho plochy, podľa použitej úrovne opravy L, M, Q alebo H."]
  ],
  body: `
<p>QR Code (Quick Response Code) je štvorcový 2D čiarový kód zložený z malých čiernych a bielych štvorčekov. Na rozdiel od klasického čiarového kódu, ktorý uchová len niečo vyše desať číslic, dokáže QR Code uchovať odkaz na web, dlhý text, telefónne číslo, kontakt alebo aj údaje o sieti WiFi.</p>
<p>QR Code vyvinula v roku 1994 japonská spoločnosť Denso Wave na sledovanie autodielov v továrni. Dnes sa QR Code používa všade, od digitálnych platieb po menu v reštauráciách, pretože sa dá naskenovať priamo fotoaparátom telefónu.</p>

<h2>Časti QR Code</h2>
<ul>
  <li><strong>Tri veľké štvorce v rohoch</strong> (finder pattern): pomáhajú fotoaparátu QR Code nájsť a určiť jeho orientáciu, takže zostane čitateľný, aj keď ho skenujete šikmo alebo hore nohami.</li>
  <li><strong>Zarovnávací vzor</strong> (alignment pattern): malý štvorec, ktorý pomáha prečítať QR Code, ktorý je zakrivený alebo snímaný pod uhlom.</li>
  <li><strong>Dátová oblasť</strong>: malé štvorčeky obsahujúce informácie, ktoré uložíte.</li>
  <li><strong>Pokojná zóna</strong> (quiet zone): prázdny priestor okolo QR Code, vďaka ktorému sa ľahko oddelí od pozadia.</li>
</ul>

<h2>Koľko dát dokáže uchovať?</h2>
<p>QR Code má 40 veľkostných verzií. Najväčšia verzia dokáže uchovať až 7 089 číslic alebo približne 2 953 bajtov dát. V praxi platí, že čím menej dát uložíte, tým väčšie sú štvorčeky a tým ľahšie sa QR Code skenuje. Preto je krátky odkaz lepší než veľmi dlhý.</p>

<h2>Čitateľný aj pri poškodení</h2>
<p>QR Code využíva opravu chýb (error correction). Existujú štyri úrovne:</p>
<ul>
  <li><strong>L</strong>: dáta sa dajú obnoviť, aj keď je poškodených približne 7 % QR Code.</li>
  <li><strong>M</strong>: približne 15 %. Ide o bežnú a vyváženú voľbu.</li>
  <li><strong>Q</strong>: približne 25 %.</li>
  <li><strong>H</strong>: približne 30 %, vhodné pre QR Code, do ktorého vložíte logo, alebo ktorý bude vytlačený na mieste, kde sa ľahko zašpiní.</li>
</ul>
<p>Čím vyššia je úroveň opravy, tým viac štvorčekov je potrebných, takže vzor QR Code vyzerá hustejší.</p>

<h2>Čo všetko sa dá do QR Code uložiť?</h2>
<ul>
  <li>Odkaz na web, e-shop alebo formulár.</li>
  <li>Údaje o WiFi, aby sa hostia mohli pripojiť bez písania hesla. Pozrite si návod <a href="/artikel/cara-membuat-qr-code-wifi">QR Code pre WiFi</a>.</li>
  <li>Digitálnu vizitku (vCard), e-mail, SMS a chat na WhatsAppe.</li>
  <li>Polohu na mape a termín podujatia.</li>
</ul>

<h2>Statický a dynamický QR Code</h2>
<p>QR Code vytvorený priamo z dát sa nazýva <strong>statický QR Code</strong>: jeho obsah je vložený v obrázku a nedá sa zmeniť, no zároveň nikdy nevyprší. <strong>Dynamický</strong> QR Code obsahuje krátky odkaz určitej služby, ktorý potom presmeruje na váš cieľ; cieľ sa dá zmeniť, ale QR Code prestane fungovať, ak služba skončí. Pre väčšinu potrieb statický QR Code plne postačuje a z dlhodobého hľadiska je bezpečnejší.</p>

<p>Chcete to vyskúšať? Vytvorte si <a href="/?type=qrcode">QR Code zadarmo</a> hneď teraz, alebo si prečítajte, <a href="/artikel/cara-membuat-qr-code-gratis">ako vytvoriť QR Code v 3 krokoch</a>.</p>
`
};
