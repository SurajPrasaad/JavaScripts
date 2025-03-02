let selectElement = document.getElementById("bg-changer");
let createButton = document.getElementById("createButton");
createButton.addEventListener('click',()=>{
        let allButtons = document.getElementById("allButtons");
        let buttonCreateElement = document.createElement('button')
        buttonCreateElement.innerText = selectElement.value;
        buttonCreateElement.classList.add("button")
        allButtons.appendChild(buttonCreateElement);
        let button = document.querySelectorAll("button")
        button.forEach((e)=>{
            e.addEventListener('click',(events)=>{
                let selectedColor = events.target.innerText;
                document.body.style.backgroundColor = selectedColor
            })
        })
})

function colorCreateWithOptions(){
let colorArray = ["Blue","Brown","Orange","Pink","Red","Green","Purple","Yellow","Grey","White","Coral","Cyan","Gold","Magenta","Olive","Navy","Beige"]

for(let index=0;index<colorArray.length;index++){
let options = document.createElement('option');
options.innerText = colorArray[index]
options.setAttribute("value",colorArray[index]);
selectElement.appendChild(options)
}
}
let x = colorCreateWithOptions();
x=null

// let options = document.createElement('option');
// options.getAttribute(null)
// options.setAttribute("id","pink")
// console.log(options)
// options.getAttribute("id")