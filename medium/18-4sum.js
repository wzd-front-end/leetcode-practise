/**
 * @name 四数之和
 * @url https://leetcode-cn.com/problems/4sum/
 * @date 2020-04-08 13:44
 * @tags 数组、哈希表、双指针
 * description
 * ```
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 * 
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 题解：四数之和，做法类似三数之和，不过是先确定一个数，再进行三数之和的相加，不过要进行适当剪枝
 * 
 * 92ms  90.23%
 * 36.4MB  95.00%
 */
var fourSum = function (nums, target) {
  let n = nums.length
  if (n < 4) return []

  nums.sort((a, b) => a - b)
  let res = []

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if((nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) break
    if((nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3]) < target) continue
    
    for (let j = i + 1; j < n - 2; j++) {
      if (j > (i + 1) && nums[j] === nums[j - 1]) continue
      if((nums[i] + nums[j] + nums[j + 1] + nums[j + 2]) > target) break
      if((nums[i] + nums[j] + nums[n - 1] + nums[n - 2]) < target) continue
      

      let L = j + 1
      let R = n - 1
      while (L < R) {
        let temp = nums[i] + nums[j] + nums[L] + nums[R]
        if (temp === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]])
          while(L < R && nums[L] === nums[L + 1]) {L = L + 1}
          while(L < R && nums[R] === nums[R - 1]) {R = R - 1}
          L = L + 1
          R = R - 1
        } else if (temp > target) {
          R = R - 1
        } else if (temp < target) {
          L = L + 1
        }
      }
    }
  }
  return res
};