/**
 * 2095. Delete the Middle Node of a Linked List
 * 
 * You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteMiddle = (head) => {
  // If the list is empty or has only one element, return null
  if (head === null || head.next === null) {
    return null;
  }

  // Initialize two pointers: slowPointer and fastPointer
  let slowPointer = head;
  let fastPointer = head;
  let previousPointer = null;  // To keep track of the node before the slowPointer

  // Move fastPointer two steps and slowPointer one step each time
  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    previousPointer = slowPointer;
    slowPointer = slowPointer.next;
  }

  // At this point, slowPointer is pointing to the middle node
  // We need to delete the node pointed by slowPointer
  if (previousPointer !== null) {
    previousPointer.next = slowPointer.next;
  }

  // Return the modified list starting from head
  return head;
};