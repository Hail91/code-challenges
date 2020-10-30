const sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  let length = 1;
  while (length <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + length - 1] !== undefined) {
        let copy = arr.slice(i, i + length);
        if (copy.length === 1) {
          sum += copy[0];
        } else sum += copy.reduce((a, b) => a + b);
      }
    }
    length += 2;
  }
  return sum;
};

console.log(sumOddLengthSubarrays([10, 11, 12]));
