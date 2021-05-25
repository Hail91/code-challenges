function tournamentWinner(competitions, results) {
  let teamHash = {};
  for (let i = 0; i < competitions.length; i++) {
    // Iterate over each SubArray
    for (let j = 0; j < competitions[i].length; j++) {
      if (competitions[i][j] in teamHash) continue;
      else teamHash[competitions[i][j]] = 0;
    }
  }
  // Iterate again adding scores up in the Hashtable
  for (let k = 0; k < competitions.length; k++) {
    for (let m = 0; m < competitions[k].length; m++) {
      if (results[k]) {
        teamHash[competitions[k][0]] += 3;
      } else teamHash[competitions[k][1]] += 3;
    }
  }
  let maxPts = Math.max(...Object.values(teamHash));
  for (let [key, value] of Object.entries(teamHash)) {
    if (value === maxPts) {
      return key;
    }
  }
}
// Log output
console.log(
  tournamentWinner(
    [
      ["C#", "HTML"],
      ["Python", "C#"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
