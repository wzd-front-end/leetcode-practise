/**
 * @name 全排列
 * @url https://leetcode-cn.com/problems/permutations/
 * @date 2020-04-28 08:58
 * @tags 回溯算法
 * description
 * ```
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = []
  backtracking(nums, 0, nums.length, [], ans)
  return ans

  function backtracking(nums, start, n, curr, ans) {
    if (start === n) {
      ans.push([...curr])
    }
    for (let i = 0; i < n; i++) {
      if (curr.indexOf(nums[i]) < 0) {
        curr.push(nums[i])
        backtracking(nums, start + 1, n, curr, ans)
        curr.pop()
      }
    }
  }
};
