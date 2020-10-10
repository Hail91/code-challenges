const getOnlyEvens = (nums) =>
  nums.filter((val, index) => val % 2 === 0 && index % 2 === 0)

console.log(getOnlyEvens([1, 2, 4, 8, 16, 32]))