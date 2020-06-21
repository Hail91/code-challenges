// Working implementation, but way too much code and inefficient, need to refactor.
function changeEnough(change, amountDue) {
  let availTotal = 0;
  // Loop over change array (length of array will always be 4)
  for (let i = 0; i < change.length; i++) {
    // On Each iteration, we can multiply the value by the expected change
    // type, then store that value in a running total which we'll compare against
    // The amount due.
    if (i == 0) {
      change[i] = change[i] * 0.25;
      availTotal += change[i];
    } else if (i == 1) {
      change[i] = change[i] * 0.1;
      availTotal += change[i];
    } else if (i == 2) {
      change[i] = change[i] * 0.05;
      availTotal += change[i];
    } else if (i == 3) {
      change[i] = change[i] * 0.01;
      availTotal += change[i];
    }
  }
  if (availTotal >= amountDue) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough([30, 40, 20, 5], 12.55));
