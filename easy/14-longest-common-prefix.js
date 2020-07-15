/**
 * @name 最长公共前缀
 * @url https://leetcode-cn.com/problems/longest-common-prefix/
 * @date 2020-03-19 09:28
 * @tags 字符串
 * description
 * ```
  * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 * ```
 */

/**
 * @param {string[]} strs
 * @return {string}
 * 题解：首先对数据数组的第一项进行遍历，然后遍历数据数组剩下项是否对应位置存在一致的字符或者i的值已经达到遍历项的长度，存在则继续遍历，否则截取输出·
 */
var longestCommonPrefix = function(strs) {
  if(strs === null || strs.length === 0) return ''
  for(let i = 0; i < strs[0].length; i++){
    let c = strs[0].charAt(i)
    for(let j = 1; j < strs.length; j++){
      if(i === strs[j].length || strs[j].charAt(i) !== c){
        return strs[0].substring(0, i)
      }
    }
  }  
  return strs[0]
};
console.log(longestCommonPrefix(['flower','flqw','fqight']))