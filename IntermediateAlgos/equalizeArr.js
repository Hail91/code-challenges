function equalizeArray(arr) {
  // Initialize Hashtable
  const occurrences = {};
  let deletions = 0;
  // Populate Hashtable with number of occurrences by traversing input array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in occurrences) {
      occurrences[arr[i]] += 1;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  // Can Loop over Object values getting the maximum value
  for (let [key, value] of Object.entries(occurrences)) {
    if (
      value < Math.max(...Object.values(occurrences)) ||
      Number(key) < Math.max(...Object.keys(occurrences))
    ) {
      while (arr.includes(Number(key))) {
        arr.splice(arr.indexOf(Number(key)), 1);
        deletions += 1;
      }
    }
  }
  return deletions;
}

console.log(equalizeArray([1, 2, 3, 4]));
