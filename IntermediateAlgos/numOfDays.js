function metroCard(lastNumberOfDays) {
  let daysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Loop over daysArray, find all values after lastNumberOfDays
  let final = daysArray
    .map((el, i, arr) => (arr[i] === lastNumberOfDays ? arr[i + 1] : ""))
    .filter((el) => el !== "");
  // Filter out duplicates
  let cleanArray = final.filter((el) => el !== undefined);
  let uniques = new Set(cleanArray);
  return Array.from(uniques);
}

console.log(metroCard(31));
