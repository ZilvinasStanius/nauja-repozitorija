// //Klases deklaravimas panasiai kaip funkcijos deklaravimas..
// //Konstruktorius
// export default class Profile {
//   //Privatus laukelis turi buti deklaruotas pradzioje su #// jautri info kaip passwordas
//   #password;
//   #isLoggedIn;
//   #username;
//   #slug;
//   //Cia daromas naujas objektas naudojan konstruktoriu
//   constructor(newUsername, newPassword) {
//     this.#username = newUsername;
//     this.#password = newPassword;
//     //padaro username mazosiom raidem kad veiktu vedant
//     this.#slug = newUsername.toLowerCase();
//     this.#isLoggedIn = false;
//   }
//   //Get yra read only reiksme gauna privataus laukelio reiksme isoreje
//   get isLoggedIn() {
//     return this.#isLoggedIn;
//   }
//   get username() {
//     return this.#username;
//   }
//   get slug() {
//     return this.#slug;
//   }

//   set username(newUsername) {
//     this.#username = newUsername;
//     this.#slug = newUsername.toLowerCase();
//   }

//   //kuriamas objekto metodas
//   login(enteredPassword) {
//     if (enteredPassword === this.#password) {
//       console.log('Sekmingai prisijungete');
//       this.#isLoggedIn = true;
//     } else {
//       console.log('Prisijungimo duomenys neteisingi!');
//     }
//   }
// }

export default class Rectangle {
  #plotas;
  #perimetras;
  #plotis;
  #aukstis;
  constructor(plotis, aukstis) {
    this.#plotis = plotis;
    this.#aukstis = aukstis;
    this.#perimetras = 2 * (aukstis + plotis);
    this.#plotas = plotis * aukstis;
  }

  get plotis() {
    return this.#plotis;
  }
  get aukstis() {
    return this.#aukstis;
  }

  get perimetras() {
    return this.#perimetras;
  }

  get plotas() {
    return this.#plotas;
  }

  set plotis(newplotis) {
    this.#plotis = newplotis;
    this.#plotas = newplotis * this.#aukstis;
    this.#perimetras = 2 * (this.#aukstis + newplotis);
  }

  set aukstis(newAukstis) {
    this.#aukstis = newAukstis;
    this.#plotas = this.#plotis * newAukstis;
    this.#perimetras = 2 * (newAukstis + this.plotis);
  }
}
