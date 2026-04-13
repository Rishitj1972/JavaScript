// Basis -----------------------

const nums = [1,2,3,4,5,6];

const even = nums.filter(n => n % 2 == 0);
console.log(even);

// Real Use Case ----------------------

const names = ["Rishi","Ribin","Nazeel","Eldho","Anurag"];
const newNames = names.filter(n => n.startsWith("R"));
console.log(newNames);