const assertEqual = require('../assertEqual'),
  eqArrays = require('../eqArrays'),
  assert = require('chai').assert;


describe('#eqArrays', () => {
  it('should return false when comparing [1,2,"3"], [1,2,3]', () => {
    assert.isFalse(eqArrays([1, 2, '3'], [1, 2, 3]));
  });
  it('should return false when comparing [1,2,4], [1,2,3]', () => {
    assert.isFalse(eqArrays([1, 2, 4], [1, 2, 3]));
  });
  it('should return true when comparing [1,2,3], [1,2,3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return true when comparing [1,2,4], [1,2,4]', () => {
    assert.isTrue(eqArrays([1, 2, 4], [1, 2, 4]));
  });

});
