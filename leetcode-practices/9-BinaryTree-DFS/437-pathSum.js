/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  // Helper function to count paths with sum starting from the current node
  function countPathsWithSum(node, targetSum) {
    if (!node) return 0;

    let count = 0;
    if (node.val === targetSum) count++;

    count += countPathsWithSum(node.left, targetSum - node.val);
    count += countPathsWithSum(node.right, targetSum - node.val);

    return count;
  }

  // Main function to traverse the tree
  let result = countPathsWithSum(root, targetSum);

  result += pathSum(root.left, targetSum);
  result += pathSum(root.right, targetSum);

  return result;
};