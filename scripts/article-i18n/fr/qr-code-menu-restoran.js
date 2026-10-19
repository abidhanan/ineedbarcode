// qr-code-menu-restoran
module.exports = {
  title: "QR Code pour menu de restaurant : le guide complet",
  desc: "Un menu numérique via QR Code simplifie la vie des clients et réduit les frais d'impression. Voici comment le créer, préparer le menu et l'installer sur les tables.",
  tags: ["Entreprise", "QR Code"],
  coverCaption: "Un QR Code sur la table mène les clients directement au menu numérique.",
  inlineCaption: "Placez le QR Code à un endroit facilement accessible depuis la chaise.",
  faq: [
    ["Que vaut-il mieux utiliser pour un menu numérique : un PDF ou une page web ?", "Une page web est généralement plus agréable à lire sur téléphone et s'ouvre plus vite. Un PDF peut convenir s'il est léger et si le texte est assez grand à l'écran."],
    ["Quelle taille pour le QR Code du menu sur la table ?", "Environ 3 à 5 cm suffisent pour le scanner depuis sa chaise. Utilisez un matériau résistant aux éclaboussures et pas trop brillant."],
    ["Faut-il réimprimer le QR Code quand le menu change ?", "Non, tant que le lien reste le même. Il suffit de mettre à jour le contenu de la page ou du fichier vers lequel pointe le QR Code."]
  ],
  body: `
<p>Le menu numérique via QR Code est désormais courant dans les cafés et les restaurants. Les clients n'ont qu'à scanner le QR Code posé sur la table pour voir la liste des plats, les prix et les photos. Pour le restaurateur, cette solution réduit les frais d'impression et facilite la modification des prix ou du menu.</p>

<h2>Les avantages d'un menu QR Code</h2>
<ul>
  <li><strong>Facile à mettre à jour</strong> : modifiez un prix ou ajoutez un plat sans réimprimer la carte.</li>
  <li><strong>Économique</strong> : il suffit d'imprimer un petit QR Code pour chaque table.</li>
  <li><strong>Plus informatif</strong> : affichez des photos, des descriptions et des mentions comme épicé ou végétarien.</li>
  <li><strong>Compatible avec la commande en ligne</strong> : dirigez les clients vers un formulaire de commande ou vers WhatsApp.</li>
</ul>

<h2>Étape 1 : préparez un menu en ligne</h2>
<p>Un QR Code ne contient qu'un lien : vous avez donc besoin d'un menu accessible sur Internet. Vous pouvez par exemple utiliser une page de votre propre site, un fichier PDF partagé publiquement sur un espace de stockage en ligne, ou une page catalogue sur une plateforme de commande. Veillez à ce que le menu soit agréable à lire sur l'écran d'un téléphone : texte assez grand, photos pas trop lourdes et prix bien visibles.</p>

<h2>Étape 2 : créez le QR Code</h2>
<ol>
  <li>Copiez le lien de votre menu.</li>
  <li>Ouvrez le <a href="/?type=qrcode">générateur de QR Code</a>, sélectionnez l'onglet <strong>URL</strong>, puis collez le lien.</li>
  <li>Ajoutez dans la section Design un cadre portant la mention « MENU » ou « SCANNEZ POUR VOIR LE MENU ».</li>
  <li>Adaptez les couleurs à l'identité de votre restaurant, tout en gardant une couleur foncée sur fond clair.</li>
  <li>Téléchargez le PNG avec une taille de module suffisante pour l'impression.</li>
</ol>
<p>Utilisez un lien qui ne changera pas. Si le menu est déplacé vers une autre adresse, les QR Codes déjà imprimés ne pourront pas être mis à jour. L'explication se trouve dans l'article <a href="/artikel/apa-itu-qr-code">qu'est-ce qu'un QR Code</a>.</p>

<h2>Étape 3 : imprimez et installez</h2>
<ul>
  <li>Imprimez-le dans une taille d'au moins 3 à 5 cm environ pour qu'il se scanne facilement depuis la chaise.</li>
  <li>Utilisez un matériau résistant aux éclaboussures, comme un autocollant en vinyle ou une carte plastifiée sans brillance excessive.</li>
  <li>Placez-le à un endroit facile d'accès, par exemple sur un présentoir en acrylique au centre de la table.</li>
  <li>Ajoutez le numéro de table à côté du QR Code si les clients commandent par messagerie.</li>
</ul>

<h2>N'oubliez pas les clients sans téléphone</h2>
<p>Prévoyez un ou deux menus imprimés pour les clients qui n'ont pas de téléphone sur eux, dont la batterie est vide ou qui préfèrent lire un menu papier.</p>
<p>Vous pouvez aussi créer un <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a> pour vos clients et le placer à côté du QR Code du menu.</p>
`
};
