function isMonotonic(array) {
  let increasing = true;
  decreasing = true;
  for (let i = 0; i < array.length; i++) {
    array[i] > array[i + 1] ? (increasing = false) : null;
    array[i] < array[i + 1] ? (decreasing = false) : null;
  }
  return increasing || decreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
