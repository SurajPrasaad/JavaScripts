let student = {
  name: "Suraj",
  age: 18,
  fullName: function getFullname() {
    return "Suraj Prasad";
  },
  hobbies: ["play", "write", "reading", "coding"],
  address: {
    houseNo: 58,
    city: "Surat",
    Street: "Godadara Naher Surat",
  },
};

const obj = {
    1:'a',
    2:'b',
    null:'d',
    undefined:'e',
    true:'f'
}
console.log(obj['1'])
console.log(obj['null'])
console.log(obj['true'])
console.log(student);

console.log(student['name']);

console.log(student['address']);

console.log(student['address']['Street'])

console.log(student['hobbies'][student.hobbies.length - 1]);
