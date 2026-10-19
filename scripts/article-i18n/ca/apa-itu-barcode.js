// apa-itu-barcode
module.exports = {
  title: "Què és un codi de barres? Definició, funcionament i tipus",
  desc: "El codi de barres és present en gairebé tots els productes que compra. Descobreixi com funciona, la seva breu història i els tipus de codi de barres més utilitzats.",
  tags: ["Conceptes bàsics", "Codis de barres"],
  coverCaption: "El codi de barres de l'envàs conté el codi únic del producte.",
  inlineCaption: "A la caixa s'utilitza un lector per llegir el codi de barres en un instant.",
  faq: [
    ["Quina diferència hi ha entre un codi de barres i un QR Code?", "El QR Code és un tipus de codi de barres, concretament un codi de barres 2D. El codi de barres lineal (1D) només conté uns quants caràcters i es llegeix d'esquerra a dreta, mentre que el QR Code emmagatzema dades en dues direccions i, per tant, hi caben enllaços, text o dades de WiFi."],
    ["El codi de barres conté el preu del producte?", "Normalment, no. El codi de barres del producte només conté un codi. El preu i el nom del producte es desen al sistema de caixa i es cerquen a partir del codi llegit."],
    ["Cal pagar per crear un codi de barres?", "No. La imatge del codi de barres es pot crear gratuïtament, per exemple a I Need Barcode. L'únic que s'ha de registrar pagant és el número oficial per als codis de barres de productes de venda al detall, com l'EAN-13, a través de GS1."]
  ],
  body: `
<p>El codi de barres és una manera d'escriure dades en forma d'un patró que poden llegir les màquines. Aquest patró sol estar format per línies negres i blanques d'amplades diferents, o per quadradets disposats dins d'un quadrat. Quan s'escaneja, el patró es torna a convertir en números o text, com ara un codi de producte, un número d'enviament o l'adreça d'un lloc web.</p>
<p>Com que el llegeixen les màquines, el codi de barres és molt més ràpid i comporta menys errors que no pas escriure un codi a mà. Per això s'utilitza a les caixes de les botigues, als magatzems, als hospitals, a les entrades i fins i tot als envasos d'aliments.</p>

<h2>Breu història del codi de barres</h2>
<p>La idea del codi de barres la van patentar el 1952 Norman Joseph Woodland i Bernard Silver als Estats Units. El codi de barres no es va començar a utilitzar realment a les botigues fins al 1974, quan es va escanejar un paquet de xiclets en un supermercat d'Ohio amb un codi UPC. Des d'aleshores, el codi de barres s'ha estès per tot el món i avui el gestiona a escala global una organització d'estàndards anomenada GS1.</p>

<h2>Com funciona el codi de barres?</h2>
<p>El lector il·lumina el codi de barres i en llegeix el reflex. Les parts fosques reflecteixen poca llum i les parts clares en reflecteixen molta. Aquesta diferència es converteix en una seqüència de 0 i 1, que després es compara amb les regles d'aquell tipus de codi de barres. Molts codis de barres també tenen un <strong>dígit de control</strong> (check digit), és a dir, l'últim número, que es calcula a partir dels números anteriors. Si el resultat del càlcul no coincideix, el lector sap que hi ha un error i rebutja la lectura.</p>
<p>El codi de barres en si normalment només conté un codi. La informació com el nom del producte o el preu es desa al sistema de caixa o en una base de dades i es cerca a partir d'aquest codi.</p>

<h2>Els tipus de codi de barres més utilitzats</h2>
<p>En general, els codis de barres es divideixen en dos grans grups:</p>
<ul>
  <li><strong>Codis de barres 1D (lineals)</strong>: formats per línies verticals que es llegeixen d'esquerra a dreta. En són exemples l'<a href="/?type=ean13">EAN-13</a> i l'<a href="/?type=upca">UPC-A</a> per a productes de venda al detall, i el <a href="/?type=code128">Code 128</a> i el <a href="/?type=code39">Code 39</a> per a logística i magatzems.</li>
  <li><strong>Codis de barres 2D</strong>: formats per un patró de quadrats que emmagatzema dades en dues direccions, de manera que hi cap molta més informació. En són exemples el <a href="/?type=qrcode">QR Code</a>, el <a href="/?type=datamatrix">Data Matrix</a>, el <a href="/?type=pdf417">PDF417</a> i l'<a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>A més, hi ha codis de barres específics per a correus i enviaments, per a l'àmbit sanitari i els estàndards GS1 per a la cadena de subministrament. Pot llegir una explicació més detallada sobre les diferències a l'article <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferència entre codis de barres 1D i 2D</a>.</p>

<h2>Per a què serveix el codi de barres?</h2>
<ul>
  <li><strong>Venda al detall</strong>: agilitza la caixa i registra l'estoc automàticament.</li>
  <li><strong>Magatzems i enviaments</strong>: permet seguir mercaderies i paquets d'un lloc a un altre.</li>
  <li><strong>Entrades i esdeveniments</strong>: comprova l'autenticitat de les entrades amb un sol escaneig.</li>
  <li><strong>Màrqueting</strong>: un QR Code en fullets o envasos porta la gent directament al seu lloc web, a la seva carta o al seu WhatsApp.</li>
</ul>

<h2>Creï el seu propi codi de barres</h2>
<p>No necessita cap aplicació de pagament per crear codis de barres. A <a href="/">I Need Barcode</a>, triï el tipus de codi de barres, introdueixi les dades i descarregui'l com a imatge PNG. Hi ha més de 100 tipus per triar, tots gratuïts i sense registre.</p>
`
};
