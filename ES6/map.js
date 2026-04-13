// Basics ---------------------------

const nums = [1,2,3,4,5];

const newNums = nums.map(n => n);
console.log(newNums);

const squareNums = nums.map(n => n * 2);
console.log(squareNums);

// Real Use Case --------------------------

const users = ["Rishi", "Rishi TJ"];

const list = users.map(name => {
    console.log("Users : " + name);
})