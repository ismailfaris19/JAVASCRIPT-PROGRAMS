// alternative of map, filter, sort in pure JS.
function alternate(arra){
    let arrb = [];
    let str = Array.from(arra);

    // for map & forEach
    // for(let value of arra){
    //     arrb.push(value);
    // }
    // return arrb;

    // for filter
    // for(let value of arra){
    //     if(value % 2 === 0) arrb.push(value);
    // }
    // return arrb;

    // for find to remove duplicates
    // let isvalidate = (item) => {
    //     let isValid = true;
    //     for(let val of arrb) {
    //         if(val === item){
    //             isValid = true;
    //             break;
    //         } else {
    //             isValid = false;
    //         }
    //     }
    //     return isValid;
    // }
    // for(let i in arra){
    //     if(i == 0) {
    //         arrb.push(arra[i]);
    //     } else {
    //         let validate = isvalidate(arra[i]);
    //         if(!validate){
    //             arrb.push(arra[i]);
    //         }
    //     }
    // }
    // return arrb;

    // for sorting - ascending order
    // var done = false;
    // while (!done) {
    //    done = true;
    //    for (var i = 1; i < arra.length; i += 1) {
    //       if (arra[i - 1] > arra[i]) {
    //          done = false;
            //  var tmp = arra[i - 1];
            //  arra[i - 1] = arra[i];
            //  arra[i] = tmp;
                        // (or)
    //         [arra[i], arra[i - 1]] = [arra[i - 1], arra[i]];
    //       }
    //    }
    // }
    // return arra;

    // for sorting - descending order
    // var done = false;
    // while (!done) {
    //    done = true;
    //    for (var i = 1; i < arra.length; i += 1) {
    //       if (arra[i - 1] < arra[i]) {
    //         done = false;
    //         var temp = arra[i];
    //         arra[i] = arra[i - 1];
    //         arra[i - 1] = temp;
                    // (or)
    //         [arra[i], arra[i - 1]] = [arra[i - 1], arra[i]];
    //       }
    //    }
    // }
    // return arra;

    // for sorting - ascending order - characters
    // for(let i = 0; i < str.length; i++){
    //     for(let j = i + 1; j < str.length; j++){
    //         if(str[j] < str[i]){
    //             let temp = str[i];
    //             str[i] = str[j];
    //             str[j] = temp;
                        // (or)
    //             [str[i], str[j]] = [str[j], str[i]];
    //         }
    //     }
    // }   
    // return str;

    // for sorting - descending order - characters
    // for(let i = 0; i < str.length; i++){
    //     for(let j = i + 1; j < str.length; j++){
    //         if(str[j] > str[i]){
    //             let temp = str[j];
    //             str[j] = str[i];
    //             str[i] = temp;
                        // (or)
    //             [str[i], str[j]] = [str[j], str[i]];
    //         }
    //     }
    // }   
    // return str;

}
// let arra = [12, 10, 15, 11, 14, 13, 16, 12];
// console.log(alternate(arra));
// console.log(alternate('elephant'));



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
            arr.push(i);
        } 
    }
    return arr;
}

// console.log(...CountDiv(6, 11, 2));



