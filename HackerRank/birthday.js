function birthday(s, d, m) {
  let front = 0;
  end = 0;
  currLength = 1;
  output = 0;
  for (let i = 0; i < s.length; i++) {
    end += m - 1;
    currLength = m;
    let currBar = s.slice(front, end + 1);
    if (currBar.reduce((a, b) => a + b) === d) {
      output += 1;
      front += 1;
      end = front;
      currLength = 1;
    } else {
      front += 1;
      end = front;
      currLength = 1;
    }
  }
  return output;
}
// Log output
console.log(
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);
