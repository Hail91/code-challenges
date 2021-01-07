function longestPeak(array) {
  let peaks = [];
  let start = 0;
  let end = 0;
  let peakStarted = false;
  if (array.length == 0) return 0;
  while (end < array.length) {
    if (end == array.length - 1) break;
    if (array[end + 1] > array[end]) {
      end += 1;
      peakStarted = true;
    } else if (array[end + 1] === array[end]) {
      start = end + 1;
      end = start;
      peakStarted = false;
    } else {
      while (array[end + 1] < array[end] && end < array.length) {
        end += 1;
      }
      if (peakStarted) {
        let currPeak = array.slice(start, end + 1);
        peaks.push(currPeak);
      }
      start = end;
    }
  }
  if (peaks.length == 0) return 0;
  else
    return peaks[
      peaks.reduce(
        (acc, cV, index, arr) => (arr[acc].length > cV.length ? acc : index),
        0
      )
    ].length;
}
console.log(longestPeak([1, 2, 3, 3, 2, 1]));
