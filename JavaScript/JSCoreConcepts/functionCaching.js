// Some example code to explain function caching.
function cached(fn) {
  // Cache to store results of each function execution.
  const cache = Object.create(null);
  // Wrapped function to return
  return function cachedFunction(string) {
    // If result is not yet cached
    if (!cache[string]) {
      // Evaluate the function and store in result
      let result = fn(string);
      // Store result in the cache
      cache[string] = result;
    }
    // Return value from the cache if cache is hit
    return cache[string];
  };
}

// Test Function
function computed(string) {
  console.log("2000s have passed");
  return "The result";
}

const cachedComputed = cached(computed);

// If we were making potentially thousands of calls, this would be become incredibly useful because we could just fetch
// Cached data in O(1) instead of potentially running expensive calculations over and over again.
cachedComputed("First pass");
cachedComputed("second Pass");
cachedComputed("third pass");
