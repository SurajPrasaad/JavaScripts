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
        changeBackgroundColor("white");
    } else if (currentModeValue === "dark") {

        removeClassList(h1, 'content-color-black')
        addClassList(h1, 'content-color-white')
        changeBackgroundColor("black");
    } else {
        let date = new Date();
        if (date.getHours() >= 20 || date.getHours() < 6) {
            changeBackgroundColor("black");
            removeClassList(h1, 'content-color-black')
            addClassList(h1, 'content-color-white')
        } else {
            changeBackgroundColor("white");
            removeClassList(h1, 'content-color-white')
            addClassList(h1, 'content-color-black')
        }
    }
});