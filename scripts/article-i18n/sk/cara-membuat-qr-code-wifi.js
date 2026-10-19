// cara-membuat-qr-code-wifi
module.exports = {
  title: "Ako vytvoriť QR Code pre WiFi, aby hostia nemuseli písať heslo",
  desc: "Hosťom stačí naskenovať QR Code a sú pripojení k WiFi. Ideálne pre kaviarne, kancelárie, ubytovanie aj domácnosti. Takto ho vytvoríte a umiestnite.",
  tags: ["Návody", "QR Code"],
  coverCaption: "Údaje o WiFi z routera sa dajú uložiť do jediného QR Code.",
  inlineCaption: "Hostia kaviarne sa môžu pripojiť okamžite, bez písania hesla.",
  faq: [
    ["Dokážu QR Code pre WiFi naskenovať všetky telefóny?", "Vstavaný fotoaparát iPhonu s iOS 11 a novším a väčšiny telefónov s Androidom 10 a novším ho prečíta priamo. Staršie telefóny môžu vyžadovať aplikáciu na skenovanie QR."],
    ["Je QR Code pre WiFi bezpečný?", "Ktokoľvek, kto QR Code naskenuje, sa môže pripojiť k vašej WiFi. Preto používajte sieť pre hostí a QR Code súkromnej siete neumiestňujte na verejných miestach."],
    ["Čo robiť, keď zmením heslo k WiFi?", "Vytvorte a znova vytlačte QR Code pre WiFi, pretože starý QR Code stále obsahuje pôvodné heslo."]
  ],
  body: `
<p>Hláskovať hosťom dlhé heslo k WiFi býva zdĺhavé, najmä keď obsahuje veľké písmená, číslice a symboly. S <strong>QR Code pre WiFi</strong> stačí hosťom namieriť fotoaparát telefónu na QR Code a sú rovno pripojení.</p>

<h2>Ako QR Code pre WiFi funguje</h2>
<p>QR Code pre WiFi uchováva názov siete (SSID), typ zabezpečenia a heslo v špeciálnom formáte, ktorý telefóny rozpoznajú, napríklad <code>WIFI:T:WPA;S:NazovSiete;P:Heslo;;</code>. Vstavaný fotoaparát iPhonu (iOS 11 a novší) a väčšiny telefónov s Androidom (Android 10 a novší) ho prečíta priamo, bez ďalšej aplikácie.</p>

<h2>Postup vytvorenia</h2>
<ol>
  <li>Otvorte <a href="/?type=qrcode">generátor QR Code</a> a v časti Dáta zvoľte kartu <strong>WiFi</strong>.</li>
  <li>Zadajte <strong>názov siete</strong> presne tak, ako sa zobrazuje v zozname WiFi, vrátane veľkých a malých písmen.</li>
  <li>Zadajte <strong>heslo</strong> a zvoľte typ zabezpečenia. Väčšina domácich a kancelárskych routerov používa WPA/WPA2/WPA3.</li>
  <li>Začiarknite <strong>Skrytá sieť</strong>, ak sa názov vašej WiFi v zozname nezobrazuje.</li>
  <li>Pridajte rámik s nápisom, napríklad „SCAN WIFI“, aby hostia vedeli, na čo slúži, a stiahnite PNG.</li>
</ol>

<h2>Kam ho umiestniť?</h2>
<ul>
  <li>Malá kartička na stole v kaviarni alebo reštaurácii.</li>
  <li>Stena obývačky, recepcie alebo zasadačky v kancelárii.</li>
  <li>Izba v ubytovaní, nalepený pri dverách alebo pri televízore.</li>
  <li>Spodná strana routera doma, aby rodina mohla ľahko pripojiť nové zariadenia.</li>
</ul>

<h2>Bezpečnostné tipy</h2>
<ul>
  <li>Používajte <strong>sieť pre hostí</strong> (guest network), ak ju váš router podporuje, aby sa hostia nepripájali do rovnakej siete ako kancelárske počítače.</li>
  <li>Ak heslo k WiFi zmeníte, vytvorte a znova vytlačte QR Code, pretože starý QR Code bude obsahovať pôvodné heslo.</li>
  <li>Neumiestňujte QR Code pre WiFi súkromnej siete na verejných miestach, kde si ho môže ktokoľvek odfotiť.</li>
</ul>

<h2>Keď sa cez QR Code nedá pripojiť</h2>
<p>Znova skontrolujte pravopis názvu siete a hesla, pretože jediné chybné písmeno spôsobí, že sa telefón nepripojí. Uistite sa tiež, že zvolený typ zabezpečenia zodpovedá nastaveniu routera. Ďalšie problémy so skenovaním rieši článok <a href="/artikel/barcode-tidak-bisa-dipindai">príčiny, prečo sa čiarový kód nedá naskenovať</a>.</p>
`
};
