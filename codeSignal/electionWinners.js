function electionsWinners(votes, k) {
  let possibleWinners = 0;
  let leadingCandidate = Math.max(...votes);
  // iterate over votes array
  for (let i = 0; i < votes.length; ++i) {
    // determine if adding the remaining votes to a candidate can give them MORE votes than the leading candidate
    if (votes[i] !== leadingCandidate) {
      if (votes[i] + k > leadingCandidate) {
        possibleWinners += 1;
      }
    } else if (votes[i] === leadingCandidate) {
      // Generate array of all candidates other than leader
      let others = votes.filter((c) => c !== leadingCandidate);
      let remainingVotes = k;
      // Check if we have a tie with no votes left
      if (votes.length - others.length > 1 && k === 0) {
        continue;
      }
      // Iterate through remaining candidates
      others = others.map((c) => {
        if (remainingVotes > 0) {
          remainingVotes -= 1;
          return (c += 1);
        } else return c;
      });
      if (!others.some((c) => c > leadingCandidate)) {
        possibleWinners += 1;
      }
    }
  }
  return possibleWinners;
}
// Log output
console.log(electionsWinners([3, 1, 1, 3, 1], 2));
