// EXPORT ONE THING (VARIABLE OR CLASS OR FUNCTION)
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  greet() {
    return `Hello, my name is ${this.#name} and I am ${this.#age}`;
  }
}

export default Person;