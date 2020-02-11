const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let finalObj = {};
  for (let letter of word) {
    if (finalObj[letter]) {
      finalObj[letter] ++;
    } else {
      finalObj[letter] = 1;
    }
  }
  return finalObj;
}

console.log(countLetters("lighthouse labs"));