const allBoards = document.querySelectorAll(".board");
const allCards = document.querySelectorAll('.card-container');

console.log(allCards);
allCards.forEach((card) => attachDragEvents(card));
console.log(allCards);
console.log(allBoards);

allBoards.forEach((board) => {
    board.addEventListener("dragover", (event) => {

        const flyingElement = document.querySelector('.flying');
        if (flyingElement) { 
            console.log('Flying Elements:', flyingElement.className);
            console.log("kuch to mere uper se gya", board);
            board.appendChild(flyingElement);
        }
    });
});

function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flying');
        setTimeout(() => target.style.display = "none", 0); 
    });

    target.addEventListener('dragend', () => {
        target.classList.remove('flying');
        target.style.display = "block";
    });
}

const newTaskButton = document.getElementById("new-task");
    const taskForm = document.querySelector(".task-form");
    const closeButton = document.querySelector(".close");
    const cancelButton = document.querySelector(".task-form button:last-of-type");
    const container = document.querySelector(".container");

    function showTaskForm() {
        taskForm.classList.add("show");
        container.style.display = "none"; 
    }

    function closeTaskForm() {
        taskForm.classList.remove("show");
        setTimeout(() => {
            taskForm.style.display = "none";
            container.style.display = "block";
        }, 300);
    }

    newTaskButton.addEventListener("click", function () {
        taskForm.style.display = "block";
        setTimeout(showTaskForm, 10);
    });

    closeButton.addEventListener("click", closeTaskForm);
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeTaskForm();
    });