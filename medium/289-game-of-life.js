/**
 * @name 生命游戏
 * @url https://leetcode-cn.com/problems/game-of-life/
 * @date 2020-04-02 09:37
 * @tags 数组
 * description
 * ```
 * 根据 <a href="https://baike.baidu.com/item/%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F/2926434?fr=aladdin" target="_blank">百度百科 ，生命游戏，简称为生命，是英国数学家约翰&middot;何顿&middot;康威在 1970 年发明的细胞自动机。
 * 
 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
 * 
 * 
 * 	如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
 * 	如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
 * 	如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
 * 	如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
 * 
 * 
 * 根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
 * 
 *  
 * 
 * 示例：
 * 
 * 输入： 
 * [
 *   [0,1,0],
 *   [0,0,1],
 *   [1,1,1],
 *   [0,0,0]
 * ]
 * 输出：
 * [
 *   [0,0,0],
 *   [1,0,1],
 *   [0,1,1],
 *   [0,1,0]
 * ]
 * 
 *  
 * 
 * 进阶：
 * 
 * 
 * 	你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
 * 	本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
 * 
 * 
 * ```
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * -1 代表活的变成死的
 * 2 代表死的变成活的
 * 
 * 60ms  90.48%
 * 35MB  42.10%
 */
var gameOfLife = function (board) {
  let neighbors = [0, -1, 1]
  let rows = board.length
  let cols = board[0].length

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      let liveNeighbors = 0
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
            let row = r + neighbors[i]
            let col = c + neighbors[j]

            if (row >= 0 && row < rows && col >= 0 && col < cols && (Math.abs(board[row][col]) === 1)) {
              liveNeighbors++
            }
          }
        }
      }

      if ((liveNeighbors < 2 || liveNeighbors > 3) && board[r][c] === 1) {
        board[r][c] = -1
      }
      if (liveNeighbors === 3 && board[r][c] === 0) {
        board[r][c] = 2
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] > 0) {
        board[r][c] = 1
      } else {
        board[r][c] = 0
      }
    }
  }

  return board
};