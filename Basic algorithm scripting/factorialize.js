// Get factorial of input number using recursion
function factorialize(num) {
  if (num === 0) {
    // Once we've hit zero, return all the calls.
    return 1;
  } else {
    // Multiply current value of num by result of function call recursively
    return num * factorialize(num - 1);
  }
}
// Log output (Should be 120) <--- Every number from 1-5 multipled
factorialize(5);
