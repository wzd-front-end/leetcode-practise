/**
 * @name 实现 strStr()
 * @url https://leetcode-cn.com/problems/implement-strstr/
 * @date 2020-05-29 10:31
 * @tags 双指针、字符串
 * description
 * ```
  * 实现 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank">strStr() 函数。
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 *
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 *
 * 说明:
 *
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 <a href="https://baike.baidu.com/item/strstr/811469" target="_blank">strstr() 以及 Java的 <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)" target="_blank">indexOf() 定义相符。
 *
 * ```
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === '') return 0
  if(needle.length > haystack.length) return -1

  let j = 0
  let i = 0
  let n = haystack.length
  for(i = 0; i < n; i++){
    if(haystack[i] === needle[j]){
      j++
      if(j === needle.length) break
    }else{
      if(j !== 0){
        i = i - j
        j = 0
      }
    }
  }

  return j < needle.length ? -1 : i - j + 1
};
