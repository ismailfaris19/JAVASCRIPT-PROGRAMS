/////////////////////// STRING METHODS ///////////////////////

function stringMethods(type) {
    let result = "";

    if (type === "charAt") {
        result = "hello".charAt(1); // "e" - Returns the character at the specified index.
    }

    if (type === "charCodeAt") {
        result = "ABC".charCodeAt(0); // 65 - charCodeAt(index): Returns the UTF-16 integer code unit at the index.
    }

    if (type === "codePointAt") {
        result = "𝒳".codePointAt(0); // 119987 - codePointAt(index): Returns the complete Unicode code point value at the index.
    }

    if (type === "at") {
        result = "world".at(-1); // "d" - at(index): Returns character at index; supports negative integers for end-relative indexing.
    }

    if (type === "indexOf") {
        result = "banana".indexOf("an"); // 1 - indexOf(substring, fromIndex): Returns the index of the first occurrence of a substring, or -1.
    }

    if (type === "lastIndexOf") {
        result = "banana".lastIndexOf("an"); // 3 - lastIndexOf(substring, fromIndex): Returns the index of the last occurrence of a substring, or -1.
    }

    if (type === "includes") {
        result = "developer".includes("elop"); // true - includes(substring): Checks if a substring exists within the string (returns boolean).
    }

    if (type === "startsWith") {
        result = "JavaScript".startsWith("Java"); // true - startsWith(prefix): Checks if the string begins with the specified characters.
    }

    if (type === "endsWith") {
        result = "JavaScript".endsWith("Script"); // true - endsWith(suffix): Checks if the string ends with the specified characters.
    }

    if (type === "substring") {
        result = "Frontend".substring(5, 0); // "Front" - substring(start, end): Extracts characters between two indices (swaps if start > end)
    }

    if (type === "toLowerCase") {
        result = "HELLO".toLowerCase(); // "hello" - toLowerCase(): Converts the string to lowercase.
    }

    if (type === "toUpperCase") {
        result = "hello".toUpperCase(); // "HELLO" - toUpperCase(): Converts the string to uppercase.
    }

    if (type === "trim") {
        result = "  clean  ".trim(); // "clean" - trim(): Removes whitespace from both ends of the string.
    }

    if (type === "trimStart") {
        result = "  start".trimStart(); // "start" - trimStart(): Removes whitespace from the beginning of the string.
    }

    if (type === "trimEnd") {
        result = "end  ".trimEnd(); // "end" - trimEnd(): Removes whitespace from the end of the string.
    }

    if (type === "padStart") {
        result = "5".padStart(3, "0"); // "005" - padStart(targetLength, padString): Pads the current string with another string until it reaches the target length.
    }

    if (type === "padEnd") {
        result = "5".padEnd(3, "0"); // "500" - padEnd(targetLength, padString): Pads the current string with another string until it reaches the target length.
    }

    if (type === "repeat") {
        result = "ha".repeat(3); // "hahaha" - repeat(count): Returns a new string with the specified number of copies of the string.
    }

    if (type === "concat") {
        result = "Hello".concat(" ", "World"); // "Hello World" - concat(string1, string2, ...): Combines multiple strings into one.
    }

    if (type === "split") {
        result = "a-b-c".split("-"); // ["a", "b", "c"] - split(separator, limit): Splits the string into an array of substrings based on the specified separator.
    }

    if (type === "replace") {
        result = "quick fox".replace("fox", "dog"); // "quick dog" - replace(searchValue, newValue): Replaces the first occurrence of a substring with a new value.
    }

    if (type === "replaceAll") {
        result = "cat and cat".replaceAll("cat", "dog"); // "dog and dog" - replaceAll(searchValue, newValue): Replaces all occurrences of a substring with a new value.
    }

    if (type === "match") {
        result = "Price: $50".match(/\d+/)[0]; // "50" - match(regex): Returns an array of matches for the regex pattern.
    }

    if (type === "matchAll") {
        result = "test1test2".matchAll(/t(e)(st\d)/g); // Matches iterator - matchAll(regex): Returns an iterator of all regex matches including capture groups.
    }

    if (type === "search") {
        result = "item 42".search(/\d+/); // 5 - search(regex): Returns the index of the first match for the regex pattern, or -1 if not found.
    }

    if (type === "normalize") {
        result = "\u0041\u030A".normalize("NFC"); // "Å" - normalize(form): Returns the Unicode Normalization Form of the string (NFC, NFD, NFKC, NFKD).
    }

    if (type === "fromCharCode") {
        result = String.fromCharCode(65, 66); // "AB" - fromCharCode(num1, num2, ...): Returns a string created from the specified sequence of UTF-16 code units.
    }

    if (type === "fromCodePoint") {
        result = String.fromCodePoint(0x1F600, 0x1F601); // "😀😁" - fromCodePoint(num1, num2, ...): Returns a string created from the specified sequence of Unicode code points.
    }

    if (type === "raw") {
        result = String.raw`Line 1\nLine 2`; // "Line 1\\nLine 2" - raw(templateStrings, ...substitutions): Returns a string created from a template literal, preserving escape sequences.
    }

    return result;
}

