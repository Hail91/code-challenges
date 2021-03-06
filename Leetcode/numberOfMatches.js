const numberOfMatches = function (n) {
  let matchesPlayed = 0;
  // While the winner is not declared
  while (n !== 1) {
    if (n % 2 === 0) {
      // Cut out half the teams
      n = n / 2;
      // Increment number of matches by n
      matchesPlayed += n;
    } else if (n % 2 !== 0) {
      // advance one team automatically
      n += 1;
      // calculate the rest who advance
      n = n / 2;
      // Increment matches minus the 1 team who did not play in one
      matchesPlayed += n - 1;
    }
  }
  return matchesPlayed;
};
// Log output
console.log(numberOfMatches(14));
