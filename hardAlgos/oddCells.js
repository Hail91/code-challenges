var oddCells = function (n, m, indices) {
  // Initialize an outer array of length n, with m elements in each array.
  let matrix = [];
  while (matrix.length < n) {
    matrix.push(new Array(m).fill(0));
  }
  // Loop over indices incrementing matrix as needed, indices arrays ['row', 'column']
  for (let i = 0; i < indices.length; i++) {
    // Increment matrix by ri/ci
    for (let j = 0; j < indices[i].length; j++) {
      // Increment row if index is 0
      if (j === 0) {
        matrix[indices[i][j]].forEach((el, index, arr) => {
          // Increment each element by 1
          arr[index] = el + 1;
        });
      }
      if (j === 1) {
        // Increment specified column by 1
        matrix.forEach((el) => {
          // Target jth element in each subArray
          el[indices[i][j]] += 1;
        });
      }
    }
  }
  return matrix.flat().filter((el) => {
    return el % 2 !== 0;
  }).length;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
