// qr-code-menu-restoran
module.exports = {
  title: "QR Code ravintolan ruokalistaan: kattava opas",
  desc: "QR Coden kautta avautuva digitaalinen ruokalista helpottaa asiakkaiden elämää ja säästää painokuluja. Näin luot sen, valmistelet ruokalistan ja sijoitat koodin pöytään.",
  tags: ["Liiketoiminta", "QR Code"],
  coverCaption: "Pöydän QR Code vie asiakkaat suoraan digitaaliseen ruokalistaan.",
  inlineCaption: "Sijoita QR Code paikkaan, johon tuolilta ylettyy helposti.",
  faq: [
    ["Kumpi on parempi digitaaliselle ruokalistalle: PDF vai verkkosivu?", "Verkkosivua on yleensä mukavampi lukea puhelimella, ja se avautuu nopeammin. PDF:ää voi käyttää, jos tiedosto on pieni ja teksti riittävän suurta näytöllä."],
    ["Minkä kokoinen pöydän ruokalista-QR Coden pitäisi olla?", "Noin 3–5 cm riittää lukemiseen tuolilta. Käytä materiaalia, joka kestää roiskeita eikä ole liian kiiltävä."],
    ["Pitääkö QR Code tulostaa uudelleen, kun ruokalista muuttuu?", "Ei, jos linkki pysyy samana. Riittää, että päivität sen sivun tai ruokalistatiedoston sisällön, johon QR Code ohjaa."]
  ],
  body: `
<p>QR Coden kautta avautuva digitaalinen ruokalista on nykyään tavallinen näky kahviloissa ja ravintoloissa. Asiakkaiden riittää lukea pöydällä oleva QR Code nähdäkseen ruokalajit, hinnat ja kuvat. Yrittäjälle tämä säästää painokuluja ja helpottaa hintojen tai ruokalistan muuttamista.</p>

<h2>QR Code -ruokalistan edut</h2>
<ul>
  <li><strong>Helppo päivittää</strong>: muuta hintoja tai lisää ruokalajeja painattamatta ruokalistaa uudelleen.</li>
  <li><strong>Edullinen</strong>: riittää tulostaa pieni QR Code jokaiseen pöytään.</li>
  <li><strong>Informatiivisempi</strong>: näytä kuvia, kuvauksia ja merkintöjä, kuten tulinen tai kasvis.</li>
  <li><strong>Tukee verkkotilauksia</strong>: ohjaa asiakkaat tilauslomakkeelle tai WhatsAppiin.</li>
</ul>

<h2>Vaihe 1: Valmistele ruokalista verkkoon</h2>
<p>QR Code sisältää vain linkin, joten tarvitset ruokalistan, joka avautuu internetissä. Vaihtoehtoja ovat esimerkiksi sivu omalla verkkosivustollasi, julkisesti jaettu PDF-tiedosto verkkotallennuspalvelussa tai luettelosivu tilausalustalla. Varmista, että ruokalistaa on mukava lukea puhelimen näytöltä: teksti on riittävän suurta, kuvat eivät ole liian raskaita ja hinnat ovat selkeät.</p>

<h2>Vaihe 2: Luo QR Code</h2>
<ol>
  <li>Kopioi ruokalistasi linkki.</li>
  <li>Avaa <a href="/?type=qrcode">QR Code -generaattori</a>, valitse välilehti <strong>URL</strong> ja liitä linkki.</li>
  <li>Lisää kohdassa ”Muotoilu” kehys, jossa on teksti ”RUOKALISTA” tai ”SKANNAA JA NÄE RUOKALISTA”.</li>
  <li>Sovita värit ravintolan ilmeeseen, mutta käytä silti tummaa väriä vaalealla taustalla.</li>
  <li>Lataa PNG riittävän suurella moduulikoolla tulostusta varten.</li>
</ol>
<p>Käytä linkkiä, joka ei muutu. Jos ruokalista siirretään toiseen osoitteeseen, jo tulostettua QR Codea ei voi päivittää. Selitys löytyy artikkelista <a href="/artikel/apa-itu-qr-code">mikä on QR Code</a>.</p>

<h2>Vaihe 3: Tulosta ja sijoita</h2>
<ul>
  <li>Tulosta vähintään noin 3–5 cm:n kokoisena, jotta koodi on helppo lukea tuolilta.</li>
  <li>Käytä roiskeita kestävää materiaalia, kuten vinyylitarraa tai laminoitua korttia ilman liiallista kiiltoa.</li>
  <li>Sijoita helposti ulottuville, esimerkiksi akryyliseen telineeseen pöydän keskelle.</li>
  <li>Lisää pöydän numero QR Coden viereen, jos asiakkaat tilaavat chatin kautta.</li>
</ul>

<h2>Älä unohda asiakkaita, joilla ei ole puhelinta</h2>
<p>Pidä saatavilla yksi tai kaksi painettua ruokalistaa asiakkaille, joilla ei ole puhelinta mukana, joiden akku on loppunut tai jotka lukevat mieluummin paperista ruokalistaa.</p>
<p>Voit myös luoda vieraille <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Coden</a> ja sijoittaa sen ruokalistan QR Coden viereen.</p>
`
};
