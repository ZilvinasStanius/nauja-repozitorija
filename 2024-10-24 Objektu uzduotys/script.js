// let person = {
//   name: 'Alice',
//   greet: function () {
//     console.log(`Hello ` + this.name); /// Geroji praktika this kreipiasi i butent ta obijekta viduje
//   },
// };

// // person.greet();
// // function obj(name, age, lastName, email, adress) {
// //   (this.name = name),
// //     (this.age = age),
// //     (this.lastName = lastName),
// //     (this.email = email),
// //     (this.adress = adress);
// // }

// // const x = new obj('audrius', '20', 'jebus', 'jebus@gmail.com', 'klaipeda');
// // console.log(x);

// // console.log(Object.entries(x));
// // const y = Object.entries(x);
// // console.log(typeof y);

// const obis = {
//   'first name': 'Jebus',
//   age: 20,
// };

// obis['first name'] = 'alex';

// console.log(obis);

//____________________________________________________________________________________________________

/// Užduotyss::

///Užduotis 1: Sukurkite tuščią objektą pavadinimu car ir pridėkite jame savybes:
// brand, model, ir year
const car = {
  brand: 'Dodge',
  model: 'Challenger',
  year: 2016,
};

// Užduotis 2: Sukurkite metodą, kuris atspausdins automobilio brand savybę.
car.brandName = function () {
  console.log(this.brand);
};
car.brandName();

//Užduotis 3: Sukurkite metodą addProperty, kuris pridės naują savybę į objektą dinamiškai.

car.addProperty = function (property, value) {
  this[property] = value;
};

car.addProperty('engine', 6.2);
console.log(car);

//Užduotis 4: Patikrinkite, ar automobilio objektas turi savybę model, naudodami hasOwnProperty.
console.log(car.hasOwnProperty('model'));

//Užduotis 5: Sukurkite funkciją, kuri grąžins automobilio objekto visų savybių raktus.
function allKeys(obj) {
  console.log(Object.keys(obj));
}

allKeys(car);
//Užduotis 6: Sukurkite funkciją, kuri grąžins visų automobilio objekto savybių reikšmes.
function allValues(obj) {
  console.log(Object.values(obj));
}

allValues(car);
//Užduotis 7: Naudodami Object.assign(), nukopijuokite car objektą į naują objektą.

const carCopy = Object.assign({}, car);
console.log(carCopy);

//Užduotis 8: Sukurkite metodą, kuris skaičiuos automobilio objekto visų savybių skaičių.
console.log(Object.entries(car).length);

//// Užduotis 9: Sukurkite metodą, kuris pašalins savybę iš objekto.
car.deletePoperty = function (property) {
  delete this[property];
};
car.deletePoperty('brand');
console.log(car);
//// Užduotis 10: Sukurkite metodą, kuris atnaujins esamą objekto savybę.
car.changeProperty = function (property, value) {
  this[property] = value;
};
car.changeProperty('model', 'Charger');
console.log(car);

//Užduotis 11: Sukurkite metodą, kuris sukurs automobilio objekto kopiją
//naudojant Object.assign.
function cloneObj(oldObj) {
  const newObj = {};
  Object.assign(newObj, oldObj);
  return newObj;
}
const newOby = cloneObj(car);

console.log(newOby);
//Testing____|
// const newObj = {};
// Object.assign(newObj, car);

// console.log(newObj);

//Užduotis 12: Patikrinkite, ar automobilio objektas yra tuščias (neturi savybių).
const testuoju = {};
function isEmpty(obj) {
  return Object.values(obj).length === 0;
}
console.log(isEmpty(car));

//Užduotis 13: Sukurkite įdėtą objektą engine su savybėmis type ir horsepower,
//ir pridėkite jį į automobilio objektą.

const engine = {
  type: 'Benzin',
  horsepower: 797,
};

Object.assign(car, engine);
console.log(car);
//Alternatyva, jeigu nenaudojamas let kintamasis
// let b = { a: 1, b: 2 };
// let c = { c: 3, d: 4 };

// b = {
//   ...b,
//   ...c,
// };
// console.log(b);

//Užduotis 14: Sukurkite metodą, kuris giliai kopijuos automobilio objektą (deep copy).
// alternatyvus, structuredClone(obj);

const deepClonedObj = JSON.parse(JSON.stringify(car));

console.log(deepClonedObj);
//Užduotis 15: Pridėkite papildomą dinaminę savybę, pavyzdžiui, color, naudojant skliaustų notaciją.

car['color'] = 'black';
console.log(car);

// Užduotis 16: Pridėkite metodą, kuris aprašys automobilio objektą naudojant esamas savybes, atspausdinant automobilio informaciją.

const tt = Object.entries(car);
console.log(tt);

//Užduotis 17: Sukurkite konstruktoriaus funkciją Car, kuri priima brand, model ir year, ir sukurkite naują automobilio objektą.

function obj(brand, model, year) {
  (this.brand = brand), (this.model = model), (this.year = year);
}

const newCarObj = new obj('Audi', 'A7', '2015');
console.log(newCarObj);

// /Užduotis 18: Pridėkite metodą į Car konstruktorių, kuris atspausdins informaciją apie automobilį.
const n = Object.entries(newCarObj);
console.log(n);

//Užduotis 19: Patikrinkite, ar automobilio objektas turi tam tikrą savybę, naudodami in operatorių.

console.log('model' in car);

//Užduotis 20: Sukurkite automobilio objektą ir užšaldykite jį (Object.freeze()), kad savybės nebūtų keičiamos. */
const car1 = {
  brand: 'Audi',
  model: 'A6',
  year: 2016,
};

Object.freeze(car1);
car1.brand = 'BMW';
console.log(car1);
