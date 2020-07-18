/**
 * @name 圆圈中最后剩下的数字
 * @url https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * @date 2020-03-30 11:15
 * @tags 
 * description
 * ```
  * 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。
 * 
 * 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
 * 
 *  
 * 
 * 示例 1：
 * 
 * 输入: n = 5, m = 3
 * 输出: 3
 * 
 * 
 * 示例 2：
 * 
 * 输入: n = 10, m = 17
 * 输出: 2
 * 
 * 
 *  
 * 
 * 限制：
 * 
 * 
 * 	1 <= n <= 10^5
 * 	1 <= m <= 10^6
 * 
 * 
 * ```
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 约瑟夫环：设下一轮的最后结点编号为 p，那么当前一轮的最后结点为从被删除结点向后偏移 p+1 处的结点 
 * 递归实现
 * 爆栈
 * 题解：位置是从m%n + f(n - 1, m)
 */

var lastRemaining = function(n, m) {
  return f(n, m)
  function f(n, m){
    if(n === 1) return 0

    let p = f(n - 1, m)
    // ((m % n - 1) + p + 1) % n
    // (m % n - 1)为被删除节点的编号，因为取余数是根据第几个数来的，实际第一个数的编号为0，所以需要减1
    // p + 1为向后偏移的p + 1处节点
    // m % n 可以直接合成一次，效果一致
    // 简化写法
    return (m + p) % n
  }
};

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 约瑟夫环：设下一轮的最后结点编号为 p，那么当前一轮的最后结点为从被删除结点向后偏移 p+1 处的结点 
 * 迭代
 * 6ms  91.67%
 * 34.5MB  100%
 */

var lastRemaining = function(n, m) {
  let f = 0
  for(let i = 2; i !== n+1; i++){
    f = (m + f) % n
  }
  return f
};