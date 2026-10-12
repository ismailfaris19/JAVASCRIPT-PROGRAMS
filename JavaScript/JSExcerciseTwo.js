/*
  Convert the given total seconds into months, days, hours, minutes and seconds.
  input: 610 or 3700 or 4327894
  output: months: 0, days: 0, hours: 0, minutes: 10, seconds: 10 or months: 0, days: 0, hours: 1, minutes: 1, seconds: 40 or months: 1, days: 0, hours: 12, minutes: 4, seconds: 54
*/
function findDurationUsingMs(totalSeconds){
  let months = Math.floor(totalSeconds / 2592000); // 1 month = 30 days = 30 * 24 * 60 * 60 = 2592000 seconds
  totalSeconds %= 2592000
    
  let days = Math.floor(totalSeconds / 86400); // 1 day = 24 hours = 24 * 60 * 60 = 86400 seconds
  totalSeconds %= 86400;
    
  let hours = Math.floor(totalSeconds / 3600); // 1 hour = 60 minutes = 60 * 60 = 3600 seconds
  totalSeconds %= 3600;
  
  let minutes = Math.floor(totalSeconds / 60); // 1 minute = 60 seconds
  
  let seconds = totalSeconds % 60; // remaining seconds
    
  console.log(`months: ${months}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`)
}

// findDurationUsingMs(610);


/*
  Convert the given string into an array of two characters each.
  input: "hehehehehe"
  output: ["he", "he", "he", "he", "he"]
*/
function splitTheChars(inputString = "", characterCount = 0){
  let resultArray = [];

  // Alternative approach to find the character index before split
  if(characterCount === 0) {
    characterCount = inputString.indexOf(inputString[0], 1);
  }

  // Loop through the input string, taking two characters at a time and pushing them into the result array
  // for(let i = 0; i < inputString.length; i += characterCount){
  //   resultArray.push(inputString.slice(i, i + characterCount));
  // }

  // Alternative approach using Array.from
  // resultArray = Array.from({length: Math.ceil(inputString.length / characterCount)}, (_, i) => inputString.slice(i * characterCount, ((i * characterCount) + characterCount)));

  // Alternative approach using regex
  resultArray = inputString.match(new RegExp(`.{1,${characterCount}}`, 'g'));

  return resultArray;
}

// console.log(splitTheChars("hehehehehe"));


/*
  Find the intersection of two arrays.
  input: [1, 2, 3], [2, 3, 4]
  output: [2, 3]
*/
function findIntersection(arrOne, arrTwo) {
  return [...new Set(arrOne.filter(item => arrTwo.includes(item)))];
}

// console.log(findIntersection([1, 2, 3, 4], [2, 3, 4, 4]));


/*
  Move all zeros to the end.
  input: [0, 1, 0, 3, 12]
  output: [1, 3, 12, 0, 0]
*/
function moveAllZeros(arr) {
  // Without changing the array order
  let obj = { numbers: [], zeros: [] };
  arr.forEach(element => obj[element > 0 ? 'numbers' : 'zeros'].push(element));
  // return [...obj.numbers, ...obj.zeros];
  return Object.values(obj).flat(2);

  // With changing the array order
  // return arr.sort((a,b) => b - a);
}

// console.log(moveAllZeros([0, 14, 2, 0, 6, 4]));


/*
  Count vowels in a string
  input: "He is very good boy"
  output: 6

  Count words in string
  input: "He is very good boy"
  output: 5
*/
function countInString(textContent, type = "words") {
  if(type === "vowels") return textContent.split(' ').join('').split('').filter(item => ['a', 'e', 'i', 'o', 'u'].includes(item)).length;

  return textContent.split(' ').length;
}

// console.log(countInString("He is very good boy", "vowels"));


