/**
 * @name 柱状图中最大的矩形
 * @url https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @date 2020-05-30 10:28
 * @tags 栈、数组
 * description
 * ```
  * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png">
 *
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 *
 *
 *
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png">
 *
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 *
 *
 *
 * 示例:
 *
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 *
 * ```
 */

/**
 * @param {number[]} heights
 * @return {number}
 * 题解：使用left和right数组存储柱形图左右两边的的第一根小于当前节点高度的柱子，两个柱子之间的所有柱子都不小于当前柱子的高度
 * 利用栈的思想，当柱子的高度小于栈顶的高度的时候，栈弹出节点，条件结束时，记录当前节点对应的左边起始节点，如果栈长度为0，说明栈空，
 * 意味着可以直接到最左边
 *
 */

var largestRectangleArea = function(heights) {
  let n = heights.length
  let left = []
  let right = []

  let stack = []
  for(let i = 0; i < n; i++){
    while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]){
      stack.pop()
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(i)
  }
  stack = []
  for(let i = n - 1; i >= 0;i--){
    while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]){
      stack.pop()
    }
    right[i] = stack.length === 0 ? n : stack[stack.length - 1]
    stack.push(i)
  }

  let ans = 0
  for(let i = 0; i < n; ++i){
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i])
  }
  return ans
};
