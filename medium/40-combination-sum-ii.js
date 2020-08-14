/**
 * @name 组合总和 II
 * @url https://leetcode-cn.com/problems/combination-sum-ii/
 * @date 2020-08-14 11:35
 * @tags 数组、回溯算法
 * description
 * ```
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 说明：
 *
 *
 *  所有数字（包括目标数）都是正整数。
 *  解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 *   [1, 7],
 *   [1, 2, 5],
 *   [2, 6],
 *   [1, 1, 6]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 *   [1,2,2],
 *   [5]
 * ]
 *
 * ```
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let results = []
  candidates.sort((a, b) => a - b)
  backtracking(candidates, target, 0, [], results)
  return results

  function backtracking(candidates, target, start, solution, results) {
    if (target < 0) return
    if (target === 0) {
      results.push([...solution])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if(i > start && candidates[i] === candidates[i - 1]) continue
      solution.push(candidates[i])
      backtracking(candidates, (target - candidates[i]), i + 1, solution, results,)
      solution.pop()
    }
  }
};
