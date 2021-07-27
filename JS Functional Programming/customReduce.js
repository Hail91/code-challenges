// Some Examples of Reduce (basic + slightly more advanced)
let sum = [1, 2].reduce((sum, value) => {
  return sum + value;
}, 0);
// Log output
console.log(sum, "Sum of all values");

// Callback Fn for below
function add(val, accumulator) {
  return val + accumulator;
}

// More advanced implementation
let advancedReduce = (list, callback, initialValue) => {
  // Set the initial value
  let acc = initialValue;
  // Loop through list
  for (let i = 0; i < list.length; i++) {
    // execute callback (add) with current value and the accumulator and assign to accumulator
    acc = callback(list[i], acc);
  }
  // Return the accumulator
  return acc;
};
// Log the output
console.log(advancedReduce([1, 2, 3], add, 0));
