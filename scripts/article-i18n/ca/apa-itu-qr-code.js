// apa-itu-qr-code
module.exports = {
  title: "Què és un QR Code i com funciona?",
  desc: "El QR Code pot contenir enllaços, text i fins i tot dades de WiFi, i continua sent llegible encara que estigui parcialment malmès. Descobreixi com funciona i quins avantatges té.",
  tags: ["Conceptes bàsics", "QR Code"],
  coverCaption: "El QR Code es pot escanejar directament amb la càmera del mòbil.",
  inlineCaption: "Cada QR Code està format per quadradets negres i blancs.",
  faq: [
    ["Un QR Code pot caducar?", "Un QR Code estàtic no caduca mai, perquè les dades estan incrustades directament a la imatge. Un QR Code dinàmic pot deixar de funcionar si el servei que proporciona l'enllaç tanca o si s'acaba la subscripció."],
    ["Quantes dades pot contenir un QR Code?", "La versió més gran del QR Code pot contenir fins a 7.089 xifres o uns 2.953 bytes. Tot i això, com menys dades conté, més fàcil és escanejar el QR Code."],
    ["El QR Code continua sent llegible si està parcialment malmès?", "Sí. Gràcies a la correcció d'errors, el QR Code continua sent llegible encara que entre un 7% i un 30% de la seva superfície estigui malmesa, segons el nivell de correcció L, M, Q o H que s'utilitzi."]
  ],
  body: `
<p>El QR Code (Quick Response Code) és un codi de barres 2D de forma quadrada format per quadradets negres i blancs. A diferència del codi de barres lineal, que només conté una dotzena de xifres o poques més, el QR Code pot contenir enllaços a llocs web, textos llargs, números de telèfon, contactes i fins i tot les dades d'una xarxa WiFi.</p>
<p>El QR Code el va desenvolupar el 1994 Denso Wave, una empresa japonesa, per fer el seguiment de peces de vehicles a les fàbriques. Avui el QR Code s'utilitza pertot arreu, des dels pagaments digitals fins a les cartes dels restaurants, perquè es pot escanejar directament amb la càmera del mòbil.</p>

<h2>Les parts del QR Code</h2>
<ul>
  <li><strong>Tres quadrats grans a les cantonades</strong> (finder pattern): ajuden la càmera a trobar el QR Code i a saber-ne l'orientació, de manera que es pot llegir encara que s'escanegi inclinat o de cap per avall.</li>
  <li><strong>Patró d'alineació</strong> (alignment pattern): un quadrat petit que ajuda a llegir els QR Codes doblegats o vistos de biaix.</li>
  <li><strong>Àrea de dades</strong>: els quadradets que contenen la informació que hi ha desat.</li>
  <li><strong>Zona de silenci</strong> (quiet zone): l'espai buit al voltant del QR Code perquè es distingeixi fàcilment del fons.</li>
</ul>

<h2>Quantes dades pot contenir?</h2>
<p>El QR Code té 40 versions de mida. La versió més gran pot contenir fins a 7.089 xifres o uns 2.953 bytes de dades. A la pràctica, com menys dades s'hi desen, més grans són els quadrats i més fàcil és escanejar el QR Code. Per això, un enllaç curt és millor que un enllaç molt llarg.</p>

<h2>Llegible fins i tot malmès</h2>
<p>El QR Code utilitza la correcció d'errors (error correction). Hi ha quatre nivells:</p>
<ul>
  <li><strong>L</strong>: les dades es poden recuperar si aproximadament un 7% del QR Code està malmès.</li>
  <li><strong>M</strong>: aproximadament un 15%. És l'opció habitual i equilibrada.</li>
  <li><strong>Q</strong>: aproximadament un 25%.</li>
  <li><strong>H</strong>: aproximadament un 30%, adequat per als QR Codes que portaran un logotip o que s'imprimiran en llocs que s'embruten fàcilment.</li>
</ul>
<p>Com més alt és el nivell de correcció, més quadrats calen, i el patró del QR Code es veu més atapeït.</p>

<h2>Què es pot desar en un QR Code?</h2>
<ul>
  <li>Enllaços a llocs web, botigues en línia o formularis.</li>
  <li>Dades de WiFi, perquè els convidats es connectin sense escriure la contrasenya. Consulti la guia del <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a>.</li>
  <li>Targetes de visita digitals (vCard), correus electrònics, SMS i xats de WhatsApp.</li>
  <li>Ubicacions al mapa i calendaris d'esdeveniments.</li>
</ul>

<h2>QR Code estàtic i dinàmic</h2>
<p>El QR Code que es crea directament a partir de les dades s'anomena <strong>QR Code estàtic</strong>: el contingut està incrustat a la imatge i no es pot modificar, però tampoc no caduca mai. El QR Code <strong>dinàmic</strong> conté un enllaç curt d'un servei que després redirigeix a la seva destinació; la destinació es pot canviar, però el QR Code deixa de funcionar si el servei tanca. Per a la majoria de necessitats, el QR Code estàtic és suficient i més segur a llarg termini.</p>

<p>Vol provar-ho? Creï ara un <a href="/?type=qrcode">QR Code gratuït</a> o llegeixi <a href="/artikel/cara-membuat-qr-code-gratis">com crear un QR Code en 3 passos</a>.</p>
`
};
