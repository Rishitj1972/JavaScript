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

let words2 = ["Rishi","John"]
const list = words2.map(w => "Users : "+w);
console.log(list)


// Filter Practice Problem ----------------------------

// Even List 

let numList = [1,2,3,4,5,6]
const evenList = numList.filter( w => w % 2 == 0);
console.log(evenList);

// Greater than 10 

let numList2 = [10,11,23,9,15]
const newList = numList2.filter(w => w > 10);
console.log(newList);

// Filter names that starts with Letter "A"

let names = ["Rishi","Alan","Alex"]
const newNamesList = names.filter(w => w.startsWith("A"));
console.log(newNamesList);


// Destructuring Problems ------------------------

// Object Destructuring

const user = {
    name : "Rishi",
    age : 22,
    course : "MCA"
}

const {name,age} = user;

console.log(name);
console.log(age);

// Array Destructuring

let arr1 = [1,2,3,4];
const [a,b] = arr1;
console.log(a);
console.log(b);

// React Style -------------------

function showUser(user) {

    const {name,age} = user;

    console.log(name);
    console.log(age);
}

showUser({name : "Rishi", age : 22})

// Spread Operator ------------------------

// merge arrays 

let arr2 = [1,2,3,4]
let arr3 = [2,3,4,5]

let newArr = [...arr2,...arr3]
console.log(newArr)

// copy array and add new elements

let arr4 = [1,2,3,4]
let newArr2 = [...arr4,40]
console.log(newArr2)

// change age to 22 without editing the Object

let newObj = {
    type : "Object",
    number : 1
}
let newObj2 = {
    ...newObj,
    number : 2
}
console.log(newObj2)



// Mixed React-style Challenges +++++++++++++++++++++++

let MainUsers = [
    {name : "Rishi" , active:true},
    {name : "Pranav", active : false},
    {name : "vishnu", active : true},
    {name : "Aarav",active : true}
]

let activeUsers = MainUsers.filter(w => w.active).map(n => "Mr." + n.name)
console.log(activeUsers)