// console.log(stringMethods("charAt")); 



/////////////////////// NUMBER METHODS ///////////////////////

function numberMethods(type) {
    let result = 0;

    if (type === "toFixed") {
        result = (3.14159).toFixed(2); // "3.14" - toFixed(digits): Formats a number using fixed-point notation.
    }

    if(type === "toPrecision") {
        result = (3.14159).toPrecision(4); // "3.142" - toPrecision(precision): Formats a number to a specified length.
    }

    if (type === "toExponential") {
        result = (77000).toExponential(2); // "7.70e+4" - toExponential(fractionDigits): Returns a string representing the number in exponential notation.
    }

    if (type === "toString") {
        result = (255).toString(16); // "ff" - toString(radix): Converts a number to a string in the specified base (radix).
    }

    if (type === "toLocaleString") {
        result = (1234567.89).toLocaleString("de-DE"); // "1.234.567,89" - toLocaleString(locale, options): Returns a string with a language-sensitive representation of the number.
    }

    if (type === "valueOf") {
        result = (123).valueOf(); // 123 - valueOf(): Returns the primitive value of a number object.
    }

    if (type === "parseInt") {
        result = parseInt("42px"); // 42 - parseInt(string, radix): Parses a string argument and returns an integer of the specified radix (base).
    }

    if (type === "parseFloat") {
        result = parseFloat("3.14meters"); // 3.14 - parseFloat(string): Parses a string argument and returns a floating point number.
    }

    if (type === "isInteger") {
        result = Number.isInteger(10.5); // false - isInteger(value): Determines whether the passed value is an integer.
    }

    if (type === "isSafeInteger") {
        result = Number.isSafeInteger(9007199254740991); // true - isSafeInteger(value): Determines whether the passed value is a safe integer.
    }

    if (type === "isFinite") {
        result = Number.isFinite(1 / 0); // false - isFinite(value): Determines whether the passed value is a finite number.
    }

    if (type === "isNaN") {
        result = Number.isNaN(NaN); // true - isNaN(value): Determines whether the passed value is NaN (Not-a-Number).
    }

    return result;
}

// console.log(numberMethods("parseFloat"));



/////////////////////// ARRAY METHODS ///////////////////////

