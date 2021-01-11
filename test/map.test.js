const map = require('../map'),
  assert = require('chai').assert;

describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"],
    result1 = ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom'], result2 = [true, true, false, true, false],
    result3 = ["round", "ontrol", "o", "ajor", "om"];

  it('should duplicate each word in the array twice', () => {
    assert.deepEqual(map(words, (word) => word + word), result1)
  });
  it('should return true for all word in array that are > 3 letters', () => {
    assert.deepEqual(map(words, (word) => word.length > 3), result2)
  });
  it('should return the tail of each word passed in', () => {
    assert.deepEqual(map(words, (word) => word.slice(1)), result3)
  });

})
