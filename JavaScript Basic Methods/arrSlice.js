// Slice creates a copy of the array it is called on, it does NOT modify original array.
function forecast(arr) {
  // First argument to slice is index at which we begin the copy
  // Second argument is the index in which we stop copying (NOT INCLUSIVE)
  arr = arr.slice(2, 4);
  return arr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
