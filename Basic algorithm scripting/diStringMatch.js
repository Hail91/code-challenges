const diStringMatch = function (S) {
  let result = [];
  let indexes = S.split("").map((val, i, arr) => {
    return i;
  });
  indexes.push(S.length);
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === "I") {
      result.push(...indexes.splice(indexes.indexOf(Math.min(...indexes)), 1));
    } else
      result.push(...indexes.splice(indexes.indexOf(Math.max(...indexes)), 1));
  }
  return result;
};

console.log(diStringMatch("DDI"));
