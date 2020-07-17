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
 * 题解：一种情况就是不需要进行删除，这种情况下，从两头开始遍历，值一直相等，这个时候，左边的一直下移，右边的一直上移
 * 如果出现不相等的情况，则需要对其进行删除，只可以删除一位，则就存在是删除左边的一位或者右边的一位
 * 这个时候，在内部进行循环，通过重新定义左右的开始位置，遍历判断是否相等，不相等即把状态为置为false并break
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
