const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

let nameInput = document.getElementById('nameInput');
let jobInput = document.getElementById('jobInput');
let ageInput = document.getElementById('ageInput');
let bioInput = document.getElementById('bioInput');

let data;
nameInput.addEventListener('input', (e) => {
    data = e.target.value
    nameDisplay.innerText = data;
})
jobInput.addEventListener('input', (e) => {
    data = e.target.value
    jobDisplay.innerText = data;
})
ageInput.addEventListener('input', (e) => {
    data = e.target.value
    ageDisplay.innerText = data;
})
bioInput.addEventListener('input', (e) => {
    data = e.target.value
    bioDisplay.innerText = data;
})