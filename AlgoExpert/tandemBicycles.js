// Space Complexity: O(nLog(n)) where n is the number of bicycles
// Time Complexity: O(1) space since we're using constant auxiliary space even if the input array sizes are increased
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let totalSpeed = 0;
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      let temp = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
      totalSpeed += temp;
    }
    return totalSpeed;
  }
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let temp = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    totalSpeed += temp;
  }
  return totalSpeed;
}
// Log output
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
