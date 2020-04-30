/**
 * @name 快乐数
 * @url https://leetcode-cn.com/problems/happy-number/
 * @date 2020-04-30 09:42
 * @tags 哈希表、数学
 * description
 * ```
 * 编写一个算法来判断一个数 n 是不是快乐数。
 *
 * 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 *
 * 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 *
 *
 *
 * 示例：
 *
 * 输入：19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 *
 * ```
 */

/**
 * @param {number} n
 * @return {boolean}
 *
 * 60ms 98.97%
 * 35.5MB 60.00%
 */
var isHappy = function (n) {
  function getNext(n) {
    let totalSum = 0
    while (n) {
      totalSum += Math.pow((n % 10), 2)
      n = parseInt(n / 10)
    }
    return totalSum
  }

  let slowRunner = n
  let fastRunner = getNext(n)
  while (fastRunner !== 1 && slowRunner !== fastRunner) {
    slowRunner = getNext(slowRunner)
    fastRunner = getNext(getNext(fastRunner))
  }

  return fastRunner === 1
};
/**
 * @param {number} n
 * @return {boolean}
 *
 * 88ms 25%
 * 36.5Mb 20%
 */
// var isHappy = function (n) {
//   let hashMap = {}
//
//   while (!hashMap[n]) {
//     if(n === 1) return true
//     hashMap[n] = 1
//     let temp = 0
//     while (n) {
//       temp += Math.pow((n % 10), 2)
//       n = parseInt(n / 10)
//     }
//     n = temp
//   }
//
//   return false
// };
