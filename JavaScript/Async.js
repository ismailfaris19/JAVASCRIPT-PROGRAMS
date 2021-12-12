///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----// Async JS Crash Course - Callbacks, Promises, Async Await //-----//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CALLBACKS ///////////////////////////////////

//     const posts = [
//         { title: 'Post One', body: 'This is post one' },
//         { title: 'Post Two', body: 'This is post two' }
//     ];

//     function getPosts(){
//         setTimeout(() => {
//             let output = '';
//             posts.forEach((post, index) => {
//                 output += `<li>${post.title}</li>`;
//             });
//             document.body.innerHTML = output;
//         }, 1000); // run after 1 sec
//     }

//     function createPosts(post, callback) {
//         setTimeout(() =>{
//             posts.push(post);
//             callback(); // so we use callback
//         }, 2000); // run after 2 sec, so new object is not added 
//     }

// createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PROMISES ///////////////////////////////////

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000); // run after 1 sec
// }

// function createPosts(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             } else {
//                 reject('Error!!!');
//             }
//         }, 2000);
//     });
// }

// // Promise wait for the result, if it resolves, then method will continuous the flow or if it rejects, it will show uncaught promise error. 
// createPosts({ title: 'Post Three', body: 'This is post three' })
// .then(getPosts) // it run get post method
// .catch(err => console.log(err)); // it will catch error message in reject method

/* PROMISE ALL */

// let p1 = Promise.resolve('hello');
// let p2 = 100;
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'hello ');
// })
// let p4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([p1, p2, p3, p4]).then(result => console.log(result));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ASYNC / AWAIT ///////////////////////////////////

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000); 
// }

// function createPosts(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             posts.push(post);
//             const error = false;
//             if(!error){
//                 resolve();
//             } else {
//                 reject('Error!!!');
//             }
//         }, 2000);
//     });
// }

// async function init() {
//     // we only use await on expressions that returns a promise or fetching any data bcz fetch() returns a promise. 
//     await createPosts({ title: 'Post Three', body: 'This is post three' });
//     getPosts();
// }

// init();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ASYNC / AWAIT / FETCH  ///////////////////////////////////

// async function fetchUsers(){
//     // here we can use async, await bcz fetch() returns promise.
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }

// fetchUsers();


// fetch method:

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => console.log(json))


// async function:

//   async function getPostFromWeb(){
//       let onlinePic = await fetch('https://jsonplaceholder.typicode.com/photos/1');
//       let changeToJson = await onlinePic.json();
//       console.log(changeToJson);
//   }

//   async function callingFunction(){
//       await getPostFromWeb();
//       console.log("called...");
//   }

//   callingFunction();


// setTimeout method:

// function setTimeoutMethod(){
//     console.log("first");
//     setTimeout(() => {
//         console.log("second");
//     }, 2000);
//     console.log("third");
// }

// setTimeoutMethod();


// Task:

// GET ALL RECORDS

async function getAll(){
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    let convertUsers = await users.json();
    let output = '';
    convertUsers.forEach((post) => {
        let userId = post.id;
        let userMail = post.email;
        let userName = post.username;
        output += '<li> USER ID: '+userId+'<br> USER NAME: '+ userName +'<br> EMAIL: '+ userMail +'</li><br>';
        console.log(post);
    })
    document.getElementById('list').innerHTML = output;
}

// GET BY ID

async function getById(){
    var getId = document.getElementById("getValue").value;
    var myLink = `https://jsonplaceholder.typicode.com/users/${getId}`;
    let users = await fetch(myLink);
    let convertUsers = await users.json();
    let output = '';
    let userId = convertUsers.id;
    let userMail = convertUsers.email;
    let userName = convertUsers.username;
    if(getId != ""){
        output += '<li> USER ID: '+userId+'<br> USER NAME: '+ userName +'<br> EMAIL: '+ userMail +'</li><br>';
        console.log(convertUsers);
    }
    else{
        output = '<B>ENTER VALID ID</B>';
    }
    document.getElementById('list').innerHTML = output;
}

// GET BY NAME

async function getByName(){
    let getByName = document.getElementById("getValue").value;
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    let convertUsers = await users.json();
    let output = '';
    convertUsers.forEach((post) => {
        let name = post.name;
        if(name == getByName){
            let userId = post.id;
            let userMail = post.email;
            let userName = post.username;
            output += '<li> USER ID: '+userId+'<br> USER NAME: '+ userName +'<br> EMAIL: '+ userMail +'</li><br>';
            console.log(post);
        } else {
            output = '<B>ENTER VALID NAME</B>';
        }
    })
    document.getElementById('list').innerHTML = output;
}
