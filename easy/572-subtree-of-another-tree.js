/**
 * @name 另一个树的子树
 * @url https://leetcode-cn.com/problems/subtree-of-another-tree/
 * @date 2020-05-07 10:11
 * @tags 树
 * description
 * ```
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
 *
 * 示例 1:<br />
 * 给定的树 s:
 *
 *
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 *
 *
 * 给定的树 t：
 *
 *
 *    4
 *   / \
 *  1   2
 *
 *
 * 返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。
 *
 * 示例 2:<br />
 * 给定的树 s：
 *
 *
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 *     /
 *    0
 *
 *
 * 给定的树 t：
 *
 *
 *    4
 *   / \
 *  1   2
 *
 *
 * 返回 false。
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * 题解：深度遍历，先输入源树和目标子树，判断是否进行源存在，之后检查当前的源节点和目标树是否相等
 *
 */
var isSubtree = function (s, t) {
  return dfs(s, t)

  function dfs(o, t) {
    if (!o) return false
    return check(o, t) || dfs(o.left, t) || dfs(o.right, t)
  }

  function check(o, t) {
    if (!o && !t) return true
    if ((o && !t) || (!o && t) || (o.val !== t.val)) return false
    return check(o.left, t.left) && check(o.right, t.right)

  }
};
