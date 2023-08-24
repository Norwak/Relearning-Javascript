// Challenge:
// Take the "people" array and create an array called "youngPeople"
// that stores objects with ONLY "name" and "email" properties of all people yonger than 26
// The "name" property should have their first and last name.

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];



// VVV Solution VVV
const youngPeople = people
  .filter(person => person.age <= 25)
  .map(person => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email
  }));

console.log(youngPeople);

// Answer is exactly the same






// Challenge 2:
// Add all positive numbers in the array
const numbers = [2, -30, 50, 20, -12, -9, 7];
// expected result 79



// VVV Solution VVV
console.log(numbers
  .filter(num => num > 0)
  .reduce((acc, num) => acc + num)
);



// Answer
const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);






// Challenge 3:
// Take the array "words" and create a new array "capitalizedWords" with every word from it capitalized
const words = ['coder', 'programmer', 'developer'];



// VVV Solution VVV
function capitalize(word = '') {
  word = word.split('');
  word[0] = word[0].toUpperCase();
  word = word.join('');
  return word;
}

const capitalizedWords = words.map(word => capitalize(word));

console.log(capitalizedWords);



// VVV Answer VVV
const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);