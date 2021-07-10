// Reusable Pipe function in JS, Useful for chaining function calls where you need the result of the prev calculation for the next calc
const pipe =
  (...fns) =>
  (argument) =>
    fns.reduce((value, fn) => fn(value), argument);
// Assign pipe function with chained functions to calculateProfit
const calculateProfit = pipe(
  // Called first on 50,000
  (value) => value * (1 - 0.88),
  // Called on returned value from 1st call above
  (value) => value * (1 - 0.15),
  // Called on returned value from 2nd call above
  (value) => value + 2500,
  // Called on returned value from 3rd call above
  (value) => value / 3
  // Return final result to profit var on line 21
);
// Initial value of 50,000
const revenue = 50_000;
// Pass revenue to our pipe function, then calculateProfit will execute each function in order initially acting on our initial value
const profit = calculateProfit(revenue);
// Log the final profit after all the chained calculations have completed
console.log(profit);
