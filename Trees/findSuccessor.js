// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  let traversalOrder = traverse(tree);
  // Iterate over the return array
  for (let i = 0; i < traversalOrder.length; i++) {
    // If the current value in traversalOrder does not match node, keep iterating
    if (traversalOrder[i] !== node) continue;
    // Otherwise, we've hit our node...so now check if the next value is not null
    else {
      if (traversalOrder[i + 1] !== null) return traversalOrder[i + 1];
    }
  }
  return null;
}

function traverse(node, visited = []) {
  if (node === null) return visited;
  // Call function on itself down the left subtree
  traverse(node.left, visited);
  // Once we finish with the left subtree, push those values into visited
  visited.push(node);
  // Then repeat for right subtree
  traverse(node.right, visited);
  // Return array
  return visited;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
