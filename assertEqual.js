const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("🛑 Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hi", "hi");
assertEqual("hi", "hey");
assertEqual(1, 1);
assertEqual(1, 10);