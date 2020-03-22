/**
 * @name 三数之和
 * @url https://leetcode-cn.com/problems/3sum/
 * @date 2020-03-21 23:09
 * @tags 数组、双指针
 * description
 * ```
  * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 *  
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 * 
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 188ms  74.78%
 * 46.8MB  65.53%
 */
var threeSum = function(nums) {
  let n = nums.length
  if(n < 3) return []

  nums.sort((a, b) => a- b)
  let res = []
  for(let i = 0; i < n; i++){
    if(nums[i] > 0) return res
    if(i > 0 && nums[i] === nums[i - 1]) continue

    let L = i + 1
    let R = n - 1

    while(L < R) {
      let temp = nums[i] + nums[L] + nums[R]
      if(temp === 0){
        res.push([nums[i], nums[L], nums[R]])
        while(L < R && nums[L] === nums[L + 1]) {L = L + 1}
        while(L < R && nums[R] === nums[R - 1]) {R = R - 1}
        L = L + 1
        R = R - 1

      } else if(temp > 0){
        R = R - 1
      } else if(temp < 0){
        L = L + 1
      }
    }
  }
  return res
};
threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])