function bouncer(arr) {
  let newArr = arr.filter((el) => {
    return el;
  });
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
