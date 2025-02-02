// Loop means -> ek hi work ko iterate karna based on specified conditions.
// There are many types of loop in JavaScript.
// * 1. for loop
// * 2. do while loop
// * 3. while loop
// * 4. forEach loop

let myArray = [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index < myArray.length; index++) {
//     console.log(`Indexing : ${index} : ${myArray[index]}`)
// }

// ? do while loop
let index = 0;
let length = myArray.length;
// console.log(length)
do {
    console.log(`Do while loop ${index} : ${myArray[index]}`);
    index++;
} while (index<=length -1);

//? while loop
// while(index<=length-1){
//     console.log(` While loop ${index} : ${myArray[index]}`);
//     index++;
// }

// ? forEach loop

myArray.forEach(element => {
    console.log(`ForEach element is : ${element}`)
});
