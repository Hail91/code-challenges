// Basic closure exercise
function outer() {
  // Outer Function
  let b = 10; // Outer enclosing variable 'b' in it's local scope
  function inner() {
    // Inner function has access to the following scope chain...
    let a = 20; // 1.) It's local scope (variable 'a')
    console.log(a + b); // 2.) The parent function's variables (local scope)
  } // 3.) Variables declared/initialized in the global scope
  return inner; // ** Outer returns a function **
}
let X = outer(); // Call to outer returns inner which is a function. X will be equal to a function if we check with typeof()
console.log(X()); // Log result of calling X, which will be 30 since it's just running the inner function.

// Another closure example

function outer() {
  let b = 10; // Variable b stored in outer's local scope
  let c = 100; // Variable c stored in outer's local scope as well
  function inner() {
    // Nested function inner will have access to outer's local scope through ** closure **
    let a = 20; // Variable a stored in inner's local scope
    console.log("a= " + a + " b= " + b); // Will print a AND b since it has access to a in outer's local scope
    a++; // a increments by 1
    b++; // b increments by 1
  }
  return inner; // Outer then returns the inner function
}
var Z = outer(); // outer() invoked the first time
var Y = outer(); // outer() invoked the second time
//end of outer() function executions
Z(); // Z() invoked the first time
Z(); // Z() invoked the second time
Z(); // Z() invoked the third time
Y(); // Y() invoked the first time

// Tricky Interview Question

// const arr = [5, 10, 15, 20];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }
