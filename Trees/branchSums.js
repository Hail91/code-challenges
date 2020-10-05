class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Main function that generates the output 'sumList' and calls recursive function to update
// the sumList as it traverses the Binary Search Tree.
function branchSums(root) {
  let sumList = [];
  branchSumCalculator(root, 0, sumList);
  return sumList;
}

function branchSumCalculator(node, runningSum, sumList) {
  // Need case for only one valid child node of node.
  if (!node) {
    return;
  }
  // Generate an updated sum based on the current sum passed to the recursive call and the node's value
  // The recursive function is being called on.
  const updatedRunningSum = runningSum + node.value;
  // If we hit a leaf node, we want to update the sumList passed to this function with the updated Sum.
  if (!node.left && !node.right) {
    sumList.push(updatedRunningSum);
    // Then return that value to the main branchSums function.
    return;
  }
  // If we haven't hit a leaf node or a node with only one child, call function recursively on the current node's left and right
  // Passing it the updatedSum and the sumList <--- Maintain integrity of the list
  branchSumCalculator(node.left, updatedRunningSum, sumList);
  branchSumCalculator(node.right, updatedRunningSum, sumList);
}

exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
