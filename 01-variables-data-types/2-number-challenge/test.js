// Challenge:
// create variable x that is a random number between 1 and 100
// along with y that is a random number between 1 and 50
// output to console a string that shows two numbers, operator and result
// operators are sum, difference, product, quotient and remainder



// VVV Solutions VVV
const x = Math.ceil(Math.random() * 100);
const y = Math.ceil(Math.random() * 50);

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${x} % ${y} = ${x%y}`);



// VVV Answers VVV
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);