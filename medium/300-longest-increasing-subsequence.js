/**
 * @name 最长上升子序列
 * @url https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @date 2020-03-13 11:17
 * @tags 二分查找、动态规划
 * description
 * ```
  * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 *
 * 示例:
 *
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 *
 * 说明:
 *
 *
 * 	可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 	你算法的时间复杂度应该为 O(n2) 。
 *
 *
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 方法一：递归执行，leetcode直接报超时
 * 方法二：增加cache缓存过程值，时间已经很大,由于递归得调用，使得程序运行对堆栈的消耗以及处理很慢
 *
 * 316ms  5.1%
 * 34.5MB  73.53%
 *
 */
// var lengthOfLIS = function(nums) {
//   if(nums.length <= 1){
//     return nums.length
//   }
//   let max = 0
//   let cache = {}
//   f(nums, nums.length)
//   return max

//   function f(nums, n){
//     if(cache[n]!==undefined) {
//       return cache[n]
//     }
//     if(n <= 1) {
//       return n
//     }
//     let result = 0
//     let maxEndingHere = 1

//     for(let i = 1; i < n; i++){
//       result = f(nums, i)

//       if(nums[i - 1] < nums[n - 1] && (result + 1) > maxEndingHere){
//         maxEndingHere = result + 1
//       }
//     }

//     if(max < maxEndingHere){
//       max = maxEndingHere
//     }
//     cache[n] = maxEndingHere
//     return maxEndingHere
//   }

// };
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 方法三：不使用递归，使用两次循环
 *
 * 80ms  64.85%
 * 34.9MB  49.41%
 * 题解：首先，生成一个缓存，用于存储每个节点的的最大上升子序列，默认值为1，然后遍历该长度
 * 二次循环遍历到当前值，判断j对应的值是否比i对应的值大，并且cache[i] < cache[j] + 1
 * 两者同时符合，则更新cache[i]，
 * 这样子就可以获取到每个节点对应的最长上升子序列，
 *
 */
var lengthOfLIS = function(nums) {
  let cache = []
  let i = 0
  let j = 0
  let max = 0
  let n = nums.length
  for(i = 0; i < n; i++) cache[i] = 1

  for(i = 0; i < n; i++) {
    for(j = 0; j < i; j++){
      if(nums[j] < nums[i] && cache[i] < (cache[j] + 1)){
        cache[i] = cache[j] + 1
      }
    }
    max = Math.max(max, cache[i])
  }
  return max
}
