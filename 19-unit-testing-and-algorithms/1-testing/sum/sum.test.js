const sum = require('./sum.js');

test('Adds 1 + 2 to equal 3', function() {
  expect(sum(1, 2)).toEqual(3);
});