/**
 * @name 两数相加 II
 * @url https://leetcode-cn.com/problems/add-two-numbers-ii/
 * @date 2020-04-14 11:40
 * @tags 链表
 * description
 * ```
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 *
 *
 * 进阶：
 *
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 *
 *
 *
 * 示例：
 *
 * 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 8 -> 0 -> 7
 *
 *
 * ```
 */



function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 128ms  81.9%
 * 38.8MB  100%
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = []
  let stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  let carry = 0
  let curr = new ListNode(0)

  while (stack1.length > 0 || stack2.length > 0 || carry !== 0) {
    let num1 = stack1.pop()
    let num2 = stack2.pop()
    let sum = (num1 ? num1 : 0) + (num2 ? num2 : 0) + carry
    sum >= 10 ? (carry = 1) : (carry = 0)

    curr.val = sum % 10
    let prev= new ListNode(0)
    prev.next = curr
    curr = prev
  }


  return curr.next
};
