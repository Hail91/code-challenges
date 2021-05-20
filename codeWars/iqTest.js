function iqTest(numbers) {
  let output = [],
    hash = { true: 0, false: 0 },
    isEven;
  // Split string on whitespace
  numbers = numbers.split(" ");
  // Iterate over string checking whether the value is even or odd
  for (let i = 0; i < numbers.length; ++i) {
    isEven = numbers[i] % 2 === 0;
    if (isEven) {
      hash["true"] += 1;
    } else hash["false"] += 1;
    output.push(isEven);
  }
  // Figure out which number type is dominant, then return index of value that does not meet this criteria
  if (hash["true"] > hash["false"]) {
    return output.indexOf(false) + 1;
  } else return output.indexOf(true) + 1;
}
// Log output
console.log(iqTest("1 2 4 6 8"));
