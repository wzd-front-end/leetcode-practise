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
 * 题解：回溯想法，类似与求组合和，
 */
var permute = function (nums) {
  let ans = []
  let used = []
  nums.sort((a, b) => a - b)
  backtracking(nums, nums.length, [], ans)
  return ans

  function backtracking(nums, n, curr, ans) {
    if (curr.length === n) {
      ans.push([...curr])
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

      curr.push(nums[i])
      used[i] = true
      backtracking(nums, n, curr, ans)
      used[i] = false
      curr.pop()

    }
  }
};
