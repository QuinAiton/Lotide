const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅✅Assertion Passed: ${actual} === ${expected}  ` :
    `❌❌ Assertion Failed : ${actual} !== ${expected}`;
};

const countLetters = (string) => {
  result = {};
  let split = string.split('');
  for (const letter of split) {
    if (result[letter]) {
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}
console.log(countLetters('hello'));