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

  // Find the node to delete
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // Node with only one child or no child
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Node with two children: Get the inorder successor (smallest in the right subtree)
    const findMin = (node) => {
      while (node.left) node = node.left;
      return node;
    };

    let successor = findMin(root.right);
    root.val = successor.val;

    // Delete the inorder successor
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};