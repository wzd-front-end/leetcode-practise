/**
 * @name 括号生成
 * @url https://leetcode-cn.com/problems/generate-parentheses/
 * @date 2020-04-09 09:30
 * @tags 字符串、回溯算法
 * description
 * ```
  * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 *  
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 *        "((()))",
 *        "(()())",
 *        "(())()",
 *        "()(())",
 *        "()()()"
 *      ]
 * 
 * 
 * ```
 */
/**
 * @param {number} n
 * @return {string[]}
 * 64ms  80.02%
 * 35.9MB  23.68%
 */
 
var generateParenthesis = function(n) {
  let ans = []
  backtracking(ans, '', 0, 0, n)
  return ans

  function backtracking(ans, cur, open, close, max){
    if(cur.length === max * 2){
      ans.push(cur)
      return
    }

    if(open < max){
      cur += '('
      backtracking(ans, cur, open + 1, close, max)
      cur = cur.substring(0,cur.length - 1)
    }

    if(close < open){
      cur += ')'
      backtracking(ans, cur, open, close + 1, max)
      cur = cur.substring(0,cur.length - 1)
    }
  }
}

/**
 * @param {number} n
 * @return {string[]}
 * 92ms  17.11%
 * 37.3MB  18.42%
 */
// var generateParenthesis = function(n) {
//   let res = []
//   backtracking(n, '')
//   return res

//   function backtracking(n, s) {
//     if(s.length === 2 * n){
//       if(check(s)){
//         res.push(s)
//       }
//       return
//     }

//     let template = ['(', ')']
//     for(let i = 0; i < template.length; i++){
//       s += template[i]
//       backtracking(n, s)
//       s = s.substring(0, (s.length - 1))
//     }

//   }

//   function check(str){
//     let stack = []
//     for(let i = 0; i < str.length; i++){
//       if(str[i] === '('){
//         stack.push('(')
//       } else {
//         if(stack.pop() !== '(') return false
//       }
//     }
//     return stack.length === 0
//   }
// };