const without = require('../without'),
  assert = require('chai').assert;

describe('#without', () => {
  const remove = ['a', 'in', 'lighthouse', 'mocha', 4];
  const string = ['i', 'live', 'in', 'a', 'lighthouse'];
  const string2 = [1, 2, 3, 4, 'mocha'];
  it('should return [i, live] when passing in [i, live, in, a, lighthouse]', () => {
    assert.deepEqual(without(string, remove), ['i', 'live']);
  });

  it('should return [1,2,3] when passing in [1,2,3,4,mocha]', () => {
    assert.deepEqual(without(string2, remove), [1, 2, 3]);
  });
});
