// Destructuring (added with ES6) allows us to extract pieces of data from objects (arrays / hashmaps)

/* Variable declarations */

/* The target on left | The source on right */

// Array destructuring
var [first, second] = [true, false];
let [first, second] = [true, false];
const [first, second] = [true, false];

// Object destructuring
var { first, second } = { first: 0, second: 1 };
let { first, second } = { first: 0, second: 1 };
const { first, second } = { first: 0, second: 1 };

// Array Assignment
[first, second] = [true, false];
// Object Assignment
let { first, second } = { first: 0, second: 1 };
