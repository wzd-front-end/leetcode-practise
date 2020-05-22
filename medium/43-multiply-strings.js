/**
 * @name 字符串相乘
 * @url https://leetcode-cn.com/problems/multiply-strings/
 * @date 2020-05-22 11:12
 * @tags 数学、字符串
 * description
 * ```
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 *  num1 和 num2 的长度小于110。
 *  num1 和 num2 只包含数字 0-9。
 *  num1 和 num2 均不以零开头，除非是数字 0 本身。
 *  不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
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
    ans = (sum % 10) + '' + ans
    n1--
    n2--
  }
  return ans
};
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let res = '0'
  let len2 = num2.length
  for (let i = len2 - 1; i >= 0; i--) {
    let carry = 0
    let temp = ''
    for (let j = 0; j < len2 - i - 1; j++) {
      temp += '0'
    }
    let n2 = Number(num2[i])
    for (let j = num1.length - 1; j >= 0 || carry !== 0; j--) {
      let n1 = j < 0 ? 0 : Number(num1[j])
      let product = (n1 * n2 + carry)
      temp = product % 10 + '' + temp
      carry = parseInt(product / 10)
    }
    res = addStrings(res, temp)
  }
  return res
};
/**
 * 乘数 num1 位数为 MM，被乘数 num2 位数为 NN， num1 x num2 结果 res 最大总位数为 M+N
 num1[i] x num2[j] 的结果为 tmp(位数为两位，"0x","xy"的形式)，其第一位位于 res[i+j]，第二位位于 res[i+j+1]。
 * */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let n1 = num1.length
  let n2 = num2.length
  let res = new Array(n1 + n2).fill(0)
  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      let sum =res[i + j + 1] + Number(num1[i]) * Number(num1[j])
      res[i + j + 1] = sum % 10
      res[i + j] += parseInt(sum / 10)
    }
  }
  return res[0] === 0 ? res.join('').substr(1): res.join('')
}

