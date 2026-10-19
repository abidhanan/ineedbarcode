// desain-qr-code-kreatif
module.exports = {
  title: "Un design de QR Code créatif qui reste scannable",
  desc: "Un QR Code peut prendre la forme d'un cœur ou d'un cercle, ou recevoir un cadre et des couleurs. Découvrez les règles pour que le design reste attrayant tout en se scannant facilement.",
  tags: ["Design", "QR Code"],
  coverCaption: "Les couleurs rendent un QR Code plus attrayant, à condition que le contraste reste fort.",
  inlineCaption: "Un design de QR Code doit toujours être testé avant l'impression.",
  faq: [
    ["Un QR Code en forme de cœur peut-il encore être scanné ?", "Oui. Le QR Code d'origine reste intact au centre et le reste n'est qu'un motif décoratif. Tant que le contraste est fort et la taille suffisante, le QR Code reste lisible."],
    ["Quelles couleurs sont sûres pour un QR Code ?", "Des couleurs foncées comme le noir, le bleu foncé, le vert foncé, le violet ou le brun foncé, sur un fond blanc ou très clair."],
    ["Peut-on ajouter du texte ou un cadre à un QR Code ?", "Oui. Un cadre avec un appel à l'action comme « SCANNEZ-MOI » aide même les gens à comprendre à quoi il sert, tant que le cadre ne recouvre pas le QR Code."]
  ],
  body: `
<p>Un QR Code noir et blanc est certes fonctionnel, mais il paraît souvent austère sur un emballage, une invitation ou un support promotionnel. Avec une petite touche de design, un QR Code peut devenir plus attrayant sans perdre sa fonction. La clé est de comprendre quelles parties peuvent être modifiées et lesquelles doivent rester intactes.</p>

<h2>Forme extérieure : cœur, cercle et plus encore</h2>
<p>Dans la section Design du <a href="/?type=qrcode">générateur de QR Code</a>, vous pouvez choisir une forme comme un cercle, un cœur, un hexagone, un octogone, une étoile ou un losange. Le QR Code d'origine reste au centre, et le reste est rempli d'un motif décoratif jusqu'à obtenir la forme choisie. Ce motif décoratif ne contient aucune donnée et ne gêne donc pas la lecture, tant qu'un espace vide subsiste autour du QR Code d'origine.</p>

<h2>Style de points</h2>
<p>Les carrés d'un QR Code peuvent être transformés en formes arrondies ou en points ronds. Pour qu'il reste facile à scanner, les trois grands carrés des coins (finder pattern) doivent de préférence rester des carrés pleins, car c'est cette partie que l'appareil photo recherche en premier. Notre générateur dessine toujours cette partie sous forme de carré plein, au plus avec des coins arrondis, quel que soit le style de points choisi.</p>

<h2>Couleurs</h2>
<ul>
  <li>Utilisez une couleur <strong>foncée</strong> pour le QR Code et une couleur <strong>claire</strong> pour le fond. Le bleu foncé, le vert foncé, le violet ou le brun foncé sont généralement sûrs.</li>
  <li>Évitez les couleurs pâles pour le QR Code, comme le jaune, le rose pâle ou le gris clair.</li>
  <li>N'inversez pas les couleurs pour obtenir un QR Code clair sur fond foncé, car toutes les applications de lecture ne le prennent pas en charge.</li>
</ul>

<h2>Cadre et appel à l'action</h2>
<p>Un cadre portant un appel à l'action comme « SCANNEZ-MOI », « MENU » ou « SCAN WIFI » aide efficacement les gens à comprendre la fonction du QR Code. Vous pouvez choisir un cadre avec étiquette en bas, étiquette en haut, coin, bulle, cercle ou ruban, puis modifier le texte et sa couleur.</p>

<h2>Les règles pour que le design reste lisible</h2>
<ol>
  <li>Maintenez un <strong>contraste</strong> fort entre le QR Code et son fond.</li>
  <li>Laissez les <strong>trois carrés de repérage</strong> des coins bien visibles et non recouverts.</li>
  <li>Prévoyez un <strong>espace vide</strong> autour du QR Code et du cadre.</li>
  <li>Ne réduisez pas trop un QR Code personnalisé. Une forme comme le cœur rend la zone du QR Code d'origine plus petite que la taille totale de l'image.</li>
  <li><strong>Testez</strong> avec plusieurs téléphones avant d'imprimer.</li>
</ol>

<p>Si votre design est difficile à scanner, rétablissez les réglages un par un avec le bouton <strong>Réinitialiser</strong> pour trouver la cause. D'autres causes fréquentes sont expliquées dans <a href="/artikel/barcode-tidak-bisa-dipindai">7 raisons pour lesquelles un code-barres ne se scanne pas</a>.</p>
`
};
