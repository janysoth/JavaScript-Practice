/**
 * In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {

  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  let maxTwinSum = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let twinSum = arr[left] + arr[right];
    maxTwinSum = Math.max(maxTwinSum, twinSum);
    left++;
    right--;
  }

  return maxTwinSum;
};

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> null
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(pairSum(head));