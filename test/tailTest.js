const assert = require('chai').assert;

const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {

  it("returns same array without the first element", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

});

