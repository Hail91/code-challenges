// Slice is another array method that utilizes the concept of Function programming (pure functions)
let inputArray = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

function sliceArray(anim, beginSlice, endSlice) {
  // Copy input array into a new array
  let newSlice = [...anim];
  // Slice that array with passed indexes
  newSlice = newSlice.slice(beginSlice, endSlice);
  // Return sliced copy
  return newSlice;
}
// Log output
sliceArray(inputArray, 1, 3);
