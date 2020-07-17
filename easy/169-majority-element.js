/**
 * @name 多数元素
 * @url https://leetcode-cn.com/problems/majority-element/
 * @date 2020-03-13 10:27
 * @tags 位运算、数组、分治算法
 * description
 * ```
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 56ms  99.51%
 * 37.3MB  87.08%
 * 常规解法：；利用哈希表记录个数或者先用快排进行排序，然后再取中位数，则一定是众数
 * 投票算法：关键点，因为众数大于n/2，如果把众数记为1，非众数记为-1，则最后的结果一定是大于0
 * 分治法：通过二分法分别对左右进行处理，递归直到元素只有一个，左边的众数如果等于右边的众数，则返回结果，
 *        不然比较左右两边众数的个数，返回数量多的元素
 */
function quickSort(arr, i, j) {
  if (i < j) {
    let left = i
    let right = j
    let mid = left + Math.floor((right - left) / 2)
    let temp = arr[left]
    arr[left] = arr[mid]
    arr[mid] = temp

    let pivot = arr[left]
    while (i < j) {
      while (arr[j] >= pivot && i < j) j--
      if (i < j) arr[i++] = arr[j]
      while (arr[i] <= pivot && i < j) i++
      if (i < j) arr[j--] = arr[i]
    }
    arr[i] = pivot
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, j)
    return arr
  }
}

var majorityElement = function (nums) {
  let count = 0
  let candidate = null
  for (let num of nums) {
    if (count === 0) candidate = num
    count += (num === candidate) ? 1 : -1
  }
  return candidate
};
