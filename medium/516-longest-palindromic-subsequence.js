/**
 * @name 最长回文子序列
 * @url https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * @date 2020-03-15 00:06
 * @tags 动态规划
 * description
 * ```
  * 给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
 *
 * 示例 1:<br />
 * 输入:
 *
 *
 * "bbbab"
 *
 *
 * 输出:
 *
 *
 * 4
 *
 *
 * 一个可能的最长回文子序列为 "bbbb"。
 *
 * 示例 2:<br />
 * 输入:
 *
 *
 * "cbbd"
 *
 *
 * 输出:
 *
 *
 * 2
 *
 *
 * 一个可能的最长回文子序列为 "bb"。
 *
 * ```
 */

/**
 * @param {string} s
 * @return {number}
 * 题解：首先初始化建立二维数组，用于存储从开始索引到结束索引之间的回文序列长度，
 * dp[k][k]的值初始化为1，然后采用抽取片段检查法，从长度为2开始检查，遍历一遍，如果s[i] === s[j],
 * 则长度等于2+dp[i+1][j-1]，注意长度为2时不需要加前面状态，不等于则取左移一位或者右移一位的最大值
 * 164ms  65.83%
 * 82.1MB  57.89%
 */
var longestPalindromeSubseq = function(s) {
  let n = s.length
  let dp = new Array(n)
  let len = 0
  for(len = 0; len < n; len++) {
    let temp = new Array(n)
    temp[len] = 1
    dp[len] = temp
  }

  // len为抽取片段检查回文
  for(len = 2; len <= n; len++) {
    for(let i = 0; i < n -len + 1; i++){
      let j = i + len - 1

      if(s.charAt(i) === s.charAt(j)){
        dp[i][j] = 2 + (len === 2 ? 0 : (dp[i + 1][j - 1]))
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][n - 1]
};
console.log(longestPalindromeSubseq('bbbab'))
