const assertEqual = require('../assertEqual'),
  eqArrays = require('../eqArrays'),
  assert = require('chai').assert;


describe('#eqArrays', () => {
  it('should return false when comparing [1,2,"3"], [1,2,3]', () => {
    assert.isFalse(eqArrays([1, 2, '3'], [1, 2, 3]))
  });
  it('should return false when comparing [1,2,4], [1,2,3]', () => {
    assert.isFalse(eqArrays([1, 2, 4], [1, 2, 3]))
  });
  it('should return true when comparing [1,2,3], [1,2,3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]))
  });
  it('should return true when comparing [1,2,4], [1,2,4]', () => {
    assert.isTrue(eqArrays([1, 2, 4], [1, 2, 4]))
  });

})

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, "6"], [1, 2, "6"]), true));
console.log(assertEqual(eqArrays([1, 2, "hi"], [1, 2, "hi"]), true));
console.log(assertEqual(eqArrays([1, 2, "hi"], [1, "hi", "hi"]), false));