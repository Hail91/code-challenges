// Time Complexity: O(nLogn) where n is the length of the queries array, sort runs in O(nlogn) time, O(nlogn) + n reduces to O(nlogn)
// Space Complexity O(1) constant space since sort occurs in-place and we only use a variable to hold the return value
function minimumWaitingTime(queries) {
  let minTime = 0;
  // Sort input array (in place) in ascending order (longest query becomes last value)
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; ++i) {
    // Add the current query for every value left from the current index up to the last element (not including)
    minTime += queries[i] * (queries.length - (i + 1));
  }
  return minTime;
}
// Log output
console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
