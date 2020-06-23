// Arrays are objects in JavaScript, meaning they are passed by reference, not by value.
// If we Convert the arrays in strings with JSON.stringify, we can them directly compare the values.
function checkEquals(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEquals([1, 2], [1, 2]));
