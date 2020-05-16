/**
 * @name K 个一组翻转链表
 * @url https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * @date 2020-05-16 10:59
 * @tags 链表
 * description
 * ```
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。
 *
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 *
 *
 * 示例：
 *
 * 给你这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 *
 *
 * 说明：
 *
 *
 *    你的算法只能使用常数的额外空间。
 *    你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const hair = new ListNode(0)
  hair.next = head
  let pre = hair

  while (head) {
    let tail = pre
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }
    const nex = tail.next;
    [head, tail] = myReverse(head, tail)
    pre.next = head
    tail.next = nex
    pre = tail;
    head = tail.next
  }
  return hair.next
};

const myReverse = (head, tail) => {
  let pre = tail.next
  let p = head
  while (pre !== tail) {
    let nex = p.next
    p.next = pre
    pre = p
    p = nex
  }
  return [tail, head]
}