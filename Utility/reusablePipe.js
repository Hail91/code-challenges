// Reusable Pipe function in JS
const pipe =
  (...fns) =>
  (argument) =>
    fns.reduce((value, fn) => fn(value), argument);
// Assign pipe function with chained functions to calculateProfit
const calculateProfit = pipe(
  (value) => value * (1 - 0.88),
  (value) => value * (1 - 0.15),
  (value) => value + 2500,
  (value) => value / 3
);
// Initial value of 50,000
const revenue = 50_000;
// Pass revenue to our pipe function, then calculateProfit will execute each function in order initially acting on our initial value
const profit = calculateProfit(revenue);
// Log the final profit after all the chained calculations have completed
console.log(profit);
