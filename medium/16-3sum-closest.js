/**
 * @name 最接近的三数之和
 * @url https://leetcode-cn.com/problems/3sum-closest/
 * @date 2020-04-03 09:31
 * @tags 数组、双指针
 * description
 * ```
  * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 80ms  67.89%
 * 34.8MB  100.00%
 */
var threeSumClosest = function(nums, target) {
  let n = nums.length
  if(n < 3) return 

  let res = 0
  let min = Infinity

  nums.sort((a, b) => a -b)

  for(let i = 0; i < n; i++){
    if(i > 0 && nums[i] === nums[i - 1]) continue

    let L = i + 1
    let R = n - 1

    while(L < R) {
      let temp = nums[i] + nums[L] + nums[R]
      if(temp === target) {
        return temp
      } else if(temp > target){
        R--
      } else if(temp < target) {
        L++
      }
      if(Math.abs(temp - target) < min){
        min = Math.abs(temp - target)
        res = temp
      }

    }
  }
  return res
};