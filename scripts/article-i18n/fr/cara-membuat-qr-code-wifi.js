// cara-membuat-qr-code-wifi
module.exports = {
  title: "Comment créer un QR Code WiFi pour que vos invités n'aient pas à saisir le mot de passe",
  desc: "Vos invités n'ont qu'à scanner un QR Code pour se connecter au WiFi. Idéal pour les cafés, les bureaux, les hébergements et la maison. Voici comment le créer et l'installer.",
  tags: ["Guide", "QR Code"],
  coverCaption: "Les données WiFi du routeur peuvent tenir dans un seul QR Code.",
  inlineCaption: "Les clients du café peuvent se connecter immédiatement sans saisir de mot de passe.",
  faq: [
    ["Tous les téléphones peuvent-ils scanner un QR Code WiFi ?", "L'appareil photo intégré des iPhone sous iOS 11 ou version ultérieure et de la plupart des appareils sous Android 10 ou version ultérieure peut le lire directement. Les téléphones plus anciens peuvent nécessiter une application de lecture de QR Code."],
    ["Un QR Code WiFi est-il sûr ?", "Toute personne qui scanne ce QR Code peut se connecter à votre WiFi. Utilisez donc un réseau invité et n'affichez pas le QR Code de votre réseau privé dans un lieu public."],
    ["Que faire si le mot de passe WiFi change ?", "Créez et réimprimez le QR Code WiFi, car l'ancien QR Code contient toujours l'ancien mot de passe."]
  ],
  body: `
<p>Épeler un long mot de passe WiFi à vos invités est souvent fastidieux, surtout s'il contient des majuscules, des chiffres et des symboles. Avec un <strong>QR Code WiFi</strong>, vos invités n'ont qu'à pointer l'appareil photo de leur téléphone vers le QR Code pour être connectés immédiatement.</p>

<h2>Comment fonctionne un QR Code WiFi</h2>
<p>Un QR Code WiFi enregistre le nom du réseau (SSID), le type de sécurité et le mot de passe dans un format spécial reconnu par les téléphones, par exemple <code>WIFI:T:WPA;S:NomDuReseau;P:MotDePasse;;</code>. L'appareil photo intégré des iPhone (iOS 11 ou version ultérieure) et de la plupart des appareils Android (Android 10 ou version ultérieure) peut le lire directement, sans application supplémentaire.</p>

<h2>Les étapes pour le créer</h2>
<ol>
  <li>Ouvrez le <a href="/?type=qrcode">générateur de QR Code</a> et sélectionnez l'onglet <strong>WiFi</strong> dans la section Saisir les données.</li>
  <li>Saisissez le <strong>nom du réseau</strong> exactement tel qu'il apparaît dans la liste des réseaux WiFi, en respectant les majuscules et les minuscules.</li>
  <li>Saisissez le <strong>mot de passe</strong>, puis choisissez le type de sécurité. La plupart des routeurs domestiques et professionnels utilisent WPA/WPA2/WPA3.</li>
  <li>Cochez <strong>Réseau masqué</strong> si le nom de votre WiFi n'apparaît pas dans la liste.</li>
  <li>Ajoutez un cadre avec un texte comme « SCAN WIFI » pour que vos invités comprennent à quoi il sert, puis téléchargez le PNG.</li>
</ol>

<h2>Où l'installer ?</h2>
<ul>
  <li>Sur une petite carte posée sur les tables d'un café ou d'un restaurant.</li>
  <li>Sur le mur d'une salle d'attente, à l'accueil ou dans une salle de réunion.</li>
  <li>Dans une chambre d'hébergement, près de la porte ou de la télévision.</li>
  <li>Sous le routeur à la maison, pour que la famille puisse facilement connecter un nouvel appareil.</li>
</ul>

<h2>Conseils de sécurité</h2>
<ul>
  <li>Utilisez un <strong>réseau invité</strong> (guest network) si votre routeur le permet, afin que vos invités ne soient pas sur le même réseau que les ordinateurs du bureau.</li>
  <li>Si le mot de passe WiFi change, créez et réimprimez le QR Code, car l'ancien contiendra l'ancien mot de passe.</li>
  <li>N'affichez pas de QR Code WiFi d'un réseau privé dans un lieu public où n'importe qui pourrait le photographier.</li>
</ul>

<h2>Si le QR Code ne permet pas de se connecter</h2>
<p>Vérifiez l'orthographe du nom du réseau et du mot de passe, car une seule lettre erronée empêche le téléphone de se connecter. Assurez-vous aussi que le type de sécurité choisi correspond aux réglages du routeur. Pour les autres problèmes de lecture, consultez <a href="/artikel/barcode-tidak-bisa-dipindai">les raisons pour lesquelles un code-barres ne se scanne pas</a>.</p>
`
};
