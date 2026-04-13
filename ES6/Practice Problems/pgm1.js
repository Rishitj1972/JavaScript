// Arrow Function -------------------

// first one
const mul = (a,b) => console.log(a * b);
mul(2,3);

// second one
const square = (x) => console.log(x * x);
square(2);

// return string
const greet = (word) => console.log("Hello "+ word);
greet("Rishi");

// Map Practice ------------------

// square array
let nums = [1,2,3,4,5];
const newNums = nums.map(n => n * 2);
console.log(newNums);

// convert string to uppercase
let words = ["apple","banana","mango"];
const newWords = words.map(w => w.toUpperCase());
console.log(newWords);

// update string to key value
