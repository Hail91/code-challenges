function largestOfFour(arr) {
  // Return result of Mapped over input array (returns array)
  return arr.map((element) => {
    // Return largest element from nested subArray
    return Math.max(...element);
  });
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
