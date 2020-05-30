// Return number of times boolean true exists in input array

function countTrue(arr) {
  truth = arr.filter((e) => {
    return e === true;
  });
  console.log(truth);
  return truth.length;
}

console.log(countTrue([true, false, false, true, false]));
