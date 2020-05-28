// Multiply each value in input array by the total length of the input array

function multiplyByLength(arr) {
  newArr = [];
  arrLen = arr.length;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arrLen);
  }
  return newArr;
}

console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));
