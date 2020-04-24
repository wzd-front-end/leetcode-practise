/**
 * @name 零钱兑换
 * @url https://leetcode-cn.com/problems/coin-change/
 * @date 2020-04-24 08:55
 * @tags 动态规划
 * description
 * ```
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 *
 *
 * 示例 1:
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 *
 * 示例 2:
 *
 * 输入: coins = [2], amount = 3
 * 输出: -1
 *
 *
 *
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 *
 * ```
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i]
    for (let j = coin; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1)
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
};
