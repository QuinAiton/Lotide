const middle = require('../middle'),
  assertArrayEqual = require('../assertArraysEqual');


console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2]), []));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArrayEqual(middle(['sam', 'i', 'am', 'green']), ['i', 'am']));
console.log(assertArrayEqual(middle(['sam', 'i', 'am', 'green', 'ham']), ['am']));