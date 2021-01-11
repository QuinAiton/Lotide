const assertEqual = require('../assertEqual'),
  assert = require('chai').assert


describe('#assertEqual', () => {
  it('should return false when comparing lighthouse labs to bootcamp', () => {
    assert.isFalse(assertEqual('lighthouse labs', ' bootcamp'))
  });
  it('should return true when comparing 1 to 1', () => {
    assert.isTrue(assertEqual(1, 1))
  });
  it('should return true when comparing light to light', () => {
    assert.isTrue(assertEqual('light', 'light'))
  });
  it('should return false when comparing 1 to 4', () => {
    assert.isFalse(assertEqual(1, 4))
  });

})
