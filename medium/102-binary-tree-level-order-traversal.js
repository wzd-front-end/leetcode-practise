/**
 * @name 二叉树的层序遍历
 * @url https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @date 2020-05-13 21:53
 * @tags 树、广度优先搜索
 * description
 * ```
  * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 *  
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 
 * 返回其层次遍历结果：
 * 
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
 * @return {number[][]}
 * 题解：广度优先遍历，通过前后队列的方式，存储前一层的节点，遍历生成下一层的节点，当前一层的节点遍历结束的时候，
 * 将该层所有的值推入结果数组并重置状态位
 * 
 */
var levelOrder = function(root) {
  if(!root) return []
  let preQueue = [root]
  let nextQueue = []
  let ans = []
  let layer = []
  while(preQueue.length > 0){
    let node = preQueue.shift()
    layer.push(node.val)
    if(node.left !== null){
      nextQueue.push(node.left)
    }
    if(node.right !== null){
      nextQueue.push(node.right)
    }
    if(preQueue.length === 0){
      ans.push(layer)
      preQueue = nextQueue
      nextQueue = []
      layer = []
    }
  }
  return ans
};