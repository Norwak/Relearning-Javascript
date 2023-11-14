// Sealing - Prevents properties from being added or removed. Can still be changed.
// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10
}

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);


Object.seal(rectObj);
rectObj.color = 'red';
rectObj.width = 20;

descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);



const circleObj = {
  name: 'Circle 1',
  radius: 30
}

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);


Object.freeze(circleObj);
circleObj.color = 'blue';
delete circleObj.name;
circleObj.name = 'New name';

descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);


console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));