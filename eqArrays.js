
const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;