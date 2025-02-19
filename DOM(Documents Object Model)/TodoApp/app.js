let todoInput = document.getElementById("todo-txt");
let addBtn = document.getElementById("add-btn");
let todoItemsContainer = document.getElementById("todo-items-container");
let removeAllBtn = document.getElementById("remove-btn");

// Load todos from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTodos);

addBtn.addEventListener("click", function () {
    const value = todoInput.value.trim();
    if (value === "") {
        alert("Required");
        return;
    }

    addTodo(value);
    saveToLocalStorage(value);
    todoInput.value = "";
    todoInput.focus();
});

// Function to add a todo item to the UI
function addTodo(value) {
    const list = document.createElement("li");
    list.innerText = value;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", function () {
        list.remove();
        removeFromLocalStorage(value);
    });

    list.appendChild(button);
    todoItemsContainer.appendChild(list);
}

// Save to localStorage
function saveToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Load from localStorage
function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => addTodo(todo));
}

// Remove from localStorage
function removeFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(item => item !== todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove all todos
removeAllBtn.addEventListener("click", function () {
    todoItemsContainer.innerHTML = "";
    localStorage.removeItem("todos");
});

//Toggle Functionality add...
let changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}
let addClassList = (element, className) => {
    element.classList.add(className);
}
let removeClassList = (element, className) => {
    element.classList.remove(className)
}

let theme = document.getElementById("themeIng");
let h1 = document.querySelector('h1');

theme.addEventListener('change', (e) => {
    let currentModeValue = e.target.value;
    console.log(currentModeValue)

    let currentMode = document.body.style.backgroundColor;

    if (!currentMode || currentModeValue === "light") {
        removeClassList(h1, 'content-color-white')
        addClassList(h1, 'content-color-black')
        changeBackgroundColor("rgba(229, 242, 172, 0.515)");
    } else if (!currentMode ||currentModeValue === "dark") {
        removeClassList(h1, 'content-color-black')
        addClassList(h1, 'content-color-white')
        changeBackgroundColor("#b1a3c3");
    } else {
        let date = new Date();
        if (date.getHours() >= 20 || date.getHours() < 6) {
            removeClassList(h1, 'content-color-black')
        addClassList(h1, 'content-color-white')
        changeBackgroundColor("#b1a3c3");
        } else {
            removeClassList(h1, 'content-color-white')
            addClassList(h1, 'content-color-black')
            changeBackgroundColor("rgba(229, 242, 172, 0.515)");
        }
    }
});