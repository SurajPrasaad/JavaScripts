const addBoardBtn = document.getElementById("add-board-btn");
const container = document.querySelector(".container");
const createTask = document.getElementById("createTask");
const items = document.querySelector(".item");
// For Creating a new board
addBoardBtn.addEventListener("click", () => {
    let card = document.createElement("div");
    card.classList.add("board");
    console.log(card);
    let createElementH4 = document.createElement("h4");
    let cardTitle = prompt("Enter Card Title");
    createElementH4.textContent = `${cardTitle}`;
    card.appendChild(createElementH4);
    container.append(card);
    console.log("Board Created Successfully....")
});

//For Creating a new task
createTask.addEventListener("click", () => {
    let createElementP = document.createElement("p");
    let taskDescription = prompt("Enter your task taskDescription..");
    createElementP.textContent = `${taskDescription}`;
    createElementP.setAttribute("draggable", true);
    let createElementDeleteIcon = document.createElement("span");
    createElementDeleteIcon.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
    createElementDeleteIcon.style.cursor = "pointer";
    createElementDeleteIcon.classList.add("iconClass")
    if (!taskDescription) return;
    createElementP.classList.add("card");
    items.appendChild(createElementP);
    createElementP.appendChild(createElementDeleteIcon)

    //For Deleting Individuals Task
    createElementDeleteIcon.addEventListener("click", () => {
        createElementP.remove();
        console.log("Task Deleted");
    });

    //For Updating Individuals Task
    let item = document.querySelectorAll(".card");
    item.forEach((e) =>
        e.addEventListener("click", (e) => {
            let updateTaskValue = prompt("Update Task Value ", e.target.textContent);
            if (updateTaskValue) {
                e.target.textContent = updateTaskValue;
            }
            return false;
        })
    );
});


