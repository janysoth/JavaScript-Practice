/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {

  if (!head || !head.next) return head;

  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev; // prev will be the new head of the reversed list
};