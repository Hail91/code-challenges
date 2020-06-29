function greatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}
// Only works when array contains at least one number 0 or greater.
console.log(greatestNumberInArray([-1, -3, -7, -9, -15, -4, -6, -16]));