// third largest integer in an array
function largestElement(arr) {
    // let firstMaxNum = 0;
    // let secondMaxNum = 0;
    // let thirdMaxNum = 0;

    // for(let index in arr) {
    //     if(arr[index] > firstMaxNum) {
    //         firstMaxNum = arr[index];
    //     }
    // }
    // for(let index in arr) {
    //     if(arr[index] < firstMaxNum && arr[index] > secondMaxNum) {
    //         secondMaxNum = arr[index];
    //     }
    // }
    // for(let index in arr) {
    //     if(arr[index] < secondMaxNum && arr[index] > thirdMaxNum) {
    //         thirdMaxNum = arr[index];
    //     }
    // }

    // return thirdMaxNum;

                    // (or)

    // let setNum = new Set(arr);
    // arr = Array.from(setNum);
    // let setNum = new Set(arr);
    // arr = [];
    // for(let val of setNum){
    //     arr.push(val);
    // }
    // var done = false;
    // while (!done) {
    //    done = true;
    //    for (var i = 1; i < arr.length; i += 1) {
    //       if (arr[i - 1] > arr[i]) { 
    //          done = false;
    //          var tmp = arr[i - 1];
    //          arr[i - 1] = arr[i];
    //          arr[i] = tmp;
    //       }
    //    }
    // }

    // return arr[arr.length - 3];

                    // (or)

    let thirdMaxNum = [...new Set(arr)].sort((a, b) => b - a);

    return thirdMaxNum[2];
}
// let arrbee = [1,20,30,40,4,50,1];
// let arrbee = [0, 1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
//     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
//     51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
//     61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
//     71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
//     81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
//     91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// console.log(largestElement(arrbee));



// remove duplicates from an array
function removeDuplicates(arr){
    let arr2 = [];
    
    let getSet = new Set(arr);
    arr2 = Array.from(getSet);
    return arr2;

                // (or)

    // let getSet = new Set(arr);
    // arr = [];
    // for (let val of getSet){
    //     arr.push(val);
    // }
    // return arr;

                // (or)

    // let isvalidate = (item) => {
    //     let isValid = true;
    //     for(let val of arr2) {
    //         if(val === item){
    //             isValid = true;
    //             break;
    //         } else {
    //             isValid = false;
    //         }
    //     }
    //     return isValid;
    // }
    // for(let i in arr){
    //     if(i == 0) {
    //         arr2.push(arr[i]);
    //     } else {
    //         let validate = isvalidate(arr[i]);
    //         if(!validate){
    //             arr2.push(arr[i]);
    //         }
    //     }
    // }
    // return arr2;
    
                // (or)

    // let arr2 = [];
    // for(let i in arr){
    //     if(i == 0) {
    //         arr2.push(arr[i]);
    //     } else {
    //         let validate = arr2.find(item => item === arr[i]);
    //         if(!validate){
    //             arr2.push(arr[i]);
    //         }
    //     }
    // }
    // return arr2;

                // (or)

    // return [...new Set(arr)].sort((a, b) => a - b);
}

// let arr = [9, 8, 7, 3, 8, 9, 10, 10];
// console.log(removeDuplicates(arr));



// most recurring character in string
function recurringCharacters(A){
    let obj = {};
    let arrOfChar = [];

    // let num = 0;
    // let arr = Array.from(A);
    // let arr = [];
    // for(let i in A){
    //     arr.push(A[i]);
    // }
    // for(let item of arr) {  
    //     if(obj[item]){
    //         obj[item]++;
    //     } else {
    //         obj[item] = 1;
    //     }
    // }

    // let setWithoutDuplicates = new Set(Object.values(obj));  
    // arr = Array.from(setWithoutDuplicates);
    // for(let index in arr) {
    //     if(arr[index] > num) {
    //         num = arr[index];
    //     }
    // }

    // for(let char in obj){
    //     if(obj[char] == num){
    //         arrOfChar.push(char);
    //     }
    // }

    // return arrOfChar;

                // (or)

    A.split('').forEach(item =>{
        if(obj[item]){
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });

    let arrOfValues = [...new Set(Object.values(obj))];

    for(let char in obj){
        if(obj[char] == Math.max(...arrOfValues)){
            arrOfChar.push(char);
        }
    }

    return arrOfChar;
}

// console.log(recurringCharacters("hellloooee"));



// Sort the letter of a given word in alphabetical order without repetition of letters.
function sortLetter(word){
    let str = Array.from(word);
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[j] < str[i]){
                // let temp = str[i];
                // str[i] = str[j];
                // str[j] = temp;
                        //(or)
                [str[i], str[j]] = [str[j], str[i]];
            }
        }
    }
    let getSet = new Set(str);
    let letters = '';
    for(let val of getSet) {
        letters += val;
    }
    return letters;

                    // (or)

    //  return [...new Set(word.split(""))].sort().join('');
}

