function arithmeticExpression(a, b, c) {
  let operators = ["+", "-", "*", "/"];
  // Loop over operators
  for (let i = 0; i < operators.length; i++) {
    if (eval(`${a} ${operators[i]} ${b}`) === c) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

console.log(arithmeticExpression(2, 3, 5));
