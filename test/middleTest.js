const middle = require('../middle'),
  assertArrayEqual = require('../assertArraysEqual'),
  assert = require('chai').assert;


console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2]), []));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArrayEqual(middle(['sam', 'i', 'am', 'green']), ['i', 'am']));
console.log(assertArrayEqual(middle(['sam', 'i', 'am', 'green', 'ham']), ['am']));

describe('#middle', () => {
  it('should return 3 when passed in [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
  it('should return [] when passed in [1,2]', () => {
    assert.deepEqual(middle([1, 2]), [])
  })
  it('should return [3,4] when passed in [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it('should return [i am] when passed in [sam, i , am, green]', () => {
    assert.deepEqual(middle(['sam', 'i', 'am', 'green']), ['i', 'am'])
  })
})