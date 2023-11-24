class Storage {
  static getCaloriesLimit() {
    let limit = 2000; //default
    const storedLimit = localStorage.getItem('caloriesLimit');

    if (storedLimit !== null && !isNaN(storedLimit)) {
      limit = Number(storedLimit);
    }

    return limit;
  }

  static getMeals() {
    let meals = new Array(); //default
    const storedMeals = localStorage.getItem('meals');

    if (storedMeals !== null) {
      meals = JSON.parse(storedMeals);
    }

    return meals;
  }

  static getWorkouts() {
    let workouts = new Array(); //default
    const storedWorkouts = localStorage.getItem('workouts');

    if (storedWorkouts !== null) {
      workouts = JSON.parse(storedWorkouts);
    }

    return workouts;
  }



  static setCaloriesLimit(caloriesLimit) {
    localStorage.setItem('caloriesLimit', caloriesLimit);
  }

  static setMeals(meals) {
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static setWorkouts(workouts) {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}

export default Storage;