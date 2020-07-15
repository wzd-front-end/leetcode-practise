/**
 * @name 合并两个有序链表
 * @url https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @date 2020-05-06 18:11
 * @tags 链表
 * description
 * ```
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * 题解：关注点在于有序链表，从两个链表的第一位开始比较，值较小的节点，将其推入结果链表，并移到下一项
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let ans = new ListNode()
  let currentNode = ans
  while (l1 && l2) {
    if (l1.val < l2.val) {
      let node = new ListNode(l1.val)
      currentNode.next = node
      currentNode = currentNode.next
      l1 = l1.next
    } else {
      let node = new ListNode(l2.val)
      currentNode.next = node
      currentNode = currentNode.next
      l2 = l2.next
    }
  }

  currentNode.next = l1 === null ? l2 : l1

  return ans.next
};
