function largestOfFour(arr) {
  let newArr = [];
  // Iterate through subArrays getting Max value, push that value to a newArray, return the newArray
  for (let i = 0; i < arr.length; i++) {
    let maxVal = Math.max(...arr[i]);
    newArr.push(maxVal);
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
