const assert = require('chai').assert;

const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it("returns ✅ Assertion passed when actual === expected", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
  });

  it("returns 🛑 Assertion failed when actual !== expected", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

});

