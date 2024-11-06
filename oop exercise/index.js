/* *Basic Class and Object Creation
Task: Create a Car class with properties like brand, model, and year. Add a method called getCarInfo() that returns a string with the car's details.
Goal: Practice creating a basic class and initializing objects with different properties.
Extension: Create multiple car objects and store them in an array. Write a method to filter the cars by a specific year.*/

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.allCars = [];
//     this.carInfo = [];
//   }

//   getCarInfo() {
//     return `${this.brand} ${this.model} ${this.year}`;
//   }

//   putAllCars(car) {
//     return this.allCars.push(car);
//   }

//   filterCarByYear(year) {
//     const rez = this.allCars.filter((value, index) => value.year === year);
//     return rez.map((car) => car.getCarInfo());
//   }
// }

// const cars = new Car('Audi', 'A6', 2015);
// const cars1 = new Car('Dodge', 'Challenger', 2013);
// const cars2 = new Car('Dodge', 'Charger', 2008);
// const cars3 = new Car('Dodge', 'Durango', 2008);
// // const stringLine = cars.getCarInfo(cars);

// cars.putAllCars(cars);
// cars.putAllCars(cars1);
// cars.putAllCars(cars2);
// cars.putAllCars(cars3);
// console.log(cars.allCars);
// // console.log(stringLine);
// console.log(cars.filterCarByYear(2008));

/* Inventory System
Task: Create a Product class with properties name, price, and quantity. Add methods to increase and decrease the quantity and to calculate the total value of a specific product in inventory.
Goal: Learn to manipulate object properties with methods.
Extension: Create an Inventory class that holds a list of products. Add methods to add a product, remove a product, and calculate the total inventory value. */

// class Product {
//   constructor(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   addProduct(number) {
//     this.quantity += number;
//   }
//   removeProduct(number) {
//     if (!this.quantity - number >= 0) {
//       this.quantity -= number;
//     } else console.error('cant remove more then current quantity');
//   }
//   get totalValue() {
//     return this.quantity * this.price;
//   }
// }

// const x = new Product('lempa', 2, 5);
// const x1 = new Product('vaza', 2, 5);
// const x2 = new Product('stalas', 2, 20);
// // console.log(x);
// // x.addProduct(30);

// // x.addProduct(100);

// // console.log(x.totalValue);
// // console.log(x1);

// class ProductList {
//   constructor() {
//     this.productList = [];
//   }

//   addProduct(product) {
//     if (product instanceof Product) {
//       this.productList.push(product);
//     } else console.error('Produckt is not from Produckts.');
//   }

//   get totalInvetoryValue() {
//     return this.calculateAllInvetoryValue();
//   }
//   calculateAllInvetoryValue() {
//     return this.productList.reduce(
//       (accumulator, value) => accumulator + value.totalValue,
//       0
//     );
//   }

//   removeProductFromlist(name) {
//     const index = this.productList.findIndex((value) => value.name === name);
//     if (index !== -1) {
//       this.productList.splice(index, 1);
//       console.log(`You removed "${name}" from product list`);
//     } else if (name === '' || name === undefined) {
//       console.error(` product you eneterd is not valid`);
//     } else {
//       console.error(
//         `there is no "${name}" on product list, or product you eneterd is not valid`
//       );
//     }
//   }
// }

// const t = new ProductList();
// t.addProduct(x);
// t.addProduct(x1);
// t.addProduct(x2);
// console.log(t.totalInvetoryValue);
// console.log(t);
// t.removeProductFromlist('vaza');
// console.log(t);

/* 3. Library Management
Task: Design a Book class with properties title, author, and isAvailable (boolean). Add methods to borrow and return the book, which will change isAvailable.
Goal: Practice methods that modify properties and implement basic control flow.
Extension: Create a Library class that holds an array of books. Add methods to search for a book by title, display all available books, and show borrowed books.
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  get bookDescription() {
    return `Book Title : ${this.title}, Author: ${this.author} `;
  }
  borrowBook() {
    if (this.isAvailable === false) {
      console.error('book is already taken');
    } else {
      this.isAvailable = false;
      console.log(`you borrowed book "${this.title}"`);
    }
  }
  returnBook() {
    if (this.isAvailable === true) {
      console.error('You already gave back book');
    } else {
      this.isAvailable = true;
      console.log(`you gave back book "${this.title}"`);
    }
  }
}

const book = new Book('Dark', 'Anthon Rivers');
const book2 = new Book('GET OUT', 'Ana Shein');
const book3 = new Book('Life', 'Ben Ly');
const book4 = new Book('Sleep deep', 'Trevor Hops');
const book5 = new Book('Forest', 'Ted Mosby');
// console.log(book);
book.borrowBook(book4);
// book.borrowBook();
// book.returnBook(book4);
// book.returnBook();

class Library {
  constructor() {
    this.bookList = [];
  }

  addBookToList(book) {
    if (book instanceof Book) {
      this.bookList.push(book);
    } else console.error('This book is not from library');
  }
  searchBook(title) {
    const book = this.bookList.find((book) => book.title === title);
    if (book === undefined || title === '') {
      console.error('wrong book');
    } else return book.bookDescription;
  }
  availableBooksList() {
    const availableBooks = this.bookList.filter(
      (theBook) => theBook.isAvailable === true
    );
    return availableBooks.map((book) => `${book.bookDescription}`);
  }
  borrowedBookList() {
    const availableBooks = this.bookList.filter(
      (theBook) => theBook.isAvailable === false
    );
    return availableBooks.map((book) => `${book.bookDescription}`);
  }
}

const library = new Library();
library.addBookToList(book);
library.addBookToList(book2);
library.addBookToList(book3);
library.addBookToList(book4);
library.addBookToList(book5);

console.log(library.availableBooksList());
console.log(library.borrowedBookList());
console.log(library.searchBook('Life'));
