/**
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
  // Helper function to collect leaf values using DFS
  function getLeafValues(root, leaves) {
    if (root === null) return;
    if (root.left === null && root.right === null) {
      leaves.push(root.val);
    }
    getLeafValues(root.left, leaves);
    getLeafValues(root.right, leaves);
  }

  let leaves1 = [];
  let leaves2 = [];
  getLeafValues(root1, leaves1);
  getLeafValues(root2, leaves2);
  return leaves1.toString() === leaves2.toString();
};