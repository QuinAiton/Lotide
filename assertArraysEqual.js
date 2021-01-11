const assertEqual = require("./assertEqual");

const assertArrayEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    for (let j = 0; j < expected.length; j++) {
      if (expected[i] !== actual[i]) {
        return `❌❌ Assertion Failed : ${actual} !== ${expected}`;
      }
    }
  }
  return `✅✅Assertion Passed: ${actual} === ${expected}  `;
}

module.exports = assertArrayEqual;