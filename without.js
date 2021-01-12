
const without = (input, remove) => {
  const newArr = [];
  for (let j = 0; j < input.length; j++) {
    if (!remove.includes(input[j])) {
      newArr.push(input[j]);
    }
  }
  return newArr;
};

module.exports = without;