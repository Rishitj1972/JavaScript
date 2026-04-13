
// Old Way -----------------
function add(a,b) {
    console.log(a + b);
}
add(2,3);


// New Way -----------------
const add2 = (a,b) => console.log(a + b);
add2(2,3);

const sub = (a,b) => console.log(a - b);
sub(3,2);

// Another Example
let word = "Rishi"
const greet = (word) = "Hello " + word;
console.log(greet)


const square = (x) => console.log(x * x);
square(5);