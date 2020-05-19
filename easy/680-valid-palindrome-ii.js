/**
 * @name 验证回文字符串 Ⅱ
 * @url https://leetcode-cn.com/problems/valid-palindrome-ii/
 * @date 2020-05-19 09:19
 * @tags 字符串
 * description
 * ```
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 *
 * 示例 1:
 *
 *
 * 输入: "aba"
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 *
 *
 * 注意:
 *
 *
 *  字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 *
 *
 * ```
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      let flag1 = true
      let flag2 = true
      for (let i = left, j = right - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
          flag1 = false
          break
        }
      }

      for (let i = left + 1, j = right ; i < j; i++, j--) {
        if (s[i] !== s[j]) {
          flag2 = false
          break
        }
      }
      return flag1 || flag2
    }

  }
  return true
};
console.log(validPalindrome('eeccccbebaeeabebccceea'))
