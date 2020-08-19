/**
 * @name 回文子串
 * @url https://leetcode-cn.com/problems/palindromic-substrings/
 * @date 2020-08-19 8:51
 * @tags 字符串、动态规划
 * description
 * ```
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 *
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 *
 *
 *
 * 示例 1：
 *
 * 输入："abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 *
 * 示例 2：
 *
 * 输入："aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 *
 * 提示：
 *
 *
 *  输入的字符串长度不会超过 1000 。
 *
 *
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 */
// 中心扩展法
var countSubstrings = function (s) {
  var n = s.length
  let ans = 0
  for (let i = 0; i < 2 * n - 1; i++) {
    let l = parseInt(i / 2)
    let r = parseInt(i / 2) + i % 2
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) {
      --l;
      ++r;
      ans++
    }
  }
  return ans
};
