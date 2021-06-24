function invertBinaryTree(tree) {
  if (tree === null) return;
  // Swap left and right
  let leftNode = tree.left;
  tree.left = tree.right;
  tree.right = leftNode;
  // Call function recursively on the left node
  invertBinaryTree(tree.left);
  // Call function recursively on right node
  invertBinaryTree(tree.right);
}
// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
