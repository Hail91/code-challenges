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
/* End */

/* Destructuring in a loop */
const testData = [
  {
    name: "Rusty",
    color: "Orange",
  },
  {
    name: "Miss Scarlet",
    color: "Red",
  },
];

for (let i = 0; i < testData.length; ++i) {
  i === 0 ? (firstVar = testData[i]) : (secondVar = testData[i]);
}
console.log(firstVar, secondVar);
/* End */
