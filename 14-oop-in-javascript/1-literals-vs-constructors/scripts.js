const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing
console.log(strLit.toUpperCase());
console.log(strLit[0]);
console.log(new String(strLit));

// Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Functions
const funcLit = function(x) {
  return x * x;
}

console.log(funcLit, typeof funcLit);

console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x');

console.log(funcObj(3));