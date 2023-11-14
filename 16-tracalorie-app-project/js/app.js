function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}



class Meal {
  constructor(name, calories) {
    this.id = uuidv4();
    this.name = name;
    this.calories = calories;
  }
}



class Workout {
  constructor(name, calories) {
    this.id = uuidv4();
    this.name = name;
    this.calories = calories;
  }
}



class CalorieTracker {
  #caloriesLimit = 2000;
  #totalCalories = 0;
  #meals = new Array();
  #workouts = new Array();

  constructor() {}

  get caloriesLimit() {
    return this.#caloriesLimit;
  }

  get totalCalories() {
    return this.#totalCalories;
  }

  get meals() {
    return this.#meals;
  }

  get workouts() {
    return this.#workouts;
  }

  

  addMeal(meal) {
    this.#meals.push(meal);
    this.#totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this.#workouts.push(workout);
    this.#totalCalories -= workout.calories;
  }
}



class App {
  #tracker = new CalorieTracker();
  #caloriesLimitEl = document.getElementById('calories-limit');
  #totalCaloriesEl = document.getElementById('calories-total');
  #caloriesConsumedEl = document.getElementById('calories-consumed');
  #caloriesBurnedEl = document.getElementById('calories-burned');
  #caloriesRemainingEl = document.getElementById('calories-remaining');
  #progressBarEl = document.getElementById('calories-progress');

  constructor() {}

  #displayCaloriesLimit() {
    this.#caloriesLimitEl.innerHTML = this.#tracker.caloriesLimit;
  }

  #displayTotalCalories() {
    this.#totalCaloriesEl.innerHTML = this.#tracker.totalCalories;
  }

  #displayCaloriesConsumed() {
    this.#caloriesConsumedEl.innerHTML = this.#tracker.meals.reduce((total, meal) => total + meal.calories, 0);
  }

  #displayCaloriesBurned() {
    this.#caloriesBurnedEl.innerHTML = this.#tracker.workouts.reduce((total, workout) => total + workout.calories, 0);
  }

  #displayCaloriesRemaining() {
    const remaining = this.#tracker.caloriesLimit - this.#tracker.totalCalories;
    this.#caloriesRemainingEl.innerHTML = remaining;
    if (remaining < 0) this.#caloriesRemainingEl.parentElement.parentElement.classList.add('danger');
  }

  #displayProgressBar() {
    let percentage = this.#tracker.totalCalories / this.#tracker.caloriesLimit * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    this.#progressBarEl.style.width = `${percentage}%`;
  }

  addItem(type, args) {
    switch (type) {
      case 'Meal':
        const newMeal = new Meal(...args);
        this.#tracker.addMeal(newMeal);
        break;
      case 'Workout':
        const newWorkout = new Workout(...args);
        this.#tracker.addWorkout(newWorkout);
        break;
    }
  }

  render() {
    this.#displayCaloriesLimit();
    this.#displayTotalCalories();
    this.#displayCaloriesConsumed();
    this.#displayCaloriesBurned();
    this.#displayCaloriesRemaining();
    this.#displayProgressBar();
  }
}



const app = new App();
app.addItem('Meal', ['Breakfast', 400]);
app.addItem('Workout', ['Morning run', 300]);
app.render();