/**
 * @name 二叉树的中序遍历
 * @url https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @date 2020-04-08 09:21
 * @tags 栈、树、哈希表
 * description
 * ```
  * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * 题解：利用栈来存储往下递归的节点，然后到底后执行遍历值存储，接下来遍历右节点
 * 
 * 64ms  69.30%
 * 33.8MB  76.40%
 */
var inorderTraversal = function(root) {
  let res = []
  let stack = []

  let curr = root
  while(curr !== null || stack.length !== 0) {
    while(curr !== null){
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }

  return res
};