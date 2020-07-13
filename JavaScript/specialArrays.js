function isSpecialArray(arr) {
  // Establish arrays to test
  let evenArr = [];
  let oddArr = [];
  // We could loop over the array (the values)
  for (let i = 0; i < arr.length; i++) {
    // Then push those values into respective odd/even arrays
    if (i % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  // Then test those arrays with .every to check whether they pass/fail the
  // given test.
  if (
    evenArr.every((el) => el % 2 === 0) &&
    oddArr.every((el) => el % 2 !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
