/**
 * @name 解码方法
 * @url https://leetcode-cn.com/problems/decode-ways/
 * @date 2020-03-21 14:17
 * @tags 字符串、动态规划
 * description
 * ```
  * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * 
 * 示例 1:
 * 
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 * 
 * 
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 * 题解：主要是判断前一个值和当前值是否可以组合，如果可以组合，那么其数量和为result[i]和result[i - 1]，否则
 * result[i+1]等于result[i]
 * 64ms  89.32%
 * 34MB  84.81%   
 * 
 */
var numDecodings = function(s) {
  let n = s.length
  if(s[0] === '0') return 0
  let result = [1, 1]
  for(let i = 1; i < n; i++){
    if(s[i] > '0'){
      if(s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6')){
        result[i + 1] = result[i] + result[i - 1]
      } else {
        result[i + 1] = result[i]
      }
    } else {
      if(s[i - 1] > '2' || s[i - 1] === '0') {
        return 0
      } else {
        result[i + 1] = result [i - 1]
      } 
    }
  }
  return result[n]
};
console.log(numDecodings('226'))