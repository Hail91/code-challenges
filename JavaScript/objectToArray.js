// Function to take in an object, parse the key/value pairs and store in array

function objectToArray(obj) {
  // initalize outer array to hold arrays for each key/val pair
  let outerArray = [];
  // Need to loop over the object
  for (let [key, value] of Object.entries(obj)) {
    let innerArr = [key, value];
    outerArray.push(innerArr);
  }
  return outerArray;
}

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);
