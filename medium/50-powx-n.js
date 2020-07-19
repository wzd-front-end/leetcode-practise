/**
 * @name Pow(x, n)
 * @url https://leetcode-cn.com/problems/powx-n/
 * @date 2020-05-11 09:17
 * @tags 数学、二分查找
 * description
 * ```
 * 实现 <a href="https://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 *
 * 示例 2:
 *
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 *
 * 示例 3:
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2-2 = 1/22 = 1/4 = 0.25
 *
 * 说明:
 *
 *
 *  -100.0 < x < 100.0
 *  n 是 32 位有符号整数，其数值范围是 [-231, 231 - 1] 。
 *
 *
 * ```
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 题解：简单实现直接遍历即可，但是使用二分法可以实现性能优化
 * 判断n的大小是否大于0，然后进行递归，根据N是否等于0，等于0就返回1
 * 否则进行递归计算一半，将次数取半，计算一般的大小，然后根据取半后是否有余数判断
 * 结果是否需要乘上x
 * 递归实现
 */
var myPow = function (x, n) {
  function quickMul(x, N) {
    if (N === 0) return 1.0
    let y = quickMul(x, Math.floor(N / 2))
    return N % 2 === 0 ? y * y : y * y * x
  }

  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
};

var myPow = function (x, n) {
  function quickMul(x, N) {
    let ans = 1.0
    let x_contribute = x

    while (N > 0) {
      if (N % 2 === 1) {
        ans *= x_contribute
      }
      x_contribute *= x_contribute
      N = parseInt(N / 2)
    }
    return ans
  }

  return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
}
