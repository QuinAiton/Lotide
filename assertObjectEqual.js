const eqObjects = require('./eqObjects');

const assertObjectEqual = (expected, actual) => {
  return eqObjects(expected, actual);
};
module.exports = assertObjectEqual;