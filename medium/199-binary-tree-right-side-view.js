/**
 * @name 二叉树的右视图
 * @url https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * @date 2020-04-22 18:42
 * @tags 树、深度优先搜索、广度优先搜索
 * description
 * ```
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 * 示例:
 *
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \     \
 *   5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return []
  let queue = []
  let res = []
  queue.push(root)
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      if (i === (len - 1)) {
        res.push(node.val)
      }
    }
  }
  return res
};