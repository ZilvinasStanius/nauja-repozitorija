const objektas1 = {};

// reiksmeA ir reiksmeB  -  Objekto parametras
// 1 ir "Labas"          -  Objekto parametro reikšmė
// Objektas yra kompleksiška reikšmė
const objektas2 = { reiksmeA: 1, reiksmeB: 'Labas' };

//Objektas gali laikyti ir kompleksiškas reikšmes
const objektas3 = {
  name: 'Arturas',
  age: 29,
  children: ['Ugne', 'Saulius'],
  zmona: { name: 'Asta', age: 27 },
};

//Objektas laiko kompleksiškas reikšmes pagal reference (nuorodą);
const arturoVaikai = objektas3.children;
console.log(arturoVaikai); //["Ugne", "Saulius"]

arturoVaikai.push('Tadas');
console.log(objektas3);

const arturoZmona = { ...objektas3.zmona }; //Sukuriama objekto kopija
console.log(arturoZmona);
arturoZmona.name = 'Patricija';
console.log(arturoZmona);

// Objektai gali laikyti savyje ir funkcijas. Objekte jos vadinamos metodais
const objektas4 = {
  name: 'Algirdas',
  age: 21,
  pasakytiLabas() {
    console.log(`Sveiki, aš esu ${this.name}`);
  },
  svestiGimtadieni() {
    this.age += 1;
    console.log('Issaunamos fanfaros...');
  },
};
// parseInt(4) - funkcija

objektas4.pasakytiLabas();
objektas4.name = 'Agne';
objektas4.pasakytiLabas();
objektas4.svestiGimtadieni();
console.log(objektas4);
