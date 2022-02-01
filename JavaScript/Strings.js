// from the left, start from 0 index.
// from the right, start from -1 index.

let str = `hello`;

// Getting first letter
/*
 The only difference between them is that if no character is found,
 [] returns undefined, and charAt returns an empty string: 
 Eg: str[1000] or str.charAt(1000)
 */
// console.log(str[0]);
// console.log(str.charAt(0));


// Getting last letter
// console.log(str[str.length - 1]);


// iterate over characters
// for(let val of str) {
//     console.log(val);
// }


// Strings are immutable
// str[0] = 'i'; // doesn't work
// console.log(str[0]) 


// create a whole new string and assign it to str
// str = 'H' + str[1] + str[2] + str[3] + str[4];
// console.log(str);


// Changing the case
// console.log(str.toUpperCase(), str.toLowerCase());


// different case letters have different codes
// console.log( "zello".codePointAt(0) ); // 122
// console.log( "ZELLO".codePointAt(0) ); // 90


// String.fromCodePoint(code) - Creates a character by its numeric code.
// console.log(String.fromCodePoint(90)); // Z


// 90 is 5a in hexadecimal system
// console.log( '\u005a' ); // Z


// Comparing strings
// console.log( 'a' > 'Z' ); // true
// console.log( 'Osterreich' > 'Zealand' ); // false
// console.log( 'Osterreich'.localeCompare('Zealand') ); // str<str2 => -1, str>str2 => 1, str==str2 => 0 


// indexOf() - returns the position where the match was found or -1 if nothing can be found.
// console.log(str.indexOf('o'), str.indexOf('a'));
// str = 'Widget id with id';
// console.log( str.indexOf('id', 3) ); // .indexOf(val, pos);


// includes, startsWith, endsWith - check the element is present or not
// console.log(str.includes("e"), str.includes("i")); // true false
// console.log(str.startsWith("h"), str.endsWith("o")); // true true


// Getting a substring
/* .slice(start, end) */
// console.log(str.slice(0, 2)); // 0 to 1
// console.log(str.slice(2)); // 2 to end
// console.log(str.slice(-3, -1)); // 3rd element right to 2nd element

/* .substring(start, end) */
// console.log(str.substring(2, 4), str.substring(4, 2)); // 2nd index to 3rd index

/* .substr(start, end) */
// console.log(str.substr(1, 4)); // from the left, get 4 elements from 1st index
// console.log(str.substr(-3, 2)); // from the right, get 2 elements from 3rd element


// .replace() - for replace the character or word.
// str = "hi \n hello";
// let newStr = str.replace(/[^a-zA-Z ]/g, "");
// console.log(newStr);


// .replaceAll - for replace all the characters and words.
// str = "Hi, I'm ismail. My email id is ismail@gmail.com";
// str = str.replaceAll('ismail', 'faris'); 
// console.log(str); // Hi, I'm faris. My email id is faris@gmail.com


// bitwise NOT trick
// console.log( ~2 ) // -3, same as (2+1)