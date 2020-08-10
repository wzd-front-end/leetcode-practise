/**
 * @name 在排序数组中查找元素的第一个和最后一个位置
 * @url https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @date 2020-08-10 11:00
 * @tags 数组、二分查找
 * description
 * ```
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let leftIndex = findTarget(nums, target, true)
  if (leftIndex === nums.length || nums[leftIndex] !== target) return [-1, -1]
  return [leftIndex, findTarget(nums, target, false) - 1]
};

function findTarget(nums, target, left) {
  let lo = 0
  let hi = nums.length
  while (lo < hi) {
    let mid = parseInt((lo + hi) / 2)
    if (nums[mid] > target || (left && nums[mid] === target)) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }
  return lo
}

