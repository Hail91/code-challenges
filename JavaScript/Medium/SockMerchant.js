// Given 'n' number of socks, return the maximum number of pairs possible from the given array
function sockMerchant(n, ar) {
  let data = {};
  let count = 1;
  let pairs = 0;
  // Loop over sock array and store values as keys in object
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] in data === false) {
      data[ar[i]] = count;
    } else {
      data[ar[i]] += 1;
    }
  }
  // For each object key, check how many times it can be divided by 2 and increment           pairs.
  for (const property in data) {
    let value = Math.floor(data[property] / 2);
    if (value > 0) {
      pairs += value;
    }
  }
  return pairs;
}

console.log(sockMerchant(7, [1, 2, 2, 1, 2, 3, 4]));
