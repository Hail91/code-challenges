const hammingDistance = function (x, y) {
  return (x ^ y) // Return Bitwise XOR result (where bits differ)
    .toString(2) // Convert to Binary
    .split("") // Split into array
    .filter((x) => x == "1").length; // Filter array down to only 1s and return length
};

console.log(hammingDistance(680142203, 1111953568));
