// Function removes all instances of null from input array

function removeNull(arr) {
  filtered = arr.filter((v) => {
    return v !== null;
  });
  console.log(filtered);
}

console.log(removeNull([7, 8, null, 9]));
