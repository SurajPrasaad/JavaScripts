//Number Data type in JS.
let numberValue1 = 10;
let numberValuer2 = 10.5;

console.log(typeof numberValue1);
console.log(typeof numberValuer2);

// Boolean Data Type in JS.

let isPaid = true;
let isDeveloper = false;

console.log(typeof isDeveloper);

//String Data Type in JS.
// There are three way to write String in JS : "",'',``
let name = "Suraj Kumar";
let city = `Surat`;

console.log(`Student name is ${name} and city is ${city}.`);

//Null means -> null tab use karte hai jab aapko pata ho ki khali hai.
let temperature = null;
console.log(typeof temperature); //Object

//Undefined means-> undefined tab use karte jab pata hi na ho ki kya value aane wali hai.
let salary;
console.log(salary);
console.log(typeof salary);

//Object->It holds data in different data types and data store in key value pairs.its represented by {}.
let student = {
  name: "Suraj Kumar",
  city: "Surat",
  isPaid: true,
  age: 19,
  hobbies: null,
};
//let access the object value:
let StudentName = student.name;
console.log(StudentName);
console.log(
  `Student name is ${student.name} , city is ${student.city} , he is access the batch ${student.isPaid} , and age is ${student.age} .`
);

//Array-> It holds data in different data types and data accessing using indexing.Index Starts on 0(Zero).It represent square brackets [].
let myArray = [1, 3, 4, 57, 9, 4, 35];
console.log(myArray.length);
