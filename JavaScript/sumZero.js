var sumZero = function (n) {
  // Instantiate an array to return
  let output = [];
  if (n === 1) {
    output.push(0);
    return output;
  }
  for (let i = 0; i < n; i++) {
    if (output.length === n - 1) {
      let sum = output.reduce((a, b) => a + b);
      output.push(-sum);
    } else {
      output.push(i + 1);
    }
  }
  return output;
};

console.log(sumZero(5));
