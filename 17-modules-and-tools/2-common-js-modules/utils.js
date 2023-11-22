// VARIABLES

// module.exports = {
//   id: 1,
//   text: 'Hello World'
// }

const message = {
  id: 1,
  text: 'Hello World'
}



// FUNCTIONS

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.substr(1)).join(' ');
}

function makeMoney(amount) {
  return `$ ${amount}`;
}



// EXPORT ALL
module.exports = {
  message,
  capitalizeWords,
  makeMoney
};