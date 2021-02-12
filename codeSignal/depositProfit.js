function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let gain;
  while (deposit < threshold) {
    years += 1;
    gain = deposit * (rate / 100);
    deposit += gain;
  }
  return years;
}
// Log output
console.log(depositProfit(100, 20, 170));
