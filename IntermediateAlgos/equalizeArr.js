// Time Complexity: O(n)
// Space Complexity: O(n) <--- Input size will use linear space, but the occurrences hashmap will also use linear space based on
// the input size of arr.

function equalizeArray(arr) {
  const occurrences = {}; // Size of occurrences will depend on length of input arr, so this is using O(n) space.
  let deletions = 0; // Constant space, O(1)
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
    let numOccurs = Object.values(occurrences);
    let checkOccurs = new Set(numOccurs);
    if (
      value < Math.max(...Object.values(occurrences)) &&
      checkOccurs.size > 1
    ) {
      while (arr.includes(Number(key))) {
        arr.splice(arr.indexOf(Number(key)), value);
        deletions += value;
      }
    } else if (checkOccurs.size <= 1 && arr.length > value) {
      arr.splice(arr.indexOf(Number(key)), value);
      deletions += value;
    }
  }
  return deletions;
}
console.log(equalizeArray([1, 2, 2, 3]));
