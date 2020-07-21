/**
 * @name 机器人的运动范围
 * @url https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 * @date 2020-04-08 09:57
 * @tags
 * description
 * ```
  * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 *
 *
 *
 * 示例 1：
 *
 * 输入：m = 2, n = 3, k = 1
 * 输出：3
 *
 *
 * 示例 1：
 *
 * 输入：m = 3, n = 1, k = 0
 * 输出：1
 *
 *
 * 提示：
 *
 *
 * 	1 <= n,m <= 100
 * 	0 <= k <= 20
 *
 *
 * ```
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 题解：这道题需要注意，虽然可以上下左右移动，但是因为我们是从左上角出发，所以会导致起左上部分已经全部遍历过了，
 * 所以只需要做右下的移动
 * 注意需要记录遍历过的节点，防止重复遍历，
 *
 * 72ms  82.22%
 * 37.4MB  100%
 */
var movingCount = function(m, n, k) {
  function get (val) {
    let res = 0
    while(val !== 0){
      res += val % 10
      val = parseInt(val / 10)
    }
    return res
  }

  if(!k) return 1
  let queue = []
  // 图的搜索遍历，都需要定义该数组作为移动的方向
  let dx = [0, 1]
  let dy = [1, 0]
  let ans = 1
  let vis = []
  for(let i = 0; i < m; i++){
    vis.push([])
  }

  queue.push([0, 0])
  vis[0][0] = 1
  while(queue.length) {
    let [x, y] = queue.shift()
    for(let i = 0; i < 2; i++){
      let tx = dx[i] + x
      let ty = dy[i] + y
      if(tx < 0 || tx >= m || ty < 0 || ty >= n || vis[tx][ty] || (get(tx) + get(ty)) > k) continue
      queue.push([tx, ty])
      vis[tx][ty] = 1
      ans ++
    }
  }
  return ans
};
