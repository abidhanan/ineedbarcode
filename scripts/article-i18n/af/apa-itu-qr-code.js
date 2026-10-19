// apa-itu-qr-code
module.exports = {
  title: "Wat is 'n QR Code en hoe werk dit?",
  desc: "'n QR Code kan skakels, teks en selfs WiFi-data stoor en bly leesbaar al is 'n deel daarvan beskadig. Só werk dit en dit is die voordele daarvan.",
  tags: ["Basies", "QR Code"],
  coverCaption: "'n QR Code kan direk met die foon se kamera geskandeer word.",
  inlineCaption: "Elke QR Code bestaan uit klein swart en wit blokkies.",
  faq: [
    ["Kan 'n QR Code verval?", "'n Statiese QR Code verval nooit nie, omdat die data direk in die beeld ingebed is. 'n Dinamiese QR Code kan ophou werk as die diens wat die skakel verskaf, ophou of die intekening verval."],
    ["Hoeveel data kan 'n QR Code stoor?", "Die grootste weergawe van 'n QR Code kan tot 7.089 syfers of ongeveer 2.953 grepe stoor. Hoe minder data, hoe makliker is die QR Code egter om te skandeer."],
    ["Bly 'n QR Code leesbaar as 'n deel daarvan beskadig is?", "Ja. Danksy foutkorreksie bly 'n QR Code leesbaar al is ongeveer 7% tot 30% daarvan beskadig, afhangende van die korreksievlak L, M, Q of H wat gebruik word."]
  ],
  body: `
<p>'n QR Code (Quick Response Code) is 'n vierkantige 2D-strepieskode wat uit klein swart en wit blokkies bestaan. Anders as 'n lynstrepieskode, wat net 'n dosyn of wat syfers stoor, kan 'n QR Code 'n skakel na 'n webwerf, lang teks, telefoonnommers, kontakte en selfs WiFi-netwerkdata stoor.</p>
<p>Die QR Code is in 1994 deur die Japannese maatskappy Denso Wave ontwikkel om voertuigonderdele in fabrieke na te spoor. Vandag word QR Codes oral gebruik, van digitale betalings tot restaurantspyskaarte, omdat dit direk met die foon se kamera geskandeer kan word.</p>

<h2>Die dele van 'n QR Code</h2>
<ul>
  <li><strong>Drie groot blokke in die hoeke</strong> (finder pattern): help die kamera om die QR Code te vind en die rigting daarvan te bepaal, sodat dit leesbaar bly selfs al word dit skuins of onderstebo geskandeer.</li>
  <li><strong>Belyningspatroon</strong> (alignment pattern): 'n klein blokkie wat help om 'n QR Code te lees wat gebuig is of uit 'n hoek gesien word.</li>
  <li><strong>Data-area</strong>: die klein blokkies wat die inligting bevat wat u stoor.</li>
  <li><strong>Stil sone</strong> (quiet zone): die leë ruimte rondom die QR Code sodat dit maklik van die agtergrond onderskei kan word.</li>
</ul>

<h2>Hoeveel data kan dit stoor?</h2>
<p>QR Codes het 40 grootteweergawes. Die grootste weergawe kan tot 7.089 syfers of ongeveer 2.953 grepe data stoor. In die praktyk geld: hoe minder data gestoor word, hoe groter is die blokkies en hoe makliker is die QR Code om te skandeer. Daarom is 'n kort skakel beter as 'n baie lang skakel.</p>

<h2>Bly leesbaar al is dit beskadig</h2>
<p>QR Codes gebruik foutkorreksie (error correction). Daar is vier vlakke:</p>
<ul>
  <li><strong>L</strong>: die data kan steeds herwin word as ongeveer 7% van die QR Code beskadig is.</li>
  <li><strong>M</strong>: ongeveer 15%. Dit is die algemene en gebalanseerde keuse.</li>
  <li><strong>Q</strong>: ongeveer 25%.</li>
  <li><strong>H</strong>: ongeveer 30%, geskik vir QR Codes wat 'n logo gaan kry of op 'n plek gedruk word waar dit maklik vuil word.</li>
</ul>
<p>Hoe hoër die korreksievlak, hoe meer blokkies is nodig, sodat die QR Code se patroon digter lyk.</p>

<h2>Wat kan in 'n QR Code gestoor word?</h2>
<ul>
  <li>Skakels na webwerwe, aanlynwinkels of vorms.</li>
  <li>WiFi-data, sodat gaste kan koppel sonder om die wagwoord in te tik. Sien die gids oor <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitale besigheidskaartjies (vCard), e-pos, SMS en WhatsApp-klets.</li>
  <li>Liggings op die kaart en die tye van geleenthede.</li>
</ul>

<h2>Statiese en dinamiese QR Codes</h2>
<p>'n QR Code wat direk uit die data gemaak word, word 'n <strong>statiese QR Code</strong> genoem: die inhoud is in die beeld ingebed en kan nie verander word nie, maar dit verval ook nooit nie. 'n <strong>Dinamiese</strong> QR Code bevat 'n kort skakel van 'n diens wat dan na u bestemming herlei; die bestemming kan verander word, maar die QR Code hou op werk as daardie diens ophou. Vir die meeste behoeftes is 'n statiese QR Code genoeg en veiliger op die lang termyn.</p>

<p>Wil u dit probeer? Maak nou 'n <a href="/?type=qrcode">gratis QR Code</a>, of lees <a href="/artikel/cara-membuat-qr-code-gratis">hoe om 'n QR Code in 3 stappe te maak</a>.</p>
`
};
