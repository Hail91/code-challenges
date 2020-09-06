// Some code to visualize and explain lazy functions, and their application/usefulness.
// Lazy functions are great for tasks that only need to be executed ONCE, they help us to avoid having to perform repetitive tasks.
let currentDate = null;
// With this function, our goal is to only get the date ONE time, but this function will repeat this logic everytime it is called.
function getDateOnce() {
  if (currentDate !== null) {
    return currentDate;
  } else {
    currentDate = new Date();
    return currentDate;
  }
}

// The above function could be refactored to be a 'lazy' function by doing the following....
function lazyGetDateOnce() {
  // Perform the getting of the date only once.
  const time = new Date();
  // Overwrite the function to do only one thing, return that time.
  lazyGetDateOnce = function () {
    return time;
  };
  // Return that function out of the function call.
  return lazyGetDateOnce();
}
