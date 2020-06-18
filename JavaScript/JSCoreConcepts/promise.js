// Basic Promise exercise
const Practice = new Promise((resolve, reject) => {
  let count = 2; // Change to test promise functionality
  if (count < 3) {
    // While this condition is met, we can successfully resolve the promise
    count++;
    resolve("Count incremented!");
  } else {
    // Otherwise we reject and return the following message to the console.
    reject("Count maxed out!");
  }
});

Practice.then((result) => {
  console.log("Not to 3 yet! So " + result);
}).catch((error) => {
  console.log(error);
});

// Example of Promise.all()
const stepOne = new Promise((resolve, reject) => {
  resolve("Step one complete!");
});

const stepTwo = new Promise((resolve, reject) => {
  resolve("Step Two complete!");
});

const stepThree = new Promise((resolve, reject) => {
  resolve("Step Three complete!");
});
// Promise.all() will accept an array of promises, and then resolve each one returning an array of resolved values.
Promise.all([stepOne, stepTwo, stepThree]).then((output) => {
  console.log(output);
});
