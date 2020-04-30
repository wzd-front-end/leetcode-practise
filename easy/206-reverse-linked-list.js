/**
 * @name 反转链表
 * @url https://leetcode-cn.com/problems/reverse-linked-list/
 * @date 2020-04-30 10:14
 * @tags 链表
 * description
 * ```
  * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
var reverseList = function(head) {
  let ans = new ListNode()
  while (head){
    let currNode = new ListNode(head.val)
    currNode.next = ans.next
    ans.next = currNode
    head = head.next
  }

  return ans.next
};
