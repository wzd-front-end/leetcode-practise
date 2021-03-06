/**
 * @name 课程表 II
 * @url https://leetcode-cn.com/problems/course-schedule-ii/
 * @date 2020-05-17 11:21
 * @tags 深度优先搜索、广度优先搜索、图、拓扑排序
 * description
 * ```
  * 现在你总共有 n 门课需要选，记为 0 到 n-1。
 *
 * 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]
 *
 * 给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。
 *
 * 可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。
 *
 * 示例 1:
 *
 * 输入: 2, [[1,0]]
 * 输出: [0,1]
 * 解释: 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
 *
 * 示例 2:
 *
 * 输入: 4, [[1,0],[2,0],[3,1],[3,2]]
 * 输出: [0,1,2,3] or [0,2,1,3]
 * 解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
 *      因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
 *
 *
 * 说明:
 *
 *
 * 	输入的先决条件是由边缘列表表示的图形，而不是邻接矩阵。详情请参见<a href="http://blog.csdn.net/woaidapaopao/article/details/51732947" target="_blank">图的表示法。
 * 	你可以假定输入的先决条件中没有重复的边。
 *
 *
 * 提示:
 *
 *
 * 	这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
 * 	<a href="https://www.coursera.org/specializations/algorithms" target="_blank">通过 DFS 进行拓扑排序 - 一个关于Coursera的精彩视频教程（21分钟），介绍拓扑排序的基本概念。
 *
 * 	拓扑排序也可以通过 <a href="https://baike.baidu.com/item/%E5%AE%BD%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2/5224802?fr=aladdin&fromid=2148012&fromtitle=%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2" target="_blank">BFS 完成。
 *
 *
 *
 * ```
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * 题解：这道题需要注意，存在环的情况，说明不存在拓扑排序
 * 将搜索中的状态分为未搜索，搜索中，已搜索
 * 首先遍历生成状态记录器，记录每个节点的状态，然后将每个有向图记录起来，使用哈希表的方式，记录其相邻节点
 * 之后按照节点的数量遍历，对每个节点进行深度优先遍历，将在遍历中的节点设置为visited[v] = 1，然后遍历其相邻子节点
 * 如果遇到有节点的状态为1的，说明存在环，那么就直接返回，当该节点所有的相邻节点都遍历完毕且不存在环的时候，将该节点的状态置为2
 * 并将该节点推入栈中
 *
 */
var findOrder = function(numCourses, prerequisites) {
  let stack = []
  let visited = []
  let adj = {}
  let invalid = false

  for(let i = 0; i <= numCourses; i++){
    visited[i] = 0
    adj[i]= []
  }
  for(let edge of prerequisites){
    let [key, value] = edge
    adj[key].push(value)
  }

  for(let i = 0; i < numCourses; i++){
    if(visited[i] === 0){
      topSortHelper(i, visited, stack)
    }
  }

  function topSortHelper(v, visited, stack){
    visited[v] = 1
    adj[v].forEach(w => {
      if(visited[w] === 0){
        topSortHelper(w, visited, stack)
        if(invalid){
          return
        }
      } else if(visited[w] === 1){
        invalid = true
        return
      }
    })
    visited[v] = 2
    stack.push(v)
  }

  return stack.length === numCourses && !invalid ? stack : []

};
