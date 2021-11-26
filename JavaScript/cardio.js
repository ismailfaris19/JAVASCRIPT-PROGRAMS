/* To get the character which is repeating max number of times. */

function repeatedValue(value) {
    let charMap = {};
    let maxNum = 0;
    let maxChar = '';
    let arrOfChar = [];

    value.split('').forEach((item) => {
        if (charMap[item]){
            charMap[item]++;
        } else {
            charMap[item] = 1;
        }
    });

    console.log(charMap);

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
            // if (maxNum != 1){
            //     arrOfChar.push(char);
            // }       
        }
    }

    // return arrOfChar.map(n => console.log(n));
    return maxChar;
}

// const result = repeatedValue('javascripttttttt');

// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To reverse the string */

function reverseString(value){
    // const arrStr = value.split('');
    // arrStr.reverse();
    // return arrStr.join('');

            // (or)

    // return value.split('').reverse().join('');

            // (or)

    // let arrStr = '';
    // for(let i = value.length-1; i >= 0; i--){
    //     arrStr += value[i];
    // }
    /* To remove the word or character from the string using replace() */
    // dupStr = arrStr.replace('undefined', ''); 
    // return arrStr;

            // (or)

    // let arrStr = '';
    // for(let i = 0; i < value.length; i++){
    //     arrStr = value[i] + arrStr;
    // }
    // return arrStr;

            // (or)

    // let arrStr = '';
    // for( let char of value){
    //     arrStr = char + arrStr;
    // }
    // return arrStr;

            // (or)

    // let arrStr = '';
    // value.split('').forEach((item) => {
    //     arrStr = item + arrStr;
    // })
    // return arrStr;

            // (or)

    return value.split('').reduce((arrStr, char) => {
        return char + arrStr;
    }, '');
}

// const result = reverseString('hello');
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To validate palindrome */

function checkPalindrome(value){
    let revStr = value.split('').reverse().join('');
    return revStr === value;
}

// const result = checkPalindrome('madam');
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To reverse the number */

function reverseNumber(value){
    /* To convert the number to a string and reverse it. 
    Then convert to integer and return the value. 
    Math.sign() method for getting negative or postive integer. */
    let revNum = parseInt(value.toString().split('').reverse().join('')) * Math.sign(value);
    return revNum;
}

// const result = reverseNumber(-987456);
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To capitalize the string */

