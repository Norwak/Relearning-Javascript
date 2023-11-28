const reverseString = require('./reverse-string.js');

describe('Reverse String', function() {
  it('should be a function', function() {
    expect(typeof reverseString).toEqual('function');
  });
  
  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  it('should return the reversed string', function() {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('I am a developer!')).toEqual('!repoleved a ma I');
    expect(reverseString('wow')).toEqual('wow');
    expect(reverseString('Капуста')).toEqual('атсупаК');
  });

  it("should return 'false' if passed parameter isn't a string", function() {
    expect(reverseString(1)).toEqual(false);
    expect(reverseString(false)).toEqual(false);
    expect(reverseString(null)).toEqual(false);
    expect(reverseString(undefined)).toEqual(false);
    expect(reverseString([1,2,3])).toEqual(false);
    expect(reverseString({name: 'John'})).toEqual(false);
  });
});