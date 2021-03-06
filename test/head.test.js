const head = require('../head'),
  assert = require('chai').assert;

describe('#head', () => {
  it('return 1 for [1,2,3,4]', () => {
    assert.strictEqual(head([1, 2, 3, 4]), 1);
  });
  it('return head for [head,2,3,4]', () => {
    assert.strictEqual(head(['head', 2, 3, 4]), 'head');
  });
  it('should fail for [head,2,3,tail]', () => {
    assert.notStrictEqual(head(['head', 2, 3, 'tail']), 'tail');
  });
});

