var postorder = function (root) {
  const path = [];
  const stack = root ? [root] : [];
  [];
  while (stack.length > 0) {
    const current = stack.pop();
    path.push(current.val);
    for (const child of current.children) {
      stack.push(child);
    }
  }
  return path.reverse();
};
