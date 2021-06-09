function inOrderTraverse(tree, array) {
  if (tree === null) return array;
  // recursively traverse the left subtree
  inOrderTraverse(tree.left, array);
  // Push all the values into
  array.push(tree.value);
  // recursively traverse the right subtree
  inOrderTraverse(tree.right, array);
  // Return the array
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree === null) return array;
  // Visit the root.
  array.push(tree.value);
  // Traverse the left subtree, i.e., call Preorder(left-subtree)
  preOrderTraverse(tree.left, array);
  // Traverse the right subtree, i.e., call Preorder(right-subtree)
  preOrderTraverse(tree.right, array);
  // Return
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree === null) return array;
  // Traverse Left subtree
  postOrderTraverse(tree.left, array);
  // traverse right subtree
  postOrderTraverse(tree.right, array);
  // visit root
  array.push(tree.value);
  // return
  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
