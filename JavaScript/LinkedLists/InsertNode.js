// Insert Node into specified position of Linked List

function insertNodeAtPosition(head, data, position) {
  let node = head;
  for (let i = 1; i < position; i++, node = node.next) {
    continue;
  }
  node.next = { data, next: node.next };
  return head;
}
