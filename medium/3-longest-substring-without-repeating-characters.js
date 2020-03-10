/**
 * @name 无重复字符的最长子串
 * @url https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @date 2020-03-10 11:08
 * @tags 哈希表、双指针、字符串、
 * description
 * ```
  * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 *      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = {}
  let max = 0
  for(let i = 0, j = 0, len = s.length; j < len; j++){
    if(set[s[j]] !== undefined){
      i = Math.max(i, set[s[j]] + 1)
    }
    set[s[j]] = j
    if(max < (j - i + 1)) {
      max = j - i + 1
    }
  }
  return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))