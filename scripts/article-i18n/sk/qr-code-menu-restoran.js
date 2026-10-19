// qr-code-menu-restoran
module.exports = {
  title: "QR Code pre menu reštaurácie: Kompletný návod",
  desc: "Digitálne menu cez QR Code uľahčuje život zákazníkom a šetrí náklady na tlač. Takto ho vytvoríte, pripravíte menu a umiestnite ho na stoly.",
  tags: ["Podnikanie", "QR Code"],
  coverCaption: "QR Code na stole privedie zákazníkov priamo k digitálnemu menu.",
  inlineCaption: "Umiestnite QR Code tam, kam hosť ľahko dosiahne zo stoličky.",
  faq: [
    ["Čo je na digitálne menu lepšie: PDF, alebo webová stránka?", "Webová stránka sa na telefóne zvyčajne číta pohodlnejšie a otvára sa rýchlejšie. PDF sa dá použiť, ak je malé a text je na displeji dostatočne veľký."],
    ["Aký veľký by mal byť QR Code s menu na stole?", "Na naskenovanie zo stoličky stačí približne 3 až 5 cm. Použite materiál odolný voči obliatiu, ktorý sa príliš neleskne."],
    ["Treba QR Code znova vytlačiť, keď sa menu zmení?", "Nie, ak odkaz zostane rovnaký. Stačí aktualizovať obsah stránky alebo súboru s menu, na ktorý QR Code odkazuje."]
  ],
  body: `
<p>Digitálne menu cez QR Code je dnes v kaviarňach a reštauráciách bežnou vecou. Zákazníkom stačí naskenovať QR Code na stole a uvidia zoznam jedál, ceny aj fotografie. Majiteľom podnikov tento spôsob šetrí náklady na tlač a uľahčuje zmeny cien či ponuky.</p>

<h2>Výhody menu s QR Code</h2>
<ul>
  <li><strong>Jednoduchá aktualizácia</strong>: meňte ceny alebo pridávajte jedlá bez novej tlače jedálneho lístka.</li>
  <li><strong>Úspora nákladov</strong>: stačí vytlačiť malý QR Code pre každý stôl.</li>
  <li><strong>Viac informácií</strong>: zobrazte fotografie, popisy a označenia ako pikantné alebo vegetariánske.</li>
  <li><strong>Podpora online objednávok</strong>: nasmerujte zákazníkov na objednávkový formulár alebo WhatsApp.</li>
</ul>

<h2>Krok 1: Pripravte online menu</h2>
<p>QR Code obsahuje iba odkaz, preto potrebujete menu, ktoré sa dá otvoriť na internete. Možnosťou je napríklad stránka na vlastnom webe, súbor PDF vo verejne zdieľanom online úložisku alebo stránka katalógu na objednávkovej platforme. Uistite sa, že sa menu na displeji telefónu pohodlne číta: dostatočne veľké písmo, nie príliš ťažké fotografie a jasné ceny.</p>

<h2>Krok 2: Vytvorte QR Code</h2>
<ol>
  <li>Skopírujte odkaz na svoje menu.</li>
  <li>Otvorte <a href="/?type=qrcode">generátor QR Code</a>, zvoľte kartu <strong>URL</strong> a vložte odkaz.</li>
  <li>V časti Dizajn pridajte rámik s nápisom „MENU“ alebo „NASKENUJTE A POZRITE SI MENU“.</li>
  <li>Prispôsobte farby identite reštaurácie, ale stále používajte tmavú farbu na svetlom pozadí.</li>
  <li>Stiahnite PNG s dostatočne veľkou veľkosťou modulu na tlač.</li>
</ol>
<p>Používajte odkaz, ktorý sa nebude meniť. Ak menu presuniete na inú adresu, už vytlačený QR Code sa nedá aktualizovať. Vysvetlenie nájdete v článku <a href="/artikel/apa-itu-qr-code">čo je QR Code</a>.</p>

<h2>Krok 3: Vytlačte a umiestnite</h2>
<ul>
  <li>Tlačte vo veľkosti aspoň približne 3–5 cm, aby sa QR Code dal ľahko naskenovať zo stoličky.</li>
  <li>Použite materiál odolný voči obliatiu, napríklad vinylovú nálepku alebo laminovanú kartičku bez prílišného lesku.</li>
  <li>Umiestnite ho na ľahko dostupné miesto, napríklad do akrylového stojančeka v strede stola.</li>
  <li>Ak zákazníci objednávajú cez chat, pridajte vedľa QR Code číslo stola.</li>
</ul>

<h2>Nezabudnite na zákazníkov bez telefónu</h2>
<p>Majte pripravené jedno alebo dve tlačené menu pre zákazníkov, ktorí nemajú pri sebe telefón, majú vybitú batériu alebo radšej čítajú fyzické menu.</p>
<p>Pre hostí môžete vytvoriť aj <a href="/artikel/cara-membuat-qr-code-wifi">QR Code pre WiFi</a> a umiestniť ho vedľa QR Code s menu.</p>
`
};
