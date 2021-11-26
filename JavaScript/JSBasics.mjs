/* if we want to use the import statement, 
we need to change the extension to .mjs(js module) 
of both the files which we want to import and export 
or set "type": "module" in the package.json. */

// import a method from other js file.
// import { createFunction } from "./JSLooping.mjs"; 
// const cap = createFunction("faris");
// console.log(cap1);


// using * we can import everything from other js file.
// import * as uppercasemodule from "./JSLooping.mjs";
// const cap = uppercasemodule.createFunction("faris");
// const firstName = uppercasemodule.one;
// console.log(firstName);
// console.log(cap2);


// import the default export in this file. we don't neet to put brackets for import the default export.
// import add from "./JSLooping.mjs";
// const getResult = add(5, 5);
// console.log(getResult);


// To print a double quotes and single quotes in our string statements:

var doubleQuotedString = "Hello \"faris\"";
                // (or)
var singleQuotedString = 'Hello "faris"';
                // (or)
var backtickString = `'Hello' "faris"`;
// console.log(doubleQuotedString);
// console.log(singleQuotedString);
// console.log(backtickString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To concatenate the two strings:

var name = "HELLO ";
name += "FARIS";
var secondName = name + " How are you?";
// console.log(name);
// console.log(secondName);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//To find the length of the string:

var findLength = secondName.length;
// console.log(findLength);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To get any letter from word or sentence:

var getLetter = secondName[2];
// console.log(getLetter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To get last letter from word or sentence if don't know about that string:

var getLastLetter = secondName[secondName.length - 1];
// console.log(getLastLetter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To get the value from multi-dimensional array:

var multiDimensionalArray = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(multiDimensionalArray[1][1]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Scope of the variable:

var globalVariable = 10;

function one(){
    var localVariable = 5;
    // var globalVariable = 11;
    console.log(globalVariable);
}

function two(){
    let output = 10;
    if(typeof globalVariable !== "undefined"){
        output += globalVariable;
    } else if(typeof localVariable !== "undefined"){
        output += localVariable;
    } else {
        console.log("It is undefined");
    }
    console.log(output);
}

// one();
// two();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Make some activities with functions and array:

function make(getArray, item){
    getArray.push(item);
    return setArray.shift();
}

var setArray = [1,2,3,4];

// console.log("before push: " + JSON.stringify(setArray));
// console.log(make(setArray, 5));
// console.log("after push: " + setArray);


function returnNames(index){
    if(index == 0){
        return names[index];
    } else if(index == 1) {
        return names[index];
    } else if(index == 2) {
        return names[index];
    } else if(index == 3) {
        return names[index];
    } else {
        return "I think it is not valid index."
    }
}

let names = ["faris", "ishaq", "gowtham", "arun"];

// console.log(returnNames(2));

// Comparison and Strictly Equal operator:

function check(a, b){
    if(a==b){
        return true;
    } else {
        return false;
    }
    // if(a===b){
    //     return true;
    // } else {
    //     return false;
    // }
}

// check Equal operator:
// console.log(check(10, '10'));
// console.log(check(10, 10));
// check strictly Equal operator:
// console.log(check(10, '10'));
// console.log(check(10, 10));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Switch statement:

function checkSwitch(val){
    let output ="";
    switch(val){
        case 1:
            output = "one";
            break;
        case 2:
            output = "two";
            break;
        case 3:
            output = "three";
            break;
        case 4:
            output = "four";
            break;
        default:
            output = "unknown";
    }
    return output;
}

        // (or)

function multiCaseStatement(val){
    let output ="";
    switch(val){
        case 1:
        case 2:
            output = "low";
            break;
        case 3:
        case 4:
            output = "mid";
            break;
        case 5:
        case 6:
            output = "high";
            break;
    }
}

// console.log(checkSwitch(1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Restrict if else in some places:

function restrictIfElse(a, b){
    // if (a < b){
    //     return true;
    // } else {
    //     return false;
    // }

            // (or)

    return a < b;
}

// console.log(restrictIfElse(2, 1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// To get the values from object:

var obj = {
    7 : "Ronaldo",
    10 : "Messi",
    team : {
        ronaldoTeam : "Manchester United",
        messiTeam : "PSG"
    }
};

let playerNumber = 7;
let player = obj[playerNumber];
// console.log(player);
// console.log(obj.team.ronaldoTeam);


let namee = 'hello';
// console.log(namee[0]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// If we wants to set key name with space, we have to use square brackets for calling that property.

let setName = {
    "first name": "ismail",
    "last name": "faris"
}

// console.log(setName['first name']+ ' '+ setName["last name"]); //we may use either single or double quotes.


// for add, delete and check properties.

setName.class = "BCA";

delete setName['class']

// console.log(setName);

// console.log(setName.hasOwnProperty('class'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// accessing value from an nested array.

let difArray = [
    {
        fullName: 'ismail faris',
        class: 'BCA',
        talents: [
            'drawing',
            'coding'
        ]
    },
    {
        fullName: 'cristiano ronaldo',
        class: 'B.Com',
        talents: [
            'football',
            'problem solving'
        ]
    }
];

// console.log(difArray[1].talents[0]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// accessing nested objects.

let difObj = {
    secondObj: {
        thirdObj: "hello peter!"
    } 
}

// console.log(difObj.secondObj.thirdObj);
// console.log(difObj['secondObj']['thirdObj']);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// save number in ascending or descending order.

let loopArr = [];
// for(let i = 0; i < 7; i+=2){
//     loopArr.push(i);
// }

for(let i = 10; i > 0; i-=2){
    loopArr.push(i);
}
// console.log(loopArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// multiply elements in multi dimensional array.
let arr = [[1,2],[3,4,5],[6,7,8,9]];
function addArray(arr){
    let prod = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            prod += arr[i][j];
        }
    }
    return prod;
}

