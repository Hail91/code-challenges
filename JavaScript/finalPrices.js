var finalPrices = function (prices) {
  // Pointer to track where we are to the right of current
  let pointer = 1;
  for (let i = 0; i < prices.length; i++) {
    while (pointer < prices.length) {
      if (prices[pointer] <= prices[i]) {
        prices[i] = prices[i] - prices[pointer];
        pointer += 1;
        break;
      } else {
        pointer += 1;
        if (prices[pointer] <= prices[i]) {
          prices[i] = prices[i] - prices[pointer];
          pointer = i + 2;
          break;
        }
        if (pointer === prices.length) {
          pointer = i + 2;
          break;
        }
      }
    }
  }
  return prices;
};
