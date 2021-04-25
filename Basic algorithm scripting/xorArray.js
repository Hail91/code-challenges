const xorOperation = function (n, start) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i);
  }
  return nums.reduce((a, b) => a ^ b);
};
// Log output
console.log(xorOperation(4, 3));
