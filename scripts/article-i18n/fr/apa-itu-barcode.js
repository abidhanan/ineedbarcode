// apa-itu-barcode
module.exports = {
  title: "Qu'est-ce qu'un code-barres ? Définition, fonctionnement et types",
  desc: "Les codes-barres figurent sur presque tous les produits que vous achetez. Découvrez leur fonctionnement, leur brève histoire et les types de codes-barres les plus utilisés.",
  tags: ["Bases", "Codes-barres"],
  coverCaption: "Le code-barres sur l'emballage contient le code unique du produit.",
  inlineCaption: "À la caisse, un scanner lit le code-barres en un instant.",
  faq: [
    ["Quelle est la différence entre un code-barres et un QR Code ?", "Le QR Code est un type de code-barres, à savoir un code-barres 2D. Un code-barres à barres (1D) ne contient que quelques caractères et se lit de gauche à droite, tandis qu'un QR Code stocke les données dans deux directions et peut donc contenir un lien, du texte ou des données WiFi."],
    ["Un code-barres contient-il le prix du produit ?", "En général, non. Le code-barres d'un produit ne contient qu'un code. Le prix et le nom du produit sont enregistrés dans le système de caisse, puis retrouvés à partir du code scanné."],
    ["Faut-il payer pour créer un code-barres ?", "Non. L'image du code-barres peut être créée gratuitement, par exemple sur I Need Barcode. Seul le numéro officiel des codes-barres de produits de distribution, comme l'EAN-13, doit être enregistré moyennant des frais auprès de GS1."]
  ],
  body: `
<p>Un code-barres est une façon d'écrire des données sous la forme d'un motif lisible par une machine. Ce motif se compose généralement de barres noires et blanches de largeurs différentes, ou de petits carrés disposés dans un carré. Lors du scan, le motif est retraduit en chiffres ou en texte, par exemple un code produit, un numéro de suivi ou l'adresse d'un site web.</p>
<p>Comme il est lu par une machine, le code-barres est bien plus rapide et beaucoup moins sujet aux erreurs que la saisie manuelle d'un code. C'est pourquoi on l'utilise aux caisses, dans les entrepôts, les hôpitaux, sur les billets et jusque sur les emballages alimentaires.</p>

<h2>Brève histoire du code-barres</h2>
<p>L'idée du code-barres a été brevetée en 1952 par Norman Joseph Woodland et Bernard Silver aux États-Unis. Le code-barres n'a réellement été utilisé en magasin qu'en 1974, lorsqu'un paquet de chewing-gums a été scanné avec un code UPC dans un supermarché de l'Ohio. Depuis, les codes-barres se sont répandus dans le monde entier et sont aujourd'hui gérés à l'échelle mondiale par une organisation de normalisation appelée GS1.</p>

<h2>Comment fonctionne un code-barres ?</h2>
<p>Le scanner éclaire le code-barres, puis lit la lumière réfléchie. Les zones sombres réfléchissent peu de lumière, les zones claires en réfléchissent beaucoup. Cette différence est convertie en une suite de 0 et de 1, puis comparée aux règles du type de code-barres concerné. De nombreux codes-barres comportent aussi une <strong>clé de contrôle</strong> (check digit), c'est-à-dire un dernier chiffre calculé à partir des chiffres précédents. Si le résultat du calcul ne correspond pas, le scanner sait qu'il y a une erreur et rejette la lecture.</p>
<p>Le code-barres lui-même ne contient généralement qu'un code. Les informations comme le nom ou le prix du produit sont enregistrées dans le système de caisse ou dans une base de données, puis retrouvées à partir de ce code.</p>

<h2>Les types de codes-barres les plus courants</h2>
<p>De manière générale, les codes-barres se divisent en deux grandes familles :</p>
<ul>
  <li><strong>Codes-barres 1D (linéaires)</strong> : ils se composent de barres verticales lues de gauche à droite. Par exemple <a href="/?type=ean13">EAN-13</a> et <a href="/?type=upca">UPC-A</a> pour les produits de distribution, ainsi que <a href="/?type=code128">Code 128</a> et <a href="/?type=code39">Code 39</a> pour la logistique et les entrepôts.</li>
  <li><strong>Codes-barres 2D</strong> : ils se composent d'un motif de carrés qui stocke les données dans deux directions et peut donc en contenir beaucoup plus. Par exemple <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> et <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Il existe en outre des codes-barres spécifiques à la poste et à l'expédition, à la santé, ainsi que les standards GS1 pour la chaîne d'approvisionnement. Vous trouverez une explication plus détaillée de leurs différences dans l'article <a href="/artikel/perbedaan-barcode-1d-dan-2d">Différence entre codes-barres 1D et 2D</a>.</p>

<h2>À quoi servent les codes-barres ?</h2>
<ul>
  <li><strong>Commerce de détail</strong> : accélérer le passage en caisse et enregistrer automatiquement les stocks.</li>
  <li><strong>Entrepôts et expédition</strong> : suivre les marchandises et les colis d'un endroit à un autre.</li>
  <li><strong>Billets et événements</strong> : vérifier l'authenticité d'un billet d'un simple scan.</li>
  <li><strong>Marketing</strong> : un QR Code sur une brochure ou un emballage mène directement à votre site, à votre menu ou à votre WhatsApp.</li>
</ul>

<h2>Créer vous-même un code-barres</h2>
<p>Vous n'avez pas besoin d'une application payante pour créer un code-barres. Sur <a href="/">I Need Barcode</a>, choisissez le type de code-barres, saisissez les données, puis téléchargez le résultat sous forme d'image PNG. Plus de 100 types sont disponibles, tous gratuits et sans inscription.</p>
`
};
