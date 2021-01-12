const assertEqual = require("./assertEqual");

const assertArrayEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (assertEqual(expected[i], actual[i])) {
      return false;
    }
  }

  return true;
};

module.exports = assertArrayEqual;