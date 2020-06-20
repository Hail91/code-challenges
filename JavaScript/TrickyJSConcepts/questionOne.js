// What will typeof a, and typeof b return?
function foo() {
  // b is neither declared in the global scope of the script, or in the function scope. So JS automatically assumes it to be global.
  let a = (b = 0);
  a++;
  return a;
}

foo();
typeof a; // => Will evaluate to undefined because a only exists in foo's immediate function scope
typeof b; // => Will evaluate to 'Number' because b exists in the global scope.
