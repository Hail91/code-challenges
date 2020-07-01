function sumFibs(num) {
  let first = 1;
  const numArr = [first];
  while (first <= num) {
    let indexCount = numArr.length - 1;
    numArr.push(first);
    first = first + numArr[indexCount];
  }
  let oddArr = numArr.filter((el) => el % 2 !== 0);
  let sum = oddArr.reduce((a, b) => a + b);
  return sum;
}
console.log(sumFibs(1000));
