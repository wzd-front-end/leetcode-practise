/**
 * @name 硬币
 * @url https://leetcode-cn.com/problems/coin-lcci/
 * @date 2020-04-23 12:07
 * @tags 动态规划
 * description
 * ```
 * 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
 *
 *  示例1:
 *
 *
 *  输入: n = 5
 *  输出：2
 *  解释: 有两种方式可以凑成总金额:
 * 5=5
 * 5=1+1+1+1+1
 *
 *
 *  示例2:
 *
 *
 *  输入: n = 10
 *  输出：4
 *  解释: 有四种方式可以凑成总金额:
 * 10=10
 * 10=5+5
 * 10=5+1+1+1+1+1
 * 10=1+1+1+1+1+1+1+1+1+1
 *
 *
 *  说明：
 *
 * 注意:
 *
 * 你可以假设：
 *
 *
 * 0 <= n (总金额) <= 1000000
 *
 *
 * ```
 */

/**
 * @param {number} n
 * @return {number}
 * 一维数组，降低存储空间
 * 148ms 70%
 * 64.5MB  100%
 */
var waysToChange = function (n) {
  let coins = [1, 5, 10, 25]
  let mod = 1000000007
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1


  for (let i = 0; i < 4; i++) {
    let coin = coins[i]
    for (let j = coin; j <= n; j++) {
      dp[j] = (dp[j] + dp[j - coin])
    }
  }
  return dp[n] % 1000000007
};

/**
 * @param {number} n
 * @return {number}
 * 二维数组方法
 * 212ms  20%
 * 195.7MB 100%
 */

// var waysToChange = function (n) {
//   let coins = [1, 5, 10, 25]
//   let mod = 1000000007
//   let dp = new Array(coins.length + 1).fill(0).map(item => [1].concat(new Array(n).fill(0)))
//
//   for (let i = 1; i <= 4; i++) {
//     let coin = coins[i - 1]
//     for (let j = 1; j <= n; j++) {
//       if(j - coin < 0){
//         dp[i][j] = dp[i - 1][j]
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - coin]
//       }
//     }
//   }
//   return dp[4][n] % 1000000007
// };
