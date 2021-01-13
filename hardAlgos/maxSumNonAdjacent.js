function maxSubsetSumNoAdjacent(array) {
  // If array is empty, return zero.
  if (array.length === 0) return 0;
  // Otherwise if it's length 1, the max sum is obviously that value.
  else if (array.length === 1) return array[0];
  // Copy the array
  let maximumSumsArray = array.slice();
  // Start by calculating the max between the first 2 values
  maximumSumsArray[1] = Math.max(array[0], array[1]);
  // Loop over the array starting at the third value through the end
  for (let i = 2; i < array.length; i++) {
    // On every iteration, update maximumSumsArray at i with the max value
    // That value will either be the previous value calculated or the value non adjacent plus the current value in array
    maximumSumsArray[i] = Math.max(
      maximumSumsArray[i - 1],
      maximumSumsArray[i - 2] + array[i]
    );
  }
  // Repeat the calculation for every new element, then return the last element since that must be the greatest sum
  return maximumSumsArray[maximumSumsArray.length - 1];
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
