/**
 * @name 回文数
 * @url https://leetcode-cn.com/problems/palindrome-number/
 * @date 2020-03-12 09:28
 * @tags 数学
 * description
 * ```
  * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 * ```
 */

/**
 * @param {number} x
 * @return {boolean}
 * 
 * 204ms  91.77%
 * 44.9MB  91.27%
 * 
 * 字符串处理较为简单，只需判断除符号位后，判断奇偶长度，取一半做检查即可
 */
var isPalindrome = function(x) {
  if(x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let revertedNumber = 0
  while(x > revertedNumber){
    revertedNumber = revertedNumber * 10 + x % 10
    x = parseInt(x / 10)
  }
  return x === revertedNumber || x === parseInt(revertedNumber / 10)
};