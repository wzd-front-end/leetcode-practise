/**
 * @name 环形链表 II
 * @url https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * @date 2020-05-26 09:59
 * @tags 链表、双指针
 * description
 * ```
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 *
 * 说明：不允许修改给定的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" style="height: 97px; width: 300px;">
 *
 * 示例 2：
 *
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png" style="height: 74px; width: 141px;">
 *
 * 示例 3：
 *
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 *
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png" style="height: 45px; width: 45px;">
 *
 *
 *
 * 进阶：
 * 你是否可以不用额外空间解决此题？
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
 * 哈希解法：
 * 80ms 66.5%
 * 38.3MB 12.5%
 * 缺点：需要多利用O(n)的存储空间
 */
var detectCycle = function (head) {
  let visited = new Set()

  let node = head
  while (node !== null) {
    if (visited.has(node)) {
      return node
    }
    visited.add(node)
    node = node.next
  }

  return null
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 快慢指针：
 *
 */
var detectCycle = function (head) {
  if(head === null){
    return null
  }
  let intersect = getIntersect(head)
  if(intersect === null){
    return null
  }
  let ptr1 = head
  let ptr2 = intersect
  while (ptr1 !== ptr2){
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  return ptr1
}
function getIntersect(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null){
    slow = slow.next
    fast = fast.next.next
    if(slow === fast){
      return slow
    }
  }
  return null
}
