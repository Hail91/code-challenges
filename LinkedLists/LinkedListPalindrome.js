var isPalindrome = function (head) {
  // 1 --> 2 --> 2 --> 1 <-- Example Linked List
  // H
  const helperArr = [];
  let slow = head; // 1
  let fast = head; // 1

  while (fast && fast.next) {
    helperArr.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    helperArr.push(slow.val);
  }

  while (slow) {
    if (slow.val !== helperArr.pop()) return false;
    slow = slow.next;
  }
  return true;
};
