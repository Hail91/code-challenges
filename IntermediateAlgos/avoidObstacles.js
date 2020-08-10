function avoidObstacles(inputArray) {
  for (let i = 1; i <= Math.max(...inputArray) + 1; i++) {
    if (inputArray.every((el) => el % i !== 0)) {
      return i;
    } else {
      continue;
    }
  }
}

console.log(avoidObstacles([2, 3]));
