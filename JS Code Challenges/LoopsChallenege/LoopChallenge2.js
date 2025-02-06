// You just need to implement the countApples function
function countApples(apples) {
    let sum = 0;
       for(let l = 0; l< apples; l++){
           sum++;
       }
       return sum;
   }
   
   // Please don't remove the code below
   const readline = require('readline');
   
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });
   
   rl.on('line', (input) => {
     const apples = parseInt(input); // Parse input as a number
     // Call our function
     const result = countApples(apples);
   
     // Output the result as a JSON string
     process.stdout.write(JSON.stringify(result));
   });
   // Please don't remove the code above
   