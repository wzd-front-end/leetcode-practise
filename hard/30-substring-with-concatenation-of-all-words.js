/**
 * @name 串联所有单词的子串
 * @url https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * @date 2020-08-17 17:33
 * @tags 哈希表、双指针、字符串
 * description
 * ```
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 *   s = "barfoothefoobarman",
 *   words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 *
 *
 * 示例 2：
 *
 * 输入：
 *   s = "wordgoodgoodgoodbestword",
 *   words = ["word","good","best","word"]
 * 输出：[]
 *
 *
 * ```
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let res = []
  if (s === null || s.length === 0 || words === null || words.length === 0) return res
  let map = {}
  let one_word = words[0].length
  let word_num = words.length
  let all_len = one_word * word_num
  for (let word of words) {
    if (map[word]) {
      map[word] += 1
    } else {
      map[word] = 1
    }
  }

  for (let i = 0; i < one_word; i++) {
    let left = i, right = i, count = 0
    let tmp_map = {}
    while (right + one_word <= s.length) {
      let w = s.substring(right, right + one_word)
      right += one_word
      if (!map[w]) {
        count = 0
        left = right
        tmp_map = {}
      } else {
        tmp_map[w] ? (tmp_map[w] += 1) : (tmp_map[w] = 1)
        count++
        while (tmp_map[w] > map[w]) {

        }
      }
    }
  }
};
