const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: 프로그램 실행 중 문제가 생겼습니다.')
            }
        }, 2000);
    });   
}
// createPost({title: 'Post three', body: 'This is post three'})
// .then(getPosts)
// .catch(err=> console.log(err));

//Async /Await
// async function init(){
//     await createPost({title: 'Post three', body: 'This is post three'});
//     getPosts();
// }
// init();

//Async /Await / Fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();

//Promise.all
// const Promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve,2000,'Goodbye'));

// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([Promise1, promise2, promise3, Promise4])
// .then(values => console.log(values));