// callback function:

// function callbackFunction(value) {
//     console.log(value);
// }

// function shareValue(one, two) {
//     let result = one + two;
//     return result;
// }

// let total = shareValue(4, 6);
// callbackFunction(total);



// function one(result) {
//     console.log(result)
// }

// function two(first, second, callbackFun) {
//     let sum = first + second;
//     callbackFun(sum);
// }

// two(5, 6, one);



// SetTimer method:

// setTimeout(myFuctionTimer, 3000);

// function myFuctionTimer() {
//     let timerVar = new Date();
//     console.log("TIME: " + timerVar.getHours() + ":" + timerVar.getMinutes() + ":" + timerVar.getSeconds());
// }



// XMLHttpRequest method:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
}

getFile(myDisplayer);