/**
 * @name 交点
 * @url https://leetcode-cn.com/problems/intersection-lcci/
 * @date 2020-04-12 14:13
 * @tags 几何、数学
 * description
 * ```
  * 给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。
 * 
 * 要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。
 * 
 *  
 * 
 * 示例 1：
 * 
 * 输入：
 * line1 = {0, 0}, {1, 0}
 * line2 = {1, 1}, {0, -1}
 * 输出： {0.5, 0}
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * line1 = {0, 0}, {3, 3}
 * line2 = {1, 1}, {2, 2}
 * 输出： {1, 1}
 * 
 * 
 * 示例 3：
 * 
 * 输入：
 * line1 = {0, 0}, {1, 1}
 * line2 = {1, 0}, {2, 1}
 * 输出： {}，两条线段没有交点
 * 
 * 
 *  
 * 
 * 提示：
 * 
 * 
 * 	坐标绝对值不会超过 2^7
 * 	输入的坐标均是有效的二维坐标
 * 
 * 
 * ```
 */

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 * 
 * 60ms  80%
 * 33.6MB  100%
 */
var intersection = function(start1, end1, start2, end2) {
  let ans = []
  function inside(x1, y1, x2, y2, xk, yk) {
    return (x1 === x2 || (Math.min(x1, x2) <= xk && Math.max(x1, x2) >= xk)) && (y1 === y2 || (Math.min(y1, y2) <= yk && Math.max(y1, y2) >= yk))
  }

  function update(xk, yk) {
      
    if(ans.length === 0 || xk < ans[0] || (xk == ans[0] && yk < ans[1])){
      ans = [xk, yk]
    }
  }

  let x1 = start1[0], y1 = start1[1];
  let x2 = end1[0], y2 = end1[1];
  let x3 = start2[0], y3 = start2[1];
  let x4 = end2[0], y4 = end2[1];

  // 判断是否平行，斜率相同
  if((x4 - x3) * (y2 - y1) === (x2 - x1) * (y4 - y3)){
    // 若平行，则判断 (x3, y3) 是否在「直线」(x1, y1)~(x2, y2) 上
    if ((y2 - y1) * (x3 - x1) == (y3 - y1) * (x2 - x1)) {
      // 判断 (x3, y3) 是否在「线段」(x1, y1)~(x2, y2) 上
      if (inside(x1, y1, x2, y2, x3, y3)) {
        update(x3, y3);
      }
      // 判断 (x4, y4) 是否在「线段」(x1, y1)~(x2, y2) 上
      if (inside(x1, y1, x2, y2, x4, y4)) {
        update(x4, y4);
      }
      // 判断 (x1, y1) 是否在「线段」(x3, y3)~(x4, y4) 上
      if (inside(x3, y3, x4, y4, x1, y1)) {
        update(x1, y1);
      }
      // 判断 (x2, y2) 是否在「线段」(x3, y3)~(x4, y4) 上
      if (inside(x3, y3, x4, y4, x2, y2)) {
        update(x2, y2);
      }
    }
  } else {
    let t1 = (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) / ((x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1));
    let t2 = (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) / ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3));
          
    if(t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1){
      ans = [x1 + t1 * (x2 - x1), y1 + t1 * (y2 - y1)]
    }
  }
  return ans
};