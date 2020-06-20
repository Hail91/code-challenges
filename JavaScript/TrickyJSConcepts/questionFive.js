// Classic one on closure
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

// What logs to the console?
// 3, 3, 3 logs because when the for loop runs, it creates a new function 'log' on each iteration, that function captures variable
// i from the outer scope and console.log's whatever it's value is at the time of function call.

// SetTimeout then gets called with the log function after 100ms, it will run the log function which will print the current value of i.
