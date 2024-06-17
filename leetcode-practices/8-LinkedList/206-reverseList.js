/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseList = function (head) {
  // Edge case: empty list or single node
  if (!head || !head.next) {
    return head;
  }

  // Recursive call to reverse the rest of the list
  const reversedHead = reverseList(head.next);

  // Adjust pointers to reverse the current node
  head.next.next = head;  // reverse the next node's pointer
  head.next = null;       // set current node's next pointer to null

  return reversedHead;    // return the new head of the reversed list
};