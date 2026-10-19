// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 motius pels quals un codi de barres no es llegeix i com solucionar-ho",
  desc: "El codi de barres o el QR Code no es pot escanejar? Consulti les set causes més freqüents, des del contrast de colors fins a la mida, i com corregir-les.",
  tags: ["Consells", "Codis de barres"],
  coverCaption: "El contrast i la mida determinen si un QR Code és fàcil d'escanejar.",
  inlineCaption: "Al magatzem, un codi de barres que no es llegeix alenteix la feina.",
  faq: [
    ["Per què el QR Code es llegeix amb un mòbil però no amb un altre?", "Les càmeres i les aplicacions d'escaneig tenen capacitats diferents. Els QR Codes massa petits, amb poc contrast o amb els colors invertits fallen més sovint en alguns mòbils. Provi'ls amb diversos mòbils abans d'imprimir."],
    ["Es poden llegir els codis de barres de colors?", "Sí, sempre que el color sigui fosc sobre un fons clar. Eviti el vermell per a les barres, perquè molts lectors de caixa fan servir llum vermella."],
    ["Com es pot comprovar si un codi de barres és correcte?", "Escanegi la impressió amb diversos mòbils o lectors i asseguri's que les dades llegides són exactament iguals a les que ha introduït."]
  ],
  body: `
<p>No hi ha res més frustrant que imprimir centenars de fulls amb un codi de barres i descobrir després que no es pot escanejar. La bona notícia és que la causa sol ser senzilla i fàcil d'evitar. A continuació trobarà les set causes més freqüents.</p>

<h2>1. Contrast de colors massa baix</h2>
<p>El lector detecta la diferència entre fosc i clar. Un codi de barres gris clar sobre blanc, o blau marí sobre negre, és difícil de distingir. <strong>Solució:</strong> utilitzi un color fosc sobre un fons clar. Negre sobre blanc és l'opció més segura.</p>

<h2>2. Colors invertits o color vermell</h2>
<p>No tots els lectors admeten un codi de barres clar sobre un fons fosc. A més, molts lectors de caixa fan servir llum vermella, de manera que les barres vermelles semblen iguals que el fons blanc. <strong>Solució:</strong> eviti el vermell per a les barres o els mòduls del codi de barres i no n'inverteixi els colors.</p>

<h2>3. Mida massa petita</h2>
<p>La càmera necessita prou píxels per reconèixer cada mòdul. <strong>Solució:</strong> faci més gran el codi de barres. Per a un QR Code que s'escaneja de prop, utilitzi com a mínim uns 2 × 2 cm. Consulti la <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de mides d'impressió</a>.</p>

<h2>4. No hi ha zona de silenci</h2>
<p>Un codi de barres enganxat a imatges, text o a la vora del paper és difícil de separar del que l'envolta. <strong>Solució:</strong> deixi un espai buit al voltant del codi de barres, sobretot a l'esquerra i a la dreta dels codis de barres lineals.</p>

<h2>5. Imatge borrosa o distorsionada</h2>
<p>Un codi de barres ampliat a partir d'una imatge petita, desat com a JPG de baixa qualitat o estirat de manera desproporcionada perd la seva forma. <strong>Solució:</strong> descarregui'l amb una mida de mòdul més gran en format PNG i canviï'n sempre la mida de manera proporcional.</p>

<h2>6. Dades incorrectes o no adequades al tipus</h2>
<p>Cada tipus de codi de barres té les seves regles. L'EAN-13, per exemple, només accepta 12 o 13 dígits numèrics amb el dígit de control correcte. Un enllaç mal escrit també fa que el QR Code es llegeixi però no obri res. <strong>Solució:</strong> revisi les dades abans d'imprimir. El generador d'<a href="/">I Need Barcode</a> mostra un missatge si les dades no compleixen les regles del tipus de codi de barres triat.</p>

<h2>7. Superfície i il·luminació</h2>
<p>Els materials brillants, el plàstic transparent, els plecs i les superfícies corbes poden reflectir la llum o deformar el codi de barres. <strong>Solució:</strong> imprimeixi sobre una superfície plana i mat i provi-ho amb les condicions de llum reals.</p>

<h2>Quant als QR Codes amb disseny</h2>
<p>Un QR Code amb forma, colors o marc es continua podent escanejar sempre que els tres quadrats de referència de les cantonades estiguin intactes i el contrast sigui suficient. Més informació a <a href="/artikel/desain-qr-code-kreatif">disseny creatiu de QR Code que es continua podent llegir</a>.</p>
<p>El millor hàbit: <strong>provi sempre una impressió</strong> amb diversos mòbils i lectors abans d'imprimir en grans quantitats.</p>
`
};
