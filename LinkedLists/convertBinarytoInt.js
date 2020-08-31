var getDecimalValue = function (head) {
  let output = "";
  // Traverse the linked list
  while (head !== null) {
    // Append each node value to an empty string
    output += head.val;
    head = head.next;
  }
  // Parse into base 10 and return.
  return parseInt(output, 2);
};
