const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];

const container = document.querySelector('.profile');
const img = document.querySelector('.profile__image');
const profileInfo = document.querySelector('.profile-info');
const nextButton = document.getElementById('next');

function* createPeopleIterator() {
  let index = 0;

  while (true) {
    yield people[index++ % people.length];
  }
}

const iterator = createPeopleIterator();

nextButton.addEventListener('click', function() {
  const person = iterator.next().value;

  img.setAttribute('src', person.imageURL);
  profileInfo.innerHTML = `
    <h3>${person.name}</h3>
    <p>${person.age} Years Old</p>
    <p>From ${person.location}</p>
    <p>${person.looking}</p>
  `;
});

nextButton.click();