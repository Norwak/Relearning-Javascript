// Challenge:
// - Print the numbers from 1 to 100
// - For multiples of three print "Fizz" instead of the number
// - For multiples of five print "Buzz"
// - For numbers which are multiples of both three and five print "FizzBuzz"



// VVV Solution VVV
for (let i = 1; i <= 100; i++) {
  switch (true) {
    case (i % 3 === 0) && (i % 5 === 0):
      console.log('FizzBuzz');
      break;

    case i % 3 === 0:
      console.log('Fizz');
      break;

    case i % 5 === 0:
      console.log('Buzz');
      break;

    default:
      console.log(i);
      break;
  }
}



// VVV Answer VVV
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// While loop
let j = 1;
while (j <= 100) {
  if (j % 15 === 0) {
    console.log('FizzBuzz')
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }
  j++;
}