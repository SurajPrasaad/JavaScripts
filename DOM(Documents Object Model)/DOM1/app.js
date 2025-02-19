window.console.log("Hey I am there");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// let darkTheme = document.getElementById('dark-theme-button');

// darkTheme.addEventListener('click',function(){
//     changeBackgroundColor('black')
// })

// darkTheme.addEventListener('click',function(){
//     console.log("Storing dark mode value in DB.")
// })

let toggleTheme = document.getElementById("theme-button");
let heading = document.querySelector(".heading");

toggleTheme.addEventListener("click", () => {
    console.log(document.body.style.backgroundColor);
    const currentColor = document.body.style.backgroundColor;
    if (!currentColor || currentColor === "white") {
        changeBackgroundColor("black");
        heading.style.color = "white";
        heading.classList.add('uppercase')
        toggleTheme.innerText = "White Mode"

    } else {
        changeBackgroundColor("white");
        heading.style.color = "black";
        toggleTheme.innerText = "Dark Mode";
    }
});
