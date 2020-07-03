function sumPrimes(num) {
  let sieve = [];
  let primesArray = [];
  // Since 1 is already a prime, Loop starting at 2 to num.
  for (let i = 2; i <= num; i++) {
    // Number is not a sieve
    if (!sieve[i]) {
      // Then add them to primesArray
      primesArray.push(i);
      // Inner loop to check if a number is a multiple of i, if so, set it to true in sieve.
      // Meaning it won't get pushed into primesArray.
      for (let j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  let sum = primesArray.reduce((a, b) => a + b);
  return sum;
}

console.log(sumPrimes(977));
