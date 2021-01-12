const assertArrayEqual = require('../assertArraysEqual'),
  tail = require('../tail'),
  assert = require('chai').assert;

console.log(assertArrayEqual(tail([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]));
console.log(assertArrayEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]));
console.log(assertArrayEqual(tail([1, 2, 'hannah', 4, 'montana']), [2, 'hannah', 4, 'montana']));

describe('#tail', () => {
  it('should return [hannah montana] as tail for [1, hannah, montana]', () => {
    assert.deepEqual(tail([1, 'hannah', 'montana']), ['hannah', 'montana']);
  });
  it('should return [2,3,4] as tail for [1,2,3,4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('should return [2,3,4] as tail for [1,2,3,4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});
