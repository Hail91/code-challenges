const matrixScore = function (A) {
  let score = 0;
  let newMatrix = A.map((e) => {
    if (e[0] === 0) {
      e.forEach((element, i, arr) => {
        if (!element) {
          return (arr[i] = 1);
        } else return (arr[i] = 0);
      });
    }
    return e;
  });
  for (let i = 0; i <= newMatrix[0].length; i++) {
    let zeroes = 0;
    let ones = 0;
    let count = 0;
    while (count < newMatrix.length) {
      if (newMatrix[count][i] === 0) {
        zeroes += 1;
      } else ones += 1;
      count += 1;
    }
    if (zeroes > ones) {
      count = 0;
      while (count < newMatrix.length) {
        if (newMatrix[count][i] === 0) {
          newMatrix[count][i] = 1;
        } else newMatrix[count][i] = 0;
        count += 1;
      }
    }
  }
  for (let a = 0; a < newMatrix.length; a++) {
    score += parseInt(newMatrix[a].join(""), 2);
  }
  return score;
};

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
  ])
);
