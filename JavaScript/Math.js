///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////// JS MATH OBJECTS ///////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Math.PI - to get PI value //
// console.log(Math.PI); // 3.141592653589793

// Math.abs(<value>) - to get absolute value //
// console.log(Math.abs(-3)); // 3

// Math.ceil(<value>) - to get round value //
// console.log(Math.ceil(1.1)); // 2

// Math.floor(<value>) - to get round value but slightly different from ceil //
// console.log(Math.floor(1.1)); // 1

// Math.round(<value>) - to get round value //
// console.log(Math.round(1.4)); // Eg: 1.1 - 1.4 -> 1
// console.log(Math.round(1.5)); // Eg: 1.5 - 1.9 -> 2

// Math.random(<value>) - to get random value //
// console.log(Math.floor(Math.random())); // 0 (random value)
// console.log(Math.floor(Math.random() * (100 - 1) + 1)); // 31 (random value with starting and ending point)

// Math.min(<value>) - to get minimum value //
// console.log(Math.min(1, 2, 3, 4, 5)); // 1

// Math.max(<value>) - to get maximum value //
// console.log(Math.max(1, 2, 3, 4, 5)); // 5



/////////// JS MATH EXERCISES ///////////////////////////////////////

// function checkValue(a, b){
//     if( a < 0 || b < 0){
//         return undefined;
//     }
//     return Math.round(Math.pow((Math.sqrt(a)+Math.sqrt(b)), 2));
// }

// console.log(checkValue(8, 2));

// const binary = Math.pow(2, 3);
        // (or)
// const binary = 2 ** 3;

// console.log(binary);


// const marks = [96, 98, 99, 97, 90];
// const result = Math.max(...marks);
// console.log(result);
