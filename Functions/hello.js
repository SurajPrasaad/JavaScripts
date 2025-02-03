// Functions also known as Factory
function printHello() {
  console.log("Hello form Suraj");
}
function getBrush(itna) {
  console.log(`hanji le aaya ${itna} brush.`);
  debugger;
}

function addTwo(num1, num2) {
  return num1 + num2;
}
getBrush(14);
printHello();

var createCounter = function (init) {
  let currentValue = init; // Store the current counter value

  return {
    increment: function () {
      currentValue += 1; // Increase the value by 1
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1; // Decrease the value by 1
      return currentValue;
    },
    reset: function () {
      currentValue = init; // Reset to the initial value
      return currentValue;
    },
  };
};
const counter = createCounter(5).increment();
console.log(counter);
