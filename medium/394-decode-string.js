/**
 * @name 字符串解码
 * @url https://leetcode-cn.com/problems/decode-string/
 * @date 2020-05-28 16:53
 * @tags 栈、深度优先搜索
 * description
 * ```
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 * 示例:
 *
 *
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 *
 *
 * ```
 */

/**
 * @param {string} s
 * @return {string}
 * 题解：利用栈的思想，将不等于]的所有字符推入栈中，当遇到[的时候，则开转码
 * 先取出字符串，直到[停止，再去除数字，然后使用new Array(num).fill(str).join().split('')和元素组进行合并，
 * 继续遍历，最后将数组转化为字符串即可
 */
var decodeString = function (s) {
  let stack = []
  for (let w of s) {
    if (w !== ']') {
      stack.push(w)
    } else {
      let str = ''
      let top = stack.pop()
      while (top !== '[') {
        str = top + str
        top = stack.pop()
      }
      top = ''
      while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
        top = stack.pop() + '' + top
      }
      stack = stack.concat(new Array(Number(top)).fill(str).join('').split(''))
    }
  }

  return stack.join('')
};
