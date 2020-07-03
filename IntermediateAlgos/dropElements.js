function dropElements(arr, func) {
  // If function evals to true or the array is empty, return the array.
  if (func(arr[0]) === true || arr.length === 0) {
    return arr;
  }
  // Otherwise...
  else {
    // While the function returns false...
    while (!func(arr[0])) {
      // Remove first element of array
      arr.splice(0, 1);
      // Special check to see if array is empty to prevent infinite loop in cases
      // where empty array also returns false when passed into input func.
      if (arr.length === 0) {
        break;
      }
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
