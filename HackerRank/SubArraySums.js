// Function to iterate over array of integers and determine sum of subArrays based on 2D array of queries passed

const findSum = (numbers, queries) => {
  let output = [];
  sum = 0;
  // Iterate over queries array
  for (let i = 0; i < queries.length; i++) {
    let zeroes = 0;
    // Reset sum
    sum = 0;
    // Extract indexes and valToAdd from the current query
    let startIdx = queries[i][0];
    let endIdx = queries[i][1];
    let valToAdd = queries[i][2];
    // Iterate over numbers array for the current query
    for (let j = startIdx - 1; j <= endIdx - 1; j++) {
      if (numbers[j] === 0) {
        zeroes += 1;
        continue;
      } else sum += numbers[j];
    }
    sum += zeroes * valToAdd;
    output.push(sum);
  }
  return output;
};
// Log output
console.time("run_start");
console.log(findSum([20, 30, 0, 10], [[1, 3, 10]]));
console.timeEnd("run_start");
