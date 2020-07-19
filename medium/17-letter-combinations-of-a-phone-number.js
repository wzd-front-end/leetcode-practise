/**
 * @name 电话号码的字母组合
 * @url https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @date 2020-04-17 10:54
 * @tags 字符串、回溯算法
 * description
 * ```
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * <img src="https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png" style="width: 200px;">
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 * ```
 */

/**
 * @param {string} digits
 * @return {string[]}
 * 题解：回溯算法，准备好映射关系，将源数字字符串传入递归的
 */
var letterCombinations = function (digits) {
  if (digits === '') return []
  let ans = []
  let mapSource = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  backtracking(digits, 0, '', ans)
  return ans

  function backtracking(digits, currIndex, s, ans) {
    if (currIndex === digits.length) {
      ans.push(s)
      return
    }
    let currStr = mapSource[digits[currIndex]]
    for (let i = 0; i < currStr.length; i++) {
      s += currStr[i]
      backtracking(digits, currIndex + 1, s, ans)
      s = s.substring(0, s.length - 1)
    }
  }
};
