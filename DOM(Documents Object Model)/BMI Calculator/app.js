const ageRange = document.getElementById('age');
    const ageValue = document.getElementById('age-value');

    ageRange.addEventListener('input', () => {
      ageValue.textContent = ageRange.value;
    });


const weightElement = document.getElementById('weight-value');
const heightElement = document.getElementById('height-value');


let weight = parseInt(weightElement.innerText);
let height = parseInt(heightElement.innerText);

console.log(weight);
console.log(height); 

const addWeightBtn = document.querySelectorAll('.btn-add-weight');
const subWeightBtn = document.querySelectorAll('.btn-sub-weight');
const addHeightBtn = document.querySelectorAll('.btn-add-height');
const subHeightBtn = document.querySelectorAll('.btn-sub-height');


addWeightBtn.forEach(button => {
    button.addEventListener('click', () => {
        weight += 1; // Increase weight
        weightElement.innerText = weight; 
        console.log(weight);
    });
});

subWeightBtn.forEach(button => {
    button.addEventListener('click', () => {
        weight -= 1; // Decrease weight
        weightElement.innerText = weight;
        console.log(weight);
    });
});

addHeightBtn.forEach(button => {
    button.addEventListener('click', () => {
        height += 1; // Increase height
        heightElement.innerText = height; 
        console.log(height);
    });
});


subHeightBtn.forEach(button => {
    button.addEventListener('click', () => {
        height -= 1; // Decrease height
        heightElement.innerText = height;
        console.log(height); 
    });
});

let submit = document.getElementById('submit');
let result = document.querySelector('.result')
submit.addEventListener('click',()=>{
    console.log(weight)
    console.log(height)
    let BMI = (weight/(height*height))*10000;
    console.log(BMI)
    let BmiElements =document.createElement('h1');
    result.innerText=BMI;
    result.appendChild(BmiElements)
     
})