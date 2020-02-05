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
  let arrayMiddle = [];
  for (i = 0; i <= array.length, i++) {
    if (array.length <= 1) {
      return arrayMiddle;
    } else if (array.length % 2 !== 0) {
      return arrayMiddle =+ Math.floor(array.[i])
    }
  }
}