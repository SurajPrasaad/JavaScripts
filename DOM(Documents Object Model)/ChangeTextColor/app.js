const mainHeading = document.getElementById('mainHeading');
const button = document.querySelectorAll('button');

button.forEach(button=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.id)
        switch(e.target.id){
            case "redButton":
                return mainHeadingChangeTextColor('red');
            case "greenButton":
                return mainHeadingChangeTextColor('green');
            case "blueButton":
                    return mainHeadingChangeTextColor('blue');
            case "purpleButton":
                return mainHeadingChangeTextColor('purple');
            case "resetButton":
                return mainHeadingChangeTextColor('black');
            default:
                console.log('finished');
        }
    })
})

const mainHeadingChangeTextColor = (color)=>{
    mainHeading.style.color=color;
}