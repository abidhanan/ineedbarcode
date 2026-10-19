// apa-itu-qr-code
module.exports = {
  title: "Mis on QR Code ja kuidas see töötab?",
  desc: "QR Code võib sisaldada linki, teksti ja isegi WiFi andmeid ning on loetav ka osaliselt kahjustatuna. Siin on ülevaade selle tööpõhimõttest ja eelistest.",
  tags: ["Alused", "QR Code"],
  coverCaption: "QR Code'i saab skannida otse telefoni kaameraga.",
  inlineCaption: "Iga QR Code koosneb väikestest mustadest ja valgetest ruutudest.",
  faq: [
    ["Kas QR Code võib aeguda?", "Staatiline QR Code ei aegu kunagi, sest andmed on pildi sisse põimitud. Dünaamiline QR Code võib lakata töötamast, kui lingiteenuse pakkuja lõpetab tegevuse või tellimus lõpeb."],
    ["Kui palju andmeid saab QR Code'i salvestada?", "QR Code'i suurim versioon mahutab kuni 7 089 numbrit ehk umbes 2 953 baiti. Mida vähem andmeid, seda lihtsam on QR Code'i skannida."],
    ["Kas QR Code on loetav, kui see on osaliselt kahjustatud?", "Jah. Tänu veaparandusele on QR Code loetav ka siis, kui umbes 7–30% sellest on kahjustatud, sõltuvalt kasutatud parandustasemest L, M, Q või H."]
  ],
  body: `
<p>QR Code (Quick Response Code) on ruudukujuline 2D-vöötkood, mis koosneb väikestest mustadest ja valgetest ruutudest. Erinevalt joonkoodist, mis mahutab vaid paarkümmend numbrit, saab QR Code sisaldada veebilehe linki, pikka teksti, telefoninumbrit, kontakti ja isegi WiFi võrgu andmeid.</p>
<p>QR Code'i töötas 1994. aastal välja Jaapani ettevõte Denso Wave, et jälgida tehases sõidukite varuosi. Tänapäeval kasutatakse QR Code'i kõikjal – digimaksetest restoranimenüüdeni –, sest seda saab skannida otse telefoni kaameraga.</p>

<h2>QR Code'i osad</h2>
<ul>
  <li><strong>Kolm suurt ruutu nurkades</strong> (finder pattern): aitavad kaameral QR Code'i leida ja selle suunda tuvastada, nii et see on loetav ka viltu või tagurpidi skannides.</li>
  <li><strong>Joondusmuster</strong> (alignment pattern): väike ruut, mis aitab lugeda kõverdatud või nurga alt nähtavat QR Code'i.</li>
  <li><strong>Andmeala</strong>: väikesed ruudud, mis sisaldavad teie salvestatud teavet.</li>
  <li><strong>Vaikne tsoon</strong> (quiet zone): tühi ala QR Code'i ümber, et seda oleks taustast lihtne eristada.</li>
</ul>

<h2>Kui palju andmeid saab salvestada?</h2>
<p>QR Code'il on 40 suurusversiooni. Suurim versioon mahutab kuni 7 089 numbrit ehk umbes 2 953 baiti andmeid. Praktikas kehtib: mida vähem andmeid salvestatakse, seda suuremad on ruudud ja seda lihtsam on QR Code'i skannida. Seepärast on lühike link parem kui väga pikk.</p>

<h2>Loetav ka kahjustatuna</h2>
<p>QR Code kasutab veaparandust (error correction). Tasemeid on neli:</p>
<ul>
  <li><strong>L</strong>: andmed on taastatavad, kui umbes 7% QR Code'ist on kahjustatud.</li>
  <li><strong>M</strong>: umbes 15%. See on levinud ja tasakaalustatud valik.</li>
  <li><strong>Q</strong>: umbes 25%.</li>
  <li><strong>H</strong>: umbes 30%, sobib QR Code'ile, millele lisatakse logo või mis prinditakse kergesti määrduvasse kohta.</li>
</ul>
<p>Mida kõrgem on parandustase, seda rohkem ruute on vaja, nii et QR Code'i muster näeb tihedam välja.</p>

<h2>Mida saab QR Code'i salvestada?</h2>
<ul>
  <li>Veebilehe, e-poe või vormi linki.</li>
  <li>WiFi andmeid, et külalised saaksid ühenduse luua parooli sisestamata. Vaadake juhendit <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitaalset visiitkaarti (vCard), e-kirja, SMS-i ja WhatsAppi vestlust.</li>
  <li>Asukohta kaardil ja ürituse ajakava.</li>
</ul>

<h2>Staatiline ja dünaamiline QR Code</h2>
<p>Otse andmetest loodud QR Code'i nimetatakse <strong>staatiliseks QR Code'iks</strong>: selle sisu on pildi sisse põimitud ja seda ei saa muuta, kuid see ka ei aegu kunagi. <strong>Dünaamiline</strong> QR Code sisaldab mõne teenuse lühilinki, mis suunab edasi teie sihtkohta; sihtkohta saab muuta, kuid QR Code lakkab töötamast, kui see teenus tegevuse lõpetab. Enamiku vajaduste jaoks piisab staatilisest QR Code'ist ja pikemas plaanis on see turvalisem.</p>

<p>Soovite proovida? Looge kohe <a href="/?type=qrcode">tasuta QR Code</a> või lugege, <a href="/artikel/cara-membuat-qr-code-gratis">kuidas luua QR Code 3 sammuga</a>.</p>
`
};
