const numbers = [33, 12,70 ,20,20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// console.log(numbers.map(val => val * 2));

let players =[
  {name:'Rohit', runs:9000, wickets:100, age:36},
{name:'Dhawan', runs:1100, wickets:101, age:30},
{name:'Virat', runs:1200, wickets:102, age:31},
{name:'Dhoni', runs:1300, wickets:103, age:32},
{name:'Yuvraj', runs:1400, wickets:104, age:21},
{name:'Raina', runs:1500, wickets:105, age:22},
{name:'Irfan', runs:1600, wickets:106, age:33},
{name:'Sachin', runs:1700, wickets:107, age:24},
{name:'Dravid', runs:1800, wickets:104, age:24},
{name:'Laxman', runs:1500, wickets:109, age:32},
{name:'Subham', runs:2000, wickets:107, age:33},
{name:'Prithvi', runs:3000, wickets:210, age:29},
{name:'Mayank', runs:4000, wickets:310, age:28},
{name:'Ruturaj', runs:5000, wickets:410, age:27},
{name:'Bravo', runs:6000, wickets:101, age:31},
{name:'Imran', runs:1500, wickets:107, age:23},
{name:'Yousuf', runs:8000, wickets:12, age:33},
{name:'Robin', runs:9000, wickets:13, age:36},
{name:'Rayudu', runs:10000, wickets:104, age:35},
{name:'Risav', runs:9000, wickets:15, age:40},
{name:'Sreyash', runs:9000, wickets:16, age:26},
{name:'Avesh', runs:1300, wickets:107, age:22},
{name:'Anirudh', runs:8500, wickets:18, age:21} 

]

// console.log(numbers[0])
// console.log(numbers[numbers.length-1])

// numbers.push(50)

// numbers.unshift(1);
// numbers.shift(1);
// numbers.pop()

// //remember
// let deletedNumbers = numbers.splice(3,3)
// console.log(numbers);
// console.log(deletedNumbers);

// //slice -  endingnumber -1
// let slicedNumebers = numbers.slice(3,10);
// console.log(numbers);
// console.log(slicedNumebers);

//MAIN DIFFERENCE BETWEEN SLICE AND SPLICE
//SPLICE - original array could be changed
//SLICE - original array can not be changed.

// console.log(numbers.indexOf(20,4));
// function filterNbrs(nbr){
//   return nbr >12
// }

// let greaterThan12 = numbers.filter(function(nbr){
//   return nbr >12
// });
//  let greaterThan12 = numbers.filter(nbr => nbr > 12);
// console.log(greaterThan12)
// console.log(numbers);

// let greaterThan8000 = 
// players.filter(plr => (plr.runs > 8000 && plr.runs < 9000)) ;
// console.log(greaterThan8000)
//  console.log(players);


// let resultNbrs =[];
// function filterNbrs1(){
// for(let i =0; i<numbers.length; i++){
//   let nbr;
//   if( numbers[i] > 12){
//     resultNbrs.push(numbers[i])
//   }
// }
// }
// filterNbrs1();
// console.log(resultNbrs);

//map

let resultMap = players.map(plr => plr.name + '  indian player');
// console.log(resultMap)
// sorting in ascending order

let sortedNumbers = numbers.sort((a, b) => b-a);

//way of sorting the objects
let sortedRuns = players.sort(function(a, b){
  if(a.runs > b.runs){
    return 1
  }else{
    return -1
  }
})

let sortedWickets = players.sort((a,b)=>(a.wickets < b.wickets ? 1: -1 ))

// numbers.forEach(el => {el = el+100; console.log(el)});


// console.log(numbers);

// console.log(sortedWickets);

/* Three types of array creation */

// 1) 

let arrOne = new Array();   // without giving size and values

let oneArr = new Array("king", "queen"); // with values only

let arrOneArr = new Array(2); // with size only

// 2) 

let arrTwo = [];

// 3) 

let arrThree = ["one", "two"];

// call the element using index:

// console.log(arrThree[1]);

// update the value:

arrThree[0] = "zero";
arrThree[1] = "one";
// console.log(arrThree);

// find the length of the array:

// console.log(arrThree.length);

arrThree.length = 1;

// set the length manually

// console.log(arrThree);

// mixing of values in single array:

let arrFour = [1, 1.5, "one", true, {arrType : "mix"}, function (){console.log("hello from array!")}];

// console.log(arrFour);
// console.log(arrFour[4].arrType);
// arrFour[5]();

arrTwo[0] = 1;
arrTwo[1] = 1.5;
arrTwo[2] = true;
arrTwo[3] = "element";

// console.log(arrTwo);

// push() - method to insert the element in last index:

arrTwo.push({arrType : "mix"});

// console.log(arrTwo);

// pop() - method to remove the element in last index:

arrTwo.pop();

// console.log(arrTwo);

// shift() - Extracts the first element of the array and returns it:

arrTwo.shift();

// console.log(arrTwo);

// unshift() - Add the element to the beginning of the array:

arrTwo.unshift(1);

// console.log(arrTwo);

// Array reference as object reference:

let arrFive = arrFour;

// console.log("Array one: ", arrFour);
// console.log("Array two: ", arrFive);

arrFive.pop();

// console.log("Array one: ", arrFour);
// console.log("Array two: ", arrFive);


// assign a property with the index far greater than its length
// create a property with an arbitrary name

let arrSix = [];
arrSix[99999] = "Apple";
arrSix.name = "Orange";

// console.log(arrSix);

// loops: 

// 1)

// for (let i = 0; i < arrTwo.length; i++) {
//     console.log(arrTwo[i]);
// }

// 2)

// for(let duplicateArray of arrTwo) {
//     console.log(duplicateArray);
// }

// 3)

// for(let arrayDuplicate in arrTwo) {
//     console.log(arrTwo[arrayDuplicate]);
// }

// Multidimensional arrays:

let multiArray = [
    ["one", 1],
    ["two", 2],
    ["three", 3]
]

// console.log(multiArray[1][0]);

// toString method:

// console.log(String(arrTwo));

let arrSeven = [1,2,3,4,5,6,7,8,9,10,11];

//sort():

// console.log(arrSeven.sort((a,b) => a-b));

// console.log(arrSeven.sort((a,b) => b-a));

// filter():

// console.log(arrSeven.filter(arr => (arr>3 && arr<10)));

// map():

// console.log(arrSeven.map(arr => arr + arr));

// from():

let text = 'abcdef';
let arr = Array.from(text);
// console.log(arr);
