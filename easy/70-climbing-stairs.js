/**
 * @name 爬楼梯
 * @url https://leetcode-cn.com/problems/climbing-stairs/
 * @date 2020-03-13 18:32
 * @tags 动态规划
 * description
 * ```
  * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 * ```
 */

/**
 * @param {number} n
 * @return {number}
 * 题解：动态规划斐波那契数列
 * 
 * 斐波那契数列
 * 60ms  78.56%
 * 33.8MB  63.66%
 */
var climbStairs = function(n) {
  let val = []
  if(n === 1 || n === 2){
    return n
  } else {
    val[1] = 1
    val[2] = 2
    for(let i = 3; i <= n; i++){
      val[i] = val[i - 1] + val[i - 2]
    }
    return val[n]
  }
};