// console.log(sortLetter("atmecsboys"));



// Frog jump.
function frogJump(X,Y,D){

    let totalDistance = Y - X;
    let count = totalDistance / D;
     if(!Number.isInteger(count)){
        count = Math.ceil(count);
        return count;
     } else {
        return count;
     }  

}
// console.log(frogJump(10,120,30));



// Palindrome
function palindrome(str){
    let arr = Array.from(str); 
    let result = '';
    for(let val of arr){
        result = val + result; 
    }
    return str === result;
}
// console.log(palindrome('madam'));



// sorting words
function sortedWords(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j][0] < arr[i][0]){
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
            }
        }
    }
    return arr;
}
// console.log(sortedWords(['ismail', 'gowtham', 'hari']));



// sorting numbers
function sortNumbers(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
            }
        }
    }
    return arr;
}
let arr = [12, 10, 15, 11, 14, 13, 16, 12];
// console.log(sortNumbers(arr));



/* indexOf */
// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = 0;
// while(true){
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     console.log( `Found at ${foundPos}` );
//     pos = foundPos + 1; // continue the search from the next position
// }
                // (or)
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     console.log( pos );
// }



/* str.codePointAt(pos) */
// str = '';
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);



/* Uppercase the first character */
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("john"));



/* Check for spam */
function checkSpam(str) {

    // let isVAlid = str.toLowerCase().split(" ").find(val => val == 'xxx' || val == 'viabra');
    // return isVAlid ? true : false;
                    // (or)
    return str.toLowerCase().includes('viabra') || str.toLowerCase().includes('xxx') ? true : false;

}

// console.log(checkSpam("john viabra hi"));



/* Trancate the text */
function truncate(str, maxLength) {

    return str.length > maxLength ? str.substring(0, maxLength-1) + '...' : str ;

}

// console.log(truncate("What I'd like to tell on this topic is", 20));



/* Extract the money */
function extractCurrencyValue(money) {

    return Number(money.substring(1, money.length));

}

// console.log(extractCurrencyValue('$120') === 120);



/*  calculate the number of hours, minutes and seconds between two dates */
function calcDifference(){

    let date1 = new Date("06/30/2021");
    let date2 = new Date("08/30/2021");
    let daysDifferent = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24); // days
    let hoursDifferent = (date2.getTime() - date1.getTime()) / (1000 * 3600); // hours
    let minutesDifferent = (date2.getTime() - date1.getTime()) / (1000 * 60); //  minutes
    let secondsDifferent = (date2.getTime() - date1.getTime()) / 1000; // seconds

    return [daysDifferent, hoursDifferent, minutesDifferent, secondsDifferent];

}

// console.log(calcDifference());




const user1 = {
    fullName: 'John',
    logInfo: function(){
        console.log(this.fullName);
    }
}

const user2 = {
    fullName: 'Jack',
    logInfo: ()=>{
        console.log(this.fullName);
    }
}
// user1.logInfo();
// user2.logInfo();


