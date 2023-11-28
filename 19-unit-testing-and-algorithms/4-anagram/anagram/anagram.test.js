const anagram = require('./anagram.js');

describe('Anagram', function() {
  it('should be a function', function() {
    expect(typeof anagram).toEqual('function');
  });

  it('should return a boolean', function() {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });

  it('should return true if anagram', function() {
    expect(anagram('ram', 'arm')).toEqual(true);
    expect(anagram('cinema', 'iceman')).toEqual(true);
    expect(anagram('god', 'dog')).toEqual(true);
  });

  it('should return false if not anagram', function() {
    expect(anagram('hello', 'world')).toEqual(false);
    expect(anagram('nice', 'door')).toEqual(false);
    expect(anagram('book', 'person')).toEqual(false);
  });
});