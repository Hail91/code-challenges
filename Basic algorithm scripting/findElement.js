// Return the first element in the input arr that satisfies input func, otherwise, if no elements meet condition, return undefined.
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num) === true) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
