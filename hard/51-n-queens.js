/**
 * @name N皇后
 * @url https://leetcode-cn.com/problems/n-queens/
 * @date 2020-03-23 10:18
 * @tags 回溯算法
 * description
 * ```
  * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png">
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
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
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 * ```
 */

/**
 * @param {number} n
 * @return {string[][]}
 * 82ms  45.95%
 * 37.2MB  87.34%
 */
var solveNQueens = function(n) {
  let result = []
  backtracking(n, 0, [])
  return result

  function backtracking(n, row, columns) {
    if(row === n){
      let strTemp = ''
      let res = []
      for(let i = 0; i < n; i++) strTemp += '.'
      columns.forEach((item, index) => {
        let temporary = strTemp.split('')
        temporary.splice(index, 1, 'Q')
        res[item] = temporary.join('')
      })
      result.push(res)
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