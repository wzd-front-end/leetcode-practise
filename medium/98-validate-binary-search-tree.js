/**
 * @name 验证二叉搜索树
 * @url https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @date 2020-05-05 10:38
 * @tags 树、深度优先搜索
 * description
 * ```
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 *    节点的左子树只包含小于当前节点的数。
 *    节点的右子树只包含大于当前节点的数。
 *    所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 *     2
 *    / \
 *   1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 *     5
 *    / \
 *   1   4
 *      / \
 *     3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 *      根节点的值为 5 ，但是其右子节点值为 4 。
 *
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
 * 题解：利用递归的思想，判断节点的值是否在上下限范围内，如果不在范围内则直接返回false，否则递归遍历左右子树是否符合要求
 */
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity)

  function helper(root, lower, upper) {
    if(root === null) return true
    if(root.val <= lower || root.val >= upper) return false
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  }
};