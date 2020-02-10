const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return emptyArray = [];
  } else if (array.length % 2 !== 0) {
    return midIndex = array[Math.floor(array.length / 2)];
  } else if (array.length % 2 === 0) {
    return [midIndex, (midIndex + 1)];
  }
} 


module.exports = middle;