function circleOfNumbers(n, firstNumber) {
  let initialNum = n / 2;
  // If firstNumber > initial Num
  if (firstNumber >= initialNum) {
    return firstNumber - initialNum;
  } else {
    return firstNumber + initialNum;
  }
}

console.log(circleOfNumbers(5, 10));
