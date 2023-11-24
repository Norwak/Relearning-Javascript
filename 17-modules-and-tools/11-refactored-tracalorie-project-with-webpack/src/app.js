import './css/bootstrap.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
import { Modal, Collapse } from 'bootstrap';

import Meal from './classes/Meal.js';
import Workout from './classes/Workout.js';
import CalorieTracker from './classes/CalorieTracker.js';



class App {
  #tracker = new CalorieTracker();

  #caloriesLimitEl = document.getElementById('calories-limit');
  #totalCaloriesEl = document.getElementById('calories-total');
  #caloriesConsumedEl = document.getElementById('calories-consumed');
  #caloriesBurnedEl = document.getElementById('calories-burned');
  #caloriesRemainingEl = document.getElementById('calories-remaining');
  #progressBarEl = document.getElementById('calories-progress');

  #mealFormEl = document.getElementById('meal-form');
  #mealNameInput = document.getElementById('meal-name');
  #mealCaloriesInput = document.getElementById('meal-calories');

  #workoutFormEl = document.getElementById('workout-form');
  #workoutNameInput = document.getElementById('workout-name');
  #workoutCaloriesInput = document.getElementById('workout-calories');

  #collapseMeal = document.getElementById('collapse-meal');
  #bsCollapseMeal = new Collapse(this.#collapseMeal, {
    toggle: false
  });

  #collapseWorkout = document.getElementById('collapse-workout');
  #bsCollapseWorkout = new Collapse(this.#collapseWorkout, {
    toggle: false
  });

  #mealListEl = document.getElementById('meal-items');
  #workoutListEl = document.getElementById('workout-items');

  #filterMealsEl = document.getElementById('filter-meals');
  #filterWorkoutsEl = document.getElementById('filter-workouts');

  #resetButtonEl = document.getElementById('reset');
  #limitFormEl = document.getElementById('limit-form');
  #limitButtonEl = document.getElementById('limit');

  #modalEl = document.getElementById('limit-modal');
  #modal = Modal.getOrCreateInstance(this.#modalEl);

  constructor() {
    this.#mealFormEl.addEventListener('submit', this.#submitMeal.bind(this));
    this.#workoutFormEl.addEventListener('submit', this.#submitWorkout.bind(this));
    this.#filterMealsEl.addEventListener('input', this.#filterItems.bind(this, 'meal'));
    this.#filterWorkoutsEl.addEventListener('input', this.#filterItems.bind(this, 'workout'));
    this.#resetButtonEl.addEventListener('click', this.#reset.bind(this));
    this.#limitFormEl.addEventListener('submit', this.#setLimit.bind(this));
  }

  #removeMeal(e) {
    const card = e.target.closest('.card');
    const id = card.dataset.id;

    this.#tracker.removeMeal(id);

    this.#tracker.recalculateStats();

    this.render();
  }

  #removeWorkout(e) {
    const card = e.target.closest('.card');
    const id = card.dataset.id;

    this.#tracker.removeWorkout(id);

    this.#tracker.recalculateStats();

    this.render();
  }

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

    const caloriesCard = this.#caloriesRemainingEl.parentElement.parentElement;
    if (remaining < 0) {
      caloriesCard.classList.remove('bg-light');
      caloriesCard.classList.add('bg-danger');
    } else {
      caloriesCard.classList.add('bg-light');
      caloriesCard.classList.remove('bg-danger');
    }
  }

  #displayProgressBar() {
    let percentage = this.#tracker.totalCalories / this.#tracker.caloriesLimit * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    this.#progressBarEl.style.width = `${percentage}%`;

    const remaining = this.#tracker.caloriesLimit - this.#tracker.totalCalories;
    if (remaining < 0) {
      this.#progressBarEl.classList.add('bg-danger');
    } else {
      this.#progressBarEl.classList.remove('bg-danger');
    }
  }

  #displayNewMeal(id, name, calories) {
    const mealEl = `
      <div class="card my-2" data-id="${id}">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <h4 class="card-name flex-grow-1 mx-1">${name}</h4>
            <div class="fs-1 bg-primary text-white text-center rounded-2 mx-4 px-2 px-sm-5">
              ${calories}
            </div>
            <button class="delete btn btn-danger btn-sm mx-2">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>`;

    this.#mealListEl.insertAdjacentHTML('beforeend', mealEl);

    this.#mealListEl.querySelector('.card:last-child button.delete').addEventListener('click', this.#removeMeal.bind(this));
  }

  #displayNewWorkout(id, name, calories) {
    const workoutEl = `
      <div class="card my-2" data-id="${id}">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <h4 class="card-name flex-grow-1 mx-1">${name}</h4>
            <div class="fs-1 bg-secondary text-white text-center rounded-2 mx-4 px-2 px-sm-5">
              ${calories}
            </div>
            <button class="delete btn btn-danger btn-sm mx-2">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>`;

    this.#workoutListEl.insertAdjacentHTML('beforeend', workoutEl);

    this.#workoutListEl.querySelector('.card:last-child button.delete').addEventListener('click', this.#removeWorkout.bind(this));
  }

  #displayItems() {
    this.#mealListEl.innerHTML = '';
    this.#workoutListEl.innerHTML = '';

    for (const meal of this.#tracker.meals) {
      this.#displayNewMeal(meal.id, meal.name, meal.calories);  
    }

    for (const workout of this.#tracker.workouts) {
      this.#displayNewWorkout(workout.id, workout.name, workout.calories);  
    }
  }

  addItem(type, args) {
    switch (type) {
      case 'Meal':
        const newMeal = new Meal(...args);
        this.#tracker.addMeal(newMeal);
        this.#tracker.recalculateStats();
        return newMeal.id;
      case 'Workout':
        const newWorkout = new Workout(...args);
        this.#tracker.addWorkout(newWorkout);
        this.#tracker.recalculateStats();
        return newWorkout.id;
    }
  }

  #submitMeal(e) {
    e.preventDefault();

    const name = this.#mealNameInput;
    const calories = this.#mealCaloriesInput;

    if (name.value == '' || calories.value == '') {
      alert('Please fill in empty flelds!');
      return;
    }

    this.addItem('Meal', [name.value, Number(calories.value)]);

    name.value = '';
    calories.value = '';

    this.#bsCollapseMeal.hide();

    this.render();
  }

  #submitWorkout(e) {
    e.preventDefault();

    const name = this.#workoutNameInput;
    const calories = this.#workoutCaloriesInput;

    if (name.value == '' || calories.value == '') {
      alert('Please fill in empty flelds!');
      return;
    }

    this.addItem('Workout', [name.value, Number(calories.value)]);

    name.value = '';
    calories.value = '';

    this.#bsCollapseWorkout.hide();

    this.render();
  }

  #filterItems(type, e) {
    const text = e.currentTarget.value.toLowerCase();
    const cards = document.querySelectorAll(`#${type}-items .card`);

    for (const card of cards) {
      const name = card.querySelector('.card-name').textContent;
      if (name.toLowerCase().includes(text)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  }

  #reset() {
    this.#tracker.reset();
    this.#filterMealsEl.value = '';
    this.#filterWorkoutsEl.value = '';
    this.render();
  }

  #setLimit(e) {
    e.preventDefault();

    const limit = this.#limitButtonEl.value;

    if (limit === '') {
      alert('Please add a limit');
      return;
    }

    this.#tracker.caloriesLimit = Number(limit);

    this.#limitButtonEl.value = '';

    this.#modal.hide();

    this.render();
  }

  render() {
    this.#displayCaloriesLimit();
    this.#displayTotalCalories();
    this.#displayCaloriesConsumed();
    this.#displayCaloriesBurned();
    this.#displayCaloriesRemaining();
    this.#displayProgressBar();
    this.#displayItems();
  }
}



const app = new App();
app.render();