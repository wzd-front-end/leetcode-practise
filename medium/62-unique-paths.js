/**
 * @name 不同路径
 * @url https://leetcode-cn.com/problems/unique-paths/
 * @date 2020-03-14 16:07
 * @tags 数组、动态规划
 * description
 * ```
  * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为&ldquo;Start&rdquo; ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为&ldquo;Finish&rdquo;）。
 * 
 * 问总共有多少条不同的路径？
 * 
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png">
 * 
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 * 
 *  
 * 
 * 示例 1:
 * 
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 * 
 * 
 * 示例 2:
 * 
 * 输入: m = 7, n = 3
 * 输出: 28
 * 
 *  
 * 
 * 提示：
 * 
 * 
 * 	1 <= m, n <= 100
 * 	题目数据保证答案小于等于 2 * 10 ^ 9
 * 
 * 
 * ```
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 76ms  19.28%
 * 35.1MB  24.15%
 * 总结：类似打家劫舍，都是线性动态规划，只需要划分好状态，将状态表示出来，之后找出状态转移得方程式，确定好边界情况，即可推算出最优结果
 */
// var uniquePaths = function(m, n) {
//   let i = 0
//   let dp = []


//   for(i = 0; i < m; i++){
//     dp.push([])
//     for(let j = 0; j < n; j++){
//       if(i === 0 || j === 0){
//         dp[i][j] = 1
//       }else{
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//       }
//     }
//   }
//   return dp[m - 1][n - 1]
// };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 空间复杂度优化：推算过程中，实际上是只需要最后得两个值，即dp[i][j-1]和dp[i-1][j]，所以可以用一个一维数组，取相邻两位存值，即当前值上边值和左边值
 * 
 * 76ms  19.28%
 * 33.9MB  67.8%
 * 
 */
var uniquePaths = function(m, n) {
  let i = 0
  let dp = []
  for(i = 0; i < n; i++) dp[i] = 1

  for(i = 1; i < m; i++){
    for(let j = 1; j < n; j++){
      dp[j] += dp[j -1]
    }
  }
  return dp[n -1]
};