/**
 * @name 只出现一次的数字
 * @url https://leetcode-cn.com/problems/single-number/
 * @date 2020-05-14 09:27
 * @tags 位运算、哈希表
 * description
 * ```
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *
 * 输入: [2,2,1]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 *
 * ```
 */

/**
 * @param {number[]} nums
 * 题解：利用异或的特性，相同的数字会被抵消掉了，数字的异或是支持换位的即a^b^c = a^c^b
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0
  nums.forEach(n => {
    single ^= n
  })

  return single
};
