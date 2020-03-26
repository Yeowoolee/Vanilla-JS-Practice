// EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'

// GETELEMENTBYCLASSNAME
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// 이렇게 하면 에러발생
// items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// TAGNAME
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// 쿼리셀렉터 돔객체 선택 방법
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'hello';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECROT ALL
// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// 돔 스타일, 텍스트 등 변경
const itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElment
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// 돔객체 만들기

// //create a div
// const newDiv = document.createElement('div');
// //addclass
// newDiv.className = 'hello';
// //addid
// newDiv.id = 'hello1';
// //addatter
// newDiv.setAttribute('title', 'hello div');
// //create text node
// const newDivText = document.createTextNode('hello world');
// //add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'red';

// container.insertBefore(newDiv, h1);

//이벤트

// const button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(event){
//     console.log('Button clicked');
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.id);
//     console.log(event.target.classList);
//     const output = document.getElementById('output');
//     output.innerHTML = '<h3>'+event.target.id+'</h3>';

//     console.log(event.type);

//     console.log(event.clientX);
//     console.log(event.clientY);

//     console.log(event.offsetX);
//     console.log(event.offsetY);

//     console.log(event.altKey);
//     console.log(event.ctrlKey);
//     console.log(event.shiftKey);
// }


const button = document.getElementById('button');
const box = document.querySelector('.box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);
// const cngbody = document.body; 

const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent); 
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(event){
    event.preventDefault();
    console.log('EVENT TYPE: '+event.type);
    

    // console.log(event.target.value);
    // document.querySelector('#output').innerHTML = `<h3>${event.target.value}</h3>`
    // output.innerHTML = '<h3>MouseX: ' +event.offsetX+ '</h3><h3>MouseY: '+event.offsetY+'</h3>';

    // cngbody.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},40)`

}