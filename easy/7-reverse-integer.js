/**
 * @name 整数反转
 * @url https://leetcode-cn.com/problems/reverse-integer/
 * @date 2020-03-11 11:31
 * @tags 数学
 * description
 * ```
  * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 *  示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [-231,  231 - 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 * ```
 */

/**
 * @param {number} x
 * @return {number}
 * 题解：主要采用取余法的方式，将余数乘以10变为高位
 */
var reverse = function(x) {
  let rev = 0
  while(x !== 0){
    let pop = x % 10
    x = (x - pop) / 10
    if(rev > parseInt(Math.pow(2, 31)/10) || (rev === parseInt(Math.pow(2,31)/10) && pop > 7)) return 0
    if(rev < -parseInt(Math.pow(2, 31)/10) || (rev === -(parseInt(Math.pow(2, 31)/10)) && pop < -8)) return 0
    rev = rev * 10 + pop
  }
  return rev
};
console.log(reverse(-123))