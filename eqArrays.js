const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅✅Assertion Passed: ${actual} === ${expected}  ` :
    `❌❌ Assertion Failed : ${actual} != ${expected}`;
};

const eqArrays = (actual, expected) => {
  for (let i = 0; i < expected.length; i++) {
    for (let j = 0; j < expected.length; j++) {
      if (expected[i] !== actual[i]) {
        return false
      }
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, "6"], [1, 2, "6"]), true);
assertEqual(eqArrays([1, 2, "hi"], [1, 2, "hi"]), true);
assertEqual(eqArrays([1, 2, "hi"], [1, "hi", "hi"]), false);