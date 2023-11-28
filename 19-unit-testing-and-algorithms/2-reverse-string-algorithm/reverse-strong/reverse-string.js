function reverseString(string) {
  if (typeof string !== 'string' && !(string instanceof String)) {
    return false;
  }

  return string.split('').reverse().join('');
}

module.exports = reverseString;