const countOnly = require('../countOnly'),
  assert = require('chai').assert;

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('should return 1 when passed in the name Jason', () => {
    assert.equal(result1.Jason, 1);
  });
  it('should return undefined when passed in the name Karima', () => {
    assert.equal(result1.Karima, undefined);
  });
  it('should return 2 when passed in the name Fang', () => {
    assert.equal(result1.Fang, 2);
  });

});

