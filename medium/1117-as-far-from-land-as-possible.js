/**
 * @name 地图分析
 * @url https://leetcode-cn.com/problems/as-far-from-land-as-possible/
 * @date 2020-03-29 12:55
 * @tags 广度优先搜索、图
 * description
 * ```
  * 你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。
 *
 * 我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。
 *
 * 如果我们的地图上只有陆地或者海洋，请返回 -1。
 *
 *
 *
 * 示例 1：
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/17/1336_ex1.jpeg" style="height: 87px; width: 185px;">
 *
 * 输入：[[1,0,1],[0,0,0],[1,0,1]]
 * 输出：2
 * 解释：
 * 海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
 *
 *
 * 示例 2：
 *
 * <img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/17/1336_ex2.jpeg" style="height: 87px; width: 184px;">
 *
 * 输入：[[1,0,0],[0,0,0],[0,0,0]]
 * 输出：4
 * 解释：
 * 海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 	1 <= grid.length == grid[0].length <= 100
 * 	grid[i][j] 不是 0 就是 1
 *
 *
 * ```
 */

/**
 * @param {number[][]} grid
 * @return {number}
 * 题解：求最远距离的海洋，实际就是请距离陆地距离最大的海洋，对每个海洋节点进行广度优先遍历
 * 预备上下左右数组，并且新建状态记录器，继续是否已经读取过该点，然后将当前节点推入队列中，
 * 并将当前节点置为已读，之后遍历上下左右四个节点，如果该节点未读，则将该节点加入队列中，并将距离+1，
 * 节点标记已读，如果节点刚好是陆地，则返回
 */
var maxDistance = function (grid) {
  let n = grid.length
  let m = grid[0].length

  let ans = -1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!grid[i][j]) {
        ans = Math.max(ans, findNearestLand(i, j, n))
      }
    }
  }

  return ans

  function findNearestLand(x, y, n) {
    let dx = [-1, 0, 1, 0]
    let dy = [0, 1, 0, -1]

    let queue = []
    let vis = []
    for (let i = 0; i < n; i++) {
      vis.push([])
    }
    queue.push({ x: x, y: y, step: 0 })
    vis[x][y] = 1

    while (queue.length > 0) {
      let f = queue.shift()
      for (let i = 0; i < 4; i++) {
        let nx = f.x + dx[i]
        let ny = f.y + dy[i]

        if (!(nx >= 0 && nx < n && ny >= 0 && ny < m)) continue
        if (!vis[nx][ny]) {
          queue.push(
            {
              x: nx,
              y: ny,
              step: f.step + 1
            })
          vis[nx][ny] = 1
          if(grid[nx][ny]) return f.step + 1
        }
      }
    }

    return -1
  }
};
maxDistance([[1,0,0],[0,0,0],[0,0,0]])
