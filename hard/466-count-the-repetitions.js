/**
 * @name 统计重复个数
 * @url https://leetcode-cn.com/problems/count-the-repetitions/
 * @date 2020-04-22 00:39
 * @tags 动态规划
 * description
 * ```
 * 由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。例如，["abc",3]=&ldquo;abcabcabc&rdquo;。
 *
 * 如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。例如，根据定义，"abc" 可以从 &ldquo;abdbec&rdquo; 获得，但不能从 &ldquo;acbbe&rdquo; 获得。
 *
 * 现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）和两个整数 0 &le; n1 &le; 106 和 1 &le; n2 &le; 106。现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。
 *
 * 请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。
 *
 *
 *
 * 示例：
 *
 * 输入：
 * s1 ="acb",n1 = 4
 * s2 ="ab",n2 = 2
 *
 * 返回：
 * 2
 *
 *
 * ```
 */

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 * 72ms  100%
 * 36.1MB  100%
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  if (n1 === 0) return 0
  let s1cnt = 0
  let index = 0
  let s2cnt = 0
  let recall = {}
  let pre_loop = []
  let in_loop = []

  // eslint-disable-next-line no-constant-condition
  while (true) {
    s1cnt += 1
    for (let val of s1) {
      if (val === s2[index]) {
        index++
        if (index === s2.length) {
          s2cnt += 1
          index = 0
        }
      }
    }

    if (s1cnt === n1) return parseInt(s2cnt / n2)

    if (recall[index]) {
      let [s1cnt_pre, s2cnt_pre] = recall[index]
      pre_loop = [s1cnt_pre, s2cnt_pre]
      in_loop = [(s1cnt - s1cnt_pre), (s2cnt - s2cnt_pre)]
      break
    } else {
      recall[index] = [s1cnt, s2cnt]
    }
  }

  let ans = pre_loop[1] + parseInt((n1 - pre_loop[0]) / (in_loop[0])) * in_loop[1]
  let rest = (n1 - pre_loop[0]) % in_loop[0]

  for (let i = 0; i < rest; i++) {
    for (let val of s1) {
      if (val === s2[index]) {
        index++
        if (index === s2.length) {
          ans += 1
          index = 0
        }
      }
    }
  }

  return parseInt(ans / n2)
};