const {message, capitalizeWords, makeMoney} = require('./utils.js');
const Person = require('./Person.js');

console.log(message.text);
console.log(capitalizeWords('this is my first time using modules!'));
console.log(makeMoney(100));

const person1 = new Person('John', 30);
person1.greet();