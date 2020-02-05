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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 7]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));