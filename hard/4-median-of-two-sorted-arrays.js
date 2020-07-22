/**
 * @name 寻找两个有序数组的中位数
 * @url https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
 * @date 2020-03-10 14:36
 * @tags 数组、二分查找、分治算法
 * description
 * ```
  * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 * ```
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 题解：采用分治的方法，实际求得就是两个数组中第k大的数字
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let k = parseInt((m + n)/2)

  if((m + n) % 2 === 1) {
    return findKth(nums1, 0, m - 1, nums2, 0, n -1, k + 1)
  } else {
    return (findKth(nums1, 0, m - 1, nums2, 0, n -1, k) + findKth(nums1, 0, m - 1, nums2, 0, n -1, k + 1)) / 2.0
  }

  function findKth(nums1, l1, h1, nums2, l2, h2, k) {
    let m = h1 - l1 + 1
    let n = h2 - l2 + 1
    if(m > n){
      return findKth(nums2, l2, h2, nums1, l1, h1, k)
    }

    if(m === 0) {
      return nums2[l2 + k - 1]
    }

    if(k === 1) {
      return Math.min(nums1[l1], nums2[l2])
    }

    let na = Math.min(parseInt(k/2), m)
    let nb = k - na
    let va = nums1[l1 + na - 1]
    let vb = nums2[l2 + nb - 1]
    if(va === vb){
      return va
    } else if(va > vb){
      return findKth(nums1, l1, l1 + na - 1, nums2, l2 + nb, h2, k - nb)
    } else{
      return findKth(nums1, l1 + na, h1, nums2, l2, l2 + nb - 1, k - na)
    }

  }
};
console.log(findMedianSortedArrays([1, 6], [2, 3, 4, 5, 7, 8, 9]))
