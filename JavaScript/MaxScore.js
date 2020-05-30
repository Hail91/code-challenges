// Add values in nested objects together and return total

function maximumScore(tileHand) {
  scoreData = [];
  tileHand.map((data) => {
    for (let [key, value] of Object.entries(data)) {
      if (Number.isInteger(value) === true) {
        scoreData.push(value);
      }
    }
  });
  const reducer = (acc, cV) => acc + cV;
  let result = scoreData.reduce(reducer);
  return result;
}

console.log(
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
