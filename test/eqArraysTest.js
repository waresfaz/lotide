const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true when arrOne === arrTwo", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns false when arrOne !== arrTwo", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
});

