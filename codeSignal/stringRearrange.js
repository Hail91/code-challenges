function stringsRearrangement(inputArray) {
  let results = [];
  createPermutations(inputArray, []);
  function createPermutations(inputArray, tempArray) {
    // If the inputArray has been emptied, push the temporary array permutation we generated to result
    if (!inputArray.length) results.push(tempArray);
    // Loop over inputArray
    for (let i = 0; i < inputArray.length; i++) {
      // Remove each value from inputArray and store
      let x = array.splice(i, 1)[0];
      // Call function recursively passing in the updated inputArray and the updated Temporary array
      createPermutations(inputArray, tempArray.concat(x));
      // add element x to inputArray starting at 'i'
      inputArray.splice(i, 0, x);
    }
  }
  /* TO DO....*/
  // Iterate over results checking for differences between strings in each subArray
}
