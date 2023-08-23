// Challenge 1:
// use array methods to mutate the following array to the expected result below:
const arr = [1, 2, 3, 4, 5];
// Expected [6, 5, 4, 3, 2, 1, 0]



// VVV Solutions VVV

arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr);



// VVV Answers VVV

// // Answer 1
// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// // Answer 2
// arr.push(6);
// arr.unshift(0);
// arr.reverse();





// Challenge 2:
// combine arr1 and arr2 into arr3
// notice that both arr1 and arr2 include number 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];



// VVV Solutions VVV

const arr3 = [...new Set([...arr1, ...arr2])];
console.log(arr3);



// VVV Answers VVV

// // Answer 1
// const arr3 = arr1.slice(0, 4).concat(arr2);

// // Answer 2
// const arr3 = [...arr1, ...arr2];
// arr3.splice(4, 1);