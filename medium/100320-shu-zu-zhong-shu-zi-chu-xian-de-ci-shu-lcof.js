/**
 * @name 数组中数字出现的次数
 * @url https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
 * @date 2020-04-29 11:47
 * @tags
 * description
 * ```
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums = [4,1,4,6]
 * 输出：[1,6] 或 [6,1]
 *
 *
 * 示例 2：
 *
 * 输入：nums = [1,2,10,4,1,4,3,3]
 * 输出：[2,10] 或 [10,2]
 *
 *
 *
 * 限制：
 *
 *
 *  2 <= nums <= 10000
 *
 *
 *
 *
 * ```
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let mapHash = {}
  let ans = []
  for (let i = 0, n = nums.length; i < n; i++) {
    if (mapHash[nums[i]]) {
      mapHash[nums[i]] = mapHash[nums[i]] + 1
    } else {
      mapHash[nums[i]] = 1
    }
  }
  let keys = Object.keys(mapHash)
  for (let j = 0, len = keys.length; j < len; j++) {
    if (mapHash[keys[j]] === 1) {
      ans.push(keys[j])
      if (ans.length === 2) {
        break
      }
    }
  }

  return ans
};
var singleNumber = function (nums) {
  let ret = 0
  for (let t of nums) {
    ret ^= t
  }
  let flag = 1
  while ((ret & flag) === 0) {
    flag <<= 1
  }
  let n = 0, m = 0
  for (let t of nums) {
    if ((t & flag) === 0) {
      n ^= t
    } else {
      m ^= t
    }
  }
  return [n, m]

}
