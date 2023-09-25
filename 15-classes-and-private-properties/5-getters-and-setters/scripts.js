function capitalize(string) {
  string = string.split('');
  string[0] = string[0].toUpperCase();
  return string.join('');
}

// class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   get firstName() {
//     return capitalize(this._firstName);
//   }

//   set firstName(value) {
//     this._firstName = capitalize(value);
//   }
// }



// Old way of doing this
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function() {
      return capitalize(this._firstName);
    },
    set: function(value) {
      this._firstName = capitalize(value);
    },
  })
}

const person1 = new Person('joe', 'doe');
console.log(person1.firstName);
console.log(person1.lastName);