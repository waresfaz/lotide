const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 7]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));