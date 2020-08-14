/**
 * @name 搜索插入位置
 * @url https://leetcode-cn.com/problems/search-insert-position/
 * @date 2020-08-14 14:35
 * @tags 数组、二分查找
 * description
 * ```
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let ans =  nums.length
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if(nums[mid] >= target){
      ans = mid
      right = mid - 1
    } else if(nums[mid] < target){
      left = mid + 1
    }
  }
  return left
};