function arrayMethods(type, inputType = 1) {
    let result = [1, 2, 3];

    if (type === "push") {
        result.push(4); // Adds one or more elements to the end of an array and returns the new length of the array.
    }

    if (type === "pop") {
        result.pop(); // Removes the last element from an array and returns that element. This method changes the length of the array.
    }

    if (type === "shift") {
        result.shift(); // Removes the first element from an array and returns that removed element. This method changes the length of the array.
    }

    if (type === "unshift") {
        result.unshift(0); // Adds one or more elements to the beginning of an array and returns the new length of the array.
    }

    if (type === "splice") {
        result.splice(1, 1, 99); // splice(start, deleteCount, ...items): Adds, removes, or replaces elements in place.
    }

    if (type === "reverse") {
        result = result.reverse(); // Reverses the order of the elements of an array in place.
    }

    if (type === "sort") {
        result = result.sort((a, b) => b - a); // Sorts the elements of an array in place and returns the sorted array.
    }

    if (type === "fill") {
        result.fill(0, 1, 3); // fill(value, start, end): Fills all the elements of an array from a start index to an end index with a static value.
    }

    if (type === "copyWithin") {
        result.copyWithin(0, 2, 3); // copyWithin(target, start, end): Copies a sequence of array elements within the array to the position starting at target.
    }

    if (type === "concat") {
        result = result.concat([4, 5]); // Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    } 

    if (type === "slice") {
        result = result.slice(1, 3); // array.slice(start, end):  Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    }

    if (type === "join") {
        result = result.join("-"); // array.join(separator): Joins all elements of an array into a string and returns this string.
    }

    if (type === "indexOf") {
        result = [...result, 5, 4, 2].indexOf(2, 3); // array.indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    }

    if (type === "lastIndexOf") {
        result = [...result, 5, 4, 2].lastIndexOf(2, 3); // array.lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
    }

    if (type === "includes") {
        result = result.includes(2); // array.includes(searchElement, fromIndex): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    }

    if (type === "find") {
        result = result.find(element => element > 2); // array.find(callback): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
    }

    if (type === "findIndex") {
        result = result.findIndex(element => element > 2); // array.findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
    }

    if (type === "findLast") {
        result = [...result, 5, 4, 2].findLast(element => element > 2); // array.findLast(callback): Returns the value of the last element in the array that satisfies the provided testing function. Otherwise undefined is returned.
    }

    if (type === "findLastIndex") {
        result = [...result, 5, 4, 2].findLastIndex(element => element > 2); // array.findLastIndex(callback): Returns the index of the last element in the array that satisfies the provided testing function. Otherwise -1 is returned.
    }

    if (type === "reduce") {
        result = ["a", "b", "c"].reduce((accumulator, currentValue) => accumulator + currentValue, 0); // array.reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
    }

    if (type === "reduceRight") {
        result = ["a", "b", "c"].reduceRight((accumulator, currentValue) => accumulator + currentValue, 0); // array.reduceRight(callback, initialValue): Executes a reducer function on each element of the array from right to left, resulting in a single output value.
    }

    if (type === "some") {
        result = result.some(element => element % 2 === 0); // array.some(callback): Tests whether at least one element in the array passes the test implemented by the provided function. Returns a Boolean value.
    }

    if (type === "every") {
        result = result.every(element => element % 2 === 0); // array.every(callback): Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value.
    }

    if (type === "filter") {
        result = result.filter(element => element >= 2); // array.filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.
    }

    if (type === "map") {
        result = result.map(element => element * 2); // array.map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array.
    }

    if (type === "forEach") {
        [4, 5, 6].forEach(element => result.push(element)); // array.forEach(callback): Executes a provided function once for each array element.
    }

    if (type === "flat") {
        result = [1, [2, [3, 4]]].flat(2); // array.flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth by passing 1 or Infinity as the depth parameter.
    }

    if (type === "flatMap") {
        result = result.flatMap(x => [x, x * 2]); // array.flatMap(callback): First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
    }

    if (type === "at") {
        result = result.at(-1); // array.at(index): Returns the item at the given index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
    }

    if (type === "with") {
        result = result.with(1, 99); // array.with(index, value): Returns a new array with the element at the specified index replaced by the given value.
    }

    if (type === "entries") {
        result = [...["a", "b", "c"].entries()]; // array.entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
    }

    if (type === "keys") {
        result = [...["a", "b", "c"].keys()]; // array.keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
    }

    if (type === "values") {
        result = [...["a", "b", "c"].values()]; // array.values(): Returns a new Array Iterator object that contains the values for each index in the array.
    }

    if (type === "isArray") {
        result = Array.isArray([1, 2, 3]); // array.isArray(value): Determines whether the passed value is an Array.
    }

    if (type === "from") {
        let str = "hehehehehe";
        result = inputType === 1 ? 
        Array.from({ length: Math.ceil(str.length / 2) }, (_, i) => str.slice(i * 2, i * 2 + 2)) : 
        inputType === 2 ? Array.from(str, char => char.toUpperCase()) : 
        Array.from("123456", Number); // array.from(arrayLike, mapFn, thisArg): Creates a new, shallow-copied Array instance from an array-like or iterable object.
    }

    if (type === "of") {
        result = Array.of(1, "2", 3); // array.of(element0, element1, ...): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
    }

    return result;
}

// console.log(arrayMethods("from", 1));



/////////////////////// Object METHODS ///////////////////////

function objectMethods(type) {
    let result = {c: 3, d: 4};

    if (type === "keys") {
        result = Object.keys({ a: 1, b: 2 }); // ["a", "b"] - Object.keys(obj): Returns an array of a given object's own enumerable property names.
    }

    if (type === "values") {
        result = Object.values({ a: 1, b: 2 }); // [1, 2] - Object.values(obj): Returns an array of a given object's own enumerable property values.
    }

    if (type === "entries") {
        result = Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]] - Object.entries(obj): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
    }

    if (type === "fromEntries") {
        result = Object.fromEntries([["a", 1], ["b", 2]]); // { a: 1, b: 2 } - Object.fromEntries(iterable): Transforms a list of key-value pairs into an object.
    }

    if (type === "freeze") {
        Object.freeze(result); // Object.freeze(obj): Completely freezes an object (no add, remove, or modify).
        result = Object.isFrozen(result); // true - Object.isFrozen(obj): Determines if an object is frozen.
    }

    if (type === "seal") {
        Object.seal(result); // Object.seal(obj): Seals an object (no add or remove, but can modify existing properties).
        result = Object.isSealed(result); // true - Object.isSealed(obj): Determines if an object is sealed.
    }

    if (type === "preventExtensions") {
        Object.preventExtensions(result);
        result = Object.isExtensible(result); // false - Object.preventExtensions(obj): Prevents new properties from being added to an object. Object.isExtensible(obj): Determines if an object is extensible.
    }

    if (type === "hasOwn") {
        result = Object.hasOwn({ a: 1, b: 2 }, "a"); // true - Object.hasOwn(obj, prop): Determines whether an object has the specified property as its own property.
    }

    if (type === "defineProperty") {
        Object.defineProperty(result, "e", { value: 5, writable: false }); // Object.defineProperty(obj, prop, descriptor): Adds a named property described by a given descriptor to an object.
        result.e = 10; // Attempt to modify the property (will not change due to writable: false)   
        result = result.e; // 5
    } 

    if (type === "defineProperties") {
        Object.defineProperties(result, {
            f: { value: 6, writable: true },
            g: { value: 7, writable: false }
        });

        result.f = 10; // Modifiable property
        result.g = 20; // Non-modifiable property
        result = { f: result.f, g: result.g }; // { f: 10, g: 7 }
    }

    if (type === "getOwnPropertyDescriptor") {
        result = Object.getOwnPropertyDescriptor(result, "c"); // { value: 3, writable: true, enumerable: true, configurable: true } - Object.getOwnPropertyDescriptor(obj, prop): Returns a property descriptor for an own property of a given object.
    }

    if (type === "getOwnPropertyDescriptors") {
        result = Object.getOwnPropertyDescriptors(result); // Returns an object containing all own property descriptors of the given object.
    }

    if (type === "getOwnPropertyNames") {
        result = Object.getOwnPropertyNames(result); // Returns an array of all own property names (enumerable or not) of the given object.
    }

    if (type === "is") {
        result = Object.is(25, 25); // true - Object.is(value1, value2): Determines whether two values are the same value.
    }

    if (type === "groupBy") {
        const items = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 }
        ];
        result = Object.groupBy(items, item => item.age);
    }

    if (type === "hasOwnProperty") {
        result = result.hasOwnProperty("c"); // true - obj.hasOwnProperty(prop): Determines whether an object has the specified property as its own property.
    }

    if (type === "toString") {
        result = result.toString(); // "[object Object]" - obj.toString(): Returns a string representation of the object.
    }

    if (type === "valueOf") {
        result = result.valueOf(); // Returns the primitive value of the specified object.
    }

    if (type === "assign") {
        const target = { a: 1 };
        const source = { b: 2, c: 3 };
        result = Object.assign(target, source); // { a: 1, b: 2, c: 3 } - Object.assign(target, ...sources): Copies the values of all enumerable own properties from one or more source objects to a target object.
    }

    if (type === "create") {
        const proto = { greet: function() { return "Hello"; } };
        let res = Object.create(proto); // Creates a new object with the specified prototype object and properties. The new object inherits from the specified prototype.
        result = res.greet(); // "Hello" - Calls the inherited method from the prototype.   
    }

    return result;
}

