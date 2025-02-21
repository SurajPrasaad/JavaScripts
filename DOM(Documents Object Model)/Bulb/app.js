let toggleButton = document.getElementById("toggleButton");
let status = document.getElementById("status");
let bulb = document.getElementById("bulb");
let body = document.getElementById("body");

toggleButton.addEventListener("click", () => {
    const currentColor = body.style.backgroundColor;

    if (!currentColor || currentColor === "white") {
        body.style.backgroundColor = "black"
        console.log(currentColor)
        toggleButton.innerText = "Turn On";
        status.innerText = "Status: Off";
        body.classList.add("dark-mode");
        console.log(bulb);
        bulb.classList.remove("off");
    } else {
        body.style.backgroundColor = "white"
        console.log(currentColor)
        toggleButton.innerText = "Turn Off";
        status.innerText = "Status: On";
        body.classList.remove('dark-mode')
        bulb.classList.add("off");
    }
});
