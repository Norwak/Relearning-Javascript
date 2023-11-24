import Storage from './Storage.js';

class CalorieTracker {
  #caloriesLimit = 2000;
  #totalCalories = 0;
  #meals = new Array();
  #workouts = new Array();

  constructor() {
    this.#loadFromStorage();
  }

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

  set caloriesLimit(caloriesLimit) {
    this.#caloriesLimit = caloriesLimit;
    Storage.setCaloriesLimit(caloriesLimit);
  }

  removeMeal(id) {
    const targetMeal = this.#meals.find(meal => meal.id === id);
    this.#totalCalories -= targetMeal.calories;

    this.#meals = this.#meals.filter(meal => meal.id !== id);
    Storage.setMeals(this.#meals);
  }

  removeWorkout(id) {
    const targetWorkout = this.#workouts.find(workout => workout.id === id);
    this.#totalCalories += targetWorkout.calories;

    this.#workouts = this.#workouts.filter(workout => workout.id !== id);
    Storage.setWorkouts(this.#workouts);
  }

  addMeal(meal) {
    this.#meals.push(meal);
    Storage.setMeals(this.#meals);
    this.#totalCalories += meal.calories;
  }

  addWorkout(workout) {
    this.#workouts.push(workout);
    Storage.setWorkouts(this.#workouts);
    this.#totalCalories -= workout.calories;
  }

  reset() {
    this.#totalCalories = 0;
    this.#meals = new Array();
    Storage.setMeals(this.#meals);
    this.#workouts = new Array();
    Storage.setWorkouts(this.#workouts);
  }

  recalculateStats() {
    this.#totalCalories = 0;

    for (const meal of this.#meals) {
      this.#totalCalories += meal.calories;
    }

    for (const workout of this.#workouts) {
      this.#totalCalories -= workout.calories;
    }
  }

  #loadFromStorage() {
    this.#caloriesLimit = Storage.getCaloriesLimit();
    this.#meals = Storage.getMeals();
    this.#workouts = Storage.getWorkouts();

    this.recalculateStats();
  }
}

export default CalorieTracker;