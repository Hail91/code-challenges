// Iterative solution for getting sum of all node depths.
function nodeDepths(root) {
  let runningSum = 0;
  let stack = [{ current: root, depth: 0 }];
  while (stack.length > 0) {
    let { current, depth } = stack.pop();
    if (current === null) {
      continue;
    }
    runningSum += depth;
    stack.push({ current: current.left, depth: depth + 1 });
    stack.push({ current: current.right, depth: depth + 1 });
  }
  return runningSum;
}

// Recursive solution
function recursiveNodeDepths(root, depth = 0) {
  if (root === null) return 0; // Base case
  return (
    // Return recursive call incrementing depth as we recurse down the tree.
    depth +
    recursiveNodeDepths(root.left, depth + 1) +
    recursiveNodeDepths(root.right, depth + 1)
  );
}
