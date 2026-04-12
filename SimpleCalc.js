let a = 5;
let b = 6;

function add(a,b) {
    console.log(a + b);
}

function sub(a,b) {
    console.log(a - b);
}

function mul(a,b) {
    console.log(a * b);
}

function div(a,b) {
    if(a == 0) {
        console.log("Division is not possible");
    } else {
        console.log(a / b);
    }
}

add(a,b);
sub(a,b);
mul(a,b);
div(a,b);