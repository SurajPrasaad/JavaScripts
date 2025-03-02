(function () {
    let selectElement = document.getElementById("bg-changer");
    let createButton = document.getElementById("createButton");
    let allButtons = document.getElementById("allButtons");

    function colorCreateWithOptions() {
        let colorArray = [
            "Blue", "Brown", "Orange", "Pink", "Red", "Green", 
            "Purple", "Yellow", "Grey", "White", "Coral", "Cyan", 
            "Gold", "Magenta", "Olive", "Navy", "Beige"
        ];

        colorArray.forEach(color => {
            let option = document.createElement('option');
            option.innerText = color;
            option.value = color;
            selectElement.appendChild(option);
        });
    }

    function createColorButton(color) {
        let button = document.createElement('button');
        button.innerText = color;
        button.classList.add("button");
        button.addEventListener('click', function () {
            document.body.style.backgroundColor = color;
        });
        return button;
    }

    function handleCreateButtonClick() {
        let selectedColor = selectElement.value;
        let existingButtons = Array.from(allButtons.children);
        let isButtonExists = existingButtons.some(button => button.innerText === selectedColor);
        if (isButtonExists) {
            alert(`Button for ${selectedColor} already exists!`);
            return;
        }
        let newButton = createColorButton(selectedColor);
        allButtons.appendChild(newButton);
    }

    createButton.addEventListener('click', handleCreateButtonClick);
    colorCreateWithOptions();
})();

// let options = document.createElement('option');
// options.getAttribute(null)
// options.setAttribute("id","pink")
// console.log(options)
// options.getAttribute("id")