// Array means-> It holds different data types in the single container.
// It represent square brackets [].
// It will ne accessing value using index.
// Index also start with 0(Zero).
// There are two way to define array in JavaScript.
let myArray = [1, 2, 3, 4, 5, 6];

let myArray2 = new Array("Apple", "Mango", "Banana", "Papaya");

console.log(typeof myArray);
console.log(typeof myArray2);
console.log(myArray2);

myArray2[0] = "Pomegranate";

console.log(myArray2);

//array.length : For Find the length of an array
let arrayLength = myArray2.length;
console.log(`Array ki size hai ${arrayLength}`);

//array.push(elements) : for add new element in end index of array
let myArray2Push = myArray2.push("Red Fruits");
console.log(myArray2Push);
console.log(myArray2);

// myArray2.unshift : Inserts new elements at the start of an array, and returns the new length of the array.

myArray2.unshift("Mango");
console.log(myArray2);

// myArray2.shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let results = myArray2.shift();
console.log(results);
console.log(myArray2);
// myArray2.forEach((elements),callback) : Performs the specified action for each element in an array.
myArray2.forEach((elements) => {
  console.log(elements);
});

/*A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.*/
myArray2.map((elements) => {
  console.log(elements);
});

/*A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
Adds all the elements of an array into a string, separated by the specified separator string.
*/
let data = myArray2.join(" , ", myArray);
console.log(data);
