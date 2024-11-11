// keturios komandos naviguoti per failu struktura
//dir
//pwd
//cd
//cd aplanko pavadinimas
// npm - node pacage manager
//npm init - inicijuoja projekta

/* node . - paleidzia pagrindini direktorijos js faila aprasyta package.jsonnode failas.js - paleidzia failas.js script'ąnode - paleidžia komandinės eilutės interfeisą - konsolę */
// moduliu importavimas   require - common JS tipo javascript failams
/// import - module tipo javascript failams
// os modelio importavimas;
// pagal nutilejima NodeJS naudoja commonJS
// import * as os from os
const os = require('os');
// require('./kitasFailas');
//informacija apie procesoriu
// console.log(os.cpus());
//atminties gavimas
// console.log(os.freemem() / 1024 / 1024 / 1024); // kad gautume skaiciu gigabaitais dalinam per tris kartus viena karta kbs/ antra mbs / trecia gbs.
//Naudotojo aplankas
// console.log(os.homedir());

//Naudotojo pavadinimas
// console.log(os.hostname());
