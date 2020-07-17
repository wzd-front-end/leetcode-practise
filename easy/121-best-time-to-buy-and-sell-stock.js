/**
 * @name 买卖股票的最佳时机
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @date 2020-03-09 18:14
 * @tags 数组、动态规划
 * description
 * ```
  * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 *
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 *
 * 注意你不能在买入股票前卖出股票。
 *
 * 示例 1:
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 5
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 *      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 *
 *
 * 示例 2:
 *
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 * ```
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 题解：注意点，首先时必须是先买入再卖出，其二是卖出的价格要高于买入的价格，这样遍历一遍，找到前面的最小值，与当前值比较，如果当前值小于前面的最小值，则更新最小值
 * 否则判断该值减去前面的最小值是否要比最大利润大，比他大则更新最大利润值
 */
// var maxProfit = function(prices) {
//   let maxprofit = 0
//   let minprice = Number.POSITIVE_INFINITY
//
//   for(var i = 0; i < prices.length; i++){
//     if(prices[i] < minprice) {
//       minprice = prices[i]
//     }else if (prices[i] - minprice > maxprofit){
//       maxprofit = prices[i] - minprice
//     }
//   }
//   return maxprofit
// };

var maxProfit = function(prices) {
  let n = prices.length
  let dp = new Array(n).fill(0).map(function () {
    return []
  })

  for(let i = 0; i < n; i++){
    if(i - 1 === -1){
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[n - 1][0]
}
