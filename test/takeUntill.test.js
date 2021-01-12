const takeUntill = require('../takeUntil'),
  assert = require('chai').assert;

describe('#takeUntill', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5],
    result1 = [1, 2, 5],
    data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"],
    result2 = ["I've", "been", "to", "Hollywood"];

  it(`should return return ${result2} when passing in ${data2}`, () => {
    assert.deepEqual(takeUntill(data2, (word) => word === ','), result2);
  });
  it(`should return return ${result1} when passing in ${data1}`, () => {
    assert.deepEqual(takeUntill(data1, (word) => word > 6), result1);
  });

});

