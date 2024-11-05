/* 1. Stačiakampio klasė (Rectangle)
Užduotis:
Sukurkite klasę Stačiakampis (angl. Rectangle), kuri saugos stačiakampio savybes: plotis, aukštis, plotas ir perimetras.
Pradinės klasės savybės:
plotis - (width): gali būti nurodomas pradinis stačiakampio plotis;
aukštis - (height): gali būti nurodomas pradinis stačiakampio aukštis;
plotas - (area): skaičiuojamas pagal formulę: S = plotis * aukštis;
perimetras - (perimeter): skaičiuojamas pagal formulę: P=(plotis+aukštis)*2;
Keičiami laukeliai:
Keičiant plotį arba aukštį, turi būti automatiškai atnaujinamas ir plotas, ir perimetras.
Klasės metodai:
Plotis ir aukštis:
Sukurkite „setter“ ir „getter“ metodus plotui ir aukščiui.
Keičiant plotį arba aukštį, turi keistis ir plotas bei perimetras.
Ploto ir perimetro apskaičiavimas:
Sukurkite „getter“ metodus, kurie grąžina plotą ir perimetrą.
*/
class Rectangle {
  #width;
  #height;
  #area;
  #perimeter;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
    this.#area = height * width;
    this.#perimeter = 2 * (height + width);
  }

  set height(newHeight) {
    if (newHeight > 0 && newHeight !== 'string') {
      this.#height = newHeight;
      this.#area = newHeight * this.#width;
      this.#perimeter = 2 * (newHeight * this.#width);
    } else {
      console.error('Value you typed is not valid');
    }
  }

  set width(newWidth) {
    if (newWidth > 0 && newWidth !== 'string') {
      this.#width = newWidth;
      this.#area = this.#height * newWidth;
      this.#perimeter = 2 * (this.#height * newWidth);
    } else {
      console.error('Value you typed is not valid');
    }
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width;
  }

  get area() {
    return this.#area;
  }

  get perimeter() {
    return this.#perimeter;
  }
}

const reactangle = new Rectangle(10, 10);

reactangle.width = 20;
reactangle.height = 10;

console.log(reactangle.perimeter);

/* 2. Apskritimo klasė (Circle)
Užduotis:
Sukurkite klasę Apskritimas (angl. Circle), kuri saugos apskritimo savybes: spindulys ir plotas.
Pradinės klasės savybės:
spindulys - (radius): gali būti nurodomas pradinis apskritimo spindulys;
plotas - (area): skaičiuojamas pagal formulę: S =  r2
Keičiami laukeliai:
Keičiant spindulį, automatiškai turi būti atnaujinamas ir plotas.
Klasės metodai:
Spindulys:
Sukurkite „setter“ ir „getter“ metodus spinduliui.
Keičiant spindulį, turi būti perskaičiuotas plotas.
Ploto apskaičiavimas:
Sukurkite „getter“ metodą, kuris grąžina plotą.

*/
class Circle {
  #radius;
  #area;
  constructor(radius) {
    this.#radius = radius;
    this.#area = (radius * radius * Math.PI).toFixed(2);
  }

  set radius(newRadius) {
    if (newRadius > 0 && newRadius !== 'string') {
      this.#radius = newRadius;
      this.#area = (newRadius * newRadius * Math.PI).toFixed(2);
    } else {
      console.error('Value is not correct');
    }
  }

  get area() {
    return this.#area;
  }

  get radius() {
    return this.#radius;
  }
}
const ratas = new Circle(2);

ratas.radius = 10;
console.log(ratas);

/*3. Banko sąskaitos klasė (BankAccount)
Užduotis:
Sukurkite klasę BankoSąskaita (angl. BankAccount), kuri imituos banko sąskaitos funkcionalumą. Savybės: balansas ir operacijų istorija.
Pradinės klasės savybės:
balansas - (balance): gali būti nurodytas pradinis sąskaitos balansas (pagal nutylėjimą 0);
operacijų istorija - (transactionHistory): saugo įrašus apie visus įvykdytus operacijas su sąskaita.
Operacijos:
indėlis (deposit) – į sąskaitą galima pridėti pinigų;
išėmimas (withdraw) – iš sąskaitos galima išimti pinigų, jei yra pakankamai lėšų;
Klasės metodai:
Indėlis ir išėmimas:
Sukurkite metodus indėliui ir išėmimui su sąlyga, kad lėšų negalima išimti, jei balansas yra mažesnis už norimą sumą.
Operacijų istorijoje kiekviena operacija turi būti įrašyta su informacija apie operacijos tipą ir sumą.
Balansas:
Sukurkite „getter“ metodą balansui, kuris grąžina esamą sąskaitos balansą.
Operacijų istorija:
Sukurkite „getter“ metodą operacijų istorijai, kuris grąžina visų operacijų sąrašą.
 */

class BankAccount {
  #balance;
  #transactionHistory;
  constructor(balance) {
    this.#balance = balance;
    this.#transactionHistory = [];
  }

  get balance() {
    return `${this.#balance}€`;
  }
  get transactionHistory() {
    return this.#transactionHistory;
  }
  deposit(amountForDeposit) {
    if (amountForDeposit > 0 && amountForDeposit !== 'string') {
      this.#balance = this.#balance + amountForDeposit;
      this.#transactionHistory.push(
        `You dpeosited ${amountForDeposit}€ your balance now is ${
          this.#balance
        }€`
      );
    } else {
      console.error('Amount you want to deposit is not valid');
    }
  }

  withdraw(amountOfWithdraw) {
    if (amountOfWithdraw < this.#balance && amountOfWithdraw !== 'string') {
      this.#balance = this.#balance - amountOfWithdraw;
      this.#transactionHistory.push(
        `You withdrawed ${amountOfWithdraw}€ your balance now is ${
          this.#balance
        }€`
      );
    } else {
      console.error(
        'Amount you want to withdraw is not valid or even higher then your balance'
      );
    }
  }
}

const bankAccount = new BankAccount(0);

bankAccount.deposit(200);
bankAccount.withdraw(120);
bankAccount.deposit(20);
bankAccount.withdraw(50);
console.log(bankAccount.balance);
console.log(bankAccount.transactionHistory);

class Temperature {
  #celsius;
  #fahrenheit;

  constructor() {
    this.#celsius = 0;
    this.#fahrenheit = 0;
  }

  get celsius() {
    return this.#celsius;
  }

  get fahrenheit() {
    return this.#fahrenheit;
  }
  set celsius(newCelsius) {
    if (typeof newCelsius === 'number') {
      (this.#fahrenheit = newCelsius * (9 / 5) + 32).toFixed(2);
      this.#celsius = newCelsius;
    } else {
      console.error('Not valid number');
    }
  }

  set fahrenheit(newFahrenheit) {
    if (typeof newFahrenheit === 'number') {
      this.#celsius = ((newFahrenheit - 32) * (5 / 9)).toFixed(2);
      this.#fahrenheit = newFahrenheit;
    } else {
      console.error('Not valid number');
    }
  }
}

const testuoju = new Temperature();

console.log(testuoju);
testuoju.celsius = 3.55;
console.log(testuoju);
