function minHeightBst(array, node = null, start = 0, end = array.length - 1) {
  // Need some kind of base case for the recursion
  if (end < start) return;
  // Find middle point in input array for each iteration
  let middle = Math.floor((start + end) / 2);
  // If the passed node is null, then generate a new node and assign
  if (node === null) node = new BST(array[middle]);
  // Otherwise, insert the values on the node
  else node.insert(array[middle]);
  // Call recursively on left and then right sides
  minHeightBst(array, node, start, middle - 1);
  minHeightBst(array, node, middle + 1, end);
  // Then return
  return node;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
