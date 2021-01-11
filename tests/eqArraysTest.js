const assertEqual = require('../assertEqual'),
  eqArrays = require('../eqArrays');


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, "6"], [1, 2, "6"]), true));
console.log(assertEqual(eqArrays([1, 2, "hi"], [1, 2, "hi"]), true));
console.log(assertEqual(eqArrays([1, 2, "hi"], [1, "hi", "hi"]), false));