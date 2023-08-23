// Challenge 1:
// Create a function called "getCelsius()" that converts Fahrenheit to Celsius
// Bonus points for writing it as a one line arrow function



// VVV Solution VVV
const getCelsius = fh => Math.round((fh - 32) * 5 / 9 * 10) / 10;

console.log(`The temperature is ${getCelsius(33)} \xB0C`);



// VVV Answer VVV
// function getCelsius(f) {
//   const celsius = ((f -32) * 5) / 9;
//   return celsius;
// }

// const getCelsius = (f) => ((f -32) * 5) / 9;

// console.log(getCelsius(50));







// Challenge 2:
// Create an arrow function called "minMax()" that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array



// VVV Solution VVV
const minMax = numbers => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers)
});

console.log(minMax([1, 2, 3, 4, 5]));



// VVV Answer VVV
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return {min, max}
// }

// console.log(minMax([1, 2, 3, 4, 5]));






// Challenge 3:
// Create an IIFE that takes in the length and width of a rectangle and outputs it into the console as soon as page loads



// VVV Solution VVV
(function (x, y) {
  console.log(`The area of a rectangle with a length of ${x} and a width of ${y} is ${x*y}`);
})(10, 5);



// VVV Answer VVV
// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

//   console.log(output);
// })(10, 5);