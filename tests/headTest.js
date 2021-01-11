const head = require('../head');
const assertEqual = require('../assertEqual')


console.log(assertEqual(head([1, 2, 3, 4]), 1))
console.log(assertEqual(head(['head', 2, 3, 4]), 'head'))
console.log(assertEqual(head(['head', 2, 3, 'tail']), 'tail'))
