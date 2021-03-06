/**
 * @name x 的平方根
 * @url https://leetcode-cn.com/problems/sqrtx/
 * @date 2020-05-09 09:42
 * @tags 数学、二分查找
 * description
 * ```
 * 实现 int sqrt(int x) 函数。
 *
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 示例 1:
 *
 * 输入: 4
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 *      由于返回类型是整数，小数部分将被舍去。
 *
 *
 * ```
 */

/**
 * @param {number} x
 * @return {number}
 * 题解：由于题目要求我们求解整数部分，所以可以用折半查找的方式进行判断
 */
// var mySqrt = function (x) {
//   if (x === 0) return 0
//   var ans = parseInt(Math.exp(0.5 * Math.log(x)))
//   return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans
// };
var mySqrt = function (x) {
  let l = 0
  let r = x
  let ans = -1
  while (l <= r) {
    let mid = parseInt(l + (r - l) / 2)
    if (mid * mid <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return ans
}
