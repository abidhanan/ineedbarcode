// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Comment obtenir un code-barres produit EAN-13 pour les petites entreprises",
  desc: "Vous souhaitez que vos produits entrent en supérette ou en supermarché ? Découvrez la signification des chiffres de l'EAN-13, comment enregistrer un numéro officiel auprès de GS1 Indonesia et comment l'imprimer.",
  tags: ["Entreprise", "Commerce"],
  coverCaption: "L'emballage d'un produit de distribution nécessite un code-barres EAN-13 enregistré.",
  inlineCaption: "Les magasins reconnaissent les produits grâce au numéro EAN-13 enregistré dans leur système de caisse.",
  faq: [
    ["Puis-je créer moi-même un numéro EAN-13 ?", "Vous pouvez créer vous-même l'image du code-barres, mais le numéro doit de préférence être officiel et provenir de GS1. Un numéro inventé peut entrer en conflit avec un autre produit et être refusé par les magasins."],
    ["Chaque variante de produit a-t-elle besoin d'un code-barres différent ?", "Oui. Chaque variante distincte, par exemple un goût, une taille ou un contenu d'emballage différent, nécessite son propre numéro EAN-13."],
    ["Qu'est-ce que la clé de contrôle d'un EAN-13 ?", "La clé de contrôle est le 13e chiffre, calculé à partir des 12 chiffres précédents. Le scanner l'utilise pour s'assurer que le code-barres a été lu correctement. Le générateur I Need Barcode la calcule automatiquement si vous saisissez 12 chiffres."]
  ],
  body: `
<p>Si vous souhaitez vendre votre produit en supérette, en supermarché ou sur une grande place de marché en ligne, on vous demandera généralement d'apposer un code-barres <strong>EAN-13</strong> sur l'emballage. Ce code-barres contient 13 chiffres qui constituent l'identifiant unique de votre produit dans le monde entier.</p>

<h2>Signification des 13 chiffres de l'EAN-13</h2>
<ul>
  <li><strong>Préfixe GS1</strong> : les trois premiers chiffres indiquent l'organisation GS1 qui a attribué le numéro. Les numéros attribués par GS1 Indonesia commencent par <strong>899</strong>.</li>
  <li><strong>Numéro d'entreprise</strong> : l'identifiant de votre entreprise, attribué lors de l'inscription.</li>
  <li><strong>Numéro de produit</strong> : défini par l'entreprise elle-même pour chaque variante de produit, par exemple un goût ou une taille différents.</li>
  <li><strong>Clé de contrôle</strong> : le dernier chiffre, calculé automatiquement à partir des 12 chiffres précédents pour éviter les erreurs de lecture.</li>
</ul>

<h2>Pourquoi un numéro officiel ?</h2>
<p>N'importe qui peut dessiner un code-barres EAN-13, mais son <strong>numéro</strong> doit être enregistré. Les magasins utilisent ce numéro pour reconnaître les produits dans leur système. Si vous inventez un numéro, il peut entrer en conflit avec le produit d'une autre entreprise et être refusé lors du référencement de votre produit en magasin.</p>

<h2>Comment enregistrer un numéro auprès de GS1 Indonesia</h2>
<ol>
  <li>Préparez les documents de votre entreprise, comme le NIB (numéro d'identification d'entreprise indonésien) et le NPWP (numéro fiscal), ainsi que la liste des produits qui recevront un code-barres.</li>
  <li>Inscrivez votre entreprise sur le site officiel de GS1 Indonesia et choisissez le nombre de numéros dont vous avez besoin.</li>
  <li>Réglez les frais d'inscription et la cotisation annuelle conformément aux conditions en vigueur.</li>
  <li>Une fois votre demande approuvée, vous recevez un numéro d'entreprise et pouvez créer un numéro pour chaque produit.</li>
</ol>
<p>Les conditions et les tarifs peuvent changer : vérifiez donc toujours les informations les plus récentes directement sur le site de GS1 Indonesia.</p>

<h2>Créer l'image du code-barres</h2>
<p>Une fois votre numéro obtenu, ouvrez le <a href="/?type=ean13">générateur EAN-13</a> et saisissez les 12 ou 13 chiffres du numéro de votre produit. Si vous saisissez 12 chiffres, la clé de contrôle est calculée automatiquement. Assurez-vous que l'option de texte sous le code-barres est activée pour que les chiffres soient imprimés, puis téléchargez-le en PNG.</p>

<h2>Conseils pour l'impression sur l'emballage</h2>
<ul>
  <li>Utilisez des barres noires ou bleu foncé sur fond blanc. Évitez le rouge pour les barres : de nombreux scanners de caisse utilisent une lumière rouge, et des barres rouges ne sont donc pas lues.</li>
  <li>Ne réduisez pas trop le code-barres. La taille standard de l'EAN-13 est d'environ 37,3 × 25,9 mm et peut être réduite jusqu'à environ 80 %. Pour en savoir plus, consultez le <a href="/artikel/ukuran-barcode-untuk-dicetak">guide des tailles de code-barres</a>.</li>
  <li>Laissez un espace vide à gauche et à droite du code-barres, et évitez de le placer sur un pli ou une soudure de l'emballage.</li>
  <li>Testez l'impression avec un scanner avant d'imprimer en grande quantité.</li>
</ul>
<p>Pour les produits vendus en Amérique du Nord, on pourra également vous demander d'utiliser un <a href="/?type=upca">UPC-A</a> à 12 chiffres.</p>
`
};
