// desain-qr-code-kreatif
module.exports = {
  title: "Disseny creatiu de QR Code que es continua podent escanejar",
  desc: "El QR Code pot tenir forma de cor o de cercle, un marc i colors. Descobreixi les regles perquè el disseny sigui atractiu i, alhora, fàcil d'escanejar.",
  tags: ["Disseny", "QR Code"],
  coverCaption: "Els colors fan el QR Code més atractiu, sempre que el contrast continuï sent fort.",
  inlineCaption: "El disseny d'un QR Code s'ha de provar sempre abans d'imprimir-lo.",
  faq: [
    ["Un QR Code en forma de cor es pot continuar escanejant?", "Sí. El QR Code original continua intacte al centre i la resta és només un patró decoratiu. Mentre el contrast sigui fort i la mida suficient, el QR Code es pot llegir."],
    ["Quins colors són segurs per a un QR Code?", "Els colors foscos, com el negre, el blau marí, el verd fosc, el lila o el marró fosc, sobre un fons blanc o molt clar."],
    ["Es pot afegir text o un marc al QR Code?", "Sí. Un marc amb una crida com «ESCANEJA'M» fins i tot ajuda la gent a entendre'n la funció, sempre que el marc no tapi el QR Code."]
  ],
  body: `
<p>El QR Code en blanc i negre és funcional, però sovint queda rígid en envasos, invitacions o material promocional. Amb un toc de disseny, el QR Code pot ser més atractiu sense perdre la seva funció. La clau és entendre quines parts es poden modificar i quines s'han de mantenir intactes.</p>

<h2>Forma exterior: cor, cercle i altres</h2>
<p>A l'apartat Disseny del <a href="/?type=qrcode">generador de QR Code</a>, pot triar formes com un cercle, un cor, un hexàgon, un octàgon, una estrella o un rombe. El QR Code original es manté al centre i la resta s'omple amb un patró decoratiu fins a formar la forma triada. El patró decoratiu no conté dades, de manera que no interfereix en l'escaneig sempre que hi hagi un espai buit al voltant del QR Code original.</p>

<h2>Estil dels punts</h2>
<p>Els quadrats del QR Code es poden transformar en formes arrodonides o en punts rodons. Perquè continuï sent fàcil d'escanejar, convé que els tres quadrats grans de les cantonades (finder pattern) es mantinguin com a quadrats sencers, perquè són precisament les parts que la càmera busca primer. El nostre generador sempre dibuixa aquestes parts com a quadrats sencers, com a molt amb les cantonades arrodonides, sigui quin sigui l'estil de punts que triï.</p>

<h2>Colors</h2>
<ul>
  <li>Utilitzi un color <strong>fosc</strong> per al QR Code i un color <strong>clar</strong> per al fons. El blau marí, el verd fosc, el lila o el marró fosc solen ser segurs.</li>
  <li>Eviti els colors pàl·lids per al QR Code, com el groc, el rosa pàl·lid o el gris clar.</li>
  <li>No inverteixi els colors per obtenir un QR Code clar sobre un fons fosc, perquè no totes les aplicacions d'escaneig ho admeten.</li>
</ul>

<h2>Marc i crida a l'acció</h2>
<p>Els marcs amb crides com "ESCANEJA'M", "CARTA" o "SCAN WIFI" ajuden de manera demostrada la gent a entendre la funció del QR Code. Pot triar un marc amb etiqueta a sota, etiqueta a dalt, cantonades, bafarada, cercle o cinta, i després canviar-ne el text i els colors.</p>

<h2>Regles perquè el disseny es continuï podent llegir</h2>
<ol>
  <li>Mantingui un <strong>contrast</strong> fort entre el QR Code i el fons.</li>
  <li>Deixi els <strong>tres quadrats de referència</strong> de les cantonades ben visibles i sense tapar.</li>
  <li>Deixi un <strong>espai buit</strong> al voltant del QR Code i del marc.</li>
  <li>No redueixi excessivament un QR Code amb disseny. Formes com el cor fan que l'àrea del QR Code original sigui més petita que la mida total de la imatge.</li>
  <li><strong>Provi'l</strong> amb diversos mòbils abans d'imprimir.</li>
</ol>

<p>Si el seu disseny costa d'escanejar, torni a la configuració bàsica d'una en una amb el botó <strong>Restableix</strong> per trobar-ne la causa. Pot llegir altres causes habituals a <a href="/artikel/barcode-tidak-bisa-dipindai">7 motius pels quals un codi de barres no es llegeix</a>.</p>
`
};
