// var sortedSquares = function (A) {
//   A.forEach((el, index, arr) => {
//     return (arr[index] = Math.pow(el, 2));
//   });
//   return A.sort((a, b) => a - b);
// };
// // Log output
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

function sortedSquares(array) {
  const output = [];
  let leftPointer = 0,
    rightPointer = array.length - 1,
    length = array.length - 1;
  while (length >= 0) {
    if (Math.abs(array[leftPointer]) > Math.abs(array[rightPointer])) {
      output[length] = array[leftPointer] * array[leftPointer];
      leftPointer += 1;
      length -= 1;
    } else {
      output[length] = array[rightPointer] * array[rightPointer];
      rightPointer -= 1;
      length -= 1;
    }
  }
  return output;
}
// Log output
console.log(sortedSquares([-4, -1, 0, 3, 10]));
