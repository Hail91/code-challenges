myVar; // => undefined? // variables instantiated with var are hoisted to top of current scope (Global or function)
// Therefore, if not given a value, it will be assigned undefined until it's initialized with a value
myConst; // => ReferenceError?
// const and let must be declared otherwise they will throw a ref error.

var myVar = "value";
const myConst = 3.14;

// var === lives in scope of current execution context.
// let === block scoped.
// const === block scoped.
