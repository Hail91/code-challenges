// Return an array of booleans that tells you if adding 'extraCandies' to each kid's candies will give that kid the most candy in the array.
const kidsWithCandies = function (candies, extraCandies) {
  // Need a variable to store highest number of candies currently held.
  let mostCandies = Math.max(...candies);
  let resArray = [];
  // Loop over each kid's candies and add extra candies to each.
  for (let i = 0; i < candies.length; i++) {
    let c = candies[i] + extraCandies;
    if (c >= mostCandies) {
      resArray.push(true);
    } else {
      resArray.push(false);
    }
  }
  return resArray;
  // Then we need to check if the new number of held candies is higher than the current max,
};

console.log(kidsWithCandies([8, 1, 3, 4, 2], 3));
