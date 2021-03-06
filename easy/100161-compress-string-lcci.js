/**
 * @name 字符串压缩
 * @url https://leetcode-cn.com/problems/compress-string-lcci/
 * @date 2020-03-16 09:29
 * @tags 字符串
 * description
 * ```
  * 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。
 * 
 *  示例1:
 * 
 * 
 *  输入："aabcccccaaa"
 *  输出："a2b1c5a3"
 * 
 * 
 *  示例2:
 * 
 * 
 *  输入："abbccd"
 *  输出："abbccd"
 *  解释："abbccd"压缩后为"a1b2c2d1"，比原字符串长度更长。
 * 
 * 
 * 提示：
 * 
 * 
 * 字符串长度在[0, 50000]范围内。
 * 
 * 
 * ```
 */

/**
 * @param {string} S
 * @return {string}
 * 题解：遍历字符串，利用双指针，遍历找出相等的字符就continue，不等就记录压缩，慢指针移到当前位置，快指针后退一步继续计算
 * 
 * 68ms  86.67%
 * 38.8MB  100.00%
 */
var compressString = function(S) {
  let len = S.length
  let result = ''
  for(let i = 0, j = 0; j <= len; j++) {
    if(S[i] === S[j] && j !== len){
      continue
    }else{
      result += S[i] + '' + (j - i)
      if(j !== len){
        i = j
        j--
      }
    }
  }

  return len > result.length ? result : S
};
console.log(compressString('aabcccccaaa'))