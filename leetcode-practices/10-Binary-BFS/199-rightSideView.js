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

  const rightView = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let lastNodeValue = null;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      lastNodeValue = currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    rightView.push(lastNodeValue);
  }
  return rightView;
};