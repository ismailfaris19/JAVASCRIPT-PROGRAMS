// Sequence Control:

// function callbackFunction(value) {
//     console.log(value);
// }

// function shareValue(one, two) {
//     let result = one + two;
//     return result;
// }

// let total = shareValue(4, 6);
// callbackFunction(total);



// callback function:

// function one(result) {
//     console.log(result)
// }

// function two(first, second, callbackFun) { 
//     let sum = first + second;
//     callbackFun(sum);
// }

// here we pass function one as callback function.
// two(5, 6, one);



// SetTimer method:

// setTimeout(myFuctionTimer, 3000);

// function myFuctionTimer() {
//     let timerVar = new Date();
//     console.log("TIME: " + timerVar.getHours() + ":" + timerVar.getMinutes() + ":" + timerVar.getSeconds());
// }



// XMLHttpRequest method:

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open('GET', "output.html");
//     xhttp.onload = function() {
//         if (xhttp.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback("Error: " + xhttp.status);
//         }
//     }
//     xhttp.send();
// }

// getFile(myDisplayer);