function candies(n, m) {
  // Divide pieces of candy by Children, round the value and multiply by n.
  return Math.floor(m / n) * n;
}

console.log(candies(4, 15));