function capitalize(value){
    // let  orgStr = value.toLowerCase().split(' ');
    // for (let i = 0; i < orgStr.length; i++){
    //     orgStr[i] = orgStr[i].substring(0, 1).toUpperCase() + orgStr[i].substring(1);
    // }
    // return orgStr.join(' ');

                // (or)

    // return value.toLowerCase().split(' ').map (word =>  word[0].toUpperCase() + word.substring(1)).join(' ');

                // (or)

    return value.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// const result = capitalize('hi dude');
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To print Fizz for multiples of 3, to print Buzz for multiples of 5 and to print FizzBuzz for multiples of both 3 & 5. */

function fizzBuzz(value){
    for(let i=1; i<=value; i++){
        if(i%3 == 0){
            if(i%5 == 0){
                console.log("FizzBuzz");
            } else {
            console.log("Fizz");
            }
        } else if(i%5 == 0){
            if(i%3 == 0){
                console.log("FizzBuzz");
            } else {
            console.log("Buzz");
            }
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz(100);

//////////////////////////////////////////////////////////////////////

/* To check which is longest word in an sentence. */

function longestWord(sentence) {
    const wordArray = sentence.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArray.sort((a, b) => b.length - a.length );

    console.log(sorted);

    const longestWord = sorted.filter(word => word.length === sorted[0].length);

    if(longestWord.length == 1){
        return longestWord[0];
    } else {
        return longestWord.toString();
    }
}

// const result = longestWord('hi dude, how are you?');
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* Array Chunking Eg: chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3], [4,5,6], [7]]. */

function chunkArray(arr, len){
    const chunk = [];
    // let i = 0;
    // while(i < arr.length){
    //     // slice(starting index, last index-1) Eg: below slice method denotes slice(0, 2).    
    //     chunk.push(arr.slice(i, i + len));
    //     i += len;
    // }

                // (or)

    arr.forEach(val => {
        const last = chunk[chunk.length - 1];
        if(!last || last.length === len){
            chunk.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunk;
}

// const result = chunkArray([1,2,3,4,5,6,7], 2);
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* To convert chunk array to normal array */

function chunkArrayToNormal(arrays){
    // return arrays.reduce((a, b) => {
    //     return a.concat(b);
    // });

                // (or)

    // apply(first , second) - second parameter denotes the array which we pass there and first parameter which we want to remove from an array(second parameter).
    // return [].concat.apply([], arrays);

                // (or)

    // ...<array-name> - we can pass the whole array as parameter using this spread operator.
    return [].concat(...arrays);
}

// const result = chunkArrayToNormal([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]);
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* ANAGARAM Eg: 'elbow' === 'below' */

function checkAnagaram(a, b){
    return helper(a) === helper(b);
}

function helper(str){
    // this below statement is used to split characters from the word, assign it in alphabetical order and again join to form as word.
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// console.log(helper('faris'));
// const result = checkAnagaram('faris', 'sirak');
// console.log(result);

//////////////////////////////////////////////////////////////////////

/* LETTER CHANGES AND CAPITALIZE THE VOWELS Eg: 'hello faris' === 'Ifmmp Gbsjt' */

function changeAndCapitalize(str) {
    let newString = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === 'z' || char === 'Z'){
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
});

newString = newString.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

return newString;
}

// const result = changeAndCapitalize('hello there');
// console.log(result);

////////////////////////////////////////////////////////////////////

/* To add all parameters(numbers) */

// using ES5 arguments & for loop
// arguments - used to call parameters which we passed on function call time.
// Array.from() and Array.prototype.slice.call() are same.
// function addAllParameters(){
//     let args = Array.prototype.slice.call(arguments);  
//     let total = 0;
//     for(let i=0; i<args.length; i++){
//         total += args[i];
//     }
//     return total;
// }

                // (or)

// using ...rest operator and reduce / forEach.
// we can give any name for ...rest operator Eg: ...number
function addAllParameters(...number){
    // let total = 0;
    // number.forEach(n => total += n);
    // return total;

                // (or)
    
    /* reduce(acc, cur) - acc means accumulator and it takes 0 as default value. 
    cur mean current value and it takes current value from an array. 
    Eg: reduce(0, 2) -> 0 + 2 */

    return number.reduce((acc, cur) => acc + cur);
}

// const result = addAllParameters(2, 4, 6, 8, 10);
// console.log(result);

/////////////////////////////////////////////////////////////////////////

/* To add all the prime numbers */

function addAllPrimes(num) {
        let total = 0;

        for(let i = 2; i <= num; i++) {
            if(checkPrime(i)){
                total += i;
            }
        }
        return total;
}

function checkPrime(i) {
    for(let j = 2; j < i; j++) {
        if(i % j == 0){
            return false;
        }
    }
    return true;
}

// const result = addAllPrimes(10);
// console.log(result);

////////////////////////////////////////////////////////////////////////

/* 
To return values in an array which is not equal to other parameter.
Eg: seekAndDestroy([1, 2, 3, 4, 'hi'], 2, 3) == [1,4,'hi']
*/

// function seekAndDestroy(arr){
//     const args = Array.from(arguments);
//     // console.log(arr);
//     // console.log(args);
//     function filterArray(arr){
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArray);
// }

                //(or)

function seekAndDestroy(arr, ...rest){
    /* filter() - it returns the value which is the condition is true. */
    return arr.filter(val => !rest.includes(val));
}

// const result = seekAndDestroy([1, 2, 3, 4, 'hi'], 2, 3, 'hi');
// console.log(result);

/////////////////////////////////////////////////////////////////////////////

 /* To re-arranging the value in an array without changing the position of negative one. */

function rearrangingValues(a){
    const arr1 = [];
    const arr2 = [];

    // a.forEach((val, i) => {
    //     if(val === -1){
    //         arr1.push(i);
    //     } else {
    //         arr2.push(val);
    //     }
    // });

                // (or)

    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

    console.log(arr1);
    console.log(arr2);

    // this below statement for arrange the array in ascending order
    const sorterArray = arr2.sort((a, b) => a - b);

    arr1.forEach((val, i) => sorterArray.splice(arr1[i], 0, -1));

    return sorterArray;
}

const a = [-1, 5, 3, 9,-1, 6,-1];

// console.log(rearrangingValues(a));

/////////////////////////////////////////////////////////////////////////////

/* MISSING LETTERS */

 function missingLetters(a) {
     let compare = a.charCodeAt(0);
     let missing;
     
     a.split('').map((val, i) => {
         if(a.charCodeAt(i) === compare){
             ++compare;
         } else {
             missing = String.fromCharCode(compare);
         }
     });
     return missing;
 }

//  console.log(missingLetters('abdef'));

/////////////////////////////////////////////////////////////////////////////

/* SUM OF EVEN AND ODD */

function evenAndOdd(arr){
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach(num => num % 2 === 0 ? evenSum += num : oddSum += num);
    return [evenSum, oddSum];
}

// console.log(evenAndOdd([1,2,3,4,5,6]));