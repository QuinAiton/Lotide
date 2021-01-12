
const findKeyByValue = require('../findKeyByValue'),
  assert = require('chai').assert;

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
    bestShow: "That '70s Show"
  };
  it('should return drama when passed in the show the wire', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it('should return undefined when passed in  \'70s show', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "'70s Show"), undefined);
  });
  it('should return best show when passe in That \'70s Show', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), 'bestShow');
  });

});
