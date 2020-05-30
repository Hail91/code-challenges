// convert all integers in input array to positive and add together and return

function getAbsSum(arr) {
  updatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      x = Math.abs(arr[i]);
      updatedArr.push(x);
    } else {
      updatedArr.push(arr[i]);
    }
  }
  sum = updatedArr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
}

console.log(getAbsSum([1, 3, -5, 7, 9]));
