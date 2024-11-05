// let peopleInfo = [];

// async function getApi() {
//   const promise = await fetch('https://randomuser.me/api/?results=10');
//   const response = await promise.json();
//   const rez = response.results;
//   return rez;
// }

// async function main() {
//   const rezultatai = await getApi();

//   rezultatai.forEach((personData) => {
//     const person = new People(personData);
//     peopleInfo.push(person);
//   });
//   console.log(peopleInfo);
// }

// class People {
//   constructor(data) {
//     this.name = data.name.first;
//     this.lastName = data.name.last;
//   }
// }

// main();
import { addRunnerToTable } from './DOM/runnersTable.js';
import Runner from './Classes/Runner.js';
import Marathon from './Classes/Marathon.js';

const nameInput = document.querySelector('#dalyvisName');
const lastNameInput = document.querySelector('#dalyvisSecondName');
const ageInput = document.querySelector('#dalyvisAge');
const weightInput = document.querySelector('#dalyvisWeight');

// function addRuner() {
//   const name = nameInput.value;
//   const lastName = lastNameInput.value;
//   const age = ageInput.value;
//   const weight = weightInput.value;
//   const test = new Runner(name, lastName, age, weight);

//   marathon.pridetiBegika(test);

//   addRunnerToTable(test);
//   console.log(test);

// }

// document.querySelector('.btn').addEventListener('click', addRuner);
//
// const runner2 = new Runner('Jebus', 'Kribus', 20, 102);

const marathon = new Marathon();
marathon.istrinti();
// marathon.pridetiBegika(runner2);
// marathon.pridetiBegika(runner1);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  //Uztikrina kad narsykle nesielgtu pagal iprasta nutylejima elgesi
  event.preventDefault();
  //form data kintamasis saugo formos duomenis kai forma yra issiunciama
  const formData = new FormData(form);
  //form.get gauna is laukelio pagal NAME atributa reiksme
  //   console.log(formData.get('dalyvisName'));
  const name = formData.get('dalyvisName');
  const lastName = formData.get('dalyvisSecondName');
  const age = +formData.get('dalyvisAge');
  const weight = +formData.get('dalyvisWeight');

  const newRunner = new Runner(name, lastName, age, weight);
  marathon.pridetiBegika(newRunner);
  console.log(marathon.IIIkategorijosBegikai);

  form.reset();
});

// const runner1 = new Runner('Algirdas', 'Lasiniauskas', 26, 123);
// console.log(runner1);
