/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 21. Merge Sorted List LeetCode Question
 */

/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Merges two sorted linked lists into a single sorted linked list.
 * @param {ListNode} list1 - The head of the first linked list.
 * @param {ListNode} list2 - The head of the second linked list.
 * @returns {ListNode} - The head of the merged linked list.
 */
const mergeTwoLists = function (list1, list2) {
  // Create a dummy node to simplify the code.
  let tempNode = new ListNode(0, null);
  // Initialize currentNode to the dummy node.
  let currentNode = tempNode;

  // Iterate while both linked lists are not empty.
  while (list1 && list2) {
    // Compare values of the current nodes in list1 and list2.
    if (list1.val < list2.val) {
      // If the value in list1 is smaller, add l1 to the merged list.
      currentNode.next = list1;
      // Move to the next node in list1.
      list1 = list1.next;
    } else {
      // If the value in list2 is smaller or equal, add list2 to the merged list.
      currentNode.next = list2;
      // Move to the next node in list2.
      list2 = list2.next;
    }
    // Move to the next node in the merged list.
    currentNode = currentNode.next;
  }

  // Handle the case where one of the linked lists is longer than the other.
  currentNode.next = list1 || list2;

  // Return the head of the merged linked list (skipping the dummy node).
  return tempNode.next;
};


const list1 = [1, 2, 3];
const list2 = [2, 3, 4];

const mergeLists = mergeTwoLists(list1, list2);
console.log(mergeLists);