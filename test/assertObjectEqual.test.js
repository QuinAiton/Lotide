const assertObjectEqual = require('../assertObjectEqual'),
  eqArrays = require('../eqArrays'),
  assert = require('chai').assert,
  inspect = require('util').inspect;


describe('#assertObjectEqual', () => {
  const cd = { c: "1", d: ["2", 3] };
  const cd2 = { d: ["2", 3], c: "1" };
  const cd3 = { c: "1", d: ["2", 3, 4] };
  const cd4 = { c: "1", d: ["2", "3"] };
  it(` should return true when comparing ${inspect(cd)} 
  to ${inspect(cd2)}`, () => {
    assert.isTrue(assertObjectEqual(cd, cd2))
  })
  it(` should return false when comparing ${inspect(cd2)} 
  to ${inspect(cd3)}`, () => {
    assert.isFalse(assertObjectEqual(cd2, cd3))
  })
  it(` should return false when comparing ${inspect(cd2)} 
  to ${inspect(cd4)}`, () => {
    assert.isFalse(assertObjectEqual(cd2, cd4))
  })
})