// Challenge:
// Create a calculator function that takes in "num1", "num2" and "operator".
// Operators only include + - * and /
// Return error message if parameters are incorrent



// VVV Solution VVV

// https://stackoverflow.com/a/58550111
const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num);

function calculator(num1, operator, num2) {
  if (!isNumeric(num1)) return false;
  if (!isNumeric(num2)) return false;

  switch (operator) {
    case '+':
      return num1 + num2;
      break;
      
    case '-':
      return num1 - num2;
      break;

    case '*':
      return num1 * num2;
      break;

    case '/':
      return num1 / num2;
      break;
  
    default:
      return false;
      break;
  }
}

const errorMsg = 'Incorrect parameters';

console.log(calculator(5, '+', 2) ? calculator(5, '+', 2) : errorMsg);
console.log(calculator(5, '-', 2) ? calculator(5, '-', 2) : errorMsg);
console.log(calculator(5, '*', 2) ? calculator(5, '*', 2) : errorMsg);
console.log(calculator(5, '/', 2) ? calculator(5, '/', 2) : errorMsg);
console.log(calculator('a', '%', 'b') ? calculator('a', '%', 'b') : errorMsg);



// VVV Answer VVV
// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
      
//     case '-':
//       result = num1 - num2;
//       break;

//     case '*':
//       result = num1 * num2;
//       break;

//     case '/':
//       result = num1 / num2;
//       break;
  
//     default:
//       result = 'Invalid Operator';
//       break;
//   }

//   console.log(result);
//   return result;
// }

// calculator(5, 2, '&');