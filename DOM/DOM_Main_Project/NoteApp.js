let input = document.getElementById("noteInput");
let add = document.getElementById("addBtn");
let clear = document.getElementById("clearBtn");
let counter = document.getElementById("count");
let container = document.getElementById("noteContainer");

let count = 0;

function updateCount() {
    counter.innerText=count;
}

function addNote() {

    // get the input
    // .trim() removes spaces
    const text = input.value.trim();
    if(text == "") {
        alert("Input Cannot Be Empty");
        return;
    }

//     create Note
//     <div class="note"></div>
// This is your dynamic UI element
    const note = document.createElement("div");
    note.classList.add("note");

    // text span
    // This holds the note text
    const span = document.createElement("span");
    span.innerText = text;

    // button container
    const btnGroup = document.createElement("div");

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function(){
        container.removeChild(note);    
        count--;
        updateCount();
    });

    const impBtn = document.createElement("button");
    impBtn.innerText = "important";

    impBtn.addEventListener("click", function() {
        note.classList.toggle("important");
    })

    btnGroup.appendChild(impBtn);
    btnGroup.appendChild(delBtn);

    note.appendChild(span);
    note.appendChild(btnGroup);

    container.appendChild(note);

    count++;
    updateCount();

    input.value="";
}

add.addEventListener("click", addNote);

// Press Enter = same as clicking Add
input.addEventListener("keypress", function(e) {
    if(e.key == "Enter") addNote();
});

clear.addEventListener("click", function() {
    container.innerText= "";
    count = 0;
    updateCount();
})

// note (div)
//  ├── span (text)
//  └── button group
//        ├── important
//        └── delete