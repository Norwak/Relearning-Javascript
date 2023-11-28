const fizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz', function() {
  it('should be a function', function() {
    expect(typeof fizzBuzz).toEqual('function');
  })

  it('should return the number if not divisible by 3 or 5', function() {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(16)).toEqual(16);
  })

  it('should return "Fizz" if divisible by 3', function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(9)).toEqual('Fizz');
    expect(fizzBuzz(333)).toEqual('Fizz');
  })

  it('should return "Buzz" if divisible by 5', function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(25)).toEqual('Buzz');
    expect(fizzBuzz(125)).toEqual('Buzz');
  })

  it('should return "FizzBuzz" if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(90)).toEqual('FizzBuzz');
  })
});