const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntill = (array, callback) => {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(takeUntill(data1, (word) => word < 0));
console.log(takeUntill(data2, (word) => word === ','));

module.exports = takeUntill