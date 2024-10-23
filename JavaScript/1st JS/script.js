console.log('Hello world');
//Vienos eilutes komentaras
/*

Multi line komentaras ( (/*__*))

*/

//Duomenu apibrezimai

//STRING - tekstine info.
//NUMBER -skaitine info.
// BOOLEAN - logine info.
//Tekstine reiksme kintamasis:
let tekstas = 'gali buti parasyta bet kas';
console.log(tekstas);

//Skaitines reiksmes kintamasis:
let skaicius = 22;
console.log(skaicius);

//Boolean (loginio tipo info) (true//false / gali tureti tik true ir false):
let arDaugiau = 10 < 22;
console.log(arDaugiau);

let vardas = 'zilvinas';
// let gimimoMetai = 1995;

let amzius = 2024 - gimimoMetai;

let pranesimas =
  'Mano vardas yra ' + vardas + '. as gimiau ' + gimimoMetai + ' metais';
console.log(pranesimas);

// antroji dalis ----- SKAICIAI

let kainaUzVnt = 4.99;
let kiekis = 20;
let pvm = 21;

let kainaBePvm = kainaUzVnt * kiekis;
// kainaBePvm = kainaBePvm.toFixed(2); //paima pirmuosius kelis skaicius po kablelio
// kainaBePvm = kainaBePvm.toPrecision(4); // suapvalina iki 4 skaiciu po klablelio
let mokesciai = (kainaBePvm * pvm) / 100;
let galutineSuma = kainaBePvm + mokesciai;

console.log(galutineSuma.toFixed(2));
