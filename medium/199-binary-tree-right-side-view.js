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
 * 题解：难点在于，这道题会导致别人误以为只是求在右边的节点，实际上如果左子树更深，也会导致被右视图看到，
 * 所以需要按层进行收集；将根节点推入队列中，获取根节点的长度，通过遍历该长度的次数，将对应节点推出队列，
 * 然后将新的子节点加入队列中，当i的值达到遍历的最后节点时，将该值推入res中
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
