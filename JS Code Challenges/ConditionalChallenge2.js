// You just need to implement the findLargest function
function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a < c) {
    if (c < b) {
      return b;
    } else {
      return c;
    }
  } else if (a > c) {
    return a;
  } else {
    return c;
  }
}
// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { a, b, c } = JSON.parse(input);
  const result = findLargest(a, b, c);
  process.stdout.write(JSON.stringify(result));
});
