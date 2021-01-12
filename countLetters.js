
const countLetters = (string) => {
  let result = {};
  let split = string.split('');
  for (const letter of split) {
    if (result[letter]) {
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};
module.exports = countLetters;