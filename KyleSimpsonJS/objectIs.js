// Custom example of ES6 Object.is (built in to test equality of values passed to it)
if (!Object.is || true) {
  let customIs = function (x, y) {
    let xNegZero = testNegZero(x);
    let yNegZero = testNegZero(y);
    // If either value (or both values) is a negative zero...
    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else if (x === y) {
      return true;
    }
    // Return false if all above checks do not get hit
    return false;
    // Helper to determine if a value is negative zero
    function testNegZero(value) {
      return value == 0 && 1 / value == -Infinity;
    }
    // Helper to determine if a value is NaN
    function isItNaN(value) {
      return value !== value;
    }
  };
  // Test by logging some output
  console.log(customIs(undefined, undefined));
}