// console.log(objectMethods("create"));



/////////////////////// Math METHODS ///////////////////////

function mathMethods(type, inputType = 1) {
    let result = 0;

    if (type === "abs") {
        result = Math.abs(-5); // 5 - Returns the absolute value of a number.
    }

    if (type === "round") {
        result = Math.round(4.6); // 5 - Rounds a number to the nearest integer.
    }

    if (type === "floor") {
        result = Math.floor(4.9); // 4 - Rounds a number down to the nearest integer.
    }

    if (type === "ceil") {
        result = Math.ceil(4.1); // 5 - Rounds a number up to the nearest integer.
    }

    if (type === "trunc") {
        result = Math.trunc(4.9); // 4 - Returns the integer part of a number by removing any fractional digits.
    }

    if (type === "max") {
        result = Math.max(1, 3, 2); // 3 - Returns the largest of zero or more numbers.
    }

    if (type === "min") {
        result = Math.min(1, 3, 2); // 1 - Returns the smallest of zero or more numbers.
    }

    if (type === "pow") {
        result = Math.pow(2, 3); // 8 - Returns the base to the exponent power, that is, base^exponent.
    }

    if (type === "sqrt") {
        result = Math.sqrt(16); // 4 - Returns the square root of a number.
    }

    if (type === "cbrt") {
        result = Math.cbrt(27); // 3 - Returns the cube root of a number.
    }

    if (type === "random") {
        result = inputType === 1 ?  
       (Math.floor(Math.random() * (100 - 90 + 1)) + 90) : // Returns a pseudo-random integer between 90 and 100 (inclusive).
       Math.random(); // Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
    }

    if (type === "sign") {
        result = Math.sign(-5); // -1 - Returns the sign of a number, indicating whether the number is positive, negative or zero such as 1, -1, 0, or NaN
    }

    return result;
}

