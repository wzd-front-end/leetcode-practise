/**
 * @name 统计「优美子数组」
 * @url https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
 * @date 2020-04-22 13:06
 * @tags 双指针
 * description
 * ```
 * 给你一个整数数组 nums 和一个整数 k。
 *
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 *
 * 请返回这个数组中「优美子数组」的数目。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [1,1,2,1,1], k = 3
 * 输出：2
 * 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
 *
 *
 * 示例 2：
 *
 * 输入：nums = [2,4,6], k = 1
 * 输出：0
 * 解释：数列中不包含任何奇数，所以不存在优美子数组。
 *
 *
 * 示例 3：
 *
 * 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
 * 输出：16
 *
 *
 *
 *
 * 提示：
 *
 *
 *    1 <= nums.length <= 50000
 *    1 <= nums[i] <= 10^5
 *    1 <= k <= nums.length
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 题解：首先，收集起奇数的个数索引值，并计算奇数的个数，然后将odd中的尾部增加n
 * 之后从第一个奇数开始遍历，i+k要小于等于cnt
 * 数量等于odd[i] - dp[i - 1]之间的个数乘以odd[i+k] - odd[i+k-1]得出这k个奇数的所有数组，然后移动到下一个奇数开始
 *
 */
var numberOfSubarrays = function (nums, k) {
  let n = nums.length
  let odd = []
  let ans = 0
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 !== 0) {
      odd[++cnt] = i
    }
  }
  odd[0] = -1
  odd[++cnt] = n

  for (let i = 1; (i + k) <= cnt; i++) {
    ans += (odd[i] - odd[i - 1]) * (odd[i + k] - odd[i + k - 1])
  }

  return ans
};
