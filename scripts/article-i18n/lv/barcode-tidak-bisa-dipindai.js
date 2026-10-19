// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 iemesli, kāpēc svītrkodu nevar noskenēt, un kā to novērst",
  desc: "Svītrkodu vai QR Code neizdodas noskenēt? Pārbaudiet septiņus biežākos iemeslus – no krāsu kontrasta līdz izmēram – un uzziniet, kā tos novērst.",
  tags: ["Padomi", "Svītrkodi"],
  coverCaption: "Kontrasts un izmērs nosaka, vai QR Code ir viegli noskenēt.",
  inlineCaption: "Noliktavā svītrkods, ko neizdodas noskenēt, palēnina darbu.",
  faq: [
    ["Kāpēc QR Code var noskenēt ar vienu tālruni, bet ne ar citu?", "Kameru un skenēšanas lietotņu iespējas atšķiras. Pārāk mazs QR Code, QR Code ar zemu kontrastu vai apgrieztām krāsām ar dažiem tālruņiem biežāk netiek nolasīts. Pirms drukāšanas pārbaudiet to ar vairākiem tālruņiem."],
    ["Vai krāsainu svītrkodu var noskenēt?", "Jā, ja krāsa ir tumša uz gaiša fona. Izvairieties no sarkanas krāsas svītrkoda svītrām, jo daudzi kases skeneri izmanto sarkanu gaismu."],
    ["Kā pārbaudīt, vai svītrkods ir pareizs?", "Noskenējiet izdruku ar vairākiem tālruņiem vai skeneriem un pārliecinieties, ka nolasītie dati precīzi sakrīt ar jūsu ievadītajiem datiem."]
  ],
  body: `
<p>Nav nekā kaitinošāka par svītrkodu, kas jau izdrukāts simtiem lapu, bet izrādās, ka to nevar noskenēt. Labā ziņa ir tā, ka iemesls parasti ir vienkāršs un viegli novēršams. Lūk, septiņi biežākie iemesli.</p>

<h2>1. Pārāk zems krāsu kontrasts</h2>
<p>Skeneris nolasa tumšā un gaišā atšķirību. Gaiši pelēku svītrkodu uz balta fona vai tumši zilu uz melna ir grūti atšķirt. <strong>Risinājums:</strong> izmantojiet tumšu krāsu uz gaiša fona. Melns uz balta ir drošākā izvēle.</p>

<h2>2. Apgrieztas krāsas vai sarkana krāsa</h2>
<p>Gaišu svītrkodu uz tumša fona atbalsta ne visi skeneri. Turklāt daudzi kases skeneri izmanto sarkanu gaismu, tāpēc sarkanas svītras izskatās tāpat kā balts fons. <strong>Risinājums:</strong> izvairieties no sarkanas krāsas svītrkoda svītrām vai moduļiem un neapgrieziet krāsas.</p>

<h2>3. Pārāk mazs izmērs</h2>
<p>Kamerai vajag pietiekami daudz pikseļu, lai atpazītu katru moduli. <strong>Risinājums:</strong> palieliniet svītrkodu. QR Code, ko skenē no tuva attāluma, izmantojiet vismaz aptuveni 2 × 2 cm. Skatiet <a href="/artikel/ukuran-barcode-untuk-dicetak">drukas izmēru ceļvedi</a>.</p>

<h2>4. Nav klusās zonas</h2>
<p>Svītrkodu, kas pieskaras attēlam, tekstam vai papīra malai, ir grūti atdalīt no apkārtnes. <strong>Risinājums:</strong> atstājiet tukšu vietu ap svītrkodu, īpaši lineārā svītrkoda kreisajā un labajā pusē.</p>

<h2>5. Izplūdis vai izkropļots attēls</h2>
<p>Svītrkods, kas palielināts no maza attēla, saglabāts kā zemas kvalitātes JPG vai izstiepts neproporcionāli, zaudē savu formu. <strong>Risinājums:</strong> lejupielādējiet ar lielāku moduļa izmēru PNG formātā un vienmēr mainiet izmēru proporcionāli.</p>

<h2>6. Nepareizi vai veidam neatbilstoši dati</h2>
<p>Katram svītrkoda veidam ir savi noteikumi. Piemēram, EAN-13 pieņem tikai 12 vai 13 ciparus ar pareizu kontrolciparu. Arī saite ar drukas kļūdu liek QR Code nolasīties, bet neko neatvērt. <strong>Risinājums:</strong> pirms drukāšanas pārbaudiet datus. <a href="/">I Need Barcode</a> ģenerators parādīs ziņojumu, ja dati neatbilst izvēlētā svītrkoda veida noteikumiem.</p>

<h2>7. Virsma un apgaismojums</h2>
<p>Spīdīgi materiāli, caurspīdīga plastmasa, locījumi un izliektas virsmas var atstarot gaismu vai mainīt svītrkoda formu. <strong>Risinājums:</strong> drukājiet uz plakanas, nespīdīgas virsmas un pārbaudiet reālos apgaismojuma apstākļos.</p>

<h2>Par QR Code ar dizainu</h2>
<p>QR Code ar formu, krāsām vai rāmi joprojām var noskenēt, ja trīs marķieri tā stūros ir neskarti un kontrasts ir pietiekams. Vairāk lasiet rakstā <a href="/artikel/desain-qr-code-kreatif">radošs QR Code dizains, kas joprojām ir nolasāms</a>.</p>
<p>Labākais ieradums: pirms drukāšanas lielos daudzumos <strong>vienmēr pārbaudiet vienu izdruku</strong> ar vairākiem tālruņiem un skeneriem.</p>
`
};
