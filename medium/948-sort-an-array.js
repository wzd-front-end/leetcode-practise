/**
 * @name 排序数组
 * @url https://leetcode-cn.com/problems/sort-an-array/
 * @date 2020-03-31 17:33
 * @tags 
 * description
 * ```
 * 给你一个整数数组 nums，请你将该数组升序排列。
 * 
 *  
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 * 
 * 
 *  
 * 
 * 提示：
 * 
 * 
 * 	1 <= nums.length <= 50000
 * 	-50000 <= nums[i] <= 50000
 * 
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 108ms  90.11%
 * 40.6MB  84.46%
 */
var sortArray = function (nums) {
  if(nums.length <= 1) return nums
  return quickSort(nums, 0, nums.length - 1)

  function quickSort(arr, i, j) {
    if (i < j) {
      let left = i
      let right = j
      let mid = Math.floor((left + right) / 2)
      let temp = arr[left]
      arr[left] = arr[mid]
      arr[mid] = temp

      let pivot = arr[left]

      while (i < j) {
        while(i < j && arr[j] >= pivot){
          j--
        }
        if(i < j){
          arr[i++] = arr[j]
        }

        while(i < j && arr[i] <= pivot){
          i++
        }
        if(i < j){
          arr[j--] = arr[i]
        }
      }
      arr[i] = pivot
      quickSort(arr, left, i - 1)
      quickSort(arr, i + 1, right)
      return arr
    }
  }
};