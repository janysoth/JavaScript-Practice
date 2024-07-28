/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function (root) {
  function dfs(node, maxVal) {
    if (!node) return 0;

    let good = 0;
    if (node.val >= maxVal) {
      good = 1;
      maxVal = node.val;
    }

    good += dfs(node.left, maxVal);
    good += dfs(node.right, maxVal);

    return good;
  }

  return dfs(root, root.val);
};