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
