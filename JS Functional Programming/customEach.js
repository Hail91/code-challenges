// Custom implementation of forEach in JavaScript
let peopleArray = ["Mrs. Scarlet", "Colonel Mustard", "Mr. White"];

// Callback to execute
function arrayModifier(name, index, array) {
  array[index] = name += "*";
}

// Define _.each function (Should modify array in place)
const customEach = function (inputArr, callback) {
  // Loop over inputArray and execute the callback
  for (let index = 0; index < inputArr.length; ++index) {
    callback(inputArr[index], index, inputArr);
  }
  return inputArr;
};

// Call customEach
let updatedArray = customEach(peopleArray, arrayModifier);
// Log
console.log(updatedArray);
