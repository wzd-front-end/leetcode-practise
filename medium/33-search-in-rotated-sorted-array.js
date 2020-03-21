/**
 * @name 搜索旋转排序数组
 * @url https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @date 2020-03-20 18:28
 * @tags 数组、二分查找
 * description
 * ```
  * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * 
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 
 * 你可以假设数组中不存在重复的元素。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 示例 1:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 68ms  60.25%
 * 34.1MB  58.22%
 */
var search = function(nums, target) {
  return binarySearch(nums, target, 0, (nums.length - 1))
  function binarySearch(nums, target, low, high){
    if(low > high){
      return -1
    }
  
    let middle = low + Math.floor((high -low) / 2)
  
    if(target === nums[middle]){
      return middle
    }
  
    if(nums[low] <= nums[middle]){
      if(nums[low] <= target && target < nums[middle]){
        return binarySearch(nums, target, low, middle - 1)
      } 
      return binarySearch(nums, target, middle + 1, high)
    } else {
      if(nums[middle] < target && target <= nums[high]){
        return binarySearch(nums, target, middle + 1, high)
      }
      return binarySearch(nums, target, low, middle - 1)
    }
  }
};
