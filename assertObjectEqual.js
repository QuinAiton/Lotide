const eqArrays = require('./eqArrays'),
  eqObjects = require('./eqObjects');


const assertObjectEqual = (expected, actual) => {
  const inspect = require('util').inspect;
  return eqObjects(expected, actual)
}
module.exports = assertObjectEqual;