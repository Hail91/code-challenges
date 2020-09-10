var flipAndInvertImage = function (A) {
  let flipped = A.map((el) => el.reverse());
  for (let i = 0; i < flipped.length; i++) {
    // Looking at first Subarray
    flipped[i].forEach((e, i, arr) => {
      if (e === 0) {
        arr[i] = 1;
      } else arr[i] = 0;
    });
  }
  return flipped;
};
