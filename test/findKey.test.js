const findKey = require('../findKey'),
  assert = require('chai').assert;

describe('#findKey', () => {
  const test = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 4 }
  };

  it('should return noma when when passing in key.stars > 1 && < 3', () => {
    assert.equal(findKey(test, (key) => key.stars > 1 && key.stars < 3), 'noma');
  });
  it('should return Akelarre when when passing in key.stars === 4', () => {
    assert.equal(findKey(test, (key) => key.stars === 4), 'Akelarre');
  });
  it('should return no object exists when passed in no key found', () => {
    assert.equal(findKey(test, (key) => key.stars === 5), 'Sorry, no object with that key exists');
  });
});
