const addBoardBtn = document.getElementById("add-board-btn");
const container = document.querySelector(".container");
const createTask = document.getElementById("createTask");

// Array to store all created boards
let boards = [];

// For Creating a new board
addBoardBtn.addEventListener("click", () => {
  let card = document.createElement("div");
  card.classList.add("board");

  let cardTitle = prompt("Enter Board Title");
  if (!cardTitle) return;

  let createElementH4 = document.createElement("h4");
  createElementH4.textContent = cardTitle;
  card.appendChild(createElementH4);

  let createEditElement = document.createElement("span");
  createEditElement.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
  createEditElement.classList.add("iconClass");
  card.appendChild(createEditElement);

  let createElementItemDiv = document.createElement("div");
  createElementItemDiv.classList.add("item");
  card.appendChild(createElementItemDiv);

  // Edit board title
  createEditElement.addEventListener("click", () => {
    let updateBoardValue = prompt(
      "Update board title",
      createElementH4.textContent
    );
    if (updateBoardValue) {
      createElementH4.textContent = updateBoardValue;
    }
  });

  container.appendChild(card);
  boards.push(card);
  console.log("Board Created Successfully...");
});

// For Creating a new task (asks user which board to add task)
createTask.addEventListener("click", () => {
  if (boards.length === 0) {
    alert("Create a board first!");
    return;
  }

  let boardTitles = boards
    .map(
      (board, index) => `${index + 1}: ${board.querySelector("h4").textContent}`
    )
    .join("\n");
  let boardChoice = prompt(`Select a board number:\n${boardTitles}`);

  let boardIndex = parseInt(boardChoice) - 1;
  if (isNaN(boardIndex) || boardIndex < 0 || boardIndex >= boards.length) {
    alert("Invalid board selection.");
    return;
  }

  let selectedBoard = boards[boardIndex];
  let itemsContainer = selectedBoard.querySelector(".item");

  let taskDescription = prompt("Enter your task description");
  if (!taskDescription) return;

  let createElementP = document.createElement("p");
  createElementP.textContent = taskDescription;
  createElementP.setAttribute("draggable", true);
  createElementP.classList.add("card");

  let createElementDeleteIcon = document.createElement("span");
  createElementDeleteIcon.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
  createElementDeleteIcon.style.cursor = "pointer";
  createElementDeleteIcon.classList.add("iconClass");

  createElementP.appendChild(createElementDeleteIcon);
  itemsContainer.appendChild(createElementP);

  let fetchDateAndTime = updateClock();

  let createElementDate = document.createElement("small");
  createElementDate.textContent = fetchDateAndTime.date;
  
  let createElementTime = document.createElement("small");
  createElementTime.textContent = fetchDateAndTime.currentTime;
  
  createElementP.appendChild(createElementDate);
  createElementP.appendChild(createElementTime);
  
  
  // For Deleting Individual Task
  createElementDeleteIcon.addEventListener("click", () => {
    createElementP.remove();
    console.log("Task Deleted");
  });

  // For Updating Individual Task
  createElementP.addEventListener("click", () => {
    let updateTaskValue = prompt("Update Task Value", taskDescription);
    if (updateTaskValue) {
      createElementP.textContent = updateTaskValue;
      createElementP.appendChild(createElementDeleteIcon);
    }
  });
});

const updateClock = () => {
  let currentDate = new Date();
  let date =
    currentDate.getDate() +
    "-" +
    currentDate.getMonth() +
    "-" +
    currentDate.getFullYear();
  let currentTime =
    currentDate.getHours().toString().padStart(2, "0") +
    ":" +
    currentDate.getMinutes().toString().padStart(2, "0") +
    ":" +
    currentDate.getSeconds().toString().padStart(2, "0");

    return {date,currentTime};
};
