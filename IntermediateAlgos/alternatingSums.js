function alternatingSums(a) {
  // Filter values based on index being even or odd.
  let teamOne = [];
  let teamTwo = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOne.push(a[i]);
    } else {
      teamTwo.push(a[i]);
    }
  }

  function sum(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  }

  return [sum(teamOne), sum(teamTwo)];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
