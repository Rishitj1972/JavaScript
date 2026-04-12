function clickMe() {
    alert("Clicked");
}

function printName() {
    let element = document.getElementById("titles");
    console.log(element.innerText="Rishi TJ");
}

function printNameTwo() {
    let element2 = document.getElementById("new_btn");
    console.log(element2.innerHTML = "<b>Rishi TJ</b>")
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    alert("Clicked");
})

let input = document.getElementById("textBox");
let b = document.getElementById("btn2");
let text = document.getElementById("text2");

b.addEventListener("click", function() {
    let t = input.value;

    text.innerText = t;
})