function sortedInsert(head, data) {
  // Create new DLL node
  let node = new DoublyLinkedListNode();
  // assign passed in data to the node's data
  node.data = data;
  // First need to cover case if DLL is empty (AKA head === null)
  if (head === null) {
    head = node;
  }
  // Otherwise, if the head's value is greater than the value we're trying to pass in,
  // then insert the new node in front of the head and reset pointers
  else if (head.data > data) {
    node.next = head;
    node.next.prev = node;
    head = node;
  }
  // Otherwise...
  else {
    // While there is a next value after the current head node and it's value is less
    // than the value of node we're inserting
    while (head.next !== null && head.next.data < data) {
      // Traverse down the DLL, move head forward
      head = head.next;
    }
    // Once we've hit a value that is greater than data, we set node's next to                  head.next
    node.next = head.next;
    // If head.next is null (no node), then insert our node into that position
    if (head.next === null) {
      head.next = node;
    }
    // If it's not null...
    if (head.next !== null) {
      // Set head.next to our node
      head.next = node;
      // set node's prev to the head
      node.prev = head;
    }
    while (head.prev !== null) {
      head = head.prev;
    }
  }
  return head;
}
