/**
 * @name 有效括号的嵌套深度
 * @url https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
 * @date 2020-04-01 09:22
 * @tags 贪心算法、二分查找
 * description
 * ```
 * 有效括号字符串 仅由 "(" 和 ")" 构成，并符合下述几个条件之一：
 *
 *
 * 	空字符串
 * 	连接，可以记作 AB（A 与 B 连接），其中 A 和 B 都是有效括号字符串
 * 	嵌套，可以记作 (A)，其中 A 是有效括号字符串
 *
 *
 * 类似地，我们可以定义任意有效括号字符串 s 的 嵌套深度 depth(S)：
 *
 *
 * 	s 为空时，depth("") = 0
 * 	s 为 A 与 B 连接时，depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是有效括号字符串
 * 	s 为嵌套情况，depth("(" + A + ")") = 1 + depth(A)，其中 A 是有效括号字符串
 *
 *
 * 例如：""，"()()"，和 "()(()())" 都是有效括号字符串，嵌套深度分别为 0，1，2，而 ")(" 和 "(()" 都不是有效括号字符串。
 *
 *
 *
 * 给你一个有效括号字符串 seq，将其分成两个不相交的子序列 A 和 B，且 A 和 B 满足有效括号字符串的定义（注意：A.length + B.length = seq.length）。
 *
 * 现在，你需要从中选出 任意 一组有效括号字符串 A 和 B，使 max(depth(A), depth(B)) 的可能取值最小。
 *
 * 返回长度为 seq.length 答案数组 answer ，选择 A 还是 B 的编码规则是：如果 seq[i] 是 A 的一部分，那么 answer[i] = 0。否则，answer[i] = 1。即便有多个满足要求的答案存在，你也只需返回 一个。
 *
 *
 *
 * 示例 1：
 *
 * 输入：seq = "(()())"
 * 输出：[0,1,1,1,1,0]
 *
 *
 * 示例 2：
 *
 * 输入：seq = "()(())()"
 * 输出：[0,0,0,1,1,0,1,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 	1 <= text.size <= 10000
 *
 *
 * ```
 */

/**
 * @param {string} seq
 * @return {number[]}
 * 题解：要使得拆分后的深度最低，那么可以将深度对半分，一人一半得到的深度即为最小
 * 将字符串转化为数组，并遍历每个项，如果遇到(的字符，则深度+1，如果遇到)的字符，深度-1，
 * 每个字符都返回深度%2的值，这样拆分后的深度最大也为原先一半
 *
 * 76ms  100%
 * 35.6ms  100%
 */
var maxDepthAfterSplit = function (seq) {
  let dep = 0
  return seq.split('').map((value) => {
    if (value === '(') {
      ++dep
      return dep % 2
    } else if (value === ')') {
      let ans = dep % 2
      dep--
      return ans
    }
  })
};
