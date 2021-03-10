function isAdmissibleOverpayment(prices, notes, x) {
  let totalOverPay = 0;
  let diff;
  const priceDiffs = notes.map((note) => {
    let singleNote = note.split(" ");
    if (!singleNote[0].includes("%")) return 0;
    else return [Number(singleNote[0].split("%").join("")), singleNote[1]];
  });
  prices.forEach((price, index, array) => {
    if (!Array.isArray(priceDiffs[index])) return 0;
    if (
      Array.isArray(priceDiffs[index]) &&
      priceDiffs[index].includes("higher")
    ) {
      diff = 1 * priceDiffs[index][0];
    } else diff = -1 * priceDiffs[index][0];
    totalOverPay += array[index] - (array[index] * 100) / (100 + diff);
  });
  return totalOverPay <= x;
}
// Log output
console.log(
  isAdmissibleOverpayment(
    [110, 95, 70],
    [
      "10.0% higher than in-store",
      "5.0% lower than in-store",
      "Same as in-store",
    ],
    5
  )
);
