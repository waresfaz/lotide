const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑 Assertion failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i <= arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      } 
    } return true; // if this was line above, after  first iteration it would return true and stop looping. Must be outside of if statement block to loop to end.
  }
}

const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) { 
      for (elem of item) {
        newArray.push(elem);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;

}


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]