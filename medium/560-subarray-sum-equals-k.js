/**
 * @name 和为K的子数组
 * @url https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * @date 2020-05-15 09:20
 * @tags 数组、哈希表
 * description
 * ```
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 *
 * 示例 1 :
 *
 *
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 *
 *
 * 说明 :
 *
 *
 *  数组的长度为 [1, 20,000]。
 *  数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 528ms 12.95%
 * 36.3MB 100.100%
 */
var subarraySum = function (nums, k) {
  let count = 0
  for (let start = 0; start < nums.length; ++start) {
    let sum = 0
    for (let end = start; end >= 0; --end) {
      sum += nums[end]
      if (sum === k) {
        count++
      }
    }
  }
  return count
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 528ms 76.70%
 * 36.3MB 100.100%
 * 题解：通过哈希表的方式，记录前面累加后的所有值的可能，遍历一遍的时候，如果哈希表中已经有该累加值
 * 则将值+1，否则，初始化值为1，每次遍历的时候，如果哈希表中存在累加值-k的值存在的情况，则将对应的数量加上count，初始化的时候，设置mp.set(0, 1)
 * 即当累计值为0时，有一种情况
 */
var subarraySum = function (nums, k) {
  const mp = new Map()
  mp.set(0, 1)
  let count = 0
  let pre = 0
  for (const x of nums) {
    pre += x
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count
}
