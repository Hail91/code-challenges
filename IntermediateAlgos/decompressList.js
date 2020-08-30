var decompressRLElist = function (nums) {
  let results = [];
  // Loop over nums, incrementing two at a time
  for (let i = 0; i < nums.length; i += 2) {
    // Slice each 'pair' in nums
    let temp = nums.slice(i, i + 2);
    for (let j = 0; j < temp[0]; j++) {
      // Push proper values to results
      results.push(temp[1]);
    }
  }
  return results;
};

console.log(decompressRLElist([1, 1, 2, 3]));
