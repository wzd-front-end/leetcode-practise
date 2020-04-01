/**
 * @name 正则表达式匹配
 * @url https://leetcode-cn.com/problems/regular-expression-matching/
 * @date 2020-04-01 18:25
 * @tags 字符串、动态规划、回溯算法
 * description
 * ```
  * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 
 * 
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 * 
 * 说明:
 * 
 * 
 * 	s 可能为空，且只包含从 a-z 的小写字母。
 * 	p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 * ```
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * 回溯（个人感觉叫递归更贴合，官方说是回溯解法）
 * 176ms  14.49%
 * 37.3MB  27.1%
 */
var isMatch = function(s, p) {
  if(p.length === 0) return s.length === 0
  let first_match = (s.length !== 0) && (p.charAt(0) === s.charAt(0) || p.charAt(0) === '.')

  if(p.length >= 2 && p.charAt(1) === '*'){
    return (isMatch(s, p.substring(2))) || (first_match && isMatch(s.substring(1), p))
  } else {
    return first_match && isMatch(s.substring(1), p.substring(1))
  }
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * 动态规划
 * 176ms  14.49%
 * 37.3MB  27.1%
 */
// var isMatch = function(s, p) {
  
// };