/**
 * @name 买卖股票的最佳时机 II
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @date 2020-07-16 11:34
 * @tags 贪心算法、数组
 * description
 * ```
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 *      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 *
 *
 * 示例 2:
 *
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 *      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
 *      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 *
 *
 * 示例 3:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 *
 * 提示：
 *
 *
 *  1 <= prices.length <= 3 * 10 ^ 4
 *  0 <= prices[i] <= 10 ^ 4
 *
 *
 * ```
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let maxprofit = 0
//   let minprice = Number.POSITIVE_INFINITY
//
//   for (let i = 0; i < prices.length; i++) {
//     if (minprice > prices[i]) {
//       minprice = prices[i]
//     } else if (minprice <= prices[i] && (prices[i] > prices[i + 1] || prices[i + 1] === undefined)) {
//       maxprofit += (prices[i] - minprice)
//       minprice = Number.POSITIVE_INFINITY
//     }
//   }
//   return maxprofit
// };
var maxProfit = function (prices) {
  let n = prices.length
  if(n === 0) return 0
  let dp = new Array(n).fill(0).map(function () {
    return []
  })
  for (let i = 0; i < n; i++) {
    if(i === 0){
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]
}
