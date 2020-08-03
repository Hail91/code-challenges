function isLucky(n) {
  // Split n into an array after converting to String.
  n = n.toString().split("");
  // Grab middle element of array
  const middle = n.length / 2;
  // Grab first and second half of input Number
  let firstHalf = n.slice(0, middle);
  let secondHalf = n.slice(middle, n.length + 1);
  // Sum both halves and compare
  let firstSum = firstHalf.reduce((a, b) => Number(a) + Number(b));
  let secondSum = secondHalf.reduce((a, b) => Number(a) + Number(b));
  // If they are the same, return true, else return false
  if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  }
}

console.log(isLucky(1230));
