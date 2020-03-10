/**
 * @name 最长回文子串
 * @url https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @date 2020-03-10 23:35
 * @tags 字符串、动态规划
 * description
 * ```
  * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 * ```
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s === null || s.length < 1) return ''
  let start = 0
  let end = 0
  for(let i = 0, length = s.length ; i < length; i++){
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    console.log(len)
    // if(len > end -start) {

    //   start = i - (len - 1)/2
    //   end = i + (len)/2
    // }
  }
  return s.substring(start, end + 1)
};
function expandAroundCenter(s, left, right) {
  let L = left
  let R = right
  while(L >= 0 && R < s.length && s.charAt(left) === s.charAt(right)) {
    L--
    R++
  }
  return R - L - 1
}
console.log(longestPalindrome('babad'))