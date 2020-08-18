/**
 * @name 有序链表转换二叉搜索树
 * @url https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * @date 2020-08-18 09:41
 * @tags 深度优先搜索、链表
 * description
 * ```
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 *
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
 *
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 *
 *
 * ```
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  return buildTree(head, null)
};

function buildTree(left, right) {
  if (left === right) {
    return null
  }
  let mid = getMid(left, right)
  let root = new TreeNode(mid.val)
  root.left = buildTree(left, mid)
  root.right = buildTree(mid.next, right)
  return root
}

function getMid(left, right) {
  let fast = left
  let slow = left
  while (fast !== right && fast.next !== right) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
