// cara-membuat-qr-code-wifi
module.exports = {
  title: "Nola sortu WiFi QR Code bat gonbidatuek pasahitza idatzi behar ez dezaten",
  desc: "Gonbidatuek QR Code bat eskaneatu besterik ez dute egin behar WiFira konektatzeko. Egokia kafetegi, bulego, ostatu eta etxeetarako. Hona hemen nola sortu eta jarri.",
  tags: ["Gida", "QR Code"],
  coverCaption: "Bideratzailearen WiFi datuak QR Code bakar batean gorde daitezke.",
  inlineCaption: "Kafetegiko bezeroak berehala konekta daitezke pasahitza idatzi gabe.",
  faq: [
    ["Telefono guztiek eskanea dezakete WiFi QR Code bat?", "iOS 11 edo berriagoa duten iPhoneen kamerak eta Android 10 edo berriagoa duten Android gehienenak zuzenean irakur dezakete. Telefono zaharrek QR eskaneatzeko aplikazio bat behar izan dezakete."],
    ["Segurua al da WiFi QR Code bat?", "QR Code hori eskaneatzen duen edonor konekta daiteke zure WiFira. Horregatik, erabili gonbidatuentzako sare bat, eta ez jarri sare pribatuaren QR Codea leku publikoetan."],
    ["Zer egin behar da WiFiaren pasahitza aldatzen bada?", "Sortu eta inprimatu berriro WiFi QR Codea, QR Code zaharrak pasahitz zaharra duelako oraindik."]
  ],
  body: `
<p>WiFi pasahitz luze bat gonbidatuei letraz letra esatea gogaikarria izan ohi da, batez ere letra larriak, zenbakiak eta ikurrak baditu. <strong>WiFi QR Code</strong> batekin, gonbidatuek telefonoaren kamera QR Codera zuzendu besterik ez dute egin behar, eta berehala konektatuko dira.</p>

<h2>Nola funtzionatzen du WiFi QR Code batek</h2>
<p>WiFi QR Code batek sarearen izena (SSID), segurtasun mota eta pasahitza gordetzen ditu telefonoek ezagutzen duten formatu berezi batean, adibidez <code>WIFI:T:WPA;S:SarearenIzena;P:Pasahitza;;</code>. iPhoneen kamerak (iOS 11 edo berriagoa) eta Android gehienenak (Android 10 edo berriagoa) zuzenean irakur dezakete, aplikazio gehigarririk gabe.</p>

<h2>Sortzeko urratsak</h2>
<ol>
  <li>Ireki <a href="/?type=qrcode">QR Code sorgailua</a> eta aukeratu <strong>WiFi</strong> fitxa Datuak atalean.</li>
  <li>Idatzi <strong>sarearen izena</strong> WiFi zerrendan agertzen den bezala, letra larriak eta xeheak barne.</li>
  <li>Idatzi <strong>pasahitza</strong>, eta aukeratu segurtasun mota. Etxeetako eta bulegoetako bideratzaile gehienek WPA/WPA2/WPA3 erabiltzen dute.</li>
  <li>Markatu <strong>Sare ezkutua</strong> zure WiFiaren izena zerrendan agertzen ez bada.</li>
  <li>Gehitu, adibidez, "SCAN WIFI" testua duen markoa, gonbidatuek zertarako den jakin dezaten, eta deskargatu PNGa.</li>
</ol>

<h2>Non jarri?</h2>
<ul>
  <li>Kafetegi edo jatetxeko mahaiko txartel txiki batean.</li>
  <li>Egongelako, harrerako edo bulegoko bilera-gelako horman.</li>
  <li>Ostatuetako geletan, ate edo telebista ondoan itsatsita.</li>
  <li>Etxeko bideratzailearen behealdean, familiak gailu berriak erraz konekta ditzan.</li>
</ul>

<h2>Segurtasun-aholkuak</h2>
<ul>
  <li>Erabili <strong>gonbidatuentzako sarea</strong> (guest network) zure bideratzaileak onartzen badu, gonbidatuak bulegoko ordenagailuen sare berean sar ez daitezen.</li>
  <li>WiFiaren pasahitza aldatzen bada, sortu eta inprimatu berriro QR Codea, QR Code zaharrak pasahitz zaharra izango baitu.</li>
  <li>Ez jarri sare pribatu baten WiFi QR Codea edonork argazkia atera diezaiokeen leku publikoetan.</li>
</ul>

<h2>QR Codeak konektatzen ez badu</h2>
<p>Egiaztatu berriro sarearen izenaren eta pasahitzaren idazkera, letra oker bakar batek telefonoak konektatzean huts egitea eragiten baitu. Ziurtatu, halaber, aukeratutako segurtasun mota bideratzailearen ezarpenekin bat datorrela. Eskaneatzeko beste arazo batzuetarako, irakurri <a href="/artikel/barcode-tidak-bisa-dipindai">barra-kode bat eskaneatu ezin izateko arrazoiak</a>.</p>
`
};