/*
  Find all prime number from 1 to N
  input: 20
  output: [2, 3, 5, 7, 11, 13, 17, 19]
*/
function findPrimeNumbers(lastNum){
  let result = [];

  let isPrime = (n) => {
    if(n == 1 || n == 0) return false;

    for (let i = 2; i < n; i++) {
      if(n % i ==  0) return false;
    }

    return true;
  }

  for (let i = 1; i <= lastNum; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result;
}

// console.log(findPrimeNumbers(20));


/*
  Find the missing element in the array.
  input: [8, 2, 4, 5, 3, 7, 1]
  output: 6
*/
function findMissingNumbers(arr){
  let result = [];
  arr = arr.sort((a, b) => a - b).map(item => String(item).charCodeAt(0));

  for(let i = 0; i < arr.length; i++) {
    let comparison = arr[i+1] - arr[i];
    if(comparison > 1) {
      result.push(Number(String.fromCharCode((arr[i+1] - 1))))
    }
  }

  return result;
}

// console.log(findMissingNumbers([8, 2, 4, 5, 3, 7, 1]));


/*
  Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer.
  input: arr[] = [1, 2, 3, 4, 5], d = 2
  output: [3, 4, 5, 1, 2]
*/
function rotateArray(arr, d) {
  if(arr.length !== d){
    for(let i = 0; i < d; i++){
      let shiftNum = arr.shift();
      arr.push(shiftNum);
    }
  }

  return arr;
}

// console.log(rotateArray([1, 2, 3, 4, 5], 3));


/*
  Maximum difference between two elements in an Array
  input: [2, 1, 5, 3] (or) [-10, 4, -9, -5]
  output: 4 (or) 14
*/
function maxDifference(arr) {
  arr = arr.sort((a, b) => b - a);
  return (arr[0] - arr[arr.length - 1]);
}

// console.log(maxDifference([-10, 4, -9, -5]));


/*
  Find the pair hash in an Array
  input: arr = [2, 1, 5, 3], target = 4
  output: [1, 3]
*/
function pairHash(arr, target) {
  let obj = {};
  arr.forEach((item, i) => {
    if(item < target) {
      let balance = Math.abs(target - item);
      let valid = (arr.with(i, 0).includes(balance)) && (![...new Set(Object.entries(obj).flat())].includes(item));

      if(valid) {
        obj[item] = balance;
      }
    }
  });
  return Object.entries(obj);
}

// console.log(pairHash([2, 2, 1, 5, 3], 8));


/*
  Grouping and Aggregating Data (Automation / Log Processing)
  Output: {
            AuthService: { totalCalls: 3, failures: 2, avgDuration: 256.6666666666667 },
            PaymentService: { totalCalls: 2, failures: 1, avgDuration: 400 }
          }
*/
function groupingAggregationData(data) {
  let obj = {}

  data.forEach(item => {
      if(!obj[item.service]) obj[item.service] = { totalCalls: 0, failures: 0, avgDuration: 0 };

      obj[item.service]['totalCalls'] += 1;
      obj[item.service]['avgDuration'] += item.duration;
      if(item.status == 'FAILURE') obj[item.service]['failures'] += 1;
  })

  for(let key in obj){
    obj[key]['avgDuration'] = Math.floor(obj[key]['avgDuration'] / obj[key]['totalCalls']);
  }

  return obj;
}

const logs = [
  { service: 'AuthService', status: 'SUCCESS', duration: 120 },
  { service: 'AuthService', status: 'FAILURE', duration: 450 },
  { service: 'PaymentService', status: 'SUCCESS', duration: 300 },
  { service: 'AuthService', status: 'FAILURE', duration: 200 },
  { service: 'PaymentService', status: 'FAILURE', duration: 500 }
];

// console.log(groupingAggregationData(logs));


/*
  Flattening a Nested Configuration Object (Tool Building)
  Output: {
            "server.host": "localhost",
            "server.port": 8080,
            "database.credentials.user": "admin",
            "database.credentials.pass": "secret123"
          }
*/
function flattenObjects(data, parentKey = "", res = {}) {
  for(let key in data) {
    let propKey = parentKey ? `${parentKey}.${key}` : key;
    let valid = (typeof data[key] === 'object') && (!Array.isArray(data[key]))

    if(valid) {
      flattenObjects(data[key], propKey, res);
    } else {
      res[propKey] = data[key];
    }
  }

  return res;
}

const config = {
  server: {
    host: 'localhost',
    port: 8080
  },
  database: {
    credentials: {
      user: 'admin',
      pass: 'secret123'
    }
  }
};

// console.log(flattenObjects(config));


/*
  Data Deduplication & Merging (API Payload Handling)
  Output: [
            { id: 1, action: 'logout', timestamp: 2000 },
            { id: 2, action: 'click', timestamp: 1500 },
            { id: 3, action: 'signup', timestamp: 1200 }
          ]
*/
function handleDataDuplication(...args) {
  let obj = {};
  args.flat().forEach(item => {
    if((!obj[item.id]) || (obj[item.id] && item.timestamp > obj[item.id]['timestamp'])) {
      obj[item.id] = item;
    }
  })
  return Object.values(obj);
}

const batch1 = [
  { id: 1, action: 'login', timestamp: 1000 },
  { id: 2, action: 'click', timestamp: 1500 }
];
const batch2 = [
  { id: 1, action: 'logout', timestamp: 2000 }, // newer timestamp for id 1
  { id: 3, action: 'signup', timestamp: 1200 }
];

// console.log(handleDataDuplication(batch1, batch2));


/*
  find the longest substring containing at most k distinct characters
  input: str = "aabbbeee", k = 2
  output: "bbbeee"
*/
function longestSubstring(str, k) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let current = "";

    for (let j = i; j < str.length; j++) {
      current += str[j];

      if (new Set(current).size > k) {
        break;
      }

      if (current.length > longest.length) {
        longest = current;
      }
    }
  }

  return longest;
}

// console.log(longestSubstring("aabbbeee", 2))