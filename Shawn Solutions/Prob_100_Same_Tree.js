/*
  Given two binary trees, write a function to check if they are the same or not.

  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function isSameTree(p, q) {
    if (p == null || q == null) {
        return p == q;
    }
    return p.val == q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right);
}
