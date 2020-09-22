function findClosestValueInBst(tree, target) {
  let queue = [tree];
  let closest;
  let diff = Math.abs(tree.value - target);
  // While loop to traverse the tree and check for 'closest' value
  while (queue.length > 0) {
    let current = queue.pop();
    if (Math.abs(current.value - target) <= diff) {
      diff = Math.abs(current.value - target);
      closest = current.value;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
