/**
 * @name 最大子序和
 * @url https://leetcode-cn.com/problems/maximum-subarray/
 * @date 2020-05-06 09:04
 * @tags 数组、分治算法、动态规划
 * description
 * ```
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 题解：求最大和的子数组，实际就是考虑前面的要不要累加上去，累加上去之后，累加上去后是否比直接去当前元素大
 */
var maxSubArray = function (nums) {
  let pre = 0
  let maxAns = nums[0]

  nums.forEach(x => {
    pre = Math.max(pre + x, x)
    maxAns = Math.max(maxAns, pre)
  })
  return maxAns
};
/**
 * @param {number[]} nums
 * @return {number}
 * 分治解法
 */
// function Status(l,r,m,i) {
//   this.lSum = l
//   this.rSum = r
//   this.mSum = m
//   this.iSum = i
// }
//
// const pushUp = (l ,r) => {
//   const iSum = l.iSum + r.iSum
//   const lSum = Math.max(l.lSum, l.iSum + r.lSum)
//   const rSum = Math.max(r.rSum, r.iSum + l.rSum)
//   const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum)
//   return new Status(lSum, rSum, mSum, iSum);
// }
//
// const getInfo = (a, l ,r) => {
//   if(l === r) return new Status(a[l], a[l], a[l], a[l])
//   const m = (l + r) >> 1
//   const lSub = getInfo(a, l, m)
//   const rSub = getInfo(a, m + 1, r)
//   return pushUp(lSub, rSub)
// }
//
// var maxSubArray = function (nums) {
//   return getInfo(nums, 0 ,nums.length - 1).mSum
// }
