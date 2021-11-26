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