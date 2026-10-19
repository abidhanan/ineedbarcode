// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D un 2D svītrkodu atšķirības: kurš jums ir vajadzīgs?",
  desc: "Lineārais svītrkods un QR Code abi ir svītrkodi, taču to pielietojums atšķiras. Salīdziniet ietilpību, skenēšanas veidu un lietošanas piemērus.",
  tags: ["Pamati", "Svītrkodi"],
  coverCaption: "Rokas skeneris noliktavā nolasa 1D un 2D svītrkodus.",
  inlineCaption: "Sūtījumu etiķetēs parasti izmanto lineāros svītrkodus.",
  faq: [
    ["Vai kases skeneris var nolasīt QR Code?", "Ne visi. 1D lāzera skeneri nolasa tikai lineāros svītrkodus. QR Code nolasīšanai vajadzīgs uz kameras balstīts 2D skeneris vai tālruņa kamera."],
    ["Kurš svītrkods ir vismazākais?", "Data Matrix ir 2D svītrkods, ko var izdrukāt ļoti mazu, tāpēc to bieži izmanto uz elektronikas komponentiem, medicīnas ierīcēm un zāļu etiķetēm."],
    ["Vai mazumtirdzniecības precēm EAN-13 vietā drīkst izmantot QR Code?", "Lai preci pārdotu veikalos, tai joprojām vajadzīgs reģistrēts EAN-13 vai UPC. QR Code var pievienot uz iepakojuma kā papildinājumu, piemēram, informācijai par preci vai akcijām."]
  ],
  body: `
<p>Veidojot svītrkodu, pirmais jautājums parasti ir šāds: izmantot lineāro svītrkodu vai QR Code? Abus sauc par svītrkodiem, taču datus tie glabā atšķirīgi, tāpēc atšķiras arī to pielietojums.</p>

<h2>1D (lineārais) svītrkods</h2>
<p>1D svītrkods ir vertikālu svītru virkne. Dati tiek glabāti vienā virzienā, proti, no kreisās uz labo pusi. Pazīstamākie piemēri ir <a href="/?type=ean13">EAN-13</a> uz preču iepakojumiem un <a href="/?type=code128">Code 128</a> uz sūtījumu etiķetēm.</p>
<ul>
  <li>Neliela ietilpība, parasti no pāris desmitiem līdz dažiem desmitiem rakstzīmju.</li>
  <li>Nolasāms ar lētiem un ļoti ātriem kases lāzera skeneriem.</li>
  <li>Piemērots preču kodiem, sērijas numuriem un sūtījumu numuriem.</li>
</ul>

<h2>2D svītrkods</h2>
<p>2D svītrkods datus glabā divos virzienos – horizontāli un vertikāli –, tāpēc tajā ietilpst daudz vairāk. Piemēram, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> un <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Liela ietilpība – no dažiem desmitiem līdz tūkstošiem rakstzīmju.</li>
  <li>Noskenējams ar tālruņa kameru no dažādiem virzieniem.</li>
  <li>Ir kļūdu labošana, tāpēc nolasāms pat tad, ja daļēji bojāts.</li>
  <li>Var būt ļoti mazs, piemēram, Data Matrix uz elektronikas komponentiem.</li>
</ul>

<h2>Īss salīdzinājums</h2>
<table>
  <thead><tr><th></th><th>1D svītrkods</th><th>2D svītrkods</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Vertikālas svītras</td><td>Kvadrātiņi/punkti kvadrātā</td></tr>
    <tr><td>Ietilpība</td><td>Neliela</td><td>Liela</td></tr>
    <tr><td>Skenēšanas ierīce</td><td>Lāzera skeneris vai kamera</td><td>Kamera vai 2D skeneris</td></tr>
    <tr><td>Izturība pret bojājumiem</td><td>Ierobežota</td><td>Ir kļūdu labošana</td></tr>
    <tr><td>Piemēri</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kad kuru izmantot?</h2>
<ul>
  <li><strong>Preces, ko pārdod veikalos vai lielveikalos</strong>: izmantojiet oficiālu EAN-13 no GS1. Skatiet <a href="/artikel/cara-mendapatkan-barcode-ean-13">kā iegūt EAN-13 svītrkodu</a>.</li>
  <li><strong>Noliktavas, plauktu vai sūtījumu etiķetes</strong>: Code 128 ir izplatīta izvēle, jo tas ir kompakts un atbalsta gan burtus, gan ciparus.</li>
  <li><strong>Saites, ēdienkartes, WiFi vai kontakti klientiem</strong>: QR Code, jo to var noskenēt tieši ar tālruņa kameru.</li>
  <li><strong>Ļoti mazas etiķetes</strong>: Data Matrix.</li>
  <li><strong>Personas apliecības, lidmašīnas biļetes vai dokumenti</strong>: PDF417 vai Aztec.</li>
</ul>
<p>Visus iepriekš minētos veidus varat bez maksas izveidot vietnē <a href="/">I Need Barcode</a>. Ja joprojām šaubāties, sāciet ar QR Code klientu vajadzībām un Code 128 iekšējām vajadzībām.</p>
`
};
