function staircase(n) {
  // [' ', ' ', ' ', ' ', '#', '#']
  // ^^ Behavior of code, Spaces are removed and replaced by '#' on
  // Every iteration of the while loop.
  let stairArr = new Array(n).fill(" ");
  // Loop over our Array of empty spaces
  while (stairArr.indexOf(" ") !== -1) {
    // Shift empty spaces over and insert '#' in it's place.
    stairArr.shift();
    // Push # onto the end.
    stairArr.push("#");
    // Console.log
    console.log(stairArr.join(""));
    // Reduce n by 1
    n -= 1;
  }
}

console.log(staircase(6));
