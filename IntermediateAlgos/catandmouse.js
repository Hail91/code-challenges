function catAndMouse(x, y, z) {
  // X is position of Cat A
  // Y is position of cat B
  // Z is position of Mouse
  // We can calculate distance between cats and mouse, if they are the same
  // Print mouse C, otherwise, print cat A if Cat A is closer, or Cat B if cat B
  // is closer
  let catADistance = Math.abs(z - x);
  let catBDistance = Math.abs(z - y);
  if (catADistance < catBDistance) {
    console.log("Cat A");
  } else if (catBDistance < catADistance) {
    console.log("Cat B");
  } else {
    console.log("Mouse C");
  }
}

console.log(catAndMouse(1, 2, 3));
