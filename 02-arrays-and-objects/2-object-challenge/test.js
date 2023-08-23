// Challenge:
// Here is an array of three objects
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
];
// Tasks:
// 1. Set the "read" value for all of them to true.
// 2. Destructure the title from the first book and rename the variable to "firstBook".
// 3. Turn the library object into JSON string.



// VVV Solutions VVV
// 1.
for (const book of library) {
  book.status.read = true;
}

// 2.
const {title: firstBook} = library[0];
console.log(firstBook);

// 3.
console.log(JSON.stringify(library));



// VVV Answers VVV
// // 1.
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// // 2.
// const {title: firstBook} = library[0];

// console.log(firstBook);

// // 3.
// const libraryJSON = JSON.stringify(library);

// console.log(libraryJSON);