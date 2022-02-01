//get key and values of objects

let userObject = {
    name: 'John',
    age: 36
};
// console.log(Object.keys(userObject)) // [ 'name', 'age' ]
// console.log(Object.values(userObject)) // [ 'John', 36 ]
// console.log(Object.entries(userObject)) // [ [ 'name', 'John' ], [ 'age', 36 ] ]
// console.log(user);


// loop over values

let user = {
    name: "John",
    age: 30
  };

//   for (let value of Object.values(user)) {
//     console.log(value);
//   }

//Object Declaration Types

let objOne = {};
objOne.name = "John";
objOne.class = "BCA";
// console.log(objOne);


let objTwo = {
    name: 'John',
    age: 36,
    isRetaired: false
};
// console.log(objTwo);
// delete objTwo.isRetaired;
// console.log(objTwo);


// objTwo is prototype for objThree.

let objThree = Object.create(objTwo); 
// objThree.isRetaired = true; 
// console.log(objThree);
// console.log(objThree.name);
// console.log(objThree.age);

let objFour = new Object();

let salaries = {
    ismail: 1000,
    faris: 500
};

function sumSalary(salary){
    let total = salary.ismail + salary.faris;
    return total;
}

function countNumber(user){
    return Object.keys(user).length;
}

// console.log(sumSalary(salaries));
// console.log(countNumber(salaries));

let objFive = {};
let key = "name";
objFive[key] = "faris"
// console.log(objFive);


let objSix = {
    employeeId: 1234,
    employeeName: "Ismail",
    jobRole: "Trainee"
}

let objSeven = objSix;
objSix["employeeId"] = 1233;
objSeven.employeeId = 1232;
// console.log(objSeven.employeeId);
// console.log(objSeven.employeeName);
// console.log(objSix.employeeId);

let objEight = {
    teamName : "CSK",
    teamCaptain : "Dhoni",
    teamPlayers : ["Rayudu", "Raina", "Bravo", ["Sam", "Du Plessis"]]
}

// console.log(objEight.teamPlayers[1]);

// console.log(objEight.teamPlayers[3][1]);


// 3 ways to clone the object
const objNine = {name: "faris", jobRole: "Trainee"};
// const objTen = {...objNine};
// const objTen = Object.assign(objNine);
// const objTen = JSON.parse(JSON.stringify(objNine));
// objTen.name = "ismail";
// console.log(objNine);
// console.log(objTen);

// create a object using function

function one(){
    this.bike = 'Yamaha';
    this.car = 'Ford';
}

function two(){
    one.call(this);
}

two.prototype = Object.create(one.prototype);
const objEleven = new two();

// console.log(objEleven);

/* get value via prompt box and set as key in object */

let objTwelve = {
    english: 98,
    tamil: 89,
    maths: 87,
    science: 99,
    social: 100
};

// let getMark = prompt("Enter any subject to get your mark: ", "english");

// alert(objTwelve[getMark]);

// let editSubjectMark = prompt("Enter any subject: ", "english");

// objTwelve[editSubjectMark] = prompt("Change the mark: ", "90");

// alert(Object.entries(objTwelve));
