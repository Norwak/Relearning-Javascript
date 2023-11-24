const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('bar');

console.log(sym1, sym2, sym3);
console.log(typeof sym1);
console.log(sym2.description);

console.log(Symbol('sym') === Symbol('sym')); // always unique

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com',
}

// user.id = 2; // can't change id anymore

console.log(user);

// symbols are NOT enumerable
console.log(Object.keys(user));

console.log(Object.getOwnPropertySymbols(user));

// Symbol.for()
const sym4 = Symbol.for('foo');
const sym5 = Symbol.for('foo');

console.log(sym4 === sym5);
console.log(Symbol.keyFor(sym4));

console.log(sym1.toString());
console.log(sym1.valueOf());