// function suffle(S, N){
//     let charMap = {};
//     let maxNum = 0;
//     let maxChar = '';
//     let count = 0;
//     let arr = S.length == N ? S.toLowerCase().split('') : [];
//     for(let value of arr){
//         if(value !== 'a' || value !== 'b') return 0;
//     }
//     arr.forEach(item => {
//         if(charMap[item]){
//             charMap[item]++;
//         } else {
//             charMap[item] = 1;
//         }
//     })
//     for(let char in charMap){
//         if(charMap[char] > maxNum){
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     for(let index in arr){
//         if(arr[index] !== maxChar) count++;
//     }
//     return count;
// }

// console.log(suffle('abbba', 5));

function suffle(S, N){
    let charMap = {};
    let maxNum = 0;
    let maxChar = '';
    let count = 0;
    let arr = S.length == N ? S.toLowerCase().split('') : [];
    // for(let value of arr){
    //     if(value !== 'a' || value !== 'b') return 0;
    // }
    arr.forEach(item => {
        if(charMap[item]){
            charMap[item]++;
        } else {
            charMap[item] = 1;
        }
    })
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    for(let index in arr){
        if(arr[index] !== maxChar) count++;
    }
    return count;
}

// console.log(suffle('abbba', 5));


/* [ 'faris', 'ismail', 'jiyad', 'jasra' ] => [ 'Faris', 'Ismail', 'Jiyad', 'Jasra' ] */
let arrNames = ['faris', 'ismail', 'jiyad', 'jasra'];
arrNames = arrNames.map( item => item[0].toUpperCase() + item.substring(1, item.length) );
// console.log(arrNames);



/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/
function diagonalDifference(arr) {
    var a = 0, b = 0, n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i == j) a += arr[i][j];
            if((i + j) == (n - 1)) b += arr[i][j];
        }
    }
    return Math.abs(a - b);
}
// console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]));



/* Find the percentage of positive, negative and zero counts */
function plusMinus(arr) {
    let  a = 0, b = 0, c = 0, n = arr.length;
    arr.forEach((item) => {
        if(Math.sign(item) == 1) a += 1;
        else if (Math.sign(item) == -1) b += 1;
        else c += 1;
    })
    console.log((a/n).toFixed(6))
    console.log((b/n).toFixed(6))
    console.log((c/n).toFixed(6))
}

// plusMinus([-4, 3, -9, 0, 4, 1])



/* find the min and max count of an element in an array */
function miniMaxSum(arr) {
    let min, max;
    arr.forEach((item, i) => {
        let elemArr = arr.filter((num, index) => i != index);
        let count = elemArr.reduce((a, b) => a + b);
        if(i == 0){
            min = count;
            max = count;
        } else {
            min = count < min ? count : min;
            max = count > max ? count : max;
        }
    })
    console.log(`${min} ${max}`)
}

// miniMaxSum([5, 5, 5, 5, 5])



/* find the re-ordered numbers in an array using swap and reverse */
function countDownMarks(array) {
    var downMarks = [];
    array.forEach((item, i) => { // [1, 5, 4, 3, 2, 6] => [1, 2, 3]
        if(array[i + 1] < array[i]) downMarks.push(i);
    });
    return downMarks;
}

function almostSorted(arr) {
    var downMarks = countDownMarks(arr); // [1, 2, 3]

    var newArray, newDownMarks, start, end;

    // try swap
    if (downMarks.length == 1 ||
        downMarks.length == 2) {

        newArray = [...arr];
        start = downMarks.shift();
        end = (downMarks.length) ? downMarks.shift() + 1 : start + 1;

        swap(newArray, start, end);
        newDownMarks = countDownMarks(newArray);
        if (!newDownMarks.length) {
            console.log("yes");
            console.log("swap", start + 1, end + 1);
            return;
        }
    }

    // try reverse
    if (downMarks.length > 2 &&
        downMarks.length == ((downMarks[downMarks.length - 1] - downMarks[0]) + 1)) { 
        start = downMarks.shift();
        end = downMarks.pop() + 1;
        newArray = reverse(arr, start, end);
        newDownMarks = countDownMarks(newArray);
        if (!newDownMarks.length) {
            console.log("yes");
            console.log("reverse", start + 1, end + 1);
            return;
        }
    }

    console.log("no");
}

function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}

function reverse(array, idx1, idx2) {
    return array.slice(0, idx1).concat(array.slice(idx1, idx2 + 1).reverse()).concat(array.slice(idx2 + 1));
}

// almostSorted([1, 5, 4, 3, 2, 6])
// almostSorted([4, 2])
