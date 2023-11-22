import Person from './modules/Person.js'
import {capitalizeWords, makeMoney} from './modules/utils.js';

const person1 = new Person('Dave', 22);

console.log(person1.greet());
console.log(makeMoney(1000));