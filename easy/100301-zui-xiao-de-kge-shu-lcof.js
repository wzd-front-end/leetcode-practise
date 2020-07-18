/**
 * @name 最小的k个数
 * @url https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * @date 2020-03-20 09:24
 * @tags 堆、分治算法
 * description
 * ```
  * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 
 *  
 * 
 * 示例 1：
 * 
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 * 
 * 
 * 示例 2：
 * 
 * 输入：arr = [0,1,2,1], k = 1
 * 输出：[0]
 * 
 *  
 * 
 * 限制：
 * 
 * 
 * 	0 <= k <= arr.length <= 10000
 * 	0 <= arr[i] <= 10000
 * 
 * 
 * ```
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 题解：快排
 * 
 * 136ms 54.34%
 * 38.5MB 100.00%
 */
var getLeastNumbers = function(arr, k) {
  if(k === 0) return 0

  quickSort(arr, 0, (arr.length - 1))
  return arr.slice(0, k)

  function quickSort(arr, i, j) {
    if(i < j){
      let left = i
      let right = j
      let mid = Math.floor((left + right) / 2)
      let temp = arr[mid]
      arr[mid] = arr[left]
      arr[left] = temp

      let pivot = arr[left]

      while(i < j){
        // 从后往前找比基准值小的数
        while(arr[j] >= pivot && i < j){
          j--
        }
        if(i < j) arr[i++] = arr[j]
        // 从前往后找比基准值大的数
        while(arr[i] <= pivot && i < j){
          i++
        }
        if(i < j) arr[j--] = arr[i]
      }

      arr[i] = pivot
      quickSort(arr, left, i - 1)
      quickSort(arr, i + 1, right)
      return arr
    }
  }
};