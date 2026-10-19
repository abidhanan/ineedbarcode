// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Com obtenir un codi de barres EAN-13 per als productes de les petites empreses",
  desc: "Vol que el seu producte arribi a botigues de proximitat o supermercats? Descobreixi què signifiquen els números de l'EAN-13, com registrar un número oficial a GS1 Indonesia i com imprimir-lo.",
  tags: ["Negocis", "Venda al detall"],
  coverCaption: "Els envasos de productes de venda al detall necessiten un codi de barres EAN-13 registrat.",
  inlineCaption: "Les botigues reconeixen el producte pel número EAN-13 al seu sistema de caixa.",
  faq: [
    ["Puc crear el meu propi número EAN-13?", "La imatge del codi de barres la pot crear vostè mateix, però convé que el número sigui oficial de GS1. Un número inventat pot coincidir amb el d'un altre producte i les botigues el poden rebutjar."],
    ["Cada variant del producte necessita un codi de barres diferent?", "Sí. Cada variant diferent, per exemple amb un altre sabor, una altra mida o un altre contingut de l'envàs, necessita el seu propi número EAN-13."],
    ["Què és el dígit de control de l'EAN-13?", "El dígit de control és el 13è número, que es calcula a partir dels 12 números anteriors. El lector el fa servir per assegurar-se que el codi de barres s'ha llegit correctament. El generador d'I Need Barcode el calcula automàticament si introdueix 12 dígits."]
  ],
  body: `
<p>Si vol vendre el seu producte en botigues de proximitat, supermercats o grans plataformes de venda en línia, normalment li demanaran que hi inclogui un codi de barres <strong>EAN-13</strong> a l'envàs. Aquest codi de barres conté 13 dígits numèrics que són la identitat única del seu producte arreu del món.</p>

<h2>El significat dels 13 dígits de l'EAN-13</h2>
<ul>
  <li><strong>Prefix GS1</strong>: els tres primers dígits indiquen l'organització GS1 que ha emès el número. Els números emesos per GS1 Indonesia comencen per <strong>899</strong>.</li>
  <li><strong>Número de l'empresa</strong>: la identificació de la seva empresa, que s'assigna en el moment del registre.</li>
  <li><strong>Número del producte</strong>: l'estableix la mateixa empresa per a cada variant del producte, per exemple amb un sabor o una mida diferents.</li>
  <li><strong>Dígit de control</strong>: l'últim dígit, que es calcula automàticament a partir dels 12 dígits anteriors per evitar errors de lectura.</li>
</ul>

<h2>Per què cal un número oficial?</h2>
<p>Qualsevol persona pot dibuixar un codi de barres EAN-13, però el <strong>número</strong> ha d'estar registrat. Les botigues fan servir aquest número per reconèixer el producte als seus sistemes. Si s'inventa un número, pot coincidir amb el producte d'una altra empresa i el poden rebutjar quan el producte es doni d'alta a la botiga.</p>

<h2>Com registrar un número a GS1 Indonesia</h2>
<ol>
  <li>Prepari els documents de l'empresa, com ara el NIB (número de registre empresarial d'Indonèsia) i el NPWP (número d'identificació fiscal), i també la llista de productes que portaran codi de barres.</li>
  <li>Registri l'empresa a través del lloc web oficial de GS1 Indonesia i triï la quantitat de números que necessita.</li>
  <li>Pagui la taxa de registre i la quota anual d'acord amb les condicions vigents.</li>
  <li>Un cop aprovada la sol·licitud, rebrà el número de l'empresa i podrà crear números per a cada producte.</li>
</ol>
<p>Els requisits i les tarifes poden canviar, així que consulti sempre la informació més recent directament al lloc web de GS1 Indonesia.</p>

<h2>Crear la imatge del codi de barres</h2>
<p>Quan tingui el número, obri el <a href="/?type=ean13">generador d'EAN-13</a> i introdueixi els 12 o 13 dígits del número del seu producte. Si n'introdueix 12, el dígit de control es calcularà automàticament. Asseguri's que l'opció de text a sota del codi de barres estigui activada perquè s'imprimeixin els números i descarregui'l com a PNG.</p>

<h2>Consells per imprimir-lo a l'envàs</h2>
<ul>
  <li>Utilitzi barres negres o blau marí sobre fons blanc. Eviti el vermell per a les barres, perquè molts lectors de caixa fan servir llum vermella i les barres vermelles no es llegeixen.</li>
  <li>No redueixi excessivament el codi de barres. La mida estàndard de l'EAN-13 és d'uns 37,3 × 25,9 mm i es pot reduir fins a aproximadament el 80%. Més informació a la <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de mides de codis de barres</a>.</li>
  <li>Deixi un espai buit a l'esquerra i a la dreta del codi de barres i eviti col·locar-lo en plecs o unions de l'envàs.</li>
  <li>Provi la impressió amb un lector abans d'imprimir en grans quantitats.</li>
</ul>
<p>Per als productes que es venen a l'Amèrica del Nord, també és possible que li demanin l'<a href="/?type=upca">UPC-A</a>, que conté 12 dígits.</p>
`
};
