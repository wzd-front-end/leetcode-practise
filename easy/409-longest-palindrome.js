/**
 * @name 最长回文串
 * @url https://leetcode-cn.com/problems/longest-palindrome/
 * @date 2020-03-19 23:01
 * @tags 哈希表
 * description
 * ```
  * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 *
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 *
 * 注意:<br />
 * 假设字符串的长度不会超过 1010。
 *
 * 示例 1:
 *
 *
 * 输入:
 * "abccccdd"
 *
 * 输出:
 * 7
 *
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 * 题解：采用哈希表记录，如果哈希中存在，则长度加2并把其置为0，如果不存在，则增加记录，最后判断是否长度和原字符串长度相等
 */
var longestPalindrome = function(s) {
  let hash = {}
  let n = 0
  let len = s.length
  for(let i = 0;i < len; i++){
    if(!hash[s[i]]){
      hash[s[i]] = 1
    } else {
      hash[s[i]] = 0
      n+=2
    }
  }
  if(n < len){
    n += 1
  }
  return n
};
