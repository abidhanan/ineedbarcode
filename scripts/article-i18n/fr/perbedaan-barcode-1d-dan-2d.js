// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Différence entre codes-barres 1D et 2D : lequel vous faut-il ?",
  desc: "Les codes-barres linéaires et les QR Codes sont tous des codes-barres, mais leurs usages diffèrent. Comparez leur capacité, leur mode de lecture et des exemples d'utilisation.",
  tags: ["Bases", "Codes-barres"],
  coverCaption: "En entrepôt, un scanner portable lit les codes-barres 1D et 2D.",
  inlineCaption: "Les étiquettes d'expédition utilisent généralement un code-barres linéaire.",
  faq: [
    ["Un scanner de caisse peut-il lire un QR Code ?", "Pas tous. Les scanners laser 1D ne lisent que les codes-barres linéaires. Pour un QR Code, il faut un scanner 2D à caméra ou l'appareil photo d'un téléphone."],
    ["Quel est le code-barres le plus petit ?", "Le Data Matrix est un code-barres 2D qui peut être imprimé en très petit format ; il est donc souvent utilisé sur les composants électroniques, les dispositifs médicaux et les étiquettes de médicaments."],
    ["Peut-on utiliser un QR Code à la place d'un EAN-13 sur un produit de distribution ?", "Pour être vendu en magasin, un produit doit toujours porter un EAN-13 ou un UPC enregistré. Un QR Code peut être ajouté sur l'emballage en complément, par exemple pour des informations sur le produit ou des promotions."]
  ],
  body: `
<p>Au moment de créer un code-barres, la première question qui se pose est généralement : code-barres linéaire ou QR Code ? Les deux sont appelés codes-barres, mais ils stockent les données différemment et n'ont donc pas les mêmes usages.</p>

<h2>Codes-barres 1D (linéaires)</h2>
<p>Un code-barres 1D se compose de barres verticales. Les données sont stockées dans une seule direction, de gauche à droite. Les exemples les plus connus sont l'<a href="/?type=ean13">EAN-13</a> sur les emballages de produits et le <a href="/?type=code128">Code 128</a> sur les étiquettes d'expédition.</p>
<ul>
  <li>Faible capacité, généralement d'une douzaine à quelques dizaines de caractères.</li>
  <li>Lisible par les scanners laser de caisse, peu coûteux et très rapides.</li>
  <li>Adapté aux codes produits, aux numéros de série et aux numéros de suivi.</li>
</ul>

<h2>Codes-barres 2D</h2>
<p>Un code-barres 2D stocke les données dans deux directions, horizontalement et verticalement, et peut donc en contenir beaucoup plus. Par exemple <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> et <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Grande capacité, de quelques dizaines à plusieurs milliers de caractères.</li>
  <li>Se scanne avec l'appareil photo d'un téléphone, sous différents angles.</li>
  <li>Dispose d'une correction d'erreurs, il reste donc lisible même partiellement abîmé.</li>
  <li>Peut être très petit, comme le Data Matrix sur les composants électroniques.</li>
</ul>

<h2>Comparaison rapide</h2>
<table>
  <thead><tr><th></th><th>Code-barres 1D</th><th>Code-barres 2D</th></tr></thead>
  <tbody>
    <tr><td>Forme</td><td>Barres verticales</td><td>Carrés/points dans un carré</td></tr>
    <tr><td>Capacité</td><td>Faible</td><td>Grande</td></tr>
    <tr><td>Outil de lecture</td><td>Scanner laser ou caméra</td><td>Caméra ou scanner 2D</td></tr>
    <tr><td>Résistance aux dommages</td><td>Limitée</td><td>Correction d'erreurs</td></tr>
    <tr><td>Exemples</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Quand utiliser lequel ?</h2>
<ul>
  <li><strong>Produits vendus en magasin ou en supérette</strong> : utilisez un EAN-13 officiel de GS1. Consultez <a href="/artikel/cara-mendapatkan-barcode-ean-13">comment obtenir un code-barres EAN-13</a>.</li>
  <li><strong>Étiquettes d'entrepôt, de rayonnage ou d'expédition</strong> : le Code 128 est un choix courant, car il est compact et prend en charge les lettres et les chiffres.</li>
  <li><strong>Liens, menus, WiFi ou contacts pour les clients</strong> : le QR Code, car il se scanne directement avec l'appareil photo d'un téléphone.</li>
  <li><strong>Très petites étiquettes</strong> : Data Matrix.</li>
  <li><strong>Cartes d'identité, cartes d'embarquement ou documents</strong> : PDF417 ou Aztec.</li>
</ul>
<p>Vous pouvez créer gratuitement tous ces types sur <a href="/">I Need Barcode</a>. Si vous hésitez encore, commencez par un QR Code pour vos clients et un Code 128 pour vos besoins internes.</p>
`
};
