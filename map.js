const assertArrayEqual = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (expected[i] !== actual[i]) {
      return `❌❌ Assertion Failed : ${actual} !== ${expected}`;
    }
  }
  return `✅✅Assertion Passed: ${actual} === ${expected} `;
};



const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (const word of array) {
    results.push(callback(word));
  }
  return results;
};




console.log(assertArrayEqual(map(words, (word) => word + word), ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom']));
console.log(assertArrayEqual(map(words, (word) => word.length > 3), [true, true, false, true, false]));
console.log(assertArrayEqual(map(words, (word) => word.slice(1)), ["round", "ontrol", "o", "ajor", "om"]));



