// let players = ['kohli','rohit','KL'];

// function addPlayer(player){
//   players.push(player);
// }

// function deleterPlayer(){
//   players.pop();
// }

// addPlayer('pant');
// console.log(players)
// deleterPlayer();
// console.log(players);
// addPlayer('Vihari');
// addPlayer('Bhuvi');
// deleterPlayer();
// addPlayer('Bhuvi');

// console.log(players);

//pure function

// function add2nbrs(a , b){
//   // business logic of 100 lines
//   return (a+b);
// }

// function greet(){
//   console.log('hello ...');
// }


// console.log(add2nbrs(4,4));

// functions in JS are called first class functions .

// var greet = () => console.log('hello')
  


// function can be passed as an argument

// let someFun = () => 2+1 ;
// let add =  addSomething => addSomething;

// let a = add(someFun);
// console.log(a());

// functions can be returned. 

// let nbrs = [1 , 2, 3, 4];

// nbrs.forEach((n)=> console.log(n+1) );

// rest operator

function displayNames(lastName, firstName,...otherparam){
  console.log(otherparam);
  return firstName + lastName;
}

// console.log(displayNames('Gharti','Neelam','abc','xyz', 'something'));


// spread operator

// let array1 = [1,2,3];
// let array2 = [5,7,...array1];
// array1.push(90);
// console.log(array2);


// let someSet = new Set();
// someSet.add(1);
// someSet.add(1);
// console.log(someSet);


// Immediate function:

// (function(){
//     console.log("hi");
// })();

// (function(){
//     console.log("hello");
// }());



// Curry function:

function foodPreparation(water){
    return function(rice){
        return function(powder){
            return water+rice+powder;
        }
    }
}

// let food = foodPreparation('filter water')(', basmati rice')(', biriyani powder');
// console.log(food);

                            // (or)

// let food = foodPreparation('filter water')(', basmati rice');
// console.log(food(', biriyani powder'));



// function inside the function (closure):

function outer(){
    let varOne = 2;
    console.log(varOne);
    return function inner(){
        let varTwo = 0;
        varTwo += varOne;
        // console.log("result", varTwo);
        return varTwo;
    }
}

// let outerFunction = outer();
// console.log(outerFunction);
// let innerFunction = outerFunction();
// console.log(innerFunction);


let varFunction = (()=>{
    count = 0;
    return ()=>{ 
        count+=1; 
        return count; 
    }
})();

// console.log(varFunction());
// console.log(varFunction());
// console.log(varFunction());