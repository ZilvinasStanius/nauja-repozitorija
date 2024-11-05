// every, some

//some metodas nustato kriteriju taikoma visiems elementams , je bent vineam masyvo elementui
// kriterijus atitinka, galiausiai rezultatas buna true
const ugiai = [1.87, 2.1, 1.62, 1.45, 1.95, 1.92];

const arYraAukstesniuNei2m = ugiai.some((ugis) => ugis > 2.0);
console.log(arYraAukstesniuNei2m); //true
//true arba false reiksme

//every metodas nustato kriteriju kuris yra taikomas visiems elementams
// jei bent vienas masyvo elementas  neatitinka kriterijauus , rezultatas buna false

const ugiai2 = [2.87, 2.1, 2.62, 2.45, 2.95, 2.92];
const arVisiAukstesniNeiDuMetrai = ugiai2.every((ugis) => ugis > 2.0);
console.log(arVisiAukstesniNeiDuMetrai);
