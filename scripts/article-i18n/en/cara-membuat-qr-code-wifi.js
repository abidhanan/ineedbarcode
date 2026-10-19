// cara-membuat-qr-code-wifi
module.exports = {
  title: "How to Create a WiFi QR Code So Guests Don't Have to Type the Password",
  desc: "Guests just scan a QR Code to connect to WiFi. Ideal for cafés, offices, guesthouses, and homes. Here is how to create one and put it up.",
  tags: ["Guide", "QR Code"],
  coverCaption: "WiFi details from a router can be stored in a single QR Code.",
  inlineCaption: "Café guests can connect instantly without typing a password.",
  faq: [
    ["Can every phone scan a WiFi QR Code?", "The built-in camera on iPhones with iOS 11 or later and most phones with Android 10 or later can read it directly. Older phones may need a QR scanner app."],
    ["Is a WiFi QR Code secure?", "Anyone who scans the QR Code can connect to your WiFi. For that reason, use a guest network and do not put up a QR Code for a private network in a public place."],
    ["What should I do if the WiFi password is changed?", "Create and reprint the WiFi QR Code, because the old QR Code still contains the old password."]
  ],
  body: `
<p>Spelling out a long WiFi password to guests is often a hassle, especially when it has capital letters, numbers, and symbols. With a <strong>WiFi QR Code</strong>, guests simply point their phone camera at the QR Code and connect right away.</p>

<h2>How a WiFi QR Code works</h2>
<p>A WiFi QR Code stores the network name (SSID), security type, and password in a special format that phones recognize, for example <code>WIFI:T:WPA;S:NetworkName;P:Password;;</code>. The built-in camera on iPhones (iOS 11 or later) and most Android phones (Android 10 or later) can read it directly, without any extra app.</p>

<h2>Steps to create one</h2>
<ol>
  <li>Open the <a href="/?type=qrcode">QR Code generator</a> and select the <strong>WiFi</strong> tab in the Data section.</li>
  <li>Type the <strong>network name</strong> exactly as it appears in the WiFi list, including upper and lower case letters.</li>
  <li>Type the <strong>password</strong>, then choose the security type. Most home and office routers use WPA/WPA2/WPA3.</li>
  <li>Check <strong>Hidden network</strong> if your WiFi name is not shown in the list.</li>
  <li>Add a frame with text such as "SCAN WIFI" so guests know what it is for, then download the PNG.</li>
</ol>

<h2>Where to put it up?</h2>
<ul>
  <li>A small card on café or restaurant tables.</li>
  <li>The wall of a living room, reception area, or office meeting room.</li>
  <li>Guesthouse rooms, stuck near the door or the TV.</li>
  <li>The underside of the router at home, so family members can easily connect new devices.</li>
</ul>

<h2>Security tips</h2>
<ul>
  <li>Use a <strong>guest network</strong> if your router supports it, so guests do not join the same network as the office computers.</li>
  <li>If the WiFi password is changed, create and reprint the QR Code, because the old QR Code will contain the old password.</li>
  <li>Do not put up a WiFi QR Code for a private network in a public place where anyone can take a photo of it.</li>
</ul>

<h2>If the QR Code does not connect</h2>
<p>Double-check the spelling of the network name and password, because a single wrong letter will make the phone fail to connect. Also make sure the selected security type matches the router settings. For other scanning problems, read <a href="/artikel/barcode-tidak-bisa-dipindai">reasons a barcode won't scan</a>.</p>
`
};
