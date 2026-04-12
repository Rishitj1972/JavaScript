// Grab DOM elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add task
function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return; // prevent empty tasks

    // create li element
    const li = document.createElement("li");
    li.innerText = taskText;

    // create delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    // delete functionality
    delBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // prevent li click event
        taskList.removeChild(li);
    });

    // toggle done class on li click
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    // clear input
    input.value = "";
}

// Add click listener to button
addBtn.addEventListener("click", addTask);

// Allow Enter key to add task
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});