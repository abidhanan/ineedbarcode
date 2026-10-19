// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Mida i resolució adequades d'un codi de barres per imprimir",
  desc: "Un codi de barres massa petit o borrós és difícil d'escanejar. Descobreixi la mida mínima, la regla de la distància d'escaneig i la resolució d'imatge segura per imprimir.",
  tags: ["Guia", "Impressió"],
  coverCaption: "La impressora d'etiquetes imprimeix codis de barres per a paquets i envasos.",
  inlineCaption: "La mida de l'etiqueta determina com de gran es pot imprimir el codi de barres.",
  faq: [
    ["Quina és la mida mínima d'un QR Code per imprimir?", "Per escanejar-lo de prop, uns 2 × 2 cm és el límit segur. Per a distàncies més grans, utilitzi una proporció d'aproximadament 10 : 1 entre la distància d'escaneig i l'amplada del QR Code."],
    ["Quina és la mida estàndard d'un codi de barres EAN-13?", "La mida estàndard de l'EAN-13 és d'uns 37,3 × 25,9 mm. Es pot reduir fins a aproximadament el 80% o ampliar fins al 200%."],
    ["Per què el codi de barres surt borrós un cop imprès?", "Normalment perquè la imatge era petita i s'ha ampliat, o perquè s'ha desat com a JPG de baixa qualitat. Descarregui'l amb una mida de mòdul més gran en format PNG."]
  ],
  body: `
<p>Un codi de barres que es veu bé a la pantalla no sempre es pot llegir un cop imprès. Una mida massa petita, una resolució baixa o una tinta que s'escampa poden fer que el lector no el pugui llegir. A continuació trobarà una guia perquè les seves impressions es continuïn podent llegir.</p>

<h2>Conegui el mòdul</h2>
<p>El <strong>mòdul</strong> és la unitat més petita d'un codi de barres, és a dir, un quadradet en un QR Code o la barra més estreta en un codi de barres lineal. La mida del mòdul determina com de fàcil és llegir el codi de barres. A <a href="/">I Need Barcode</a>, la mida del mòdul es pot ajustar a l'apartat Configuració: com més alt és el valor, més gran i nítida és la imatge descarregada.</p>

<h2>Mida mínima del QR Code</h2>
<ul>
  <li>Per escanejar-lo de prop (per exemple, en targetes de visita o etiquetes de producte), uns <strong>2 × 2 cm</strong> és el límit segur.</li>
  <li>Utilitzi la regla de proporció d'aproximadament <strong>10 : 1</strong>: la distància d'escaneig és aproximadament deu vegades l'amplada del QR Code. Per a un cartell que s'escaneja a 2 metres de distància, faci un QR Code d'almenys uns 20 cm.</li>
  <li>Com més dades s'hi desen, més atapeït és el patró, i per tant cal una mida més gran.</li>
</ul>

<h2>Mida del codi de barres de producte</h2>
<p>La mida estàndard de l'<a href="/?type=ean13">EAN-13</a> és d'uns 37,3 × 25,9 mm (100%). Es pot reduir fins a aproximadament el 80% o ampliar fins al 200%. Eviti escurçar massa l'alçada de les barres, perquè el lector de caixa necessita espai per llegir-lo des de diversos angles.</p>

<h2>Resolució de la imatge</h2>
<ul>
  <li>Per imprimir, procuri que cada mòdul es dibuixi amb <strong>diversos píxels sencers</strong>, i no amb fraccions de píxel. Triï una mida de mòdul més gran en descarregar-lo i redueixi'l a l'aplicació de disseny, i no al revés.</li>
  <li>Eviti ampliar una imatge petita de codi de barres, perquè les vores dels quadrats es tornen borroses o dentades.</li>
  <li>Desi-la en format PNG perquè els colors i les vores no es deteriorin com passa amb el JPG.</li>
</ul>

<h2>Zona de silenci</h2>
<p>Tots els codis de barres necessiten un espai buit al voltant, anomenat <strong>zona de silenci</strong> (quiet zone). En el QR Code, l'ideal és que tingui l'amplada de quatre mòduls. En els codis de barres lineals, l'espai buit a l'esquerra i a la dreta és molt important. No hi acosti massa textos, línies decoratives o la vora de l'envàs.</p>

<h2>Colors i materials</h2>
<ul>
  <li>Utilitzi un color fosc per al codi de barres i un color clar per al fons.</li>
  <li>Eviti els materials brillants o transparents, perquè el reflex de la llum pot interferir en la càmera.</li>
  <li>Imprimeixi sempre una mostra i provi-la amb diversos mòbils o lectors abans d'imprimir-ne moltes.</li>
</ul>
<p>Si el seu codi de barres continua sent difícil d'escanejar, consulti <a href="/artikel/barcode-tidak-bisa-dipindai">7 motius pels quals un codi de barres no es llegeix</a>.</p>
`
};
