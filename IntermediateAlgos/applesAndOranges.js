function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // S and T are range of sam's house.
  // A is  location of apple tree.
  // B is  location of orange tree.
  // Apples/oranges params are distance apples and oranges fall from their respective
  // Trees.
  let applesNum = 0;
  let orangesNum = 0;
  // Loop over apples array
  for (let ap = 0; ap < apples.length; ap++) {
    let tempNum = a + apples[ap];
    if (tempNum >= s && tempNum <= t) {
      applesNum += 1;
    } else {
      continue;
    }
  }
  // Loop over oranges array
  for (let o = 0; o < oranges.length; o++) {
    let tempNum = b + oranges[o];
    if (tempNum >= s && tempNum <= t) {
      orangesNum += 1;
    } else {
      continue;
    }
  }
  console.log(applesNum);
  console.log(orangesNum);
}
