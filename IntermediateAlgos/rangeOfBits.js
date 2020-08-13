function rangeBitCount(a, b) {
  let val;
  let result = 0;
  // Loop from a to b inclusive
  for (let i = a; i <= b; i++) {
    val = i.toString(2);
    val = val.split("").reduce((a, b) => Number(a) + Number(b));
    result += Number(val);
  }
  return result;
}

console.log(rangeBitCount(2, 7));
