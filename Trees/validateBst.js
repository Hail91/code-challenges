// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Initially call with infinity because root node will always fall within that range
  return checkNode(tree, -Infinity, Infinity);
}

function checkNode(node, minVal, maxVal) {
  // If we've hit the bottom and it's null...subtree is valid
  if (node === null) return true;
  // Check if the current node value is outside the min and maxes we've set for this call
  if (node.value < minVal || node.value >= maxVal) return false;
  // Call method on the left and right subtrees
  let leftCheck = checkNode(node.left, minVal, node.value);
  let rightCheck = checkNode(node.right, node.value, maxVal);
  // Return result of checks on both, if either subtree is invalid, we'll just return false for that subtree
  // Which will result in a final false return from line 24
  return leftCheck && rightCheck;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
