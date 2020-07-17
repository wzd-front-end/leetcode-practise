/**
 * @name 打家劫舍
 * @url https://leetcode-cn.com/problems/house-robber/
 * @date 2020-03-14 15:12
 * @tags 动态规划
 * description
 * ```
  * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 *
 * 示例 1:
 *
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 *      偷窃到的最高金额 = 1 + 3 = 4 。
 *
 * 示例 2:
 *
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 *      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 题解：要使得利益最大化，那就需要判断当前是否进行偷窃，偷窃后对于结果的最大值有无影响
 *
 * 64ms  61.51%
 * 33.6MB  98.61%
 */
var rob = function(nums) {
  let n = nums.length
  if(n === 0) return 0
  if(n === 1) return nums[0]

  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for(let i = 2;i < n; i++){
    dp[i] = Math.max((nums[i] + dp[i - 2]), dp[i - 1])
  }

  return dp[n - 1]
};
/**
 * @param {number[]} nums
 * @return {number}
 *
 * leetcode解法，实际上我们只需最大值，不需要把全部得工程值存起来
 */
// var rob = function(nums) {
//   let prevMax = 0
//   let currMax = 0
//   for(let val of nums){
//     let temp = currMax
//     currMax = Math.max(prevMax + val, currMax)
//     prevMax = temp
//   }

//   return currMax
// };
