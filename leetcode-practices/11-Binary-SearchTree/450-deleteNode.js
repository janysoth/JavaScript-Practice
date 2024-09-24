/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val)
    root.left = deleteNode(root.left, key);
  else if (key > root.val)
    root.right = deleteNode(root.right, key);
  else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Find the in-order successor (smallest in the right subtree)
    let minNode = root.right;
    while (minNode.left) minNode = minNode.left;

    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }

  return root;
};