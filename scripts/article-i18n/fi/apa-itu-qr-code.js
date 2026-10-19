// apa-itu-qr-code
module.exports = {
  title: "Mikä on QR Code ja miten se toimii?",
  desc: "QR Code voi sisältää linkin, tekstiä ja jopa WiFi-tiedot, ja se on luettavissa, vaikka se olisi osittain vaurioitunut. Näin se toimii ja nämä ovat sen edut.",
  tags: ["Perusteet", "QR Code"],
  coverCaption: "QR Coden voi lukea suoraan puhelimen kameralla.",
  inlineCaption: "Jokainen QR Code koostuu pienistä mustista ja valkoisista ruuduista.",
  faq: [
    ["Voiko QR Code vanhentua?", "Staattinen QR Code ei vanhene koskaan, koska tiedot on upotettu suoraan kuvaan. Dynaaminen QR Code voi lakata toimimasta, jos linkkipalvelun tarjoaja lopettaa toimintansa tai tilaus päättyy."],
    ["Kuinka paljon tietoa QR Codeen voi tallentaa?", "QR Coden suurin versio voi tallentaa jopa 7 089 numeroa tai noin 2 953 tavua. Mitä vähemmän tietoa, sitä helpompi QR Code on lukea."],
    ["Onko QR Code luettavissa, jos se on osittain vaurioitunut?", "Kyllä. Virheenkorjauksen ansiosta QR Code on luettavissa, vaikka noin 7–30 % siitä olisi vaurioitunut, riippuen käytetystä korjaustasosta L, M, Q tai H."]
  ],
  body: `
<p>QR Code (Quick Response Code) on neliön muotoinen 2D-viivakoodi, joka koostuu pienistä mustista ja valkoisista ruuduista. Toisin kuin viivakoodi, johon mahtuu vain parikymmentä numeroa, QR Code voi sisältää verkkosivun linkin, pitkän tekstin, puhelinnumeron, yhteystiedot ja jopa WiFi-verkon tiedot.</p>
<p>QR Coden kehitti vuonna 1994 japanilainen Denso Wave -yhtiö ajoneuvojen osien seurantaan tehtaalla. Nykyään QR Codea käytetään kaikkialla digitaalisista maksuista ravintoloiden ruokalistoihin, koska sen voi lukea suoraan puhelimen kameralla.</p>

<h2>QR Coden osat</h2>
<ul>
  <li><strong>Kolme suurta neliötä kulmissa</strong> (finder pattern): auttavat kameraa löytämään QR Coden ja tunnistamaan sen suunnan, joten se on luettavissa vinossakin tai ylösalaisin.</li>
  <li><strong>Kohdistuskuvio</strong> (alignment pattern): pieni neliö, joka auttaa lukemaan taittuneen tai vinosta kulmasta nähdyn QR Coden.</li>
  <li><strong>Data-alue</strong>: pienet ruudut, jotka sisältävät tallentamasi tiedot.</li>
  <li><strong>Hiljainen alue</strong> (quiet zone): tyhjä tila QR Coden ympärillä, jotta se erottuu helposti taustasta.</li>
</ul>

<h2>Kuinka paljon tietoa voi tallentaa?</h2>
<p>QR Codesta on 40 kokoversiota. Suurin versio voi tallentaa jopa 7 089 numeroa tai noin 2 953 tavua tietoa. Käytännössä mitä vähemmän tietoa tallennetaan, sitä suurempia ruudut ovat ja sitä helpompi QR Code on lukea. Siksi lyhyt linkki on parempi kuin hyvin pitkä.</p>

<h2>Luettavissa vaurioituneenakin</h2>
<p>QR Code käyttää virheenkorjausta (error correction). Tasoja on neljä:</p>
<ul>
  <li><strong>L</strong>: tiedot voidaan palauttaa, jos noin 7 % QR Codesta on vaurioitunut.</li>
  <li><strong>M</strong>: noin 15 %. Tämä on yleinen ja tasapainoinen valinta.</li>
  <li><strong>Q</strong>: noin 25 %.</li>
  <li><strong>H</strong>: noin 30 %, sopii QR Codelle, johon lisätään logo tai joka tulostetaan helposti likaantuvaan paikkaan.</li>
</ul>
<p>Mitä korkeampi korjaustaso, sitä enemmän ruutuja tarvitaan, joten QR Coden kuvio näyttää tiheämmältä.</p>

<h2>Mitä QR Codeen voi tallentaa?</h2>
<ul>
  <li>Linkin verkkosivulle, verkkokauppaan tai lomakkeeseen.</li>
  <li>WiFi-tiedot, jotta vieraat voivat muodostaa yhteyden kirjoittamatta salasanaa. Katso opas <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitaalisen käyntikortin (vCard), sähköpostin, tekstiviestin ja WhatsApp-keskustelun.</li>
  <li>Sijainnin kartalla ja tapahtuman aikataulun.</li>
</ul>

<h2>Staattinen ja dynaaminen QR Code</h2>
<p>Suoraan tiedoista luotua QR Codea kutsutaan <strong>staattiseksi QR Codeksi</strong>: sen sisältö on upotettu kuvaan eikä sitä voi muuttaa, mutta se ei myöskään koskaan vanhene. <strong>Dynaaminen</strong> QR Code sisältää jonkin palvelun lyhytlinkin, joka ohjaa eteenpäin haluamaasi kohteeseen; kohteen voi vaihtaa, mutta QR Code lakkaa toimimasta, jos palvelu lopettaa. Useimpiin tarpeisiin staattinen QR Code riittää, ja pitkällä aikavälillä se on turvallisempi.</p>

<p>Haluatko kokeilla? Luo <a href="/?type=qrcode">ilmainen QR Code</a> nyt tai lue, <a href="/artikel/cara-membuat-qr-code-gratis">miten QR Code luodaan 3 vaiheessa</a>.</p>
`
};
