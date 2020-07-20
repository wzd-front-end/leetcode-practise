/**
 * @name 最大正方形
 * @url https://leetcode-cn.com/problems/maximal-square/
 * @date 2020-05-09 00:14
 * @tags 动态规划
 * description
 * ```
  * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 *
 * 示例:
 *
 * 输入:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * 输出: 4
 *
 * ```
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 * 题解：该题主要是状态转移方程式的确定，首先是对于每个状态，是由其左，上，以及左上角的状态的最小值来确定的，这三个中的最小值+1即为
 * 最新状态的值，并且每一步求解后，需要和之前保存的最大值进行比较更新最大值
 */
var maximalSquare = function(matrix) {
  let maxSize = 0
  if(matrix === null || matrix.length === 0 || matrix[0].length === 0){
    return maxSize
  }

  let rows = matrix.length
  let colums = matrix[0].length
  let dp = new Array(rows).fill(0).map((item) => new Array(colums).fill(0))


  for(let i =0; i < rows; i++){
    for(let j = 0; j < colums; j++){
      if(matrix[i][j] == '1'){
        if(i === 0 || j === 0){
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSize = Math.max(maxSize, dp[i][j])
      }
    }
  }

  return maxSize * maxSize
};
