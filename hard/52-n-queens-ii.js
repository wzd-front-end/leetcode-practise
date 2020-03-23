/**
 * @name N皇后 II
 * @url https://leetcode-cn.com/problems/n-queens-ii/
 * @date 2020-03-23 09:18
 * @tags 回溯算法
 * description
 * ```
  * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击(注：毕竟不会相互攻击，即每个点的横竖斜线都无存在其他节点)。
 * 
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png" style="height: 276px; width: 258px;">
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 *  [".Q..",  // 解法 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 * 
 *  ["..Q.",  // 解法 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 * 
 * 
 * ```
 */

/**
 * @param {number} n
 * @return {number}
 * 
 * 68ms  76.84%
 * 34.7MB  75.76%
 */
var totalNQueens = function(n) {
  let count = 0
  backtracking(n, 0, [])
  return count

  function backtracking(n, row, columns) {
    if(row === n){
      count++
      return
    }

    for(let col = 0; col < n; col++){
      columns[row] = col
      if(check(row, col, columns)){
        backtracking(n, row + 1, columns)
      }
      columns[row] = -1
    }
  }

  function check(row, col, columns){
    for(let r = 0; r < row; r++){
      if(columns[r] === col || row - r === Math.abs(columns[r] - col)){
        return false
      }
    }
    return true
  }

};