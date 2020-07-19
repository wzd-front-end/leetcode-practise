/**
 * @name 两数相加
 * @url https://leetcode-cn.com/problems/add-two-numbers/
 * @date 2020-03-09 15:17
 * @tags 链表、数学
 * description
 * ```
  * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
 * @return {ListNode}
 * 题解：类似字符串相加
 */
function ListNode(val){
  this.val = val
  this.next = null
}

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0)
  let p = l1, q = l2, curr = dummyHead
  let carry = 0
  while(p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0
    let y = (q !== null) ? q.val : 0

    let sum = x + y + carry
    if(sum >= 10){
      carry = 1
    } else{
      carry = 0
    }
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if(p !== null) p = p.next
    if(q !== null) q = q.next
  }
  if(carry > 0){
    curr.next = new ListNode(carry)
  }
  return dummyHead.next
};