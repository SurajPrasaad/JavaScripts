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

    newTaskButton.addEventListener("click", () => {
        taskForm.style.display = "block";
    });

    closeForm.addEventListener("click", () => {
        taskForm.style.display = "none";
    });

    cancelBtn.addEventListener("click", () => {
        taskForm.style.display = "none";
    });

    addTagButton.addEventListener("click", () => {
        if (newTagInput.value.trim() !== "") {
            const newOption = document.createElement("option");
            newOption.value = newTagInput.value.trim();
            newOption.textContent = newTagInput.value.trim();
            taskTags.appendChild(newOption);
            newTagInput.value = "";
        }
    });

    addLabelButton.addEventListener("click", () => {
        if (newLabelInput.value.trim() !== "") {
            const newOption = document.createElement("option");
            newOption.value = newLabelInput.value.trim();
            newOption.textContent = newLabelInput.value.trim();
            taskLabels.appendChild(newOption);
            newLabelInput.value = "";
        }
    });

    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (taskTitle.value.trim() === "" || taskDesc.value.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        const newTask = createTaskElement(taskTitle.value, taskDesc.value, taskTags.value, taskLabels.value, taskDate.value);
        document.getElementById("todo-board").appendChild(newTask);
        taskForm.style.display = "none";
        taskTitle.value = "";
        taskDesc.value = "";
        taskTags.value = "analytics";
        taskLabels.value = "urgent";
        taskDate.value = "";
    });

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

        task.querySelector(".delete").addEventListener("click", () => {
            task.remove();
        });

        task.querySelector(".edit").addEventListener("click", () => {
            taskTitle.value = title;
            taskDesc.value = desc;
            taskTags.value = tag;
            taskLabels.value = label;
            taskDate.value = date;
            taskForm.style.display = "block";
            task.remove();
        });

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

    boards.forEach(board => {
        board.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        board.addEventListener("drop", () => {
            if (draggedTask) {
                board.appendChild(draggedTask);
            }
        });
    });