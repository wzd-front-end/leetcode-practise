/**
 * @name 从前序与中序遍历序列构造二叉树
 * @url https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @date 2020-05-22 10:25
 * @tags 树、深度优先搜索、数组
 * description
 * ```
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let n = inorder.length
  let indexMap = new Map()
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i)
  }

  function myBuildTree(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
    if (preorder_left > preorder_right) {
      return null
    }
    let preorder_root = preorder_left
    let inorder_root = indexMap.get(preorder[preorder_root])

    let root = new TreeNode(preorder[preorder_root])
    let size_left_subtree = inorder_root - inorder_left
    root.left = myBuildTree(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
    root.right = myBuildTree(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
    return root
  }

  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1)
};


