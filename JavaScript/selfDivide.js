var selfDividingNumbers = function (left, right) {
  let output = [];
  for (let i = left; i <= right; i++) {
    // Store i to a variable as a string
    let valToCheck = i.toString(); // '11'
    // Loop over i
    for (let j = 0; j < valToCheck.length; j++) {
      if (i % Number(valToCheck[j]) !== 0 || valToCheck.includes("0")) {
        break;
      } else if (j + 1 === valToCheck.length) {
        output.push(i);
      }
    }
  }
  return output;
};

console.log(selfDividingNumbers(1, 22));
