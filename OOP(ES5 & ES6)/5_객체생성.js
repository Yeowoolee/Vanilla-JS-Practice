// //객체의 프로토타입

// const bookProtos = {
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function(){
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// };

// //객체 생성
// // const book1 = Object.create(bookProtos);
// // book1.title = 'Book One';
// // book1.author = 'Jinho';
// // book1.year = '2020';

// const book1 = Object.create(bookProtos, {
//     title: {value: 'Book One'},
//     author: {value: 'Jinho'},
//     year: {value: '2020'}
// });


// console.log(book1.getSummary());

