import { addRunnerToTable } from '../DOM/runnersTable.js';
import Runner from './Runner.js';

export default class Marathon {
  #begikuSkaicius;
  #IkategorijosBegikai;
  #IIkategorijosBegikai;
  #IIIkategorijosBegikai;
  #idCounter;

  constructor() {
    this.#IkategorijosBegikai = [];
    this.#IIkategorijosBegikai = [];
    this.#IIIkategorijosBegikai = [];
    this.#idCounter = this.idGenerator();
  }
  *idGenerator(i = 0) {
    while (true) {
      i += 1;
      yield i;
    }
  }

  //   get begikuSkaicius() {
  //     return this.#begikuSkaicius;
  //   }
  get begikuSkaicius() {
    return (
      this.#IkategorijosBegikai.length +
      this.#IIkategorijosBegikai.length +
      this.#IIIkategorijosBegikai.length
    );
  }
  get IkategorijosBegikai() {
    return this.#IkategorijosBegikai;
  }

  get IIkategorijosBegikai() {
    return this.#IIkategorijosBegikai;
  }
  get IIIkategorijosBegikai() {
    return this.#IIIkategorijosBegikai;
  }

  get idCounter() {
    return this.#idCounter;
  }

  #priskirtiBegikuiKategorija(runner) {
    //I - begikai kuriu svoris <= 60kg\

    // II - begikai kuriu svoris 60< && <=90\
    //III - bekikai kuriu svoris > 90

    if (runner.weight <= 60) {
      this.#IkategorijosBegikai.push(runner);
      return 'I';
    } else if (runner.weight > 60 && runner.weight <= 90) {
      this.#IIkategorijosBegikai.push(runner);
      return 'II';
    } else {
      this.#IIIkategorijosBegikai.push(runner);
      return 'III';
    }
    // this.#begikuSkaicius++;
  }
  pridetiBegika(runner) {
    //instance of patikrina is kokios klases sudarytas objektas
    const arParametrasRunnerYraBegikas = runner instanceof Runner;
    if (!arParametrasRunnerYraBegikas) {
      console.log(
        'Pridedamas begikas privalo buti objektas sudarytas is klases runner'
      );
      return;
    }
    if (runner.id !== null) {
      console.error('Prideamas begikas jau uzregistruotas');
      return;
    }
    //Panaudojama generator funkcija kad sugeneruoti id
    const runnerId = this.#idCounter.next().value;
    //Pridejimas prie vienos is triju kategoriju
    const runnerCategory = this.#priskirtiBegikuiKategorija(runner);
    //Begikas uzregistruojamas maratonui -> perduodami laukeliai id ir category
    runner.registerToMarathon(runnerId, runnerCategory);
    addRunnerToTable(runner);
  }

  istrinti() {
    document.querySelector('#tableBody').addEventListener('click', (event) => {
      // Check if the clicked element is a delete button
      if (event.target.classList.contains('delete')) {
        // Get the runner ID from the button's data attribute
        const runnerId = +event.target.getAttribute('data-id');

        // Look through each category to find and delete the runner
        [
          this.#IkategorijosBegikai,
          this.#IIkategorijosBegikai,
          this.#IIIkategorijosBegikai,
        ].forEach((category) => {
          const index = category.findIndex((runner) => runner.id === runnerId);
          if (index !== -1) {
            // Remove the runner from the correct category array
            category.splice(index, 1);
          }
        });

        // Optionally, remove the row from the table
        event.target.closest('tr').remove();
      }
    });
  }
}
