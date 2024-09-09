/**
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = function (root) {
  if (!root) return 0;

  let queue = [root]; // Queue for BFS
  let maxSum = -Infinity; // Initialize maxSum to very low value
  let level = 1, maxLevel = 1; // Track current level and max level

  while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    let currentLevelSum = 0; // Sum of nodes at the current level

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Get the front node in the queue
      currentLevelSum += node.val;

      // Add left and right children to the queue for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // If the current level sum is greater than the max sum found so far
    if (currentLevelSum > maxSum) {
      maxSum = currentLevelSum;
      maxLevel = level;
    }

    level++; // Move to the next level
  }

  return maxLevel; // Return the level with the maximum sum
};