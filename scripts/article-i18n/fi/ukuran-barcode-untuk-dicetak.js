// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Oikea viivakoodin koko ja resoluutio tulostukseen",
  desc: "Liian pientä tai epätarkkaa viivakoodia on vaikea lukea. Opi vähimmäiskoko, lukuetäisyyden sääntö ja tulostukseen sopiva kuvan resoluutio.",
  tags: ["Oppaat", "Tulostus"],
  coverCaption: "Tarratulostin tulostaa viivakoodeja paketteihin ja pakkauksiin.",
  inlineCaption: "Tarran koko määrää, kuinka suuren viivakoodin voi tulostaa.",
  faq: [
    ["Mikä on QR Coden vähimmäiskoko tulostettaessa?", "Läheltä luettaessa noin 2 × 2 cm on turvallinen raja. Pidemmillä etäisyyksillä käytä lukuetäisyyden ja QR Coden leveyden suhdetta noin 10 : 1."],
    ["Mikä on EAN-13-viivakoodin vakiokoko?", "EAN-13:n vakiokoko on noin 37,3 × 25,9 mm. Sitä saa pienentää noin 80 %:iin tai suurentaa 200 %:iin."],
    ["Miksi viivakoodi on tulostettuna epätarkka?", "Yleensä siksi, että pieni kuva on suurennettu tai tallennettu heikkolaatuisena JPG-tiedostona. Lataa suuremmalla moduulikoolla PNG-muodossa."]
  ],
  body: `
<p>Näytöllä hyvältä näyttävä viivakoodi ei välttämättä ole luettavissa tulostettuna. Liian pieni koko, matala resoluutio tai leviävä muste voi estää lukijaa lukemasta koodia. Tässä oppaassa kerrotaan, miten tulosteesi pysyvät luettavina.</p>

<h2>Tutustu moduuliin</h2>
<p><strong>Moduuli</strong> on viivakoodin pienin yksikkö, eli yksi QR Coden pieni ruutu tai viivakoodin kapein viiva. Moduulin koko ratkaisee, kuinka helposti viivakoodi on luettavissa. <a href="/">I Need Barcodessa</a> moduulikoon voi säätää kohdassa ”Asetukset”: mitä suurempi arvo, sitä suurempi ja terävämpi on ladattava kuva.</p>

<h2>QR Coden vähimmäiskoko</h2>
<ul>
  <li>Läheltä luettaessa (esimerkiksi käyntikortti tai tuote-etiketti) noin <strong>2 × 2 cm</strong> on turvallinen raja.</li>
  <li>Käytä noin <strong>10 : 1</strong> -suhteen sääntöä: lukuetäisyys on suunnilleen kymmenkertainen QR Coden leveyteen nähden. Kahden metrin etäisyydeltä luettavassa julisteessa QR Coden on oltava vähintään noin 20 cm.</li>
  <li>Mitä enemmän tietoa tallennetaan, sitä tiheämpi kuvio on, joten tarvitaan suurempi koko.</li>
</ul>

<h2>Tuoteviivakoodin koko</h2>
<p><a href="/?type=ean13">EAN-13</a>:n vakiokoko on noin 37,3 × 25,9 mm (100 %). Sitä saa pienentää noin 80 %:iin tai suurentaa 200 %:iin. Vältä lyhentämästä viivojen korkeutta liikaa, koska kassalukija tarvitsee tilaa lukeakseen eri kulmista.</p>

<h2>Kuvan resoluutio</h2>
<ul>
  <li>Tulostusta varten pyri siihen, että jokainen moduuli piirretään <strong>useammalla kokonaisella pikselillä</strong> eikä pikselin osalla. Valitse lataaessasi suurempi moduulikoko ja pienennä sitten taittosovelluksessa, ei päinvastoin.</li>
  <li>Vältä pienen viivakoodikuvan suurentamista, koska ruutujen reunat muuttuvat epätarkoiksi tai sahalaitaisiksi.</li>
  <li>Tallenna PNG-muodossa, jotta värit ja reunat eivät vaurioidu kuten JPG-muodossa.</li>
</ul>

<h2>Hiljainen alue</h2>
<p>Jokainen viivakoodi tarvitsee ympärilleen tyhjää tilaa, jota kutsutaan <strong>hiljaiseksi alueeksi</strong> (quiet zone). QR Codessa sen tulisi ihanteellisesti olla neljän moduulin levyinen. Viivakoodissa tyhjä tila vasemmalla ja oikealla on erittäin tärkeä. Älä sijoita tekstiä, koristeviivoja tai pakkauksen reunaa liian lähelle.</p>

<h2>Värit ja materiaalit</h2>
<ul>
  <li>Käytä viivakoodissa tummaa väriä ja taustassa vaaleaa.</li>
  <li>Vältä kiiltäviä tai läpinäkyviä materiaaleja, koska valon heijastukset voivat häiritä kameraa.</li>
  <li>Tulosta aina yksi näyte ja testaa se useammalla puhelimella tai lukijalla ennen suuria tulostusmääriä.</li>
</ul>
<p>Jos viivakoodiasi on edelleen vaikea lukea, katso <a href="/artikel/barcode-tidak-bisa-dipindai">7 syytä, miksi viivakoodi ei lue</a>.</p>
`
};
