// index.js
const crypto = require('crypto');
const process = require('process')

// Get commands using process.argv
let operation = process.argv[2];
let num1 = parseFloat(process.argv[3]);
let num2 = parseFloat(process.argv[4]);

// Complete the function
function calculator(operation,num1,num2) {
  switch (operation) {
    case 'add':
      console.log(num1+num2);
      break;
    case 'sub':
      console.log(num1-num2);
      break;
    case 'mult':
      console.log(num1*num2);
      break;
    case 'divide':
      console.log(num1/num2);
      break;
    case 'sin':
      console.log(Math.sin(num1));
      break;
    case 'cos':
      console.log(Math.cos(num1));
      break;
    case 'tan':
      console.log(Math.tan(num1));
      break;
    case 'random':
      if (num1 === undefined || isNaN(num1)) console.log('Provide length for random number generation.');
      else console.log(crypto.randomBytes(num1).toString('binary'))
      break;

      
    default:
      console.log("Invalid operation");
  }
}

calculator(operation, num1,num2);