// console.log(mathMethods("sign"));



/////////////////////// Date METHODS ///////////////////////

function dateMethods(type) {
    let result = new Date();

    if (type === "getFullYear") {
        result = result.getFullYear(); // 2026 - Returns the year (4 digits for 4-digit years) of the specified date according to local time.
    }

    if (type === "getMonth") {
        result = result.getMonth(); // 0 - Returns 0-indexed month (0 = Jan, 11 = Dec).
    }

    if (type === "getDate") {
        result = result.getDate(); // 1-31 - Returns the day of the month (1-31) for the specified date according to local time.
    }

    if (type === "getDay") {
        result = result.getDay(); // 0-6 - Returns the day of the week (0 = Sun, 6 = Sat) for the specified date according to local time.
    }

    if (type === "getHours") {
        result = result.getHours(); // 0-23 - Returns the hour (0-23) in the specified date according to local time.
    }

    if (type === "getMinutes") {
        result = result.getMinutes(); // 0-59 - Returns the minutes (0-59) in the specified date according to local time.
    }

    if (type === "getSeconds") {
        result = result.getSeconds(); // 0-59 - Returns the seconds (0-59) in the specified date according to local time.
    }

    if (type === "getMilliseconds") {
        result = result.getMilliseconds(); // 0-999 - Returns the milliseconds (0-999) in the specified date according to local time.
    }

    if (type === "getUTCFullYear") {
        result = result.getUTCFullYear(); // 2026 - Returns the year (4 digits for 4-digit years) of the specified date according to universal time.
    }

    if (type === "getUTCMonth") {
        result = result.getUTCMonth(); // 0 - Returns 0-indexed month (0 = Jan, 11 = Dec) according to universal time.
    }

    if (type === "getUTCDate") {
        result = result.getUTCDate(); // 1-31 - Returns the day of the month (1-31) according to universal time.
    }

    if (type === "getUTCDay") {
        result = result.getUTCDay(); // 0-6 - Returns the day of the week (0 = Sun, 6 = Sat) according to universal time.
    }

    if (type === "getUTCHours") {
        result = result.getUTCHours(); // 0-23 - Returns the hour (0-23) according to universal time.
    }

    if (type === "getUTCMinutes") {
        result = result.getUTCMinutes(); // 0-59 - Returns the minutes (0-59) according to universal time.
    }

    if (type === "getUTCSeconds") {
        result = result.getUTCSeconds(); // 0-59 - Returns the seconds (0-59) according to universal time.
    }

    if (type === "setFullYear") {
        result.setFullYear(2025); // Sets the full year (4 digits for 4-digit years) of the specified date according to local time.
        result = result.getFullYear(); // 2025
    }

    if (type === "setMonth") {
        result.setMonth(5); // Sets the month (0-11) of the specified date according to local time. 
        result = result.getMonth(); // 5
    }

    if (type === "setDate") {
        result.setDate(15); // Sets the day (1-31) of the specified date according to local time.
        result = result.getDate(); // 15
    }

    if (type === "setHours") {
        result.setHours(10, 30, 45, 500); // setHours(hours, minutes, seconds, milliseconds): Sets the hour (0-23) of the specified date according to local time.
        result = result.getHours(); // 10
    }

    if (type === "setMinutes") {
        result.setMinutes(30); // setMinutes(minutes, seconds, milliseconds): Sets the minutes (0-59) of the specified date according to local time.
        result = result.getMinutes(); // 30
    }

    if (type === "setSeconds") {
        result.setSeconds(45); // setSeconds(seconds, milliseconds): Sets the seconds (0-59) of the specified date according to local time.
        result = result.getSeconds(); // 45
    }

    if (type === "setMilliseconds") {
        result.setMilliseconds(500); // setMilliseconds(milliseconds): Sets the milliseconds (0-999) of the specified date according to local time.
        result = result.getMilliseconds(); // 500
    }

    if (type === "toISOString") {
        result = result.toISOString(); // "2026-09-10T08:02:36.000Z" - Returns a string in simplified extended ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
    }

    if (type === "toLocaleString") {
        result = result.toLocaleString(); // "9/10/2026, 8:02:36 AM" - Returns a string with a language-sensitive representation of the specified date and time according to local time.
    }

    if (type === "toLocaleDateString") {
        result = result.toLocaleDateString("en-US"); // "9/10/2026" - Returns a string with a language-sensitive representation of the date portion of the specified date according to local time.
    }

    if (type === "toLocaleTimeString") {
        result = result.toLocaleTimeString("en-US"); // "8:02:36 AM" - Returns a string with a language-sensitive representation of the time portion of the specified date according to local time.
    }

    if (type === "toDateString") {
        result = result.toDateString(); // "Thu Sep 10 2026" - Returns a string with a language-sensitive representation of the date portion of the specified date according to local time.
    }   

    if (type === "toTimeString") {
        result = result.toTimeString(); // "08:02:36 GMT+0000 (Coordinated Universal Time)" - Returns a string with a language-sensitive representation of the time portion of the specified date according to local time.
    }

    if (type === "toUTCString") {
        result = result.toUTCString(); // "Thu, 10 Sep 2026 08:02:36 GMT" - Returns a string with a language-sensitive representation of the specified date according to universal time.
    }

    if (type === "toJSON") {
        result = result.toJSON(); // "2026-09-10T08:02:36.000Z" - Returns a string representation of the specified date according to universal time, in JSON format.
    }

    if (type === "now") {
        result = Date.now(); // 1789027956000 - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
    }

    return result;
}

// console.log(dateMethods("toJSON"));