// let myArray = [1,4,7,8];

function sumOfArray(args) {
  let sum = 0;
  for (let l = 0; l < args.length - 1; l++) {
    sum += args[l];
    // console.log(args[l]);
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4]));
