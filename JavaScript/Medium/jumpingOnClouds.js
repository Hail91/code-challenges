function jumpingOnClouds(c) {
  // need to be able to track what cloud she is on, plus where the thunderheads are
  // Could loop over cloud array and have pointers to track where she is
  let curr_cloud = 0;
  // Total number of jumps made so far
  let jumps = 0;
  // Loop over cloud array
  for (let x = curr_cloud; x < c.length - 1; x = curr_cloud) {
    // Need to look ahead for thunderheads
    if (c[x + 1] === 1) {
      curr_cloud += 2;
      jumps += 1;
    } else if (c[x + 2] === 1) {
      curr_cloud += 1;
      jumps += 1;
    } else {
      curr_cloud += 2;
      jumps += 1;
    }
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
