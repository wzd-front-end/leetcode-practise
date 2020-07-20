/**
 * @name 寻找重复数
 * @url https://leetcode-cn.com/problems/find-the-duplicate-number/
 * @date 2020-05-26 09:33
 * @tags 数组、双指针、二分查找
 * description
 * ```
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 *
 * 示例 1:
 *
 * 输入: [1,3,4,2,2]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [3,1,3,4,2]
 * 输出: 3
 *
 *
 * 说明：
 *
 *
 *  不能更改原数组（假设数组是只读的）。
 *  只能使用额外的 O(1) 的空间。
 *  时间复杂度小于 O(n2) 。
 *  数组中只有一个重复的数字，但它可能不止重复出现一次。
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 题解：使用快慢指针，如果有存在重复的数字，那么就类似于环形链表，一定会存在最后两个指针的值相等
 * 所以可以将值当作指针跳转，最后重置慢指针，将快指针和慢指针同时跳转，当两者相等的时候，即可的得到重复的值
 */
// var findDuplicate = function (nums) {
//   let slow = 0
//   let fast = 0
//   do {
//     slow = nums[slow]
//     fast = nums[nums[fast]]
//   } while (slow !== fast)
//   slow = 0
//   while (fast !== slow) {
//     slow = nums[slow]
//     fast = nums[fast]
//   }
//   return slow
// };
/**
 * @param {number[]} nums
 * @return {number}
 * 题解：利用二分法来解决该问题，只有一个数是重复的，那个这个数只可能出现在中间数的左边或者右边，通过计算左右两边的数的数量
 * 确定该数位于左边还是右边
 *
 */
var findDuplicate = function (nums) {
  const n = nums.length
  let l = 1, r = n, ans = -1
  while (l <= r){
    let mid = (l + r) >> 1
    let cnt = 0
    for(let i = 0; i < n; i++){
      if(nums[i] <= mid){
        cnt += 1
      }
    }
    if(cnt <= mid){
      l = mid + 1
    } else {
      r = mid - 1
      ans = mid
    }
  }
  return ans
}
