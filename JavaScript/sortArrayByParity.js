var sortArrayByParity = function (A) {
  let answer = A.filter((el) => el % 2 === 0);
  answer.push(...A.filter((el) => el % 2 !== 0));
  return answer;
};

console.log(sortArrayByParity([3, 4, 2, 1]));
