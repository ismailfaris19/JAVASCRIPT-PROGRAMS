/* Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let today = new Date(); // Date class
let day = today.getDay(); // it returns 0, 1, 2, 3, 4, 5, 6 based on today's day.
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let hours = today.getHours(); // current hour
let minutes = today.getMinutes(); // current minutes
let seconds = today.getSeconds(); // current seconds
let amOrPm = (hours >= 12) ? "PM" : "AM";
hours = (hours >= 12) ? hours - 12 : hours;
if(hours === 0 && amOrPm === "PM"){
    if(minutes === 0 && seconds === 0){
        hours = 12;
        amOrPm = "Noon";
    } else {
        hours = 12;
        amOrPm = "PM";
    }
} else if(hours === 0 && amOrPm === "AM"){
    if(minutes === 0 && seconds === 0){
        hours = 12;
        amOrPm = "Midnight";
    } else {
        hours = 12;
        amOrPm = "AM";
    }
}
// console.log("Today is : " + daylist[day] + ".");
// console.log("Current time is : "+ hours +" "+ amOrPm +":"+ minutes +":"+ seconds);



/* Write a JavaScript function to print the contents of the current window. */

function print_current_page()
{
window.print();
}

// print_current_page();



/* Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

let side1 = 5;
let side2 = 6;
let side3 = 6;
let semiPerimeter = (side1 + side2 + side3) / 2; // 8.5
let area = Math.sqrt(semiPerimeter * ((semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3))); // (8.5 * (3.5 * 2.5 * 2.5)) => 
// let area = Math.sqrt(185.9375);
// console.log(area);



/* determine whether a given year is a leap year in the Gregorian calendar. */

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// console.log(isLeapYear(2000));



/* Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050. */

function checkSundayOrNot(){
for (var year = 2014; year <= 2050; year++){
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    // var d = new Date(year, 364, 365);
    // if ( d.getDay() === 0 )
    //     console.log("last day of december is being a Sunday  "+year);
}
}

// checkSundayOrNot();


/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */

function promptMessage(){
    let userInput = Number(prompt("Please choose number in between 1 to 10", "1"));
    let getRandomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(userInput, getRandomNumber);
    if(userInput === getRandomNumber){
        alert('Good Work');
    } else {
        alert('Not matched');
    }
}

// promptMessage();


/* Write a JavaScript program to get the website URL (loading page) */
// console.log(document.URL);


/* Write a JavaScript exercise to get the extension of a filename. */

let filename = 'index.html';
// console.log(filename.split('.').pop());


/* Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19. */

function lessThanOrGreaterThan(n){
    if(n <= 19) {
        return 19 - n;
    } else {
        return (n - 19) ** 3;
    }
}

// console.log(lessThanOrGreaterThan(22));


/* Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

function checkFifty(a, b) {
    if (a == 50 || b == 50 || a + b == 50) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkFifty(26, 25));


/* Two merge two array of objects without any duplicates */

let iData=[
    {
        id:1,
        name:'name1'
    },
    {
        id:2,
        name:'name2'
    }
];
    
let data=[
    {
        id:2,
        name:'name2'
    },
    {
        id:3,
        name:'name3'
    },
    {
        id:1,
        name:'name1'
    },
    {
        id:4,
        name:'name4'
    }
];

function mergeData(){
    const map = new Map();
    data.forEach(item => map.set(item.id, item));
    // console.log(map);
    iData.forEach(item => map.set(item.id, {...map.get(item.id), ...item}));
                        //Eg: map.set(1, { id: 1, name: 'name1', id: 1, name: 'name1' })
    // console.log(map);
    const mergedArr = Array.from(map.values());
    // console.log(mergedArr);
    mergedArr.sort((a, b) => {
            let c = a.id;
            let d = b.id;
            return c - d;
    })
    return mergedArr;
}

// mergeData()
// console.log(mergeData());


/* CODILITY */

// LESSON - 5 - PassingCars

function PassingCars(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var east = new Array(A.length);
    var west = new Array(A.length);
    var LIMIT = 1000000000;
    
    // [0, 1, 0, 1, 1]
    for(var i=0; i<A.length; i++) {  // 0, 1, 2, 3, 4
        
        var iRev = A.length - 1 - i;    // 4, 3, 2, 1, 0
        var goingEast = A[i] === 0 ? 1 : 0; // 0
        var goingWestRev = A[iRev] === 0 ? 0 : 1; // 0
        
        if(i===0) {
            east[i] = goingEast;  // [1]
        } else {
            east[i] = east[i-1] + goingEast;  // [1, 1, 2, 2, 2]
        }
        
        if(iRev === A.length - 1) {
            west[iRev] = goingWestRev; // [1]
        } else {
            west[iRev] = west[iRev+1] + goingWestRev; // [3, 3, 2, 2, 1]
        }

        // console.log(`i: ${i}, iRev: ${iRev}`);
      }
    
    // console.log('east, west:', east, west);
    
    var totalPasses = 0;
    var lastEast = 0;
    for(var i=0; i<east.length; i++) {
        if(east[i] > lastEast) {    // 1, 2
            totalPasses += west[i];    // 5
            lastEast = east[i];     // 2
        }
    }
    // console.log('totalPasses, lastEast:', totalPasses, lastEast);
    return totalPasses > LIMIT ? -1 : totalPasses;
}
let A = [0, 1, 0, 1, 1];
// PassingCars(A);
// console.log(PassingCars(A));



// LESSON - 5 - CountDiv

function CountDiv(A, B, K){
    let arr = [];
    for(i = A; i <= B; i++){
        if(i % K === 0){
            // console.log(i);
            arr.push(i);
        } 
    }
    return arr;
}

// console.log(...CountDiv(6, 11, 2));


// first three largest elements in an array
function largestElement(arr) {
    let firstMaxNum = 0;
    let secondMaxNum = 0;
    let thirdMaxNum = 0;

    for(let index in arr) {
        if(arr[index] > firstMaxNum) {
            firstMaxNum = arr[index];
        }
    }
    for(let index in arr) {
        if(arr[index] < firstMaxNum && arr[index] > secondMaxNum) {
            secondMaxNum = arr[index];
        }
    }
    for(let index in arr) {
        if(arr[index] < secondMaxNum && arr[index] > thirdMaxNum) {
            thirdMaxNum = arr[index];
        }
    }

    return [firstMaxNum, secondMaxNum, thirdMaxNum];
}

// console.log(...largestElement([8,9,5,4,3,2,1,0]));


// remove duplicates from an array
function removeDuplicates(arr){
    let arr2 = [];
    for(let i in arr){
        if(i == 0) {
            arr2.push(arr[i]);
        } else {
            let validate = arr2.find(item => item === arr[i]);
            if(!validate){
                arr2.push(arr[i]);
            }
        }
    }
    return arr2;
}

let arr = [9, 8, 7, 3, 8, 9, 10, 10];
// console.log(removeDuplicates(arr));


// most recurring charecter in string
function removeDuplicatesChar(A){
    let obj = {};
    let arrOfChar = [];

    A.split('').forEach(item =>{
        if(obj[item]){
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });

    for(let char in obj){
        if(obj[char] > 1){
            arrOfChar.push(char);
        }
    }

    return arrOfChar;
}

// console.log(removeDuplicatesChar("elephant"));


// Sort the letter of a given word in alphabetical order without repetition of letters.
function sortLetter(word){
     return [...new Set(word.split(""))].sort().join('');
}

// console.log(sortLetter("atmecsboys"));