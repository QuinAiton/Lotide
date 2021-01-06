
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

assertArrayEqual([1, 2, 3], [1, 2, 3])
assertArrayEqual([1, 2, "3"], [1, 2, 3])
assertArrayEqual([1, 2, 4], [1, 2, 3])
assertArrayEqual([1, 2, "6"], [1, 2, "6"])
assertArrayEqual([1, 2, "hi"], [1, 2, "hi"])
assertArrayEqual([1, 2, "hi"], [1, "hi", "hi"])