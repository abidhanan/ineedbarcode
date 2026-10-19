// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 raisons pour lesquelles un code-barres ne se scanne pas et comment y remédier",
  desc: "Votre code-barres ou votre QR Code ne se scanne pas ? Voici les sept causes les plus fréquentes, du contraste des couleurs à la taille, et comment les corriger.",
  tags: ["Conseils", "Codes-barres"],
  coverCaption: "Le contraste et la taille déterminent si un QR Code se scanne facilement.",
  inlineCaption: "En entrepôt, un code-barres illisible ralentit le travail.",
  faq: [
    ["Pourquoi un QR Code se scanne-t-il avec un téléphone mais pas avec un autre ?", "Les appareils photo et les applications de lecture n'ont pas tous les mêmes capacités. Un QR Code trop petit, peu contrasté ou aux couleurs inversées échoue plus souvent sur certains téléphones. Testez-le avec plusieurs téléphones avant l'impression."],
    ["Un code-barres en couleur peut-il être scanné ?", "Oui, tant que la couleur est foncée sur un fond clair. Évitez le rouge pour les barres, car de nombreux scanners de caisse utilisent une lumière rouge."],
    ["Comment vérifier qu'un code-barres est correct ?", "Scannez l'impression avec plusieurs téléphones ou scanners, puis assurez-vous que les données lues correspondent exactement à celles que vous avez saisies."]
  ],
  body: `
<p>Rien n'est plus agaçant qu'un code-barres imprimé à des centaines d'exemplaires qui, finalement, ne se scanne pas. Bonne nouvelle : la cause est généralement simple et facile à éviter. Voici les sept causes les plus fréquentes.</p>

<h2>1. Contraste des couleurs trop faible</h2>
<p>Le scanner lit la différence entre le foncé et le clair. Un code-barres gris clair sur blanc, ou bleu foncé sur noir, est difficile à distinguer. <strong>Solution :</strong> utilisez une couleur foncée sur un fond clair. Le noir sur blanc reste le choix le plus sûr.</p>

<h2>2. Couleurs inversées ou couleur rouge</h2>
<p>Un code-barres clair sur fond foncé n'est pas pris en charge par tous les scanners. De plus, de nombreux scanners de caisse utilisent une lumière rouge, si bien que des barres rouges se confondent avec le fond blanc. <strong>Solution :</strong> évitez le rouge pour les barres ou les modules du code-barres, et n'inversez pas les couleurs.</p>

<h2>3. Taille trop petite</h2>
<p>L'appareil photo a besoin de suffisamment de pixels pour reconnaître chaque module. <strong>Solution :</strong> agrandissez le code-barres. Pour un QR Code scanné de près, prévoyez au moins 2 × 2 cm environ. Consultez le <a href="/artikel/ukuran-barcode-untuk-dicetak">guide des tailles d'impression</a>.</p>

<h2>4. Absence de zone de silence</h2>
<p>Un code-barres collé à une image, à du texte ou au bord du papier est difficile à distinguer de son environnement. <strong>Solution :</strong> laissez un espace vide autour du code-barres, surtout à gauche et à droite d'un code-barres linéaire.</p>

<h2>5. Image floue ou déformée</h2>
<p>Un code-barres agrandi à partir d'une petite image, enregistré en JPG de faible qualité ou étiré de façon disproportionnée perd sa forme. <strong>Solution :</strong> téléchargez-le avec une taille de module plus grande au format PNG, et redimensionnez-le toujours de manière proportionnelle.</p>

<h2>6. Données erronées ou inadaptées au type</h2>
<p>Chaque type de code-barres a ses propres règles. L'EAN-13, par exemple, n'accepte que 12 ou 13 chiffres avec une clé de contrôle correcte. Un lien mal saisi fait aussi qu'un QR Code est bien lu mais n'ouvre rien. <strong>Solution :</strong> vérifiez les données avant l'impression. Le générateur <a href="/">I Need Barcode</a> affiche un message si les données ne respectent pas les règles du type de code-barres choisi.</p>

<h2>7. Surface et éclairage</h2>
<p>Les matériaux brillants, le plastique transparent, les plis et les surfaces courbes peuvent refléter la lumière ou déformer le code-barres. <strong>Solution :</strong> imprimez sur une surface plane et non brillante, puis testez dans les conditions d'éclairage réelles.</p>

<h2>À propos des QR Codes personnalisés</h2>
<p>Un QR Code doté d'une forme, de couleurs ou d'un cadre reste scannable tant que les trois carrés de repérage dans ses coins sont intacts et que le contraste est suffisant. Pour en savoir plus, lisez <a href="/artikel/desain-qr-code-kreatif">un design de QR Code créatif qui reste lisible</a>.</p>
<p>La meilleure habitude : <strong>testez toujours une impression</strong> avec plusieurs téléphones et scanners avant d'imprimer en grande quantité.</p>
`
};
