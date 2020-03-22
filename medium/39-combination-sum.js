/**
 * @name 组合总和
 * @url https://leetcode-cn.com/problems/combination-sum/
 * @date 2020-03-22 21:58
 * @tags 数组、回溯算法
 * description
 * ```
  * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 
 * 
 * 	所有数字（包括 target）都是正整数。
 * 	解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 *   [7],
 *   [2,2,3]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 *   [2,2,2,2],
 *   [2,3,3],
 *   [3,5]
 * ]
 * 
 * ```
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 88ms  65.1%
 * 36.6MB  75.36%
 * 
 */
var combinationSum = function(candidates, target) {
  let results = []
  candidates.sort((a, b) => a - b)
  backtracking(candidates, target, 0, [], results)
  return results

  function backtracking(candidates, target, start, solution, results) {
    if(target < 0) return 
    if(target === 0){
      results.push([...solution])
      return
    }

    for(let i = start;i < candidates.length;i++){
      solution.push(candidates[i])
      backtracking(candidates, (target - candidates[i]), i, solution, results)
      solution.pop()
    }
  }
};