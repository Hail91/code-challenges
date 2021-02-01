// Get factorial of input number using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    // 5 * 4 * 3 * 2 * 1
    return num * factorialize(num - 1);
  }
}
// Log output
factorialize(5);
