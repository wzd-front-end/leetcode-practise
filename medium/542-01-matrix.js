/**
 * @name 01 矩阵
 * @url https://leetcode-cn.com/problems/01-matrix/
 * @date 2020-04-15 09:37
 * @tags 深度优先搜索、广度优先搜索
 * description
 * ```
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 *
 * 两个相邻元素间的距离为 1 。
 *
 * 示例 1: <br />
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 示例 2: <br />
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 1 1
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 2 1
 *
 *
 * 注意:
 *
 *
 *  给定矩阵的元素个数不超过 10000。
 *  给定矩阵中至少有一个元素是 0。
 *  矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 *
 *
 * ```
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let n = matrix.length
  let m = matrix[0].length
  let seen = new Array(n).fill(0).map(item => [])
  let dist = new Array(n).fill(0).map(item => new Array(m).fill(0))

  let queue = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j])
        seen[i][j] = 1
      }
    }
  }
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]

  while (queue.length > 0) {
    let [x, y] = queue.shift()
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]

      if(nx >=0 && nx < n && ny >= 0 && ny < m && !seen[nx][ny]){
        dist[nx][ny] = dist[x][y] + 1
        queue.push([nx, ny])
        seen[nx][ny] = 1
      }
    }
  }
  return dist
};
