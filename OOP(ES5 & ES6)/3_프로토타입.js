// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// //프로토타입으로 getSummary만들기
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// // getAge
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }

// //Revise / Cnage year
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revise = true;
// }

// const book1 = new Book('Book One', 'Jinho', '2020');
// const book2 = new Book('Book Two', 'Jinho', '2019');

// console.log(book2.getAge());
// book2.revise('2018');
// console.log(book2)