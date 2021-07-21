// Destructuring (added with ES6) allows us to extract pieces of data from objects (arrays / hashmaps)

/* Variable declarations */

/* The target on left | The source on right */

// Array destructuring
let [first, second] = [true, false];

// Object destructuring
let { firstObj, secondObj } = { first: 0, second: 1 };

// Array Assignment
[first, second] = [true, false];
// Object Assignment
let { a, b } = { firstObj: 0, secondObj: 1 };

/* Destructuring Challenge */
const data = {
  name: "Rusty",
  room: "Kitchen",
  weapon: "Candlestick",
};
const { room, weapon } = data;

console.log(room, weapon);
/* End */
