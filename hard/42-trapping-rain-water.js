/**
 * @name 接雨水
 * @url
 * @date 2020-04-04 23:35
 * @tags 栈、数组、双指针
 * description
 * ```
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" style="height: 161px; width: 412px;">
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
 *
 * 示例:
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 * ```
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left_max = 0
  let right_max = 0
  let ans = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] > left_max ? left_max = height[left] : ans += (left_max - height[left])
      left++
    } else {
      height[right] > right_max ? right_max = height[right] : ans += (right_max - height[right])
      right--
    }
  }
  // while (left < right) {
  //   if (height[left] < height[right]) {
  //     height[left] >= left_max ? (left_max = height[left]) : (ans += (left_max - height[left]))
  //     left++
  //   } else {
  //     height[right] >= right_max ? (right_max = height[right]) : (ans += (right_max - height[right]))
  //     right--
  //   }
  // }

  return ans
};
