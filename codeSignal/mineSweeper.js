// Really ugly Brute force
function minesweeper(matrix) {
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0) {
      let subArray = matrix[i].map((value, index, array) => {
        let mines = 0;
        if (index === 0) {
          if (array[index + 1] === true) mines += 1;
          if (matrix[i + 1][0] === true) mines += 1;
          if (matrix[i + 1][1] === true) mines += 1;
          return mines;
        } else if (index === array.length - 1) {
          if (array[index - 1] === true) mines += 1;
          if (matrix[i + 1][array.length - 1] === true) mines += 1;
          if (matrix[i + 1][array.length - 2] === true) mines += 1;
          return mines;
        } else {
          if (array[index - 1] === true) mines += 1;
          // right
          if (array[index + 1] === true) mines += 1;
          // down
          if (matrix[i + 1][index] === true) mines += 1;
          // across left
          if (matrix[i + 1][index - 1] === true) mines += 1;
          // across right
          if (matrix[i + 1][index + 1] === true) mines += 1;
          return mines;
        }
      });
      output.push(subArray);
    }
    if (i > 0 && i < matrix.length - 1) {
      let subArray = matrix[i].map((value, index, array) => {
        let mines = 0;
        if (index === 0) {
          if (matrix[i - 1][index] === true) mines += 1;
          if (matrix[i + 1][index] === true) mines += 1;
          if (matrix[i - 1][index + 1] === true) mines += 1;
          if (matrix[i + 1][index + 1] === true) mines += 1;
          if (array[index + 1] === true) mines += 1;
          return mines;
        } else if (index === array.length - 1) {
          if (matrix[i - 1][index] === true) mines += 1;
          if (matrix[i + 1][index] === true) mines += 1;
          if (matrix[i - 1][index - 1] === true) mines += 1;
          if (matrix[i + 1][index - 1] === true) mines += 1;
          if (array[index - 1] === true) mines += 1;
          return mines;
        } else {
          if (array[index - 1] === true) mines += 1;
          if (array[index + 1] === true) mines += 1;
          if (matrix[i + 1][index] === true) mines += 1;
          if (matrix[i + 1][index - 1] === true) mines += 1;
          if (matrix[i + 1][index + 1] === true) mines += 1;
          if (matrix[i - 1][index - 1] === true) mines += 1;
          if (matrix[i - 1][index + 1] === true) mines += 1;
          if (matrix[i - 1][index] === true) mines += 1;
          return mines;
        }
      });
      output.push(subArray);
    }
    if (i === matrix.length - 1) {
      let subArray = matrix[i].map((value, index, array) => {
        let mines = 0;
        if (index === 0) {
          if (matrix[i - 1][index] === true) mines += 1;
          if (matrix[i - 1][index + 1] === true) mines += 1;
          if (array[index + 1] === true) mines += 1;
          return mines;
        } else if (index === array.length - 1) {
          if (matrix[i - 1][index] === true) mines += 1;
          if (matrix[i - 1][index - 1] === true) mines += 1;
          if (matrix[i - 1][index + 1] === true) mines += 1;
          if (array[index - 1] === true) mines += 1;
          if (array[index + 1] === true) mines += 1;
          return mines;
        } else {
          if (array[index - 1] === true) mines += 1;
          if (matrix[i - 1][index - 1] === true) mines += 1;
          if (matrix[i - 1][index] === true) mines += 1;
          if (matrix[i - 1][index + 1] === true) mines += 1;
          if (array[index + 1] === true) mines += 1;
          return mines;
        }
      });
      output.push(subArray);
    }
  }
  return output;
}
