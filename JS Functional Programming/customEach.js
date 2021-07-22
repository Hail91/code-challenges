// Custom implementation of forEach in JavaScript
let peopleArray = ["Mrs. Scarlet", "Colonel Mustard", "Mr. White"];

// Callback to execute
function arrayModifier(name) {
  return (name += "*");
}

// Define _.each function (Should modify array in place)
const customEach = function (inputArr, callback) {
  // Loop over inputArray and execute the callback
  for (let i = 0; i < inputArr.length; ++i) {
    inputArr[i] = callback(inputArr[i]);
  }
  return inputArr;
};

// Call customEach
let updatedArray = customEach(peopleArray, arrayModifier);
// Log
console.log(updatedArray);
