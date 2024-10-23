let zodis = 'tekstas';
//kintamasis.lenght parodo simboliu kieki tekste
let tekstoIlgis = zodis.length; //7 raides zodyje tekstas
//js skaiciuoja indexus nuo 0
let tamTikrasSimbolisTekste1 = zodis.charAt(0); // siuo atveju paimtu 't' raide

let tamTikrasSimbolisTekste2 = zodis.charAt(100); //error nes tera 7 simboliai, arba negausime nieko.
//alternatyva butu :
let tamTikrasSimbolisTekste3 = zodis[1]; //nereikia rasyti chartAt(..) grazinetu e raide, nes skaiciuojama yra nuo 0.

//kita alternatyva butu zodis.at(1) nenaudojam chart.

let vaisiai = 'Obuolys, Bananas, Kivis';
let antrasVaisius = vaisiai.slice(9, 16); //tarpai ir kiti simboliai irgi iskaiciuojami
//kitas panaudojimo atvejis kai nuo tam tikramo simbolio nukerpama dalis teksto
let antrasIrTrecias = vaisiai.slice(7); //obuolys nukerpamas
//galima paduoti ir negatyvu skaicius taip paduodama -skaicius butu nuo pabaigos skaiciuojami

let treciasVaisius = vaisiai.slice(-5); // butu kivis
// Nuo -14 simbolio iki -7 (nuo teksto pabaigos -14 simbolio iki -7)
antrasVaisius = vaisiai.slice(-14, -7); // grazina Bananas
// minusine ir pliusine reiksme nuo 9 iki -7
antrasVaisius = vaisiai.slice(9, -7); // Bananas

// Tekstas didziosiomis raidemis

let tekstas = 'Eur';

let tekstasDidziosiomis = tekstas.toUpperCase(); // EUR
let tekstasMaziosiomis = tekstas.toLowerCase(); // eur

//originalus teksto dydzio keitimas
tekstas.toUpperCase(); //Nekeicia originalaus, grazina tik reiksme.
tekstas = tekstas.toUpperCase(); // keicia originala. nes tekstas dabar yra lygus tekstas.toUperCase.

//tekstas kuris turi nematomu simboliu gali buti isvalytas
//' \n\t    tekstas';
//TRIM PAIANAIKINA TIK NEMATOMUS SIMBOLIUS
let nesvarusTekstas = '  \n \t Reikalingas tekstas  \n \t ';
console.log('Rezultatas:' + nesvarusTekstas.trim()); // visiems nereikalingams tarpams
console.log('Rezultatas:' + nesvarusTekstas.trimStart()); // pradzioje nereikalingiems
console.log('Rezultatas:' + nesvarusTekstas.trimEnd()); // pabaigoje nereikalingiems

// Repeat funkcija
let meilesLaiskas = 'as tave myliu';
meilesLaiskas = meilesLaiskas.repeat(100); // bus pakartojamas 100 kartu.

// kai  reikia pakeisti tam tikrs teksto dsli
let vardas = 'Antanas';
let html = `<div><b>{Vardas}</b><p>{Vardas}</p></div>`;
let rezultatas = html.replace('{Vardas}', vardas); //pakeicia pirmaji vardas elementa replaceAll pakeicia visus {vardas} elementus

//praktinis panaidojimas

// fetch('/template.txt')
//   .then((text) => text.text())
//   .then((text) => {
//     let rezultHtml = text.replaceAll('{Vardas}', 'Antanas');
//     console.log(rezultHtml);
//     document.write(rezultHtml);
//   });

// Funkcijos :

function manoFunkcija() {
  let skaicius = 5;
  skaicius += 4;
  document.write(skaicius);
}
//funkcijos iskvietimas
// manoFunkcija();

function funkcijaSuParametrais(skaicius) {
  const rezultatas = skaicius + 10;
  const elementas = document.querySelector('.rezultatas');
  elementas.innerHTML += rezultatas;
}

function gautiIvesti() {
  //Gaunamas ivesties laukelis
  const ivestiesLaukelis = document.querySelector('#vardas');
  //ivesties laukelio reiksme
  const lauklelioReiksme = ivestiesLaukelis.value;
  ivestiesLaukelis.value = '';
}
