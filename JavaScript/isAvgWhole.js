function isAvgWhole(arr) {
  // Sum all numbers and divide by length of array.
  let num = arr.reduce((a, b) => a + b) / arr.length;
  if (num % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isAvgWhole([1, 2, 3, 4]));
