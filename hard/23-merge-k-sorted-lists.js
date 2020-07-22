/**
 * @name 合并K个排序链表
 * @url https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @date 2020-04-28 23:08
 * @tags 堆、链表、分治算法
 * description
 * ```
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 *
 */
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1)

  function mergeTwoLists(a, b) {
    if (!a || !b) {
      return a ? a : b
    }
    let head = new ListNode()
    let tail = head
    let aPrt = a
    let bPrt = b
    while (aPrt && bPrt) {
      if(aPrt.val < bPrt.val){
        tail.next = aPrt
        aPrt = aPrt.next
      } else {
        tail.next = bPrt
        bPrt = bPrt.next
      }
      tail = tail.next
    }
    tail.next = (aPrt ? aPrt :bPrt)
    return head.next
  }

  function merge(lists, l, r) {
    if (l === r) return lists[l]
    if (l > r) return null

    let mid = parseInt((l + r) / 2)
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
  }
};
