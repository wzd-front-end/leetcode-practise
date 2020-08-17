/**
 * @name 下一个排列
 * @url https://leetcode-cn.com/problems/next-permutation/
 * @date 2020-08-17 23:21
 * @tags 数组
 * description
 * ```
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须<a href="https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95" target="_blank">原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 &rarr; 1,3,2
 * 3,2,1 &rarr; 1,2,3
 * 1,1,5 &rarr; 1,5,1
 * 
 * ```
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  if(i >= 0){
    let j = nums.length - 1
    while(j >= 0 && nums[i] >= nums[j]) {
      j--
    }
    swap(nums, i, j)
  }
  reverser(nums, i + 1)
};
function reverser(nums, start){
  let i = start
  let j = nums.length -1
  while(i < j) {
    swap(nums, i, j)
    j--
    i++
  }
}
function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
