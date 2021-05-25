const moveZeros = function (arr) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === 0) {
      arr.push(...arr.splice(i, 1));
    } else continue;
  }
  return arr;
};
// Log output
console.log(moveZeros([9, 1, 2, 0, 0, 1, 2, 5, 0, 0, 0, 4, 0, 0]));
