// Return sum of all budgets from input Objects.
function getBudgets(arr) {
  let runningTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let [key, value] of Object.entries(arr[i])) {
      if (key === "budget") {
        runningTotal += value;
      }
    }
  }
  return runningTotal;
}

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);
