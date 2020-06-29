((fn, val) => {
  return fn(val);
})(console.log, 5);

// Question: Is the above a HOF, an IIFE, or both?

// Answer: It's both. Line 3 makes it an IIFE because it's immediately invoked, line 1 makes it a HOF because it takes a function
// (The console.log) as an argument.
