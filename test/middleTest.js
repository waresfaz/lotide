const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {

  it("returns empty array when input is 0, 1, or 2 items long", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns middle element of array when array length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns two middle elements of array when array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});



// console.log(middle([1])); // => []
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]