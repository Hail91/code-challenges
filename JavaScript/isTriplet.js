function isTriplet(n1, n2, n3) {
  let numArr = [n1, n2, n3].sort((a, b) => a - b);
  return Math.pow(numArr[0], 2) + Math.pow(numArr[1], 2) ===
    Math.pow(numArr[2], 2)
    ? true
    : false;
}

console.log(isTriplet(3, 4, 5));
