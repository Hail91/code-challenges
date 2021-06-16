function invertBinaryTree(tree) {
  // Use a Queue data structure to store nodes as we traverse breadth first
  let queue = [tree];
  // While Queue is not empty
  while (queue.length > 0) {
    // Pop node off stack and store in variable
    let currentNode = queue.shift();
    if (currentNode === null) continue;
    // Perform swap of the currentNode's children
    swapChildren(currentNode);
    // Push left and right nodes of currentNode to queue
    queue.push(currentNode.left);
    queue.push(currentNode.right);
  }
}

function swapChildren(treeNode) {
  // Store treeNode.left in variable because we will need to reassign AFTER it has been swapped
  let leftNode = treeNode.left;
  treeNode.left = treeNode.right;
  treeNode.right = leftNode;
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
