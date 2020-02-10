const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      } 
    } return true; 
  }
}

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return emptyArray = [];
  } else if (array.length % 2 !== 0) {
    return midIndex = array[Math.floor(array.length / 2)];
  } else if (array.length % 2 === 0) {
    return [midIndex, (midIndex + 1)];
  }
} 

console.log(middle([1])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]