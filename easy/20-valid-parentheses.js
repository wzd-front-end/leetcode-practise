/**
 * @name 有效的括号
 * @url https://leetcode-cn.com/problems/valid-parentheses/
 * @date 2020-04-07 14:13
 * @tags 栈、字符串
 * description
 * ```
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 	左括号必须用相同类型的右括号闭合。
 * 	左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 * ```
 */

/**
 * @param {string} s
 * @return {boolean}
 * 60ms  89.90%
 * 33.8MB  95.29%
 */
var isValid = function (s) {
  let ans = []
  let strList = s.split('')
  let n = strList.length
  let map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  if (n % 2 !== 0) return false
  for (let i = 0; i < n; i++) {
    if (strList[i] === '(' || strList[i] === '{' || strList[i] === '[') {
      ans.push(strList[i])
    } else {
      let stackTop
      stackTop = ans.pop()
      if(stackTop !== map[strList[i]]){
        return false
      }
    }
  }

  return ans.length === 0 
};