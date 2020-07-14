function birthdayCakeCandles(ar) {
  // Grab max value from input array.
  let maxCandle = Math.max(...ar);
  let maxValCount = 0;
  // Loop over input array and count number if candles that === maxCandle.
  for (let c = 0; c < ar.length; c++) {
    if (ar[c] === maxCandle) {
      maxValCount += 1;
    } else {
      continue;
    }
  }
  // Print the count of maxCandle.
  console.log(maxValCount);
}
console.log(birthdayCakeCandles([3, 1, 3, 2]));
