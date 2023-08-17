// Challenge is to output to the console a word in a variable capitalized
let myString = 'developer';

// VVV Solutions VVV

// Easiest for me is using css
const styles = 'text-transform: capitalize';
console.log('%c' + myString, styles);

// Probably Expected
myString = myString.split('');
myString[0] = myString[0].toUpperCase();
myString = myString.join('');
console.log(myString);

// VVV Answers VVV
myString = 'developer';
let myNewString;

// Solution 1
myNewString = myString.charAt(0).toLocaleUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 2
myNewString = myString[0].toLocaleUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 3
myNewString = `${myString[0].toLocaleUpperCase()}${myString.slice(1)}`;
console.log(myNewString);
