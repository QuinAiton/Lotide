const assertArrayEqual = require('../assertArraysEqual')
tail = require('../tail');

console.log(assertArrayEqual(tail([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]))
console.log(assertArrayEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]))
console.log(assertArrayEqual(tail([1, 2, 'hannah', 4, 'montana']), [2, 'hannah', 4, 'montana']))