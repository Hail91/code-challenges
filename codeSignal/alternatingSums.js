function alternatingSums(a) {
  let team1 = 0;
  team2 = 0;
  state = 1;
  // Loop over array
  for (let i = 0; i < a.length; i++) {
    if (state === 1) {
      team1 += a[i];
      state = 0;
    } else {
      team2 += a[i];
      state = 1;
    }
  }
  return [team1, team2];
}
// Log output
console.log(alternatingSums([105, 40, 60, 100, 35]));
