/**
 * @name 合并区间
 * @url https://leetcode-cn.com/problems/merge-intervals/
 * @date 2020-03-12 23:56
 * @tags 排序、数组
 * description
 * ```
  * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * ```
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 76ms  96.74%
 * 37MB  77.41%
 */
var merge = function(intervals) {
  if(intervals.length <= 1){
    return intervals
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })
  var previous = null, result = []
  intervals.forEach(function (current) {
    if (previous === null) {
      previous = current
    } else if (current[0] > previous[1]) {
      result.push(previous)
      previous = current
    } else if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1])
    }
  })
  result.push(previous)
  return result
};