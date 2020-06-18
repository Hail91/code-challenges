// Event Loop example in JavaScript
function eventLoopExample() {
  console.log("alpha");
  setTimeout(() => console.log("beta"), 0);
  console.log("gamma");
}

// Should be alpha, gamma, beta
// Beta returns last as the call stack needs to finish executing functions in the global execution
// context before beta gets added to the stack

console.log(eventLoopExample());
