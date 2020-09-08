// NOT CURRENTLY WORKING
var pathSum = function (root, sum) {
  let output = [];
  let path = [];
  let stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
};
