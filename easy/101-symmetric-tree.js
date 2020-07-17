/**
 * @name 对称二叉树
 * @url https://leetcode-cn.com/problems/symmetric-tree/
 * @date 2020-05-31 14:36
 * @tags 树、深度优先搜索、广度优先搜索
 * description
 * ```
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 *
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 *
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 *
 *
 *
 *
 * 进阶：
 *
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 *
 * ```
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 题解：镜像对称，即对其左右节点的值进行比较，采用递归的方式，深入检测，如果节点的左右节点都不存在，则返回true，
 * 如果只有一个节点存在，则返回false，如果都存在则判断值是否相等并比较节点的左节点与另外一个节点的右节点
 */
var isSymmetric = function (root) {
  return check(root, root)
  function check(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
  }
};