// console.log(addArray(arr));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// do-while loop.

let num = 10;

// do {
//     console.log("hello");
// } while(num < 10);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// some challenge in object.

let objChallenge = [
    {
        firstName: 'John',
        lastName: 'Smith'
    },
    {
        firstName: 'Ismail',
        lastName: 'Faris'
    },
    {
        firstName: 'Ishaq',
        lastName: 'Ahamed'
    }
];

function challenge(getName){
    let getResult = objChallenge.filter(a => {
        if(a.firstName === getName){
            return true;
        } else {
            return false;
        }
    });
    return getResult[0].lastName;
}

// let getChallenge = challenge('John');
// console.log(getChallenge);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Math Functions */

// Math.random() - return a random number.
// Math.floor() - return a whole number which we pass.

function mathFunctions() {
    return Math.random() * 20;
}

// console.log(Math.floor(mathFunctions()));

function minAndMax(min, max) { // give minimum and maximum number
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

// console.log(minAndMax(6, 16));

let fromString = "16";
let toInt = parseInt(fromString);

// console.log(fromString, toInt);

function binarytoInteger(str) { // From this function we can convert binary digit to integer. Eg: base2, base7 and base8.
    return parseInt(str, 2); // 2 refers base2
}

// console.log(binarytoInteger("11010"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Terinary Operator */

let a = 10;
let b = 11;
// let result = a > b ? true : false;
let result = a > 0 ? "positive" : a < 0 ? "negative" : "zero";
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use strict" - is strictly find the bug.
// always write const variable name in uppercase.
// we can mutate(re-assign) the value in object and array even in const too.
// Object.freeze(<object-name>) - using this method, we can prevent object from re-assign the value.
// always back tick for adding variables, double quotes and single quotes in string statement.


/* var vs let */

function checkLetAndVar(){
    // if(true){
    //     let i = 0;
    //     console.log(i);
    // }
    // console.log(i); // getting error message.

    if(true){
        var i = 0;
        console.log(i);
    }
    console.log(i); // getting value as 0.
}

// checkLetAndVar();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* concating two array */

let conCatArray = (arr1, arr2) => arr1.concat(arr2);
// console.log(conCatArray([1,2], [3,4]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* square of positive integers */

let getSquaredValue = [4, 5.6, -9.8, -1.5, 8, 6, -2];

let squaredValue = getSquaredValue.filter(num => Number.isInteger(num) && num > 0).map(a => a * a);

// console.log(squaredValue);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* function call inside the function & rest operator*/

let sum = (() => {
    // return function sum(a,b,c){
    //     const args = [a, b, c];

                // (or)

    return function sum(...args){ // rest operator get all parameters and form it as array.
        return args.reduce((x, y) => x + y, 0);
    };
})();

// console.log(sum(4, 5, 6));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Spread Operator - it makes a copy of array 1 and assign it to array two.*/

const arr1 = [1, 2, 3, 4, 5];
let arr2;
// arr2 = arr1; // [0, 2, 3, 4, 5]
// (or)
arr2 = [...arr1]; // [1, 2, 3, 4, 5]
arr1[0] = 0;
// console.log(arr2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* object tricks */

var obj1 = {
    x: 1,
    y: 2,
    z: { a : 3, b : 4, c : 5 },
    weCanDeclareFunction(name){
        this.name = name;
        // console.log(this.name);
    }
};

const { x : u , y : v } = obj1; // assign object value to variable
// console.log(u, v);
const {x, y} = obj1;
// console.log(x, y);
const { z : { b : d } } = obj1;
// console.log(d);
const fun = ({x, y}) => {
    return x + y;
}
// console.log(fun(obj1));
const createFun = (name, age) => {
    return {
        name: name,
        age: age
    };
}
// console.log(createFun("faris", 22));
obj1.weCanDeclareFunction('faris');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* create a object using function and class*/

var spaceShuttle = function(planet){ // constructor function
    this.planet = planet;
}

            // (or)

// class spaceShuttle{
//     constructor(planet){ //constructor in class
//         this.planet = planet;
//     }
// }

var rocket = new spaceShuttle('Earth'); // This is a new way to create an object using function.
// console.log(rocket.planet);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* array tricks */

var [l, m, , n, o] = [1,2, 3, 4, 5]; // assign array value to variable
// console.log(l, m, n, o);

var valOne = 1;
var valTwo = 2;
[valOne, valTwo] = [valTwo, valOne]; // swapping two values
// console.log(valOne, valTwo);

var parentArray = [1, 2, 3, 4, 5];

const childArray = (list) => {
    const [ , , ...arr] = list; // remove first and second elements and form an array with remaining elements.
    return arr;
    // const [a , b, ...arr] = list; // assigning first & second elements to variables and form an array with remaining elements.
    // let obj = {
    //     x: a,
    //     y: b,
    //     z: arr
    // };
    // return obj;
}

// console.log(parentArray);
// console.log(childArray(parentArray));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* class inside the function */

function classInFunction(){
    class InsideTheFunction{
        constructor(name){
            this.name = name;
        }
    }
    return InsideTheFunction;
}

var getClass = classInFunction();
var passName = new getClass('faris');
// console.log(passName.name);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* POJO class - constructor, getter and setter */

function functionHasClass(){
    class PojoClass{
        constructor(name){ // set and get value using constructor.
            this._name = name; // here create a private variable. We have to specify underscore before variable name then we can find private variable easily.
        }
        get name(){ // get value using getter method.
            return this._name;
        }
        set name(value){ // set value using setter method.
            this._name = value;
        }
    }
    return PojoClass;
}

var getClass = functionHasClass();
var getName = new getClass('ismail'); // using constructor
// console.log(getName.name); // using getter
let getUsingGetter = getName.name; // using getter
getName.name = 'faris'; // using setter
getUsingGetter = getName.name; // using getter
// console.log(getUsingGetter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Accessing objects properties */

let favouriteList = [{
    ismail : [
        {
            "isbn": "9781484200766",
            "title": "Everything you need to know about Git",
            "author": "Scott Chacon and Ben Straub",
            "publish_date": "2014-11-18",
            "publisher": "Apress",
            "numOfPages": 458,
        },
        {
            "isbn": "9781593279288",
            "title": "Python Crash Course, 2nd Edition",
            "author": "Eric Matthes",
            "publish_date": "2015-05-21",
            "publisher": "No Starch Press",
            "numOfPages": 546,
        },
        {
            "isbn": "9781491943533",
            "title": "Practical Modern JavaScript",
            "author": "Nicolás Bevacqua",
            "publish_date": "2017-07-16",
            "publisher": "O'Reilly Media",
            "numOfPages": 334,
        }
    ],
    faris: [
        {
            "isbn": "9781484200766",
            "title": "Everything you need to know about Git",
            "author": "Scott Chacon and Ben Straub",
            "publish_date": "2014-11-18",
            "publisher": "Apress",
            "numOfPages": 458,
        },
        {
            "isbn": "9781593279288",
            "title": "Python Crash Course, 2nd Edition",
            "author": "Eric Matthes",
            "publish_date": "2015-05-21",
            "publisher": "No Starch Press",
            "numOfPages": 546,
        }
    ]
}];

const objName = 'faris';
const setObj = {
    "isbn": "9781593279288",
    "title": "Python Crash Course, 2nd Edition",
    "author": "Eric Matthes",
    "publish_date": "2015-05-21",
    "publisher": "No Starch Press",
    "numOfPages": 546
}
// favouriteList[0]['ishaq'] = [];
// favouriteList[0]['ishaq'].push(setObj);
// console.log(favouriteList[0]);
// console.log(favouriteList[0][objName][1]['author']);
// console.log(Object.keys(favouriteList[0])); // for getting keys