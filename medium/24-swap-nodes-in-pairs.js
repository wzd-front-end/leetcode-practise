/**
 * @name 两两交换链表中的节点
 * @url https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @date 2020-08-14 09:51
 * @tags 链表
 * description
 * ```
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 *
 *
 * ```
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//   if (head === null && head.next === null) {
//     return head
//   }
//   let firstNode = head
//   let secondNode = head.next
//
//   firstNode.next = swapPairs(secondNode.next)
//   secondNode.next = firstNode
//
//   return secondNode
// };
var swapPairs = function (head) {
  let dump = new ListNode(-1)
  dump.next = head
  let prevNode = dump

  while ((head !== null) && (head.next !== null)) {
    let firstNode = head
    let secondNode = head.next

    prevNode.next = secondNode
    firstNode.next = secondNode.next
    secondNode.next = firstNode

    prevNode = firstNode
    head = firstNode.next
  }

  return dump.next
}
