/**
 * @name 字符串相加
 * @url https://leetcode-cn.com/problems/add-strings/
 * @date 2020-05-22 11:22
 * @tags 字符串
 * description
 * ```
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *
 * 注意：
 *
 *
 *  num1 和num2 的长度都小于 5100.
 *  num1 和num2 都只包含数字 0-9.
 *  num1 和num2 都不包含任何前导零。
 *  你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 * ```
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.length - 1
  let n2 = num2.length - 1
  let carry = 0
  let ans = ''
  while (n1 >= 0 || n2 >= 0 || carry === 1) {
    let p = num1[n1] === undefined ? 0 : Number(num1[n1])
    let q = num2[n2] === undefined ? 0 : Number(num2[n2])

    let sum = p + q + carry
    sum >= 10 ? (carry = 1) : (carry = 0)
    ans = (sum % 10)+ '' + ans
    n1--
    n2--
  }
  return  ans
};
