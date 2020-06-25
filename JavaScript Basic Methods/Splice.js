// ** Basic Splice implementation on Array **

function htmlColorNames(arr) {
  // First argument of Splice is the index to begin splicing
  // Second argument is number of elements to remove.
  // Remaining arguments are new values to insert at those respective places in Array.
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
