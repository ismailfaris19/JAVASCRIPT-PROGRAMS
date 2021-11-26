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

let promise = new Promise(function(resolve, reject) {
    resolve("Done"); // done and call it us result.
    reject(new Error("…")); // raise errors.
    setTimeout(() => resolve("…"), 3000); // pending.
  });

// promise.then(
//     function(result) {console.log(result)},
//     function(error) {console.log(error)}
// );

// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );


//  