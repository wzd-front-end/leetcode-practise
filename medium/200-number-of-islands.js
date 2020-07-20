/**
 * @name 岛屿数量
 * @url https://leetcode-cn.com/problems/number-of-islands/
 * @date 2020-04-22 11:08
 * @tags 深度优先搜索、广度优先搜索、并查集
 * description
 * ```
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 * 示例 1:
 *
 * 输入:
 * 11110
 * 11010
 * 11000
 * 00000
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
 *
 *
 * ```
 */

/**
 * @param {character[][]} grid
 * @return {number}
 * 题解：实际上，主要是对值为1的点进行遍历，对其上下左右进行遍历，利用队列的方式，
 * 将当前节点推入队列中，然后遍历弹出队列中的节点，对弹出节点的上下左右进行遍历，如果存在1的情况，将其变为0，
 *
 */
var numIslands = function (grid) {
  let n = grid.length
  if (n === 0) return 0
  let m = grid[0].length
  let num_islands = 0

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === '1') {
        grid[r][c] = '0'
        num_islands++
        let queue = []
        queue.push([r, c])
        const dx = [0, 1, 0, -1]
        const dy = [1, 0, -1, 0]
        while (queue.length > 0) {
          let [x, y] = queue.shift()
          for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === '1') {
              queue.push([nx, ny])
              grid[nx][ny] = '0'
            }
          }
        }
      }
    }
  }

  return num_islands
};
