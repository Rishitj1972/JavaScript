const arr1 = [1,2];
const arr2 = [3,4];

const combined = [...arr1,...arr2];
console.log(combined)

// Copy Array

const arr3 = [3,4,5];
const newArr3 = [...arr3];
console.log(newArr3);

// Expands array into individual elements

const user = {
    name : "Rishi",
    age : 22
}

const updatedUser = {
    ...user,
    age : 21
}

console.log(updatedUser);