import { uuidv4 } from "../utils.js";

class Meal {
  constructor(name, calories) {
    this.id = uuidv4();
    this.name = name;
    this.calories = calories;
  }
}

export default Meal;