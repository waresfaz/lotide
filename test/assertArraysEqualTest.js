const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

describe("#assertArraysEqual", () => {
  it("returns ✅ Assertion passed for arrayOne equal to arrayTwo", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns 🛑 Assertion failed for arrayOne !equal to arrayTwo", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 7]));
  });

  it("returns 🛑 Assertion failed for arrayOne !equal to arrayTwo", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));
  });

});
