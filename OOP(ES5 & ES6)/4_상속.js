// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// };

// //프로토타입으로 getSummary만들기
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// //Book을 상속받는 메거진 함수 생성
// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;
// }
// //메거진에 프로토타입 추가
// Magazine.prototype = Object.create(Book.prototype);


// const mag1 = new Magazine('Mag One', 'Jone Doe', '2018', 'Jan');

// //메거진 프로토타입의 상속자 바꾸기 Book -> Magazine
// Magazine.prototype.constructor = Magazine;
// console.log(mag1)