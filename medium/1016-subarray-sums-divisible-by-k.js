/**
 * @name 和可被 K 整除的子数组
 * @url https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/
 * @date 2020-05-27 09:35
 * @tags 数组、哈希表
 * description
 * ```
 * 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
 *
 *
 *
 * 示例：
 *
 * 输入：A = [4,5,0,-2,-3,1], K = 5
 * 输出：7
 * 解释：
 * 有 7 个子数组满足其元素之和可被 K = 5 整除：
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 *
 *
 *
 *
 * 提示：
 *
 *
 *  1 <= A.length <= 30000
 *  -10000 <= A[i] <= 10000
 *  2 <= K <= 10000
 *
 *
 * ```
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 子数组的前缀和都可以表示为sum(i, j) = P[j] - P[i - 1]，所以sum(i, j) % K = (P[j] - p[i - 1]) % K
 * 由于需要整除，所以余数必须为0，即可得 (P[j] - p[i - 1]) % K = 0，由同余原理可以得到P[j] % K = p[i -1] % K
 * 即两个余数相等的情况下，可以被整除
 */
var subarraysDivByK = function (A, K) {
  let sum = 0
  let ans = 0
  let record = {
    0: 1
  }
  for (let val of A) {
    sum += val
    // 由于js取模的特性，当被除数是负数时取模结果为负数，需要纠正
    let modules = (sum % K + K) % K
    let same = record[modules] ? record[modules] : 0
    ans += same
    record[modules] = same + 1
  }
  return ans
};
