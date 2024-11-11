// IO - Input/Output
import * as fs from 'fs';
// 1. funkcija tam kad gauti failo turinį JSON formatu.
export function readFromUsersFile() {
  const resultEncoded = fs.readFileSync('./users.json', 'utf-8');
  const stringifiedJSON = resultEncoded.toString();
  return JSON.parse(stringifiedJSON);
}

// 2. funkcija tam kad perrašyti visą failo turinį JSON formatu.
export function writeToUsersFile(users) {
  fs.writeFileSync('./users.json', JSON.stringify(users));
}
