// Take an array of integers and return a new array with inverse of those integers

function additiveInverse(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    v = arr[i] * -1;
    newArr.push(v);
  }
  return newArr;
}

console.log(additiveInverse([5, -7, 8, 3]));
