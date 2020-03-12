/**
 * @name 字符串的最大公因子
 * @url https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
 * @date 2020-03-12 17:06
 * @tags 字符串
 * description
 * ```
  * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 &ldquo;T 能除尽 S&rdquo;。
 * 
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 * 
 *  
 * 
 * 示例 1：
 * 
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 * 
 * 
 * 示例 2：
 * 
 * 输入：str1 = "ABABAB", str2 = "ABAB"
 * 输出："AB"
 * 
 * 
 * 示例 3：
 * 
 * 输入：str1 = "LEET", str2 = "CODE"
 * 输出：""
 * 
 * 
 *  
 * 
 * 提示：
 * 
 * 
 * 	1 <= str1.length <= 1000
 * 	1 <= str2.length <= 1000
 * 	str1[i] 和 str2[i] 为大写英文字母
 * 
 * 
 * ```
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 
 * 方法一：枚举法
 * 60ms  93.94%
 * 35.3MB  31.25%
 * 缺点：没有最大化利用长度公约数特性，实际无需做循环
 * 
 */
// var gcdOfStrings = function(str1, str2) {
//   let len1 = str1.length
//   let len2 = str2.length

//   for(let i = Math.min(len1, len2); i >= 1; i--) {
//     // 作为两个字符串得最大公约数，那么其长度一定要整除最大公约数的长度
//     if(len1 % i ===0 && len2 % i === 0){
//       let X = str1.substr(0, i)
//       if(check(X, str1) && check(X, str2)){
//         return X
//       }
//     }
//   }

//   return ''

//   function check(t, s){
//     var lenx = parseInt(s.length / t.length)
//     let ans = ''
//     for(let i = 1;i <= lenx; i++){
//       ans += t
//     }
//     return ans === s
//   }
  
// };
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 
 * 方法二：枚举法优化
 * 64ms  83.84%
 * 33.9MB  81.25%
 * 优化点：利用长度的最大公约数，直接确定最大公约数字符串的唯一值
 * 
 */

// var gcdOfStrings = function(str1, str2) {
//   let len1 = str1.length
//   let len2 = str2.length

//   let T = str1.substr(0, gcd(len1, len2))
//   if(check(T, str1) && check(T, str2)) return T
//   return ''

//   function check(t, s){
//     var lenx = parseInt(s.length / t.length)
//     let ans = ''
//     for(let i = 1;i <= lenx; i++){
//       ans += t
//     }
//     return ans === s
//   }
//   function gcd(a, b){
//     let temp
//     while (b !== 0) {
//       temp = a % b
//       a = b
//       b = temp
//     }
//     return a
//   }

// }
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * 
 * 方法三：数学方法
 * 60ms  93.94%
 * 33.6MB  93.75%
 * 优化点：利用数学知识和长度的最大公约数
 * 
 */
var gcdOfStrings = function(str1, str2) {
  if(str1 + str2 !== str2 + str1) return ''
  return str1.substr(0, gcd(str1.length, str2.length))

  function gcd(a, b){
    let temp
    while (b !== 0) {
      temp = a % b
      a = b
      b = temp
    }
    return a
  }
}