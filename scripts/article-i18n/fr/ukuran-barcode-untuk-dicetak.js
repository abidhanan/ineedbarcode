// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "La bonne taille et la bonne résolution d'un code-barres pour l'impression",
  desc: "Un code-barres trop petit ou flou est difficile à scanner. Découvrez la taille minimale, la règle de la distance de lecture et la résolution d'image sûre pour l'impression.",
  tags: ["Guide", "Impression"],
  coverCaption: "Une imprimante d'étiquettes imprime des codes-barres pour les colis et les emballages.",
  inlineCaption: "La taille de l'étiquette détermine la taille à laquelle le code-barres peut être imprimé.",
  faq: [
    ["Quelle est la taille minimale d'un QR Code pour l'impression ?", "Pour un scan de près, environ 2 × 2 cm est la limite sûre. Pour une distance plus grande, utilisez un rapport d'environ 10 : 1 entre la distance de lecture et la largeur du QR Code."],
    ["Quelle est la taille standard d'un code-barres EAN-13 ?", "La taille standard de l'EAN-13 est d'environ 37,3 × 25,9 mm. Elle peut être réduite jusqu'à environ 80 % ou agrandie jusqu'à 200 %."],
    ["Pourquoi le code-barres est-il flou après l'impression ?", "Généralement parce qu'une petite image a été agrandie, ou qu'elle a été enregistrée en JPG de faible qualité. Téléchargez-le avec une taille de module plus grande au format PNG."]
  ],
  body: `
<p>Un code-barres qui a l'air parfait à l'écran n'est pas forcément lisible une fois imprimé. Une taille trop petite, une résolution trop faible ou une encre qui bave peuvent empêcher le scanner de le lire. Voici un guide pour que vos impressions restent lisibles.</p>

<h2>Comprendre le module</h2>
<p>Le <strong>module</strong> est la plus petite unité d'un code-barres : un petit carré dans un QR Code, ou la barre la plus fine dans un code-barres linéaire. La taille du module détermine la facilité de lecture du code-barres. Sur <a href="/">I Need Barcode</a>, la taille du module se règle dans la section Paramètres : plus la valeur est élevée, plus l'image téléchargée est grande et nette.</p>

<h2>Taille minimale d'un QR Code</h2>
<ul>
  <li>Pour un scan de près (par exemple sur une carte de visite ou une étiquette de produit), une taille d'environ <strong>2 × 2 cm</strong> est la limite sûre.</li>
  <li>Appliquez une règle d'environ <strong>10 : 1</strong> : la distance de lecture équivaut à environ dix fois la largeur du QR Code. Pour une affiche scannée à 2 mètres, prévoyez un QR Code d'au moins 20 cm environ.</li>
  <li>Plus il y a de données, plus le motif est dense, et plus le code doit être grand.</li>
</ul>

<h2>Taille d'un code-barres produit</h2>
<p>La taille standard de l'<a href="/?type=ean13">EAN-13</a> est d'environ 37,3 × 25,9 mm (100 %). Elle peut être réduite jusqu'à environ 80 % ou agrandie jusqu'à 200 %. Évitez de trop raccourcir la hauteur des barres, car les scanners de caisse ont besoin d'espace pour lire sous différents angles.</p>

<h2>Résolution de l'image</h2>
<ul>
  <li>Pour l'impression, veillez à ce que chaque module soit représenté par <strong>plusieurs pixels entiers</strong>, et non par des fractions de pixel. Choisissez une taille de module plus grande lors du téléchargement, puis réduisez l'image dans votre logiciel de mise en page, et non l'inverse.</li>
  <li>Évitez d'agrandir une petite image de code-barres, car les bords des carrés deviendraient flous ou crénelés.</li>
  <li>Enregistrez au format PNG pour que les couleurs et les bords ne soient pas dégradés comme avec le JPG.</li>
</ul>

<h2>Zone de silence</h2>
<p>Chaque code-barres a besoin d'un espace vide autour de lui, appelé <strong>zone de silence</strong> (quiet zone). Pour un QR Code, elle doit idéalement mesurer quatre modules de large. Pour un code-barres linéaire, l'espace vide à gauche et à droite est essentiel. Ne placez pas de texte, de lignes graphiques ou le bord de l'emballage trop près.</p>

<h2>Couleurs et matériaux</h2>
<ul>
  <li>Utilisez une couleur foncée pour le code-barres et une couleur claire pour le fond.</li>
  <li>Évitez les matériaux brillants ou transparents, car les reflets de lumière peuvent gêner l'appareil photo.</li>
  <li>Imprimez toujours un exemplaire et testez-le avec plusieurs téléphones ou scanners avant d'imprimer en grande quantité.</li>
</ul>
<p>Si votre code-barres reste difficile à scanner, consultez <a href="/artikel/barcode-tidak-bisa-dipindai">7 raisons pour lesquelles un code-barres ne se scanne pas</a>.</p>
`
};
