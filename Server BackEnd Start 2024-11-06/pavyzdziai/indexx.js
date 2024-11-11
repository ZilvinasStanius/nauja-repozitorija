// fs - file system
import * as fs from 'fs';
// const fs = require('fs');
// failo perskaitymas
// fs.readFile('failas.txt', (err, data) => {
//   console.log(err);
//   // lietuviu kalbai naudojama utf-8
//   console.log(data.toString('utf-8'));
// });
// failo atnaujinimas / sukurimas
// fs.appendFile('failas.txt', '\nPapildoma informacija faile', (err) => {
//   if (err) throw new Error('ivyko klaida atnaujinant faila');
//   console.log('Failas sekmingai atnaujintas');
// });
// // failo istrinimas
// fs.unlink('failas.txt', (err) => {
//   if (err) throw new Error('Ivyko klaida');
//   console.log('Failas istrintas');
// });

// perrasyti visa faila/ sukurti faila:
fs.writeFile('failas.txt', 'naujas tekstas', (err) => {
  if (err) throw new Error('Klaida');
  console.log('failas perrasytas');
});
