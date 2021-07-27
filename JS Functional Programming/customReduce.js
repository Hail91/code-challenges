// Some Examples of Reduce (basic + slightly more advanced)
let sum = [1, 2].reduce((sum, value) => {
  return sum + value;
}, 0);
// Log output
console.log(sum, "Sum of all values");
