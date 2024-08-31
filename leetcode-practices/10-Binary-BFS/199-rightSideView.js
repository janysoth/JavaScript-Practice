/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */


// Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
  if (!root) return [];

  const result = [];
  // Use a simple queue initialized with the root
  let queue = [root];

  while (queue.length > 0) {
    // Prepare for the next level
    const nextQueue = [];

    // Capture the value of the rightmost node at this level
    result.push(queue[queue.length - 1].val);

    // Traverse nodes in the current level
    for (let node of queue) {
      // Add left child first, then right child
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    // Move to the next level
    queue = nextQueue;
  }

  return result;
};