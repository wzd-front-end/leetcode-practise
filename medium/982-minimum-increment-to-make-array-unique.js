/**
 * @name 使数组唯一的最小增量
 * @url https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/
 * @date 2020-03-22 10:52
 * @tags 数组
 * description
 * ```
  * 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
 * 
 * 返回使 A 中的每个值都是唯一的最少操作次数。
 * 
 * 示例 1:
 * 
 * 输入：[1,2,2]
 * 输出：1
 * 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
 * 
 * 示例 2:
 * 
 * 输入：[3,2,1,2,1,7]
 * 输出：6
 * 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
 * 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
 * 
 * 
 * 提示：
 * 
 * 
 * 	0 <= A.length <= 40000
 * 	0 <= A[i] < 40000
 * 
 * 
 * ```
 */

/**
 * @param {number[]} A
 * @return {number}
 * 
 * 172ms  48.82%
 * 40.7MB  100.0%
 */
var minIncrementForUnique = function(A) {
  A.sort((a, b) => a - b)
  let ans = 0, taken = 0
  for(let i = 1;i < A.length; i++){
    if(A[i] === A[i - 1]){
      taken++
      ans -= A[i]
    } else {
      let give = Math.min(taken, A[i] - A[i - 1] - 1)
      ans += give * A[i - 1] + give * (give + 1) / 2
      taken -= give
    }
  }

  if(A.length > 0){
    ans += taken * (taken + 1) / 2 + A[A.length - 1] * taken
  }

  return ans
};
minIncrementForUnique([3,2,1,2,1,7])