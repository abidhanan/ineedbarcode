// apa-itu-qr-code
module.exports = {
  title: "Kas ir QR Code un kā tas darbojas?",
  desc: "QR Code var glabāt saiti, tekstu un pat WiFi datus, un tas ir nolasāms pat tad, ja daļēji bojāts. Lūk, kā tas darbojas un kādas ir tā priekšrocības.",
  tags: ["Pamati", "QR Code"],
  coverCaption: "QR Code var noskenēt tieši ar tālruņa kameru.",
  inlineCaption: "Katrs QR Code sastāv no maziem melniem un baltiem kvadrātiņiem.",
  faq: [
    ["Vai QR Code var beigties derīguma termiņš?", "Statiskajam QR Code derīgums nekad nebeidzas, jo dati ir iestrādāti tieši attēlā. Dinamiskais QR Code var pārstāt darboties, ja saites pakalpojuma sniedzējs beidz darbību vai beidzas abonements."],
    ["Cik daudz datu var saglabāt QR Code?", "Lielākā QR Code versija var glabāt līdz 7 089 cipariem jeb aptuveni 2 953 baitus. Tomēr, jo mazāk datu, jo vieglāk QR Code noskenēt."],
    ["Vai QR Code ir nolasāms, ja tas ir daļēji bojāts?", "Jā. Pateicoties kļūdu labošanai, QR Code ir nolasāms pat tad, ja bojāti aptuveni 7–30 % tā laukuma, atkarībā no izmantotā labošanas līmeņa L, M, Q vai H."]
  ],
  body: `
<p>QR Code (Quick Response Code) ir kvadrātveida 2D svītrkods, kas sastāv no maziem melniem un baltiem kvadrātiņiem. Atšķirībā no lineārā svītrkoda, kas glabā tikai pāris desmitu ciparu, QR Code var glabāt vietnes saiti, garu tekstu, tālruņa numuru, kontaktinformāciju un pat WiFi tīkla datus.</p>
<p>QR Code 1994. gadā izstrādāja Japānas uzņēmums Denso Wave, lai rūpnīcā izsekotu transportlīdzekļu detaļām. Mūsdienās QR Code izmanto visur – no digitālajiem maksājumiem līdz restorānu ēdienkartēm –, jo to var noskenēt tieši ar tālruņa kameru.</p>

<h2>QR Code daļas</h2>
<ul>
  <li><strong>Trīs lieli kvadrāti stūros</strong> (finder pattern): palīdz kamerai atrast QR Code un noteikt tā virzienu, tāpēc tas ir nolasāms pat tad, ja skenēts slīpi vai otrādi.</li>
  <li><strong>Līdzināšanas raksts</strong> (alignment pattern): mazs kvadrāts, kas palīdz nolasīt saliektu vai no leņķa redzamu QR Code.</li>
  <li><strong>Datu apgabals</strong>: mazi kvadrātiņi, kuros ir jūsu saglabātā informācija.</li>
  <li><strong>Klusā zona</strong> (quiet zone): tukša vieta ap QR Code, lai to būtu viegli atšķirt no fona.</li>
</ul>

<h2>Cik daudz datu var saglabāt?</h2>
<p>QR Code ir 40 izmēru versijas. Lielākā versija var glabāt līdz 7 089 cipariem jeb aptuveni 2 953 baitus datu. Praksē, jo mazāk datu tiek saglabāts, jo lielāki ir kvadrātiņi un jo vieglāk QR Code noskenēt. Tāpēc īsa saite ir labāka par ļoti garu.</p>

<h2>Nolasāms pat tad, ja bojāts</h2>
<p>QR Code izmanto kļūdu labošanu (error correction). Ir četri līmeņi:</p>
<ul>
  <li><strong>L</strong>: datus var atjaunot, ja bojāti aptuveni 7 % QR Code.</li>
  <li><strong>M</strong>: aptuveni 15 %. Tā ir izplatīta un līdzsvarota izvēle.</li>
  <li><strong>Q</strong>: aptuveni 25 %.</li>
  <li><strong>H</strong>: aptuveni 30 %, piemērots QR Code, kam tiks pievienots logotips vai kas tiks drukāts vietā, kur tas viegli var kļūt netīrs.</li>
</ul>
<p>Jo augstāks labošanas līmenis, jo vairāk kvadrātiņu vajadzīgs, tāpēc QR Code raksts izskatās blīvāks.</p>

<h2>Ko var saglabāt QR Code?</h2>
<ul>
  <li>Vietnes, interneta veikala vai veidlapas saiti.</li>
  <li>WiFi datus, lai viesi varētu pieslēgties, neievadot paroli. Skatiet ceļvedi <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitālu vizītkarti (vCard), e-pastu, SMS un WhatsApp sarunu.</li>
  <li>Atrašanās vietu kartē un pasākuma grafiku.</li>
</ul>

<h2>Statiskais un dinamiskais QR Code</h2>
<p>QR Code, kas izveidots tieši no datiem, sauc par <strong>statisko QR Code</strong>: tā saturs ir iestrādāts attēlā un to nevar mainīt, taču arī tā derīgums nekad nebeidzas. <strong>Dinamiskais</strong> QR Code satur kāda pakalpojuma īso saiti, kas pēc tam novirza uz jūsu mērķi; mērķi var nomainīt, bet QR Code pārstās darboties, ja šis pakalpojums beigs darbību. Lielākajai daļai vajadzību pietiek ar statisko QR Code, un ilgtermiņā tas ir drošāks.</p>

<p>Vēlaties izmēģināt? Izveidojiet <a href="/?type=qrcode">bezmaksas QR Code</a> tagad vai izlasiet, <a href="/artikel/cara-membuat-qr-code-gratis">kā izveidot QR Code 3 soļos</a>.</p>
`
};
