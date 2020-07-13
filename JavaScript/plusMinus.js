function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  // Loop over input arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  }
  // Now need to determine ratios to six decimal places
  console.log(Number(pos / arr.length).toFixed(6));
  console.log(Number(neg / arr.length).toFixed(6));
  console.log(Number(zero / arr.length).toFixed(6));
}

console.log(plusMinus([1, 1, 0, -1, -1]));
