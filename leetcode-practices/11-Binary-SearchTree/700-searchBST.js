/**
 * You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  // If the root is null, return null (value not found)
  if (!root) return null;

  // If the current node's value matches the target value, return this node
  if (root.val === val) return root;

  // If the target value is greater than the current node's value, search the right subtree
  if (val > root.val) {
    return searchBST(root.right, val);
  }

  // Otherwise, search the left subtree
  return searchBST(root.left, val);
};