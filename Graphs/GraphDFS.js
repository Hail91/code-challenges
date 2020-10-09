class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Add current node we're looking at to the array
    array.push(this.name); // <-- This references the current node
    for (let child of this.children) {
      // Loop over all the node's children
      // Recurse through in depth first manner
      child.depthFirstSearch(array);
    }
    // Return array after we've recursed over every node in the graph and added to the array.
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
