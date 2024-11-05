// Užduotis 1: Sukurkite tuščią objektą ir pridėkite jame savybes `name` ir `age`.

const person = { name: 'Algis', age: 20 };

// Užduotis 2: Sukurkite metodą, kuris atspausdins objekto `name` savybę.
person.printName = function () {
  console.log(this.name);
};
person.printName();

// Užduotis 3: Sukurkite metodą, kuris pridės naują savybę į objektą dinamiškai.
person.addProperty = function (property, value) {
  this[property] = value;
};
person.addProperty('height', 1.62);
console.log(person);

// Užduotis 4: Patikrinkite, ar objektas turi savybę `name` naudodami `hasOwnProperty`.
console.log(person.hasOwnProperty('name'));

// Užduotis 5: Sukurkite funkciją, kuri grąžins objekto visų savybių raktus.
function printAllObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(printAllObjectKeys(person));
// Užduotis 6: Sukurkite funkciją, kuri grąžins visų objekto savybių reikšmes.\

function printAllObjectValues(obj) {
  return Object.values(obj);
}
console.log(printAllObjectValues(person));

// Užduotis 7: Naudokite `Object.assign`, kad nukopijuotumėte esamą objektą į kitą objektą.
const newObject = {};
Object.assign(newObject, person);
console.log(newObject);

// Užduotis 8: Sukurkite metodą, kuris skaičiuos visų objekto savybių skaičių.
function countLengthOfObjectValues(obj) {
  return Object.values(obj).length;
}
console.log(countLengthOfObjectValues(person));

// Užduotis 9: Sukurkite metodą, kuris pašalins savybę iš objekto.
person.deleteProperty = function (property) {
  delete this[property];
};

// person.deleteProperty('name');
// console.log(person);
// Užduotis 10: Sukurkite metodą, kuris atnaujins esamą objekto savybę.

function refreshObjValue(obj, property, value) {
  return (obj[property] = value);
}
refreshObjValue(person, 'name', 'Jonas');
console.log(person);
// Užduotis 11: Sukurkite metodą, kuris sukurs objekto kopiją naudojant `Object.assign`.
function cloneObjToNewObj(oldObj) {
  const newObject = {};
  Object.assign(newObject, oldObj);
  return newObject;
}
const test = cloneObjToNewObj(person);
console.log(test);

// Užduotis 12: Patikrinkite, ar objektas yra tuščias (neturi jokių savybių).

function isEmptyObj(obj) {
  return Object.values(obj).length === 0;
}
console.log(isEmptyObj(person));
// Užduotis 13: Sukurkite įdėtą objektą `address` ir pridėkite jį į `person`.

const adress = { street: 'St. Street 96' };
Object.assign(person, adress);
console.log(person);

// Užduotis 14: Sukurkite metodą, kuris giliai kopijuos objektą (deep copy).

const deepCopy = JSON.parse(JSON.stringify(person));
console.log(deepCopy);

// Užduotis 15: Pridėkite papildomą dinaminę savybę naudojant skliaustų notaciją.

person['weight'] = '95kg';
console.log(person);

// Užduotis 16: Pridėkite metodą, kuris aprašys objektą naudojant esamas savybes.
function showObjEntries(obj) {
  return Object.entries(obj);
}

console.log(showObjEntries(deepCopy));
// Užduotis 17: Sukurkite konstruktoriaus funkciją, kuri priima `name` ir `age`, ir sukurkite naują objektą.

function obj(name, age) {
  (this.name = name), (this.age = age);
}
const naujas = new obj('Laris', 28);
console.log(naujas);

// Užduotis 18: Pridėkite metodą, kuris atspausdins informaciją apie žmogų, naudojant `Person`.
const av = Object.entries(person);

console.log(av);
// Užduotis 19: Patikrinkite, ar objektas turi tam tikrą savybę, naudodami `in` operatorių.

console.log('name' in person);

// Užduotis 20: Sukurkite objektą ir užšaldykite jį, kad savybės nebūtų keičiamos.

const person1 = { name: 'Marius', age: 30 };
Object.freeze(person1);
person1.name = 'Jonas';
console.log(person1.name);
