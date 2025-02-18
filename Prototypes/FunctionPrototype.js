Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function greet(name){//parameters
    console.log(`Person name is ${name}`)
}

greet("Suraj") //arguments
greet.describe();

// It is call function declarations
function add(a,b){
    return a + b;
}

// It is knowns as function expressions
const sub = function sub(a,b){
    return a - b;
}

// arrow functions
const multiply = (a,b) => a * b;

//First class functions
function applyOperations(a,b,operations){
    return operations(a,b)
}

const result = applyOperations(5,4,(x,y)=>x/y)

console.log(result)


// Tiffin Concepts
function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let counter = createCounter();
console.log(counter())
console.log(counter())

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("start");
})()
