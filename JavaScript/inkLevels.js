// Return lowest value from key:value pair in input object

function inkLevels(inks) {
  inkAmnts = [];
  for (let [key, value] of Object.entries(inks)) {
    inkAmnts.push(value);
  }
  res = Math.min(...inkAmnts);
  return res;
}

console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);
