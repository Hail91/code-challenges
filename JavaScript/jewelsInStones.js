// Return integer representing number of 'jewels' in 'stones' string.

const numJewelsInStones = function (J, S) {
  let stones = S.split("");
  let j = J.split("");
  let jewels = 0;
  for (let i = 0; i < j.length; i++) {
    stones.filter((element) => {
      if (element === j[i]) {
        jewels += 1;
      }
    });
  }
  return jewels;
};

console.log(numJewelsInStones("aA", "aaAAbbbb"));
