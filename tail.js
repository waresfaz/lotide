const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const tail = function(anArray) {
  return anArray.slice(1);
};
console.log(tail([5, 6, 7], [5, 6, 7]));

assertEqual([0, 1, 2, 3], [0, 1, 2, 3]);
assertEqual('true', 'true');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));