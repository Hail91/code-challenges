function destroyer(arr) {
  let tempArr = [];
  // Start looping over arguments Object
  for (let i = 1; i < arguments.length; i++) {
    // Push all arguments after initial array into a tempArray
    tempArr.push(arguments[i]);
  }
  // Now loop over the input array and filter out elements from the tempArray
  for (let j = 0; j < tempArr.length; j++) {
    arr = arr.filter((el) => el !== tempArr[j]);
  }
  // Return filtered Array
  return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
