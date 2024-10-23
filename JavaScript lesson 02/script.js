let amzius = 2024 - gimimoMetai;

//jei boolean reiksme yra true vygdomas sis kodas
// if (amzius >= 18) {
//   if (pinigai >= energetinioKaina) {
//     console.log('Parduodamas energetinis gerimas');
//   } else {
//     console.log('Neuztenka pinigu');
//   }
// } else {
//   console.log('Neparduodamas');
// }

if (amzius >= 18 && pinigai >= energetinioKaina) {
  console.log('Parduodamas Energetinis');
} else if (amzius < 18) {
  console.log('Neparduodamas');
} else {
  console.log('Neparduodamas nes neuztenka pinigu');
}

//ALT + 0128 = €
