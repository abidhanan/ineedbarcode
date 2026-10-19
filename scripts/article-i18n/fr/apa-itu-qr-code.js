// apa-itu-qr-code
module.exports = {
  title: "Qu'est-ce qu'un QR Code et comment fonctionne-t-il ?",
  desc: "Un QR Code peut contenir un lien, du texte et même des données WiFi, et il reste lisible même s'il est partiellement abîmé. Voici comment il fonctionne et quels sont ses avantages.",
  tags: ["Bases", "QR Code"],
  coverCaption: "Un QR Code se scanne directement avec l'appareil photo du téléphone.",
  inlineCaption: "Chaque QR Code se compose de petits carrés noirs et blancs.",
  faq: [
    ["Un QR Code peut-il expirer ?", "Un QR Code statique n'expire jamais, car ses données sont intégrées directement dans l'image. Un QR Code dynamique peut cesser de fonctionner si le service qui fournit le lien s'arrête ou si l'abonnement prend fin."],
    ["Quelle quantité de données un QR Code peut-il contenir ?", "La plus grande version d'un QR Code peut contenir jusqu'à 7 089 chiffres, soit environ 2 953 octets. Toutefois, moins il contient de données, plus il est facile à scanner."],
    ["Un QR Code reste-t-il lisible s'il est partiellement abîmé ?", "Oui. Grâce à la correction d'erreurs, un QR Code reste lisible même si environ 7 % à 30 % de sa surface est endommagée, selon le niveau de correction utilisé : L, M, Q ou H."]
  ],
  body: `
<p>Le QR Code (Quick Response Code) est un code-barres 2D de forme carrée, composé de petits carrés noirs et blancs. Contrairement au code-barres à barres, qui ne contient qu'une douzaine de chiffres, le QR Code peut contenir un lien vers un site, un long texte, un numéro de téléphone, un contact et même les données d'un réseau WiFi.</p>
<p>Le QR Code a été développé en 1994 par Denso Wave, une entreprise japonaise, pour suivre les pièces détachées automobiles en usine. Aujourd'hui, on le trouve partout, du paiement numérique aux menus de restaurant, car il se scanne directement avec l'appareil photo d'un téléphone.</p>

<h2>Les éléments d'un QR Code</h2>
<ul>
  <li><strong>Trois grands carrés dans les coins</strong> (finder pattern) : ils aident l'appareil photo à repérer le QR Code et à connaître son orientation, si bien qu'il reste lisible même scanné de biais ou à l'envers.</li>
  <li><strong>Motif d'alignement</strong> (alignment pattern) : un petit carré qui aide à lire un QR Code courbé ou vu de biais.</li>
  <li><strong>Zone de données</strong> : les petits carrés qui contiennent les informations que vous enregistrez.</li>
  <li><strong>Zone de silence</strong> (quiet zone) : l'espace vide autour du QR Code, qui permet de bien le distinguer de l'arrière-plan.</li>
</ul>

<h2>Combien de données peut-il contenir ?</h2>
<p>Le QR Code existe en 40 versions de taille. La plus grande peut contenir jusqu'à 7 089 chiffres, soit environ 2 953 octets de données. En pratique, moins vous enregistrez de données, plus les carrés sont grands et plus le QR Code est facile à scanner. C'est pourquoi un lien court vaut mieux qu'un lien très long.</p>

<h2>Lisible même abîmé</h2>
<p>Le QR Code utilise la correction d'erreurs (error correction). Il existe quatre niveaux :</p>
<ul>
  <li><strong>L</strong> : les données restent récupérables si environ 7 % du QR Code est endommagé.</li>
  <li><strong>M</strong> : environ 15 %. C'est le choix courant et équilibré.</li>
  <li><strong>Q</strong> : environ 25 %.</li>
  <li><strong>H</strong> : environ 30 %, idéal pour un QR Code qui recevra un logo ou qui sera imprimé dans un endroit facilement salissant.</li>
</ul>
<p>Plus le niveau de correction est élevé, plus il faut de carrés, et plus le motif du QR Code paraît dense.</p>

<h2>Que peut-on enregistrer dans un QR Code ?</h2>
<ul>
  <li>Un lien vers un site, une boutique en ligne ou un formulaire.</li>
  <li>Des données WiFi, pour que vos invités se connectent sans saisir le mot de passe. Consultez le guide <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Une carte de visite numérique (vCard), un e-mail, un SMS ou une conversation WhatsApp.</li>
  <li>Un lieu sur une carte et un événement.</li>
</ul>

<h2>QR Code statique et dynamique</h2>
<p>Un QR Code créé directement à partir des données est appelé <strong>QR Code statique</strong> : son contenu est intégré à l'image et ne peut pas être modifié, mais il n'expire jamais. Un QR Code <strong>dynamique</strong> contient un lien court appartenant à un service, qui redirige ensuite vers votre destination ; celle-ci peut être modifiée, mais le QR Code cessera de fonctionner si le service s'arrête. Dans la plupart des cas, un QR Code statique suffit et il est plus sûr sur le long terme.</p>

<p>Envie d'essayer ? Créez dès maintenant un <a href="/?type=qrcode">QR Code gratuit</a>, ou découvrez <a href="/artikel/cara-membuat-qr-code-gratis">comment créer un QR Code en 3 étapes</a>.</p>
`
};
