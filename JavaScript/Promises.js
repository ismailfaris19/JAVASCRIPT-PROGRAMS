// Promises:

// let p1 = Promise.resolve('hello');
// let p2 = 100;
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'faris');
// })
// Promise.all([p1, p2, p3]).then(result => console.log(result));


// let promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(() => resolve('faris'), 2000);
// });

// let promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(() => reject(new Error('faris')), 2000);
// });

// console.log(promiseOne);

// let promise = new Promise(function(resolve, reject) {
//     resolve("Done"); // done and call it us result.
//     reject(new Error("…")); // raise errors.
//     setTimeout(() => resolve("…"), 3000); // pending.
//   });

// promise.then(
//     function(result) {console.log(result)},
//     function(error) {console.log(error)}
// );

// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );


// The consuming code
// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//   let x = 0;

// The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   (value) => {myDisplayer(value);},
//   (error) => {myDisplayer(error);}
// );



// let myPromise = new Promise((resolve, reject) => {
//   let req = new XMLHttpRequest();
//   req.open('GET', "output.html");
//   req.onload = () => {
//     if (req.status == 200) {
//       resolve("File Found: " + req.response);
//     } else {
//       reject(req.status + " File Not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   (value) => {myDisplayer(value);},
//   (error) => {myDisplayer(error);}
// );



// let promise = new Promise(resolve => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// result will invoke in alert message
// promise.then(alert); 


