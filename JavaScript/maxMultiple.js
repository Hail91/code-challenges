function maxMultiple(divisor, bound) {
  let max = 1;
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0 && i > max) {
      max = i;
    } else {
      continue;
    }
  }
  return max;
}

console.log(maxMultiple(10, 50));
