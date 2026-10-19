// qr-code-menu-restoran
module.exports = {
  title: "QR Code restorano meniu: išsamus gidas",
  desc: "Skaitmeninis meniu per QR Code palengvina klientų gyvenimą ir sutaupo spausdinimo išlaidų. Štai kaip jį sukurti, paruošti meniu ir pastatyti ant stalo.",
  tags: ["Verslas", "QR Code"],
  coverCaption: "QR Code ant stalo nukreipia klientus tiesiai į skaitmeninį meniu.",
  inlineCaption: "Padėkite QR Code ten, kur jį lengva pasiekti nuo kėdės.",
  faq: [
    ["Ką geriau naudoti skaitmeniniam meniu: PDF ar tinklalapį?", "Tinklalapį paprastai patogiau skaityti telefone ir jis greičiau atsidaro. PDF galima naudoti, jei failas nedidelis, o tekstas ekrane pakankamai didelis."],
    ["Kokio dydžio turėtų būti meniu QR Code ant stalo?", "Maždaug 3–5 cm pakanka, kad būtų galima nuskaityti nuo kėdės. Naudokite išsiliejimams atsparią ir ne per daug blizgią medžiagą."],
    ["Ar pasikeitus meniu reikia iš naujo spausdinti QR Code?", "Ne, jei nuoroda išlieka ta pati. Pakanka atnaujinti puslapio ar meniu failo, į kurį nukreipia QR Code, turinį."]
  ],
  body: `
<p>Skaitmeninis meniu per QR Code šiandien yra įprastas dalykas kavinėse ir restoranuose. Klientams pakanka nuskaityti QR Code ant stalo, kad pamatytų patiekalų sąrašą, kainas ir nuotraukas. Verslo savininkams tai padeda sutaupyti spausdinimo išlaidų ir lengviau keisti kainas ar meniu.</p>

<h2>QR Code meniu privalumai</h2>
<ul>
  <li><strong>Lengva atnaujinti</strong>: pakeiskite kainas ar pridėkite patiekalų neperspausdindami meniu knygelės.</li>
  <li><strong>Taupoma</strong>: pakanka atspausdinti nedidelį QR Code kiekvienam stalui.</li>
  <li><strong>Daugiau informacijos</strong>: rodykite nuotraukas, aprašymus ir žymas, pavyzdžiui, „aštru“ ar „vegetariška“.</li>
  <li><strong>Užsakymai internetu</strong>: nukreipkite klientus į užsakymo formą ar WhatsApp.</li>
</ul>

<h2>1 žingsnis: paruoškite meniu internete</h2>
<p>QR Code turi tik nuorodą, todėl jums reikia meniu, kurį galima atidaryti internete. Galimi variantai: puslapis jūsų svetainėje, PDF failas viešai bendrinamoje internetinėje saugykloje arba katalogo puslapis užsakymų platformoje. Įsitikinkite, kad meniu patogu skaityti telefono ekrane: tekstas pakankamai didelis, nuotraukos ne per sunkios, o kainos aiškios.</p>

<h2>2 žingsnis: sukurkite QR Code</h2>
<ol>
  <li>Nukopijuokite savo meniu nuorodą.</li>
  <li>Atidarykite <a href="/?type=qrcode">QR Code generatorių</a>, pasirinkite skirtuką <strong>URL</strong> ir įklijuokite nuorodą.</li>
  <li>Skiltyje „Dizainas“ pridėkite rėmelį su užrašu „MENIU“ arba „NUSKAITYKITE MENIU“.</li>
  <li>Pritaikykite spalvas prie restorano identiteto, bet vis tiek naudokite tamsią spalvą ant šviesaus fono.</li>
  <li>Atsisiųskite PNG pakankamai dideliu modulio dydžiu spausdinimui.</li>
</ol>
<p>Naudokite nuorodą, kuri nesikeis. Jei meniu bus perkeltas kitu adresu, jau atspausdinto QR Code atnaujinti nepavyks. Paaiškinimą rasite straipsnyje <a href="/artikel/apa-itu-qr-code">kas yra QR Code</a>.</p>

<h2>3 žingsnis: atspausdinkite ir pastatykite</h2>
<ul>
  <li>Spausdinkite bent maždaug 3–5 cm dydžio, kad būtų lengva nuskaityti nuo kėdės.</li>
  <li>Naudokite išsiliejimams atsparią medžiagą, pavyzdžiui, vinilinį lipduką ar laminuotą kortelę be per didelio blizgesio.</li>
  <li>Padėkite lengvai pasiekiamoje vietoje, pavyzdžiui, akriliniame stovelyje stalo viduryje.</li>
  <li>Jei klientai užsako per pokalbį, šalia QR Code nurodykite stalo numerį.</li>
</ul>

<h2>Nepamirškite klientų be telefono</h2>
<p>Turėkite vieną ar du atspausdintus meniu klientams, kurie neturi telefono, kurių telefono baterija išsikrovusi arba kuriems patogiau skaityti popierinį meniu.</p>
<p>Taip pat galite sukurti <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> svečiams ir padėti jį šalia meniu QR Code.</p>
`
};
