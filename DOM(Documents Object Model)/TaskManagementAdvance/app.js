const newTaskButton = document.getElementById("new-task");
const taskForm = document.querySelector(".task-form");
const closeForm = document.querySelector(".close");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const taskTags = document.getElementById("task-tags");
const taskLabels = document.getElementById("task-labels");
const newTagInput = document.getElementById("new-tag");
const newLabelInput = document.getElementById("new-label");
const addTagButton = document.getElementById("add-tag");
const addLabelButton = document.getElementById("add-label");
const taskDate = document.getElementById("task-date1");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const boards = document.querySelectorAll(".board");
let draggedTask = null;

// Open Task Form
newTaskButton.addEventListener("click", () => {
    taskForm.style.display = "block";
});

// Close Task Form
closeForm.addEventListener("click", () => {
    taskForm.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
    taskForm.style.display = "none";
});

// Add New Tag
addTagButton.addEventListener("click", () => {
    if (newTagInput.value.trim() !== "") {
        const newOption = document.createElement("option");
        newOption.value = newTagInput.value.trim();
        newOption.textContent = newTagInput.value.trim();
        taskTags.appendChild(newOption);
        newTagInput.value = "";
    }
});

// Add New Label
addLabelButton.addEventListener("click", () => {
    if (newLabelInput.value.trim() !== "") {
        const newOption = document.createElement("option");
        newOption.value = newLabelInput.value.trim();
        newOption.textContent = newLabelInput.value.trim();
        taskLabels.appendChild(newOption);
        newLabelInput.value = "";
    }
});

// Save Task
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (taskTitle.value.trim() === "" || taskDesc.value.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    let dateValue = taskDate.value ? taskDate.value : new Date().toISOString().split("T")[0];

    const newTask = createTaskElement(
        taskTitle.value,
        taskDesc.value,
        taskTags.value,
        taskLabels.value,
        dateValue
    );

    document.getElementById("todo-board").appendChild(newTask);
    taskForm.style.display = "none";

    // Reset form fields
    taskTitle.value = "";
    taskDesc.value = "";
    taskTags.value = "analytics";
    taskLabels.value = "urgent";
    taskDate.value = "";

    // Update Task Count
    updateTaskCounts();
});

// Create Task Card
function createTaskElement(title, desc, tag, label, date) {
    const task = document.createElement("div");
    task.classList.add("card-container");
    task.innerHTML = `
        <div class="card-body" draggable="true">
            <p class="title">${title} <span class="tags">#${tag}</span></p>
            <p class="desc">${desc}</p>
            <p>
                <span class="current-date"><i class="fa-solid fa-calendar-days"></i> ${date}</span>
                <span id="tags"><i class="fa-solid fa-tag"></i> ${label}</span>
            </p>
        </div>
        <div class="card-btn">
            <button class="edit"><i class="fa-solid fa-pencil edit"></i></button>
            <button class="delete"><i class="fa-solid fa-trash delete"></i></button>
        </div>
    `;

    const cardBody = task.querySelector(".card-body");

    // Delete Task
    task.querySelector(".delete").addEventListener("click", () => {
        task.remove();
        updateTaskCounts(); // Update count after deletion
    });

    // Edit Task
    task.querySelector(".edit").addEventListener("click", () => {
        taskTitle.value = title;
        taskDesc.value = desc;
        taskTags.value = tag;
        taskLabels.value = label;
        taskDate.value = date;
        taskForm.style.display = "block";
        task.remove();
        updateTaskCounts(); // Update count after editing
    });

    // Drag Events
    cardBody.addEventListener("dragstart", (e) => {
        draggedTask = task;
        setTimeout(() => task.style.display = "none", 0);
        e.dataTransfer.effectAllowed = "move";
    });

    cardBody.addEventListener("dragend", () => {
        setTimeout(() => task.style.display = "block", 0);
        draggedTask = null;
    });

    return task;
}

// Drag and Drop Logic
boards.forEach(board => {
    board.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    board.addEventListener("drop", () => {
        if (draggedTask) {
            board.appendChild(draggedTask);
            updateTaskCounts(); // Update count after moving a task
        }
    });
});

// Search Functionality
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll(".card-container");

    tasks.forEach(task => {
        const title = task.querySelector(".title").textContent.toLowerCase();
        const desc = task.querySelector(".desc").textContent.toLowerCase();
        
        if (title.includes(query) || desc.includes(query)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});

// Sort Functionality
const sortDropdown = document.getElementById("sort-dropdown");
sortDropdown.addEventListener("change", () => {
    const sortType = sortDropdown.value;
    const taskBoard = document.getElementById("todo-board");
    let tasks = Array.from(taskBoard.children);

    if (sortType === "date-new") {
        tasks.sort((a, b) => new Date(b.querySelector(".current-date").textContent) - new Date(a.querySelector(".current-date").textContent));
    } else if (sortType === "date-old") {
        tasks.sort((a, b) => new Date(a.querySelector(".current-date").textContent) - new Date(b.querySelector(".current-date").textContent));
    } else if (sortType === "title-asc") {
        tasks.sort((a, b) => a.querySelector(".title").textContent.localeCompare(b.querySelector(".title").textContent));
    } else if (sortType === "title-desc") {
        tasks.sort((a, b) => b.querySelector(".title").textContent.localeCompare(a.querySelector(".title").textContent));
    }

    // Re-append sorted tasks
    tasks.forEach(task => taskBoard.appendChild(task));
});

// Function to Update Task Count in Each Board
function updateTaskCounts() {
    document.querySelectorAll(".board").forEach(board => {
        const countSpan = board.querySelector(".task-count");
        const taskCount = board.querySelectorAll(".card-container").length;
        countSpan.textContent = `(${taskCount})`;
    });
}

// Initialize task count on page load
updateTaskCounts();
