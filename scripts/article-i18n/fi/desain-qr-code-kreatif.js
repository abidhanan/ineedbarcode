// desain-qr-code-kreatif
module.exports = {
  title: "Luova QR Code -suunnittelu, joka pysyy luettavana",
  desc: "QR Code voi olla sydämen tai ympyrän muotoinen, ja siihen voi lisätä kehyksen ja värejä. Opi säännöt, joilla muotoilu on houkutteleva ja koodi silti helppo lukea.",
  tags: ["Suunnittelu", "QR Code"],
  coverCaption: "Värit tekevät QR Codesta houkuttelevamman, kunhan kontrasti pysyy vahvana.",
  inlineCaption: "QR Coden muotoilu kannattaa aina testata ennen tulostamista.",
  faq: [
    ["Voiko sydämen muotoisen QR Coden lukea?", "Voi. Varsinainen QR Code pysyy ehjänä keskellä, ja loput on pelkkää koristekuviota. Kun kontrasti on vahva ja koko riittävä, QR Code on luettavissa."],
    ["Mitkä värit ovat turvallisia QR Codelle?", "Tummat värit, kuten musta, tummansininen, tummanvihreä, violetti tai tummanruskea, valkoisella tai hyvin vaalealla taustalla."],
    ["Voiko QR Codeen lisätä tekstin tai kehyksen?", "Voi. Kehys, jossa on kehotus kuten ”SKANNAA MINUT”, jopa auttaa ihmisiä ymmärtämään sen tarkoituksen, kunhan kehys ei peitä QR Codea."]
  ],
  body: `
<p>Mustavalkoinen QR Code on toki toimiva, mutta pakkauksissa, kutsuissa tai markkinointimateriaaleissa se näyttää usein jäykältä. Pienellä muotoilulla QR Code voi näyttää houkuttelevammalta menettämättä toimivuuttaan. Tärkeintä on ymmärtää, mitä osia saa muuttaa ja minkä on pysyttävä ehjinä.</p>

<h2>Ulkomuoto: sydän, ympyrä ja muut</h2>
<p><a href="/?type=qrcode">QR Code -generaattorin</a> kohdassa ”Muotoilu” voit valita muodoksi esimerkiksi ympyrän, sydämen, kuusikulmion, kahdeksankulmion, tähden tai vinoneliön. Varsinainen QR Code pysyy keskellä, ja loput täytetään koristekuviolla, kunnes valittu muoto muodostuu. Koristekuvio ei sisällä tietoa, joten se ei häiritse lukemista, kunhan varsinaisen QR Coden ympärillä on tyhjää tilaa.</p>

<h2>Pistetyyli</h2>
<p>QR Coden ruudut voi muuttaa pyöristetyiksi muodoiksi tai pyöreiksi pisteiksi. Jotta koodi pysyy helposti luettavana, kolmen suuren kulmaneliön (finder pattern) kannattaa säilyä ehjinä neliöinä, koska kamera etsii juuri niitä ensimmäisenä. Generaattorimme piirtää nämä osat aina kokonaisina neliöinä, enintään pyöristetyin kulmin, valitsitpa minkä pistetyylin tahansa.</p>

<h2>Värit</h2>
<ul>
  <li>Käytä QR Codessa <strong>tummaa</strong> väriä ja taustassa <strong>vaaleaa</strong>. Tummansininen, tummanvihreä, violetti tai tummanruskea ovat yleensä turvallisia.</li>
  <li>Vältä QR Codessa haaleita värejä, kuten keltaista, haaleaa vaaleanpunaista tai vaaleanharmaata.</li>
  <li>Älä käännä värejä vaaleaksi QR Codeksi tummalla taustalla, koska kaikki lukusovellukset eivät tue sitä.</li>
</ul>

<h2>Kehys ja kehotus</h2>
<p>Kehys, jossa on kehotus kuten ”SKANNAA MINUT”, ”RUOKALISTA” tai ”SCAN WIFI”, auttaa todistetusti ihmisiä ymmärtämään QR Coden tarkoituksen. Voit valita kehykseksi alatunnisteen, ylätunnisteen, kulman, puhekuplan, ympyrän tai nauhan ja vaihtaa sitten tekstin ja sen värin.</p>

<h2>Säännöt, joilla muotoilu pysyy luettavana</h2>
<ol>
  <li>Säilytä vahva <strong>kontrasti</strong> QR Coden ja sen taustan välillä.</li>
  <li>Pidä <strong>kolme kulmamerkkiä</strong> selkeinä ja peittämättöminä.</li>
  <li>Jätä <strong>tyhjää tilaa</strong> QR Coden ja kehyksen ympärille.</li>
  <li>Älä pienennä muotoiltua QR Codea liikaa. Sydämen kaltaiset muodot tekevät varsinaisesta QR Code -alueesta pienemmän kuin koko kuvan koko.</li>
  <li><strong>Testaa</strong> useammalla puhelimella ennen tulostamista.</li>
</ol>

<p>Jos muotoiltua koodia on vaikea lukea, palauta asetukset yksi kerrallaan oletuksiin <strong>Palauta</strong>-painikkeella löytääksesi syyn. Muista yleisistä syistä voit lukea artikkelista <a href="/artikel/barcode-tidak-bisa-dipindai">7 syytä, miksi viivakoodi ei lue</a>.</p>
`
};
