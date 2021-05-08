function alternatingSums(a) {
  // Initialize variables to track scores for both teams and the current state switch
  let team1 = 0;
  team2 = 0;
  state = 1;
  // Loop over array
  for (let i = 0; i < a.length; i++) {
    // If state is 'on', add to team 1's score
    if (state === 1) {
      team1 += a[i];
      state = 0;
      // Otherwise, add to team 2's score
    } else {
      team2 += a[i];
      state = 1;
    }
  }
  // Return both scores
  return [team1, team2];
}
// Log output
console.log(alternatingSums([105, 40, 60, 100, 35]));
