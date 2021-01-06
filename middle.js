

const assertArrayEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    for (let j = 0; j < expected.length; j++) {
      if (expected[i] !== actual[i]) {
        return `❌❌ Assertion Failed : ${actual} !== ${expected}`;
      }
    }
  }
  return `✅✅Assertion Passed: ${actual} === ${expected}  `;
};

const middle = (arr) => {
  let middle = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middle.push(arr[arr.length / 2 - 1]);
      middle.push(arr[arr.length / 2]);
    } else {
      middle.push(arr[Math.floor(arr.length / 2)]);
    }
  }
  return middle;

};

assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArrayEqual(middle(['sam', 'i', 'am', 'green']), ['i', 'am']);